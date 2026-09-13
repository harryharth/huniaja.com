import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  promoCards,
  LOGO_WHITE,
  ICON_BELI_PROPERTI,
  ICON_KERJASAMA,
} from "../mock";

const cats = [
  { label: "Beli Properti", color: "#0025F5", icon: ICON_BELI_PROPERTI, href: "/cari-properti" },
  { label: "Kerjasama", color: "#12B815", icon: ICON_KERJASAMA, href: "/kerjasama" },
];

export default function QuickCategories() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-white pt-6 md:pt-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 items-stretch">
          {/* Left: Pill categories */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
            {cats.map((c) => (
              <Link
                key={c.label}
                to={c.href}
                className="group flex items-center gap-2 md:gap-3 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-[24px] md:rounded-[28px] p-2 pr-2 md:pr-4 shadow-sm transition-all min-w-0"
              >
                <span className="shrink-0 w-11 h-11 md:w-14 md:h-14 flex items-center justify-center">
                  <img
                    src={c.icon}
                    alt={c.label}
                    className="w-11 h-11 md:w-14 md:h-14 object-contain"
                  />
                </span>
                <span className="text-[13px] md:text-base font-semibold text-slate-800 flex-1 text-left truncate">
                  {c.label}
                </span>
                <span
                  className="w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: c.color }}
                >
                  <ChevronRight
                    className="w-3.5 h-3.5 md:w-4 md:h-4 text-white"
                    strokeWidth={3}
                  />
                </span>
              </Link>
            ))}
          </div>

          {/* Right: Two promo banners */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 h-full">
              {promoCards.map((p, idx) => (
                <div
                  key={idx}
                  className={`${p.bg} relative overflow-hidden rounded-[28px] md:rounded-[44px] h-32 md:h-[178px] flex flex-col items-center justify-center text-white shadow-md hover:-translate-y-0.5 transition-transform`}
                >
                  <img
                    src={LOGO_WHITE}
                    alt="Huniaja"
                    className="absolute top-3 md:top-5 left-1/2 -translate-x-1/2 h-3.5 md:h-5 opacity-90"
                  />
                  <h3 className="text-lg md:text-2xl font-extrabold tracking-tight text-center px-4 mt-3 md:mt-4">
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
            <div className="flex justify-center gap-1.5 mt-3 md:mt-4">
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
