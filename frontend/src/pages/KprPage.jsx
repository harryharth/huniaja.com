import React, { useState } from "react";
import {
  BadgeCheck,
  Zap,
  ShieldCheck,
  BarChart3,
  Moon,
  Flame,
  Calculator,
  RefreshCw,
  Quote,
  Home,
  Heart,
  Clock,
  Sparkles,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { HERO_BANNER } from "../mock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { KprSyariahDialog, TakeOverDialog } from "./KprDialogs";

const BANK_LOGOS = "https://customer-assets-gfyr7b9c.emergentagent.net/job_branding-suite-6/artifacts/z220basa_bank.png";

const MOCKUP_SIMULATOR =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=85";
const MOCKUP_STEPS =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=85";

const kprStories = [
  {
    name: "Keluarga Pak Andi",
    role: "KPR Syariah - Cibubur",
    initial: "A",
    stat: "12 hari",
    statLabel: "sampai akad",
    quote:
      "Kami sudah nabung 3 tahun untuk beli rumah, tapi bingung mulai dari mana. Tim Huniaja dampingi kami dari simulasi sampai akad - istri saya sampai nangis pas nerima kunci. Terima kasih sudah bikin proses ini terasa manusiawi.",
  },
  {
    name: "Bu Nadia",
    role: "Take Over Syariah - Depok",
    initial: "N",
    stat: "Rp 8Jt",
    statLabel: "hemat per bulan",
    quote:
      "Cicilan lama saya berat karena bunga floating. Setelah take over ke Syariah lewat Huniaja, cicilan turun 30% dan tetap sampai lunas. Sekarang bisa napas lega dan nabung untuk pendidikan anak.",
  },
  {
    name: "Mas Dimas",
    role: "First-time Buyer - BSD",
    initial: "D",
    stat: "1x tolak",
    statLabel: "lalu approved",
    quote:
      "KPR pertama saya ditolak bank karena data ga lengkap. Tim Huniaja bantu review ulang, bereskan dokumen, dan ajukan ke bank yang lebih cocok. Approved dalam 2 minggu. Mereka bener-bener sabar nemenin.",
  },
];

const reasons = [
  {
    Icon: BadgeCheck,
    title: "Gratis Biaya Pengajuan",
    desc: "Ajukan KPR dan Take Over ke berbagai bank pilihan tanpa biaya tambahan.",
  },
  {
    Icon: Zap,
    title: "Mudah dan Cepat",
    desc: "Isi formulir dan dapatkan penawaran menarik dalam hitungan menit.",
  },
  {
    Icon: ShieldCheck,
    title: "Terpercaya dan Aman",
    desc: "Teknologi enkripsi end-to-end menjamin keamanan data dan informasi Anda.",
  },
  {
    Icon: BarChart3,
    title: "Proses Transparan",
    desc: "Proses pengajuan yang jelas dengan informasi lengkap di setiap langkah.",
  },
  {
    Icon: Moon,
    title: "Sesuai Syariat Islam",
    desc: "Nikmati pembiayaan halal melalui akad Murabahah dan Musyarakah Mutanaqisah.",
  },
  {
    Icon: Flame,
    title: "Penawaran Menarik",
    desc: "Dapatkan penawaran yang sesuai dengan kebutuhan Anda dengan berbagai pilihan bank.",
  },
];

const steps = [
  {
    q: "Simulasi harga tenor",
    a: "Mulai dengan menghitung estimasi cicilan bulanan sesuai harga properti, uang muka, dan tenor yang Anda inginkan.",
  },
  {
    q: "Pilih Program",
    a: "Pilih program KPR Syariah yang paling sesuai dari berbagai bank rekanan Huniaja, lengkap dengan detail margin dan tenor.",
  },
  {
    q: "Lengkapi data pendukung",
    a: "Unggah dokumen persyaratan seperti KTP, NPWP, slip gaji, dan dokumen pendukung lainnya melalui platform Huniaja.",
  },
  {
    q: "Pengajuan dikirim ke Bank",
    a: "Tim Huniaja meneruskan pengajuan Anda ke bank pilihan dan memantau progres verifikasi hingga selesai.",
  },
  {
    q: "Akad (Tandatangan Perjanjian Kredit Syariah)",
    a: "Setelah disetujui, lakukan akad syariah bersama pihak bank. KPR aktif dan cicilan pertama mulai berjalan.",
  },
];

function PhoneMockup({ children }) {
  return (
    <div className="relative w-[240px] md:w-[280px] mx-auto">
      <div className="aspect-[9/19] rounded-[44px] bg-slate-900 p-2 shadow-2xl">
        <div className="w-full h-full rounded-[36px] bg-white overflow-hidden">
          {children}
        </div>
      </div>
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-b-2xl" />
    </div>
  );
}

export default function KprPage() {
  const [kprOpen, setKprOpen] = useState(false);
  const [takeoverOpen, setTakeoverOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero - storytelling */}
      <section className="bg-[#001DF3] text-white pt-12 md:pt-16 pb-14 md:pb-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00B512]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest mb-4">
              <Moon className="w-3.5 h-3.5" /> KPR SYARIAH · BEBAS RIBA
            </span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight">
              Cicilan tetap.<br />
              Hati tenang.<br />
              <span className="text-[#00B512]">Rumah jadi milikmu.</span>
            </h1>
            <p className="mt-5 text-sm md:text-lg text-white/90 max-w-lg leading-relaxed">
              Tidak semua orang harus mengerti akad Murabahah atau Musyarakah
              Mutanaqisah untuk punya rumah. Kamu cukup punya niat - biar tim
              kami yang temani sisanya, dengan sabar dan tanpa istilah rumit.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#simulasi"
                data-testid="kpr-hero-simulate"
                className="bg-[#00B512] hover:bg-[#009e0f] text-white font-bold rounded-full px-7 py-3 text-sm shadow-lg transition"
              >
                Simulasi Cicilan Gratis
              </a>
              <a
                href="#cerita"
                className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white font-bold rounded-full px-6 py-3 text-sm transition"
              >
                Lihat Cerita Mereka
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-white/70">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00B512]" />
                Fatwa DSN-MUI
              </div>
              <div className="flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-[#00B512]" />
                10+ Bank Rekanan
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#00B512]" />
                12.500+ Keluarga
              </div>
            </div>
          </div>
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85"
              alt="Rumah impian"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Manifesto quote */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <Quote
            className="w-14 h-14 md:w-16 md:h-16 text-[#001DF3]/10 mx-auto"
            strokeWidth={2.5}
          />
          <p className="text-xl md:text-3xl font-black text-slate-900 leading-tight mt-4 tracking-tight">
            "KPR bukan cuma soal cicilan.<br className="hidden md:block" />
            Ini soal{" "}
            <span className="text-[#001DF3]">memilih ketenangan</span>{" "}
            untuk 15-20 tahun ke depan."
          </p>
          <div className="mt-6 inline-flex items-center gap-3">
            <div className="w-10 h-px bg-slate-300" />
            <span className="text-xs font-bold text-slate-500 tracking-widest">
              PRINSIP KAMI
            </span>
            <div className="w-10 h-px bg-slate-300" />
          </div>
        </div>
      </section>

      {/* Cerita Nyata KPR */}
      <section id="cerita" className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-white text-[#001DF3] text-[11px] font-bold rounded-full px-3 py-1 tracking-widest border border-blue-100">
              CERITA MEREKA
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
              Dari cicilan yang menghantui,<br className="hidden md:block" />
              <span className="text-[#00B512]">jadi tidur yang nyenyak.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-500 mt-3 max-w-2xl mx-auto">
              Bukan angka, bukan data - ini cerita jujur keluarga yang
              mempercayakan KPR mereka pada kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {kprStories.map((s) => (
              <div
                key={s.name}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all p-6 md:p-7 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <Quote
                    className="w-8 h-8 text-[#001DF3]"
                    strokeWidth={2.5}
                  />
                  <div className="text-right">
                    <div className="text-2xl font-black text-[#00B512]">
                      {s.stat}
                    </div>
                    <div className="text-[10px] text-slate-500 tracking-wide uppercase">
                      {s.statLabel}
                    </div>
                  </div>
                </div>
                <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed italic mt-4 flex-1">
                  "{s.quote}"
                </p>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-base shadow-md shrink-0 bg-[#001DF3]">
                    {s.initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-slate-900 truncate">
                      {s.name}
                    </div>
                    <div className="text-xs text-slate-500 truncate">
                      {s.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-center text-xl md:text-2xl font-bold text-slate-900 mb-10 md:mb-12">
            Kenapa harus KPR syariah di Huniaja
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reasons.map((r, idx) => (
              <div
                key={r.title}
                className="relative bg-white rounded-3xl px-6 pt-10 pb-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-[#00B512] text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                  {idx + 1}
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">
                    <r.Icon
                      className="w-8 h-8"
                      strokeWidth={2.2}
                      style={{ color: "#001DF3" }}
                    />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900">
                    {r.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-2 max-w-xs leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulation */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#001DF3]/10 via-white to-[#00B512]/10 blur-2xl -z-10" />
            <div className="rounded-[32px] overflow-hidden shadow-xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
                alt="Simulasi KPR — hitung cicilan bulananmu"
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-3 md:-bottom-6 md:-left-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#001DF3]/10 flex items-center justify-center">
                <Calculator className="w-5 h-5 text-[#001DF3]" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                  Cicilan mulai
                </div>
                <div className="text-sm font-black text-slate-900">
                  Rp 2,4 jt/bulan
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
              Simulasi Cicilan KPR
              <br />
              dan Take Over Syariah
            </h2>

            <SimCard
              num={1}
              Icon={Calculator}
              title="KPR Syariah"
              desc="Hitung estimasi cicilan KPR Syariah per bulan dari berbagai program bank yang tersedia."
              cta="Simulasikan Cicilan KPR Syariah"
              onClick={() => setKprOpen(true)}
            />
            <div className="h-4" />
            <SimCard
              num={2}
              Icon={RefreshCw}
              title="KPR Take Over Syariah"
              desc="Hitung estimasi cicilan KPR Take Over Syariah dari KPR yang sedang berjalan saat ini."
              cta="Simulasikan Take Over Syariah"
              onClick={() => setTakeoverOpen(true)}
            />
          </div>
        </div>
      </section>

      {/* Banks */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-center text-lg md:text-2xl font-bold text-slate-900 mb-10 md:mb-12">
            Bank yang bekerjasama dengan{" "}
            <span className="text-[#001DF3]">Huniaja</span>
          </h2>

          <div className="flex justify-center">
            <img
              src={BANK_LOGOS}
              alt="Bank Syariah yang bekerjasama"
              className="w-full max-w-4xl h-auto"
            />
          </div>
        </div>
      </section>

      {/* Steps FAQ */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8">
              Langkah Mudah Mengajukan
              <br />
              KPR Syariah di{" "}
              <span className="text-[#001DF3]">Huniaja</span>
            </h2>
            <Accordion type="single" collapsible defaultValue="step-0" className="space-y-3">
              {steps.map((s, i) => (
                <AccordionItem
                  key={i}
                  value={`step-${i}`}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition px-4 md:px-5"
                >
                  <AccordionTrigger className="py-4 hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <span className="w-8 h-8 rounded-full bg-[#001DF3] text-white font-bold text-sm flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-sm md:text-base font-semibold text-slate-800">
                        {s.q}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-600 leading-relaxed pl-12 pb-5">
                    {s.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#00B512]/12 via-white to-[#001DF3]/10 blur-2xl -z-10" />
            <div className="rounded-[32px] overflow-hidden shadow-xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"
                alt="Serah terima kunci rumah baru"
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 md:-bottom-6 md:-right-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#00B512]/12 flex items-center justify-center">
                <BadgeCheck className="w-5 h-5 text-[#00B512]" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                  Approval rate
                </div>
                <div className="text-sm font-black text-slate-900">
                  92% disetujui
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <KprSyariahDialog open={kprOpen} onOpenChange={setKprOpen} />
      <TakeOverDialog open={takeoverOpen} onOpenChange={setTakeoverOpen} />
    </div>
  );
}

function SimCard({ num, Icon, title, desc, cta, onClick }) {
  return (
    <div className="relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition p-5 md:p-6 flex gap-4 items-start">
      <div className="w-8 h-8 rounded-full bg-[#00B512] text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-md">
        {num}
      </div>
      <div className="flex-1">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6 text-[#001DF3]" strokeWidth={2.2} />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-900">{title}</h4>
            <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
              {desc}
            </p>
          </div>
        </div>
        <button
          onClick={onClick}
          className="mt-4 bg-[#00B512] hover:bg-[#009e0f] text-white font-bold rounded-full px-5 py-2 text-xs md:text-sm shadow transition"
        >
          {cta}
        </button>
      </div>
    </div>
  );
}
