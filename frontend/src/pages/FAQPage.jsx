import React, { useState } from "react";
import {
  HelpCircle,
  Home,
  Tag,
  DollarSign,
  FileText,
  Key,
  User,
  ChevronDown,
  Check,
  Search,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CATEGORIES = [
  {
    id: "umum",
    label: "Umum Huniaja",
    Icon: HelpCircle,
    color: "#001DF3",
    qas: [
      {
        q: "Apa itu Huniaja.com?",
        a: "Huniaja.com adalah marketplace properti Indonesia yang menghubungkan pembeli, penjual, agen, dan developer dalam satu platform tepercaya. Kami juga menyediakan layanan pendukung rumah seperti KPR, potong rumput, home cleaning, service AC, dan jaga rumah.",
      },
      {
        q: "Apakah semua layanan Huniaja berbayar?",
        a: "Tidak. Mencari properti, konsultasi awal, simulasi KPR, dan chat AI Dea sepenuhnya gratis. Biaya hanya berlaku untuk layanan premium seperti listing HH Pro, jasa perawatan rumah, dan komisi transaksi (dibayar oleh pihak developer/penjual).",
      },
      {
        q: "Bagaimana cara menghubungi tim Huniaja?",
        a: "Klik ikon Chat AI di kanan bawah layar untuk terhubung langsung dengan asisten kami Dea, atau kirim WhatsApp ke +62 851-1983-3362 (jam operasional 08.00 – 21.00 setiap hari).",
      },
      {
        q: "Apakah Huniaja tersedia di seluruh Indonesia?",
        a: "Ya. Listing properti tersebar di Jabodetabek, Bandung, Surabaya, Semarang, Bali, dan kota-kota besar lain. Layanan tambahan (potong rumput, cleaning, dll.) saat ini fokus di Jabodetabek & Bogor Raya, dan terus meluas.",
      },
    ],
  },
  {
    id: "beli",
    label: "Beli Properti",
    Icon: Home,
    color: "#00B512",
    qas: [
      {
        q: "Bagaimana cara mencari properti yang tepat?",
        a: "Buka menu Beli/Cari Properti, pakai filter di sidebar (tipe, kondisi baru/second/lelang, kota, harga, fasilitas, jenis KPR). Kamu juga bisa ketik nama daerah atau kata kunci di kolom pencarian header.",
      },
      {
        q: "Apakah harga yang tertera sudah final?",
        a: "Harga yang tertera adalah harga awal yang tercatat penjual. Nego selalu dimungkinkan — tim Huniaja akan bantu jembatani antara kamu dan penjual/agen, termasuk penawaran khusus dan cashback developer.",
      },
      {
        q: "Bagaimana kalau saya mau lihat langsung rumahnya?",
        a: "Klik tombol WhatsApp di halaman detail properti — tim kami akan atur jadwal survey (open house) di hari & jam yang kamu tentukan. Gratis, tanpa biaya tambahan.",
      },
      {
        q: "Apakah properti di Huniaja sudah diverifikasi?",
        a: "Setiap listing bertanda 'Terverifikasi' telah melewati proses cek dokumen legalitas dasar oleh tim kami. Untuk verifikasi mendalam (BPN, IMB), tim Huniaja bisa bantu proses due-diligence sebelum kamu commit.",
      },
      {
        q: "Bisakah saya menawar harga lebih rendah?",
        a: "Bisa. Cukup chat WhatsApp dari halaman detail — sertakan angka penawaran & argumentasinya. Tim kami akan follow-up ke penjual dan bantu proses tawar-menawar hingga sepakat.",
      },
    ],
  },
  {
    id: "jual",
    label: "Jual Properti",
    Icon: Tag,
    color: "#000066",
    qas: [
      {
        q: "Bagaimana cara memasang iklan properti di Huniaja?",
        a: "Buka menu Pasang Iklan, isi form dengan detail properti (foto, harga, spesifikasi, dokumen legalitas), dan submit. Tim kami akan verifikasi listing dalam 1×24 jam sebelum ditayangkan.",
      },
      {
        q: "Berapa biaya pasang iklan?",
        a: "Listing standar gratis (untuk 5 unit pertama). Untuk fitur premium seperti banner rotasi, top listing, dan analitik trafik detail, tersedia paket HH Pro — chat tim kami untuk penawaran khusus agen & developer.",
      },
      {
        q: "Berapa lama rata-rata properti terjual?",
        a: "Rata-rata properti dengan foto berkualitas dan harga wajar terjual dalam 45–90 hari. Listing HH Pro rata-rata 30% lebih cepat karena eksposur premium dan bantuan tim negosiasi.",
      },
      {
        q: "Apakah saya harus memakai agen?",
        a: "Tidak wajib. Kamu bisa jual mandiri (FSBO) atau melalui agen mitra Huniaja. Kalau melalui agen, komisi ditanggung penjual (rata-rata 2,5%–3% saat closing) — tim kami bisa rekomendasikan agen top yang cocok dengan tipe properti kamu.",
      },
      {
        q: "Bagaimana kalau ada pembeli yang menawar tapi harga rendah?",
        a: "Semua tawaran masuk lewat WhatsApp/dashboard, tercatat rapi. Kamu bisa terima, tolak, atau counter-offer. Tim Huniaja bantu strategikan agar tetap sesuai target harga tanpa kehilangan momentum.",
      },
    ],
  },
  {
    id: "kpr",
    label: "KPR & Pembiayaan",
    Icon: DollarSign,
    color: "#00B512",
    qas: [
      {
        q: "Apa saja jenis KPR yang tersedia?",
        a: "Huniaja mendukung KPR Konvensional, KPR Syariah (murabahah/ijarah), KPR Subsidi (FLPP), dan skema Rent-to-Own. Simulasikan cicilan langsung di halaman KPR — hasil realistis dari mitra bank kami.",
      },
      {
        q: "Berapa DP minimum untuk KPR?",
        a: "Bank umum: 10–20% dari harga rumah. KPR Subsidi FLPP: minimum 1%. KPR Syariah: 15–20%. Beberapa developer partner memberikan promo 'DP Rp0' untuk unit tertentu — cek badge 'DP Rp0' di listing.",
      },
      {
        q: "Berapa lama proses pengajuan KPR?",
        a: "Rata-rata 3–5 hari kerja dari submit lengkap dokumen hingga SP3K. Tim Huniaja bantu pengumpulan berkas dan komunikasi dengan bank supaya prosesnya tidak molor.",
      },
      {
        q: "Dokumen apa saja yang dibutuhkan?",
        a: "KTP, KK, Slip Gaji 3 bulan terakhir, Rekening Koran 3 bulan, NPWP, dan Surat Pengangkatan Karyawan (untuk karyawan) atau SIUP/TDP (untuk wirausaha). Tim kami akan berikan checklist lengkap sesuai profilmu.",
      },
      {
        q: "Bagaimana kalau pengajuan KPR ditolak?",
        a: "Kami akan bantu telusuri alasan penolakan (biasanya BI Checking, DSR terlalu tinggi, atau dokumen kurang) dan tawarkan alternatif: bank lain, KPR Syariah, atau skema Rent-to-Own dari developer partner.",
      },
    ],
  },
  {
    id: "legal",
    label: "Legalitas & Dokumen",
    Icon: FileText,
    color: "#000066",
    qas: [
      {
        q: "Sertifikat apa saja yang aman untuk dibeli?",
        a: "SHM (Sertifikat Hak Milik) paling aman & kuat. HGB (Hak Guna Bangunan) juga sah, biasanya untuk apartemen atau properti komersial (bisa diperpanjang 30 tahun). Hindari girik/petuk tanpa proses balik nama karena berisiko sengketa.",
      },
      {
        q: "Bagaimana cara mengecek keaslian sertifikat?",
        a: "Bisa dicek langsung di kantor BPN setempat atau via aplikasi Sentuh Tanahku (BPN online). Tim Huniaja juga menyediakan jasa cek sertifikat + due-diligence sebelum kamu kirim DP — biaya terjangkau, hasil aman.",
      },
      {
        q: "Apa itu AJB dan bagaimana prosesnya?",
        a: "AJB (Akta Jual Beli) adalah dokumen resmi peralihan hak milik yang dibuat di hadapan PPAT (Notaris). Setelah AJB, dilanjut proses balik nama di BPN. Rata-rata biaya PPAT + BPN sekitar 1–2% dari harga transaksi.",
      },
      {
        q: "Apa bedanya IMB dan PBG?",
        a: "IMB (Izin Mendirikan Bangunan) adalah istilah lama, kini diganti PBG (Persetujuan Bangunan Gedung) sejak 2021. Fungsinya sama: bukti bangunan legal & sesuai tata ruang. Pastikan sertifikat PBG tersedia sebelum beli.",
      },
    ],
  },
  {
    id: "serah-terima",
    label: "Serah Terima",
    Icon: Key,
    color: "#001DF3",
    qas: [
      {
        q: "Kapan biasanya rumah bisa langsung ditempati?",
        a: "Rumah second: setelah AJB & pelunasan (bisa 1–2 minggu). Rumah baru (indent): 12–24 bulan sesuai progres developer. Ready stock developer: 1–3 bulan setelah pelunasan/akad KPR.",
      },
      {
        q: "Apa yang harus diperiksa saat serah terima?",
        a: "Cek kondisi fisik (dinding, atap, listrik, air), sertifikat asli, kunci semua ruangan, meteran listrik/air, dokumen garansi (untuk rumah baru), dan izin PBG/IMB. Tim Huniaja bisa dampingi proses ini gratis untuk transaksi >Rp 500 juta.",
      },
      {
        q: "Apakah ada garansi setelah beli?",
        a: "Rumah baru dari developer: garansi struktur 5 tahun, garansi non-struktur (atap, pipa, listrik) 3 bulan – 1 tahun. Rumah second: umumnya no warranty, tapi bisa negosiasi klausul perbaikan minor sebelum AJB.",
      },
      {
        q: "Bagaimana kalau setelah pindah ada masalah tersembunyi?",
        a: "Untuk rumah baru, klaim garansi ke developer sesuai buku garansi. Untuk rumah second, tim Huniaja bisa bantu mediasi dengan penjual — biasanya penjual bertanggung jawab untuk cacat tersembunyi yang tidak diinformasikan sebelumnya.",
      },
    ],
  },
  {
    id: "akun",
    label: "Akun & Pembayaran",
    Icon: User,
    color: "#000066",
    qas: [
      {
        q: "Bagaimana cara membuat akun Huniaja?",
        a: "Klik tombol 'Masuk/Daftar' di kanan atas, pilih tab 'Daftar', isi nama, email, dan password. Kamu juga bisa daftar cepat via Google. Setelah daftar, kamu bisa simpan properti favorit dan pantau riwayat konsultasi.",
      },
      {
        q: "Saya lupa password, bagaimana?",
        a: "Klik 'Lupa password?' di halaman Masuk. Link reset akan dikirim ke emailmu — buka & buat password baru dalam 1×24 jam. Kalau email tidak masuk, cek spam atau chat WhatsApp kami untuk bantuan manual.",
      },
      {
        q: "Bagaimana cara pembayaran DP/booking fee?",
        a: "Pembayaran dilakukan langsung ke rekening penjual/developer resmi setelah PPJB. Jangan pernah transfer ke rekening pribadi tanpa dokumen resmi. Tim Huniaja bantu verifikasi rekening tujuan supaya kamu terhindar dari penipuan.",
      },
      {
        q: "Apakah data pribadi saya aman?",
        a: "Ya. Kami pakai enkripsi HTTPS untuk semua data, password di-hash bcrypt, dan tidak pernah membagikan data ke pihak ketiga tanpa persetujuanmu. Baca detail di halaman Kebijakan Privasi.",
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCat, setActiveCat] = useState("umum");
  const [q, setQ] = useState("");
  const [openIdx, setOpenIdx] = useState({});

  const current = CATEGORIES.find((c) => c.id === activeCat) || CATEGORIES[0];
  const filtered = q
    ? current.qas.filter(
        (i) =>
          i.q.toLowerCase().includes(q.toLowerCase()) ||
          i.a.toLowerCase().includes(q.toLowerCase())
      )
    : current.qas;

  const toggle = (i) => setOpenIdx((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#001DF3] text-white pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Pertanyaan Umum (FAQ)
          </h1>
          <p className="mt-3 text-sm md:text-base text-white/90 max-w-2xl">
            Semua yang kamu butuh tahu seputar properti dan proses jual beli di
            Huniaja.com — dijawab lengkap oleh tim ahli kami.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="md:sticky md:top-32 space-y-2.5">
              {CATEGORIES.map((c) => {
                const active = activeCat === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => {
                      setActiveCat(c.id);
                      setOpenIdx({});
                      setQ("");
                    }}
                    data-testid={`faq-cat-${c.id}`}
                    className={`w-full group flex items-center gap-3 rounded-2xl p-2 pr-3 shadow-sm hover:shadow-md transition-all ${
                      active
                        ? "bg-[#001DF3] text-white"
                        : "bg-white border border-slate-200 text-slate-800 hover:border-slate-300"
                    }`}
                  >
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${c.color}20` }}
                    >
                      <c.Icon
                        className="w-5 h-5"
                        style={{ color: c.color }}
                        strokeWidth={2.4}
                      />
                    </span>
                    <span className="flex-1 text-sm font-bold text-left">
                      {c.label}
                    </span>
                    {active ? (
                      <span className="w-7 h-7 rounded-full bg-[#00B512] flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </span>
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                );
              })}

              <div className="hidden md:block mt-6 bg-slate-50 rounded-2xl p-4">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
                  Butuh bantuan lain?
                </p>
                <Link
                  to="/kontak"
                  className="text-sm text-[#001DF3] font-bold hover:underline"
                >
                  Chat tim kami →
                </Link>
                <p className="text-xs text-slate-500 mt-2">
                  Respon rata-rata &lt; 15 menit di jam operasional.
                </p>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="md:col-span-3 space-y-4">
            {/* Search + header */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${current.color}18` }}>
                  <current.Icon className="w-5 h-5" style={{ color: current.color }} />
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
                  data-testid="faq-search"
                  className="w-full h-11 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#001DF3] focus:ring-2 focus:ring-[#001DF3]/15 outline-none pl-11 pr-4 text-sm transition"
                />
              </div>
            </div>

            {/* Q&A cards */}
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
                  data-testid={`faq-item-${i}`}
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
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-black">
                    Pertanyaanmu belum terjawab?
                  </h3>
                  <p className="text-sm text-white/80 mt-1">
                    Tim Huniaja siap bantu langsung via WhatsApp — respon di
                    bawah 15 menit.
                  </p>
                </div>
                <Link
                  to="/kontak"
                  className="bg-white text-[#001DF3] hover:bg-slate-100 font-bold rounded-full px-6 py-3 text-sm shadow-lg inline-flex items-center justify-center transition"
                  data-testid="faq-contact-btn"
                >
                  Chat Tim Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
