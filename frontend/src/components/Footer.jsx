import React from "react";
import { LOGO_WHITE, footerCols } from "../mock";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0025F5] text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={LOGO_WHITE} alt="Huniaja" className="h-8 mb-4" />
            <p className="text-xs text-white/80 leading-relaxed max-w-xs">
              Huniaja.com adalah platform properti digital dengan teknologi dan
              kecerdasan buatan (AI) yang menghadirkan agen, pembeli, dan
              pengembang dalam satu ekosistem.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold mb-4">{col.title}</h4>
              <ul className="space-y-2 text-sm text-white/80">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/15 mt-10 pt-5 text-center text-xs text-white/70">
          2025 @ PT. Huni Teknologi Indonesia
        </div>
      </div>
    </footer>
  );
}
