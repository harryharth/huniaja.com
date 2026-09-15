import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Home,
  Wind,
  Scissors,
  ShieldCheck,
  Star,
  Clock,
  BadgeCheck,
} from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { WA_URL } from "../../components/ChatWidget";

const HERO_IMG =
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=85";

const services = [
  {
    Icon: Home,
    title: "Home Cleaning",
    tagline: "Rumah wangi tanpa harus menyapu sendiri",
    desc: "Vacuum HEPA, mop microfiber, chemical aman untuk anak & hewan. Regular, deep clean, atau setelah renovasi.",
    price: "Mulai Rp 150.000",
    color: "#001DF3",
    tint: "#EEF2FF",
    features: ["Alat & chemical dibawa tim", "Aman untuk anak & pet", "Garansi puas — kalau kurang, ulang gratis"],
  },
  {
    Icon: Wind,
    title: "Service AC",
    tagline: "AC dingin lagi tanpa boros listrik",
    desc: "Cuci indoor + outdoor, isi freon, cek kompresor, dan diagnosa error. Semua brand — Daikin, Panasonic, Sharp, LG, Samsung.",
    price: "Mulai Rp 85.000/unit",
    color: "#00B512",
    tint: "#E7FBEA",
    features: ["Teknisi bersertifikat pabrik", "Freon original", "Garansi 30 hari kerja setelah service"],
  },
  {
    Icon: Scissors,
    title: "Potong Rumput",
    tagline: "Halaman terawat tiap minggu, tanpa ribet",
    desc: "Mesin potong profesional, buang sampah rumput, dan tim yang datang tepat waktu. Bisa langganan bulanan hemat.",
    price: "Mulai Rp 100.000",
    color: "#00B512",
    tint: "#E7FBEA",
    features: ["Mesin & bensin ditanggung tim", "Rumput dibuang tuntas", "Diskon 20% untuk langganan"],
  },
  {
    Icon: ShieldCheck,
    title: "Jaga Rumah",
    tagline: "Tenang tinggalkan rumah — kami yang jaga",
    desc: "Cek berkala 3-7 hari sekali saat kamu mudik atau dinas luar kota. Foto kondisi + laporan lengkap via WhatsApp.",
    price: "Mulai Rp 250.000/minggu",
    color: "#000066",
    tint: "#E5E5F0",
    features: ["Cek listrik, air, kebocoran", "Foto & laporan tiap kunjungan", "Response 15 menit kalau ada masalah"],
  },
];

const whyUs = [
  {
    Icon: BadgeCheck,
    title: "Mitra Terverifikasi",
    desc: "Semua tim sudah lolos background check, dilatih SOP hospitality, dan berseragam rapi saat datang.",
  },
  {
    Icon: Clock,
    title: "Datang Tepat Waktu",
    desc: "Kami komitmen datang di jam yang dijanjikan. Kalau telat >15 menit, ada kompensasi.",
  },
  {
    Icon: Star,
    title: "Garansi Puas",
    desc: "Tidak puas dengan hasilnya? Chat WhatsApp di hari yang sama — tim kembali gratis.",
  },
  {
    Icon: Sparkles,
    title: "Semua dalam Satu Chat",
    desc: "Cleaning, AC, rumput, jaga rumah — pesan lewat satu WhatsApp. Tidak perlu cari-cari vendor lain.",
  },
];

const testimonials = [
  {
    name: "Mbak Renata",
    place: "Grand Depok City",
    quote:
      "Awalnya cuma coba cleaning. Sekarang paket bulanan: cleaning tiap 2 minggu + AC service 3 bulan sekali. Hidupku jadi rapi.",
    rating: 5,
  },
  {
    name: "Pak Rizal",
    place: "Cikarang, Bekasi",
    quote:
      "Setelah renovasi rumah, deep cleaning + service AC + potong rumput langsung diurus dalam 1 hari. Efisien banget.",
    rating: 5,
  },
  {
    name: "Bu Vira",
    place: "Bintaro, Tangsel",
    quote:
      "Waktu mudik 2 minggu, saya pakai Jaga Rumah. Setiap 3 hari dapat foto kondisi rumah. Tenang banget di kampung.",
    rating: 5,
  },
];

