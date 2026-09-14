import React from "react";
import { Link } from "react-router-dom";
import ListingCard from "./ListingCard";
import { popularListings, ICON_POPULER } from "../mock";

export function PopulerSection() {
  return (
    <section className="bg-white pt-8 md:pt-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="bg-[#EEF6EE] rounded-2xl md:rounded-3xl p-4 md:p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
            <div className="flex items-center gap-2 md:gap-3">
              <img
                src={ICON_POPULER}
                alt="Populer"
                className="h-7 md:h-9 w-auto"
              />
              <span className="text-xs md:text-sm text-slate-600">
                Properti yang paling banyak Diskonya
              </span>
            </div>
            <Link
              to="/cari-properti"
              data-testid="populer-lihat-semua"
              className="bg-[#00B512] hover:bg-[#009e0f] text-white text-xs font-bold px-5 py-2 rounded-full transition shadow-sm self-start md:self-auto inline-flex items-center"
            >
              LIHAT SEMUA
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
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
