"""
Public user routes (Emergent Google Auth + email/password login).

- POST /api/auth/session       Exchange session_id (from URL fragment) for a session_token
                               cookie via Emergent Auth's /oauth/session-data endpoint.
- POST /api/auth/login         Email + password login (for accounts created by admin).
- GET  /api/auth/me            Return current user (from cookie or Bearer token).
- POST /api/auth/logout        Clear session cookie & delete server-side session.

- GET  /api/user/favorites               List current user's favorite property ids.
- POST /api/user/favorites/{property_id} Toggle a property in favorites.
- GET  /api/user/submissions             List submissions (konsultasi/karir/kontak/brosur)
                                         previously submitted from the user's email.
"""
import secrets
from datetime import datetime, timezone, timedelta
from fastapi import APIRouter, HTTPException, Request, Response, Header, Depends
from pydantic import BaseModel, EmailStr
from typing import Optional
import uuid
import httpx
import bcrypt


EMERGENT_SESSION_URL = (
    "https://demobackend.emergentagent.com/auth/v1/env/oauth/session-data"
)
SESSION_COOKIE_NAME = "session_token"
SESSION_TTL_DAYS = 7


def now_utc():
    return datetime.now(timezone.utc)


def _extract_session_token(request: Request, authorization: Optional[str]) -> Optional[str]:
    """Prefer httpOnly cookie; fall back to Authorization: Bearer."""
    token = request.cookies.get(SESSION_COOKIE_NAME)
    if token:
        return token
    if authorization and authorization.lower().startswith("bearer "):
        return authorization.split(" ", 1)[1].strip()
    return None


