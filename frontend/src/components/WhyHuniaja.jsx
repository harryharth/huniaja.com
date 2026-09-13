import React from "react";
import {
  TrendingUp,
  Cpu,
  ShieldCheck,
  Share2,
  HandHeart,
  Brush,
} from "lucide-react";

const features = [
  {
    num: 1,
    title: "Tumbuh Cepat",
    desc: "Platform properti yang berkembang paling pesat.",
    Icon: TrendingUp,
  },
  {
    num: 2,
    title: "Teknologi AI",
    desc: "Didukung kecerdasan buatan untuk kemudahan.",
    Icon: Cpu,
  },
  {
    num: 3,
    title: "Tepercaya",
    desc: "Ekosistem properti yang aman dan terpercaya.",
    Icon: ShieldCheck,
  },
  {
    num: 4,
    title: "Jaringan Luas",
    desc: "Memiliki Jaringan Agen dan developer di seluruh Indonesia.",
    Icon: Share2,
  },
  {
    num: 5,
    title: "Afiliasi Unggul",
    desc: "Sistem komisi jelas dan peluang besar cocok untuk segala kalangan.",
    Icon: HandHeart,
  },
  {
    num: 6,
    title: "Layanan Lengkap",
    desc: "Listing, KPR, hingga perawatan rumah.",
    Icon: Brush,
  },
];

export default function WhyHuniaja() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20 bg-gradient-to-b from-white via-blue-50/60 to-white">
      {/* decorative background blobs */}
      <div
        aria-hidden
        className="absolute -top-16 -left-16 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#001DF3" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-15"
        style={{ backgroundColor: "#000066" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full text-white"
            style={{ backgroundColor: "#00B512" }}
            data-testid="why-huniaja-tag"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
            Kenapa Huniaja
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-black leading-tight"
            style={{ color: "#000066" }}
          >
            Alasan Ribuan Keluarga{" "}
            <span style={{ color: "#00B512" }}>Memilih Huniaja.com</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Kami membangun ekosistem yang membuat urusan rumah menjadi jauh
            lebih tenang, transparan, dan menyenangkan.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((f) => (
            <div
              key={f.num}
              className="group relative bg-white rounded-3xl p-6 md:p-7 border border-blue-100 shadow-[0_4px_18px_-6px_rgba(0,29,243,0.15)] hover:shadow-[0_18px_36px_-12px_rgba(0,29,243,0.35)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              data-testid={`why-card-${f.num}`}
            >
              {/* top gradient bar: blue → green → navy */}
              <span
                aria-hidden
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background:
                    "linear-gradient(90deg, #001DF3 0%, #00B512 55%, #000066 100%)",
                }}
              />

              {/* soft green corner glow */}
              <span
                aria-hidden
                className="absolute -top-14 -right-14 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: "#00B512" }}
              />

              {/* number chip — green filled */}
              <span
                className="absolute top-5 right-5 text-[11px] font-black tracking-widest px-2.5 py-1 rounded-full text-white shadow-sm"
                style={{ backgroundColor: "#00B512" }}
              >
                0{f.num}
              </span>

              {/* icon — blue tint, green ring on hover */}
              <div
                className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all group-hover:ring-2 group-hover:ring-offset-2"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,29,243,0.10) 0%, rgba(0,181,18,0.12) 100%)",
                  boxShadow: "inset 0 0 0 1px rgba(0,29,243,0.15)",
                }}
              >
                <f.Icon
                  className="w-7 h-7 md:w-8 md:h-8"
                  strokeWidth={2.2}
                  style={{ color: "#001DF3" }}
                />
              </div>

              <h3
                className="mt-5 text-lg md:text-xl font-extrabold leading-snug"
                style={{ color: "#000066" }}
              >
                {f.title}
              </h3>

              {/* accent underline (green) — grows on hover */}
              <span
                aria-hidden
                className="block h-[3px] rounded-full mt-2 transition-all"
                style={{
                  backgroundColor: "#00B512",
                  width: "28px",
                }}
              />

              <p className="mt-3 text-sm md:text-[15px] text-slate-600 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
