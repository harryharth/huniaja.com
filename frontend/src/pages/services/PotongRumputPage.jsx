import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  Phone,
  ArrowRight,
  Megaphone,
  Sparkles,
  ShieldCheck,
  Clock,
  Target,
  Compass,
  Layers,
  Users,
  BarChart3,
  Rocket,
  Award,
  Star,
  Quote,
  CheckCircle2,
  MapPin,
  ChevronDown,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { WA_URL, WA_DISPLAY } from "../../components/ChatWidget";

/**
 * Digital Marketing Properti — landing page storytelling B2B
 * Struktur 9 section:
 *  1. HERO       — hook 5 detik
 *  2. PROBLEM    — pain developer
 *  3. BIG IDEA   — sudut pandang unik (buyer journey 180 hari)
 *  4. SOLUSI     — 4 pilar corong
 *  5. PROSES     — 4 langkah (dengan Pilot 14 Hari)
 *  6. KREDIBILITAS — sertifikasi + fokus niche
 *  7. VISI       — potensi skala 2027
 *  8. TESTIMONI  — simulasi studi kasus
 *  9. CTA        — ajakan partnership
 *
 * Alt headline hero (A/B test):
 *  A (aktif): "Rp 30 juta iklan properti. 5 leads. 0 closing. Ini bukan cerita developer lain — ini cerita industri."
 *  B: "Dari scroll ke akad: strategi digital marketing yang dirancang khusus untuk siklus beli properti Indonesia."
 */

const ACCENT = "#001DF3";
const ACCENT_SOFT = "#EEF2FF";
const GREEN = "#00B512";
const NAVY = "#000066";

const WA_MSG =
  "Halo Huniaja, saya tertarik dengan program Partnership Digital Marketing Properti. Bisa kirim detail Pilot 14 Hari?";

