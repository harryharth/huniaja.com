import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  Tag,
  MessageCircle,
  BookOpen,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getArticleBySlug, getRelatedArticles } from "../data/articles";
import { WA_URL } from "../components/ChatWidget";

export default function BeritaDetailPage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/berita" replace />;
  }

  const related = getRelatedArticles(slug, article.category, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#001DF3] to-[#000066] text-white pt-10 md:pt-14 pb-24 md:pb-32 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#00B512]/15 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 md:px-6">
          <Link
            to="/berita"
            data-testid="berita-detail-back"
            className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white transition"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Berita
          </Link>
          <span className="inline-block bg-white/15 backdrop-blur text-white text-[11px] font-bold rounded-full px-3 py-1 tracking-widest mt-6">
            {article.category}
          </span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight mt-4">
            {article.title}
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/85 max-w-3xl leading-relaxed">
            {article.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs md:text-sm text-white/80">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {article.read} baca
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> {article.author?.name}
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white pb-14 md:pb-20 -mt-16 md:-mt-20 relative">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="bg-white rounded-[32px] shadow-2xl border border-slate-100 overflow-hidden">
            {/* Hero image */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-56 md:h-80 object-cover"
            />

            {/* Author row */}
            <div className="px-6 md:px-10 pt-6 pb-2 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#001DF3] text-white font-black flex items-center justify-center text-lg shadow-sm">
                  {article.author?.initial}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {article.author?.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {article.author?.role}
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: article.title,
                      text: article.excerpt,
                      url: window.location.href,
                    }).catch(() => {});
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
                data-testid="berita-share-btn"
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition"
                aria-label="Bagikan"
              >
                <Share2 className="w-4 h-4 text-slate-600" />
              </button>
            </div>

            {/* Content blocks */}
            <article className="px-6 md:px-10 py-8 md:py-10 space-y-5">
              {article.content.map((block, i) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={i}
                      className="text-xl md:text-2xl font-black text-slate-900 mt-8 first:mt-0 leading-tight"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "paragraph") {
                  return (
                    <p
                      key={i}
                      className="text-[15px] md:text-base text-slate-700 leading-[1.8]"
                    >
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "list") {
                  return (
                    <ul key={i} className="space-y-2 pl-1">
                      {block.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-[15px] md:text-base text-slate-700 leading-relaxed flex gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#001DF3] mt-2.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={i}
                      className="border-l-4 border-[#00B512] bg-gradient-to-r from-green-50/50 to-transparent px-6 py-4 my-2 rounded-r-2xl"
                    >
                      <p className="text-base md:text-lg text-slate-800 italic font-medium leading-relaxed">
                        "{block.text}"
                      </p>
                    </blockquote>
                  );
                }
                if (block.type === "cta") {
                  return (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-[#001DF3] to-[#000066] rounded-3xl p-6 md:p-8 text-white mt-8"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-black text-lg">
                            Butuh Konsultasi Langsung?
                          </h4>
                          <p className="text-sm text-white/85 mt-1.5 leading-relaxed">
                            {block.text}
                          </p>
                          <a
                            href={WA_URL(
                              `Halo, saya baru baca artikel "${article.title}" di Huniaja dan ingin konsultasi.`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="berita-detail-wa-btn"
                            className="inline-flex items-center gap-2 mt-4 bg-[#00B512] hover:bg-[#009e0f] text-white font-bold rounded-full px-5 py-2.5 text-sm shadow-lg transition"
                          >
                            <MessageCircle className="w-4 h-4" /> Chat via WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </article>

            {/* Tags */}
            {article.tags && (
              <div className="px-6 md:px-10 pb-8">
                <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100">
                  <Tag className="w-4 h-4 text-slate-400" />
                  {article.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-slate-100 text-slate-600 rounded-full px-3 py-1"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-slate-50 py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="inline-block bg-white text-[#001DF3] text-[11px] font-bold rounded-full px-3 py-1 tracking-widest border border-blue-100">
                  BACA JUGA
                </span>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mt-3">
                  Artikel Terkait
                </h3>
              </div>
              <Link
                to="/berita"
                className="hidden md:inline-flex items-center gap-1 text-sm font-bold text-[#001DF3] hover:underline"
              >
                Lihat Semua <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((a) => (
                <Link
                  key={a.id}
                  to={`/berita/${a.slug}`}
                  data-testid={`berita-related-${a.id}`}
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
                    <span className="inline-block bg-blue-50 text-[#001DF3] text-[10px] font-bold rounded-full px-2 py-1 tracking-wider self-start">
                      {a.category}
                    </span>
                    <h4 className="font-bold text-slate-900 mt-3 leading-snug line-clamp-2 flex-1">
                      {a.title}
                    </h4>
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-3 pt-3 border-t border-slate-100">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {a.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {a.read}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
