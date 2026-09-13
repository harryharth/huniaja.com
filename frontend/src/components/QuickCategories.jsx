import React, { useState } from "react";
import { Home, House, ChevronRight } from "lucide-react";
import { quickCategories, promoCards, LOGO_WHITE } from "../mock";

const iconMap = { Home, House };

export default function QuickCategories() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-white pt-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 items-stretch">
          {/* Left: Pill categories */}
          <div className="md:col-span-3 flex md:flex-col gap-3">
            {quickCategories.map((c) => {
              const Icon = iconMap[c.icon];
              return (
                <button
                  key={c.label}
                  className="group flex-1 flex items-center gap-3 bg-white border border-slate-200 hover:border-[#0025F5]/40 hover:shadow-md rounded-full p-1.5 pr-3 transition-all"
                >
                  <span
                    className={`w-11 h-11 flex items-center justify-center rounded-2xl ${c.color} text-white shrink-0 shadow-sm`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2.4} />
                  </span>
                  <span className="text-sm font-semibold text-slate-800 whitespace-nowrap flex-1 text-left">
                    {c.label}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-full ${c.color} flex items-center justify-center shrink-0`}
                  >
                    <ChevronRight
                      className="w-3.5 h-3.5 text-white"
                      strokeWidth={3}
                    />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Two promo banners */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 h-full">
              {promoCards.map((p, idx) => (
                <div
                  key={idx}
                  className={`${p.bg} relative overflow-hidden rounded-[36px] md:rounded-[44px] h-40 md:h-44 flex flex-col items-center justify-center text-white shadow-md hover:-translate-y-0.5 transition-transform`}
                >
                  <img
                    src={LOGO_WHITE}
                    alt="Huniaja"
                    className="absolute top-4 md:top-5 left-1/2 -translate-x-1/2 h-4 md:h-5 opacity-90"
                  />
                  <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-center px-4 mt-4">
                    {p.accent ? (
                      <>
                        <span>#BeliRumah</span>
                        <span className="text-[#12FF3D]">JadiMudah</span>
                      </>
                    ) : (
                      p.title
                    )}
                  </h3>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-1.5 mt-4">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  aria-label={`dot-${i}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "bg-[#0025F5] w-6" : "bg-slate-300 w-1.5"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
