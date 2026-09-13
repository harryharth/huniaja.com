import React, { useState } from "react";
import {
  Heart,
  Ruler,
  Square,
  BedDouble,
  Bath,
  Car,
  FileText,
  Download,
  MessageCircle,
} from "lucide-react";
import { Button } from "./ui/button";

export default function ListingCard({ item, variant = "default" }) {
  const [liked, setLiked] = useState(
    item.liked || variant === "featured-whatsapp" || variant === "featured-download"
  );

  const downloadClasses =
    variant === "featured-download"
      ? "bg-[#0025F5] hover:bg-[#001fd1] text-white"
      : "bg-slate-100 hover:bg-slate-200 text-slate-800";

  const whatsappClasses =
    variant === "featured-whatsapp"
      ? "bg-[#12B815] hover:bg-[#0fa112] text-white border-transparent"
      : "border-slate-200 hover:bg-slate-50 text-slate-800";

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative p-2">
        <img
          src={item.image}
          alt={item.title}
          className="w-full aspect-square object-cover rounded-xl group-hover:scale-[1.01] transition-transform duration-500"
        />
      </div>
      <div className="px-3 pb-3">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs text-slate-500">{item.title}</p>
            <p className="text-xl font-extrabold text-slate-900 leading-tight mt-0.5">
              {item.price}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              {item.installment}
            </p>
          </div>
          <button
            onClick={() => setLiked(!liked)}
            className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0"
          >
            <Heart
              className={`w-4 h-4 ${
                liked ? "fill-[#0025F5] text-[#0025F5]" : "text-slate-400"
              }`}
            />
          </button>
        </div>

        <div className="mt-2 inline-flex items-center gap-1.5 text-[#0025F5] text-xs font-semibold">
          <span className="w-6 h-6 rounded-full bg-[#0025F5] text-white flex items-center justify-center text-[10px] font-bold">
            H
          </span>
          {item.tier}
        </div>

        <div className="grid grid-cols-6 gap-1 mt-2 text-[10px] text-slate-600">
          <Spec icon={Square} label={item.specs.lb} />
          <Spec icon={Ruler} label={item.specs.lt} />
          <Spec icon={BedDouble} label={item.specs.kt} />
          <Spec icon={Bath} label={item.specs.km} />
          <Spec icon={Car} label={item.specs.cp} />
          <Spec icon={FileText} label={item.specs.sert} />
        </div>

        <div className="mt-3 space-y-1.5">
          <Button
            className={`w-full h-9 text-xs font-semibold rounded-lg ${downloadClasses}`}
          >
            <FileText className="w-3.5 h-3.5 mr-1" /> Detail Project
          </Button>
          <Button
            variant="outline"
            className={`w-full h-9 text-xs font-semibold rounded-lg ${whatsappClasses}`}
          >
            <MessageCircle className="w-3.5 h-3.5 mr-1" /> Ask Whatsapp
          </Button>
        </div>
      </div>
    </div>
  );
}

function Spec({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <Icon className="w-3 h-3 text-slate-400" />
      <span>{label}</span>
    </div>
  );
}
