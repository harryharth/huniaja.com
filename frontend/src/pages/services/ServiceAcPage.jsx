import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  Phone,
  ArrowRight,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Clock,
  Target,
  Compass,
  Layers,
  BarChart3,
  Rocket,
  Award,
  Star,
  Quote,
  CheckCircle2,
  ChevronDown,
  FileSearch,
  Scale,
  Landmark,
  Wallet,
  LineChart,
  Building2,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { WA_URL, WA_DISPLAY } from "../../components/ChatWidget";

/**
 * Property Investment — landing page storytelling B2C untuk investor
 * Struktur 9 section:
 *  1. HERO       — hook 5 detik
 *  2. PROBLEM    — pain pembeli properti / investor pemula
 *  3. BIG IDEA   — properti = aset yang bisa dihitung, bukan lottery
 *  4. SOLUSI     — 4 pilar layanan
 *  5. PROSES     — 4 langkah (konsultasi → analisis → due diligence → akuisisi)
 *  6. KREDIBILITAS — metodologi 3-lapis + independensi + garansi ROI
 *  7. VISI       — roadmap skala 2026-2028
 *  8. TESTIMONI  — simulasi studi kasus
 *  9. CTA        — form konsultasi investasi
 *
 * Alt headline hero (A/B test):
 *  A (aktif): "Beli properti Rp 500 juta. 5 tahun stagnan. Ini bukan nasib — ini konsekuensi keputusan tanpa data."
 *  B: "Investasi properti yang bisa kamu jelaskan angkanya dalam 3 menit ke pasangan."
 */

const ACCENT = "#00B512";
const ACCENT_SOFT = "#E7FBEA";
const NAVY = "#000066";
const BLUE = "#001DF3";

const WA_MSG =
  "Halo Huniaja, saya tertarik dengan program Property Investment. Bisa dijadwalkan konsultasi gratis?";

