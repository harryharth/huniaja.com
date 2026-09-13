import React from "react";
import ListingCard from "./ListingCard";
import { newListings, ICON_CARIYUK } from "../mock";

export default function NewListings() {
  return (
    <section className="bg-white pt-10 md:pt-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-4">
          <img
            src={ICON_CARIYUK}
            alt="Cari Yuk"
            className="h-7 md:h-9 w-auto"
          />
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
