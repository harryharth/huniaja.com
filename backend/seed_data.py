"""Seed initial data (properties, banners, articles) if DB is empty."""
import uuid
import logging
from datetime import datetime, timezone

logger = logging.getLogger(__name__)


def now_iso():
    return datetime.now(timezone.utc).isoformat()


HOUSE_IMAGES = [
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=85",
    "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?w=1200&q=85",
    "https://images.unsplash.com/photo-1558661091-5cc1b64d0dc5?w=1200&q=85",
    "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?w=1200&q=85",
    "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=1200&q=85",
    "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1200&q=85",
    "https://images.unsplash.com/photo-1706855203772-c249b75fe016?w=1200&q=85",
]

TITLES = ["Rumah Modern Cluster", "Villa Minimalis 2 Lantai", "Rumah Tropis Asri",
          "Townhouse Premium", "Rumah Cluster Elegan", "Griya Modern Bogor", "Rumah Idaman Keluarga"]
LOCATIONS = ["Bogor Selatan, Jawa Barat", "Cibubur, Bogor", "Sentul City, Bogor",
             "Depok, Jawa Barat", "Bekasi Timur", "Tangerang Selatan", "BSD City"]
CITIES = ["Kab. Bogor", "Kab. Bogor", "Kab. Bogor", "Kota Depok", "Kota Bekasi", "Tangerang", "Kab. Bekasi"]
TYPES = ["Rumah", "Villa", "Rumah", "Apartemen", "Rumah", "Ruko", "Rumah"]
CONDITIONS = ["Baru", "Second", "Baru", "Baru", "Second", "Baru", "Lelang"]
PRICES = [500, 650, 420, 780, 550, 900, 380]


async def seed_properties(db):
    if await db.properties.count_documents({}) > 0:
        logger.info("Properties already seeded")
        return
    items = []
    for i in range(24):
        idx = i % 7
        price = PRICES[idx] * 1000000
        items.append({
            "id": f"list-{i}",  # keep existing IDs for URL continuity
            "title": TITLES[idx],
            "location": LOCATIONS[idx],
            "city": CITIES[idx],
            "type": TYPES[idx],
            "condition": CONDITIONS[idx],
            "price_value": price,
            "price": f"Rp {price:,}".replace(",", "."),
            "installment": "Angsuran mulai 3 Jutaan/bln",
            "image": HOUSE_IMAGES[i % len(HOUSE_IMAGES)],
            "gallery": HOUSE_IMAGES[:5],
            "specs": {"lt": "110 m²", "lb": "90 m²", "kt": 3, "km": 2},
            "description": f"{TITLES[idx]} berlokasi di {LOCATIONS[idx]}. Cluster modern dengan keamanan 24 jam.",
            "facilities": ["Carport 2 Mobil", "Taman Depan", "WiFi Ready", "Keamanan 24 Jam", "Rumah Cluster", "Listrik 2200 VA"],
            "tier": "HH Pro",
            "status": "published",
            "sort_order": i,
            "views": 0,
            "likes": 0,
            "is_deleted": False,
            "created_at": now_iso(),
            "updated_at": now_iso(),
        })
    await db.properties.insert_many(items)
    logger.info(f"Seeded {len(items)} properties")


async def seed_banners(db):
    if await db.banners.count_documents({}) > 0:
        return
    items = [
        {
            "id": str(uuid.uuid4()),
            "title": "Deal Hot Diam Say!",
            "subtitle": "Voucher Belanja Rumah Hingga Rp 50 Juta",
            "accent": "Rp50Jt",
            "image": "",
            "cta_label": "Klaim Voucher",
            "cta_href": "/cari-properti",
            "bg": "bg-[#001DF3]",
            "status": "published",
            "sort_order": 0,
            "is_deleted": False,
            "created_at": now_iso(),
            "updated_at": now_iso(),
        },
        {
            "id": str(uuid.uuid4()),
            "title": "#BeliRumahJadiMudah",
            "subtitle": "Cari, bandingkan, beli rumah dalam satu platform",
            "accent": "JadiMudah",
            "image": "",
            "cta_label": "Mulai Cari",
            "cta_href": "/cari-properti",
            "bg": "bg-[#001DF3]",
            "status": "published",
            "sort_order": 1,
            "is_deleted": False,
            "created_at": now_iso(),
            "updated_at": now_iso(),
        },
    ]
    await db.banners.insert_many(items)
    logger.info(f"Seeded {len(items)} banners")


async def seed_articles(db):
    if await db.articles.count_documents({}) > 0:
        return
    # Import mock articles data
    sample = [
        {"slug": "cara-beli-rumah-pertama", "title": "Cara Beli Rumah Pertama", "category": "Panduan",
         "excerpt": "Panduan A-Z beli rumah pertama.", "image": HOUSE_IMAGES[0]},
        {"slug": "kpr-syariah-vs-konvensional", "title": "KPR Syariah vs Konvensional", "category": "KPR",
         "excerpt": "Perbandingan lengkap.", "image": HOUSE_IMAGES[1]},
        {"slug": "cek-legalitas-rumah", "title": "Cek Legalitas Rumah", "category": "Legal",
         "excerpt": "7 dokumen wajib.", "image": HOUSE_IMAGES[2]},
    ]
    items = []
    for i, s in enumerate(sample):
        items.append({
            "id": str(uuid.uuid4()),
            "slug": s["slug"],
            "title": s["title"],
            "excerpt": s["excerpt"],
            "category": s["category"],
            "date": "12 Feb 2026",
            "read": "5 min",
            "image": s["image"],
            "tags": [s["category"]],
            "content": [{"type": "paragraph", "text": s["excerpt"]}],
            "status": "published",
            "sort_order": i,
            "views": 0,
            "likes": 0,
            "is_deleted": False,
            "created_at": now_iso(),
            "updated_at": now_iso(),
        })
    await db.articles.insert_many(items)
    logger.info(f"Seeded {len(items)} articles")


async def run_all(db):
    await seed_properties(db)
    await seed_banners(db)
    await seed_articles(db)
