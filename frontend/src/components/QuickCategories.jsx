import React from "react";
import { Home, Handshake, Sprout, Sparkles, Snowflake, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  { label: "Beli Properti", bg: "#001DF3", Icon: Home, href: "/cari-properti" },
  { label: "Kerjasama", bg: "#00B512", Icon: Handshake, href: "/kerjasama" },
  { label: "Potong Rumput", bg: "#E11D28", Icon: Sprout, href: "/kontak" },
  { label: "Home Cleaning", bg: "#06B6D4", Icon: Sparkles, href: "/kontak" },
  { label: "Service AC", bg: "#F59E0B", Icon: Snowflake, href: "/kontak" },
  { label: "Jaga Rumah", bg: "#000066", Icon: ShieldCheck, href: "/kontak" },
];

export default function QuickCategories() {
  return (
    <section className="bg-white pt-6 md:pt-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {items.map((c) => (
            <Link
              key={c.label}
              to={c.href}
              data-testid={`quickcat-${c.label}`}
              className="group flex flex-col items-center justify-center bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-[20px] md:rounded-[24px] p-3 md:p-4 shadow-sm transition-all min-w-0"
            >
              <span
                className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-105"
                style={{ backgroundColor: c.bg }}
              >
                <c.Icon
                  className="w-6 h-6 md:w-7 md:h-7 text-white"
                  strokeWidth={2.25}
                />
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
