"""Admin routes: Properties CRUD, Banners CRUD, Articles CRUD, image upload, auth."""
import os
import uuid
import logging
from datetime import datetime, timezone
from typing import List, Optional

import requests
from fastapi import APIRouter, Depends, File, HTTPException, Header, UploadFile
from pydantic import BaseModel, Field

logger = logging.getLogger(__name__)

# --- Storage config -----------------------------------------------------------
STORAGE_BASE = (os.environ.get("INTEGRATION_PROXY_URL") or "").strip() or "https://integrations.emergentagent.com"
STORAGE_URL = STORAGE_BASE.rstrip("/") + "/objstore/api/v1/storage"
EMERGENT_KEY = os.environ.get("EMERGENT_LLM_KEY")
APP_NAME = "huniaja"

_storage_key: Optional[str] = None


def init_storage(force: bool = False) -> str:
    global _storage_key
    if _storage_key and not force:
        return _storage_key
    resp = requests.post(f"{STORAGE_URL}/init", json={"emergent_key": EMERGENT_KEY}, timeout=30)
    resp.raise_for_status()
    _storage_key = resp.json()["storage_key"]
    return _storage_key


def put_object(path: str, data: bytes, content_type: str) -> dict:
    key = init_storage()
    resp = requests.put(
        f"{STORAGE_URL}/objects/{path}",
        headers={"X-Storage-Key": key, "Content-Type": content_type},
        data=data,
        timeout=120,
    )
    if resp.status_code == 404:
        key = init_storage(force=True)
        resp = requests.put(
            f"{STORAGE_URL}/objects/{path}",
            headers={"X-Storage-Key": key, "Content-Type": content_type},
            data=data,
            timeout=120,
        )
    resp.raise_for_status()
    return resp.json()


def get_object(path: str) -> tuple:
    key = init_storage()
    resp = requests.get(
        f"{STORAGE_URL}/objects/{path}",
        headers={"X-Storage-Key": key},
        timeout=60,
    )
    resp.raise_for_status()
    return resp.content, resp.headers.get("Content-Type", "application/octet-stream")


# --- Auth ---------------------------------------------------------------------
ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "")
ADMIN_SECRET = os.environ.get("ADMIN_SESSION_SECRET", "changeme")

_active_tokens: set = set()


def require_admin(authorization: str = Header(default="")):
    if not authorization.startswith("Bearer "):
        raise HTTPException(401, "Missing bearer token")
    token = authorization[7:]
    if token not in _active_tokens:
        raise HTTPException(401, "Invalid or expired token")
    return token


# --- Models -------------------------------------------------------------------
def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


class LoginRequest(BaseModel):
    password: str


class LoginResponse(BaseModel):
    token: str


class PropertySpecs(BaseModel):
    lt: str = "110 m²"
    lb: str = "90 m²"
    kt: int = 3
    km: int = 2


class PropertyIn(BaseModel):
    title: str
    location: str
    city: str = "Kab. Bogor"
    type: str = "Rumah"
    condition: str = "Baru"
    price_value: int = 500000000
    installment: str = "Angsuran mulai 3 Jutaan/bln"
    image: str = ""
    gallery: List[str] = []
    specs: PropertySpecs = Field(default_factory=PropertySpecs)
    description: str = ""
    facilities: List[str] = []
    tier: str = "HH Pro"
    status: str = "published"  # draft | published
    sort_order: int = 0


class PropertyOut(PropertyIn):
    id: str
    views: int = 0
    likes: int = 0
    created_at: str
    updated_at: str


class BannerIn(BaseModel):
    title: str
    subtitle: str = ""
    accent: str = ""
    image: str = ""
    cta_label: str = ""
    cta_href: str = ""
    bg: str = "bg-[#001DF3]"
    status: str = "published"
    sort_order: int = 0


class BannerOut(BannerIn):
    id: str
    created_at: str
    updated_at: str


class ArticleIn(BaseModel):
    slug: str
    title: str
    excerpt: str
    category: str = "Panduan"
    date: str = ""
    read: str = "5 min"
    image: str = ""
    tags: List[str] = []
    content: List[dict] = []
    status: str = "published"
    sort_order: int = 0


class ArticleOut(ArticleIn):
    id: str
    views: int = 0
    likes: int = 0
    created_at: str
    updated_at: str


