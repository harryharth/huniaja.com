"""Admin login end-to-end backend tests (iteration 9)."""
import os
import time
import subprocess
import pytest
import requests
from motor.motor_asyncio import AsyncIOMotorClient
import asyncio

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # Fallback: read from frontend .env
    with open("/app/frontend/.env") as f:
        for line in f:
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip().rstrip("/")

API = f"{BASE_URL}/api"
ADMIN_EMAIL = "admin@huniaja.com"
ADMIN_PASSWORD = "huniaja2026"


@pytest.fixture(scope="module")
def token():
    r = requests.post(f"{API}/admin/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD}, timeout=15)
    assert r.status_code == 200, f"Login failed: {r.status_code} {r.text}"
    data = r.json()
    assert "token" in data and isinstance(data["token"], str) and len(data["token"]) > 10
    return data["token"]


def test_login_success():
    r = requests.post(f"{API}/admin/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD}, timeout=15)
    assert r.status_code == 200
    assert "token" in r.json()


def test_login_email_normalization():
    r = requests.post(f"{API}/admin/login", json={"email": "ADMIN@Huniaja.com  ", "password": ADMIN_PASSWORD}, timeout=15)
    # Backend normalizes .strip().lower(). But frontend also trims/lowercases; here we pass raw upper+space.
    assert r.status_code == 200, f"Expected normalized email to log in, got {r.status_code} {r.text}"
    assert "token" in r.json()


def test_login_wrong_password():
    r = requests.post(f"{API}/admin/login", json={"email": ADMIN_EMAIL, "password": "wrongpass"}, timeout=15)
    assert r.status_code == 401
    body = r.json()
    assert "detail" in body


def test_login_missing_password():
    r = requests.post(f"{API}/admin/login", json={"email": ADMIN_EMAIL, "password": ""}, timeout=15)
    assert r.status_code == 401


def test_me_endpoint_with_token(token):
    r = requests.get(f"{API}/admin/me", headers={"Authorization": f"Bearer {token}"}, timeout=15)
    assert r.status_code == 200
    assert r.json().get("admin") is True


def test_me_endpoint_bogus_token():
    r = requests.get(f"{API}/admin/me", headers={"Authorization": "Bearer bogus"}, timeout=15)
    assert r.status_code == 401


def test_stats_endpoint(token):
    r = requests.get(f"{API}/admin/stats", headers={"Authorization": f"Bearer {token}"}, timeout=15)
    assert r.status_code == 200
    data = r.json()
    for key in ("properties", "articles", "banners", "submissions", "users"):
        assert key in data


def test_token_persists_across_backend_restart(token):
    # Verify token works pre-restart
    r = requests.get(f"{API}/admin/me", headers={"Authorization": f"Bearer {token}"}, timeout=15)
    assert r.status_code == 200
    # Restart backend
    subprocess.run(["sudo", "supervisorctl", "restart", "backend"], check=True, capture_output=True)
    time.sleep(5)
    # Poll until backend responds
    for _ in range(20):
        try:
            h = requests.get(f"{API}/admin/me", headers={"Authorization": f"Bearer {token}"}, timeout=5)
            if h.status_code in (200, 401):
                break
        except Exception:
            pass
        time.sleep(1)
    r = requests.get(f"{API}/admin/me", headers={"Authorization": f"Bearer {token}"}, timeout=15)
    assert r.status_code == 200, f"Token did not persist across restart: {r.status_code} {r.text}"
    r2 = requests.get(f"{API}/admin/stats", headers={"Authorization": f"Bearer {token}"}, timeout=15)
    assert r2.status_code == 200


def test_admin_user_seeded_with_bcrypt():
    """Directly query Mongo to verify admin_users has bcrypt password_hash and no raw password field."""
    mongo_url = None
    db_name = None
    with open("/app/backend/.env") as f:
        for line in f:
            if line.startswith("MONGO_URL="):
                mongo_url = line.split("=", 1)[1].strip().strip('"')
            elif line.startswith("DB_NAME="):
                db_name = line.split("=", 1)[1].strip().strip('"')
    assert mongo_url and db_name

    async def _check():
        c = AsyncIOMotorClient(mongo_url)
        doc = await c[db_name].admin_users.find_one({"email": ADMIN_EMAIL})
        c.close()
        return doc

    doc = asyncio.run(_check())
    assert doc is not None, "admin_users seed missing"
    ph = doc.get("password_hash", "")
    assert ph.startswith("$2b$") or ph.startswith("$2a$"), f"password_hash not bcrypt: {ph[:10]!r}"
    assert "password" not in doc, "Raw 'password' field must not exist"
