import React from "react";
import { TrendingUp, Cpu, ShieldCheck, Users, Megaphone } from "lucide-react";
import { whyFeatures } from "../mock";

const iconMap = { TrendingUp, Cpu, ShieldCheck, Users, Megaphone };

export default function WhyHuniaja() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-xl md:text-2xl font-bold text-slate-900 mb-10">
          Kenapa harus Huniaja.com ?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {whyFeatures.map((f) => {
            const Icon = iconMap[f.icon];
            return (
              <div
                key={f.title}
                className="flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:-translate-y-1 transition">
                  <Icon className={`w-8 h-8 ${f.color}`} />
                </div>
                <p className="text-xs md:text-sm font-semibold text-slate-800 leading-snug max-w-[140px]">
                  {f.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
