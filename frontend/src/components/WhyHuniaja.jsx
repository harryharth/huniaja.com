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
    desc: "Memiliki jaringan agen dan developer di seluruh Indonesia.",
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
    <section className="bg-slate-100 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-px bg-[#001DF3]" />
            <span
              className="text-[11px] font-bold tracking-[0.25em] uppercase"
              style={{ color: "#001DF3" }}
              data-testid="why-huniaja-tag"
            >
              Kenapa Huniaja
            </span>
            <span className="w-8 h-px bg-[#001DF3]" />
          </div>
          <h2 className="mt-4 text-2xl md:text-4xl font-black leading-tight text-slate-900 whitespace-nowrap">
            Kenapa harus Huniaja.com?
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-500 leading-relaxed">
            Kami membangun ekosistem yang membuat urusan rumah menjadi jauh lebih
            tenang, transparan, dan menyenangkan.
          </p>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 relative">
          {features.map((f) => (
            <div
              key={f.num}
              className="group relative bg-white rounded-[28px] px-7 pt-11 pb-8 border border-slate-100 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-[0_18px_40px_-12px_rgba(0,29,243,0.20)] hover:-translate-y-0.5 hover:border-[#001DF3]/25 transition-all duration-300"
              data-testid={`why-card-${f.num}`}
            >
              {/* number badge */}
              <div
                className="absolute -top-4 left-7 w-9 h-9 rounded-full text-white font-black text-sm flex items-center justify-center shadow-md ring-4 ring-white"
                style={{ backgroundColor: "#001DF3" }}
              >
                {f.num}
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 bg-slate-50 group-hover:bg-[#001DF3]/8 transition-colors">
                  <f.Icon
                    className="w-9 h-9 transition-transform group-hover:scale-110"
                    strokeWidth={1.8}
                    style={{ color: "#001DF3" }}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-extrabold text-slate-900 leading-snug">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-500 mt-2.5 max-w-xs leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
