import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bot,
  Search,
  BarChart3,
  Calculator,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Zap,
  ShieldCheck,
  Clock,
  Star,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { WA_URL } from "../components/ChatWidget";

const HERO_IMG =
  "https://images.unsplash.com/photo-1677691821037-9d2ec8ad3f9d?w=1600&q=85";

const capabilities = [
  {
    Icon: Search,
    title: "Cari Properti Cerdas",
    tagline: "Bilang butuhmu — biar AI yang cari.",
    desc: "Ketik dalam bahasa sehari-hari: 'rumah 3 kamar dekat sekolah anak, bujet 800 juta, area Depok.' AI kami paham konteks, bukan sekadar keyword.",
    color: "#001DF3",
    tint: "#EEF2FF",
    example: "Contoh: 'Rumah untuk keluarga muda dengan work-from-home space, dekat cafe & jogging track'",
  },
  {
    Icon: BarChart3,
    title: "Bandingkan Otomatis",
    tagline: "5 properti, 1 tabel, semua faktor.",
    desc: "AI pilih 5 kandidat terbaik dari hasil pencarianmu, bandingkan side-by-side: harga, yield, akses transport, sekolah, fasilitas. Tidak perlu buka 10 tab lagi.",
    color: "#00B512",
    tint: "#E7FBEA",
    example: "Contoh output: '#2 lebih murah 12%, tapi #4 unggul di akses tol & sekolah SD favorit.'",
  },
  {
    Icon: Calculator,
    title: "Simulasi KPR Instant",
    tagline: "Angka realistis dari 5 bank mitra.",
    desc: "AI hitung cicilan dari harga properti pilihan langsung ke 5 bank (BTN, BSI, Mandiri, BCA, BJB). Lengkap dengan DP minimum, tenor optimal, dan estimasi approval berdasarkan profilmu.",
    color: "#000066",
    tint: "#E5E5F0",
    example: "Contoh: 'Cicilan paling optimal: BSI Syariah, 20 tahun, Rp 3,8jt/bulan. Approval rate 87%.'",
  },
];

const benefits = [
  {
    Icon: Clock,
    title: "Hemat 40+ jam riset",
    desc: "Yang biasanya butuh 2-3 minggu buka platform berkali-kali, sekarang cukup 15 menit ngobrol dengan AI.",
  },
  {
    Icon: Zap,
    title: "Jawaban dalam detik",
    desc: "Tanya kapan saja - jam 2 pagi mikir soal cicilan? AI kami tetap standby. Bukan customer service yang delay.",
  },
  {
    Icon: ShieldCheck,
    title: "Data terverifikasi",
    desc: "AI hanya rekomendasikan listing yang sudah lolos verifikasi Huniaja. Bukan copy-paste sembarang dari internet.",
  },
  {
    Icon: Star,
    title: "Rekomendasi personal",
    desc: "Semakin sering kamu pakai, AI semakin paham preferensimu - tanpa nanya form panjang tiap kali.",
  },
];

const useCases = [
  {
    persona: "Keluarga muda cari rumah pertama",
    scenario: "Bujet Rp 500 juta, prioritas SD anak & jarak ke kantor",
    aiHelp: "AI filter 200+ listing → shortlist 5 opsi dengan analisis komparatif: nilai investasi 5 tahun ke depan, walkability score ke SD, dan simulasi KPR paling terjangkau untuk profil PNS.",
  },
  {
    persona: "Investor mencari yield tinggi",
    scenario: "Modal Rp 1-2 miliar, prioritas cashflow bulanan",
    aiHelp: "AI kategorikan lokasi dengan yield historis >8%, bandingkan kost mahasiswa vs rumah kontrak keluarga, hitung ROI 10 tahun berdasarkan tren harga daerah.",
  },
  {
    persona: "Milenial siap upgrade dari kos",
    scenario: "Gaji Rp 12jt, belum pernah KPR, takut salah pilih",
    aiHelp: "AI edukasi step-by-step: hitung DSR, sarankan tenor optimal, hindarkan trap developer nakal, rekomendasikan 3 rumah subsidi FLPP yang match dengan profil.",
  },
];

