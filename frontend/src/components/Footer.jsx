import React from "react";
import { LOGO_WHITE } from "../mock";
import { Facebook, Instagram, Youtube } from "lucide-react";

const footerCols = [
  ["Beli", "Jual", "Konsultasi", "KPR"],
  ["Karir", "Tentang Kami", "Kerjasama", "Kontak"],
  ["Berita", "Pusat Bantuan", "S&K", "Kerjasama"],
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
    <footer className="bg-[#0025F5] text-white pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Left column: logo + description + socials + copyright */}
          <div className="md:col-span-4 flex flex-col">
            <img
              src={LOGO_WHITE}
              alt="Huniaja"
              className="w-32 md:w-36 h-auto mb-6"
            />
            <p className="text-sm text-white/85 leading-relaxed max-w-xs">
              Huniaja.com adalah platform properti digital
              berbasis teknologi dan kecerdasan buatan (AI)
              yang menyatukan agen, pembeli, dan pengembang
              dalam satu ekosistem.
            </p>

            <div className="flex gap-3 mt-8">
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

            <p className="text-xs text-white/70 mt-6">
              2025 @ PT Woodoo Kreatif Digital
            </p>
          </div>

          {/* Right columns: link groups */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-6 md:pt-2">
            {footerCols.map((col, i) => (
              <ul key={i} className="space-y-6 text-[15px] text-white/95">
                {col.map((l, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-white/70 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
