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

## Design System (STRICT — user enforced Feb 14, 2026)
- Navy: `#000066`
- Primary Blue: `#001DF3`
- Green: `#00B512`
- White: `#FFFFFF`
- Hover Blue: `#0017C2`, Hover Green: `#009e0f`
- **NO OTHER COLORS** across the site (public + admin). Off-brand hex swept in bulk:
  - Amber `#F59E0B` → `#00B512`
  - Pink `#EC4899` → `#000066`
  - Sky `#0EA5E9` → `#001DF3`
  - Purple `#8B5CF6`/`#7C3AED` → `#000066`
  - Green variant `#22C55E` → `#00B512`
  - Red `#EF4444`/`#FCA5A5` → `#001DF3` (semantic form errors also use brand blue)
  - Blue variant `#0033FF` → `#001DF3`
  - Orange `#F97316` → `#00B512`
- Tailwind color classes (text-red-*, bg-red-*, text-yellow-*, bg-sky-*, from-sky-*, ring-red-*) swept to brand equivalents.
- Google G icon SVG on `LoginPage` keeps official Google colors (brand-compliance requirement).
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

### Lead-Capture Forms → Backend + WhatsApp (Feb 14, 2026)
- ✅ `KonsultasiPage`, `KarirPage`, `KontakPage` form submit → `POST /api/submissions/{konsultasi|karir|kontak}` + auto-open WhatsApp (`+62 851-1983-3362`) dengan pesan pre-filled berisi data user
- ✅ Backend whitelist diperluas ke `brosur` juga (memperbaiki 400 bug tersembunyi)
- ✅ Helper `submitLead(type, payload)` di `/app/frontend/src/lib/publicApi.js`
- ✅ Loading state, error state, dan pesan sukses per form (data-testid: `konsultasi-submit-button`, `karir-submit-button`, `kontak-submit-button`)
- ✅ Tested end-to-end oleh testing agent (iteration_6): 6/6 backend pass, 3/3 frontend flow pass

### PropertyDetailPage — Fasilitas Accordion (Feb 14, 2026)
- ✅ Section "Fasilitas & Lingkungan" dirapikan menjadi dropdown/accordion per kategori (Fasilitas Properti, Utilitas, Keamanan & Cluster, Interior, Dekat Dengan) mengikuti pola FAQ
- ✅ Kategori pertama default terbuka, sisanya collapsed → lebih ringkas & user-friendly
- ✅ Chevron rotate 180° + tint warna kategori saat aktif

### KerjasamaPage Visual Update (Feb 14, 2026)
- ✅ Section "CERITA MEREKA" (line 377): background dari gradient navy → `bg-slate-100`, heading navy, badge & card putih
- ✅ Final CTA "Ayo tumbuh bersama Huniaja.com" (line 589): background dari solid green → `bg-slate-100`, star hijau, tombol putih↔biru hover + tombol WA hijau

### PasangIklanPage
- ✅ 3 partner cards (Pemilik/Agen/Developer) sekarang rata dengan `flex flex-col h-full` + `flex-1` pada ul → tombol sejajar di bawah

### ChatWidget
- ✅ Kembali sebagai chat AI (dipertahankan) dengan tombol handoff "Chat WhatsApp" (tanpa nomor panjang)

### Global Color Standardization
- ✅ `#12B815`, `#DAFF3D`, `#12FF3D` → `#00B512`
- ✅ `#0fa112`, `#c8ee1c` → `#009e0f`

## Backlog (P1/P2)
- P1: QuickCategories — user request untuk menambahkan/mengganti kategori "Cat Rumah" (pending konfirmasi user apakah tambah kategori ke-7 atau replace existing)
- P1: Admin CRUD untuk Articles/Berita + wiring `BeritaPage` ke `/api/articles` (30 artikel sudah ter-seed di Mongo, tinggal CMS)
- P2: User authentication publik ("Daftar / Masuk" untuk buyer/agent, terpisah dari admin flow)
- P2: Favorites system (simpan properti favorit ke akun user)

