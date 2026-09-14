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

### Post-Deploy Auth Persistence Fix + New Features (Feb 14, 2026)
- ✅ **Admin login persistent across restart/redeploy**: `admin_users` collection (bcrypt hash) + `admin_sessions` collection (7-day TTL) di Mongo. `seed_admin(db)` idempotent di startup — env `ADMIN_EMAIL`/`ADMIN_PASSWORD` hanya untuk initial seed. Token survive `supervisorctl restart backend` (14/14 test pass)
- ✅ **Public /login form email+password**: field email/password + toggle show/hide + submit ke `/api/auth/login`, di samping tombol Google. data-testid: `pw-login-email`, `pw-login-password`, `pw-login-submit`
- ✅ **Berita CMS**: Full CRUD dari admin (Tulis/Edit/Hapus) dengan modal form (Judul/Slug/Kategori/Excerpt/Tanggal/Waktu baca/Status/Cover Image upload/Tag/Content). BeritaPage sekarang fetch live dari `GET /api/articles`
- ✅ **CariPropertiPage**: tombol "Filter Lokasi" dipindah ke KIRI dari location tab pills
- ✅ **Footer mobile**: menu disusun 2 kolom di atas logo Huniaja; desktop tetap 3 kolom

### Admin Dashboard Playful Redesign (Feb 14, 2026)
- ✅ **Home panel** dibangun ulang mengikuti mockup edukasi playful: 3-column grid berisi Progres Konten (2 mini bar cards), Properti Populer (3 kartu tint pastel + rating), Pengguna Terdaftar (avatar row + stats)
- ✅ **Middle column**: "Rencana Kelola / Rekomendasi AI" dengan tabs (Hari Ini/Minggu/Bulan) + Prioritas & Backlog card ala Floe subject cards + Pengajuan Terbaru list
- ✅ **Right column**: kartu kuning playful "Huniaja Craft" dengan illustrasi Home + #1 badge + Property Play stats (Views/Likes)
- ✅ **Top bar** disederhanakan: Hello Admin + tanggal + badge pengajuan hari ini + Refresh/Export/tombol +

### Admin Dashboard Floe-Style Redesign (Feb 14, 2026)
- ✅ Shell dibangun ulang mengikuti referensi Floe: sidebar putih dengan icon nav collapsible, section Favourites, badge notifikasi live dari `submissions.new`
- ✅ Top bar unified: search global (⌘F hint) + "Credits remaining" + avatar admin
- ✅ Home panel: filter chips + section **Folders** (4 kartu bertab pastel) + section **Listing Aktif** (kartu image-header)
- ✅ Section **Pengajuan** (`admin-tab-submissions`) — list + filter tipe/status; **tombol Review** buka modal detail dengan payload lengkap + action bar (status, WhatsApp reply, Email, Delete)
- ✅ Section **Pengguna** (`admin-tab-users`) — daftar akun (Google + manual), badge role/auth_type, tombol delete, **modal Tambah Pengguna** (email + password bcrypt + role user/admin)
- ✅ Backend baru:
  - `GET/POST/DELETE /api/admin/users` — CRUD user manual (bcrypt-hashed password)
  - `POST /api/auth/login` — email+password login → set httpOnly session_token cookie (coexist dengan Google Auth di collection `users`/`user_sessions` yang sama)
  - `/admin/stats` diperluas: `submissions.{total,new}` + `users.total`

### PropertyDetailPage — Font Weight (Feb 14, 2026)
- ✅ Nama kategori Fasilitas dari `font-black uppercase` → `font-semibold tracking-wide` supaya lebih ringan & rapi

### ChatWidget
- ✅ Kembali sebagai chat AI (dipertahankan) dengan tombol handoff "Chat WhatsApp" (tanpa nomor panjang)
- ✅ FAB hover: bg berubah hijau → biru `#001DF3` + ring notification dot ikut biru (Feb 14, 2026)

### Halaman Akun + Emergent Google Auth (Feb 14, 2026)
- ✅ **Backend** (`/app/backend/user_routes.py`):
  - `POST /api/auth/session` — exchange session_id (URL fragment) → session_token via `demobackend.emergentagent.com/auth/v1/env/oauth/session-data`; upsert user; set httpOnly cookie
  - `GET /api/auth/me` — verify cookie/Bearer, return user
  - `POST /api/auth/logout` — clear cookie + delete session
  - `GET /api/user/favorites` — hydrated with property snapshots
  - `POST /api/user/favorites/{id}` — toggle
  - `GET /api/user/submissions` — riwayat by user_id atau payload.email
  - Public `POST /api/submissions/{type}` sekarang stamp `user_id` bila session cookie ada
- ✅ **Frontend**:
  - `context/AuthContext.jsx` — global provider, skip `/auth/me` bila URL fragment memuat `session_id=`
  - `pages/AuthCallback.jsx` — synchronous session_id exchange
  - `pages/LoginPage.jsx` — full redesign: tombol "Lanjutkan dengan Google" (data-testid `google-login-button`), redirect ke `window.location.origin + '/auth/callback'`
  - `pages/AkunPage.jsx` — 3 tabs (Profil, Favorit, Riwayat Pengajuan) dengan data-testid
  - `App.js` — AppRoutes cek `location.hash` untuk `session_id` sebelum routing normal
  - `Header.jsx` — DropdownMenu user avatar saat login (Akunku/Favorit/Riwayat/Keluar)
  - `ListingCard.jsx` + `PropertyDetailPage.jsx` — heart button persist ke backend, redirect ke `/login` kalau belum login
- ✅ Testing agent iteration_7: 9/9 backend pass + full frontend flow pass

### BeritaPage Category Icons (Feb 14, 2026)
- ✅ 9 kategori sidebar (Semua, Panduan, KPR, Legal, Tips, Investasi, Keuangan, Subsidi, Keamanan) sekarang punya icon berbeda-beda (LayoutGrid, Compass, Wallet, Scale, Lightbulb, TrendingUp, PiggyBank, BadgePercent, ShieldCheck), warna tetap on-brand

### Global Color Standardization
- ✅ `#12B815`, `#DAFF3D`, `#12FF3D` → `#00B512`
- ✅ `#0fa112`, `#c8ee1c` → `#009e0f`
- ✅ Feb 14, 2026 sweep: semua hex off-brand (amber/pink/sky/purple/red/orange) diganti ke palet resmi (`#000066`/`#001DF3`/`#00B512`/`#FFFFFF`); Tailwind classes `text-red-*`, `bg-sky-*`, `text-yellow-*`, dll juga diganti

## Backlog (P1/P2)
- P1: QuickCategories — user request untuk menambahkan/mengganti kategori "Cat Rumah" (pending konfirmasi user apakah tambah kategori ke-7 atau replace existing)
- P1: Admin CRUD untuk Articles/Berita + wiring `BeritaPage` ke `/api/articles` (30 artikel sudah ter-seed di Mongo, tinggal CMS)
- P2: Notifikasi email/WA saat submission baru masuk (via backend hook)
- P2: My KPR Simulations — simpan hasil kalkulator KPR ke akun user

