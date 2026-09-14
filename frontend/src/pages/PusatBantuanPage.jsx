import React, { useState } from "react";
import {
  Home,
  Tag,
  DollarSign,
  FileText,
  User,
  Wrench,
  MessageCircle,
  ChevronDown,
  Check,
  Search,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { WA_URL } from "../components/ChatWidget";

const TOPICS = [
  {
    id: "beli",
    label: "Bantuan Beli",
    Icon: Home,
    color: "#00B512",
    items: [
      { q: "Bagaimana cara mencari properti yang cocok?", a: "Gunakan filter di halaman Cari Properti — tipe, kota, harga, dan fasilitas. Ketik lokasi favorit di search bar header untuk hasil paling relevan." },
      { q: "Apakah saya harus daftar akun dulu?", a: "Tidak wajib. Kamu bisa mencari, melihat detail, dan menghubungi tim tanpa akun. Daftar hanya diperlukan bila kamu ingin simpan properti favorit." },
      { q: "Bagaimana cara menawar harga?", a: "Klik Chat WhatsApp di halaman detail, sertakan angka penawaranmu — tim kami bantu jembatani ke penjual/agen." },
      { q: "Kapan saya bisa lihat rumahnya langsung?", a: "Setelah chat WhatsApp, tim akan atur jadwal survey (open house) gratis di hari & jam yang kamu pilih." },
    ],
  },
  {
    id: "jual",
    label: "Bantuan Jual",
    Icon: Tag,
    color: "#000066",
    items: [
      { q: "Bagaimana cara pasang iklan?", a: "Buka menu Pasang Iklan, isi form (foto, harga, spesifikasi, dokumen). Tim kami verifikasi 1×24 jam sebelum tayang." },
      { q: "Berapa lama iklan bisa aktif?", a: "Iklan gratis aktif 90 hari, bisa diperpanjang otomatis. Paket HH Pro punya durasi & prioritas lebih tinggi." },
      { q: "Bagaimana kalau ada pembeli menawar rendah?", a: "Semua tawaran tercatat di dashboard. Kamu bebas terima/tolak/counter — tim kami bantu strategi negosiasi." },
      { q: "Bisa jual mandiri tanpa agen?", a: "Bisa. Listing tetap gratis, tanpa komisi. Kalau butuh agen top, kami bisa rekomendasikan yang cocok untuk tipe propertimu." },
    ],
  },
  {
    id: "kpr",
    label: "Bantuan KPR",
    Icon: DollarSign,
    color: "#00B512",
    items: [
      { q: "Apa saja jenis KPR yang didukung?", a: "Konvensional, Syariah (murabahah/ijarah), Subsidi FLPP, dan Rent-to-Own. Simulasi cicilan tersedia di halaman KPR." },
      { q: "Berapa DP minimum?", a: "Bank umum 10–20%, Syariah 15–20%, Subsidi FLPP mulai 1%. Beberapa developer partner ada promo DP Rp0." },
      { q: "Berapa lama proses persetujuan?", a: "Rata-rata 3–5 hari kerja untuk SP3K. Tim Huniaja bantu koordinasi supaya tidak molor." },
      { q: "Kalau KPR ditolak?", a: "Kami telusuri alasannya dan tawarkan alternatif: bank lain, Syariah, atau Rent-to-Own developer partner." },
    ],
  },
  {
    id: "legal",
    label: "Legalitas",
    Icon: FileText,
    color: "#000066",
    items: [
      { q: "Sertifikat apa yang paling aman?", a: "SHM (Sertifikat Hak Milik) paling kuat. HGB juga sah untuk apartemen/komersial. Hindari girik tanpa proses balik nama." },
      { q: "Bagaimana cek keaslian sertifikat?", a: "Bisa langsung di kantor BPN atau via aplikasi Sentuh Tanahku. Tim kami juga menyediakan jasa cek + due-diligence." },
      { q: "Apa itu AJB dan PBG?", a: "AJB = Akta Jual Beli (dokumen resmi peralihan hak, dibuat oleh PPAT). PBG = pengganti IMB, izin bangunan sesuai tata ruang." },
    ],
  },
  {
    id: "akun",
    label: "Akun & Pembayaran",
    Icon: User,
    color: "#001DF3",
    items: [
      { q: "Cara membuat akun?", a: "Klik 'Masuk/Daftar' di header, pilih tab Daftar, isi data atau langsung pakai Google." },
      { q: "Lupa password?", a: "Klik 'Lupa password?' di halaman Masuk. Link reset dikirim ke email, valid 1×24 jam." },
      { q: "Bagaimana cara pembayaran DP?", a: "Transfer langsung ke rekening resmi penjual/developer setelah PPJB. Jangan pernah ke rekening pribadi tanpa dokumen." },
      { q: "Data pribadi saya aman?", a: "Ya. Semua data pakai HTTPS + enkripsi. Password admin di-hash bcrypt. Kami tidak jual data ke pihak ketiga." },
    ],
  },
  {
    id: "layanan",
    label: "Layanan Rumah",
    Icon: Wrench,
    color: "#001DF3",
    items: [
      { q: "Layanan apa saja yang tersedia?", a: "Potong Rumput, Home Cleaning, Service AC, dan Jaga Rumah — semua dilayani mitra terverifikasi Huniaja." },
      { q: "Area layanan?", a: "Saat ini Jabodetabek & Bogor Raya. Terus meluas ke kota besar lain." },
      { q: "Harga fixed atau nego?", a: "Setiap layanan punya paket standar, tapi tim bisa buatkan penawaran khusus sesuai ukuran rumah & frekuensi." },
      { q: "Ada garansi?", a: "Semua layanan bergaransi. Kalau hasil kurang memuaskan, tim balik gratis di hari yang sama." },
    ],
  },
];

export default function PusatBantuanPage() {
  const [active, setActive] = useState("beli");
  const [q, setQ] = useState("");
  const [openIdx, setOpenIdx] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const current = TOPICS.find((t) => t.id === active) || TOPICS[0];
  const filtered = q
    ? current.items.filter(
        (i) =>
          i.q.toLowerCase().includes(q.toLowerCase()) ||
          i.a.toLowerCase().includes(q.toLowerCase())
      )
    : current.items;

  const toggle = (i) => setOpenIdx((p) => ({ ...p, [i]: !p[i] }));

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#001DF3] text-white pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Pusat Bantuan
          </h1>
          <p className="mt-3 text-sm md:text-base text-white/90 max-w-2xl">
            Kami di sini untukmu. Temukan panduan cepat untuk beli, jual, KPR,
            legalitas, akun, dan layanan rumah — semuanya dijawab tim Huniaja.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Mobile-only category dropdown trigger */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              data-testid="pb-mobile-menu-toggle"
              className="w-full flex items-center gap-3 rounded-2xl p-2 pr-3 shadow-sm bg-[#001DF3] text-white"
            >
              <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white/15">
                <current.Icon className="w-5 h-5 text-white" strokeWidth={2.4} />
              </span>
              <span className="flex-1 text-left">
                <span className="block text-[10px] uppercase tracking-wider font-bold text-white/70">
                  Kategori
                </span>
                <span className="text-sm font-bold">{current.label}</span>
              </span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 transition-transform ${
                  mobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div
              className={`md:sticky md:top-32 space-y-2.5 ${
                mobileMenuOpen ? "block" : "hidden md:block"
              }`}
            >
              {TOPICS.map((t) => {
                const isActive = active === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setActive(t.id);
                      setOpenIdx({});
                      setQ("");
                      setMobileMenuOpen(false);
                    }}
                    data-testid={`pb-cat-${t.id}`}
                    className={`w-full group flex items-center gap-3 rounded-2xl p-2 pr-3 shadow-sm hover:shadow-md transition-all ${
                      isActive
                        ? "bg-[#001DF3] text-white"
                        : "bg-white border border-slate-200 text-slate-800 hover:border-slate-300"
                    }`}
                  >
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${t.color}20` }}
                    >
                      <t.Icon
                        className="w-5 h-5"
                        style={{ color: t.color }}
                        strokeWidth={2.4}
                      />
                    </span>
                    <span className="flex-1 text-sm font-bold text-left">
                      {t.label}
                    </span>
                    {isActive ? (
                      <span className="w-7 h-7 rounded-full bg-[#00B512] flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </span>
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                );
              })}

              {/* Contact panels */}
              <div className="hidden md:block mt-6 space-y-3">
                <div className="bg-slate-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500 font-bold">
                    <Clock className="w-3.5 h-3.5" /> Jam Operasional
                  </div>
                  <p className="text-sm text-slate-700 mt-2">08.00 – 21.00</p>
                  <p className="text-xs text-slate-500">Setiap hari</p>
                </div>
                <a
                  href={WA_URL()}
                  target="_blank"
                  rel="noreferrer"
                  className="block bg-[#00B512] hover:bg-[#009e0f] text-white rounded-2xl p-4 transition"
                >
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold opacity-90">
                    <MessageCircle className="w-3.5 h-3.5" /> Chat langsung
                  </div>
                  <p className="text-sm font-bold mt-1">+62 851-1983-3362</p>
                </a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="md:col-span-3 space-y-4">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${current.color}18` }}
                >
                  <current.Icon
                    className="w-5 h-5"
                    style={{ color: current.color }}
                  />
                </div>
                <h2 className="text-lg md:text-xl font-black text-slate-900">
                  {current.label}
                </h2>
              </div>
              <div className="mt-4 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder={`Cari di ${current.label.toLowerCase()}...`}
                  data-testid="pb-search"
                  className="w-full h-11 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#001DF3] focus:ring-2 focus:ring-[#001DF3]/15 outline-none pl-11 pr-4 text-sm transition"
                />
              </div>
            </div>

            {filtered.length === 0 && (
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 text-center">
                <p className="text-slate-500 text-sm">
                  Tidak ada hasil untuk "{q}". Coba kata kunci lain atau chat
                  tim kami di WhatsApp.
                </p>
              </div>
            )}
            {filtered.map((qa, i) => {
              const open = !!openIdx[i];
              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
                  data-testid={`pb-item-${i}`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-start justify-between gap-4 text-left p-5 md:p-6 hover:bg-slate-50 transition"
                  >
                    <span className="text-base md:text-lg font-bold text-slate-900 leading-snug">
                      {qa.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-slate-400 transition-transform mt-1 ${
                        open ? "rotate-180 text-[#001DF3]" : ""
                      }`}
                    />
                  </button>
                  {open && (
                    <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-[15px] text-slate-600 leading-relaxed">
                      {qa.a}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Contact CTA */}
            <div
              className="rounded-3xl p-6 md:p-8 text-white mt-6"
              style={{
                background: "linear-gradient(135deg, #000066 0%, #001DF3 100%)",
              }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-black">
                    Butuh bantuan langsung?
                  </h3>
                  <p className="text-sm text-white/80 mt-1">
                    Chat tim kami di WhatsApp — respon rata-rata &lt; 15 menit
                    di jam operasional.
                  </p>
                </div>
                <a
                  href={WA_URL()}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-[#001DF3] hover:bg-slate-100 font-bold rounded-full px-6 py-3 text-sm shadow-lg inline-flex items-center justify-center transition"
                  data-testid="pb-wa-btn"
                >
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
