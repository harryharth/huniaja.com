# Huniaja - Product Requirements Document

## Original Problem Statement
Buatkan website persis seperti gambar contoh (Indonesian property marketplace "Huniaja") mulai dari desain, logo, icon, dan tata letak. Fokus: pixel-perfect clone, responsive, semua UI dalam Bahasa Indonesia.

## Language
- **UI**: Bahasa Indonesia (semua konten, tombol, form, label).
- **Agent replies to user**: Bahasa Indonesia.

## Core Requirements
1. Website property marketplace lengkap dengan branding "Huniaja"
2. Halaman: Home, Beli/Cari Properti, KPR, Konsultasi, Berita (+ detail), Karir, Tentang Kami, Kontak, S&K, Pusat Bantuan, Kerjasama, Pasang Iklan
3. AI Chat Widget "Dea - Admin Huniaja.com" (Emergent LLM Key, GPT-4o-mini) dengan tombol handoff ke WhatsApp +62 851-1983-3362
4. Kalkulator KPR interaktif (Konvensional & Syariah/Take Over)
5. Storytelling premium di halaman Karir & Tentang Kami
6. Berita: 30 artikel edukasi untuk pembeli pemula, semua dapat dibaca via halaman detail

## Design System
- Primary: `#0025F5` (biru Huniaja)
- Green Accent: `#00B512` (dark green, sudah standardized)
- Hover Green: `#009e0f`
- WhatsApp CTA: **+62 851-1983-3362** (WAJIB tidak diubah)

## Tech Stack
- Frontend: React + React Router + Tailwind + Shadcn UI + lucide-react
- Backend: FastAPI + MongoDB
- LLM: Emergent LLM Key (GPT-4o-mini) via `/api/chat`

## Implemented (Feb 2026 - current session)

### Storytelling & Premium Redesign
- ✅ **KarirPage**: Founder note quote, timeline 4-bab (Bergabung → Berkembang → Berkarya → Berdampak), 4 testimoni "Huniaja Family", 4-slot "Sehari Bersama Kami", 4 nilai kompas, bridge CTA ke lowongan
- ✅ **TentangKamiPage** (redesign penuh):
  - Cinematic hero dengan bg image + gradient overlay
  - Floating stats card (2,4Jt+ users, 50K+ terjual, 120+ partner, 50+ kota)
  - Manifesto quote centerpiece
  - Founding story dengan floating rating badge
  - Timeline perjalanan 2019 → 2026 (5 milestone)
  - Founder quotes section (4 co-founders)
  - Values dengan sticky sidebar layout (01-04)
  - 3 Commitments (verifikasi, support 24/7, zero penipuan)
  - Team culture image full-width dengan overlay CTA
  - Impact quote strip
  - Peta jangkauan 50+ kota
  - Multi-CTA final section

### Berita System
- ✅ 30 artikel lengkap di `/app/frontend/src/data/articles.js` dengan struktur content blocks (heading/paragraph/list/quote/cta)
- ✅ Kategori: Panduan, KPR, Legal, Tips, Investasi, Keuangan, Subsidi, Keamanan
- ✅ `BeritaPage`: hero + search + kategori filter + featured + grid
- ✅ `BeritaDetailPage` baru (`/berita/:slug`): reader premium dengan author card, share button, tags, WhatsApp handoff CTA per artikel, related articles

### CariPropertiPage Cleanup
- ✅ Top search bar dihilangkan
- ✅ "Cari Properti" section hanya menampilkan "Rumah"
- ✅ Filter dihilangkan: Proses Konstruksi, Listrik, Sertifikat, Cicilan
- ✅ Filter aktif dengan icon: Kondisi, Harga, Fasilitas, Jenis KPR

### PasangIklanPage
- ✅ 3 partner cards (Pemilik/Agen/Developer) sekarang rata dengan `flex flex-col h-full` + `flex-1` pada ul → tombol sejajar di bawah

### ChatWidget
- ✅ Kembali sebagai chat AI (dipertahankan) dengan tombol handoff "Chat WhatsApp" (tanpa nomor panjang)

### Global Color Standardization
- ✅ `#12B815`, `#DAFF3D`, `#12FF3D` → `#00B512`
- ✅ `#0fa112`, `#c8ee1c` → `#009e0f`

## Backlog (P1/P2)
- P1: Backend integration untuk form (Konsultasi, Karir, Kontak, Kerjasama) → MongoDB + email/WA notifikasi
- P1: Property listings dari MongoDB (bukan mock)
- P1: Property detail page (klik dari ListingCard)
- P2: User authentication ("Daftar / Masuk")
- P2: Favorites system (simpan properti favorit)
