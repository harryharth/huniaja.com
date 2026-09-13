import React from "react";
import ListingCard from "./ListingCard";
import {
  subsidiListings,
  popularListings,
  ICON_SUBSIDI,
  ICON_POPULER,
} from "../mock";

export function SubsidiSection() {
  return (
    <Section
      iconSrc={ICON_SUBSIDI}
      iconAlt="Subsidi"
      subtitle="Properti yang paling banyak Diskonnya"
      items={subsidiListings}
      wrapperBg="bg-[#F1F0FE]"
    />
  );
}

export function PopulerSection() {
  return (
    <Section
      iconSrc={ICON_POPULER}
      iconAlt="Populer"
      subtitle="Properti yang paling banyak dilihat pembeli"
      items={popularListings}
      wrapperBg="bg-[#EEF6EE]"
    />
  );
}

function Section({ iconSrc, iconAlt, subtitle, items, wrapperBg }) {
  return (
    <section className="bg-white pt-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`${wrapperBg} rounded-2xl p-5`}>
          <div className="flex flex-wrap items-center justify-between mb-4 gap-3">
            <div className="flex items-center gap-3">
              <img src={iconSrc} alt={iconAlt} className="h-8 md:h-9 w-auto" />
              <span className="text-sm text-slate-600">{subtitle}</span>
            </div>
            <button className="bg-[#E5FF3D] hover:bg-[#d6f01f] text-slate-900 text-xs font-semibold px-4 py-1.5 rounded-full transition">
              LIHAT SEMUA
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item, i) => (
              <ListingCard key={item.id + i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
