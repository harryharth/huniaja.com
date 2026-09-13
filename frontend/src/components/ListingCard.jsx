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

export default function ListingCard({ item, highlighted = false }) {
  const [liked, setLiked] = useState(item.liked || false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-40 object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm"
        >
          <Heart
            className={`w-4 h-4 ${
              liked ? "fill-red-500 text-red-500" : "text-slate-500"
            }`}
          />
        </button>
      </div>
      <div className="p-3">
        <p className="text-xs text-slate-500">{item.title}</p>
        <p className="text-lg font-extrabold text-slate-900 leading-tight mt-0.5">
          {item.price}
        </p>
        <p className="text-[11px] text-slate-500 mt-0.5">{item.installment}</p>

        <div className="mt-2 inline-flex items-center gap-1.5 bg-blue-50 text-[#0025F5] text-[11px] font-semibold px-2 py-1 rounded-full">
          <span className="w-4 h-4 rounded-full bg-[#0025F5] text-white flex items-center justify-center text-[8px] font-bold">
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
            className={`w-full h-8 text-xs font-semibold rounded-lg ${
              highlighted
                ? "bg-[#E5FF3D] hover:bg-[#d6f01f] text-slate-900"
                : "bg-slate-100 hover:bg-slate-200 text-slate-800"
            }`}
          >
            <Download className="w-3 h-3 mr-1" /> Download E-Brosur
          </Button>
          <Button
            variant="outline"
            className="w-full h-8 text-xs font-semibold rounded-lg border-slate-200 hover:bg-slate-50"
          >
            <MessageCircle className="w-3 h-3 mr-1" /> Ask via Whatsapp
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
