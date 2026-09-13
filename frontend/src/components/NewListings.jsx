import React, { useState } from "react";
import ListingCard from "./ListingCard";
import { listingTabs, newListings, ICON_CARIYUK } from "../mock";

export default function NewListings() {
  const [active, setActive] = useState(listingTabs[0]);

  return (
    <section className="bg-white pt-10 md:pt-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 mb-4">
          <img
            src={ICON_CARIYUK}
            alt="Cari Yuk"
            className="h-7 md:h-9 w-auto self-start"
          />
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:overflow-visible scrollbar-hide">
            {listingTabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`shrink-0 text-xs font-medium px-3 py-1.5 rounded-full border transition ${
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
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
