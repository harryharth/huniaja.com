import React, { useState } from "react";
import ListingCard from "./ListingCard";
import { listingTabs, newListings, ICON_CARIYUK } from "../mock";

export default function NewListings() {
  const [active, setActive] = useState(listingTabs[0]);

  return (
    <section className="bg-white pt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <img
            src={ICON_CARIYUK}
            alt="Cari Yuk"
            className="h-8 md:h-9 w-auto"
          />
          <div className="flex flex-wrap gap-2">
            {listingTabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border transition ${
                  active === t
                    ? "bg-[#0025F5] text-white border-[#0025F5]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {newListings.map((item, i) => (
            <ListingCard
              key={item.id + i}
              item={item}
              variant={i === 0 ? "featured-whatsapp" : "default"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
