import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Check,
  Star,
  MessageCircle,
  Phone,
  MapPin,
  ShieldCheck,
  Sparkles,
  Clock,
  ArrowRight,
  Quote,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { WA_URL, WA_DISPLAY } from "../../components/ChatWidget";

/**
 * Reusable storytelling page for Huniaja add-on services.
 * Pass a `config` object with copy, images, palette + steps.
 */
export default function ServicePageTemplate({ config }) {
  const {
    label,
    tag,
    heroTitle,
    heroSub,
    heroImg,
    icon,
    accent, // hex
    accentSoft, // hex or tw class background e.g. "bg-green-50"
    story,
    steps, // [{title, desc}]
    includes, // [string]
    testimonials, // [{name, place, quote, rating}]
    faqs, // [{q, a}]
    waMessage,
  } = config;

  const [openFaq, setOpenFaq] = useState(0);
  const wa = WA_URL(waMessage);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* ================= HERO ================= */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: accentSoft }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-14 pb-12 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full text-white"
              style={{ backgroundColor: accent }}
              data-testid="service-tag"
            >
              <Sparkles className="w-3.5 h-3.5" /> {tag}
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.05]">
              {heroTitle}
            </h1>
            <p className="mt-4 text-base md:text-lg text-slate-700 leading-relaxed max-w-xl">
              {heroSub}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={wa} target="_blank" rel="noreferrer" data-testid="hero-wa-btn">
                <Button
                  className="rounded-full px-6 h-12 text-sm md:text-base font-bold text-white"
                  style={{ backgroundColor: "#00B512" }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" /> Pesan via WhatsApp
                </Button>
              </a>
              <a href="#cara-kerja">
                <Button
                  variant="outline"
                  className="rounded-full px-6 h-12 text-sm md:text-base font-bold border-2"
                  style={{ borderColor: accent, color: accent }}
                >
                  Lihat Cara Kerjanya <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 flex-wrap text-xs md:text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4" style={{ color: accent }} />
                Jabodetabek &amp; Bogor Raya
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" style={{ color: accent }} />
                Mitra terverifikasi
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" style={{ color: accent }} />
                Respon &lt; 15 menit
              </span>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-[36px] blur-2xl opacity-30"
              style={{ backgroundColor: accent }}
              aria-hidden
            />
            <div className="relative rounded-[28px] overflow-hidden shadow-xl border-4 border-white">
              <img
                src={heroImg}
                alt={label}
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-slate-100">
              <img src={icon} alt="" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                  Layanan Huniaja
                </div>
                <div className="text-sm md:text-base font-bold text-slate-900 leading-tight">
                  {label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Cerita Kami
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-black text-slate-900">
              {story.heading}
            </h2>
          </div>
          <p className="mt-6 text-base md:text-lg text-slate-700 leading-relaxed text-center">
            {story.body}
          </p>

          <div
            className="mt-10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-4 items-start"
            style={{ backgroundColor: accentSoft }}
          >
            <Quote className="w-10 h-10 shrink-0" style={{ color: accent }} />
            <div>
              <p className="text-lg md:text-xl font-semibold text-slate-900 leading-snug">
                “{story.pullQuote}”
              </p>
              <p className="mt-2 text-sm text-slate-600">— Tim Huniaja</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CARA KERJA ================= */}
      <section id="cara-kerja" className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Cara Kerja
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-black text-slate-900">
              4 Langkah, Beres Tanpa Ribet
            </h2>
            <p className="mt-3 text-slate-600">
              Semua diatur oleh tim Huniaja — kamu tinggal duduk santai.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {steps.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition"
                data-testid={`step-${i + 1}`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-black text-lg"
                  style={{ backgroundColor: accent }}
                >
                  {i + 1}
                </div>
                <h3 className="mt-4 text-base md:text-lg font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= YANG KAMU DAPAT ================= */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Yang Kamu Dapat
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-black text-slate-900">
              Fasilitas &amp; Standar Layanan
            </h2>
            <p className="mt-3 text-slate-600">
              Kami tidak menjual jasa — kami menjual ketenangan. Setiap kunjungan
              mengikuti SOP yang sama, di mana pun rumah kamu berada.
            </p>
            <ul className="mt-6 space-y-3">
              {includes.map((it, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: accent }}
                  >
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-sm md:text-base text-slate-800 leading-relaxed">
                    {it}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-3xl p-8 md:p-10 relative overflow-hidden"
            style={{ backgroundColor: accentSoft }}
          >
            <img
              src={icon}
              alt=""
              className="w-24 h-24 md:w-28 md:h-28 object-contain mb-4"
            />
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">
              Ingin penawaran yang pas untuk rumahmu?
            </h3>
            <p className="mt-3 text-slate-700">
              Chat tim kami — kami akan bantu kamu mendapat harga terbaik sesuai
              kebutuhan, ukuran rumah, dan jadwal.
            </p>
            <a href={wa} target="_blank" rel="noreferrer">
              <Button
                className="mt-6 rounded-full px-6 h-12 font-bold text-white"
                style={{ backgroundColor: "#00B512" }}
                data-testid="section-wa-btn"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> Hubungi kami untuk penawaran khusus
              </Button>
            </a>
            <div className="mt-3 text-xs text-slate-600">
              WhatsApp <span className="font-semibold">{WA_DISPLAY}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONI ================= */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Cerita Klien
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-black text-slate-900">
              Kepercayaan yang Terus Tumbuh
            </h2>
            <p className="mt-3 text-slate-600">
              Ratusan keluarga sudah merasakan bedanya. Ini beberapa cerita
              mereka.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
                data-testid={`testi-${i + 1}`}
              >
                <div className="flex items-center gap-1 text-[#00B512]">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm md:text-base text-slate-800 leading-relaxed">
                  “{t.quote}”
                </p>
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="text-sm font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.place}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Sering Ditanyakan
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-black text-slate-900">
              Pertanyaan Umum
            </h2>
          </div>

          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={i}
                  className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
                >
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-slate-50 transition"
                    data-testid={`faq-toggle-${i}`}
                  >
                    <span className="text-sm md:text-base font-semibold text-slate-900 pr-4">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-slate-500 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {open && (
                    <div className="px-5 pb-5 text-sm text-slate-700 leading-relaxed">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section
        className="py-14 md:py-20 text-white"
        style={{ backgroundColor: "#000066" }}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <img
            src={icon}
            alt=""
            className="w-20 h-20 md:w-24 md:h-24 object-contain mx-auto mb-5"
          />
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Siap serahkan urusannya pada Huniaja?
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
            Tim kami menunggu di WhatsApp. Ceritakan kebutuhanmu — kami bantu
            atur semuanya dalam hitungan menit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href={wa} target="_blank" rel="noreferrer" data-testid="final-wa-btn">
              <Button
                className="rounded-full px-8 h-12 md:h-14 text-base font-bold text-white"
                style={{ backgroundColor: "#00B512" }}
              >
                <MessageCircle className="w-5 h-5 mr-2" /> Chat WhatsApp Sekarang
              </Button>
            </a>
            <Link to="/kontak">
              <Button
                variant="outline"
                className="rounded-full px-8 h-12 md:h-14 text-base font-bold bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900"
              >
                <Phone className="w-5 h-5 mr-2" /> Halaman Kontak
              </Button>
            </Link>
          </div>
          <div className="mt-5 text-sm text-white/70">
            WhatsApp {WA_DISPLAY} · Aktif setiap hari 08.00 – 21.00
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
