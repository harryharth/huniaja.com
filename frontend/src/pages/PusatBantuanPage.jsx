import React, { useState } from "react";
import {
  Search,
  MessageCircle,
  Phone,
  HelpCircle,
  Sparkles,
  ArrowRight,
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
import { WA_URL } from "../components/ChatWidget";

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
    a: "Pada halaman detail listing, tekan ikon menu (⋮) lalu pilih 'Laporkan iklan'. Tim moderasi kami akan meninjau maksimum 1x24 jam.",
  },
  {
    q: "Apakah data pribadi saya aman?",
    a: "Kami menggunakan enkripsi end-to-end dan tidak menjual data ke pihak ketiga. Detail lengkap tersedia di Kebijakan Privasi.",
  },
  {
    q: "Bagaimana cara menghubungi tim support?",
    a: "Kamu bisa chat langsung via tombol WhatsApp di kanan bawah, atau kirim email ke support@huniaja.com. Response time rata-rata 15 menit di jam kerja.",
  },
  {
    q: "Bisakah saya membatalkan iklan yang sudah dipasang?",
    a: "Bisa. Masuk ke Dashboard > Iklan Saya > pilih iklan > Nonaktifkan. Iklan langsung tidak tampil dan bisa diaktifkan lagi kapan saja.",
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

      {/* Hero - simpler, cleaner */}
      <section className="bg-[#0025F5] text-white pt-14 md:pt-20 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00B512]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" /> PUSAT BANTUAN
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mt-4 leading-tight">
            Kami di sini,<br className="md:hidden" />{" "}
            <span className="text-[#8FFF9F]">untukmu.</span>
          </h1>
          <p className="mt-4 text-sm md:text-lg text-white/85 max-w-xl mx-auto leading-relaxed">
            Punya pertanyaan? Sebelum bertanya, coba ketik di sini dulu -
            biasanya jawabannya sudah kami siapkan untukmu.
          </p>
          <div className="mt-8 flex items-center bg-white rounded-full pl-5 pr-1 py-1 shadow-xl max-w-2xl mx-auto">
            <Search className="w-5 h-5 text-slate-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ketik pertanyaanmu..."
              data-testid="pusat-bantuan-search"
              className="flex-1 min-w-0 bg-transparent outline-none px-3 py-3 text-sm text-slate-800 placeholder:text-slate-400"
            />
          </div>
        </div>
      </section>

      {/* Storytelling manifesto */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
            JANJI KAMI
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-4 leading-tight">
            Setiap pertanyaan berhak<br className="hidden md:block" />
            <span className="text-[#0025F5]">
              dijawab dengan sabar dan jelas.
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-4 leading-relaxed">
            Kami tahu urusan properti sering terasa menakutkan - istilahnya
            asing, dokumennya banyak, prosesnya panjang. Halaman ini kami buat
            untuk memastikan kamu tidak pernah merasa sendirian.
          </p>
        </div>
      </section>

      {/* FAQ - main content */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="inline-block bg-white text-[#0025F5] text-[11px] font-bold rounded-full px-3 py-1 tracking-widest border border-blue-100">
              PERTANYAAN POPULER
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-3">
              {q ? `Hasil untuk "${q}"` : "Yang Sering Ditanyakan"}
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {filtered.length ? (
              filtered.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`f${i}`}
                  data-testid={`pusat-bantuan-faq-${i}`}
                  className="bg-white rounded-2xl border border-slate-200 px-5 hover:shadow-sm transition"
                >
                  <AccordionTrigger className="hover:no-underline text-left">
                    <div className="flex items-start gap-3 pr-2">
                      <span className="w-7 h-7 rounded-full bg-[#0025F5] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm md:text-base font-semibold text-slate-800 leading-snug">
                        {f.q}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-600 leading-relaxed pl-10">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-100">
                <Search className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="text-slate-500 mt-3">
                  Tidak ditemukan hasil untuk "{q}".
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Coba kata kunci lain, atau langsung chat kami.
                </p>
              </div>
            )}
          </Accordion>
        </div>
      </section>

      {/* Still need help - simple, professional */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="relative bg-[#0025F5] text-white rounded-[32px] md:rounded-[44px] overflow-hidden p-8 md:p-14">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00B512]/20 blur-3xl pointer-events-none" />
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <Sparkles className="w-9 h-9 text-[#8FFF9F]" />
                <h3 className="text-2xl md:text-3xl font-black mt-4 leading-tight">
                  Belum ketemu jawabannya?
                </h3>
                <p className="text-sm md:text-base text-white/85 mt-3 max-w-xl leading-relaxed">
                  Tim Huniaja siap membantu 7 hari seminggu. Chat langsung
                  dengan kami dan dapatkan jawaban dalam hitungan menit.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={WA_URL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="pusat-bantuan-wa-btn"
                  className="bg-[#00B512] hover:bg-[#009e0f] text-white font-bold rounded-full h-12 flex items-center justify-center gap-2 shadow-lg transition"
                >
                  <MessageCircle className="w-4 h-4" /> Chat WhatsApp
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <Link
                  to="/kontak"
                  data-testid="pusat-bantuan-kontak-btn"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white font-bold rounded-full h-12 flex items-center justify-center gap-2 transition"
                >
                  <Phone className="w-4 h-4" /> Hubungi Support
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
