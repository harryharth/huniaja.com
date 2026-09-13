import React, { useState, useEffect } from "react";
import { Ticket, Home, Percent, Sparkles, ArrowRight } from "lucide-react";

const slides = [
  {
    eyebrow: "PROMO SPESIAL",
    title: "Deal Hot",
    subtitle: "Dám Say!",
    tagline: "Voucher Belanja Rumah Hingga Rp 50 Juta",
    cta: "Klaim Voucher",
    accent: "#12B815",
    Icon: Ticket,
    tag: "HUNIAJA VOUCHER",
    amount: "Rp50Jt",
    validity: "Berlaku s/d 31 Des",
  },
  {
    eyebrow: "KPR TERBAIK",
    title: "KPR Mudah",
    subtitle: "Disetujui!",
    tagline: "Bunga Ringan, Proses Cepat 3 Hari Kerja",
    cta: "Ajukan Sekarang",
    accent: "#0025F5",
    Icon: Home,
    tag: "CICILAN MULAI",
    amount: "3jt/bln",
    validity: "Tenor s/d 20 Tahun",
  },
  {
    eyebrow: "CASHBACK BESAR",
    title: "Cashback",
    subtitle: "Sampai 20%",
    tagline: "Ratusan Properti Pilihan, Stok Terbatas",
    cta: "Lihat Promo",
    accent: "#0EA5E9",
    Icon: Percent,
    tag: "CASHBACK HINGGA",
    amount: "Rp100Jt",
    validity: "Untuk Rumah Terpilih",
  },
  {
    eyebrow: "HUNIAJA PICKS",
    title: "Pilih Suka",
    subtitle: "Beli Cepat!",
    tagline: "Ribuan Properti Ready Stock Menantimu",
    cta: "Jelajahi",
    accent: "#F59E0B",
    Icon: Sparkles,
    tag: "REKOMENDASI",
    amount: "5000+",
    validity: "Listing Pilihan",
  },
  {
    eyebrow: "EKSKLUSIF DEVELOPER",
    title: "Rumah Baru",
    subtitle: "Harga Perdana",
    tagline: "Beli Langsung dari Developer Tepercaya",
    cta: "Lihat Proyek",
    accent: "#EC4899",
    Icon: Home,
    tag: "HARGA MULAI",
    amount: "Rp300Jt",
    validity: "Unit Terbatas",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), 5200);
    return () => clearInterval(t);
  }, []);

  const s = slides[active];
  const Icon = s.Icon;

  return (
    <section className="bg-[#0025F5] pt-8 md:pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className="relative overflow-hidden bg-white shadow-2xl h-[220px] sm:h-[280px] md:h-[340px] transition-all duration-700"
          style={{ borderRadius: "80px" }}
        >
          {/* Soft accent glows */}
          <div
            className="absolute -top-24 -left-16 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ backgroundColor: s.accent }}
          />
          <div
            className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10"
            style={{ backgroundColor: s.accent }}
          />
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #0025F5 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />

          {/* Content */}
          <div className="relative h-full flex items-center px-8 sm:px-14 md:px-20">
            <div className="max-w-md flex-1">
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] md:text-[11px] font-black tracking-[0.15em] mb-2 md:mb-3"
                style={{
                  backgroundColor: `${s.accent}15`,
                  color: s.accent,
                  border: `1px solid ${s.accent}40`,
                }}
              >
                <Sparkles className="w-3 h-3" />
                {s.eyebrow}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[0.95] text-slate-900">
                {s.title}
              </h1>
              <p
                className="text-2xl sm:text-3xl md:text-5xl font-black italic tracking-tight leading-none mt-1"
                style={{ color: s.accent }}
              >
                {s.subtitle}
              </p>
              <p className="mt-2 md:mt-3 text-xs sm:text-sm md:text-base text-slate-600 max-w-sm hidden sm:block">
                {s.tagline}
              </p>
              <button
                className="mt-3 md:mt-5 inline-flex items-center gap-1.5 text-white font-bold text-xs md:text-sm rounded-full px-4 py-2 md:px-5 md:py-2.5 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
                style={{ backgroundColor: s.accent }}
              >
                {s.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right visual */}
            <div className="hidden sm:flex items-center justify-center relative w-48 md:w-72 h-full shrink-0">
              <div
                className="absolute w-40 h-40 md:w-64 md:h-64 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${s.accent}30 0%, transparent 70%)`,
                }}
              />
              <div className="relative w-36 h-28 md:w-56 md:h-40">
                <div
                  className="absolute inset-0 rounded-2xl rotate-[-8deg] shadow-xl"
                  style={{ backgroundColor: s.accent }}
                />
                <div
                  className="absolute inset-0 rounded-2xl rotate-[4deg] bg-white shadow-xl flex items-center justify-center overflow-hidden border-2"
                  style={{ borderColor: `${s.accent}20` }}
                >
                  <div
                    className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full"
                    style={{ backgroundColor: "#F1F5F9" }}
                  />
                  <div
                    className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full"
                    style={{ backgroundColor: "#F1F5F9" }}
                  />
                  <div
                    className="absolute top-1/2 left-2 right-2 h-px -translate-y-1/2"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg, #cbd5e1 0 6px, transparent 6px 12px)",
                    }}
                  />
                  <div className="text-center px-3">
                    <div className="text-[8px] md:text-[10px] font-black text-slate-400 tracking-widest">
                      {s.tag}
                    </div>
                    <div
                      className="text-xl md:text-3xl font-black mt-0.5"
                      style={{ color: s.accent }}
                    >
                      {s.amount}
                    </div>
                    <div className="text-[8px] md:text-[10px] text-slate-500 mt-0.5">
                      {s.validity}
                    </div>
                  </div>
                </div>
                <div
                  className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shadow-xl rotate-[8deg]"
                  style={{ backgroundColor: s.accent }}
                >
                  <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`slide-${i}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                i === active ? "bg-[#DAFF3D] w-8" : "bg-white/40 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
