"""Seed initial data (properties, banners, articles) if DB is empty."""
import uuid
import json
import logging
from pathlib import Path
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
            "id": f"list-{i}",
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
            "verified": (i % 3 != 2),  # ~2/3 verified for demo
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


HERO_SLIDES = [
    {"title": "Deal Hot", "subtitle": "Dám Say!", "accent": "Rp50Jt",
     "tagline": "Voucher Belanja Rumah Hingga Rp 50 Juta",
     "eyebrow": "PROMO SPESIAL", "cta_label": "Klaim Voucher",
     "cta_href": "/cari-properti", "bg": "#00B512", "icon_name": "Ticket",
     "amount": "Rp50Jt", "tag": "HUNIAJA VOUCHER", "validity": "Berlaku s/d 31 Des"},
    {"title": "KPR Mudah", "subtitle": "Disetujui!", "accent": "3jt/bln",
     "tagline": "Bunga Ringan, Proses Cepat 3 Hari Kerja",
     "eyebrow": "KPR TERBAIK", "cta_label": "Ajukan Sekarang",
     "cta_href": "/kpr", "bg": "#001DF3", "icon_name": "Home",
     "amount": "3jt/bln", "tag": "CICILAN MULAI", "validity": "Tenor s/d 20 Tahun"},
    {"title": "Cashback", "subtitle": "Sampai 20%", "accent": "Rp100Jt",
     "tagline": "Ratusan Properti Pilihan, Stok Terbatas",
     "eyebrow": "CASHBACK BESAR", "cta_label": "Lihat Promo",
     "cta_href": "/cari-properti", "bg": "#0EA5E9", "icon_name": "Percent",
     "amount": "Rp100Jt", "tag": "CASHBACK HINGGA", "validity": "Untuk Rumah Terpilih"},
    {"title": "Pilih Suka", "subtitle": "Beli Cepat!", "accent": "5000+",
     "tagline": "Ribuan Properti Ready Stock Menantimu",
     "eyebrow": "HUNIAJA PICKS", "cta_label": "Jelajahi",
     "cta_href": "/cari-properti", "bg": "#F59E0B", "icon_name": "Sparkles",
     "amount": "5000+", "tag": "REKOMENDASI", "validity": "Listing Pilihan"},
    {"title": "Rumah Baru", "subtitle": "Harga Perdana", "accent": "Rp300Jt",
     "tagline": "Beli Langsung dari Developer Tepercaya",
     "eyebrow": "EKSKLUSIF DEVELOPER", "cta_label": "Lihat Proyek",
     "cta_href": "/cari-properti", "bg": "#EC4899", "icon_name": "Home",
     "amount": "Rp300Jt", "tag": "HARGA MULAI", "validity": "Unit Terbatas"},
]


async def seed_banners(db):
    if await db.banners.count_documents({}) > 0:
        return
    items = []
    for i, s in enumerate(HERO_SLIDES):
        items.append({
            "id": str(uuid.uuid4()),
            **s,
            "image": "",
            "status": "published",
            "sort_order": i,
            "is_deleted": False,
            "created_at": now_iso(),
            "updated_at": now_iso(),
        })
    await db.banners.insert_many(items)
    logger.info(f"Seeded {len(items)} banners")


# Article seeds — read from seed_articles.json produced offline (fallback to inline sample)
def _load_article_seed():
    path = Path(__file__).parent / "seed_articles.json"
    if path.exists():
        try:
            return json.loads(path.read_text(encoding="utf-8"))
        except Exception as e:
            logger.warning(f"Failed to load seed_articles.json: {e}")
    # fallback minimum
    return [
        {"slug": "cara-beli-rumah-pertama", "title": "Cara Beli Rumah Pertama",
         "category": "Panduan", "excerpt": "Panduan A-Z beli rumah pertama.",
         "image": HOUSE_IMAGES[0], "tags": ["Panduan"], "content": [{"type": "paragraph", "text": "Coming soon"}]},
    ]


async def seed_articles(db):
    if await db.articles.count_documents({}) > 0:
        return
    data = _load_article_seed()
    items = []
    for i, s in enumerate(data):
        items.append({
            "id": str(uuid.uuid4()),
            "slug": s.get("slug", f"article-{i}"),
            "title": s.get("title", ""),
            "excerpt": s.get("excerpt", ""),
            "category": s.get("category", "Panduan"),
            "date": s.get("date", "12 Feb 2026"),
            "read": s.get("read", "5 min"),
            "image": s.get("image", HOUSE_IMAGES[i % len(HOUSE_IMAGES)]),
            "tags": s.get("tags", []),
            "author": s.get("author", {"name": "Tim Huniaja", "role": "Editor", "initial": "H"}),
            "content": s.get("content", []),
            "status": "published",
            "sort_order": i,
            "views": 0,
            "likes": 0,
            "is_deleted": False,
            "created_at": now_iso(),
            "updated_at": now_iso(),
        })
    if items:
        await db.articles.insert_many(items)
        logger.info(f"Seeded {len(items)} articles")


async def run_all(db):
    await seed_properties(db)
    await seed_banners(db)
    await seed_articles(db)
