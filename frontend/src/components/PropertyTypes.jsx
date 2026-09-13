import React, { useState } from "react";
import {
  Home,
  Trees,
  Building2,
  Store,
  Briefcase,
  Warehouse,
  Factory,
  Hotel,
  BedDouble,
  Palmtree,
} from "lucide-react";
import { propertyTypes, ICON_CARIYUK } from "../mock";

const iconMap = {
  Home,
  Trees,
  Building2,
  Store,
  Briefcase,
  Warehouse,
  Factory,
  Hotel,
  BedDouble,
  Palmtree,
};

export default function PropertyTypes() {
  const [active, setActive] = useState("Rumah");

  return (
    <section className="bg-white pt-10">
      <div className="max-w-6xl mx-auto px-6">
        <img src={ICON_CARIYUK} alt="Cari Yuk" className="h-8 md:h-9 w-auto mb-6" />
        <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
          {propertyTypes.map((t) => {
            const Icon = iconMap[t.icon];
            const isActive = active === t.label;
            return (
              <button
                key={t.label}
                onClick={() => setActive(t.label)}
                className="flex flex-col items-center gap-2 group"
              >
                <span
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                    isActive
                      ? "bg-[#0025F5] text-white shadow-md scale-105"
                      : "bg-blue-50 text-[#0025F5] group-hover:bg-blue-100"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </span>
                <span
                  className={`text-xs font-medium ${
                    isActive ? "text-[#0025F5]" : "text-slate-700"
                  }`}
                >
                  {t.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
