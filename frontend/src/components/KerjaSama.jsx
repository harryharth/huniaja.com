import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function KerjaSama() {
  return (
    <section className="bg-[#00B512] text-white py-10 md:py-14 mt-4">
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-6">
        <div className="max-w-2xl">
          <h2 className="text-xl md:text-3xl font-extrabold mb-2 md:mb-3">
            Kerja Sama dengan Huniaja.com
          </h2>
          <p className="text-sm md:text-base text-white/95 leading-relaxed">
            Huniaja.com terbuka untuk berbagai bentuk kerja sama, baik paid
            partnership, co-branding, Marketing dan lainnya.
          </p>
        </div>
        <Link
          to="/kerjasama"
          className="bg-[#0025F5] hover:bg-[#001fd1] text-white rounded-full font-semibold px-6 md:px-8 h-11 md:h-12 text-sm md:text-base shadow-lg w-full md:w-auto flex items-center justify-center transition"
        >
          Hubungi untuk Kolaborasi
        </Link>
      </div>
    </section>
  );
}
