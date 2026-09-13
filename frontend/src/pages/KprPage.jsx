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

      {/* Hero */}
      <section className="bg-[#0025F5] text-white pt-10 md:pt-14 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight">
              KPR <span className="text-white">Syariah lebih mudah</span> dengan{" "}
              <span className="text-[#00B512]">Huniaja</span>
            </h1>
            <p className="mt-4 text-sm md:text-base text-white/90 max-w-lg">
              Pasang iklan rumah atau properti lainnya cukup 1 menit, langsung
              jangkau jutaan pencari properti dalam waktu singkat!
            </p>
            <button className="mt-6 bg-[#00B512] hover:bg-[#009e0f] text-[#0025F5] font-bold rounded-full px-7 py-3 text-sm shadow-lg transition">
              Mulai Pasang Iklan
            </button>
          </div>
          <div className="bg-white rounded-[44px] h-56 md:h-72 shadow-2xl" />
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
                      style={{ color: "#0025F5" }}
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
          <div className="flex justify-center">
            <PhoneMockup>
              <img
                src={HERO_BANNER}
                alt="App"
                className="w-full h-full object-cover"
              />
            </PhoneMockup>
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
            <span className="text-[#0025F5]">Huniaja</span>
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
              <span className="text-[#0025F5]">Huniaja</span>
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
                      <span className="w-8 h-8 rounded-full bg-[#0025F5] text-white font-bold text-sm flex items-center justify-center shrink-0">
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
          <div className="flex justify-center">
            <div className="bg-white rounded-[44px] p-4 md:p-6 shadow-sm">
              <PhoneMockup>
                <img
                  src={HERO_BANNER}
                  alt="App"
                  className="w-full h-full object-cover"
                />
              </PhoneMockup>
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
            <Icon className="w-6 h-6 text-[#0025F5]" strokeWidth={2.2} />
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
