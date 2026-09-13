import React from "react";
import { ArrowRight, Zap } from "lucide-react";
import { promoCards } from "../mock";

export default function PromoStrip() {
  return (
    <section className="bg-white pt-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {promoCards.map((p, idx) => (
            <div
              key={idx}
              className={`${p.bg} rounded-2xl p-5 h-32 flex flex-col justify-between text-white shadow-sm relative overflow-hidden hover:-translate-y-0.5 transition`}
            >
              {idx === 1 && (
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-white/20" />
                  <div className="absolute -left-8 -bottom-10 w-40 h-40 rounded-full bg-white/10" />
                </div>
              )}
              <div className="relative">
                <h3
                  className={`font-extrabold italic tracking-tight ${
                    idx === 1 ? "text-slate-900" : "text-white"
                  } text-lg md:text-xl"}`}
                >
                  {p.title}
                </h3>
                <p
                  className={`text-xs mt-1 ${
                    idx === 1 ? "text-slate-800/80" : "text-white/85"
                  }`}
                >
                  {p.subtitle}
                </p>
              </div>
              <button
                className={`self-start inline-flex items-center gap-1 text-xs font-semibold rounded-full px-3 py-1.5 relative ${
                  idx === 1
                    ? "bg-slate-900 text-white"
                    : "bg-white text-[#0025F5]"
                }`}
              >
                {p.cta} <ArrowRight className="w-3 h-3" />
              </button>
              {idx === 1 && (
                <Zap className="absolute top-4 right-4 w-6 h-6 fill-white text-white" />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-1.5 mt-4">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full ${
                i === 1 ? "bg-[#0025F5] w-6" : "bg-slate-300 w-1.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
