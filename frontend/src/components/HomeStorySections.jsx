import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  BadgeCheck,
  MessageCircle,
  KeyRound,
  Star,
  Quote,
  ArrowRight,
  Heart,
  Home as HomeIcon,
  Award,
} from "lucide-react";
import { WA_URL } from "./ChatWidget";

/* --------------------- TRUST STRIP --------------------- */
export function HomeTrustStrip() {
  const stats = [
    { value: "2,4Jt+", label: "Pencari aktif tiap bulan" },
    { value: "50.000+", label: "Rumah terjual" },
    { value: "120+", label: "Developer partner" },
    { value: "4.9", label: "Google Play rating" },
  ];
  return (
    <section className="bg-white pt-8 md:pt-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-br from-[#000066] to-[#001DF3] text-white rounded-[28px] md:rounded-[36px] px-6 md:px-10 py-6 md:py-8 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#00B512]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="text-2xl md:text-4xl font-black">{s.value}</div>
                <div className="text-[11px] md:text-sm text-white/70 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------- HOW IT WORKS --------------------- */
export function HomeHowItWorks() {
  const steps = [
    {
      Icon: Search,
      step: "01",
      title: "Jelajahi Ribuan Rumah",
      desc: "Filter berdasarkan kota, harga, tipe, dan sertifikat — 100% listing terverifikasi.",
    },
    {
      Icon: BadgeCheck,
      step: "02",
      title: "Bandingkan dengan Tenang",
      desc: "Simpan favorit, cek spec side-by-side, dan simulasikan cicilan KPR real-time.",
    },
    {
      Icon: MessageCircle,
      step: "03",
      title: "Konsultasi Gratis",
      desc: "Chat Dea (AI admin kami) atau langsung ke WhatsApp — tim manusia real siap bantu 7 hari seminggu.",
    },
    {
      Icon: KeyRound,
      step: "04",
      title: "Kunci di Tangan",
      desc: "Kami dampingi dari negosiasi, akad KPR, hingga serah terima kunci — tanpa biaya tambahan.",
    },
  ];

  return (
    <section className="bg-slate-50 py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block bg-white text-[#001DF3] text-[11px] font-bold rounded-full px-3 py-1 tracking-widest border border-blue-100">
            CARA KERJA HUNIAJA
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
            Empat langkah sederhana dari<br className="hidden md:block" />
            <span className="text-[#001DF3]">"lagi cari"</span> jadi{" "}
            <span className="text-[#00B512]">"udah punya"</span>.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-14 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#001DF3]/20 via-[#00B512]/30 to-[#001DF3]/20" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 relative">
            {steps.map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#001DF3] flex items-center justify-center relative z-10 shadow-md">
                  <s.Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div className="text-[10px] font-black tracking-[0.2em] mt-4 text-[#00B512]">
                  LANGKAH {s.step}
                </div>
                <h3 className="font-black text-slate-900 mt-1 text-lg leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------- STORY / TESTIMONI --------------------- */
export function HomeStories() {
  const stories = [
    {
      name: "Keluarga Farhan & Rina",
      city: "Bekasi Timur",
      initial: "F",
      color: "#001DF3",
      before: "6 tahun kontrak berpindah-pindah",
      after: "Rumah pertama di cluster idaman",
      quote:
        "Kami hampir menyerah setelah 3 KPR ditolak. Tim Huniaja bantu kami perbaiki dokumen dan pilih bank yang tepat. Bulan depan anak kami akhirnya bisa sekolah dari rumah sendiri.",
    },
    {
      name: "Bu Sari",
      city: "Depok",
      initial: "S",
      color: "#00B512",
      before: "Cicilan floating naik terus",
      after: "Take over ke Syariah, cicilan tetap",
      quote:
        "Setiap malam saya cek saldo, deg-degan cicilan naik lagi. Take over via Huniaja bikin cicilan tetap sampai lunas. Tidur saya jadi lebih nyenyak.",
    },
    {
      name: "Pak Dimas",
      city: "Sentul",
      initial: "D",
      color: "#001DF3",
      before: "5 tahun cari rumah investasi",
      after: "3 rumah aktif jadi passive income",
      quote:
        "Sebagai investor pemula, saya butuh data & analisa. Huniaja tidak cuma listing — mereka temani riset kawasan, ROI, sampai eksekusi. Sangat profesional.",
    },
  ];

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
            KISAH MEREKA
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
            Bukan tagline.<br className="md:hidden" />{" "}
            <span className="text-[#001DF3]">Cerita orang biasa.</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500 mt-3 max-w-2xl mx-auto">
            Setiap kunci yang berpindah tangan adalah cerita. Ini beberapa yang
            bersedia mereka bagikan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {stories.map((s) => (
            <div
              key={s.name}
              className="bg-gradient-to-br from-white to-slate-50/70 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md p-6 md:p-7 flex flex-col transition"
            >
              <Quote
                className="w-8 h-8 mb-3"
                style={{ color: s.color }}
                strokeWidth={2.5}
              />
              <p className="text-sm md:text-[15px] text-slate-700 leading-relaxed italic flex-1">
                "{s.quote}"
              </p>
              <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px]">
                <div className="bg-slate-100 rounded-xl px-3 py-2">
                  <div className="text-slate-500">Dulu</div>
                  <div className="font-bold text-slate-700 mt-0.5 leading-tight">
                    {s.before}
                  </div>
                </div>
                <div className="bg-[#00B512]/10 rounded-xl px-3 py-2">
                  <div className="text-[#00B512]">Sekarang</div>
                  <div className="font-bold text-slate-900 mt-0.5 leading-tight">
                    {s.after}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-base shadow-md"
                  style={{ backgroundColor: s.color }}
                >
                  {s.initial}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {s.name}
                  </div>
                  <div className="text-xs text-slate-500">{s.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------- MANIFESTO STRIP --------------------- */
export function HomeManifesto() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <Quote
          className="w-12 h-12 md:w-16 md:h-16 text-[#001DF3]/10 mx-auto"
          strokeWidth={2.5}
        />
        <p className="text-xl md:text-3xl font-black text-slate-900 leading-tight mt-4 tracking-tight">
          "Kami tidak menjual rumah.<br className="hidden md:block" />
          Kami{" "}
          <span className="text-[#001DF3]">menemani orang pulang</span>."
        </p>
        <div className="mt-6 inline-flex items-center gap-3">
          <div className="w-10 h-px bg-slate-300" />
          <span className="text-xs font-bold text-slate-500 tracking-widest">
            KEYAKINAN KAMI SEJAK 2019
          </span>
          <div className="w-10 h-px bg-slate-300" />
        </div>
      </div>
    </section>
  );
}

/* --------------------- FINAL CTA --------------------- */
export function HomeFinalCta() {
  return (
    <section className="bg-slate-50 py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="relative bg-gradient-to-br from-[#000066] to-[#001DF3] rounded-[32px] md:rounded-[44px] p-8 md:p-14 overflow-hidden text-white">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00B512]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest">
                <Award className="w-3.5 h-3.5 text-[#00B512]" /> DIPILIH 2,4 JUTA KELUARGA
              </div>
              <h3 className="text-3xl md:text-4xl font-black mt-4 leading-tight">
                Rumah impianmu<br />
                jaraknya cuma satu klik.
              </h3>
              <p className="text-sm md:text-base text-white/85 mt-3 max-w-xl">
                Mulai jelajahi ribuan listing terverifikasi hari ini — gratis,
                tanpa daftar, langsung terhubung dengan agen manusia kami.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/cari-properti"
                data-testid="home-final-cta-cari"
                className="bg-white text-[#001DF3] hover:bg-slate-100 font-bold rounded-full px-6 py-3 text-sm shadow-lg text-center transition inline-flex items-center justify-center gap-2"
              >
                <HomeIcon className="w-4 h-4" /> Cari Rumah
              </Link>
              <a
                href={WA_URL()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00B512] hover:bg-[#009e0f] text-white font-bold rounded-full px-6 py-3 text-sm shadow-lg text-center transition inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
