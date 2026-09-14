import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  BedDouble,
  Bath,
  Ruler,
  MapPin,
  BadgeCheck,
  FileText,
  MessageCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { WA_URL } from "./ChatWidget";

export default function ListingCard({ item, variant = "default" }) {
  const [liked, setLiked] = useState(
    item.liked || variant === "featured-whatsapp" || variant === "featured-download"
  );

  const detailClasses =
    "bg-white border border-slate-200 text-slate-800 hover:bg-[#001DF3] hover:border-[#001DF3] hover:text-white";

  const whatsappClasses =
    "border border-slate-200 bg-white text-slate-800 hover:bg-[#00B512] hover:border-[#00B512] hover:text-white";

  const detailUrl = `/properti/${item.id}`;

  return (
    <div
      data-testid={`listing-card-${item.id}`}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all group flex flex-col"
    >
      {/* Clickable Image + Content */}
      <Link to={detailUrl} className="block">
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full aspect-[4/3] object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
          {/* Tier badge - only when property is verified */}
          {item.verified !== false && (
            <div className="absolute top-3 left-3 inline-flex items-center gap-1 bg-white/95 backdrop-blur text-[#001DF3] text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
              <BadgeCheck className="w-3 h-3" />
              Terverifikasi
            </div>
          )}
          {/* Heart */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setLiked(!liked);
            }}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
            aria-label="Simpan"
          >
            <Heart
              className={`w-4 h-4 ${
                liked ? "fill-red-500 text-red-500" : "text-slate-500"
              }`}
            />
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <Link to={detailUrl} className="block group-hover:text-[#001DF3] transition">
          <h3 className="text-base font-bold text-slate-900 leading-tight truncate">
            {item.title}
          </h3>
          <p className="mt-1 flex items-center gap-1 text-xs text-slate-500 truncate">
            <MapPin className="w-3 h-3 shrink-0" />
            <span className="truncate">{item.location}</span>
          </p>

          <div className="mt-3">
            <p className="text-lg md:text-xl font-extrabold text-[#001DF3] leading-none">
              {item.price}
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              {item.installment}
            </p>
          </div>

          {/* Specs */}
          <div className="mt-3 flex items-center gap-4 text-xs text-slate-600 border-t border-slate-100 pt-3">
            <span className="flex items-center gap-1">
              <BedDouble className="w-3.5 h-3.5 text-slate-400" />
              {item.specs.kt} KT
            </span>
            <span className="flex items-center gap-1">
              <Bath className="w-3.5 h-3.5 text-slate-400" />
              {item.specs.km} KM
            </span>
            <span className="flex items-center gap-1 ml-auto">
              <Ruler className="w-3.5 h-3.5 text-slate-400" />
              {item.specs.lb}
            </span>
          </div>
        </Link>

        {/* Actions */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button
            asChild
            className={`h-9 text-xs font-semibold rounded-full ${detailClasses}`}
          >
            <Link to={detailUrl} data-testid={`listing-detail-${item.id}`}>
              <FileText className="w-3.5 h-3.5 mr-1" /> Detail
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className={`h-9 text-xs font-semibold rounded-full ${whatsappClasses}`}
          >
            <a
              href={WA_URL(
                `Halo, saya tertarik dengan ${item.title} (${item.location}) seharga ${item.price}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`listing-wa-${item.id}`}
            >
              <MessageCircle className="w-3.5 h-3.5 mr-1" /> WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
