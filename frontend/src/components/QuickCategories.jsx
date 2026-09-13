import React from "react";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { ICON_BELI_PROPERTI, ICON_KERJASAMA, ICON_POTONG_RUMPUT, ICON_HOME_CLEANING, ICON_SERVICE_AC } from "../mock";

const items = [
  { label: "Beli Properti", color: "#001DF3", bg: "bg-blue-50", img: ICON_BELI_PROPERTI, href: "/cari-properti" },
  { label: "Kerjasama", color: "#00B512", bg: "bg-green-50", img: ICON_KERJASAMA, href: "/kerjasama" },
  { label: "Potong Rumput", color: "#00B512", bg: "bg-transparent", img: ICON_POTONG_RUMPUT, href: "/kontak" },
  { label: "Home Cleaning", color: "#001DF3", bg: "bg-transparent", img: ICON_HOME_CLEANING, href: "/kontak" },
  { label: "Service AC", color: "#001DF3", bg: "bg-transparent", img: ICON_SERVICE_AC, href: "/kontak" },
  { label: "Jaga Rumah", color: "#00B512", bg: "bg-green-50", Icon: ShieldCheck, href: "/kontak" },
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
              className="group flex flex-col items-center justify-center bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-[20px] md:rounded-[24px] p-3 md:p-4 shadow-sm transition-all min-w-0"
            >
              <span
                className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl ${c.bg} flex items-center justify-center`}
              >
                {c.img ? (
                  <img
                    src={c.img}
                    alt={c.label}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                ) : (
                  <c.Icon
                    className="w-5 h-5 md:w-6 md:h-6"
                    style={{ color: c.color }}
                    strokeWidth={2}
                  />
                )}
              </span>
              <span className="text-xs md:text-sm font-semibold text-slate-800 mt-2 text-center leading-tight">
                {c.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
