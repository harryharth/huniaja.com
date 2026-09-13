import React, { useState } from "react";
import {
  FileText,
  Shield,
  Users,
  Scale,
  AlertTriangle,
  ChevronDown,
  Check,
  Tag,
  Lock,
  LifeBuoy,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const legalDocs = [
  {
    id: "sk",
    label: "Syarat & Ketentuan",
    Icon: Tag,
    color: "#001DF3",
    href: "/syarat-ketentuan",
  },
  {
    id: "privacy",
    label: "Kebijakan Privasi",
    Icon: Lock,
    color: "#001DF3",
    href: "/kebijakan-privasi",
  },
];

const sections = [
  {
    id: "pendahuluan",
    Icon: FileText,
    title: "1. Pendahuluan",
    body: [
      "Selamat datang di Huniaja.com. Dokumen ini mengatur hubungan antara pengguna (\"Anda\") dengan PT Harry Harth Corporation selaku pengelola Huniaja.com.",
      "Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat dengan Syarat & Ketentuan ini serta Kebijakan Privasi kami.",
    ],
  },
  {
    id: "akun",
    Icon: Users,
    title: "2. Akun Pengguna",
    body: [
      "Anda bertanggung jawab menjaga kerahasiaan kredensial akun Anda.",
      "Data yang Anda daftarkan wajib akurat, lengkap, dan diperbarui secara berkala.",
      "Huniaja berhak menangguhkan atau menghapus akun yang terindikasi melanggar S&K ini.",
    ],
  },
  {
    id: "iklan",
    Icon: Scale,
    title: "3. Pemasangan Iklan",
    body: [
      "Iklan yang dipasang wajib menampilkan informasi properti yang benar dan tidak menyesatkan.",
      "Dilarang memasang iklan properti fiktif, duplikat, atau melanggar hukum yang berlaku di Indonesia.",
      "Huniaja berhak menurunkan atau menghapus iklan yang tidak sesuai standar kualitas kami.",
    ],
  },
  {
    id: "privasi",
    Icon: Shield,
    title: "4. Privasi & Data",
    body: [
      "Kami mengumpulkan data pribadi hanya sebatas yang diperlukan untuk memberikan layanan terbaik.",
      "Data Anda tidak akan dijual ke pihak ketiga. Rincian selengkapnya terdapat pada Kebijakan Privasi.",
    ],
  },
  {
    id: "tanggung-jawab",
    Icon: AlertTriangle,
    title: "5. Batasan Tanggung Jawab",
    body: [
      "Huniaja berperan sebagai platform yang menghubungkan pembeli, penjual, agen, dan developer.",
      "Transaksi properti tetap terjadi antar pihak; Huniaja tidak bertanggung jawab atas kerugian yang timbul dari perjanjian di luar platform.",
    ],
  },
  {
    id: "perubahan",
    Icon: FileText,
    title: "6. Perubahan Ketentuan",
    body: [
      "Kami dapat memperbarui S&K ini dari waktu ke waktu. Perubahan signifikan akan diumumkan melalui email atau di halaman ini.",
      "Penggunaan layanan setelah perubahan berlaku dianggap sebagai persetujuan atas versi terbaru.",
    ],
  },
];

export default function SKPage() {
  const [activeDoc, setActiveDoc] = useState("sk");

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#001DF3] text-white pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Syarat & Ketentuan
          </h1>
          <p className="mt-3 text-sm md:text-base text-white/90 max-w-2xl">
            Terakhir diperbarui: 01 Januari 2026. Mohon baca dokumen ini
            dengan seksama sebelum menggunakan layanan Huniaja.com.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar with pill buttons */}
          <aside className="md:col-span-1">
            <div className="md:sticky md:top-32 space-y-3">
              {legalDocs.map((d) => {
                const active = activeDoc === d.id;
                if (d.id === "help") {
                  return (
                    <Link
                      key={d.id}
                      to={d.href}
                      className="group flex items-center gap-3 bg-[#001DF3] text-white rounded-2xl p-2 pr-3 shadow-md hover:shadow-lg transition-all"
                    >
                      <span className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-white" fill="white" />
                      </span>
                      <span className="flex-1 text-sm font-bold">
                        {d.label}
                      </span>
                      <span className="w-7 h-7 rounded-full bg-[#00B512] flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </span>
                    </Link>
                  );
                }
                return (
                  <button
                    key={d.id}
                    onClick={() => setActiveDoc(d.id)}
                    className={`w-full group flex items-center gap-3 rounded-2xl p-2 pr-3 shadow-sm hover:shadow-md transition-all ${
                      active
                        ? "bg-[#001DF3] text-white"
                        : "bg-white border border-slate-200 text-slate-800 hover:border-slate-300"
                    }`}
                  >
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${d.color}20` }}
                    >
                      <d.Icon
                        className="w-5 h-5"
                        style={{ color: d.color }}
                        strokeWidth={2.4}
                      />
                    </span>
                    <span className="flex-1 text-sm font-bold text-left">
                      {d.label}
                    </span>
                    {active ? (
                      <span className="w-7 h-7 rounded-full bg-[#00B512] flex items-center justify-center shrink-0">
                        <Check
                          className="w-4 h-4 text-white"
                          strokeWidth={3}
                        />
                      </span>
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                );
              })}

              <div className="hidden md:block mt-6 bg-slate-50 rounded-2xl p-4">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">
                  Daftar Isi
                </p>
                <ul className="space-y-1">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="flex items-center gap-2 text-sm rounded-lg px-2 py-2 text-slate-700 hover:bg-white hover:text-[#001DF3] transition"
                      >
                        <s.Icon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="md:col-span-3 space-y-6">
            {activeDoc === "sk" &&
              sections.map((s) => (
                <article
                  key={s.id}
                  id={s.id}
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8 scroll-mt-32"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center">
                      <s.Icon className="w-5 h-5 text-[#001DF3]" />
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-slate-900">
                      {s.title}
                    </h2>
                  </div>
                  <div className="mt-4 space-y-3 text-sm md:text-[15px] text-slate-600 leading-relaxed">
                    {s.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </article>
              ))}

            {activeDoc === "privacy" && (
              <article className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-sky-50 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-sky-500" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900">
                    Kebijakan Privasi
                  </h2>
                </div>
                <div className="space-y-3 text-sm md:text-[15px] text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-900">
                      1. Data yang Kami Kumpulkan.
                    </strong>{" "}
                    Kami mengumpulkan data yang Anda berikan secara sukarela
                    (nama, email, WhatsApp), aktivitas pencarian, serta data
                    teknis perangkat yang membantu meningkatkan layanan.
                  </p>
                  <p>
                    <strong className="text-slate-900">
                      2. Penggunaan Data.
                    </strong>{" "}
                    Data digunakan untuk personalisasi rekomendasi properti,
                    verifikasi keamanan, komunikasi kampanye, dan analitik
                    layanan.
                  </p>
                  <p>
                    <strong className="text-slate-900">
                      3. Pembagian Data.
                    </strong>{" "}
                    Kami tidak menjual data ke pihak ketiga. Data hanya
                    dibagikan kepada mitra bank/agen bila diperlukan atas
                    persetujuan Anda.
                  </p>
                  <p>
                    <strong className="text-slate-900">
                      4. Keamanan.
                    </strong>{" "}
                    Kami menggunakan enkripsi TLS/HTTPS, penyimpanan
                    tersegmentasi, dan audit rutin untuk melindungi data.
                  </p>
                  <p>
                    <strong className="text-slate-900">
                      5. Hak Anda.
                    </strong>{" "}
                    Anda dapat meminta akses, koreksi, atau penghapusan data
                    pribadi kapan saja melalui halaman kontak kami.
                  </p>
                  <p>
                    <strong className="text-slate-900">
                      6. Cookies.
                    </strong>{" "}
                    Kami menggunakan cookies untuk memperbaiki pengalaman
                    pengguna. Anda dapat menonaktifkannya melalui pengaturan
                    browser.
                  </p>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
