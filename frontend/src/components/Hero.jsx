import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Ticket, Home, Percent, Sparkles, ArrowRight } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

// Icon name -> component map for admin-configurable icons
const ICON_MAP = { Ticket, Home, Percent, Sparkles };

// Fallback slides (used if backend returns nothing)
const FALLBACK_SLIDES = [
  { eyebrow: "PROMO SPESIAL", title: "Deal Hot", subtitle: "Dám Say!", tagline: "Voucher Belanja Rumah Hingga Rp 50 Juta", cta_label: "Klaim Voucher", cta_href: "/cari-properti", accent: "#00B512", icon_name: "Ticket", tag: "HUNIAJA VOUCHER", amount: "Rp50Jt", validity: "Berlaku s/d 31 Des", image: "" },
  { eyebrow: "KPR TERBAIK", title: "KPR Mudah", subtitle: "Disetujui!", tagline: "Bunga Ringan, Proses Cepat 3 Hari Kerja", cta_label: "Ajukan Sekarang", cta_href: "/kpr", accent: "#001DF3", icon_name: "Home", tag: "CICILAN MULAI", amount: "3jt/bln", validity: "Tenor s/d 20 Tahun", image: "" },
  { eyebrow: "CASHBACK BESAR", title: "Cashback", subtitle: "Sampai 20%", tagline: "Ratusan Properti Pilihan, Stok Terbatas", cta_label: "Lihat Promo", cta_href: "/cari-properti", accent: "#001DF3", icon_name: "Percent", tag: "CASHBACK HINGGA", amount: "Rp100Jt", validity: "Untuk Rumah Terpilih", image: "" },
];

export default function Hero() {
  const [slides, setSlides] = useState(FALLBACK_SLIDES);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let mounted = true;
    axios
      .get(`${API}/banners`)
      .then(({ data }) => {
        if (mounted && Array.isArray(data) && data.length) {
          setSlides(data);
        }
      })
      .catch(() => {});
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), 5200);
    return () => clearInterval(t);
  }, [slides.length]);

  const s = slides[active] || slides[0];
  const accent = s.accent || "#001DF3";
  const Icon = ICON_MAP[s.icon_name] || Sparkles;

  return (
    <section className="bg-[#001DF3] pt-6 md:pt-10 pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className="relative overflow-hidden bg-white shadow-2xl h-[190px] sm:h-[280px] md:h-[340px] transition-all duration-700"
          style={{ borderRadius: "48px" }}
        >
          {/* Uploaded image OR generated composition */}
          {s.image ? (
            <>
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
              <div className="relative h-full flex items-center px-6 sm:px-14 md:px-20 text-white">
                <div className="max-w-md flex-1">
                  {s.eyebrow && (
                    <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur border border-white/30 rounded-full px-3 py-1 text-[11px] font-black tracking-[0.15em] mb-3">
                      <Sparkles className="w-3 h-3" />
                      {s.eyebrow}
                    </div>
                  )}
                  <h1 className="text-2xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
                    {s.title}
                  </h1>
                  {s.subtitle && (
                    <p
                      className="text-xl sm:text-3xl md:text-5xl font-black italic tracking-tight leading-none mt-1"
                      style={{ color: accent }}
                    >
                      {s.subtitle}
                    </p>
                  )}
                  {s.tagline && (
                    <p className="mt-2 md:mt-3 text-[11px] sm:text-sm md:text-base max-w-sm hidden sm:block">
                      {s.tagline}
                    </p>
                  )}
                  {s.cta_label && (
                    <Link
                      to={s.cta_href || "/cari-properti"}
                      className="mt-2 md:mt-5 inline-flex items-center gap-1.5 text-white font-bold text-[11px] md:text-sm rounded-full px-3 py-1.5 md:px-5 md:py-2.5 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
                      style={{ backgroundColor: accent }}
                    >
                      {s.cta_label}
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                className="absolute -top-24 -left-16 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
                style={{ backgroundColor: accent }}
              />
              <div
                className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10"
                style={{ backgroundColor: accent }}
              />
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, #001DF3 1px, transparent 0)",
                  backgroundSize: "22px 22px",
                }}
              />

              <div className="relative h-full flex items-center px-6 sm:px-14 md:px-20">
                <div className="max-w-md flex-1">
                  <div
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 md:px-3 md:py-1 text-[9px] md:text-[11px] font-black tracking-[0.15em] mb-1.5 md:mb-3"
                    style={{
                      backgroundColor: `${accent}15`,
                      color: accent,
                      border: `1px solid ${accent}40`,
                    }}
                  >
                    <Sparkles className="w-3 h-3" />
                    {s.eyebrow}
                  </div>
                  <h1 className="text-2xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[0.95] text-slate-900">
                    {s.title}
                  </h1>
                  <p
                    className="text-xl sm:text-3xl md:text-5xl font-black italic tracking-tight leading-none mt-1"
                    style={{ color: accent }}
                  >
                    {s.subtitle}
                  </p>
                  <p className="mt-2 md:mt-3 text-[11px] sm:text-sm md:text-base text-slate-600 max-w-sm hidden sm:block">
                    {s.tagline}
                  </p>
                  {s.cta_label && (
                    <Link
                      to={s.cta_href || "/cari-properti"}
                      className="mt-2 md:mt-5 inline-flex items-center gap-1.5 text-white font-bold text-[11px] md:text-sm rounded-full px-3 py-1.5 md:px-5 md:py-2.5 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
                      style={{ backgroundColor: accent }}
                    >
                      {s.cta_label}
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                    </Link>
                  )}
                </div>

                <div className="hidden sm:flex items-center justify-center relative w-48 md:w-72 h-full shrink-0">
                  <div
                    className="absolute w-40 h-40 md:w-64 md:h-64 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${accent}30 0%, transparent 70%)`,
                    }}
                  />
                  <div className="relative w-36 h-28 md:w-56 md:h-40">
                    <div
                      className="absolute inset-0 rounded-2xl rotate-[-8deg] shadow-xl"
                      style={{ backgroundColor: accent }}
                    />
                    <div
                      className="absolute inset-0 rounded-2xl rotate-[4deg] bg-white shadow-xl flex items-center justify-center overflow-hidden border-2"
                      style={{ borderColor: `${accent}20` }}
                    >
                      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full" style={{ backgroundColor: "#F1F5F9" }} />
                      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full" style={{ backgroundColor: "#F1F5F9" }} />
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
                          style={{ color: accent }}
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
                      style={{ backgroundColor: accent }}
                    >
                      <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex justify-center gap-2 mt-3 md:mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`slide-${i}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                i === active ? "bg-[#00B512] w-8" : "bg-white/40 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
