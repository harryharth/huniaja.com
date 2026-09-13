import React, { useState } from "react";
import { Search, ChevronDown, MapPin } from "lucide-react";
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

  return (
    <header className="bg-[#0025F5] text-white sticky top-0 z-50 shadow-md">
      {/* Top nav links */}
      <div className="max-w-7xl mx-auto px-6 pt-3">
        <nav className="flex items-center justify-center gap-8 text-[13px] font-medium">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/85 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-4">
        <a href="/" className="flex items-center shrink-0">
          <img src={LOGO_WHITE} alt="Huniaja" className="h-8 w-auto" />
        </a>

        {/* Search */}
        <div className="flex-1 max-w-3xl mx-auto">
          <div className="flex items-center bg-white rounded-full pl-1 pr-1 py-1 shadow-sm">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-slate-800 text-sm font-semibold px-4 py-2 rounded-full hover:bg-slate-100 transition">
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
            <MapPin className="w-4 h-4 text-slate-400 ml-2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Cari "Rumah Subsidi Depok"'
              className="flex-1 bg-transparent outline-none px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400"
            />
            <button className="bg-[#0025F5] hover:bg-[#001fd1] transition text-white p-2.5 rounded-full">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <Button className="bg-[#E5FF3D] hover:bg-[#d6f01f] text-slate-900 rounded-full font-semibold px-5 h-10">
            Pasang Iklan Gratis
          </Button>
          <Button
            variant="outline"
            className="rounded-full bg-transparent border-white/70 text-white hover:bg-white hover:text-[#0025F5] font-semibold px-5 h-10"
          >
            Daftar / Masuk
          </Button>
        </div>
      </div>
    </header>
  );
}
