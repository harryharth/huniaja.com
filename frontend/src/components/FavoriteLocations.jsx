import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { favoriteLocations } from "../mock";

export default function FavoriteLocations() {
  const [active, setActive] = useState("Jakarta");

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-6">
          Lokasi Hunian Favorit
        </h2>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
          {favoriteLocations.map((loc) => {
            const isActive = active === loc;
            return (
              <button
                key={loc}
                onClick={() => setActive(loc)}
                className="flex flex-col items-center gap-2"
              >
                <span
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                    isActive
                      ? "bg-[#0025F5] text-white shadow-md"
                      : "bg-blue-50 text-[#0025F5] hover:bg-blue-100"
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                </span>
                <span
                  className={`text-xs ${
                    isActive ? "text-[#0025F5] font-semibold" : "text-slate-700"
                  }`}
                >
                  {loc}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
