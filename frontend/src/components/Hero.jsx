import React, { useState, useEffect } from "react";
import { Ticket, Sparkles, ArrowRight, Percent, Home } from "lucide-react";

const slides = [
  {
    eyebrow: "PROMO SPESIAL",
    title: "Deal Hot",
    subtitle: "Dám Say!",
    tagline: "Voucher Belanja Rumah Hingga 50 Juta",
    cta: "Klaim Voucher",
    accent: "#FDE047",
    Icon: Ticket,
    from: "#0A2FD6",
    to: "#0B4CFF",
  },
  {
    eyebrow: "KPR TERBAIK",
    title: "KPR Mudah",
    subtitle: "Disetujui!",
    tagline: "Bunga Ringan, Proses 3 Hari Kerja",
    cta: "Ajukan Sekarang",
    accent: "#86EFAC",
    Icon: Home,
    from: "#001A9E",
    to: "#0033FF",
  },
  {
    eyebrow: "DISKON GEDE",
    title: "Cashback",
    subtitle: "Sampai 20%",
    tagline: "Ratusan Properti Pilihan, Stok Terbatas",
    cta: "Lihat Promo",
    accent: "#FCA5A5",
    Icon: Percent,
    from: "#0025F5",
    to: "#3B4EFF",
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
    <section className="bg-[#0025F5] pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="relative overflow-hidden rounded-3xl shadow-2xl h-[260px] md:h-[300px] transition-all duration-700"
          style={{
            backgroundImage: `linear-gradient(120deg, ${s.from} 0%, ${s.to} 60%, #1E5BFF 100%)`,
          }}
        >
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />

          {/* Glow orbs */}
          <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div
            className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full blur-3xl"
            style={{ backgroundColor: `${s.accent}30` }}
          />

          {/* Diagonal shine */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1/2 -left-1/4 w-1/2 h-[200%] bg-gradient-to-b from-white/5 via-white/10 to-transparent rotate-12" />
          </div>

          <div className="relative h-full flex items-center justify-between px-8 md:px-14">
            {/* Left content */}
            <div className="max-w-md text-white">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold tracking-wider mb-3"
                style={{
                  backgroundColor: `${s.accent}25`,
                  color: s.accent,
                  border: `1px solid ${s.accent}55`,
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                {s.eyebrow}
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95] drop-shadow">
                {s.title}
              </h1>
              <p
                className="text-3xl md:text-5xl font-black italic tracking-tight leading-none mt-1"
                style={{ color: s.accent }}
              >
                {s.subtitle}
              </p>
              <p className="mt-3 text-sm md:text-base text-white/90 max-w-sm">
                {s.tagline}
              </p>
              <button
                className="mt-5 inline-flex items-center gap-2 bg-white text-[#0025F5] font-bold text-sm rounded-full px-5 py-2.5 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
              >
                {s.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right visual */}
            <div className="hidden md:flex items-center justify-center relative w-64 h-full">
              {/* Big circle backdrop */}
              <div
                className="absolute w-56 h-56 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${s.accent}40 0%, transparent 70%)`,
                }}
              />
              {/* Card stack */}
              <div className="relative w-52 h-40">
                <div
                  className="absolute inset-0 rounded-2xl rotate-[-10deg] shadow-xl"
                  style={{ backgroundColor: `${s.accent}` }}
                />
                <div className="absolute inset-0 rounded-2xl rotate-[3deg] bg-white shadow-xl flex items-center justify-center overflow-hidden">
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0025F5]" />
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0025F5]" />
                  <div
                    className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg, #cbd5e1 0 6px, transparent 6px 12px)",
                    }}
                  />
                  <div className="text-center px-4">
                    <div className="text-[10px] font-bold text-slate-400 tracking-widest">
                      HUNIAJA VOUCHER
                    </div>
                    <div className="text-3xl font-black text-[#0025F5] mt-1">
                      Rp50Jt
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">
                      Berlaku s/d 31 Des
                    </div>
                  </div>
                </div>
                {/* Floating icon */}
                <div
                  className="absolute -top-6 -right-6 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl rotate-[8deg]"
                  style={{ backgroundColor: s.accent }}
                >
                  <Icon className="w-7 h-7 text-slate-900" />
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
                i === active ? "bg-white w-8" : "bg-white/40 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
