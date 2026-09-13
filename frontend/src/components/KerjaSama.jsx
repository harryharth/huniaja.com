import React from "react";
import { Button } from "./ui/button";

export default function KerjaSama() {
  return (
    <section className="bg-[#0025F5] text-white py-14 mt-4">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Kerja Sama dengan Huniaja.com
          </h2>
          <p className="text-sm md:text-base text-white/85 leading-relaxed">
            Huniaja.com terbuka untuk berbagai bentuk kerja sama, baik paid
            partnership, co-branding, penyediaan atau pembiayaan properti, dan
            lainnya.
          </p>
        </div>
        <Button className="bg-[#E5FF3D] hover:bg-[#d6f01f] text-slate-900 rounded-full font-semibold px-6 h-11">
          Hubungi untuk Kolaborasi
        </Button>
      </div>
    </section>
  );
}
