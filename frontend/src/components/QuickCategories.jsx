import React from "react";
import { ChevronRight, Scissors, Sparkles, Wrench, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { ICON_BELI_PROPERTI, ICON_KERJASAMA } from "../mock";

const cats = [
  { label: "Beli Properti", color: "#001DF3", icon: ICON_BELI_PROPERTI, href: "/cari-properti" },
  { label: "Kerjasama", color: "#00B512", icon: ICON_KERJASAMA, href: "/kerjasama" },
];

const services = [
  { label: "Potong Rumput", Icon: Scissors, color: "#00B512", bg: "bg-green-50", href: "/kontak" },
  { label: "Home Cleaning", Icon: Sparkles, color: "#001DF3", bg: "bg-blue-50", href: "/kontak" },
  { label: "Service AC", Icon: Wrench, color: "#001DF3", bg: "bg-blue-50", href: "/kontak" },
  { label: "Jaga Rumah", Icon: ShieldCheck, color: "#00B512", bg: "bg-green-50", href: "/kontak" },
];

export default function QuickCategories() {
  return (
    <section className="bg-white pt-6 md:pt-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-4 md:space-y-5">
        {/* Main categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
          {cats.map((c) => (
            <Link
              key={c.label}
              to={c.href}
              data-testid={`quickcat-${c.label}`}
              className="group flex items-center gap-3 md:gap-4 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-[24px] md:rounded-[28px] p-3 md:p-4 shadow-sm transition-all min-w-0"
            >
              <span className="shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                <img
                  src={c.icon}
                  alt={c.label}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
              </span>
              <span className="text-base md:text-lg font-semibold text-slate-800 flex-1 text-left truncate">
                {c.label}
              </span>
              <span
                className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: c.color }}
              >
                <ChevronRight
                  className="w-4 h-4 md:w-5 md:h-5 text-white"
                  strokeWidth={3}
                />
              </span>
            </Link>
          ))}
        </div>

        {/* Additional services */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
          {services.map((s) => (
            <Link
              key={s.label}
              to={s.href}
              data-testid={`quickservice-${s.label}`}
              className="group flex flex-col items-center justify-center bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-[20px] md:rounded-[24px] p-3 md:p-4 shadow-sm transition-all"
            >
              <span
                className={`w-11 h-11 md:w-14 md:h-14 rounded-2xl ${s.bg} flex items-center justify-center group-hover:scale-105 transition-transform`}
              >
                <s.Icon
                  className="w-5 h-5 md:w-6 md:h-6"
                  style={{ color: s.color }}
                  strokeWidth={2}
                />
              </span>
              <span className="text-xs md:text-sm font-semibold text-slate-800 mt-2 text-center leading-tight">
                {s.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