export default function PropertyInvestmentPage() {
  const wa = WA_URL(WA_MSG);
  const [form, setForm] = useState({
    nama: "",
    tujuan: "Cashflow bulanan",
    budget: "Rp 500 juta - 1 miliar",
    kota: "",
    timeline: "3-6 bulan",
    pesan: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const text =
      `Halo Huniaja, saya tertarik konsultasi Property Investment.%0A` +
      `%0ANama: ${form.nama}` +
      `%0ATujuan investasi: ${form.tujuan}` +
      `%0ABudget: ${form.budget}` +
      `%0AKota target: ${form.kota}` +
      `%0ATimeline: ${form.timeline}` +
      `%0ACatatan: ${form.pesan}`;
    window.open(`https://wa.me/6285892991482?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* ============ 1. HERO — HOOK 5 DETIK ============ */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: ACCENT_SOFT }}
        data-testid="pi-hero-section"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-12 md:pt-16 pb-14 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-white"
              style={{ backgroundColor: ACCENT }}
            >
              <Sparkles className="w-3.5 h-3.5" /> Advisory · Bukan Sales
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.05]">
              Beli properti Rp 500 juta.
              <br />
              <span style={{ color: ACCENT }}>5 tahun stagnan.</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-slate-700 leading-relaxed max-w-xl">
              Ini bukan nasib. Ini konsekuensi keputusan tanpa data. Huniaja
              Property Investment bantu kamu memisahkan properti yang{" "}
              <em>benar-benar</em> naik nilai dari yang cuma <em>terlihat</em>{" "}
              prospek — sebelum uangmu keluar sepeser pun.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href={wa} target="_blank" rel="noreferrer" data-testid="pi-hero-wa">
                <Button
                  className="rounded-full px-6 h-12 text-sm md:text-base font-bold text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" /> Konsultasi Gratis
                </Button>
              </a>
              <a href="#proses" data-testid="pi-hero-proses">
                <Button
                  variant="outline"
                  className="rounded-full px-6 h-12 text-sm md:text-base font-bold border-2 bg-white"
                  style={{ borderColor: ACCENT, color: ACCENT }}
                >
                  Lihat Cara Kerja <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 flex-wrap text-xs md:text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" style={{ color: ACCENT }} />
                Independen dari developer
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Award className="w-4 h-4" style={{ color: ACCENT }} />
                Garansi ROI tertulis
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" style={{ color: ACCENT }} />
                Laporan 20+ halaman
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-6 rounded-[36px] blur-2xl opacity-30"
              style={{ backgroundColor: ACCENT }}
              aria-hidden
            />
            <div className="relative rounded-[28px] overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=85"
                alt="Property Investment"
                className="w-full h-[340px] md:h-[460px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-slate-100">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0"
                style={{ backgroundColor: ACCENT }}
              >
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                  Layanan Huniaja
                </div>
                <div className="text-sm md:text-base font-bold text-slate-900 leading-tight">
                  Property Investment Advisory
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. PROBLEM — PAIN PEMBELI ============ */}
      <section className="bg-white py-16 md:py-24" data-testid="pi-problem-section">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              02 · Masalah yang Diam-Diam Dirasakan
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              80% investor properti pemula rugi{" "}
              <span style={{ color: ACCENT }}>tanpa sadar</span>.
            </h2>
          </div>

          <div className="mt-8 text-base md:text-lg text-slate-700 leading-[1.85] space-y-5">
            <p>
              Ceritanya hampir selalu sama. Kamu diajak teman ke sales tour
              developer. Suasananya seru — musik, kopi, brosur berkilau. Sales
              bilang <em>"area ini bakal booming, tol baru mau lewat sini,
              tinggal 2 unit terakhir"</em>. Kamu DP karena takut kehabisan.
            </p>
            <p>
              Lima tahun kemudian, tol memang lewat — tapi 3 kilometer dari
              rumahmu. Harga jual sama dengan harga beli. Penyewa susah. Cicilan
              KPR jalan terus. Dan kamu masih menunggu <em>"tahun depan pasti
              naik"</em>.
            </p>
            <p className="font-semibold text-slate-900">
              Kerugian ini tidak selalu terlihat di rekening — tapi terlihat di{" "}
              <em>opportunity cost</em>. Uang yang seharusnya bisa tumbuh 8-12%
              per tahun, malah terkunci di aset yang tidak bergerak.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              "Beli karena 'katanya area ini bakal berkembang' — tanpa cek pertumbuhan historis.",
              "Yield sewa jauh dari ekspektasi (target 8%, realisasi 2%). Cashflow negatif.",
              "Aset 'terkunci' — mau dijual harga sama, mau disewakan penyewa sepi.",
              "Tidak ada exit strategy — properti jadi beban, bukan aset yang bekerja.",
            ].map((pain, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-slate-50 rounded-2xl p-5 border border-slate-100"
                data-testid={`pi-pain-${i + 1}`}
              >
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-black text-xs mt-0.5">
                  ×
                </div>
                <p className="text-sm md:text-[15px] text-slate-800 leading-relaxed">
                  {pain}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3. BIG IDEA / INSIGHT ============ */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: NAVY }}
        data-testid="pi-insight-section"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: ACCENT }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: BLUE }}
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 md:px-6 relative">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">
              03 · Big Idea
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-black text-white leading-[1.1]">
              Properti bukan <span className="line-through opacity-60">lottery</span>.
              <br className="hidden md:block" /> Properti adalah{" "}
              <span style={{ color: "#7DD3FC" }}>aset dengan angka</span> yang
              bisa dihitung.
            </h2>
            <p className="mt-5 text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Setiap keputusan investasi wajib punya jawaban jelas untuk empat
              pertanyaan: <em>Kenapa properti ini? Kenapa lokasi ini? Kenapa
              harga ini? Kenapa sekarang?</em> Kalau jawabannya "feeling saja",
              itu bukan investasi — itu spekulasi. Metodologi kami memaksa
              setiap rekomendasi lewat 3 lapis analisis berbasis data.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                phase: "Makro",
                subtitle: "Lapis 1 · Konteks Wilayah",
                Icon: Compass,
                text:
                  "Pertumbuhan harga historis 5-10 tahun, rencana infrastruktur (tol, MRT, kawasan industri), demografi penyewa, tingkat okupansi kawasan.",
              },
              {
                phase: "Mikro",
                subtitle: "Lapis 2 · Konteks Properti",
                Icon: FileSearch,
                text:
                  "Perbandingan langsung dengan 5-10 properti sekitar (cap rate, harga per m², kondisi legal), analisis vacancy rate, potensi renovasi.",
              },
              {
                phase: "Proyeksi",
                subtitle: "Lapis 3 · Simulasi Masa Depan",
                Icon: LineChart,
                text:
                  "Yield 3, 5, 10 tahun (Gross, Net, Cap Rate, Cash-on-Cash, IRR). Sensitivity analysis — skenario terbaik, terburuk, dan realistis.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white/8 backdrop-blur rounded-2xl p-6 border border-white/15 hover:bg-white/12 transition"
                data-testid={`pi-layer-${i + 1}`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#7DD3FC" }}
                >
                  <p.Icon className="w-5 h-5 text-slate-900" strokeWidth={2.4} />
                </div>
                <div className="mt-4 text-[11px] uppercase tracking-widest text-white/60 font-bold">
                  {p.subtitle}
                </div>
                <div className="text-xl font-black text-white mt-1">
                  {p.phase}
                </div>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-start gap-3 bg-white/10 backdrop-blur rounded-2xl px-5 py-4 border border-white/20">
              <Quote className="w-6 h-6 text-white/70 shrink-0 mt-1" />
              <p className="text-base md:text-lg text-white font-semibold leading-snug text-left">
                "Investasi properti terbaik adalah yang bisa kamu jelaskan
                angkanya dalam 3 menit ke pasangan."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 4. SOLUSI / VALUE PROPOSITION ============ */}
      <section className="bg-white py-16 md:py-24" data-testid="pi-solution-section">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              04 · Value Proposition
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              4 pilar yang menutup semua celah keputusan investasimu.
            </h2>
            <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
              Kami bukan sales developer, bukan agen komisi. Kami advisor
              independen yang dibayar oleh <em>kamu</em> — jadi rekomendasi
              kami hanya berpihak pada tujuan investasimu.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Analisis 3-Lapis Mendalam",
                Icon: LineChart,
                text:
                  "Report tertulis 20+ halaman per properti kandidat: data historis, demografi, cap rate, IRR, sensitivity analysis. Bukan chat, bukan verbal — dokumen yang bisa kamu simpan & audit.",
              },
              {
                title: "Due Diligence Legal & Fisik",
                Icon: Scale,
                text:
                  "Verifikasi SHM/HGB via BPN, cek PBG dan PBB, telusur riwayat sengketa, verifikasi rekam jejak developer. Semua sebelum kamu tanda tangan PPJB — bukan sesudahnya.",
              },
              {
                title: "Simulasi KPR Multi-Bank",
                Icon: Landmark,
                text:
                  "Kami bandingkan skenario KPR di 3-5 bank mitra (bunga, tenor, biaya provisi, penalty pelunasan dipercepat). Rekomendasi pilihan paling optimal untuk profil kredit kamu.",
              },
              {
                title: "Property Management Bulanan (Opsional)",
                Icon: Building2,
                text:
                  "Setelah akuisisi, kami bantu cari penyewa, buat kontrak, kolektif sewa, dan handle maintenance. Kamu terima cashflow bersih tiap bulan — tanpa ribet urus operasional.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-3xl p-6 md:p-8 border border-slate-200 bg-gradient-to-br from-white to-slate-50 hover:shadow-lg transition"
                data-testid={`pi-solution-${i + 1}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: ACCENT_SOFT }}
                  >
                    <s.Icon className="w-6 h-6" style={{ color: ACCENT }} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-slate-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-[15px] text-slate-600 leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. PROSES KERJA ============ */}
      <section
        id="proses"
        className="bg-slate-50 py-16 md:py-24"
        data-testid="pi-process-section"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              05 · Proses Kerja
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              4 langkah, konsultasi awal 100% gratis.
            </h2>
            <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
              Kami hanya minta bayaran ketika kamu setuju melanjutkan ke tahap
              analisis mendalam. Konsultasi tujuan investasi — gratis, tanpa
              obligasi apa pun.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              {
                num: "01",
                title: "Konsultasi Tujuan Investasi",
                time: "Hari 1 · Gratis",
                highlight: true,
                text:
                  "Sesi 60 menit membedah tujuan kamu: cashflow bulanan, apresiasi jangka panjang, tabungan pensiun, atau diversifikasi. Setiap tujuan butuh strategi properti yang berbeda.",
              },
              {
                num: "02",
                title: "Analisis & Rekomendasi",
                time: "Hari 2-14",
                text:
                  "Kami cari 5-10 properti kandidat sesuai profilmu, analisis satu per satu lewat metodologi 3-lapis. Deliverable: laporan tertulis lengkap yang bisa kamu review dulu.",
              },
              {
                num: "03",
                title: "Due Diligence Bareng",
                time: "Hari 15-30",
                text:
                  "Kami dampingi survey fisik ke 2-3 kandidat teratas, cek legalitas ke BPN, verifikasi rekam jejak developer, simulasi KPR bareng mitra bank.",
              },
              {
                num: "04",
                title: "Akuisisi & Property Management",
                time: "Bulan 2+",
                text:
                  "Dari negosiasi harga, akad KPR, sampai serah terima. Setelah itu (opsional): kami bantu carikan penyewa dan handle manajemen properti bulanan.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`rounded-3xl p-6 border transition hover:-translate-y-0.5 ${
                  s.highlight
                    ? "bg-slate-900 text-white border-slate-900 shadow-xl"
                    : "bg-white border-slate-200"
                }`}
                data-testid={`pi-step-${i + 1}`}
              >
                <div
                  className={`text-3xl font-black ${
                    s.highlight ? "text-[#7DD3FC]" : ""
                  }`}
                  style={!s.highlight ? { color: ACCENT } : {}}
                >
                  {s.num}
                </div>
                <div
                  className={`mt-2 text-[11px] uppercase tracking-widest font-bold ${
                    s.highlight ? "text-white/60" : "text-slate-500"
                  }`}
                >
                  {s.time}
                </div>
                <h3
                  className={`mt-1 text-base md:text-lg font-black leading-tight ${
                    s.highlight ? "text-white" : "text-slate-900"
                  }`}
                >
                  {s.title}
                  {s.highlight && (
                    <span
                      className="ml-2 inline-block text-white text-[10px] uppercase font-black px-2 py-0.5 rounded-full align-middle"
                      style={{ backgroundColor: ACCENT }}
                    >
                      Gratis
                    </span>
                  )}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    s.highlight ? "text-white/85" : "text-slate-600"
                  }`}
                >
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6. KREDIBILITAS ============ */}
      <section className="bg-white py-16 md:py-24" data-testid="pi-credibility-section">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              06 · Kredibilitas
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Apa yang membuat rekomendasi kami{" "}
              <span style={{ color: ACCENT }}>bisa dipercaya</span>?
            </h2>
            <div className="mt-6 text-base md:text-lg text-slate-700 leading-[1.85] space-y-4">
              <p>
                Kami launch <strong>9 September 2026</strong>, dan itu kami
                bingkai sebagai keunggulan — bukan kekurangan. Tim advisor kami
                terdiri dari analyst dengan pengalaman kolektif menghandle
                portfolio properti puluhan miliar sebelum bergabung.
              </p>
              <p>
                Yang benar-benar membedakan kami: kami{" "}
                <strong>tidak menerima komisi dari developer</strong>. Fee kami
                dibayar oleh kamu, jadi loyalty kami hanya ke tujuan investasimu
                — bukan ke unit yang paling sulit dijual developer.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              {
                title: "Metodologi 3-Lapis",
                subtitle: "Report 20+ halaman/properti",
                Icon: LineChart,
              },
              {
                title: "Independensi",
                subtitle: "Zero komisi developer",
                Icon: ShieldCheck,
              },
              {
                title: "Garansi ROI",
                subtitle: "Refund 50% jika meleset >30%",
                Icon: Award,
              },
              {
                title: "Legal Partner",
                subtitle: "Notaris + BPN checker",
                Icon: Scale,
              },
              {
                title: "Multi-Bank KPR",
                subtitle: "3-5 bank mitra, bunga optimal",
                Icon: Landmark,
              },
              {
                title: "Property Management",
                subtitle: "End-to-end setelah akuisisi",
                Icon: Building2,
              },
            ].map((c, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 border border-slate-200 bg-gradient-to-br from-slate-50 to-white hover:shadow-md transition"
                data-testid={`pi-cred-${i + 1}`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: ACCENT_SOFT }}
                >
                  <c.Icon className="w-5 h-5" style={{ color: ACCENT }} strokeWidth={2.2} />
                </div>
                <div className="mt-3 text-sm font-black text-slate-900">
                  {c.title}
                </div>
                <div className="text-xs text-slate-500 mt-0.5 leading-tight">
                  {c.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7. VISI & POTENSI SKALA ============ */}
      <section
        className="py-16 md:py-24"
        style={{ background: `linear-gradient(135deg, ${ACCENT_SOFT} 0%, #fff 60%)` }}
        data-testid="pi-vision-section"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              07 · Visi &amp; Potensi Skala
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Dari 1 properti hari ini, ke{" "}
              <span style={{ color: ACCENT }}>portfolio lintas kota</span> dalam
              24 bulan.
            </h2>
            <p className="mt-5 text-base md:text-lg text-slate-700 leading-relaxed">
              Investasi properti terbaik dilakukan bertahap. Kami rancang
              hubungan dengan setiap investor sebagai kemitraan jangka panjang:
              dari properti pertama, review portfolio 6 bulanan, hingga
              diversifikasi ke kota-kota berkembang saat cashflow sudah stabil.
            </p>
          </div>

          <div className="mt-12 relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-slate-200" />
            <div className="grid md:grid-cols-3 gap-6 md:gap-10 relative">
              {[
                {
                  year: "Q1-Q2 2026",
                  title: "Foundation",
                  Icon: Rocket,
                  text:
                    "Launch resmi (9 September 2026). Standarisasi metodologi 3-lapis, database 200+ properti Jabodetabek, onboarding 10 investor pilot.",
                },
                {
                  year: "Q3-Q4 2026 → 2027",
                  title: "Coverage Growth",
                  Icon: BarChart3,
                  text:
                    "Ekspansi database ke 500+ properti aktif (Jabodetabek, Bandung, Surabaya, Bali). Rilis platform review portfolio & buka model performance-based per closing.",
                },
                {
                  year: "2027 - 2028",
                  title: "Scale Nasional",
                  Icon: Award,
                  text:
                    "Target 5.000+ properti tervalidasi di 10 kota utama Indonesia. Launch produk syariah investment + eksplorasi struktur REIT untuk investor skala mid-market.",
                },
              ].map((m, i) => (
                <div
                  key={i}
                  className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center md:text-left"
                  data-testid={`pi-vision-${i + 1}`}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 text-white"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <m.Icon className="w-7 h-7" strokeWidth={2.2} />
                  </div>
                  <div className="mt-4 text-[11px] uppercase tracking-widest font-bold text-slate-500">
                    {m.year}
                  </div>
                  <div className="mt-1 text-lg md:text-xl font-black text-slate-900">
                    {m.title}
                  </div>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 text-center text-sm md:text-base text-slate-600 italic max-w-2xl mx-auto">
            "Investor yang bergabung di fase Foundation punya kesempatan tumbuh
            bersama tim kami sejak hari pertama — dengan tarif dan akses yang
            tidak akan tersedia lagi setelah skala nasional."
          </p>
        </div>
      </section>

      {/* ============ 8. TESTIMONI / SIMULASI STUDI KASUS ============ */}
      <section className="bg-slate-50 py-16 md:py-24" data-testid="pi-testimonial-section">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              08 · Simulasi Studi Kasus
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Cerita dari investor pilot 2026.
            </h2>
            <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
              Karena kami baru launch September 2026, testimoni di bawah kami
              bingkai sebagai{" "}
              <em>simulasi studi kasus dari investor pilot</em> — transparansi
              lebih penting dari klaim yang tidak bisa diverifikasi.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Dokter Muda · Portfolio 3 Properti",
                place: "Bogor & Depok",
                tag: "Pilot Investor Q4 2026",
                quote:
                  "Sebelum Huniaja, saya beli properti hanya karena 'kata teman lokasi ini bakal booming'. 5 tahun stagnan. Dengan metodologi 3-lapis, properti ke-3 saya di Bogor terhitung yield 9,8%/tahun dan apresiasi 14% di 18 bulan. Angka bicara.",
              },
              {
                name: "Business Owner · Investor Pertama Kali",
                place: "Kost Mahasiswa · Depok",
                tag: "Simulasi Studi Kasus 2026",
                quote:
                  "Umur 35 baru mulai investasi properti. Bingung banget. Tim Huniaja audit tujuan saya (pensiun dini di 45 tahun), rekomendasikan 2 kost dekat kampus dengan yield 15-18%. Sekarang cashflow bersih Rp 12 juta/bulan pasif.",
              },
              {
                name: "Corporate Executive · Diversifikasi",
                place: "4 Properti Aktif · Jabodetabek",
                tag: "Simulasi Studi Kasus 2026",
                quote:
                  "Yang bikin beda: mereka SANGGUP bilang 'jangan beli ini' walau berarti kehilangan komisi. Itu langka di industri. Sekarang 4 properti aktif, semua yield di atas 8%, tidak ada yang loss — dan saya masih pegang laporan tertulisnya.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col"
                data-testid={`pi-testi-${i + 1}`}
              >
                <div className="flex items-center gap-1" style={{ color: ACCENT }}>
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm md:text-[15px] text-slate-800 leading-relaxed flex-1">
                  "{t.quote}"
                </p>
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="text-sm font-bold text-slate-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{t.place}</div>
                  <div className="mt-2 inline-block text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                    {t.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 9. CTA PENUTUP ============ */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: NAVY }}
        data-testid="pi-cta-section"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-start">
          <div className="text-white">
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">
              09 · Ajakan Konsultasi
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-black leading-[1.1]">
              Mulai dengan{" "}
              <span style={{ color: "#7DD3FC" }}>konsultasi gratis</span> 60
              menit. Baru putuskan langkah berikutnya.
            </h2>
            <p className="mt-5 text-base md:text-lg text-white/80 leading-relaxed">
              Tidak ada komitmen. Tidak ada high-pressure sales. Cukup diskusi
              tujuan investasi kamu, dan kami kasih insight awal (gratis) yang
              bisa langsung kamu pakai — walau nanti tidak melanjutkan dengan
              kami.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Konsultasi tujuan investasi 60 menit — 100% gratis",
                "Insight strategi & rekomendasi awal — bawa pulang walau tidak lanjut",
                "Independen: kami tidak menerima komisi dari developer",
                "Garansi ROI tertulis untuk paket analisis mendalam",
              ].map((it, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90">
                  <CheckCircle2
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: "#7DD3FC" }}
                    strokeWidth={2.4}
                  />
                  <span className="text-sm md:text-base">{it}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={wa} target="_blank" rel="noreferrer" data-testid="pi-final-wa">
                <Button
                  className="rounded-full px-6 h-12 text-sm md:text-base font-bold text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" /> Konsultasi via WhatsApp
                </Button>
              </a>
              <Link to="/kontak" data-testid="pi-final-kontak">
                <Button
                  variant="outline"
                  className="rounded-full px-6 h-12 text-sm md:text-base font-bold bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900"
                >
                  <Phone className="w-4 h-4 mr-2" /> Halaman Kontak
                </Button>
              </Link>
            </div>
            <div className="mt-5 text-xs md:text-sm text-white/60">
              WhatsApp {WA_DISPLAY} · Aktif setiap hari 08.00 – 21.00
            </div>
          </div>

          {/* Right: Consultation form */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
            {!submitted ? (
              <>
                <h3 className="text-xl md:text-2xl font-black text-slate-900">
                  Ajukan Konsultasi Gratis
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Isi 6 field singkat — tim advisor kami akan follow-up via
                  WhatsApp dalam 15 menit.
                </p>
                <form onSubmit={submit} className="mt-5 space-y-3">
                  <Field
                    label="Nama"
                    testid="pi-form-nama"
                    value={form.nama}
                    onChange={(v) => setForm({ ...form, nama: v })}
                    required
                  />
                  <Select
                    label="Tujuan investasi utama"
                    testid="pi-form-tujuan"
                    value={form.tujuan}
                    onChange={(v) => setForm({ ...form, tujuan: v })}
                    options={[
                      "Cashflow bulanan",
                      "Apresiasi jangka panjang",
                      "Tabungan pensiun",
                      "Diversifikasi portfolio",
                      "Belum yakin",
                    ]}
                  />
                  <Select
                    label="Rentang budget"
                    testid="pi-form-budget"
                    value={form.budget}
                    onChange={(v) => setForm({ ...form, budget: v })}
                    options={[
                      "Di bawah Rp 500 juta",
                      "Rp 500 juta - 1 miliar",
                      "Rp 1 - 3 miliar",
                      "Rp 3 - 10 miliar",
                      "Di atas Rp 10 miliar",
                    ]}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <Field
                      label="Kota target"
                      testid="pi-form-kota"
                      value={form.kota}
                      onChange={(v) => setForm({ ...form, kota: v })}
                      placeholder="mis. Bogor"
                    />
                    <Select
                      label="Timeline"
                      testid="pi-form-timeline"
                      value={form.timeline}
                      onChange={(v) => setForm({ ...form, timeline: v })}
                      options={[
                        "Segera (< 3 bulan)",
                        "3-6 bulan",
                        "6-12 bulan",
                        "Riset dulu",
                      ]}
                    />
                  </div>
                  <TextArea
                    label="Catatan tambahan"
                    testid="pi-form-pesan"
                    value={form.pesan}
                    onChange={(v) => setForm({ ...form, pesan: v })}
                    placeholder="Ceritakan singkat kondisi finansial & pengalaman investasi kamu..."
                  />
                  <Button
                    type="submit"
                    className="w-full rounded-full h-12 text-sm md:text-base font-bold text-white"
                    style={{ backgroundColor: ACCENT }}
                    data-testid="pi-form-submit"
                  >
                    Kirim ke Tim Advisor <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                    Data kamu diteruskan ke WhatsApp tim Huniaja. Kami tidak
                    menyimpan data di server publik.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{ backgroundColor: ACCENT }}
                >
                  <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={2.4} />
                </div>
                <h3 className="mt-4 text-xl font-black text-slate-900">
                  Terima kasih!
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Data kamu sudah kami buka di WhatsApp. Advisor Huniaja akan
                  follow-up dalam 15 menit di jam kerja.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-semibold underline"
                  style={{ color: ACCENT }}
                >
                  Ajukan konsultasi lain
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ============ Form sub-components ============
function Field({ label, value, onChange, required, testid, placeholder }) {
  return (
    <label className="block">
      <span className="text-xs font-bold text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <input
        type="text"
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        data-testid={testid}
        className="mt-1.5 w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00B512] focus:bg-white transition"
      />
    </label>
  );
}

function TextArea({ label, value, onChange, testid, placeholder }) {
  return (
    <label className="block">
      <span className="text-xs font-bold text-slate-700">{label}</span>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        data-testid={testid}
        rows={3}
        className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00B512] focus:bg-white transition resize-none"
      />
    </label>
  );
}

function Select({ label, value, onChange, options, testid }) {
  return (
    <label className="block">
      <span className="text-xs font-bold text-slate-700">{label}</span>
      <div className="relative mt-1.5">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          data-testid={testid}
          className="w-full h-11 pl-4 pr-9 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00B512] focus:bg-white transition appearance-none"
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </label>
  );
}
