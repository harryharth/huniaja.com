import React, { useState } from "react";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const articles = [
  {
    id: 1,
    title: "5 Tips Membeli Rumah Pertama untuk Milenial di Tahun 2026",
    excerpt:
      "Panduan lengkap dari menabung DP, memilih lokasi, hingga negosiasi harga agar rumah pertama Anda sesuai kebutuhan dan budget.",
    category: "Tips Properti",
    date: "12 Jan 2026",
    read: "5 min",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1000&q=80",
  },
  {
    id: 2,
    title: "KPR Syariah vs KPR Konvensional: Mana yang Lebih Menguntungkan?",
    excerpt:
      "Perbandingan lengkap antara KPR Syariah dan Konvensional dari sisi margin, akad, dan risiko yang perlu Anda pahami.",
    category: "KPR",
    date: "09 Jan 2026",
    read: "7 min",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=80",
  },
  {
    id: 3,
    title: "Tren Properti 2026: Kawasan Suburban Semakin Diminati",
    excerpt:
      "Data pencarian properti di Huniaja menunjukkan pergeseran minat ke kawasan pinggir kota. Apa penyebabnya?",
    category: "Insight",
    date: "05 Jan 2026",
    read: "4 min",
    image:
      "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?w=1000&q=80",
  },
  {
    id: 4,
    title: "Cara Menghitung Nilai Properti Anda Sebelum Dijual",
    excerpt:
      "Kombinasikan analisis komparatif, kondisi bangunan, dan potensi pasar untuk menetapkan harga yang realistis.",
    category: "Panduan",
    date: "28 Des 2025",
    read: "6 min",
    image:
      "https://images.unsplash.com/photo-1558661091-5cc1b64d0dc5?w=1000&q=80",
  },
  {
    id: 5,
    title: "Legalitas Rumah Subsidi: Yang Perlu Anda Tahu",
    excerpt:
      "Panduan legal singkat: SHM, SHGB, serta hak dan kewajiban Anda saat memiliki rumah subsidi pemerintah.",
    category: "Legal",
    date: "20 Des 2025",
    read: "5 min",
    image:
      "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?w=1000&q=80",
  },
  {
    id: 6,
    title: "7 Kesalahan Pasang Iklan Properti yang Bikin Sepi Peminat",
    excerpt:
      "Foto buram, deskripsi minim, harga tidak wajar - hindari kesalahan berikut agar iklan Anda cepat laku.",
    category: "Tips Properti",
    date: "15 Des 2025",
    read: "4 min",
    image:
      "https://images.unsplash.com/photo-1706855203772-c249b75fe016?w=1000&q=80",
  },
];

const categories = [
  "Semua",
  "Tips Properti",
  "KPR",
  "Insight",
  "Panduan",
  "Legal",
];

export default function BeritaPage() {
  const [active, setActive] = useState("Semua");
  const [query, setQuery] = useState("");

  const filtered = articles.filter(
    (a) =>
      (active === "Semua" || a.category === active) &&
      (a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase()))
  );

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#0025F5] text-white pt-12 md:pt-16 pb-14 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Berita & Insight Properti
          </h1>
          <p className="mt-3 text-sm md:text-base text-white/85 max-w-2xl">
            Tips beli, jual, dan investasi properti langsung dari tim ahli
            Huniaja.
          </p>
          <div className="mt-6 flex items-center bg-white rounded-full pl-4 pr-1 py-1 shadow-lg max-w-xl">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari artikel..."
              className="flex-1 min-w-0 bg-transparent outline-none px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400"
            />
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-white pt-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`shrink-0 text-xs md:text-sm font-semibold px-4 py-2 rounded-full border transition ${
                  active === c
                    ? "bg-[#0025F5] text-white border-[#0025F5]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured + list */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {featured && (
            <a
              href="#"
              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-slate-50 rounded-[32px] p-4 md:p-6 hover:shadow-md transition-shadow group"
            >
              <div className="rounded-[24px] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-56 md:h-72 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div>
                <span className="inline-block bg-[#0025F5] text-white text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
                  {featured.category}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-3 leading-snug">
                  {featured.title}
                </h2>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mt-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {featured.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {featured.read} baca
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[#0025F5] font-bold text-sm mt-4">
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          )}

          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-10">
              {rest.map((a) => (
                <a
                  key={a.id}
                  href="#"
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 overflow-hidden group transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block bg-blue-50 text-[#0025F5] text-[10px] font-bold rounded-full px-2 py-1 tracking-wider">
                      {a.category}
                    </span>
                    <h3 className="font-bold text-slate-900 mt-3 leading-snug line-clamp-2">
                      {a.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                      {a.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {a.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {a.read}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-slate-500 py-16">
              Tidak ada artikel yang cocok dengan pencarian Anda.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
