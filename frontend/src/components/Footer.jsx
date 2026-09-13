import React from "react";
import { LOGO_WHITE } from "../mock";
import { Facebook, Instagram, Youtube } from "lucide-react";

const footerCols = [
  {
    links: ["Beli", "Jual", "Konsultasi", "KPR"],
  },
  {
    links: ["Karir", "Tentang Kami", "Kerjasama", "Kontak"],
  },
  {
    links: ["Berita", "Pusat Bantuan", "S&K", "Kerjasama"],
  },
];

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V9.11a8.16 8.16 0 004.77 1.52V7.19a4.85 4.85 0 01-1.84-.5z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0025F5] text-white pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <img src={LOGO_WHITE} alt="Huniaja" className="h-8 mb-5" />
            <p className="text-sm text-white/85 leading-relaxed max-w-xs">
              Huniaja.com adalah platform properti digital berbasis teknologi
              dan kecerdasan buatan (AI) yang menyatukan agen, pembeli, dan
              pengembang dalam satu ekosistem.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Youtube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {footerCols.map((col, i) => (
            <div key={i}>
              <ul className="space-y-3 text-[15px] text-white/90">
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

        <div className="mt-12 text-xs text-white/70">
          2025 @ PT Woodoo Kreatif Digital
        </div>
      </div>
    </footer>
  );
}
