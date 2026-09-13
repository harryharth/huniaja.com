import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { promoCards, LOGO_WHITE } from "../mock";

// Huniaja-style squircle icon with smile mark
function HuniajaIcon({ color = "#0025F5", size = 56 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 4 C82 4 96 18 96 50 C96 82 82 96 50 96 C18 96 4 82 4 50 C4 18 18 4 50 4 Z"
        fill={color}
      />
      {/* Left eye - inverted U */}
      <path
        d="M28 46 c0 -7 5 -12 11 -12 c6 0 11 5 11 12"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right eye - inverted U */}
      <path
        d="M50 46 c0 -7 5 -12 11 -12 c6 0 11 5 11 12"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      {/* Big smile */}
      <path
        d="M26 54 c4 14 14 20 24 20 c10 0 20 -6 24 -20"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

const cats = [
  { label: "Beli Properti", color: "#0025F5" },
  { label: "Kerjasama", color: "#12B815" },
];

export default function QuickCategories() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-white pt-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 items-stretch">
          {/* Left: Pill categories */}
          <div className="md:col-span-3 flex md:flex-col gap-4">
            {cats.map((c) => (
              <button
                key={c.label}
                className="group flex-1 flex items-center gap-3 md:gap-4 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-[28px] p-2 pr-3 md:pr-4 shadow-sm transition-all"
              >
                <span className="shrink-0">
                  <HuniajaIcon color={c.color} size={56} />
                </span>
                <span className="text-[15px] md:text-base font-semibold text-slate-800 whitespace-nowrap flex-1 text-left">
                  {c.label}
                </span>
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: c.color }}
                >
                  <ChevronRight
                    className="w-4 h-4 text-white"
                    strokeWidth={3}
                  />
                </span>
              </button>
            ))}
          </div>

          {/* Right: Two promo banners */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 h-full">
              {promoCards.map((p, idx) => (
                <div
                  key={idx}
                  className={`${p.bg} relative overflow-hidden rounded-[36px] md:rounded-[44px] h-40 md:h-[178px] flex flex-col items-center justify-center text-white shadow-md hover:-translate-y-0.5 transition-transform`}
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
