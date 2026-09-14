"""Backend tests for Emergent Google Auth + user favorites/submissions."""
import os
import uuid
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://branding-suite-6.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"

# Seeded via mongosh/script (see conftest / test setup). We import env vars.
SESSION_TOKEN = os.environ.get("TEST_SESSION_TOKEN", "test_tok_82f1638fc38843da")
TEST_USER_ID = os.environ.get("TEST_USER_ID", "user_bdd750deade8")
TEST_EMAIL = os.environ.get("TEST_EMAIL", "qa.user_bdd750deade8@huniaja.test")

ADMIN_EMAIL = "admin@huniaja.com"
ADMIN_PASSWORD = "huniaja2026"


@pytest.fixture(scope="module")
def bearer():
    return {"Authorization": f"Bearer {SESSION_TOKEN}"}


@pytest.fixture(scope="module")
def admin_token():
    r = requests.post(f"{API}/admin/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD}, timeout=15)
    assert r.status_code == 200, r.text
    return r.json()["token"]


# ---- Auth --------------------------------------------------------------------

def test_auth_session_invalid():
    r = requests.post(f"{API}/auth/session", json={"session_id": "invalid_" + uuid.uuid4().hex}, timeout=20)
    assert r.status_code == 401, r.text


def test_auth_me_no_creds():
    r = requests.get(f"{API}/auth/me", timeout=15)
    assert r.status_code == 401


def test_auth_me_with_bearer(bearer):
    r = requests.get(f"{API}/auth/me", headers=bearer, timeout=15)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["user_id"] == TEST_USER_ID
    assert data["email"] == TEST_EMAIL
    assert data["name"] == "QA Tester"
    assert "picture" in data


# ---- Favorites ---------------------------------------------------------------

def _get_a_property_id():
    r = requests.get(f"{API}/properties", timeout=15)
    assert r.status_code == 200, r.text
    items = r.json()
    if items:
        return items[0]["id"]
    return None


def test_favorites_toggle_and_list(bearer):
    pid = _get_a_property_id() or "list-0"
    # ensure clean state - toggle first
    r1 = requests.post(f"{API}/user/favorites/{pid}", headers=bearer, timeout=15)
    assert r1.status_code == 200
    first = r1.json()
    assert first["ok"] is True
    assert isinstance(first["favorited"], bool)

    r2 = requests.post(f"{API}/user/favorites/{pid}", headers=bearer, timeout=15)
    assert r2.status_code == 200
    second = r2.json()
    assert second["favorited"] != first["favorited"], "Toggle must invert state"

    # Add it back so listing has content
    if not second["favorited"]:
        r3 = requests.post(f"{API}/user/favorites/{pid}", headers=bearer, timeout=15)
        assert r3.json()["favorited"] is True

    # List
    lr = requests.get(f"{API}/user/favorites", headers=bearer, timeout=15)
    assert lr.status_code == 200
    lst = lr.json()
    assert isinstance(lst, list)
    ids = [x.get("id") for x in lst]
    assert pid in ids


def test_favorites_no_auth():
    r = requests.get(f"{API}/user/favorites", timeout=15)
    assert r.status_code == 401


# ---- Submissions -------------------------------------------------------------

def test_kontak_public_no_auth():
    payload = {"name": "TEST_UnauthUser", "email": "anon@test.local", "message": "hi"}
    r = requests.post(f"{API}/submissions/kontak", json=payload, timeout=15)
    assert r.status_code == 200
    body = r.json()
    assert body["ok"] is True
    assert "id" in body


def test_kontak_with_session_cookie_records_user_id(admin_token):
    """Submit kontak with session cookie -> record must have user_id populated."""
    session = requests.Session()
    session.cookies.set("session_token", SESSION_TOKEN)
    payload = {"name": "TEST_SessionUser", "email": TEST_EMAIL, "message": "linked"}
    r = session.post(f"{API}/submissions/kontak", json=payload, timeout=15)
    assert r.status_code == 200
    sid = r.json()["id"]

    # Verify via admin
    ar = requests.get(
        f"{API}/admin/submissions?type=kontak",
        headers={"Authorization": f"Bearer {admin_token}"},
        timeout=15,
    )
    assert ar.status_code == 200
    items = ar.json()
    found = next((x for x in items if x.get("id") == sid), None)
    assert found is not None, "Submitted record not found"
    assert found.get("user_id") == TEST_USER_ID, f"user_id not stamped: {found}"


def test_user_submissions_returns_own(bearer):
    # Post a konsultasi that references our email so /user/submissions returns it
    payload = {"name": "TEST_Konsul", "email": TEST_EMAIL, "phone": "081234"}
    r = requests.post(f"{API}/submissions/konsultasi", json=payload, timeout=15)
    assert r.status_code == 200

    lr = requests.get(f"{API}/user/submissions", headers=bearer, timeout=15)
    assert lr.status_code == 200
    items = lr.json()
    assert isinstance(items, list)
    # Match by payload email
    matches = [x for x in items if x.get("payload", {}).get("email") == TEST_EMAIL]
    assert len(matches) >= 1


# ---- Logout ------------------------------------------------------------------

def test_logout_invalidates_session():
    # Create a fresh session so we don't clobber the module-level one for other tests
    import asyncio
    from datetime import datetime, timezone, timedelta
    from motor.motor_asyncio import AsyncIOMotorClient

    async def seed():
        c = AsyncIOMotorClient(os.environ.get("MONGO_URL", "mongodb://localhost:27017"))
        db = c[os.environ.get("DB_NAME", "test_database")]
        uid = f"user_{uuid.uuid4().hex[:12]}"
        tok = f"test_tok_{uuid.uuid4().hex[:16]}"
        await db.users.insert_one({"user_id": uid, "email": f"qa.{uid}@huniaja.test", "name": "Logout QA", "picture": "", "created_at": datetime.now(timezone.utc).isoformat()})
        await db.user_sessions.insert_one({"user_id": uid, "session_token": tok, "expires_at": datetime.now(timezone.utc) + timedelta(days=7), "created_at": datetime.now(timezone.utc)})
        return tok

    tok = asyncio.get_event_loop().run_until_complete(seed()) if False else asyncio.new_event_loop().run_until_complete(seed())

    hdr = {"Authorization": f"Bearer {tok}"}
    r = requests.get(f"{API}/auth/me", headers=hdr, timeout=15)
    assert r.status_code == 200

    lo = requests.post(f"{API}/auth/logout", headers=hdr, timeout=15)
    assert lo.status_code == 200
    assert lo.json().get("ok") is True

    # Now /auth/me must return 401
    r2 = requests.get(f"{API}/auth/me", headers=hdr, timeout=15)
    assert r2.status_code == 401