# --- Router -------------------------------------------------------------------
def create_admin_router(db) -> APIRouter:
    router = APIRouter(prefix="/admin")

    # --- AUTH
    @router.post("/login", response_model=LoginResponse)
    async def login(req: LoginRequest):
        if not ADMIN_PASSWORD or req.password != ADMIN_PASSWORD:
            raise HTTPException(401, "Password salah")
        token = uuid.uuid4().hex + uuid.uuid4().hex
        _active_tokens.add(token)
        return LoginResponse(token=token)

    @router.post("/logout")
    async def logout(token: str = Depends(require_admin)):
        _active_tokens.discard(token)
        return {"ok": True}

    @router.get("/me")
    async def me(token: str = Depends(require_admin)):
        return {"admin": True}

    # --- UPLOAD
    @router.post("/upload")
    async def upload_file(file: UploadFile = File(...), _: str = Depends(require_admin)):
        ext = file.filename.split(".")[-1].lower() if "." in (file.filename or "") else "bin"
        path = f"{APP_NAME}/uploads/admin/{uuid.uuid4().hex}.{ext}"
        data = await file.read()
        result = put_object(path, data, file.content_type or "application/octet-stream")
        record = {
            "id": str(uuid.uuid4()),
            "storage_path": result["path"],
            "original_filename": file.filename,
            "content_type": file.content_type,
            "size": result.get("size", len(data)),
            "is_deleted": False,
            "created_at": now_iso(),
        }
        await db.files.insert_one(record)
        return {"url": f"/api/files/{result['path']}", "path": result["path"]}

    # --- STATS
    @router.get("/stats")
    async def stats(_: str = Depends(require_admin)):
        prop_total = await db.properties.count_documents({"is_deleted": {"$ne": True}})
        prop_pub = await db.properties.count_documents({"is_deleted": {"$ne": True}, "status": "published"})
        art_total = await db.articles.count_documents({"is_deleted": {"$ne": True}})
        art_pub = await db.articles.count_documents({"is_deleted": {"$ne": True}, "status": "published"})
        banner_total = await db.banners.count_documents({"is_deleted": {"$ne": True}})
        views_agg = await db.properties.aggregate([{"$group": {"_id": None, "v": {"$sum": "$views"}, "l": {"$sum": "$likes"}}}]).to_list(1)
        total_views = views_agg[0]["v"] if views_agg else 0
        total_likes = views_agg[0]["l"] if views_agg else 0
        return {
            "properties": {"total": prop_total, "published": prop_pub, "views": total_views, "likes": total_likes},
            "articles": {"total": art_total, "published": art_pub},
            "banners": {"total": banner_total},
        }

    # --- PROPERTIES CRUD
    def _clean(doc):
        if not doc:
            return doc
        doc.pop("_id", None)
        doc.pop("is_deleted", None)
        return doc

    @router.get("/properties")
    async def list_properties(q: str = "", status: str = "", _: str = Depends(require_admin)):
        query = {"is_deleted": {"$ne": True}}
        if status:
            query["status"] = status
        if q:
            query["$or"] = [
                {"title": {"$regex": q, "$options": "i"}},
                {"location": {"$regex": q, "$options": "i"}},
                {"city": {"$regex": q, "$options": "i"}},
            ]
        items = await db.properties.find(query).sort([("sort_order", 1), ("created_at", -1)]).to_list(500)
        return [_clean(i) for i in items]

    @router.post("/properties")
    async def create_property(item: PropertyIn, _: str = Depends(require_admin)):
        rec = item.dict()
        rec["id"] = str(uuid.uuid4())
        rec["views"] = 0
        rec["likes"] = 0
        rec["is_deleted"] = False
        rec["created_at"] = now_iso()
        rec["updated_at"] = rec["created_at"]
        await db.properties.insert_one(rec.copy())
        return _clean(rec)

    @router.put("/properties/{pid}")
    async def update_property(pid: str, item: PropertyIn, _: str = Depends(require_admin)):
        upd = item.dict()
        upd["updated_at"] = now_iso()
        r = await db.properties.update_one({"id": pid}, {"$set": upd})
        if r.matched_count == 0:
            raise HTTPException(404, "Not found")
        doc = await db.properties.find_one({"id": pid})
        return _clean(doc)

    @router.delete("/properties/{pid}")
    async def delete_property(pid: str, _: str = Depends(require_admin)):
        await db.properties.update_one({"id": pid}, {"$set": {"is_deleted": True, "updated_at": now_iso()}})
        return {"ok": True}

    @router.patch("/properties/{pid}/publish")
    async def toggle_publish_property(pid: str, _: str = Depends(require_admin)):
        doc = await db.properties.find_one({"id": pid})
        if not doc:
            raise HTTPException(404, "Not found")
        new_status = "draft" if doc.get("status") == "published" else "published"
        await db.properties.update_one({"id": pid}, {"$set": {"status": new_status, "updated_at": now_iso()}})
        return {"status": new_status}

    # --- BANNERS CRUD
    @router.get("/banners")
    async def list_banners(_: str = Depends(require_admin)):
        items = await db.banners.find({"is_deleted": {"$ne": True}}).sort([("sort_order", 1)]).to_list(200)
        return [_clean(i) for i in items]

    @router.post("/banners")
    async def create_banner(item: BannerIn, _: str = Depends(require_admin)):
        rec = item.dict()
        rec["id"] = str(uuid.uuid4())
        rec["is_deleted"] = False
        rec["created_at"] = now_iso()
        rec["updated_at"] = rec["created_at"]
        await db.banners.insert_one(rec.copy())
        return _clean(rec)

    @router.put("/banners/{bid}")
    async def update_banner(bid: str, item: BannerIn, _: str = Depends(require_admin)):
        upd = item.dict()
        upd["updated_at"] = now_iso()
        r = await db.banners.update_one({"id": bid}, {"$set": upd})
        if r.matched_count == 0:
            raise HTTPException(404, "Not found")
        return _clean(await db.banners.find_one({"id": bid}))

    @router.delete("/banners/{bid}")
    async def delete_banner(bid: str, _: str = Depends(require_admin)):
        await db.banners.update_one({"id": bid}, {"$set": {"is_deleted": True}})
        return {"ok": True}

    # --- ARTICLES CRUD (basic)
    @router.get("/articles")
    async def list_articles(q: str = "", _: str = Depends(require_admin)):
        query = {"is_deleted": {"$ne": True}}
        if q:
            query["$or"] = [{"title": {"$regex": q, "$options": "i"}}, {"slug": {"$regex": q, "$options": "i"}}]
        items = await db.articles.find(query).sort([("sort_order", 1), ("created_at", -1)]).to_list(500)
        return [_clean(i) for i in items]

    @router.post("/articles")
    async def create_article(item: ArticleIn, _: str = Depends(require_admin)):
        rec = item.dict()
        rec["id"] = str(uuid.uuid4())
        rec["views"] = 0
        rec["likes"] = 0
        rec["is_deleted"] = False
        rec["created_at"] = now_iso()
        rec["updated_at"] = rec["created_at"]
        await db.articles.insert_one(rec.copy())
        return _clean(rec)

    @router.put("/articles/{aid}")
    async def update_article(aid: str, item: ArticleIn, _: str = Depends(require_admin)):
        upd = item.dict()
        upd["updated_at"] = now_iso()
        r = await db.articles.update_one({"id": aid}, {"$set": upd})
        if r.matched_count == 0:
            raise HTTPException(404, "Not found")
        return _clean(await db.articles.find_one({"id": aid}))

    @router.delete("/articles/{aid}")
    async def delete_article(aid: str, _: str = Depends(require_admin)):
        await db.articles.update_one({"id": aid}, {"$set": {"is_deleted": True}})
        return {"ok": True}

    return router


