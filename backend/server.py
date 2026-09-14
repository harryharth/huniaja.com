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
    "Kamu adalah 'Dea', admin resmi Huniaja.com. Untuk sementara, kamu HANYA menjawab pertanyaan "
    "seputar FAQ Huniaja pada 7 topik: (1) Umum Huniaja, (2) Beli Properti, (3) Jual Properti, "
    "(4) KPR & Pembiayaan, (5) Legalitas & Dokumen, (6) Serah Terima, (7) Akun & Pembayaran.\n\n"
    "ATURAN KETAT:\n"
    "- Jawab HANYA berdasarkan basis pengetahuan FAQ di bawah. Jangan mengarang harga, promo, atau data spesifik yang tidak ada.\n"
    "- Jika pertanyaan di LUAR 7 topik itu (mis. cuaca, politik, rekomendasi rumah tertentu, harga real-time), "
    "tolak sopan: 'Maaf, saat ini saya baru bisa menjawab pertanyaan FAQ seputar layanan Huniaja. "
    "Untuk hal lain silakan chat tim di WhatsApp +62 851-1983-3362.'\n"
    "- Sapa ramah dalam Bahasa Indonesia santai-profesional. Maks 4 kalimat, langsung ke poin.\n"
    "- Jika pengguna butuh tindak lanjut, arahkan ke WhatsApp +62 851-1983-3362 atau halaman /kontak.\n\n"
    "BASIS PENGETAHUAN FAQ (ringkas):\n"
    "UMUM: Huniaja adalah marketplace properti Indonesia + layanan pendukung (potong rumput, cleaning, service AC, jaga rumah). "
    "Mencari properti, konsultasi awal, simulasi KPR, dan chat AI gratis. Kontak: WhatsApp +62 851-1983-3362 (08.00-21.00). "
    "Tersedia di Jabodetabek, Bandung, Surabaya, Semarang, Bali, dll. Bekerja sama dengan developer resmi (Sinar Mas Land, Summarecon, Ciputra, dll.).\n"
    "BELI: Pakai filter di menu Cari Properti (tipe, kota, harga, fasilitas). Harga awal bisa dinego via tim. Survey rumah gratis via WhatsApp. "
    "Badge 'Terverifikasi' = lolos cek dokumen dasar. 'HH Pro' = pemasang trusted (agen/developer partner). "
    "Rumah second cash: 2-4 minggu. Dengan KPR: 4-8 minggu. Rumah baru ready stock: 1-3 bulan. Indent: 12-24 bulan.\n"
    "JUAL: Buka menu Pasang Iklan, isi form + verifikasi 1x24 jam. Listing standar gratis (5 unit pertama). HH Pro berbayar untuk fitur premium. "
    "Rata-rata terjual 45-90 hari. Bisa jual mandiri atau via agen (komisi 2,5-3%). Rumah dengan KPR bisa dijual via skema Take-Over KPR. "
    "Tim bantu buatkan deskripsi (gratis untuk HH Pro).\n"
    "KPR: Dukung KPR Konvensional, Syariah (murabahah/ijarah), Subsidi FLPP, Rent-to-Own. Simulasi tersedia di halaman /kpr. "
    "DP: bank umum 10-20%, Syariah 15-20%, FLPP mulai 1%. Proses SP3K 3-5 hari kerja. "
    "Dokumen: KTP, KK, Slip Gaji 3 bulan, Rekening Koran 3 bulan, NPWP, Surat Pengangkatan (karyawan) atau SIUP/TDP (wirausaha). "
    "Freelancer bisa pakai mutasi rekening + SPT Tahunan. Fixed rate biasanya 1-5 tahun pertama (5,5-7,5%).\n"
    "LEGALITAS: SHM paling aman. HGB sah (apartemen/komersial). Hindari girik tanpa balik nama. "
    "AJB dibuat di PPAT + balik nama BPN. Biaya PPAT+BPN sekitar 1-2%. IMB kini diganti PBG (sejak 2021). "
    "BPHTB pembeli 5% dari NJOP dikurangi NJOP-TKP. PPh Final penjual 2,5%. Cek keaslian sertifikat via BPN atau aplikasi Sentuh Tanahku.\n"
    "SERAH TERIMA: Cek fisik (dinding, atap, listrik, air), sertifikat asli, meteran, garansi. "
    "Rumah baru: garansi struktur 5 tahun, non-struktur 3 bulan-1 tahun. Rumah second: umumnya no warranty. "
    "Masa retensi (rumah baru dari developer): 3-6 bulan untuk defect minor. Delay serah terima developer >6 bulan → berhak batal + refund. "
    "Balik nama listrik/PDAM: bawa AJB + KTP ke kantor PLN/PDAM, proses 3-7 hari kerja.\n"
    "AKUN: Daftar via 'Masuk/Daftar' (manual atau Google). Lupa password → link reset ke email, valid 24 jam. "
    "Data aman: HTTPS + bcrypt, tidak dijual ke pihak ketiga. Satu akun per email. "
    "Pembayaran DP HANYA ke rekening resmi penjual/developer (setelah PPJB), jangan ke rekening pribadi. "
    "Layanan rumah bisa bayar transfer bank, e-wallet (GoPay, OVO, DANA), atau tunai saat teknisi datang."
)

