import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import { newListings, ICON_CARIYUK } from "../mock";
import { fetchProperties } from "../lib/publicApi";

export default function NewListings() {
  const [items, setItems] = useState(newListings);

  useEffect(() => {
    let mounted = true;
    fetchProperties().then((data) => {
      if (mounted && data && data.length) {
        // Sort by created_at desc so newest admin-listed properties appear first
        const sorted = [...data].sort((a, b) =>
          (b.created_at || "").localeCompare(a.created_at || "")
        );
        setItems(sorted.slice(0, 6));
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <section className="bg-white pt-10 md:pt-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-4">
          <img
            src={ICON_CARIYUK}
            alt="Listing Baru"
            className="h-7 md:h-9 w-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {items.map((item, i) => (
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
