import React, { useState } from "react";
import {
  Search,
  HelpCircle,
  User,
  Home,
  CreditCard,
  Shield,
  Megaphone,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const topics = [
  { Icon: User, label: "Akun & Verifikasi", count: 12, color: "#0025F5" },
  { Icon: Home, label: "Cari & Beli Properti", count: 18, color: "#12B815" },
  { Icon: Megaphone, label: "Pasang Iklan", count: 15, color: "#F59E0B" },
  { Icon: CreditCard, label: "KPR & Pembayaran", count: 9, color: "#0EA5E9" },
  { Icon: Shield, label: "Keamanan & Privasi", count: 7, color: "#EF4444" },
  { Icon: HelpCircle, label: "Lainnya", count: 5, color: "#7C3AED" },
];

const faqs = [
  {
    q: "Bagaimana cara memverifikasi akun saya di Huniaja?",
    a: "Masuk ke menu Profil, unggah foto KTP, dan konfirmasi email serta nomor WhatsApp Anda. Verifikasi biasanya selesai dalam 1x24 jam kerja.",
  },
  {
    q: "Apakah pemasangan iklan properti benar-benar gratis?",
    a: "Ya, fitur dasar pasang iklan sepenuhnya gratis tanpa batasan durasi awal. Anda dapat mengaktifkan paket premium bila ingin visibilitas lebih tinggi.",
  },
  {
    q: "Bagaimana Huniaja memilih agen yang direkomendasikan?",
    a: "Kami memverifikasi identitas, portofolio, dan rating pengguna. Agen dengan performa terbaik ditampilkan lebih dulu.",
  },
  {
    q: "Berapa lama proses pengajuan KPR Syariah?",
    a: "Proses pengajuan awal hanya 1-3 hari kerja. Setelah dokumen lengkap dan appraisal, akad umumnya dilakukan dalam 2-3 minggu.",
  },
  {
    q: "Bagaimana melaporkan iklan yang mencurigakan?",
    a: "Pada halaman detail listing, tekan ikon menu (⋮) lalu pilih \u2018Laporkan iklan\u2019. Tim moderasi kami akan meninjau maksimum 1x24 jam.",
  },
  {
    q: "Apakah data pribadi saya aman?",
    a: "Kami menggunakan enkripsi end-to-end dan tidak menjual data ke pihak ketiga. Detail lengkap tersedia di Kebijakan Privasi.",
  },
];

export default function PusatBantuanPage() {
  const [q, setQ] = useState("");

  const filtered = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(q.toLowerCase()) ||
      f.a.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero + Search */}
      <section className="bg-[#0025F5] text-white pt-12 md:pt-16 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Halo, ada yang bisa kami bantu?
          </h1>
          <p className="mt-3 text-sm md:text-base text-white/85">
            Temukan jawaban cepat atau hubungi tim support kami.
          </p>
          <div className="mt-6 flex items-center bg-white rounded-full pl-4 pr-1 py-1 shadow-lg max-w-2xl mx-auto">
            <Search className="w-5 h-5 text-slate-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari pertanyaan seputar Huniaja..."
              className="flex-1 min-w-0 bg-transparent outline-none px-3 py-3 text-sm text-slate-800 placeholder:text-slate-400"
            />
            <button className="bg-[#12B815] hover:bg-[#0fa112] text-white font-bold text-sm rounded-full px-5 py-2 transition">
              Cari
            </button>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-center text-xl md:text-2xl font-bold text-slate-900 mb-10">
            Pilih Topik Bantuan
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {topics.map((t) => (
              <button
                key={t.label}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 p-5 md:p-6 text-left transition-all"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${t.color}15` }}
                >
                  <t.Icon
                    className="w-6 h-6"
                    style={{ color: t.color }}
                    strokeWidth={2.2}
                  />
                </div>
                <h3 className="font-bold text-slate-900 mt-4">{t.label}</h3>
                <p className="text-xs text-slate-500 mt-1">
                  {t.count} artikel
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-center text-xl md:text-2xl font-bold text-slate-900 mb-8">
            Pertanyaan Populer
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {filtered.length ? (
              filtered.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`f${i}`}
                  className="bg-white rounded-2xl border border-slate-200 px-5"
                >
                  <AccordionTrigger className="hover:no-underline text-sm md:text-base font-semibold text-slate-800 text-left">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <p className="text-center text-slate-500 py-6">
                Tidak ditemukan hasil untuk “{q}”.
              </p>
            )}
          </Accordion>
        </div>
      </section>

      {/* Still need help */}
      <section className="bg-white pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="bg-[#0025F5] text-white rounded-[36px] md:rounded-[44px] p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl md:text-2xl font-bold">
                Masih butuh bantuan?
              </h3>
              <p className="text-sm md:text-base text-white/85 mt-2 max-w-lg">
                Tim customer support Huniaja siap membantu Anda setiap hari.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/kontak"
                className="bg-white text-[#0025F5] font-bold rounded-full h-11 flex items-center justify-center gap-2 hover:bg-slate-100 transition"
              >
                <Phone className="w-4 h-4" /> Hubungi Support
              </Link>
              <a
                href="#"
                className="bg-[#12B815] hover:bg-[#0fa112] text-white font-bold rounded-full h-11 flex items-center justify-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4" /> Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