# Simple offline fallback — used only when LLM is unreachable / hosting down.
FAQ_FALLBACK = [
    (["kontak", "hubungi", "wa", "whatsapp", "nomor"],
     "Kamu bisa chat tim Huniaja langsung di WhatsApp +62 851-1983-3362 (08.00-21.00 setiap hari)."),
    (["kpr", "cicilan", "simulasi", "pembiayaan", "dp"],
     "Kami dukung KPR Konvensional, Syariah, Subsidi FLPP, dan Rent-to-Own. Simulasi cicilan tersedia di halaman /kpr. "
     "DP mulai 1% untuk FLPP, 10-20% bank umum, 15-20% Syariah. Proses SP3K 3-5 hari kerja."),
    (["dokumen", "syarat", "berkas"],
     "Dokumen KPR: KTP, KK, Slip Gaji 3 bulan, Rekening Koran 3 bulan, NPWP, Surat Pengangkatan (karyawan) atau SIUP/TDP (wirausaha)."),
    (["pasang iklan", "jual", "listing"],
     "Buka menu Pasang Iklan, isi form (foto, harga, spesifikasi, dokumen). Listing standar gratis untuk 5 unit pertama. "
     "Tim kami verifikasi dalam 1x24 jam sebelum tayang."),
    (["beli", "cari", "properti"],
     "Buka menu Cari Properti, pakai filter (tipe, kota, harga, fasilitas). Survey rumah gratis — cukup chat WhatsApp tim dari halaman detail."),
    (["sertifikat", "shm", "hgb", "legal", "ajb", "pbg", "imb"],
     "SHM paling aman & kuat. HGB sah untuk apartemen/komersial. AJB dibuat di PPAT + balik nama BPN. "
     "IMB kini diganti PBG. Biaya balik nama sekitar 1-2% harga transaksi."),
    (["akun", "daftar", "login", "password", "lupa"],
     "Daftar via tombol 'Masuk/Daftar' di header (manual atau via Google). Kalau lupa password, klik 'Lupa password?' di halaman Masuk — link reset dikirim ke email, valid 24 jam."),
    (["layanan", "potong rumput", "cleaning", "ac", "jaga rumah"],
     "Kami menyediakan Potong Rumput, Home Cleaning, Service AC, dan Jaga Rumah — semua bergaransi & dilayani mitra terverifikasi. Area saat ini: Jabodetabek & Bogor Raya."),
    (["serah terima", "handover", "garansi", "retensi"],
     "Saat serah terima cek fisik, sertifikat asli, meteran, dan buku garansi. Rumah baru dari developer: garansi struktur 5 tahun, non-struktur 3 bulan-1 tahun. Masa retensi biasanya 3-6 bulan."),
    (["harga", "biaya", "pajak", "bphtb"],
     "BPHTB pembeli 5% dari NJOP (dikurangi NJOP-TKP daerah). PPh Final penjual 2,5% dari nilai transaksi. Total pajak transaksi umumnya 5-8% harga rumah."),
]


def _local_faq_reply(msg: str) -> str:
    """Keyword-based offline fallback so chat tidak pernah 'offline' walau LLM down."""
    lo = (msg or "").lower()
    for keywords, answer in FAQ_FALLBACK:
        if any(k in lo for k in keywords):
            return answer
    return (
        "Halo! Saat ini saya baru bisa jawab FAQ seputar layanan Huniaja "
        "(beli/jual properti, KPR, legalitas, serah terima, akun & pembayaran, layanan rumah). "
        "Untuk pertanyaan spesifik, silakan chat tim kami di WhatsApp +62 851-1983-3362."
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

    reply_text: str
    used_fallback = False

    if not EMERGENT_LLM_KEY:
        # No LLM key configured (e.g. staging without env) → keep chat responsive
        reply_text = _local_faq_reply(req.message)
        used_fallback = True
    else:
        try:
            llm = LlmChat(
                api_key=EMERGENT_LLM_KEY,
                session_id=session_id,
                system_message=SYSTEM_PROMPT,
            ).with_model("openai", "gpt-4o-mini")

            reply_obj = await llm.send_message(UserMessage(text=req.message))
            reply_text = str(reply_obj) if reply_obj is not None else ""
            if not reply_text.strip():
                reply_text = _local_faq_reply(req.message)
                used_fallback = True
        except Exception:
            logging.exception("LLM error — falling back to local FAQ matcher")
            reply_text = _local_faq_reply(req.message)
            used_fallback = True

    # persist assistant reply
    await db.chat_messages.insert_one(
        {
            "session_id": session_id,
            "role": "assistant",
            "content": reply_text,
            "fallback": used_fallback,
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
