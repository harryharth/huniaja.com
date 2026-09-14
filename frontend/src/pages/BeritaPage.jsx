import React, { useState } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  BookOpen,
  ChevronDown,
  Check,
  Newspaper,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { articles, articleCategories } from "../data/articles";

// Small color palette per category
const CAT_COLORS = {
  Semua: "#001DF3",
  Panduan: "#00B512",
  KPR: "#F59E0B",
  Legalitas: "#8B5CF6",
  Investasi: "#EC4899",
  Tren: "#0EA5E9",
  Tips: "#22C55E",
  Interior: "#F97316",
};

export default function BeritaPage() {
  const [active, setActive] = useState("Semua");
  const [query, setQuery] = useState("");

  const filtered = articles.filter(
    (a) =>
      (active === "Semua" || a.category === active) &&
      (a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#001DF3] text-white pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Berita &amp; Insight Properti
          </h1>
          <p className="mt-3 text-sm md:text-base text-white/90 max-w-2xl">
            {articles.length} artikel pilihan tim editorial Huniaja — cara beli
            rumah pertama, KPR, legalitas, hingga investasi properti.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar categories */}
          <aside className="md:col-span-1">
            <div className="md:sticky md:top-32 space-y-2.5">
              {articleCategories.map((c) => {
                const isActive = active === c;
                const color = CAT_COLORS[c] || "#001DF3";
                return (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    data-testid={`berita-cat-${c}`}
                    className={`w-full group flex items-center gap-3 rounded-2xl p-2 pr-3 shadow-sm hover:shadow-md transition-all ${
                      isActive
                        ? "bg-[#001DF3] text-white"
                        : "bg-white border border-slate-200 text-slate-800 hover:border-slate-300"
                    }`}
                  >
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${color}20` }}
                    >
                      <BookOpen
                        className="w-5 h-5"
                        style={{ color }}
                        strokeWidth={2.4}
                      />
                    </span>
                    <span className="flex-1 text-sm font-bold text-left">
                      {c}
                    </span>
                    {isActive ? (
                      <span className="w-7 h-7 rounded-full bg-[#00B512] flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </span>
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                );
              })}

              <div className="hidden md:block mt-6 bg-slate-50 rounded-2xl p-4">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
                  Total Artikel
                </p>
                <p className="text-2xl font-black text-slate-900">
                  {articles.length}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Update rutin dari tim editorial.
                </p>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="md:col-span-3 space-y-4">
            {/* Search bar */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-[#001DF3]/12">
                  <Newspaper className="w-5 h-5 text-[#001DF3]" />
                </div>
                <h2 className="text-lg md:text-xl font-black text-slate-900">
                  {active === "Semua" ? "Semua Artikel" : active}
                </h2>
                <span className="ml-auto text-xs text-slate-500 font-semibold">
                  {filtered.length} artikel
                </span>
              </div>
              <div className="mt-4 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cari artikel..."
                  data-testid="berita-search-input"
                  className="w-full h-11 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#001DF3] focus:ring-2 focus:ring-[#001DF3]/15 outline-none pl-11 pr-4 text-sm transition"
                />
              </div>
            </div>

            {filtered.length === 0 && (
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 text-center">
                <p className="text-slate-500 text-sm">
                  Tidak ada artikel yang cocok dengan pencarianmu.
                </p>
              </div>
            )}

            {filtered.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {filtered.map((a) => (
                  <Link
                    key={a.id}
                    to={`/berita/${a.slug}`}
                    data-testid={`berita-card-${a.id}`}
                    className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 overflow-hidden group transition-all flex flex-col"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={a.image}
                        alt={a.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <span
                        className="inline-block text-white text-[10px] font-bold rounded-full px-2 py-1 tracking-wider self-start"
                        style={{
                          backgroundColor: CAT_COLORS[a.category] || "#001DF3",
                        }}
                      >
                        {a.category}
                      </span>
                      <h3 className="font-bold text-slate-900 mt-3 leading-snug line-clamp-2">
                        {a.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2 flex-1">
                        {a.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-3 pt-3 border-t border-slate-100">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {a.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {a.read}
                        </span>
                        <span className="ml-auto text-[#001DF3] font-bold inline-flex items-center gap-1">
                          Baca <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* CTA */}
            <div
              className="rounded-3xl p-6 md:p-8 text-white mt-6"
              style={{
                background: "linear-gradient(135deg, #000066 0%, #001DF3 100%)",
              }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-black">
                    Butuh insight khusus untuk keputusanmu?
                  </h3>
                  <p className="text-sm text-white/80 mt-1">
                    Tim editorial Huniaja siap bantu carikan artikel dan
                    referensi sesuai kondisimu — chat kami!
                  </p>
                </div>
                <Link
                  to="/kontak"
                  className="bg-white text-[#001DF3] hover:bg-slate-100 font-bold rounded-full px-6 py-3 text-sm shadow-lg inline-flex items-center justify-center transition"
                  data-testid="berita-cta-btn"
                >
                  Chat Tim Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