export default function AiAssistantPage() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="AI Assistant" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#000066]/90 via-slate-900/85 to-[#001DF3]/70" />
        </div>
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#00B512]/25 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-widest">
                <Bot className="w-3.5 h-3.5 text-[#00B512]" /> AI PROPERTY ASSISTANT
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mt-5">
                Cari rumah{" "}
                <span className="text-[#00B512]">seperti ngobrol sama teman</span>{" "}
                — yang kebetulan tahu semua listing di Indonesia.
              </h1>
              <p className="mt-6 text-base md:text-lg text-white/85 max-w-xl leading-relaxed">
                Bilang butuhmu dalam bahasa sehari-hari. AI kami cari, bandingkan,
                dan hitung cicilan KPR langsung — dalam hitungan detik, bukan minggu.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(
                    WA_URL(query || "Halo, saya mau coba AI Property Assistant."),
                    "_blank",
                  );
                }}
                className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl"
                data-testid="ai-assistant-hero-form"
              >
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Coba: 'Rumah 3 kamar di Depok, bujet 800 juta'"
                  data-testid="ai-assistant-hero-input"
                  className="flex-1 rounded-full px-5 h-12 bg-white/95 text-slate-900 placeholder:text-slate-400 outline-none shadow-lg"
                />
                <button
                  type="submit"
                  className="bg-[#00B512] hover:bg-[#009e0f] text-white font-bold rounded-full px-6 h-12 shadow-lg transition inline-flex items-center justify-center gap-2 shrink-0"
                >
                  Tanya AI <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <p className="mt-4 text-xs text-white/60">
                Powered by GPT-4 + database properti Huniaja terverifikasi
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="bg-white/8 backdrop-blur border border-white/15 rounded-3xl p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00B512] flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-[#00B512]">Dea · AI Assistant</div>
                    <div className="mt-2 bg-white/10 rounded-2xl rounded-tl-none p-3 text-sm text-white/95 leading-relaxed">
                      Halo! Saya menemukan 3 rumah yang cocok dengan kriteriamu di Depok:
                      <br /><br />
                      🏡 <strong>Cluster Sawangan Regency</strong> — Rp 720jt, cicilan mulai Rp 3,4jt/bln
                      <br />
                      🏡 <strong>Villa Cinere Hijau</strong> — Rp 785jt, dekat MRT Lebak Bulus
                      <br />
                      🏡 <strong>Griya Depok Utama</strong> — Rp 810jt, yield sewa 6,8%/thn
                      <br /><br />
                      Mau kubantu bandingkan ketiganya?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-block bg-[#001DF3]/8 text-[#001DF3] text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
            KENAPA AI ASSISTANT ADA
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 leading-tight tracking-tight">
            Beli rumah harusnya <span className="text-[#00B512]">tentang menemukan tempat pulang</span> —{" "}
            bukan tentang scroll listing sampai mata pedih.
          </h2>
          <div className="mt-8 space-y-5 text-[15px] md:text-base text-slate-600 leading-[1.85] text-left md:text-center">
            <p>
              Rata-rata orang buka 8 platform properti, 200 listing, dan 12 tab
              simulator KPR sebelum akhirnya memilih rumah. Prosesnya melelahkan.
              Setelah 3 minggu riset, banyak yang menyerah dan asal pilih — atau
              lebih buruk, kena tipu agen abal-abal.
            </p>
            <p>
              Kami membangun AI Property Assistant untuk memangkas semua itu.
              Bukan buat gantiin manusia (agen kami tetap ada, dan mereka hebat) —
              tapi supaya <strong className="text-slate-900">kamu bisa mulai dari titik
              yang benar</strong>: shortlist yang tepat, angka yang jujur, dan
              pertanyaan yang benar untuk ditanyakan ke agen.
            </p>
            <p className="italic text-slate-700">
              "Tools yang baik bukan yang bikin semua orang jadi ahli — tapi yang
              bikin pemula bisa mengambil keputusan seperti ahli."
            </p>
          </div>
        </div>
      </section>

      {/* 3 Capabilities */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              3 KEMAMPUAN UTAMA
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 tracking-tight leading-tight">
              Cari <span className="text-[#001DF3]">·</span> Bandingkan{" "}
              <span className="text-[#00B512]">·</span> Simulasi KPR
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-3xl p-6 md:p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                data-testid={`ai-cap-${c.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: c.tint }}
                >
                  <c.Icon className="w-7 h-7" style={{ color: c.color }} strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mt-5 leading-tight">{c.title}</h3>
                <p className="text-sm font-semibold mt-1.5" style={{ color: c.color }}>
                  {c.tagline}
                </p>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">{c.desc}</p>
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="text-[10px] font-black tracking-widest uppercase text-slate-400 mb-1.5">
                    Contoh
                  </div>
                  <p className="text-xs text-slate-700 italic leading-relaxed">{c.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#00B512]/10 text-[#00B512] text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              MANFAAT NYATA
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              Kamu dapat waktu, energi, dan{" "}
              <span className="text-[#001DF3]">ketenangan pikiran</span>.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-slate-50 rounded-3xl p-5 md:p-6 border border-slate-100">
                <div className="w-11 h-11 rounded-2xl bg-[#001DF3]/10 flex items-center justify-center">
                  <b.Icon className="w-5 h-5 text-[#001DF3]" strokeWidth={2.4} />
                </div>
                <h3 className="font-black text-slate-900 mt-4 text-[15px]">{b.title}</h3>
                <p className="text-xs md:text-sm text-slate-600 mt-1.5 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#001DF3]/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#00B512]/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-white/10 border border-white/20 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest">
              CERITA PENGGUNA
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 tracking-tight leading-tight">
              Untuk siapa saja AI ini{" "}
              <span className="text-[#00B512]">benar-benar berguna</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {useCases.map((u, i) => (
              <div
                key={i}
                className="bg-white/8 backdrop-blur border border-white/15 rounded-3xl p-6 md:p-7"
              >
                <div className="text-[10px] font-black tracking-widest uppercase text-[#00B512]">
                  Persona #{i + 1}
                </div>
                <h3 className="text-lg md:text-xl font-black text-white mt-2 leading-tight">
                  {u.persona}
                </h3>
                <p className="text-sm text-white/80 mt-2 italic">
                  Skenario: {u.scenario}
                </p>
                <div className="mt-4 pt-4 border-t border-white/15">
                  <div className="text-[10px] font-black tracking-widest uppercase text-white/60 mb-2">
                    Bagaimana AI bantu
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">{u.aiHelp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div
            className="relative rounded-[36px] p-8 md:p-14 text-white overflow-hidden shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #001DF3 0%, #000066 100%)",
            }}
          >
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#00B512]/25 blur-3xl pointer-events-none" />
            <div className="relative grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8">
                <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-[#00B512]" /> COBA GRATIS
                </span>
                <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mt-4">
                  15 menit ngobrol — bisa hemat 3 minggu riset.
                </h2>
                <p className="text-sm md:text-base text-white/85 mt-4 leading-relaxed max-w-2xl">
                  Tidak perlu daftar, tidak perlu bayar. Klik tombol di kanan
                  bawah layarmu ("Chat AI") atau chat langsung via WhatsApp —
                  Dea sudah standby.
                </p>
              </div>
              <div className="md:col-span-4">
                <a
                  href={WA_URL("Halo, saya mau coba AI Property Assistant.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="ai-assistant-cta-wa"
                  className="w-full bg-white text-[#001DF3] hover:bg-slate-100 font-black rounded-full px-6 py-3.5 text-sm shadow-lg inline-flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4" /> Coba Sekarang
                </a>
                <Link
                  to="/cari-properti"
                  className="mt-3 w-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/25 text-white font-bold rounded-full px-6 py-3.5 text-sm inline-flex items-center justify-center gap-2 transition"
                >
                  Cari Manual
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
