import React, { useState, useEffect } from "react";
import { Ticket, Home, Percent, Sparkles, ArrowRight } from "lucide-react";

const slides = [
  {
    eyebrow: "PROMO SPESIAL",
    title: "Deal Hot",
    subtitle: "Dám Say!",
    tagline: "Voucher Belanja Rumah Hingga Rp 50 Juta",
    cta: "Klaim Voucher",
    accent: "#DAFF3D",
    accentText: "#0025F5",
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
    accent: "#FDE047",
    accentText: "#0025F5",
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
    accent: "#7DD3FC",
    accentText: "#0025F5",
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
    accent: "#FBBF24",
    accentText: "#0025F5",
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
    accent: "#F9A8D4",
    accentText: "#0025F5",
    Icon: Home,
    tag: "HARGA MULAI",
    amount: "Rp300Jt",
    validity: "Unit Terbatas",
  },
  {
    eyebrow: "AGEN PROPERTI",
    title: "Cari Agen",
    subtitle: "Terpercaya",
    tagline: "Terhubung dengan Ribuan Agen Bersertifikat",
    cta: "Hubungi Agen",
    accent: "#86EFAC",
    accentText: "#0025F5",
    Icon: Sparkles,
    tag: "AGEN AKTIF",
    amount: "2000+",
    validity: "Di Seluruh Indonesia",
  },
  {
    eyebrow: "TITIP JUAL",
    title: "Jual Cepat",
    subtitle: "Tanpa Ribet",
    tagline: "Kami Bantu Pasarkan Propertimu ke Ribuan Pembeli",
    cta: "Titip Sekarang",
    accent: "#FDBA74",
    accentText: "#0025F5",
    Icon: Ticket,
    tag: "KOMISI HANYA",
    amount: "1%",
    validity: "Transparan & Aman",
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
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className="relative overflow-hidden rounded-[28px] md:rounded-[40px] shadow-2xl h-[220px] sm:h-[280px] md:h-[340px] bg-white transition-all duration-700"
        >
          {/* Left gradient panel */}
          <div
            className="absolute inset-y-0 left-0 w-full md:w-[58%] transition-colors duration-700"
            style={{
              backgroundImage: `linear-gradient(120deg, #001BC7 0%, #0025F5 55%, #2A55FF 100%)`,
            }}
          />
          {/* Grid pattern overlay on gradient */}
          <div
            className="absolute inset-y-0 left-0 w-full md:w-[58%] opacity-[0.10] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
          {/* Glow */}
          <div className="absolute -top-24 left-1/3 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          {/* Content */}
          <div className="relative h-full flex items-center px-6 sm:px-10 md:px-16">
            <div className="max-w-md text-white flex-1">
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] md:text-[11px] font-black tracking-[0.15em] mb-2 md:mb-3"
                style={{
                  backgroundColor: `${s.accent}25`,
                  color: s.accent,
                  border: `1px solid ${s.accent}55`,
                }}
              >
                <Sparkles className="w-3 h-3" />
                {s.eyebrow}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[0.95] drop-shadow-sm">
                {s.title}
              </h1>
              <p
                className="text-2xl sm:text-3xl md:text-5xl font-black italic tracking-tight leading-none mt-1"
                style={{ color: s.accent }}
              >
                {s.subtitle}
              </p>
              <p className="mt-2 md:mt-3 text-xs sm:text-sm md:text-base text-white/90 max-w-sm hidden sm:block">
                {s.tagline}
              </p>
              <button className="mt-3 md:mt-5 inline-flex items-center gap-1.5 bg-white text-[#0025F5] font-bold text-xs md:text-sm rounded-full px-4 py-2 md:px-5 md:py-2.5 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition">
                {s.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right visual - hidden on smallest screens */}
            <div className="hidden sm:flex items-center justify-center relative w-48 md:w-72 h-full shrink-0">
              <div
                className="absolute w-40 h-40 md:w-64 md:h-64 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${s.accent}55 0%, transparent 70%)`,
                }}
              />
              <div className="relative w-36 h-28 md:w-56 md:h-40">
                <div
                  className="absolute inset-0 rounded-2xl rotate-[-8deg] shadow-xl"
                  style={{ backgroundColor: s.accent }}
                />
                <div className="absolute inset-0 rounded-2xl rotate-[4deg] bg-white shadow-xl flex items-center justify-center overflow-hidden">
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#0025F5]" />
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#0025F5]" />
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
                    <div className="text-xl md:text-3xl font-black text-[#0025F5] mt-0.5">
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
                  <Icon className="w-5 h-5 md:w-7 md:h-7 text-[#0025F5]" />
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
