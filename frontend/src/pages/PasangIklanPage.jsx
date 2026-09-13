import React, { useState } from "react";
import {
  Megaphone,
  FileText,
  Smartphone,
  ArrowRight,
  Check,
  HelpCircle,
  KeyRound,
  Users,
  HardHat,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { HERO_BANNER } from "../mock";
import { WA_URL } from "../components/ChatWidget";

const HERO_IMG = "https://images.unsplash.com/photo-1684230413889-836e331a8201?w=1200&q=80";

const partnerCards = [
  {
    Icon: KeyRound,
    title: "Pemilik Properti",
    highlight: "Bantuan Agen Tersedia",
    perks: ["Pasang Iklan Gratis", "Manfaatkan Estimasi Nilai"],
    cta: "Sebagai Pemilik",
  },
  {
    Icon: Users,
    title: "Affiliate Program",
    perks: [
      "Tidak Perlu cari listingan",
      "Tinggal Share dapat komisi",
      "Komisi sampai 80%",
    ],
    cta: "Sebagai Agen",
  },
  {
    Icon: HardHat,
    title: "Developer Properti",
    perks: ["Pasang Listing Gratis", "Tawaran Leads", "Manfaatkan Jaringan Luas"],
    cta: "Sebagai Developer",
  },
];

const steps = [
  {
    Icon: Megaphone,
    title: "Klik Pasang Iklan",
    desc: "Tentukan profil Anda: pemilik, atau developer.",
  },
  {
    Icon: FileText,
    title: "Isi Deskripsi",
    desc: "Tambahkan informasi dan foto properti dengan jelas.",
  },
  {
    Icon: Smartphone,
    title: "Iklan Terpasang Otomatis",
    desc: "Pembeli atau penyewa yang tertarik akan segera menghubungi Anda.",
  },
];

const keywordLeft = [
  "Lokasi Strategis",
  "Bebas Banjir",
  "Ideal untuk Investasi",
  "Nyaman dan Asri",
  "Lokasi Menarik",
  "Langka dan Eksklusif",
  "Super Strategis",
];
const keywordRight = [
  "Harga Terjangkau",
  "Fasilitas Terbaik",
  "Lingkungan Nyaman",
  "Lingkungan Asri",
  "Sangat Strategis",
  "Siap Huni",
];

const faqs = [
  {
    q: "Mengapa memilih untuk memasang iklan di Huniaja.com?",
    a: "Huniaja menghubungkan iklan Anda dengan jutaan pencari properti aktif, dilengkapi teknologi AI yang mempercepat proses pencocokan pembeli.",
  },
  {
    q: "Berapa lama iklan saya akan tetap terpasang?",
    a: "Iklan gratis akan aktif selama 60 hari. Anda bisa memperpanjang atau mengaktifkan paket premium untuk visibilitas lebih lama.",
  },
  {
    q: "Dokumen apa saja yang perlu saya siapkan?",
    a: "Cukup foto properti, sertifikat / bukti kepemilikan, dan detail dasar (luas, harga, lokasi). Verifikasi dokumen lain dilakukan saat calon pembeli serius.",
  },
  {
    q: "Apakah terdapat biaya yang dikenakan untuk pemasangan iklan?",
    a: "Tidak. Fitur dasar pasang iklan sepenuhnya gratis. Kami hanya menawarkan paket premium opsional untuk boosting dan tampil di posisi teratas.",
  },
  {
    q: "Bagaimana proses jika ada calon pembeli yang menunjukkan minat?",
    a: "Calon pembeli dapat menghubungi Anda langsung via WhatsApp / chat platform, dan Anda tetap mengendalikan negosiasi.",
  },
  {
    q: "Berapa lama waktu yang diperlukan agar properti saya terjual atau tersewa?",
    a: "Bervariasi tergantung lokasi, harga dan kelengkapan iklan. Rata-rata properti dengan foto baik dan harga wajar terjual dalam 30-90 hari.",
  },
];

export default function PasangIklanPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#0025F5] text-white pt-10 md:pt-14 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight">
              Pasang Iklan Properti{" "}
              <span className="text-[#00B512]">Gratis</span> Tanpa Ribet
            </h1>
            <p className="mt-4 text-sm md:text-base text-white/90 max-w-lg">
              Pasang iklan rumah atau properti lainnya cukup 1 menit, langsung
              jangkau jutaan pencari properti dalam waktu singkat!
            </p>
            <button className="mt-6 bg-[#00B512] hover:bg-[#009e0f] text-white font-bold rounded-full px-7 py-3 text-sm shadow-lg transition">
              Mulai Pasang Iklan
            </button>
          </div>
          <div className="rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src={HERO_IMG}
              alt="Pasang Iklan"
              className="w-full h-56 md:h-72 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Partner cards */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-center text-xl md:text-2xl font-bold text-slate-900 mb-10">
            Keuntungan Bermitra di{" "}
            <span className="text-[#0025F5]">Huniaja</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {partnerCards.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-3xl shadow-sm hover:shadow-md p-6 transition flex flex-col h-full"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center">
                  <c.Icon
                    className="w-10 h-10 text-[#0025F5]"
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="text-center font-bold text-slate-900 mt-4">
                  {c.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm flex-1">
                  {c.perks.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-slate-700"
                    >
                      <span className="w-4 h-4 rounded-full bg-[#00B512] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                  {c.highlight && (
                    <li className="flex items-center justify-between gap-2 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 mt-3">
                      <div className="flex items-center gap-2 text-slate-700 text-sm">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-[#0025F5] flex items-center justify-center shrink-0">
                          <Users className="w-3.5 h-3.5" />
                        </span>
                        {c.highlight}
                      </div>
                      <HelpCircle className="w-4 h-4 text-slate-400" />
                    </li>
                  )}
                </ul>
                <Button className="w-full bg-[#0025F5] hover:bg-[#001fd1] text-white rounded-full font-bold mt-5 h-11">
                  {c.cta}
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-500 mt-6">
            *Syarat dan Ketentuan Berlaku
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-center text-xl md:text-2xl font-bold text-slate-900 mb-10">
            Cara Mudah Pasang Iklan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md p-6 text-center transition"
              >
                <div className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-[#00B512] text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                  {i + 1}
                </div>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center">
                  <s.Icon
                    className="w-8 h-8 text-[#0025F5]"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-bold text-slate-900 mt-4">{s.title}</h3>
                <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-[#00B512] hover:bg-[#009e0f] text-white font-bold rounded-full px-7 py-3 text-sm shadow-lg transition">
              Mulai Pasang Iklan
            </button>
          </div>
        </div>
      </section>

      {/* Tips Accordion */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="hidden md:block">
            <div className="rounded-[40px] overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Tips"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
              Tips Pasang Iklan
              <br />
              Agar Cepat Terjual / Tersewa
            </h2>
            <Accordion type="single" collapsible defaultValue="t1" className="space-y-3">
              <AccordionItem
                value="t1"
                className="bg-white rounded-2xl border border-slate-200 px-5"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#00B512] text-white font-bold text-xs flex items-center justify-center">
                      1
                    </span>
                    <span className="font-semibold text-slate-800">
                      Judul Iklan
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                  Gunakan kata kunci yang relevan dalam judul iklan untuk
                  meningkatkan visibilitasnya di antara pencari properti.
                  Berikut adalah beberapa contoh kata kunci yang dapat Anda
                  gunakan:
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-3">
                    {[...keywordLeft, ...keywordRight].map((k) => (
                      <div key={k} className="flex items-center gap-2">
                        <Check
                          className="w-3.5 h-3.5 text-[#00B512]"
                          strokeWidth={3}
                        />
                        <span className="text-slate-700">{k}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="t2"
                className="bg-white rounded-2xl border border-slate-200 px-5"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#00B512] text-white font-bold text-xs flex items-center justify-center">
                      2
                    </span>
                    <span className="font-semibold text-slate-800">
                      Deskripsi Iklan
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                  Tuliskan deskripsi lengkap: keunggulan properti, akses ke
                  fasilitas umum, kondisi lingkungan, serta rincian legalitas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="t3"
                className="bg-white rounded-2xl border border-slate-200 px-5"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#00B512] text-white font-bold text-xs flex items-center justify-center">
                      3
                    </span>
                    <span className="font-semibold text-slate-800">
                      Foto Properti
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                  Foto pencahayaan alami, sudut lebar, dan minimal 6-10 foto
                  terbaik ruangan utama akan sangat meningkatkan tingkat klik
                  iklan Anda.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Harga estimasi */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              Bingung Menentukan Harga{" "}
              <span className="text-[#0025F5]">Properti</span> ?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Peroleh estimasi nilai properti yang akurat berdasarkan lokasi
              dan spesifikasinya. Manfaatkan informasi ini untuk memaksimalkan
              keuntungan saat menjual atau menyewakan properti Anda.
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-[#0025F5] hover:bg-[#001fd1] text-white rounded-full font-bold px-6 h-11">
              Coba Sekarang
            </Button>
            <Button
              variant="outline"
              className="rounded-full font-bold px-6 h-11"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </section>

      {/* Green banner CTA */}
      <section className="bg-white pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="bg-[#00B512] rounded-[36px] md:rounded-[44px] relative overflow-hidden p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
            <div className="relative shrink-0 -mt-4 md:-mt-16 md:-mb-16">
              <div className="w-[180px] md:w-[220px] aspect-[9/19] rounded-[36px] bg-slate-900 p-2 shadow-2xl mx-auto">
                <div className="w-full h-full rounded-[28px] overflow-hidden bg-white">
                  <img
                    src={HERO_BANNER}
                    alt="App"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 text-white text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Perlu Bantuan atau Konsultasi?
              </h3>
              <p className="text-sm text-white/90 max-w-xl">
                Jangan ragu untuk menghubungi kami jika Anda memiliki
                pertanyaan atau memerlukan konsultasi lebih lanjut. Tim kami
                siap memberikan bantuan dengan penuh kesediaan dan
                profesionalisme.
              </p>
              <Button
                asChild
                className="mt-5 bg-[#0025F5] hover:bg-[#001fd1] text-white rounded-full font-bold px-6 h-11"
              >
                <a href={WA_URL()} target="_blank" rel="noopener noreferrer">
                  Hubungi Kami
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
              Hal yang sering Ditanyakan
            </h3>
          </div>
          <div className="md:col-span-2">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
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
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