def create_user_router(db):
    router = APIRouter()

    # ---------- Auth ----------------------------------------------------------

    class SessionExchangeBody(BaseModel):
        session_id: str

    async def _current_user(request: Request, authorization: Optional[str] = Header(None)):
        token = _extract_session_token(request, authorization)
        if not token:
            raise HTTPException(status_code=401, detail="Not authenticated")
        session = await db.user_sessions.find_one({"session_token": token}, {"_id": 0})
        if not session:
            raise HTTPException(status_code=401, detail="Session invalid")
        expires_at = session.get("expires_at")
        if isinstance(expires_at, str):
            expires_at = datetime.fromisoformat(expires_at)
        if expires_at and expires_at.tzinfo is None:
            expires_at = expires_at.replace(tzinfo=timezone.utc)
        if expires_at and expires_at < now_utc():
            raise HTTPException(status_code=401, detail="Session expired")
        user = await db.users.find_one({"user_id": session["user_id"]}, {"_id": 0})
        if not user:
            raise HTTPException(status_code=401, detail="User not found")
        return user

    class LoginBody(BaseModel):
        email: EmailStr
        password: str

    def _set_session_cookie(response: Response, token: str):
        response.set_cookie(
            key=SESSION_COOKIE_NAME,
            value=token,
            httponly=True,
            secure=True,
            samesite="none",
            path="/",
            max_age=SESSION_TTL_DAYS * 24 * 60 * 60,
        )

    @router.post("/auth/login")
    async def auth_login(body: LoginBody, response: Response):
        """Email + password login for admin-created accounts."""
        email = body.email.lower().strip()
        user = await db.users.find_one({"email": email}, {"_id": 0})
        if not user or not user.get("password_hash"):
            raise HTTPException(status_code=401, detail="Email atau password salah")
        try:
            ok = bcrypt.checkpw(
                body.password.encode("utf-8"),
                user["password_hash"].encode("utf-8"),
            )
        except Exception:
            ok = False
        if not ok:
            raise HTTPException(status_code=401, detail="Email atau password salah")

        token = secrets.token_urlsafe(32)
        await db.user_sessions.insert_one({
            "user_id": user["user_id"],
            "session_token": token,
            "expires_at": now_utc() + timedelta(days=SESSION_TTL_DAYS),
            "created_at": now_utc(),
        })
        await db.users.update_one(
            {"user_id": user["user_id"]},
            {"$set": {"last_login_at": now_utc().isoformat()}},
        )
        _set_session_cookie(response, token)
        return {
            "ok": True,
            "user": {
                "user_id": user["user_id"],
                "email": user["email"],
                "name": user.get("name", ""),
                "picture": user.get("picture", ""),
                "role": user.get("role", "user"),
            },
        }

    @router.post("/auth/session")
    async def auth_session(body: SessionExchangeBody, response: Response):
        try:
            async with httpx.AsyncClient(timeout=15) as ac:
                r = await ac.get(
                    EMERGENT_SESSION_URL,
                    headers={"X-Session-ID": body.session_id},
                )
        except Exception:
            raise HTTPException(status_code=502, detail="Auth upstream unavailable")
        if r.status_code != 200:
            raise HTTPException(status_code=401, detail="Invalid session_id")
        data = r.json()
        email = data.get("email")
        name = data.get("name") or email
        picture = data.get("picture") or ""
        session_token = data.get("session_token")
        if not (email and session_token):
            raise HTTPException(status_code=502, detail="Malformed auth response")

        # Upsert user (custom user_id, exclude _id)
        existing = await db.users.find_one({"email": email}, {"_id": 0})
        if existing:
            user_id = existing["user_id"]
            await db.users.update_one(
                {"user_id": user_id},
                {"$set": {"name": name, "picture": picture, "last_login_at": now_utc().isoformat()}},
            )
        else:
            user_id = f"user_{uuid.uuid4().hex[:12]}"
            await db.users.insert_one({
                "user_id": user_id,
                "email": email,
                "name": name,
                "picture": picture,
                "created_at": now_utc().isoformat(),
                "last_login_at": now_utc().isoformat(),
            })

        # Store session (idempotent)
        expires_at = now_utc() + timedelta(days=SESSION_TTL_DAYS)
        await db.user_sessions.update_one(
            {"session_token": session_token},
            {
                "$set": {
                    "user_id": user_id,
                    "session_token": session_token,
                    "expires_at": expires_at,
                    "created_at": now_utc(),
                }
            },
            upsert=True,
        )

        # httpOnly, cross-site cookie (works in the preview iframe)
        response.set_cookie(
            key=SESSION_COOKIE_NAME,
            value=session_token,
            httponly=True,
            secure=True,
            samesite="none",
            path="/",
            max_age=SESSION_TTL_DAYS * 24 * 60 * 60,
        )

        return {
            "ok": True,
            "user": {
                "user_id": user_id,
                "email": email,
                "name": name,
                "picture": picture,
            },
        }

    @router.get("/auth/me")
    async def auth_me(user=Depends(_current_user)):
        return {
            "user_id": user["user_id"],
            "email": user["email"],
            "name": user.get("name"),
            "picture": user.get("picture", ""),
        }

    @router.post("/auth/logout")
    async def auth_logout(request: Request, response: Response, authorization: Optional[str] = Header(None)):
        token = _extract_session_token(request, authorization)
        if token:
            await db.user_sessions.delete_one({"session_token": token})
        response.delete_cookie(SESSION_COOKIE_NAME, path="/", samesite="none", secure=True)
        return {"ok": True}

    # ---------- Favorites -----------------------------------------------------

    @router.get("/user/favorites")
    async def list_favorites(user=Depends(_current_user)):
        docs = await db.user_favorites.find(
            {"user_id": user["user_id"]}, {"_id": 0}
        ).sort("created_at", -1).to_list(500)
        property_ids = [d["property_id"] for d in docs]

        # Hydrate with property snapshots for the client (best-effort)
        props = []
        if property_ids:
            props = await db.properties.find(
                {"id": {"$in": property_ids}}, {"_id": 0}
            ).to_list(500)
        by_id = {p["id"]: p for p in props}
        result = []
        for pid in property_ids:
            snap = by_id.get(pid)
            if snap:
                result.append(snap)
            else:
                result.append({"id": pid, "title": "(Properti sudah tidak tersedia)"})
        return result

    @router.post("/user/favorites/{property_id}")
    async def toggle_favorite(property_id: str, user=Depends(_current_user)):
        existing = await db.user_favorites.find_one(
            {"user_id": user["user_id"], "property_id": property_id},
            {"_id": 0},
        )
        if existing:
            await db.user_favorites.delete_one(
                {"user_id": user["user_id"], "property_id": property_id}
            )
            return {"ok": True, "favorited": False}
        await db.user_favorites.insert_one({
            "user_id": user["user_id"],
            "property_id": property_id,
            "created_at": now_utc().isoformat(),
        })
        return {"ok": True, "favorited": True}

    # ---------- Submissions history ------------------------------------------

    @router.get("/user/submissions")
    async def list_user_submissions(user=Depends(_current_user)):
        """Return all form submissions previously sent from this email."""
        email = user["email"]
        # Payload contains a nested 'email' field in some types; also user might not
        # have used the same email → return by user_id linkage if present, otherwise
        # fall back to email match.
        query = {
            "$or": [
                {"user_id": user["user_id"]},
                {"payload.email": email},
            ]
        }
        docs = await db.submissions.find(query, {"_id": 0}).sort("created_at", -1).to_list(200)
        return docs

    return router
