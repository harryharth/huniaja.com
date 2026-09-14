import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LOGO_WHITE } from "../mock";
import { Instagram, Youtube } from "lucide-react";
import { useT } from "../lib/i18n";

// Footer nav link with hover pill (navy) + active bold state.
function FooterLink({ href, label, current }) {
  const isActive = current === href;
  return (
    <Link
      to={href}
      className={`inline-flex items-center rounded-full px-3 py-1.5 -mx-3 transition-colors hover:bg-[#000066] hover:text-white ${
        isActive ? "font-black text-white" : "font-medium text-white/95"
      }`}
    >
      {label}
    </Link>
  );
}

const footerCols = [
  [
    { label: "Beli", href: "/cari-properti" },
    { label: "Konsultasi", href: "/konsultasi" },
    { label: "KPR", href: "/kpr" },
    { label: "Kerjasama", href: "/kerjasama" },
  ],
  [
    { label: "Karir", href: "/karir" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Kontak", href: "/kontak" },
    { label: "Pasang Iklan", href: "/pasang-iklan" },
  ],
  [
    { label: "Berita", href: "/berita" },
    { label: "Pusat Bantuan", href: "/pusat-bantuan" },
    { label: "S&K", href: "/syarat-ketentuan" },
    { label: "FAQ", href: "/faq" },
  ],
];

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43V9.11a8.16 8.16 0 004.77 1.52V7.19a4.85 4.85 0 01-1.84-.5z" />
    </svg>
  );
}

export default function Footer() {
  // Flat list of all footer links (used for the 2-column mobile layout)
  const flatLinks = footerCols.flat();
  const t = useT();
  const { pathname } = useLocation();
  return (
    <footer className="bg-[#001DF3] text-white pt-14 md:pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Mobile-only: links stacked in 2 columns, ABOVE the logo/socials */}
        <div className="md:hidden mb-10">
          <ul className="grid grid-cols-2 gap-y-2 gap-x-2 text-[15px]">
            {flatLinks.map((l, idx) => (
              <li key={idx}>
                <FooterLink href={l.href} label={t(l.label)} current={pathname} />
              </li>
            ))}
          </ul>
        </div>

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
                href="https://www.instagram.com/huniajadotcom/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                data-testid="social-instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@Huniaja"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                data-testid="social-youtube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@huniajacom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                data-testid="social-tiktok"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-white/70 mt-6">
              2026 @ PT. Harry Harth Corporation
            </p>
          </div>

          {/* Right columns: link groups — hidden on mobile (rendered above in 2-col grid) */}
          <div className="hidden md:grid md:col-span-7 md:col-start-6 grid-cols-3 gap-8 md:gap-10 md:pt-2 md:pl-8">
            {footerCols.map((col, i) => (
            <ul key={i} className="space-y-2 text-[15px]">
              {col.map((l, idx) => (
                <li key={idx}>
                  <FooterLink href={l.href} label={t(l.label)} current={pathname} />
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
