import React, { useState, useEffect } from "react";
import { Ticket, Zap, Sparkles } from "lucide-react";

const slides = [
  {
    title: "Deal hot",
    subtitle: "dãm say!",
    tagline: "Mua sắm ngất ngây",
    gradient: "from-sky-400 via-blue-500 to-blue-700",
  },
  {
    title: "Promo Rumah",
    subtitle: "terbaru!",
    tagline: "Cicilan Ringan Setiap Hari",
    gradient: "from-indigo-500 via-blue-600 to-blue-800",
  },
  {
    title: "KPR Mudah",
    subtitle: "disetujui!",
    tagline: "Bunga Ringan Proses Cepat",
    gradient: "from-blue-500 via-sky-500 to-cyan-500",
  },
  {
    title: "Diskon Besar",
    subtitle: "hanya di sini!",
    tagline: "Hemat Hingga 50 Juta",
    gradient: "from-purple-500 via-blue-600 to-blue-700",
  },
  {
    title: "Rumah Impian",
    subtitle: "jadi nyata!",
    tagline: "Ribuan Pilihan Menantimu",
    gradient: "from-blue-600 via-indigo-600 to-blue-800",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  const s = slides[active];

  return (
    <section className="bg-[#0025F5] pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br ${s.gradient} transition-all duration-700 h-[220px] md:h-[260px]`}
        >
          {/* Decorative shapes */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-24 -left-10 w-72 h-72 rounded-full bg-yellow-300/20 blur-2xl" />
          </div>

          {/* Vouchers */}
          <div className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-2 rotate-[-12deg]">
            {["VOUCHER", "DISKON", "CASHBACK"].map((v, i) => (
              <div
                key={v}
                className={`px-3 py-1.5 rounded-md text-[10px] md:text-xs font-black tracking-wider text-white shadow-lg ${
                  i === 0
                    ? "bg-yellow-400 text-blue-900"
                    : i === 1
                    ? "bg-red-500"
                    : "bg-emerald-500"
                }`}
                style={{ marginLeft: `${i * 10}px` }}
              >
                {v}
              </div>
            ))}
          </div>

          {/* Text */}
          <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 text-right">
            <div className="flex items-baseline gap-2 justify-end">
              <h1
                className="text-5xl md:text-7xl font-black tracking-tight text-white drop-shadow-lg"
                style={{
                  background:
                    "linear-gradient(180deg, #fff 30%, #ffe27a 60%, #ff9d3d 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.title}
              </h1>
              <Ticket className="w-8 h-8 md:w-10 md:h-10 text-yellow-300 -rotate-12" />
            </div>
            <p className="text-2xl md:text-3xl font-black italic text-white -mt-1">
              {s.subtitle}
            </p>
            <div className="mt-2 inline-flex items-center gap-2 bg-white/95 rounded-full px-4 py-1.5 shadow">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-slate-900 font-bold text-sm md:text-base">
                {s.tagline}
              </span>
            </div>
          </div>

          {/* Chair icon corner */}
          <div className="absolute left-6 bottom-4 hidden md:flex items-center gap-2 text-white/90 text-xs font-semibold">
            <Zap className="w-4 h-4 fill-yellow-300 text-yellow-300" />
            Huniaja Deals
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
