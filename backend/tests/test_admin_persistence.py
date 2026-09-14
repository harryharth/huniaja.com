"""Tests for admin login persistence, seed idempotency, article CRUD, password login."""
import os
import time
import uuid
import subprocess
import pytest
import requests
from pymongo import MongoClient

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # fallback: read from frontend/.env
    with open("/app/frontend/.env") as f:
        for line in f:
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip().rstrip("/")

MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.environ.get("DB_NAME", "test_database")
ADMIN_EMAIL = "admin@huniaja.com"
ADMIN_PW = "huniaja2026"


@pytest.fixture(scope="module")
def db():
    with open("/app/backend/.env") as f:
        env = dict(line.strip().split("=", 1) for line in f if "=" in line and not line.startswith("#"))
    mu = env["MONGO_URL"].strip().strip('"').strip("'")
    dn = env["DB_NAME"].strip().strip('"').strip("'")
    return MongoClient(mu)[dn]


@pytest.fixture(scope="module")
def admin_token():
    r = requests.post(f"{BASE_URL}/api/admin/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PW}, timeout=15)
    assert r.status_code == 200, f"admin login failed: {r.status_code} {r.text}"
    return r.json()["token"]


# ==== SEED IDEMPOTENCY ====
def test_admin_seeded_in_mongo(db):
    doc = db.admin_users.find_one({"email": ADMIN_EMAIL})
    assert doc is not None, "admin_users record missing"
    assert doc["password_hash"].startswith("$2b$"), f"bad hash: {doc['password_hash'][:10]}"


# ==== LOGIN ====
def test_admin_login_success(admin_token):
    assert len(admin_token) > 20


def test_admin_login_wrong_password():
    r = requests.post(f"{BASE_URL}/api/admin/login", json={"email": ADMIN_EMAIL, "password": "WRONG"}, timeout=10)
    assert r.status_code == 401
    body = r.json()
    assert "salah" in str(body).lower()


def test_admin_me_with_token(admin_token):
    r = requests.get(f"{BASE_URL}/api/admin/me", headers={"Authorization": f"Bearer {admin_token}"}, timeout=10)
    assert r.status_code == 200
    assert r.json().get("admin") is True


# ==== SESSION PERSISTS ACROSS RESTART ====
def test_admin_token_survives_backend_restart(admin_token):
    # Verify token works
    r1 = requests.get(f"{BASE_URL}/api/admin/me", headers={"Authorization": f"Bearer {admin_token}"}, timeout=10)
    assert r1.status_code == 200

    # Restart backend
    subprocess.run(["sudo", "supervisorctl", "restart", "backend"], check=True, capture_output=True)
    # Wait for backend to come back
    for _ in range(30):
        try:
            hc = requests.get(f"{BASE_URL}/api/", timeout=3)
            if hc.status_code == 200:
                break
        except Exception:
            pass
        time.sleep(1)
    else:
        pytest.fail("backend did not come back after restart")

    # Old token still valid
    r2 = requests.get(f"{BASE_URL}/api/admin/me", headers={"Authorization": f"Bearer {admin_token}"}, timeout=10)
    assert r2.status_code == 200, f"Token did NOT persist across restart: {r2.status_code} {r2.text}"


# ==== GOOGLE AUTH UNCHANGED ====
def test_auth_me_no_cookie_returns_401():
    r = requests.get(f"{BASE_URL}/api/auth/me", timeout=10)
    assert r.status_code == 401


# ==== USER CREATION + PASSWORD LOGIN ====
TEST_USER_EMAIL = f"TEST_buyer_{uuid.uuid4().hex[:6]}@huniaja.com"
TEST_USER_PW = "buyertest1"


def test_admin_create_user(admin_token):
    r = requests.post(
        f"{BASE_URL}/api/admin/users",
        headers={"Authorization": f"Bearer {admin_token}"},
        json={"email": TEST_USER_EMAIL, "password": TEST_USER_PW, "name": "QA Buyer", "role": "user"},
        timeout=10,
    )
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["ok"] is True
    assert data["email"] == TEST_USER_EMAIL.lower()


def test_password_login_sets_cookie_and_me():
    s = requests.Session()
    r = s.post(f"{BASE_URL}/api/auth/login", json={"email": TEST_USER_EMAIL, "password": TEST_USER_PW}, timeout=10)
    assert r.status_code == 200, r.text
    assert r.json().get("ok") is True
    # Cookie was set
    assert "session_token" in s.cookies, f"cookie missing. Got: {s.cookies}"

    # GET /auth/me with the cookie
    me = s.get(f"{BASE_URL}/api/auth/me", timeout=10)
    assert me.status_code == 200
    body = me.json()
    assert body["email"] == TEST_USER_EMAIL.lower()


def test_password_login_wrong_password():
    r = requests.post(f"{BASE_URL}/api/auth/login", json={"email": TEST_USER_EMAIL, "password": "wrong"}, timeout=10)
    assert r.status_code == 401


# ==== ARTICLE CRUD ====
_ARTICLE_STATE = {}


def test_admin_create_article(admin_token):
    slug = f"qa-cms-verify-{uuid.uuid4().hex[:6]}"
    payload = {
        "slug": slug,
        "title": "QA CMS Verify",
        "excerpt": "Excerpt QA",
        "category": "Panduan",
        "date": "2026-01-15",
        "read": "3 min",
        "image": "",
        "tags": ["qa"],
        "content": [{"type": "paragraph", "text": "hello"}],
        "status": "published",
        "sort_order": 0,
    }
    r = requests.post(
        f"{BASE_URL}/api/admin/articles",
        headers={"Authorization": f"Bearer {admin_token}"},
        json=payload,
        timeout=10,
    )
    assert r.status_code == 200, r.text
    body = r.json()
    assert body["slug"] == slug
    assert body["title"] == "QA CMS Verify"
    assert "id" in body
    _ARTICLE_STATE["id"] = body["id"]
    _ARTICLE_STATE["slug"] = slug


def test_public_articles_includes_new_article():
    slug = _ARTICLE_STATE["slug"]
    r = requests.get(f"{BASE_URL}/api/articles", timeout=10)
    assert r.status_code == 200
    slugs = [a["slug"] for a in r.json()]
    assert slug in slugs


def test_admin_update_article(admin_token):
    aid = _ARTICLE_STATE["id"]
    payload = {
        "slug": _ARTICLE_STATE["slug"],
        "title": "QA CMS Verify Updated",
        "excerpt": "Excerpt QA 2",
        "category": "Panduan",
        "date": "2026-01-15",
        "read": "4 min",
        "image": "",
        "tags": ["qa"],
        "content": [],
        "status": "published",
        "sort_order": 0,
    }
    r = requests.put(
        f"{BASE_URL}/api/admin/articles/{aid}",
        headers={"Authorization": f"Bearer {admin_token}"},
        json=payload,
        timeout=10,
    )
    assert r.status_code == 200
    assert r.json()["title"] == "QA CMS Verify Updated"


def test_admin_delete_article(admin_token):
    aid = _ARTICLE_STATE["id"]
    r = requests.delete(
        f"{BASE_URL}/api/admin/articles/{aid}",
        headers={"Authorization": f"Bearer {admin_token}"},
        timeout=10,
    )
    assert r.status_code == 200

    slug = _ARTICLE_STATE["slug"]
    listing = requests.get(f"{BASE_URL}/api/articles", timeout=10).json()
    assert slug not in [a["slug"] for a in listing]


# ==== CLEANUP ====
def test_cleanup_delete_test_user(admin_token, db):
    doc = db.users.find_one({"email": TEST_USER_EMAIL.lower()})
    if doc:
        requests.delete(
            f"{BASE_URL}/api/admin/users/{doc['user_id']}",
            headers={"Authorization": f"Bearer {admin_token}"},
            timeout=10,
        )
