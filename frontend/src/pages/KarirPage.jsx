import React, { useState } from "react";
import {
  Code2,
  Palette,
  Megaphone,
  Video,
  TrendingUp,
  Headphones,
  PenTool,
  MapPin,
  Briefcase,
  Users,
  Sprout,
  Heart,
  Send,
  Sparkles,
  Check,
  X,
  Quote,
  Sunrise,
  Coffee,
  Rocket,
  Trophy,
  Compass,
  Flame,
  Handshake,
  Star,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";

const jobs = [
  {
    position: "Full-Stack Developer",
    code: "HAFSD",
    location: "Bogor - Jawa Barat",
    type: "Full-time",
    Icon: Code2,
    color: "#0025F5",
    desc: "Bangun fitur end-to-end di platform Huniaja bersama tim engineering yang kolaboratif.",
  },
  {
    position: "Graphic Designer",
    code: "HAUXD",
    location: "Bogor - Jawa Barat",
    type: "Full-time",
    Icon: Palette,
    color: "#EC4899",
    desc: "Rancang visual campaign, konten sosial, dan aset produk yang konsisten dengan brand kami.",
  },
  {
    position: "Digital Marketing Specialist",
    code: "HADMS",
    location: "Bogor - Jawa Barat",
    type: "Full-time",
    Icon: Megaphone,
    color: "#F59E0B",
    desc: "Kelola kampanye performance & branding lintas kanal untuk mempercepat pertumbuhan pengguna.",
  },
  {
    position: "Content Creator",
    code: "HACC",
    location: "Bogor - Jawa Barat",
    type: "Full-time",
    Icon: Video,
    color: "#EF4444",
    desc: "Produksi konten video, foto, dan copy yang mengedukasi audiens seputar properti.",
  },
  {
    position: "Sales & Business Development",
    code: "HASBD",
    location: "Jabodetabek",
    type: "Full-time",
    Icon: TrendingUp,
    color: "#00B512",
    desc: "Bangun kemitraan strategis dengan developer, agen, dan brand di seluruh Jabodetabek.",
  },
  {
    position: "Customer Support & Community",
    code: "HACSCM",
    location: "Bogor - Jawa Barat",
    type: "Full-time",
    Icon: Headphones,
    color: "#0EA5E9",
    desc: "Layani pengguna dan bangun komunitas Huniaja yang saling mendukung dan aktif.",
  },
];

const perks = [
  {
    Icon: Users,
    title: "Lingkungan Kolaboratif",
    desc: "Ide-ide terbaik lahir dari kerja tim dan budaya terbuka.",
  },
  {
    Icon: Sprout,
    title: "Kesempatan Bertumbuh",
    desc: "Mentorship, learning budget, dan proyek yang menantang.",
  },
  {
    Icon: Heart,
    title: "Dampak Nyata",
    desc: "Setiap langkahmu mempermudah jual-beli properti di Indonesia.",
  },
];

const chapters = [
  {
    step: "Bab 01",
    Icon: Compass,
    title: "Bergabung",
    desc: "Semua dimulai dari satu keputusan berani. Kami menyambutmu bukan sebagai karyawan baru, tapi sebagai bagian dari keluarga yang percaya bahwa properti bisa lebih manusiawi.",
    color: "#0025F5",
  },
  {
    step: "Bab 02",
    Icon: Sprout,
    title: "Berkembang",
    desc: "Kamu tidak sendiri. Mentor, learning budget, dan proyek nyata menemanimu tumbuh - bukan sekadar naik jabatan, tapi menjadi versi terbaik dari dirimu.",
    color: "#00B512",
  },
  {
    step: "Bab 03",
    Icon: Rocket,
    title: "Berkarya",
    desc: "Ide gilamu didengar. Setiap fitur, setiap kampanye, setiap sapaan ke pelanggan - membawa nama kecilmu di dalamnya. Karyamu jadi warisan digital Huniaja.",
    color: "#F59E0B",
  },
  {
    step: "Bab 04",
    Icon: Trophy,
    title: "Berdampak",
    desc: "Suatu hari, seseorang di ujung Indonesia akhirnya punya rumah pertamanya - karena baris kode, desain, atau tulisanmu. Di sinilah karirmu berubah jadi misi.",
    color: "#7C3AED",
  },
];

const stories = [
  {
    name: "Rania Putri",
    role: "Product Designer - 3 tahun di Huniaja",
    initial: "R",
    color: "#0025F5",
    quote:
      "Aku masuk sebagai junior designer yang gugup buka Figma di meeting. Sekarang aku memimpin desain fitur KPR yang dipakai ribuan keluarga muda. Huniaja bukan cuma tempat kerja - ini tempatku menemukan suara.",
  },
  {
    name: "Fajar Ramadhan",
    role: "Full-Stack Developer - 2 tahun di Huniaja",
    initial: "F",
    color: "#00B512",
    quote:
      "Dulu aku pikir ngoding cuma soal fitur jalan. Di sini aku belajar bahwa satu bug bisa bikin orang gagal beli rumah impiannya. Kode kami punya makna, dan itu yang bikin aku tetap semangat setiap pagi.",
  },
  {
    name: "Kirana Ayu",
    role: "Content Creator - 1.5 tahun di Huniaja",
    initial: "K",
    color: "#EC4899",
    quote:
      "Kata orang, kerja di startup properti itu kaku. Di Huniaja? Kita ketawa bareng, gagal bareng, sukses bareng. Tim ini seperti sahabat lama yang kebetulan satu kantor.",
  },
  {
    name: "Bagas Wicaksana",
    role: "Sales & BD - 4 tahun di Huniaja",
    initial: "B",
    color: "#F59E0B",
    quote:
      "Setiap deal yang kututup bukan angka - itu keluarga yang akhirnya bisa pindah dari kontrakan ke rumah sendiri. Huniaja mengajarkanku bahwa jualan yang baik adalah jualan yang menolong.",
  },
];

const daily = [
  {
    time: "08.30",
    Icon: Sunrise,
    title: "Pagi yang Hangat",
    desc: "Standup santai sambil ngopi. Tidak ada monolog atasan - hanya cerita progress dan tawa kecil sebelum mulai kerja.",
  },
  {
    time: "12.00",
    Icon: Coffee,
    title: "Makan Siang Bareng",
    desc: "Dari nasi padang sampai bento Jepang, meja kami adalah ruang kelas terbaik. Ide-ide besar sering lahir di antara suapan.",
  },
  {
    time: "15.00",
    Icon: Flame,
    title: "Deep Work Time",
    desc: "Notifikasi Slack di-mute. Musik favorit menyala. Ini jam sakral - saat karya terbaik dilahirkan tanpa gangguan.",
  },
  {
    time: "17.30",
    Icon: Handshake,
    title: "Retrospektif Kecil",
    desc: "Sebelum pulang, kami saling apresiasi. Bukan formalitas - sungguhan. Karena setiap hari layak dirayakan.",
  },
];

const values = [
  {
    Icon: Heart,
    title: "Empati Dulu",
    desc: "Kami mendengarkan sebelum membangun. Karena setiap listing adalah mimpi seseorang.",
    color: "#EC4899",
  },
  {
    Icon: Sparkles,
    title: "Berani Berbeda",
    desc: "Kami bukan portal properti biasa. Kami menantang status quo dengan berani dan bertanggung jawab.",
    color: "#F59E0B",
  },
  {
    Icon: Handshake,
    title: "Tumbuh Bersama",
    desc: "Kemenangan bukan milik individu. Kami menang, gagal, dan belajar - selalu bersama.",
    color: "#00B512",
  },
  {
    Icon: Star,
    title: "Kualitas Tanpa Kompromi",
    desc: "Detail kecil adalah bahasa cinta kami untuk pengguna. Baik pixel maupun kata, kami selesaikan dengan hati.",
    color: "#0025F5",
  },
];

export default function KarirPage() {
  const [openJob, setOpenJob] = useState(null);
  const [talentOpen, setTalentOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(defaultForm());

  function defaultForm() {
    return { name: "", email: "", phone: "", resume: "", message: "" };
  }

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm(defaultForm());
    setTimeout(() => {
      setSent(false);
      setOpenJob(null);
      setTalentOpen(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-[#0025F5] text-white overflow-hidden pt-16 md:pt-20 pb-16 md:pb-24">
        <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full bg-[#00B512]/25 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> KARIR DI HUNIAJA
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-4">
            Setiap bab hebat<br className="hidden md:block" /> dimulai dari halaman pertama.
          </h1>
          <p className="mt-5 text-sm md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Ini bukan sekadar lowongan. Ini undangan untuk menulis babmu sendiri
            dalam kisah besar Huniaja - kisah tentang keluarga Indonesia yang
            akhirnya menemukan rumah, dan tim yang berani mewujudkannya.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#openings"
              className="bg-[#00B512] hover:bg-[#009e0f] text-[#0025F5] font-bold rounded-full px-6 py-3 text-sm shadow-lg transition"
            >
              Mulai Babmu
            </a>
            <button
              onClick={() => setTalentOpen(true)}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold rounded-full px-6 py-3 text-sm transition"
            >
              Daftar Talent Pool
            </button>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="bg-white py-14 md:py-16 -mt-8 md:-mt-12">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {perks.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-lg transition p-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <p.Icon className="w-6 h-6 text-[#0025F5]" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-slate-900 mt-4">{p.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Note - Emotional Opening */}
      <section className="bg-white pb-14 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="relative bg-gradient-to-br from-slate-50 to-blue-50/40 rounded-[36px] p-8 md:p-12 border border-slate-100">
            <Quote className="absolute top-6 left-6 md:top-8 md:left-8 w-10 h-10 md:w-14 md:h-14 text-[#0025F5]/15" strokeWidth={2.5} />
            <p className="relative text-base md:text-xl text-slate-700 leading-relaxed font-medium italic pl-4 md:pl-8">
              "Kami tidak sedang membangun perusahaan. Kami sedang membangun
              tempat di mana orang berani datang dengan seluruh dirinya - dengan
              mimpi, ketakutan, dan ide-ide gilanya - lalu pulang dengan rasa
              bangga. Kalau kamu percaya rumah bukan sekadar bangunan, mungkin
              kamu memang milik kami."
            </p>
            <div className="mt-6 pl-4 md:pl-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0025F5] text-white font-black flex items-center justify-center text-sm">
                H
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">Tim Founder Huniaja</div>
                <div className="text-xs text-slate-500">Untukmu yang sedang membaca ini</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Chapters - Journey */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block bg-white text-[#0025F5] text-[11px] font-bold rounded-full px-3 py-1 tracking-widest border border-blue-100">
              PERJALANANMU BERSAMA KAMI
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
              Empat bab yang akan mengubah cara<br className="hidden md:block" />
              kamu memandang kerja.
            </h2>
          </div>

          <div className="relative">
            {/* connecting line desktop */}
            <div className="hidden md:block absolute top-14 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0025F5]/20 via-[#00B512]/30 to-[#7C3AED]/20" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6 relative">
              {chapters.map((c, idx) => (
                <div
                  key={c.step}
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-6 relative"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10 shadow-md"
                    style={{ backgroundColor: c.color }}
                  >
                    <c.Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <div className="text-[10px] font-black tracking-[0.2em] mt-4" style={{ color: c.color }}>
                    {c.step}
                  </div>
                  <h3 className="font-black text-slate-900 mt-1 text-lg md:text-xl">
                    {c.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kisah Nyata - Testimoni */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              HUNIAJA FAMILY
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
              Cerita mereka yang<br className="hidden md:block" />
              menemukan rumah keduanya di sini.
            </h2>
            <p className="text-sm md:text-base text-slate-500 mt-3 max-w-2xl mx-auto">
              Bukan brosur, bukan iklan - ini kata-kata jujur dari teman-teman
              yang sudah lebih dulu menulis babnya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {stories.map((s) => (
              <div
                key={s.name}
                className="bg-gradient-to-br from-white to-slate-50/70 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md p-6 md:p-7 transition"
              >
                <Quote
                  className="w-8 h-8 mb-3"
                  style={{ color: s.color }}
                  strokeWidth={2.5}
                />
                <p className="text-sm md:text-base text-slate-700 leading-relaxed italic">
                  "{s.quote}"
                </p>
                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-base shadow-md"
                    style={{ backgroundColor: s.color }}
                  >
                    {s.initial}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      {s.name}
                    </div>
                    <div className="text-xs text-slate-500">{s.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sehari Bersama Kami */}
      <section className="bg-[#0025F5] text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#00B512]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#00B512]/20 blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block bg-white/10 border border-white/20 text-white text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              SEHARI BERSAMA KAMI
            </span>
            <h2 className="text-2xl md:text-4xl font-black mt-4 leading-tight">
              Bukan grind culture.<br className="hidden md:block" />
              Ini ritme kerja yang manusiawi.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {daily.map((d) => (
              <div
                key={d.time}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-6 hover:bg-white/15 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-[#00B512] flex items-center justify-center">
                    <d.Icon className="w-5 h-5 text-[#0025F5]" strokeWidth={2.5} />
                  </div>
                  <span className="text-xs font-black tracking-widest text-[#00B512]">
                    {d.time}
                  </span>
                </div>
                <h4 className="font-black mt-4 text-base md:text-lg">{d.title}</h4>
                <p className="text-xs md:text-sm text-white/80 mt-2 leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nilai Kami */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              NILAI YANG KAMI PEGANG
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
              Empat kata yang kami tulis<br className="hidden md:block" />
              di dinding hati, bukan di dinding kantor.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="group relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl p-6 transition-all overflow-hidden"
              >
                <div
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: v.color }}
                />
                <div
                  className="relative w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${v.color}15` }}
                >
                  <v.Icon className="w-6 h-6" style={{ color: v.color }} strokeWidth={2} />
                </div>
                <h3 className="relative font-black text-slate-900 mt-4 text-lg">
                  {v.title}
                </h3>
                <p className="relative text-sm text-slate-600 mt-2 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridge to Openings */}
      <section className="bg-slate-50 py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-[#00B512] text-[#0025F5] rounded-full px-4 py-1.5 text-[11px] font-black tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> SIAP TULIS BAB BARUMU?
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-4">
            Halaman kosong ini menunggu tandatanganmu.
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-3">
            Pilih peran yang paling menggetarkan hatimu di bawah ini - kami akan
            membaca setiap lamaran dengan sungguh-sungguh.
          </p>
          <a
            href="#openings"
            className="inline-block mt-6 bg-[#0025F5] hover:bg-[#001fd1] text-white font-bold rounded-full px-7 py-3 text-sm shadow-lg transition"
          >
            Lihat Lowongan di Bawah ↓
          </a>
        </div>
      </section>

      {/* Job Openings - Cards */}
      <section id="openings" className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                Lowongan Terbuka
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                {jobs.length} posisi menanti kamu.
              </p>
            </div>
            <button
              onClick={() => setTalentOpen(true)}
              className="text-sm font-semibold text-[#0025F5] hover:underline text-left md:text-right"
            >
              Tidak menemukan posisimu? Daftar Talent Pool ->
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {jobs.map((j) => (
              <div
                key={j.code}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 p-5 md:p-6 transition-all flex flex-col"
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${j.color}15` }}
                  >
                    <j.Icon
                      className="w-6 h-6"
                      style={{ color: j.color }}
                      strokeWidth={2}
                    />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest bg-slate-100 text-slate-600 rounded-full px-2 py-1">
                    {j.code}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 mt-4 text-base md:text-lg leading-tight">
                  {j.position}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed flex-1">
                  {j.desc}
                </p>
                <div className="flex items-center gap-3 mt-4 text-xs text-slate-600">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {j.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                    {j.type}
                  </span>
                </div>
                <Button
                  onClick={() => setOpenJob(j)}
                  className="w-full mt-5 bg-[#00B512] hover:bg-[#009e0f] text-white rounded-full font-bold h-11 text-sm"
                >
                  Lamar Sekarang
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="bg-[#0025F5] text-white rounded-[36px] md:rounded-[44px] relative overflow-hidden p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl md:text-2xl font-bold">
                Belum menemukan posisi yang cocok?
              </h3>
              <p className="text-sm md:text-base text-white/85 mt-2 max-w-xl">
                Daftar di Talent Pool kami dan jadi yang pertama tahu saat
                peluang baru dibuka. Kami akan menghubungi ketika ada peran
                yang cocok denganmu.
              </p>
            </div>
            <div className="flex md:justify-end">
              <button
                onClick={() => setTalentOpen(true)}
                className="bg-[#00B512] hover:bg-[#009e0f] text-[#0025F5] font-bold rounded-full px-6 py-3 text-sm shadow-lg transition"
              >
                Daftar Talent Pool
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Apply Modal */}
      <Dialog
        open={!!openJob}
        onOpenChange={(v) => !v && setOpenJob(null)}
      >
        <DialogContent className="max-w-lg rounded-3xl">
          <DialogHeader>
            <div className="flex items-center gap-3">
              {openJob && (
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${openJob.color}15` }}
                >
                  <openJob.Icon
                    className="w-5 h-5"
                    style={{ color: openJob.color }}
                  />
                </div>
              )}
              <div>
                <DialogTitle className="text-lg">
                  {openJob ? `Lamar: ${openJob.position}` : "Lamar"}
                </DialogTitle>
                <DialogDescription className="text-xs">
                  {openJob ? `Kode: ${openJob.code} • ${openJob.location}` : ""}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <ApplyForm
            form={form}
            handle={handle}
            submit={submit}
            sent={sent}
            positionLabel={openJob?.position}
          />
        </DialogContent>
      </Dialog>

      {/* Talent Pool Modal */}
      <Dialog
        open={talentOpen}
        onOpenChange={setTalentOpen}
      >
        <DialogContent className="max-w-lg rounded-3xl">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#0025F5]" />
              </div>
              <div>
                <DialogTitle className="text-lg">
                  Daftar Talent Pool Huniaja
                </DialogTitle>
                <DialogDescription className="text-xs">
                  Kami akan menghubungi saat ada peluang yang cocok.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <ApplyForm
            form={form}
            handle={handle}
            submit={submit}
            sent={sent}
            positionLabel="Talent Pool"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ApplyForm({ form, handle, submit, sent, positionLabel }) {
  return (
    <form onSubmit={submit} className="space-y-3 mt-2">
      <Input
        name="name"
        placeholder="Nama Lengkap"
        value={form.name}
        onChange={handle}
        required
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handle}
          required
        />
        <Input
          name="phone"
          placeholder="Nomor WhatsApp"
          value={form.phone}
          onChange={handle}
          required
        />
      </div>
      <Input
        name="resume"
        placeholder="Link CV / Portofolio (Google Drive, LinkedIn...)"
        value={form.resume}
        onChange={handle}
      />
      <textarea
        name="message"
        placeholder={
          positionLabel
            ? `Ceritakan kenapa kamu cocok untuk ${positionLabel}...`
            : "Ceritakan singkat tentang dirimu"
        }
        rows={4}
        value={form.message}
        onChange={handle}
        className="w-full rounded-2xl border border-slate-200 focus:border-[#0025F5] focus:ring-1 focus:ring-[#0025F5] outline-none px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400"
      />
      <Button
        type="submit"
        className="w-full bg-[#0025F5] hover:bg-[#001fd1] text-white rounded-full font-bold h-11 text-sm"
      >
        <Send className="w-4 h-4 mr-2" /> Kirim Lamaran
      </Button>
      {sent && (
        <div className="flex items-center justify-center gap-2 text-sm text-[#00B512] font-semibold pt-1">
          <Check className="w-4 h-4" /> Lamaran terkirim! Kami akan menghubungi
          Anda.
        </div>
      )}
    </form>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-full border border-slate-200 focus:border-[#0025F5] focus:ring-1 focus:ring-[#0025F5] outline-none px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400"
    />
  );
}
