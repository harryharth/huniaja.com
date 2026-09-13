import React from "react";
import { Home, House, ChevronRight } from "lucide-react";
import { quickCategories } from "../mock";

const iconMap = { Home, House };

export default function QuickCategories() {
  return (
    <section className="bg-white pt-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap gap-3">
          {quickCategories.map((c) => {
            const Icon = iconMap[c.icon];
            return (
              <button
                key={c.label}
                className="group flex items-center gap-3 bg-white border border-slate-200 hover:border-[#0025F5]/40 hover:shadow-md rounded-full p-1.5 pr-3 transition-all"
              >
                <span
                  className={`w-11 h-11 flex items-center justify-center rounded-2xl ${c.color} text-white shrink-0 shadow-sm`}
                >
                  <Icon className="w-5 h-5" strokeWidth={2.4} />
                </span>
                <span className="text-sm font-semibold text-slate-800 whitespace-nowrap pr-1">
                  {c.label}
                </span>
                <span
                  className={`w-6 h-6 rounded-full ${c.color} flex items-center justify-center shrink-0`}
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
