import React, { useState } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
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
    <header className="bg-[#001DF3] text-white sticky top-0 z-50 border-b border-white/25">
      {/* Mobile top row: logo + hamburger */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 pt-4 pb-3 flex items-center justify-between">
        <Link to="/" className="flex items-center shrink-0">
          <img src={LOGO_WHITE} alt="Huniaja" className="h-7 w-auto" />
        </Link>
        <button
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile search row */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 pb-4">
        <div className="flex items-center bg-white rounded-full pl-1 pr-1 py-1 shadow-sm">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-[#001DF3] text-sm font-bold px-3 py-1.5 rounded-full hover:bg-blue-50 transition">
                {tab}
                <ChevronDown className="w-3.5 h-3.5" />
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
            placeholder="Cari properti..."
            className="flex-1 min-w-0 bg-transparent outline-none px-2 py-1.5 text-sm text-slate-800 placeholder:text-slate-400"
          />
          <button
            aria-label="Search"
            className="text-[#001DF3] hover:bg-blue-50 transition p-1.5 rounded-full"
          >
            <Search className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Desktop row (>= lg) */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-8 py-5 md:py-6 items-center gap-8">
        <Link to="/" className="flex items-center shrink-0">
          <img src={LOGO_WHITE} alt="Huniaja" className="h-9 w-auto" />
        </Link>

        <div className="flex-1 max-w-3xl">
          <div className="flex items-center bg-white rounded-full pl-1 pr-1 py-1 shadow-sm">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-[#001DF3] text-sm font-bold px-4 py-2 rounded-full hover:bg-blue-50 transition">
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
              className="text-[#001DF3] hover:bg-blue-50 transition p-2 rounded-full"
            >
              <Search className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <nav className="flex items-center gap-8 text-[15px] font-medium shrink-0">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="text-white/90 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/15 bg-[#001DF3]">
          <nav className="px-4 py-3 flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="py-2.5 text-[15px] font-medium text-white/90 hover:text-white border-b border-white/10"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Link
                to="/pasang-iklan"
                onClick={() => setMobileOpen(false)}
                className="w-full bg-[#00B512] hover:bg-[#009e0f] text-[#001DF3] rounded-full font-bold h-11 flex items-center justify-center shadow-sm transition"
              >
                Pasang Iklan Gratis
              </Link>
              <Link
                to="/kontak"
                onClick={() => setMobileOpen(false)}
                className="w-full rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-[#001DF3] font-bold h-11 flex items-center justify-center transition"
              >
                Daftar / Masuk
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
