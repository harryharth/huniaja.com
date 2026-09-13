import React from "react";
import {
  Check,
  ShieldCheck,
  Users,
  Sparkles,
  Building2,
  BookOpen,
  Rocket,
  BadgeCheck,
  Handshake,
  Lightbulb,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WOMAN_LAPTOP =
  "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=800&q=80";
const OFFICE_IMG =
  "https://images.unsplash.com/photo-1600275668999-f423597ec2a8?w=1000&q=80";
const TEAM_IMG =
  "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&q=80";
const HAPPY_IMG =
  "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=1000&q=80";

const aboutBullets = [
  "Properti Terpercaya dan Terverifikasi",
  "Dukungan Agen Profesional",
  "Komunitas dan Networking",
  "Edukasi Properti untuk Semua",
  "Pengalaman Mudah dan Personal",
  "Inovasi untuk Masa Depan Properti",
];

const missionItems = [
  {
    Icon: Lightbulb,
    title: "Inovasi untuk Kemudahan",
    desc: "Kami memanfaatkan teknologi terkini dan ide kreatif untuk membuat pengalaman properti lebih simpel dan mudah diakses.",
  },
  {
    Icon: Handshake,
    title: "Dukungan Profesional dan Terpercaya",
    desc: "Tim kami selalu siap membantu Anda - pembeli, agen, maupun developer - memastikan setiap kebutuhan properti terpenuhi secara cepat dan andal.",
  },
];

const solutions = [
  {
    Icon: ShieldCheck,
    title: "Terpercaya dan Terverifikasi",
    desc: "Kami menghadirkan listing properti yang akurat dan up-to-date untuk memastikan Anda menemukan hunian idaman.",
  },
  {
    Icon: BookOpen,
    title: "Analisis Pasar dan Edukasi",
    desc: "Sajikan data dan insight terkini agar Anda lebih percaya diri membuat keputusan investasi maupun pembelian.",
  },
  {
    Icon: Users,
    title: "Pengembangan Komunitas",
    desc: "Kami membangun ekosistem digital untuk mempertemukan agen profesional dan pembeli, mempermudah komunikasi dan transaksi.",
  },
  {
    Icon: Rocket,
    title: "Teknologi Pintar",
    desc: "Platform kami menggunakan teknologi terkini agar Anda bisa menjual dan membeli properti secara cepat, aman, dan nyaman.",
  },
];

const process = [
  {
    title: "Memahami Kebutuhan Anda",
    desc: "Kami mendengarkan dan mempelajari kebutuhan Anda secara detail apakah Anda ingin membeli, menjual, atau berinvestasi properti.",
  },
  {
    title: "Memberikan Rekomendasi yang Personal",
    desc: "Tim kami memanfaatkan teknologi dan data untuk merekomendasikan properti dan layanan, sehingga proses pencarian menjadi lebih cepat dan akurat.",
  },
  {
    title: "Mendukung hingga Transaksi Selesai",
    desc: "Dari konsultasi awal hingga serah terima properti, kami selalu siap membantu Anda. Dukungan kami memastikan proses berjalan lancar dan memuaskan.",
  },
];

const commitments = [
  {
    Icon: BadgeCheck,
    title: "Membantu Anda Sukses dalam Properti",
    desc: "Kami ingin Anda lebih mudah mencari dan menjual properti, dengan platform yang simpel dan terpercaya.",
  },
  {
    Icon: Sparkles,
    title: "Pelayanan Profesional dan Ramah",
    desc: "Tim kami siap membantu Anda kapan saja agar setiap transaksi lebih nyaman dan aman.",
  },
  {
    Icon: Rocket,
    title: "Inovasi untuk Masa Depan",
    desc: "Kami selalu berusaha membuat platform lebih baik agar pengalaman Anda makin mudah dan memuaskan.",
  },
];

export default function TentangKamiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#0025F5] text-white pt-14 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            TENTANG KAMI
          </h1>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-white/90">
            Customers see, hear and feel the power of energy.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-[40px] overflow-hidden shadow-lg">
            <img
              src={TEAM_IMG}
              alt="Tim Huniaja"
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>
          <div>
            <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              About Us
            </span>
            <h2 className="text-xl md:text-3xl font-bold text-slate-900 mt-3 leading-snug">
              Transforming Property
              <br />
              Journeys into Digital Experiences
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
              Huniaja.com lahir dari semangat untuk membuat dunia properti
              lebih mudah diakses dan transparan. Kami percaya bahwa teknologi
              mampu mengubah cara Anda menjual, membeli, dan belajar seputar
              properti agar lebih cepat, lebih nyaman, dan lebih terpercaya. Di
              Huniaja.com, kami membangun platform yang membawa pembeli, agen,
              dan pengembang dalam satu ekosistem digital modern, sehingga
              Anda bisa menemukan hunian impian Anda, di mana saja dan kapan
              saja.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mt-5">
              {aboutBullets.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-[#12B815] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              Our Mission
            </span>
            <h2 className="text-xl md:text-3xl font-bold text-slate-900 mt-3 leading-snug">
              Membuat Properti Mudah
              <br />
              dan Terpercaya untuk Semua
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
              Kami berkomitmen untuk menghadirkan solusi digital inovatif agar
              setiap orang bisa menemukan dan menjual properti dengan lebih
              cepat, transparan, dan nyaman.
            </p>
            <div className="mt-6 space-y-5">
              {missionItems.map((m) => (
                <div key={m.title} className="flex gap-3 items-start">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                    <m.Icon className="w-5 h-5 text-[#0025F5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{m.title}</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[40px] overflow-hidden shadow-lg order-first md:order-last">
            <img
              src={OFFICE_IMG}
              alt="Misi"
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              What We Do
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-3">
              Solusi Digital untuk Semua Kebutuhan Properti Anda
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="space-y-6">
              {solutions.slice(0, 2).map((s) => (
                <SolutionCard key={s.title} {...s} />
              ))}
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-blue-100 blur-2xl opacity-70" />
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl border-8 border-white">
                  <img
                    src={WOMAN_LAPTOP}
                    alt="Layanan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {solutions.slice(2).map((s) => (
                <SolutionCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#0025F5] text-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-[#12B815] text-white text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              Work Process
            </span>
            <h2 className="text-xl md:text-3xl font-bold mt-3 leading-snug">
              Bagaimana Kami Bekerja
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/85 leading-relaxed">
              Kami percaya bahwa pengalaman properti harus mudah, transparan,
              dan terpercaya. Inilah cara kami memastikan Anda mendapatkan
              layanan terbaik di setiap langkah.
            </p>
            <div className="mt-6 space-y-3">
              {process.map((p, i) => (
                <div
                  key={p.title}
                  className="bg-white/10 hover:bg-white/15 rounded-2xl p-4 flex gap-4 items-start transition"
                >
                  <span className="w-9 h-9 rounded-full bg-[#12B815] text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-md">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="font-bold">{p.title}</h4>
                    <p className="text-sm text-white/85 mt-1 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src={HAPPY_IMG}
                alt="Kerja"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-[#12B815] text-white rounded-3xl px-5 md:px-6 py-3 md:py-4 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="text-3xl md:text-4xl font-black">20+</span>
                <span className="text-xs md:text-sm font-semibold leading-tight">
                  Years of
                  <br />
                  Experiences
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-[40px] overflow-hidden shadow-lg">
            <img
              src={TEAM_IMG}
              alt="Komitmen"
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>
          <div>
            <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              Our Commitment
            </span>
            <h2 className="text-xl md:text-3xl font-bold text-slate-900 mt-3 leading-snug">
              Pengalaman yang Aman, Mudah,
              <br />
              dan Memuaskan
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
              Kami berkomitmen menghadirkan layanan prima untuk semua pengguna.
              Dengan integritas dan inovasi, kami memastikan Anda mendapatkan
              pengalaman properti yang lebih personal dan terpercaya.
            </p>
            <div className="mt-6 space-y-3">
              {commitments.map((c) => (
                <div
                  key={c.title}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex gap-3 items-start hover:shadow-md transition"
                >
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                    <c.Icon className="w-5 h-5 text-[#0025F5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{c.title}</h4>
                    <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function SolutionCard({ Icon, title, desc }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md p-5 text-center transition">
      <div className="w-12 h-12 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#0025F5]" strokeWidth={2} />
      </div>
      <h3 className="font-bold text-slate-900 mt-3 text-sm md:text-base">
        {title}
      </h3>
      <p className="text-xs text-slate-500 mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}
