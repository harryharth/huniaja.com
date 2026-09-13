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
    <section className="bg-slate-50 py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-center text-lg md:text-2xl font-bold text-slate-900 mb-8 md:mb-10">
          Kenapa harus Huniaja.com ?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 relative">
          {features.map((f) => (
            <div
              key={f.num}
              className="relative bg-white rounded-3xl px-6 pt-10 pb-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-[#00B512] text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                {f.num}
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <f.Icon
                    className="w-10 h-10"
                    strokeWidth={2.2}
                    style={{ color: "#00B512" }}
                  />
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-900">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-500 mt-2 max-w-xs leading-relaxed">
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
