import React from "react";
import { Link } from "react-router-dom";
import { ICON_BELI_PROPERTI, ICON_KERJASAMA, ICON_POTONG_RUMPUT, ICON_HOME_CLEANING, ICON_SERVICE_AC, ICON_JAGA_RUMAH } from "../mock";

const items = [
  { label: "Beli Properti", bg: "bg-blue-50", img: ICON_BELI_PROPERTI, href: "/cari-properti" },
  { label: "Kerjasama", bg: "bg-green-50", img: ICON_KERJASAMA, href: "/kerjasama" },
  { label: "Potong Rumput", bg: "bg-transparent", img: ICON_POTONG_RUMPUT, href: "/kontak" },
  { label: "Home Cleaning", bg: "bg-transparent", img: ICON_HOME_CLEANING, href: "/kontak" },
  { label: "Service AC", bg: "bg-transparent", img: ICON_SERVICE_AC, href: "/kontak" },
  { label: "Jaga Rumah", bg: "bg-transparent", img: ICON_JAGA_RUMAH, href: "/kontak" },
];

export default function QuickCategories() {
  return (
    <section className="bg-white pt-6 md:pt-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {items.map((c) => (
            <Link
              key={c.label}
              to={c.href}
              data-testid={`quickcat-${c.label}`}
              className="group flex flex-row items-center gap-2 md:gap-2.5 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-[20px] md:rounded-[24px] p-2.5 md:p-3 shadow-sm transition-all min-w-0"
            >
              <span
                className={`shrink-0 w-11 h-11 md:w-11 md:h-11 rounded-2xl ${c.bg} flex items-center justify-center`}
              >
                <img
                  src={c.img}
                  alt={c.label}
                  className="w-9 h-9 md:w-10 md:h-10 object-contain"
                />
              </span>
              <span className="text-xs md:text-[13px] lg:text-sm font-semibold text-slate-800 leading-tight">
                {c.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