export default function DigitalMarketingPage() {
  const wa = WA_URL(WA_MSG);
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({
    nama: "",
    perusahaan: "",
    role: "Developer",
    unit: "",
    channel: "Meta Ads",
    pesan: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const text =
      `Halo Huniaja, saya tertarik program Partnership Digital Marketing.%0A` +
      `%0ANama: ${form.nama}` +
      `%0APerusahaan: ${form.perusahaan}` +
      `%0ARole: ${form.role}` +
      `%0AJumlah unit / portfolio: ${form.unit}` +
      `%0AChannel yang sedang dipakai: ${form.channel}` +
      `%0AKebutuhan utama: ${form.pesan}`;
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
        data-testid="dm-hero-section"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-12 md:pt-16 pb-14 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-white"
              style={{ backgroundColor: ACCENT }}
            >
              <Sparkles className="w-3.5 h-3.5" /> Partnership Digital Marketing
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.05]">
              Rp 30 juta iklan properti.
              <br />
              <span style={{ color: ACCENT }}>5 leads. 0 closing.</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-slate-700 leading-relaxed max-w-xl">
              Ini bukan cerita satu developer — ini cerita industri kita. Huniaja
              hadir sebagai partner digital marketing yang mengerti bahwa properti
              bukan produk retail. Kami bantu developer, agen, dan mitra properti
              menemukan pembeli yang benar-benar siap tanda tangan.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href={wa} target="_blank" rel="noreferrer" data-testid="dm-hero-wa">
                <Button
                  className="rounded-full px-6 h-12 text-sm md:text-base font-bold text-white"
                  style={{ backgroundColor: GREEN }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" /> Diskusi via WhatsApp
                </Button>
              </a>
              <a href="#pilot" data-testid="dm-hero-pilot">
                <Button
                  variant="outline"
                  className="rounded-full px-6 h-12 text-sm md:text-base font-bold border-2 bg-white"
                  style={{ borderColor: ACCENT, color: ACCENT }}
                >
                  Lihat Pilot 14 Hari <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 flex-wrap text-xs md:text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" style={{ color: ACCENT }} />
                Certified Google Ads · Meta · TikTok
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" style={{ color: ACCENT }} />
                Respon &lt; 15 menit
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=85"
                alt="Digital Marketing Properti"
                className="w-full h-[340px] md:h-[460px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-slate-100">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0"
                style={{ backgroundColor: ACCENT }}
              >
                <Megaphone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                  Layanan Huniaja
                </div>
                <div className="text-sm md:text-base font-bold text-slate-900 leading-tight">
                  Digital Marketing Properti
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. PROBLEM — PAIN DEVELOPER ============ */}
      <section className="bg-white py-16 md:py-24" data-testid="dm-problem-section">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              02 · Masalah yang Dirasakan
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Setiap developer punya cerita yang sama.
            </h2>
          </div>
          <div className="mt-8 text-base md:text-lg text-slate-700 leading-[1.85] space-y-5">
            <p>
              Kamu sudah pasang iklan di 5 platform. Fotonya bagus, budget-nya
              tidak tanggung-tanggung. Tapi minggu ini leads yang masuk cuma tiga
              — dan semuanya cuma tanya <em>"harga netto berapa?"</em> lalu
              menghilang tanpa jejak.
            </p>
            <p>
              Bulan depan, kamu ganti agency. Bulan depannya lagi, kamu buka
              lowongan digital marketer sendiri. Bulan depannya lagi, tim
              internal tersedot ke ops proyek — dashboard iklan terbengkalai.
            </p>
            <p className="font-semibold text-slate-900">
              Siklus ini berulang di ratusan developer, agen, dan pemilik proyek
              — karena masalahnya bukan platform yang salah. Tapi cara berpikir
              tentang <em>buyer properti</em> yang salah.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              "Leads masuk banyak, tapi mayoritas 'window shopping' — tidak niat beli sungguhan.",
              "Cost per lead terus naik. ROAS sulit dijelaskan ke bos atau investor.",
              "Agency gonta-ganti creative, tapi angka akhirnya sama saja.",
              "Tim internal sibuk urus operasional proyek, tidak sempat optimasi iklan harian.",
            ].map((pain, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-slate-50 rounded-2xl p-5 border border-slate-100"
                data-testid={`dm-pain-${i + 1}`}
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
        style={{ backgroundColor: GREEN }}
        data-testid="dm-insight-section"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: "#FFFFFF" }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: NAVY }}
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 md:px-6 relative">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-white/70">
              03 · Big Idea
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-black text-white leading-[1.1]">
              Membeli rumah itu <span style={{ color: "#FEF3C7" }}>perjalanan 180 hari</span>
              <br className="hidden md:block" /> — bukan keputusan 5 menit.
            </h2>
            <p className="mt-5 text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Kebanyakan iklan properti bicara ke semua fase buyer dengan pesan
              yang sama. Padahal setiap fase butuh konten, format, bahkan channel
              yang berbeda. Insight ini bukan teori — ini pola beli properti
              Indonesia yang berulang di tiap segmen, dari starter home sampai
              luxury.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                phase: "Awareness",
                subtitle: "Hari 1-45",
                Icon: Compass,
                text:
                  "Buyer baru sadar butuh rumah. Cari tahu area, harga pasaran, kisaran KPR. Konten yang menang: edukasi ringan, tur virtual, snapshot lokasi.",
              },
              {
                phase: "Consideration",
                subtitle: "Hari 46-135",
                Icon: Layers,
                text:
                  "Bandingkan 5-10 listing serius. Hitung KPR, tanya keluarga, cek review. Konten yang menang: perbandingan spec, simulasi cicilan, review lingkungan.",
              },
              {
                phase: "Decision",
                subtitle: "Hari 136-180",
                Icon: Target,
                text:
                  "Sudah shortlist 2-3 unit. Siap survey dan tanda tangan. Konten yang menang: promo terbatas, testimoni penghuni, urgency yang jujur.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white/12 backdrop-blur rounded-2xl p-6 border border-white/25 hover:bg-white/18 transition"
                data-testid={`dm-phase-${i + 1}`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center bg-white"
                >
                  <p.Icon className="w-5 h-5" style={{ color: GREEN }} strokeWidth={2.4} />
                </div>
                <div className="mt-4 text-[11px] uppercase tracking-widest text-white/70 font-bold">
                  {p.subtitle}
                </div>
                <div className="text-xl font-black text-white mt-1">
                  {p.phase}
                </div>
                <p className="mt-3 text-sm text-white/90 leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-start gap-3 bg-white/15 backdrop-blur rounded-2xl px-5 py-4 border border-white/25">
              <Quote className="w-6 h-6 text-white/80 shrink-0 mt-1" />
              <p className="text-base md:text-lg text-white font-semibold leading-snug text-left">
                "Iklan yang menang di properti bukan yang paling gencar — tapi
                yang paling paham kapan buyer siap dihubungi."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 4. SOLUSI / VALUE PROPOSITION ============ */}
      <section className="bg-white py-16 md:py-24" data-testid="dm-solution-section">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              04 · Value Proposition
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              4 pilar corong yang kami rancang khusus untuk properti Indonesia.
            </h2>
            <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
              Bukan template agency generik. Setiap pilar dibangun mengikuti
              siklus beli 180 hari yang sudah kami petakan di section sebelumnya.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Storytelling Per-Listing",
                Icon: Compass,
                text:
                  "Narasi tiga-fase Awareness → Consideration → Decision. Setiap unit punya angle unik: unit sudut, unit family-friendly, unit entry-price — bukan satu pesan untuk semua.",
              },
              {
                title: "Full-Stack Performance Ads",
                Icon: BarChart3,
                text:
                  "Meta Ads (FB + IG), Google Search & Performance Max, TikTok Ads. Semua channel di-manage in-house oleh tim bersertifikasi. Tidak ada sub-kontrak, tidak ada 'tim rotasi'.",
              },
              {
                title: "Personal Branding untuk Agen",
                Icon: Users,
                text:
                  "Content pillar, hook library, dan kalender konten 90-hari untuk IG dan TikTok. Agen jadi 'brand', bukan sekadar 'nomor kontak' di listing.",
              },
              {
                title: "Funnel Terintegrasi",
                Icon: Layers,
                text:
                  "Landing page konversi + routing WhatsApp + follow-up script. Satu alur dari klik iklan sampai jadwal survey — tanpa drop-off di tengah funnel.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-3xl p-6 md:p-8 border border-slate-200 bg-gradient-to-br from-white to-slate-50 hover:shadow-lg transition"
                data-testid={`dm-solution-${i + 1}`}
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
        id="pilot"
        className="bg-slate-50 py-16 md:py-24"
        data-testid="dm-process-section"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              05 · Proses Kerja
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              4 langkah, dengan Pilot 14 Hari yang aman untuk kamu.
            </h2>
            <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
              Kamu tidak keluar biaya besar sebelum lihat bukti hasil di
              listingmu sendiri. Fokus kami: bukti dulu, kontrak belakangan.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              {
                num: "01",
                title: "Diagnostic & Blueprint",
                time: "Hari 1-7",
                text:
                  "Audit gratis: pemetaan ICP, kompetitor, dan channel yang paling relevan. Deliverable: strategi tertulis + estimasi ROI + rekomendasi budget.",
              },
              {
                num: "02",
                title: "Pilot Sprint 14 Hari",
                time: "Hari 8-21",
                highlight: true,
                text:
                  "Pilot terbatas di 1 listing / 1 lini. Model kerjasama fleksibel: fixed fee, revenue-share, atau performance-based per kualitas lead. Tidak sesuai target? Kamu tidak wajib lanjut.",
              },
              {
                num: "03",
                title: "Scale-Up Multi-Channel",
                time: "Hari 22-60",
                text:
                  "Aktivasi penuh: Meta, Google, TikTok. Setup pixel tracking, landing page konversi, konten kreatif per-tahap buyer journey. Semua in-house.",
              },
              {
                num: "04",
                title: "Optimize & Report",
                time: "Bulanan",
                text:
                  "Weekly stand-up 30 menit, dashboard real-time yang bisa kamu akses kapan saja, laporan bulanan lengkap dengan rekomendasi scaling kuartal berikutnya.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`rounded-3xl p-6 border transition hover:-translate-y-0.5 ${
                  s.highlight
                    ? "bg-slate-900 text-white border-slate-900 shadow-xl"
                    : "bg-white border-slate-200"
                }`}
                data-testid={`dm-step-${i + 1}`}
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
                    <span className="ml-2 inline-block bg-[#00B512] text-white text-[10px] uppercase font-black px-2 py-0.5 rounded-full align-middle">
                      Pilot
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
      <section className="bg-white py-16 md:py-24" data-testid="dm-credibility-section">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              06 · Kredibilitas
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Kenapa kami berhak bicara soal iklan properti?
            </h2>
            <div className="mt-6 text-base md:text-lg text-slate-700 leading-[1.85] space-y-4">
              <p>
                Kami baru launch <strong>9 September 2026</strong>. Umur ini kami
                akui — tapi bukan berarti kami baru mulai berpikir. Tim Huniaja
                Digital Marketing terdiri dari specialist bersertifikasi di tiga
                channel utama, dengan pengalaman kolektif menghandle campaign
                properti puluhan miliar sebelum bergabung.
              </p>
              <p>
                Yang berbeda: kami memilih <strong>fokus 100% di niche properti
                Indonesia</strong> — tanpa mengurus portfolio F&amp;B, retail,
                atau fashion. Fokus ini bukan strategi marketing — ini komitmen
                jangka panjang.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { title: "Google Ads", subtitle: "Certified", Icon: Award },
              { title: "Meta Blueprint", subtitle: "Certified", Icon: Award },
              { title: "TikTok Ads Manager", subtitle: "Certified", Icon: Award },
              {
                title: "Fokus 100%",
                subtitle: "Properti Indonesia",
                Icon: Target,
              },
              {
                title: "Model Fleksibel",
                subtitle: "Fixed · Rev-share · Performance",
                Icon: Layers,
              },
              {
                title: "Aset & Data",
                subtitle: "100% milik partner",
                Icon: ShieldCheck,
              },
            ].map((c, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 border border-slate-200 bg-gradient-to-br from-slate-50 to-white hover:shadow-md transition"
                data-testid={`dm-cred-${i + 1}`}
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
                <div className="text-xs text-slate-500 mt-0.5">{c.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7. VISI & POTENSI SKALA ============ */}
      <section
        className="py-16 md:py-24"
        style={{ background: `linear-gradient(135deg, ${ACCENT_SOFT} 0%, #fff 60%)` }}
        data-testid="dm-vision-section"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              07 · Visi &amp; Potensi Skala
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Kami tidak mencari vendor.
              <br className="hidden md:block" /> Kami mencari{" "}
              <span style={{ color: ACCENT }}>partner jangka panjang</span>.
            </h2>
            <p className="mt-5 text-base md:text-lg text-slate-700 leading-relaxed">
              Jangka pendek, kami eksekusi campaign yang bikin leads berkualitas
              mengalir stabil. Tapi visi kami lebih jauh: setiap partner yang
              mulai dari pilot kecil hari ini, punya potensi tumbuh bersama kami
              ke skala nasional dalam 24 bulan.
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
                    "Launch resmi Huniaja (9 September 2026). Bangun tim internal specialist, standarisasi playbook 4-pilar, onboarding 5 partner pilot.",
                },
                {
                  year: "Q3-Q4 2026 → 2027",
                  title: "Partner Growth",
                  Icon: BarChart3,
                  text:
                    "Skalakan partner dari 5 ke 30+ di Jabodetabek. Rilis dashboard real-time, buka model revenue-share untuk developer skala menengah.",
                },
                {
                  year: "2027 - 2028",
                  title: "Scale Nasional",
                  Icon: Award,
                  text:
                    "Target 100+ partner developer & agen di 10 kota besar Indonesia. Bangun in-house creative studio + performance lab untuk R&D iklan properti.",
                },
              ].map((m, i) => (
                <div
                  key={i}
                  className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center md:text-left"
                  data-testid={`dm-vision-${i + 1}`}
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
            "Ini bukan janji marketing — ini roadmap yang kami komit ke setiap
            partner yang bergabung sejak fase Foundation."
          </p>
        </div>
      </section>

      {/* ============ 8. TESTIMONI / SIMULASI STUDI KASUS ============ */}
      <section className="bg-slate-50 py-16 md:py-24" data-testid="dm-testimonial-section">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              08 · Simulasi Studi Kasus
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Cerita dari pilot program 2026.
            </h2>
            <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
              Karena kami baru launch September 2026, testimoni di bawah kami
              bingkai sebagai <em>simulasi studi kasus dari pilot terbatas</em>{" "}
              — transparansi lebih penting dari klaim yang tidak bisa
              diverifikasi.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Cluster Grand Serpong",
                place: "40 unit · Tangerang Selatan",
                tag: "Pilot Developer Q4 2026",
                quote:
                  "Dalam pilot 14 hari, kami uji storytelling per-unit ala Huniaja: satu unit sudut, satu unit entry-price, satu unit family-friendly. Hasilnya, 3 dari 5 leads paling serius datang dari unit yang 'diceritakan' — bukan dari unit yang 'dipromosikan'.",
              },
              {
                name: "Agen Independen",
                place: "Jakarta Selatan",
                tag: "Personal Branding Pilot 2026",
                quote:
                  "Sebelum ini, saya post foto listing tanpa strategi dan hasilnya sepi. Setelah 30 hari mengikuti program personal branding Huniaja, follower TikTok naik dari 800 ke 6.400, dan 4 leads pertama datang lewat DM organik.",
              },
              {
                name: "Sales Manager · Perumahan Mid-Range",
                place: "Bekasi",
                tag: "Simulasi Studi Kasus 2026",
                quote:
                  "Yang berbeda dari tim Huniaja: mereka jujur bilang TikTok Ads bukan channel yang cocok untuk segmen kami. Kami dialihkan ke Google Search + Meta retargeting. Bulan pertama, cost per lead turun 47%.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col"
                data-testid={`dm-testi-${i + 1}`}
              >
                <div className="flex items-center gap-1" style={{ color: GREEN }}>
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

      {/* ============ 9. CTA PENUTUP — PARTNERSHIP FORM ============ */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: NAVY }}
        data-testid="dm-cta-section"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-start">
          <div className="text-white">
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">
              09 · Ajakan Partnership
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-black leading-[1.1]">
              Mulai dari <span style={{ color: "#7DD3FC" }}>Pilot 14 Hari</span>.
              Bayangkan hasilnya sebelum kamu commit.
            </h2>
            <p className="mt-5 text-base md:text-lg text-white/80 leading-relaxed">
              Tidak ada kontrak jangka panjang di awal. Tidak ada biaya besar
              sebelum bukti hasil. Cukup diskusi 30 menit + audit gratis. Kalau
              cocok, kita mulai pilot. Kalau tidak, kamu tetap dapat strategi
              tertulis yang bisa dipakai internal.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Audit strategi gratis (nilai Rp 5 juta)",
                "Estimasi ROI berdasarkan produk & channel kamu",
                "Model kerjasama fleksibel (fixed / revenue-share / performance)",
                "Zero commitment di 14 hari pertama",
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
              <a href={wa} target="_blank" rel="noreferrer" data-testid="dm-final-wa">
                <Button
                  className="rounded-full px-6 h-12 text-sm md:text-base font-bold text-white"
                  style={{ backgroundColor: GREEN }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" /> Diskusi via WhatsApp
                </Button>
              </a>
              <Link to="/kontak" data-testid="dm-final-kontak">
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

          {/* Right: Partnership form */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
            {!submitted ? (
              <>
                <h3 className="text-xl md:text-2xl font-black text-slate-900">
                  Ajukan Pilot 14 Hari
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Isi 6 field singkat — tim kami akan follow-up via WhatsApp
                  dalam 15 menit.
                </p>
                <form onSubmit={submit} className="mt-5 space-y-3">
                  <Field
                    label="Nama"
                    testid="dm-form-nama"
                    value={form.nama}
                    onChange={(v) => setForm({ ...form, nama: v })}
                    required
                  />
                  <Field
                    label="Perusahaan / Brand"
                    testid="dm-form-perusahaan"
                    value={form.perusahaan}
                    onChange={(v) => setForm({ ...form, perusahaan: v })}
                    required
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <Select
                      label="Role"
                      testid="dm-form-role"
                      value={form.role}
                      onChange={(v) => setForm({ ...form, role: v })}
                      options={[
                        "Developer",
                        "Agen Independen",
                        "Marketing Manager",
                        "Pemilik Proyek",
                      ]}
                    />
                    <Field
                      label="Jumlah unit / portfolio"
                      testid="dm-form-unit"
                      value={form.unit}
                      onChange={(v) => setForm({ ...form, unit: v })}
                      placeholder="mis. 40 unit"
                    />
                  </div>
                  <Select
                    label="Channel yang sedang dipakai"
                    testid="dm-form-channel"
                    value={form.channel}
                    onChange={(v) => setForm({ ...form, channel: v })}
                    options={[
                      "Meta Ads",
                      "Google Ads",
                      "TikTok Ads",
                      "Kombinasi",
                      "Belum ada",
                    ]}
                  />
                  <TextArea
                    label="Kebutuhan utama"
                    testid="dm-form-pesan"
                    value={form.pesan}
                    onChange={(v) => setForm({ ...form, pesan: v })}
                    placeholder="Ceritakan singkat kondisi campaign kamu saat ini..."
                  />
                  <Button
                    type="submit"
                    className="w-full rounded-full h-12 text-sm md:text-base font-bold text-white"
                    style={{ backgroundColor: ACCENT }}
                    data-testid="dm-form-submit"
                  >
                    Kirim ke Tim Partnership <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                    Dengan mengirim, data kamu diteruskan ke WhatsApp tim
                    Huniaja. Kami tidak menyimpan data di server publik.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{ backgroundColor: GREEN }}
                >
                  <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={2.4} />
                </div>
                <h3 className="mt-4 text-xl font-black text-slate-900">
                  Terima kasih!
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Data kamu sudah kami buka di WhatsApp. Tim partnership Huniaja
                  akan follow-up dalam 15 menit di jam kerja.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-semibold underline"
                  style={{ color: ACCENT }}
                >
                  Kirim lagi untuk properti lain
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
        className="mt-1.5 w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#001DF3] focus:bg-white transition"
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
        className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#001DF3] focus:bg-white transition resize-none"
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
          className="w-full h-11 pl-4 pr-9 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#001DF3] focus:bg-white transition appearance-none"
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
