import React from "react";
import {
  Home,
  House,
  Megaphone,
  UserRound,
  ThumbsUp,
  ChevronRight,
  BadgeCheck,
} from "lucide-react";
import { quickCategories } from "../mock";

const iconMap = {
  Home,
  House,
  Megaphone,
  UserRound,
  ThumbsUp,
  HomeCheck: BadgeCheck,
};

export default function QuickCategories() {
  return (
    <section className="bg-white pt-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {quickCategories.map((c) => {
            const Icon = iconMap[c.icon];
            return (
              <button
                key={c.label}
                className="group flex items-center gap-2 bg-white border border-slate-200 hover:border-[#0025F5]/40 hover:shadow-md rounded-full p-1 pr-2 transition-all"
              >
                <span
                  className={`w-10 h-10 flex items-center justify-center rounded-xl ${c.color} text-white shrink-0 shadow-sm`}
                >
                  <Icon className="w-5 h-5" strokeWidth={2.4} />
                </span>
                <span className="flex-1 text-[13px] font-semibold text-slate-800 text-left whitespace-nowrap">
                  {c.label}
                </span>
                <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-[#0025F5] flex items-center justify-center transition-colors shrink-0">
                  <ChevronRight
                    className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors"
                    strokeWidth={3}
                  />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
