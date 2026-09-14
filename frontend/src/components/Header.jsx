import React, { useState } from "react";
import { Search, ChevronDown, Menu, X, User, LogOut, Heart, ClipboardList } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { LOGO_WHITE, navLinks, searchTabs } from "../mock";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth } from "../context/AuthContext";
import { useT } from "../lib/i18n";
import LangSwitcher from "./LangSwitcher";

export default function Header() {
  const [tab, setTab] = useState("Beli");
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const t = useT();

  const submitSearch = (e) => {
    if (e) e.preventDefault();
    const q = query.trim();
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (tab && tab !== "Beli") params.set("tab", tab.toLowerCase());
    const qs = params.toString();
    navigate(`/cari-properti${qs ? `?${qs}` : ""}`);
    setMobileOpen(false);
  };

  return (
    <header className="bg-[#001DF3] text-white sticky top-0 z-50 border-b border-white/25">
      {/* Mobile top row: logo + search icon + hamburger */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 pt-4 pb-3 flex items-center justify-between">
        <Link to="/" className="flex items-center shrink-0">
          <img src={LOGO_WHITE} alt="Huniaja" className="h-7 w-auto" />
        </Link>
        <div className="flex items-center gap-2">
          <button
            className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
              mobileSearchOpen ? "bg-white text-[#001DF3]" : "bg-white/10 hover:bg-white/20"
            }`}
            onClick={() => {
              setMobileSearchOpen((v) => !v);
              if (mobileOpen) setMobileOpen(false);
            }}
            aria-label="Cari"
            data-testid="header-mobile-search-toggle"
          >
            {mobileSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
          </button>
          <button
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            onClick={() => {
              setMobileOpen((v) => !v);
              if (mobileSearchOpen) setMobileSearchOpen(false);
            }}
            aria-label="menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile search row — hidden by default, expands when search icon clicked */}
      {mobileSearchOpen && (
        <div className="lg:hidden max-w-7xl mx-auto px-4 pb-4">
          <form
            onSubmit={(e) => {
              submitSearch(e);
              setMobileSearchOpen(false);
            }}
            className="flex items-center bg-white rounded-full pl-1 pr-1 py-1 shadow-sm"
            data-testid="header-search-form-mobile"
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button type="button" className="flex items-center gap-1 text-[#001DF3] text-sm font-bold px-3 py-1.5 rounded-full hover:bg-blue-50 transition">
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
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("Cari properti...")}
              data-testid="header-search-input-mobile"
              className="flex-1 min-w-0 bg-transparent outline-none px-2 py-1.5 text-sm text-slate-800 placeholder:text-slate-400"
            />
            <button
              type="submit"
              aria-label="Search"
              data-testid="header-search-submit-mobile"
              className="text-[#001DF3] hover:bg-blue-50 transition p-1.5 rounded-full"
            >
              <Search className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </form>
        </div>
      )}

      {/* Desktop row (>= lg) */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-8 py-5 md:py-6 items-center gap-8">
        <Link to="/" className="flex items-center shrink-0">
          <img src={LOGO_WHITE} alt="Huniaja" className="h-9 w-auto" />
        </Link>

        <div className="flex-1 max-w-3xl">
          <form onSubmit={submitSearch} className="flex items-center bg-white rounded-full pl-1 pr-1 py-1 shadow-sm" data-testid="header-search-form">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button type="button" className="flex items-center gap-1 text-[#001DF3] text-sm font-bold px-4 py-2 rounded-full hover:bg-blue-50 transition">
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
              placeholder={t("Cari properti...")}
              data-testid="header-search-input"
              className="flex-1 min-w-0 bg-transparent outline-none px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400"
            />
            <button
              type="submit"
              aria-label="Search"
              data-testid="header-search-submit"
              className="text-[#001DF3] hover:bg-blue-50 transition p-2 rounded-full"
            >
              <Search className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </form>
        </div>

        <nav className="flex items-center gap-6 text-[15px] font-medium shrink-0">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="text-white/90 hover:text-white transition-colors"
            >
              {t(l.label)}
            </Link>
          ))}
          <LangSwitcher />
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  data-testid="header-account-btn"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-full pl-1 pr-3 h-10 transition"
                >
                  {user.picture ? (
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="w-8 h-8 rounded-full bg-white text-[#001DF3] flex items-center justify-center font-black text-sm">
                      {(user.name || user.email || "?").charAt(0).toUpperCase()}
                    </span>
                  )}
                  <span className="text-sm font-bold max-w-[110px] truncate">
                    {(user.name || user.email).split(" ")[0]}
                  </span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-2xl">
                <DropdownMenuItem asChild>
                  <Link to="/akun" data-testid="menu-akun-profil" className="flex items-center gap-2 cursor-pointer">
                    <User className="w-4 h-4" /> {t("Akunku")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/akun" className="flex items-center gap-2 cursor-pointer">
                    <Heart className="w-4 h-4" /> {t("Favorit")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/akun" className="flex items-center gap-2 cursor-pointer">
                    <ClipboardList className="w-4 h-4" /> {t("Riwayat Pengajuan")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={async () => {
                    await logout();
                    navigate("/");
                  }}
                  data-testid="header-logout-btn"
                  className="flex items-center gap-2 cursor-pointer text-slate-700"
                >
                  <LogOut className="w-4 h-4" /> {t("Keluar")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              to="/login"
              data-testid="header-login-btn"
              className="bg-[#00B512] hover:bg-[#009e0f] text-white font-bold rounded-full px-5 h-10 flex items-center shadow-sm transition"
            >
              {t("Masuk/Daftar")}
            </Link>
          )}
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
                {t(l.label)}
              </Link>
            ))}
            <div className="pt-3 flex items-center justify-between gap-2">
              <span className="text-xs text-white/70 font-semibold uppercase tracking-widest">
                {t("Bahasa")}
              </span>
              <LangSwitcher />
            </div>
            <div className="pt-3 flex flex-col gap-2">
              {user ? (
                <>
                  <Link
                    to="/akun"
                    onClick={() => setMobileOpen(false)}
                    className="w-full bg-white text-[#001DF3] rounded-full font-bold h-11 flex items-center justify-center gap-2 shadow-sm transition"
                  >
                    <User className="w-4 h-4" /> {t("Akunku")}
                  </Link>
                  <button
                    onClick={async () => {
                      setMobileOpen(false);
                      await logout();
                      navigate("/");
                    }}
                    className="w-full bg-white/10 text-white rounded-full font-bold h-11 flex items-center justify-center gap-2 transition"
                  >
                    <LogOut className="w-4 h-4" /> {t("Keluar")}
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="w-full bg-[#00B512] hover:bg-[#009e0f] text-white rounded-full font-bold h-11 flex items-center justify-center shadow-sm transition"
                >
                  {t("Masuk / Daftar")}
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
