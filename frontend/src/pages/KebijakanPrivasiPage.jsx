import React from "react";
import { Link } from "react-router-dom";
import { Lock, ShieldCheck, Database, Cookie, Share2, UserCog, Mail, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const sections = [
  {
    Icon: Database,
    title: "Data yang Kami Kumpulkan",
    body:
      "Kami hanya menyimpan data yang benar-benar diperlukan agar layanan Huniaja bisa berjalan: nama, alamat email, nomor WhatsApp, dan preferensi pencarian properti. Kalau kamu upload dokumen KPR atau foto properti, semuanya dienkripsi dan diakses hanya oleh tim terkait.",
  },
  {
    Icon: UserCog,
    title: "Bagaimana Data Digunakan",
    body:
      "Data kamu kami pakai untuk mencocokkan properti relevan, mengirim penawaran, menghubungkan dengan agen manusia kami, dan meningkatkan pengalamanmu. Tidak akan pernah kami jual atau tukar ke pihak ketiga tanpa persetujuanmu.",
  },
  {
    Icon: Share2,
    title: "Berbagi dengan Mitra",
    body:
      "Kalau kamu setuju terhubung dengan mitra bank atau developer (misalnya lewat pengajuan KPR), kami hanya membagikan data yang perlu untuk proses tersebut — bukan seluruh riwayat kamu.",
  },
  {
    Icon: Cookie,
    title: "Cookie & Analitik",
    body:
      "Kami menggunakan cookie standar untuk mengingat preferensimu (misal: kota favorit) dan analitik anonim (Google Analytics) untuk memperbaiki pengalaman pengguna. Kamu bisa nonaktifkan cookie kapan saja via pengaturan browser.",
  },
  {
    Icon: ShieldCheck,
    title: "Keamanan",
    body:
      "Semua transmisi data via HTTPS. Password admin di-hash dengan bcrypt, dan kami rutin melakukan audit keamanan. Kalau kamu mendeteksi anomali atau kebocoran, hubungi kami segera lewat WhatsApp.",
  },
  {
    Icon: UserCog,
    title: "Hak-Hakmu",
    body:
      "Kamu bisa meminta akses, koreksi, atau penghapusan datamu kapan saja. Cukup kirim permintaan via halaman Kontak atau WhatsApp resmi Huniaja, dan tim kami akan memprosesnya dalam 7 hari kerja.",
  },
];

export default function KebijakanPrivasiPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#000066] to-[#001DF3] text-white py-16 md:py-24">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-25"
          style={{ backgroundColor: "#00B512" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-15 bg-white"
        />
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-widest">
            <Lock className="w-3.5 h-3.5" /> KEBIJAKAN PRIVASI
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight">
            Privasimu, prioritas kami.
          </h1>
          <p className="mt-4 text-sm md:text-lg text-white/85 max-w-2xl mx-auto">
            Kami percaya, kepercayaan tidak bisa dibeli — hanya bisa dijaga. Berikut
            cara Huniaja memperlakukan datamu, ditulis apa adanya tanpa jargon
            hukum yang membingungkan.
          </p>
          <p className="mt-4 text-xs text-white/60">
            Terakhir diperbarui: 12 Februari 2026
          </p>
        </div>
      </section>

      {/* Sections */}
      <main className="flex-1 bg-slate-50 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 space-y-5">
          {sections.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8 flex gap-4 md:gap-6 hover:shadow-md transition"
              data-testid={`privacy-section-${i}`}
            >
              <div
                className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,29,243,0.10) 0%, rgba(0,181,18,0.12) 100%)",
                }}
              >
                <s.Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: "#001DF3" }} strokeWidth={2.2} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-black text-slate-900">
                  {s.title}
                </h2>
                <p className="mt-2 text-sm md:text-[15px] text-slate-600 leading-relaxed">
                  {s.body}
                </p>
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div
            className="rounded-3xl p-6 md:p-10 text-white relative overflow-hidden mt-8"
            style={{
              background:
                "linear-gradient(135deg, #000066 0%, #001DF3 100%)",
            }}
          >
            <div className="grid md:grid-cols-3 gap-6 items-center relative">
              <div className="md:col-span-2">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest">
                  <Mail className="w-3.5 h-3.5" /> PUNYA PERTANYAAN?
                </div>
                <h3 className="text-2xl md:text-3xl font-black mt-3 leading-tight">
                  Kami siap dengar &amp; jawab dalam 24 jam.
                </h3>
                <p className="mt-2 text-sm text-white/80 max-w-lg">
                  Chat WhatsApp resmi Huniaja atau buka halaman Kontak untuk
                  pertanyaan seputar data pribadimu.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  to="/kontak"
                  data-testid="privacy-contact-cta"
                  className="bg-white text-[#001DF3] hover:bg-slate-100 rounded-full px-5 py-3 text-sm font-bold text-center inline-flex items-center justify-center gap-2"
                >
                  Halaman Kontak <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/syarat-ketentuan"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-5 py-3 text-sm font-bold text-center"
                >
                  Lihat Syarat &amp; Ketentuan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
