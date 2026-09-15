import React, { useState } from "react";
import {
  Handshake,
  Megaphone,
  Building2,
  Users,
  Sparkles,
  Check,
  Send,
  Mail,
  Phone,
  Quote,
  TrendingUp,
  Target,
  Heart,
  Rocket,
  Award,
  ArrowRight,
  Star,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhyHuniaja from "../components/WhyHuniaja";
import { Button } from "../components/ui/button";
import { WA_URL } from "../components/ChatWidget";

const HERO_IMG =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=85";

const partnerships = [
  {
    Icon: Megaphone,
    title: "Paid Partnership",
    desc: "Kerja sama iklan bersponsor, listing prioritas, dan campaign co-marketing untuk brand Anda.",
    perks: ["Konten bersponsor", "Iklan prioritas", "Laporan performa"],
    color: "#001DF3",
  },
  {
    Icon: Handshake,
    title: "Co-Branding",
    desc: "Bangun kampanye bersama Huniaja lewat konten kolaboratif, event, dan program eksklusif.",
    perks: ["Event bersama", "Konten kolaboratif", "Distribusi ke jaringan kami"],
    color: "#000066",
  },
  {
    Icon: Building2,
    title: "Developer Partnership",
    desc: "Pasarkan proyek properti Anda langsung ke jutaan pencari properti aktif.",
    perks: ["Halaman proyek dedicated", "Leads berkualitas", "Priority listing"],
    color: "#00B512",
  },
  {
    Icon: Users,
    title: "Affiliate & Agent",
    desc: "Bergabung menjadi agen atau afiliasi resmi Huniaja dan dapatkan komisi kompetitif.",
    perks: ["Komisi hingga 80%", "Dashboard tracking", "Support pelatihan"],
    color: "#00B512",
  },
];

const partnerStories = [
  {
    name: "Bank Mitra Nusantara",
    role: "Bank Partner KPR",
    initial: "BMN",
    color: "#001DF3",
    stat: "Rp 850M",
    statLabel: "Total disburse KPR",
    quote:
      "Kolaborasi dengan Huniaja mengubah cara kami menyalurkan KPR. Kualitas leads mereka luar biasa - 3 dari 4 pengajuan langsung approved. Ini bukan sekadar partnership, ini simbiosis yang saling menguntungkan.",
  },
  {
    name: "PT Sinar Hunian",
    role: "Developer Cluster",
    initial: "SH",
    color: "#00B512",
    stat: "12 proyek",
    statLabel: "Sold-out dalam 8 bulan",
    quote:
      "Kami pernah ragu karena biaya marketing digital yang mahal. Sejak partner dengan Huniaja, cost per acquisition turun 60%. Tim mereka hangat, cepat, dan yang penting - mereka mengerti bisnis properti.",
  },
  {
    name: "Bu Rina - Affiliate Star",
    role: "Top Agent Launching",
    initial: "R",
    color: "#00B512",
    stat: "Rp 380Jt",
    statLabel: "Komisi bulan pertama",
    quote:
      "Saya ibu rumah tangga biasa. Dari share link Huniaja di grup WhatsApp, sekarang saya bisa bantu ekonomi keluarga tanpa meninggalkan anak. Huniaja tidak cuma platform - mereka mengubah hidup saya.",
  },
];

const whyPartner = [
  {
    Icon: Target,
    title: "Audiens yang Fokus",
    desc: "Ribuan pencari properti aktif sejak hari pertama launching. Bukan traffic sampah - ini orang-orang yang sedang siap beli, jual, atau sewa properti.",
  },
  {
    Icon: Heart,
    title: "Tim yang Peduli",
    desc: "Kami bukan sales agressif. Tim BD kami mendengarkan kebutuhan bisnismu dulu, baru merancang kolaborasi yang tepat.",
  },
  {
    Icon: Rocket,
    title: "Eksekusi Cepat",
    desc: "Dari proposal ke launch dalam 14 hari kerja. Kami tahu waktu adalah uang - kami tidak akan mengulur-ulur.",
  },
  {
    Icon: Award,
    title: "Transparansi Data",
    desc: "Dashboard real-time menunjukkan performa kampanye setiap detik. Tidak ada laporan hantu, tidak ada janji kosong.",
  },
];

const timeline = [
  {
    step: "01",
    title: "Kenalan & Diskusi",
    desc: "Kami dengarkan tujuan, target, dan batasanmu. Bukan pitch produk - ini sesi memahami.",
    Icon: Mail,
    color: "#001DF3",
  },
  {
    step: "02",
    title: "Rancang Skema Bersama",
    desc: "Tim kami membuat proposal customized dalam 3 hari kerja. Kamu setuju, kami mulai. Tidak setuju, kami revisi.",
    Icon: Sparkles,
    color: "#00B512",
  },
  {
    step: "03",
    title: "Launch & Optimasi",
    desc: "Kampanye jalan, data mengalir, dan kami optimasi setiap minggu. Kamu akan tahu setiap perkembangan.",
    Icon: Rocket,
    color: "#00B512",
  },
  {
    step: "04",
    title: "Evaluasi & Tumbuh",
    desc: "Setiap 3 bulan, kita duduk bersama, review hasil, dan rancang chapter berikutnya. Kolaborasi jangka panjang, bukan one-off.",
    Icon: TrendingUp,
    color: "#000066",
  },
];

const stats = [
  { value: "15", label: "Developer Partner" },
  { value: "12", label: "Kota Terjangkau" },
  { value: "5", label: "Bank Penyalur KPR" },
  { value: "500+", label: "Listing Aktif" },
];

export default function KerjasamaPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: "Paid Partnership",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      type: "Paid Partnership",
      message: "",
    });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO - cinematic */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900" />
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#001DF3]/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#00B512]/25 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest">
              <Handshake className="w-3.5 h-3.5" /> AJAK KAMI TUMBUH BERSAMA
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mt-6 leading-[1.05]">
              Kami tidak mencari klien.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B512] to-[#00B512]">
                Kami mencari mitra.
              </span>
            </h1>
            <p className="mt-6 text-base md:text-xl text-white/85 leading-relaxed max-w-2xl">
              Setiap partnership yang kami bangun adalah komitmen jangka
              panjang - bukan transaksi cepat. Kalau kamu percaya bahwa
              kolaborasi terbaik lahir dari saling percaya, kita sudah punya
              satu kesamaan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#form"
                data-testid="kerjasama-hero-cta"
                className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-full px-6 py-3 text-sm shadow-lg transition"
              >
                Ajukan Kerja Sama <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={WA_URL()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur hover:bg-white/20 text-white border border-white/25 font-bold rounded-full px-6 py-3 text-sm transition"
              >
                Bicara Langsung via WA
              </a>
            </div>
          </div>

          {/* stats */}
          <div className="mt-14 md:mt-20 bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-black text-white">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-white/70 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <Quote
            className="w-14 h-14 md:w-20 md:h-20 text-[#001DF3]/10 mx-auto"
            strokeWidth={2.5}
          />
          <p className="text-2xl md:text-4xl font-black text-slate-900 leading-tight mt-6 tracking-tight">
            "Partnership terbaik dimulai dari{" "}
            <span className="text-[#001DF3]">
              rasa hormat
            </span>
            , dilanjutkan dengan{" "}
            <span className="text-[#00B512]">kejujuran</span>, dan diakhiri
            dengan pertumbuhan yang saling merayakan."
          </p>
          <div className="mt-6 inline-flex items-center gap-3">
            <div className="w-12 h-px bg-slate-300" />
            <span className="text-xs font-bold text-slate-500 tracking-widest">
              FILOSOFI KEMITRAAN KAMI
            </span>
            <div className="w-12 h-px bg-slate-300" />
          </div>
        </div>
      </section>

      {/* Why Partner - 4 reasons */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-white text-[#001DF3] text-[11px] font-bold rounded-full px-3 py-1 tracking-widest border border-blue-100">
              MENGAPA HUNIAJA?
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
              Empat alasan mereka<br className="md:hidden" />{" "}
              memilih kami<br className="hidden md:block" />
              <span className="text-[#00B512]">
                dan tidak pernah menoleh ke belakang.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {whyPartner.map((w, i) => (
              <div
                key={w.title}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-7 flex gap-5"
              >
                <div className="text-[38px] font-black text-slate-100 leading-none w-16 shrink-0">
                  0{i + 1}
                </div>
                <div className="flex-1">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center mb-3">
                    <w.Icon
                      className="w-5 h-5 text-[#001DF3]"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="font-black text-slate-900 text-lg">
                    {w.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              BENTUK KEMITRAAN
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
              Pilih ceritamu.<br className="md:hidden" />{" "}
              Kami sesuaikan panggungnya.
            </h2>
            <p className="text-sm md:text-base text-slate-500 mt-3 max-w-2xl mx-auto">
              Setiap partner punya cerita berbeda. Empat bentuk kolaborasi ini
              adalah titik awal - detailnya kita rancang bersama.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {partnerships.map((p) => (
              <div
                key={p.title}
                className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 p-6 transition-all relative overflow-hidden"
              >
                <div
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-10 transition-opacity"
                  style={{ backgroundColor: p.color }}
                />
                <div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                  style={{ backgroundColor: p.color }}
                >
                  <p.Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="relative font-black text-slate-900 mt-4 text-lg">
                  {p.title}
                </h3>
                <p className="relative text-xs md:text-sm text-slate-500 mt-2 leading-relaxed">
                  {p.desc}
                </p>
                <ul className="relative mt-4 space-y-1.5 text-xs md:text-sm">
                  {p.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-center gap-2 text-slate-700"
                    >
                      <Check
                        className="w-3.5 h-3.5 text-[#00B512] shrink-0"
                        strokeWidth={3}
                      />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Stories - testimonials */}
      <section className="bg-slate-100 text-slate-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#001DF3]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#00B512]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-white border border-slate-200 text-[#000066] text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              CERITA MEREKA
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 leading-tight text-[#000066]">
              Bukan angka.<br className="md:hidden" />{" "}
              <span className="text-[#00B512]">Cerita orang.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 mt-4 max-w-2xl mx-auto">
              Setiap partner kami punya perjalanan sendiri di Huniaja. Ini
              beberapa yang bersedia berbagi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {partnerStories.map((s) => (
              <div
                key={s.name}
                className="bg-white border border-slate-200 rounded-3xl p-6 md:p-7 hover:shadow-lg hover:border-slate-300 transition flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <Quote
                    className="w-8 h-8"
                    style={{ color: s.color }}
                    strokeWidth={2.5}
                  />
                  <div className="text-right">
                    <div
                      className="text-2xl font-black"
                      style={{ color: s.color }}
                    >
                      {s.stat}
                    </div>
                    <div className="text-[10px] text-slate-500 tracking-wide">
                      {s.statLabel}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic mt-4 flex-1">
                  "{s.quote}"
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200 flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-sm shadow-md shrink-0"
                    style={{ backgroundColor: s.color }}
                  >
                    {s.initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-[#000066] truncate">{s.name}</div>
                    <div className="text-xs text-slate-500 truncate">
                      {s.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Process */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              ALUR KEMITRAAN
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
              Empat langkah.<br className="md:hidden" />{" "}
              <span className="text-[#001DF3]">Empat belas hari.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-500 mt-3 max-w-2xl mx-auto">
              Dari kenalan pertama hingga kampanye pertama - kami tidak suka
              proses berlarut-larut.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#001DF3]/20 via-[#00B512]/30 to-[#000066]/20" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6 relative">
              {timeline.map((t) => (
                <div
                  key={t.step}
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-6 relative"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10 shadow-md"
                    style={{ backgroundColor: t.color }}
                  >
                    <t.Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <div
                    className="text-[11px] font-black tracking-[0.2em] mt-4"
                    style={{ color: t.color }}
                  >
                    LANGKAH {t.step}
                  </div>
                  <h3 className="font-black text-slate-900 mt-1 text-lg leading-tight">
                    {t.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyHuniaja />

      {/* Form */}
      <section id="form" className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <span className="inline-block bg-white text-[#001DF3] text-[11px] font-bold rounded-full px-3 py-1 tracking-widest border border-blue-100">
              MULAI PERCAKAPAN
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
              Ceritakan visi kamu.<br className="md:hidden" />{" "}
              <span className="text-[#00B512]">Kami mendengarkan.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-500 mt-3 max-w-xl mx-auto">
              Isi form berikut, atau langsung chat kami di WhatsApp. Tim
              Business Development kami akan menghubungi Anda dalam 2x24 jam
              kerja.
            </p>
          </div>

          <div className="bg-white rounded-[32px] shadow-xl border border-slate-100 p-6 md:p-10">
            <form onSubmit={submit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Input
                  name="name"
                  placeholder="Nama Lengkap"
                  value={form.name}
                  onChange={handle}
                  data-testid="kerjasama-input-name"
                />
                <Input
                  name="company"
                  placeholder="Nama Perusahaan / Brand"
                  value={form.company}
                  onChange={handle}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handle}
                />
                <Input
                  name="phone"
                  placeholder="Nomor WhatsApp"
                  value={form.phone}
                  onChange={handle}
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600">
                  Jenis Kerja Sama
                </label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handle}
                  className="mt-1 w-full rounded-full border border-slate-200 focus:border-[#001DF3] focus:ring-1 focus:ring-[#001DF3] outline-none px-4 py-3 text-sm text-slate-800 bg-white"
                >
                  {partnerships.map((p) => (
                    <option key={p.title}>{p.title}</option>
                  ))}
                  <option>Lainnya</option>
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Ceritakan visi, target audiens, dan timeline yang kamu bayangkan..."
                rows={5}
                value={form.message}
                onChange={handle}
                className="w-full rounded-2xl border border-slate-200 focus:border-[#001DF3] focus:ring-1 focus:ring-[#001DF3] outline-none px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400"
              />
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center pt-2">
                <p className="text-xs text-slate-500">
                  Datamu aman dan tidak akan dibagikan ke pihak ketiga.
                </p>
                <Button
                  type="submit"
                  data-testid="kerjasama-submit"
                  className="bg-[#00B512] hover:bg-[#009e0f] text-white rounded-full font-bold px-7 h-11 text-sm"
                >
                  <Send className="w-4 h-4 mr-2" /> Kirim Proposal
                </Button>
              </div>
              {sent && (
                <div className="flex items-center gap-2 text-sm text-[#00B512] font-semibold pt-2">
                  <Check className="w-4 h-4" /> Terima kasih! Proposal Anda
                  telah kami terima.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA strip */}
      <section className="bg-slate-100 text-slate-900 py-14 md:py-20 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#001DF3]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#00B512]/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 md:px-6 text-center">
          <Star className="w-10 h-10 text-[#00B512] mx-auto fill-[#00B512]" />
          <p className="text-2xl md:text-4xl font-black leading-tight mt-4 text-[#000066]">
            Ayo tumbuh bersama<br className="hidden md:block" />
            <span className="text-[#00B512]">Huniaja.com</span>
          </p>
          <p className="text-sm md:text-base text-slate-600 mt-4 max-w-xl mx-auto">
            Satu langkah kecil hari ini bisa jadi kolaborasi besar besok.
            Ceritakan ide kerjasamamu — tim kami siap dengar.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#form"
              className="bg-white border border-slate-200 text-[#000066] hover:bg-[#001DF3] hover:text-white hover:border-[#001DF3] font-bold rounded-full px-6 py-3 text-sm shadow-md transition"
            >
              Ajukan via Form
            </a>
            <a
              href={WA_URL(
                "Halo Huniaja, saya tertarik menjajaki peluang kerjasama."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00B512] hover:bg-[#009c10] text-white font-bold rounded-full px-6 py-3 text-sm shadow-lg transition"
            >
              Chat WhatsApp Sekarang
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-full border border-slate-200 focus:border-[#001DF3] focus:ring-1 focus:ring-[#001DF3] outline-none px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400"
    />
  );
}
