"""Tests for POST /api/submissions/{type} whitelisting + admin listing."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # fallback read from frontend/.env
    with open("/app/frontend/.env") as f:
        for line in f:
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip().rstrip("/")

ADMIN_EMAIL = "admin@huniaja.com"
ADMIN_PASS = "huniaja2026"


@pytest.fixture(scope="module")
def admin_token():
    r = requests.post(f"{BASE_URL}/api/admin/login",
                      json={"email": ADMIN_EMAIL, "password": ADMIN_PASS}, timeout=15)
    assert r.status_code == 200, f"Admin login failed: {r.status_code} {r.text}"
    return r.json()["token"]


@pytest.mark.parametrize("sub_type", ["konsultasi", "karir", "kontak", "brosur"])
def test_create_submission_accepted(sub_type):
    payload = {"name": f"TEST_{sub_type}", "phone": "081234567890", "note": "pytest"}
    r = requests.post(f"{BASE_URL}/api/submissions/{sub_type}", json=payload, timeout=15)
    assert r.status_code == 200, f"{sub_type} -> {r.status_code} {r.text}"
    data = r.json()
    assert data.get("ok") is True
    assert isinstance(data.get("id"), str) and len(data["id"]) > 0


def test_create_submission_rejects_unknown_type():
    r = requests.post(f"{BASE_URL}/api/submissions/other_random",
                      json={"x": 1}, timeout=15)
    assert r.status_code == 400


def test_admin_list_konsultasi_contains_created(admin_token):
    marker = "TEST_konsultasi_persist"
    cr = requests.post(f"{BASE_URL}/api/submissions/konsultasi",
                       json={"name": marker, "phone": "0811"}, timeout=15)
    assert cr.status_code == 200
    sid = cr.json()["id"]

    r = requests.get(f"{BASE_URL}/api/admin/submissions",
                     params={"type": "konsultasi"},
                     headers={"Authorization": f"Bearer {admin_token}"}, timeout=15)
    assert r.status_code == 200, r.text
    items = r.json()
    assert isinstance(items, list)
    found = [i for i in items if i.get("id") == sid]
    assert found, f"created submission {sid} not returned by admin list"
    rec = found[0]
    assert rec["type"] == "konsultasi"
    assert rec["payload"]["name"] == marker