export default function HomeServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Home Service" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#000066]/85 via-slate-900/70 to-[#001DF3]/70" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#00B512]" /> HOME SERVICE HUNIAJA
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mt-5 max-w-4xl">
            Semua urusan rumahmu — <span className="text-[#00B512]">satu WhatsApp</span>.
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl leading-relaxed">
            Cleaning, service AC, potong rumput, sampai jaga rumah pas kamu mudik.
            Empat layanan, satu tim tepercaya, harga transparan. Karena kamu
            harusnya bisa menikmati rumahmu — bukan sibuk mengurusnya.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={WA_URL("Halo Huniaja, saya mau pesan layanan Home Service.")}
              target="_blank" rel="noopener noreferrer"
              data-testid="homeservice-hero-cta"
              className="bg-[#00B512] hover:bg-[#009e0f] text-white font-bold rounded-full px-6 py-3 text-sm shadow-lg transition inline-flex items-center gap-2"
            >
              Pesan Sekarang <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white font-bold rounded-full px-6 py-3 text-sm transition">
              Lihat Layanan
            </a>
          </div>
        </div>
      </section>

      {/* 4 Services */}
      <section id="services" className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              4 LAYANAN UTAMA
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 leading-tight tracking-tight">
              Pilih yang kamu butuh —<br className="md:hidden"/>{" "}
              <span className="text-[#001DF3]">atau ambil semuanya</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                data-testid={`homeservice-card-${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all p-6 md:p-8 relative overflow-hidden"
              >
                <div className="absolute -top-14 -right-14 w-40 h-40 rounded-full opacity-[0.08] group-hover:opacity-[0.14] transition" style={{ backgroundColor: s.color }} />
                <div className="relative flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: s.tint }}>
                    <s.Icon className="w-7 h-7" style={{ color: s.color }} strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">{s.title}</h3>
                    <p className="text-sm font-semibold mt-1" style={{ color: s.color }}>{s.tagline}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">{s.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-slate-700">
                      <BadgeCheck className="w-4 h-4 mt-0.5 shrink-0" style={{ color: s.color }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-sm font-black text-slate-900">{s.price}</span>
                  <a
                    href={WA_URL(`Halo Huniaja, saya mau pesan ${s.title}.`)}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-white rounded-full px-4 py-2 transition"
                    style={{ backgroundColor: s.color }}
                  >
                    Pesan <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#001DF3]/8 text-[#001DF3] text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              KENAPA HUNIAJA
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              Bukan cuma tukang — <span className="text-[#00B512]">mitra rumah</span>.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-white rounded-3xl p-5 md:p-6 border border-slate-100 shadow-sm">
                <div className="w-11 h-11 rounded-2xl bg-[#001DF3]/10 flex items-center justify-center">
                  <w.Icon className="w-5 h-5 text-[#001DF3]" strokeWidth={2.4} />
                </div>
                <h3 className="font-black text-slate-900 mt-4 text-[15px] md:text-base">{w.title}</h3>
                <p className="text-xs md:text-sm text-slate-600 mt-1.5 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Kata mereka yang{" "}
              <span className="text-[#001DF3]">sudah tenang</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#00B512] text-[#00B512]" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">"{t.quote}"</p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <div className="text-sm font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{t.place}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="relative rounded-[36px] p-8 md:p-14 text-white overflow-hidden shadow-2xl"
            style={{ background: "linear-gradient(135deg, #001DF3 0%, #000066 100%)" }}>
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#00B512]/20 blur-3xl pointer-events-none" />
            <div className="relative grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8">
                <h2 className="text-2xl md:text-4xl font-black leading-tight">
                  Rumahmu layak dirawat oleh tim yang peduli.
                </h2>
                <p className="text-sm md:text-base text-white/85 mt-3 leading-relaxed">
                  Chat kami sekarang — respon &lt; 15 menit, jadwal fleksibel, harga transparan.
                </p>
              </div>
              <div className="md:col-span-4">
                <a href={WA_URL("Halo Huniaja, saya mau pesan Home Service.")}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full bg-white text-[#001DF3] hover:bg-slate-100 font-black rounded-full px-6 py-3.5 text-sm shadow-lg inline-flex items-center justify-center gap-2 transition">
                  Chat WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
