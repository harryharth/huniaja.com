from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import uuid
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

from emergentintegrations.llm.chat import LlmChat, UserMessage

mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

EMERGENT_LLM_KEY = os.environ.get("EMERGENT_LLM_KEY")

app = FastAPI()
api_router = APIRouter(prefix="/api")


class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class StatusCheckCreate(BaseModel):
    client_name: str


class ChatRequest(BaseModel):
    session_id: str
    message: str


class ChatResponse(BaseModel):
    session_id: str
    reply: str


SYSTEM_PROMPT = (
    "Kamu adalah 'Dea', admin resmi Huniaja.com - platform properti digital Indonesia. "
    "Tugasmu: bantu pengguna dengan info seputar beli/jual properti, KPR Syariah, pasang iklan, kerjasama, karir dan layanan Huniaja. "
    "Sapa dengan ramah dalam Bahasa Indonesia yang santai namun profesional. Jawab singkat, jelas, dan padat (maks 4 kalimat). "
    "Jika pengguna butuh bantuan lebih lanjut, sarankan menghubungi tim via WhatsApp di +62 851-1983-3362 atau membuka halaman /kontak. "
    "Jangan mengarang harga atau data yang belum pasti."
)


@api_router.get("/")
async def root():
    return {"message": "Huniaja API OK"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    await db.status_checks.insert_one(status_obj.dict())
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]


@api_router.post("/chat", response_model=ChatResponse)
async def chat(req: ChatRequest):
    if not EMERGENT_LLM_KEY:
        raise HTTPException(status_code=500, detail="LLM key not configured")

    session_id = req.session_id or str(uuid.uuid4())

    # persist user message
    await db.chat_messages.insert_one(
        {
            "session_id": session_id,
            "role": "user",
            "content": req.message,
            "created_at": datetime.utcnow(),
        }
    )

    try:
        llm = LlmChat(
            api_key=EMERGENT_LLM_KEY,
            session_id=session_id,
            system_message=SYSTEM_PROMPT,
        ).with_model("openai", "gpt-4o-mini")

        reply_obj = await llm.send_message(UserMessage(text=req.message))
        reply_text = str(reply_obj) if reply_obj is not None else ""
    except Exception as e:
        logging.exception("LLM error")
        reply_text = (
            "Maaf, saya sedang mengalami kendala teknis. Silakan hubungi tim kami "
            "via WhatsApp +62 851-1983-3362 untuk bantuan segera."
        )

    # persist assistant reply
    await db.chat_messages.insert_one(
        {
            "session_id": session_id,
            "role": "assistant",
            "content": reply_text,
            "created_at": datetime.utcnow(),
        }
    )

    return ChatResponse(session_id=session_id, reply=reply_text)


app.include_router(api_router)

# --- Admin & public content routes -------------------------------------------
from admin_routes import create_admin_router, create_public_router, init_storage as _init_storage
from user_routes import create_user_router

api_router_admin = create_admin_router(db)
api_router_public = create_public_router(db)
api_router_user = create_user_router(db)
app.include_router(api_router_admin, prefix="/api")
app.include_router(api_router_public, prefix="/api")
app.include_router(api_router_user, prefix="/api")


@app.on_event("startup")
async def _startup_admin():
    try:
        _init_storage()
        logging.info("Emergent Object Storage initialized")
    except Exception as e:
        logging.error(f"Storage init failed: {e}")
    try:
        from seed_data import run_all
        await run_all(db)
    except Exception as e:
        logging.error(f"Seed failed: {e}")
    try:
        from admin_routes import seed_admin
        await seed_admin(db)
        logging.info("Admin user seeded")
    except Exception as e:
        logging.error(f"Admin seed failed: {e}")


app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
