import React, { useState } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { LOGO_WHITE, navLinks, searchTabs } from "../mock";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Header() {
  const [tab, setTab] = useState("Beli");
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#0025F5] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-4 pb-8 md:pb-10 flex items-center gap-4 md:gap-8">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img src={LOGO_WHITE} alt="Huniaja" className="h-8 md:h-9 w-auto" />
        </a>

        {/* Search - center */}
        <div className="flex-1 max-w-3xl">
          <div className="flex items-center bg-white rounded-full pl-1 pr-1 py-1 shadow-sm">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-[#0025F5] text-sm font-bold px-4 py-2 rounded-full hover:bg-blue-50 transition">
                  {tab}
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {searchTabs.map((t) => (
                  <DropdownMenuItem key={t} onClick={() => setTab(t)}>
                    {t}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="w-px h-6 bg-slate-200 mx-1" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Cari " Rumah Subsidi Dibogor"'
              className="flex-1 min-w-0 bg-transparent outline-none px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400"
            />
            <button
              aria-label="Search"
              className="text-[#0025F5] hover:bg-blue-50 transition p-2 rounded-full"
            >
              <Search className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Nav links - desktop */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium shrink-0">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/90 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center shrink-0"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/15 bg-[#0025F5]">
          <nav className="px-4 py-3 flex flex-col">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="py-2.5 text-[15px] font-medium text-white/90 hover:text-white border-b border-white/10"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Button className="w-full bg-[#DAFF3D] hover:bg-[#c8ee1c] text-[#0025F5] rounded-full font-bold h-11 shadow-sm">
                Pasang Iklan Gratis
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-full bg-transparent border-white text-white hover:bg-white hover:text-[#0025F5] font-bold h-11"
              >
                Daftar / Masuk
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
