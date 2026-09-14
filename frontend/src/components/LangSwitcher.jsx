import React from "react";
import { Check, Globe } from "lucide-react";
import { useLang, LANGS } from "../lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

/**
 * Language switcher pill. Two visual variants:
 *  - variant="ghost" (default, for use on the dark header): white/10 pill on colored bg
 *  - variant="light" for use on white surfaces (e.g. inside the mobile menu drawer
 *    when that drawer sits on a light background)
 */
export default function LangSwitcher({ variant = "ghost" }) {
  const { lang, setLang } = useLang();
  const current = LANGS[lang];

  const triggerCls =
    variant === "light"
      ? "flex items-center gap-1.5 rounded-full pl-2.5 pr-3 h-9 bg-white border border-slate-200 hover:border-[#001DF3] text-slate-700 text-sm font-bold transition"
      : "flex items-center gap-1.5 rounded-full pl-2.5 pr-3 h-9 bg-white/10 hover:bg-white/20 text-sm font-bold transition";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          data-testid="lang-switcher"
          aria-label="Ganti bahasa"
          className={triggerCls}
        >
          <Globe className="w-4 h-4 shrink-0" />
          <span className="hidden sm:inline text-xs tracking-wide">{current.short}</span>
          <span className="sm:hidden text-xs">{current.short}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44 rounded-2xl">
        {Object.entries(LANGS).map(([code, meta]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLang(code)}
            data-testid={`lang-option-${code}`}
            className="flex items-center gap-2 cursor-pointer py-2"
          >
            <span className="text-base leading-none">{meta.flag}</span>
            <span className="flex-1 text-sm font-semibold">{meta.label}</span>
            {lang === code && <Check className="w-4 h-4 text-[#00B512]" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
