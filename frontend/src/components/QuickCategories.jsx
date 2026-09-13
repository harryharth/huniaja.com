import React from "react";
import {
  Home,
  Key,
  Megaphone,
  Wallet,
  Package,
  Sparkles,
} from "lucide-react";
import { quickCategories } from "../mock";

const iconMap = { Home, Key, Megaphone, Wallet, Package, Sparkles };

export default function QuickCategories() {
  return (
    <section className="bg-white pt-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {quickCategories.map((c) => {
            const Icon = iconMap[c.icon];
            return (
              <button
                key={c.label}
                className="group flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm rounded-full pl-1 pr-4 py-1 transition"
              >
                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${c.color} text-white`}
                >
                  <Icon className="w-4 h-4" />
                </span>
                <span className="text-sm font-medium text-slate-800">
                  {c.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