# --- Public routes ------------------------------------------------------------
def create_public_router(db) -> APIRouter:
    router = APIRouter()

    @router.get("/properties")
    async def public_properties(city: str = "", type: str = "", condition: str = ""):
        query = {"is_deleted": {"$ne": True}, "status": "published"}
        if city and city != "Semua":
            query["city"] = city
        if type:
            query["type"] = type
        if condition:
            query["condition"] = condition
        items = await db.properties.find(query).sort([("sort_order", 1), ("created_at", -1)]).to_list(500)
        for i in items:
            i.pop("_id", None)
            i.pop("is_deleted", None)
        return items

    @router.get("/properties/{pid}")
    async def public_property(pid: str):
        doc = await db.properties.find_one({"id": pid, "is_deleted": {"$ne": True}, "status": "published"})
        if not doc:
            raise HTTPException(404, "Not found")
        # Increment view counter
        await db.properties.update_one({"id": pid}, {"$inc": {"views": 1}})
        doc.pop("_id", None)
        doc.pop("is_deleted", None)
        return doc

    @router.get("/banners")
    async def public_banners():
        items = await db.banners.find({"is_deleted": {"$ne": True}, "status": "published"}).sort([("sort_order", 1)]).to_list(50)
        for i in items:
            i.pop("_id", None)
            i.pop("is_deleted", None)
        return items

    # Serve uploaded files (public - no auth needed for image display)
    from fastapi import Response
    @router.get("/files/{path:path}")
    async def public_file(path: str):
        try:
            data, ct = get_object(path)
            return Response(content=data, media_type=ct)
        except Exception:
            raise HTTPException(404, "Not found")

    return router
