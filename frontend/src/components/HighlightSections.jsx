import React from "react";
import ListingCard from "./ListingCard";
import { subsidiListings, popularListings } from "../mock";
import { Flame, Tag } from "lucide-react";

export function SubsidiSection() {
  return (
    <Section
      title="SUBSIDI"
      icon={<Tag className="w-5 h-5 text-red-500" />}
      subtitle="Properti yang paling banyak Diskonnya"
      items={subsidiListings}
      wrapperBg="bg-[#F1F0FE]"
    />
  );
}

export function PopulerSection() {
  return (
    <Section
      title="POPULER"
      icon={<Flame className="w-5 h-5 text-orange-500" />}
      subtitle="Properti yang paling banyak dilihat pembeli"
      items={popularListings}
      wrapperBg="bg-[#EEF6EE]"
    />
  );
}

function Section({ title, icon, subtitle, items, wrapperBg }) {
  return (
    <section className="bg-white pt-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`${wrapperBg} rounded-2xl p-5`}>
          <div className="flex flex-wrap items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-extrabold italic text-[#0025F5]">
                {title}
              </h3>
              {icon}
              <span className="text-sm text-slate-600 ml-2">{subtitle}</span>
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
