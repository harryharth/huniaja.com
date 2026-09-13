import React from "react";
import ListingCard from "./ListingCard";
import { popularListings, ICON_POPULER } from "../mock";

export function PopulerSection() {
  return (
    <section className="bg-white pt-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#EEF6EE] rounded-2xl p-5">
          <div className="flex flex-wrap items-center justify-between mb-4 gap-3">
            <div className="flex items-center gap-3">
              <img
                src={ICON_POPULER}
                alt="Populer"
                className="h-8 md:h-9 w-auto"
              />
              <span className="text-sm text-slate-600">
                Properti yang paling banyak Diskonya
              </span>
            </div>
            <button className="bg-[#12B815] hover:bg-[#0fa112] text-white text-xs font-bold px-5 py-2 rounded-full transition shadow-sm">
              LIHAT SEMUA
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {popularListings.map((item, i) => (
              <ListingCard
                key={item.id + i}
                item={item}
                variant={i === 0 ? "featured-download" : "default"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
