import React from "react";
import { Link } from "react-router-dom";
import {
  Check,
  ShieldCheck,
  Users,
  Sparkles,
  Rocket,
  BadgeCheck,
  Handshake,
  Lightbulb,
  Heart,
  Home,
  Target,
  Quote,
  Star,
  TrendingUp,
  Award,
  Compass,
  ArrowRight,
  MapPin,
  Building2,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { WA_URL } from "../components/ChatWidget";

// Premium editorial imagery
const HERO_BG =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=85";
const FOUNDER_IMG =
  "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=1000&q=85";
const TEAM_IMG =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=85";
const CULTURE_IMG =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85";
const CITY_IMG =
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1600&q=85";
const HANDSHAKE_IMG =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=85";

// Founder / Owner portrait — uploaded by client
const OWNER_IMG =
  "https://customer-assets-gfyr7b9c.emergentagent.net/job_branding-suite-6/artifacts/u7wrh4m8_image.png";

const stats = [
  { value: "500+", label: "Listing Aktif Sejak Launch" },
  { value: "15", label: "Developer Partner" },
  { value: "5", label: "Bank Penyalur KPR" },
  { value: "12", label: "Kota Terjangkau" },
];

const timeline = [
  {
    year: "2024",
    title: "Sebuah Percakapan di Warung Kopi",
    desc: "Empat sahabat gelisah melihat sepupu mereka gagal beli rumah karena tertipu agen. Malam itu, ide Huniaja lahir - sebuah janji bahwa siapapun berhak punya rumah dengan aman.",
    Icon: Lightbulb,
    color: "#00B512",
  },
  {
    year: "Awal 2025",
    title: "Riset & Validasi",
    desc: "Tim inti mulai turun ke lapangan — 3.000 keluhan pembeli rumah didokumentasikan, 15 developer & 5 bank diajak duduk bersama. Pola masalahnya jelas: transparansi hilang di setiap tahap transaksi.",
    Icon: Compass,
    color: "#001DF3",
  },
  {
    year: "Q2-Q3 2026",
    title: "Membangun Platform",
    desc: "Development platform intensif — AI matching engine, simulator KPR, verifikasi legalitas, dan chat 24/7. Modal patungan Rp 500 juta, tim inti 12 orang, dan target: launch di bulan kemerdekaan properti Indonesia.",
    Icon: Rocket,
    color: "#00B512",
  },
  {
    year: "9 September 2026",
    title: "Huniaja.com Resmi Online",
    desc: "Hari pertama publik bisa mengakses Huniaja. 500+ listing di 12 kota, 15 developer partner, 5 bank penyalur KPR. Hari itu, satu janji berubah jadi jalan yang bisa ditapaki bersama.",
    Icon: Sparkles,
    color: "#001DF3",
  },
  {
    year: "Sekarang",
    title: "Baru Saja Dimulai",
    desc: "Di beberapa minggu pertama pasca-launch, ratusan keluarga sudah mulai konsultasi. Tapi kami sadar — ini baru babak pembuka. Target 5 tahun: 100.000 keluarga Indonesia menemukan rumah pertama mereka lewat Huniaja.",
    Icon: Award,
    color: "#000066",
  },
];

const values = [
  {
    Icon: Heart,
    title: "Empati di Atas Segalanya",
    desc: "Setiap listing adalah mimpi seseorang. Setiap penolakan KPR adalah keluarga yang harus tetap kami temani. Empati bukan slogan - itu KPI kami.",
    color: "#000066",
  },
  {
    Icon: ShieldCheck,
    title: "Transparansi Tanpa Kompromi",
    desc: "Harga jelas, komisi jelas, legalitas jelas. Kami percaya kepercayaan dibangun dari kejujuran kecil, konsisten, setiap hari.",
    color: "#001DF3",
  },
  {
    Icon: Sparkles,
    title: "Inovasi yang Melayani",
    desc: "Teknologi bukan tujuan - itu alat. Setiap fitur AI, setiap update aplikasi, harus membuat hidupmu lebih mudah, bukan lebih rumit.",
    color: "#00B512",
  },
  {
    Icon: Handshake,
    title: "Tumbuh Bersama Komunitas",
    desc: "Kami bukan hanya platform. Kami adalah bagian dari ekosistem: agen, developer, pembeli, pemerintah. Kami menang saat semua orang menang.",
    color: "#00B512",
  },
];

const commitments = [
  {
    Icon: BadgeCheck,
    title: "100% Listing Terverifikasi",
    desc: "Setiap properti melewati proses verifikasi legalitas & fisik. Tidak ada listing yang lolos begitu saja.",
  },
  {
    Icon: Users,
    title: "Tim Support 7 Hari Seminggu",
    desc: "Kami tahu urusan properti tidak kenal hari libur. Tim Dea siap menemani kamu kapan saja.",
  },
  {
    Icon: Target,
    title: "Zero Toleransi Penipuan",
    desc: "Sistem deteksi penipuan berlapis, tim legal internal, dan proteksi pembeli - untuk memastikan kamu selalu aman.",
  },
];

const founders = [
  {
    name: "Reza Pratama",
    role: "CEO & Co-Founder",
    initial: "R",
    color: "#001DF3",
    quote: "Rumah bukan tentang bata dan semen. Ini tentang tempat di mana anak-anak kita tumbuh, di mana kita menua bersama orang yang kita cintai. Membangun Huniaja adalah cara saya memastikan lebih banyak keluarga bisa punya cerita seperti itu.",
  },
  {
    name: "Sinta Larasati",
    role: "COO & Co-Founder",
    initial: "S",
    color: "#000066",
    quote: "Saya percaya operasional adalah cinta yang diterjemahkan ke sistem. Setiap SOP kami tulis dengan pertanyaan sederhana: apakah ini akan membuat pengguna kami merasa dihargai?",
  },
  {
    name: "Bagas Wicaksana",
    role: "CTO & Co-Founder",
    initial: "B",
    color: "#00B512",
    quote: "Teknologi terbaik adalah yang tidak terlihat. Kalau pengguna kami tidak sadar bahwa ada AI, machine learning, dan sistem canggih di balik pengalaman mereka - artinya kami berhasil.",
  },
  {
    name: "Kirana Ayu",
    role: "CMO & Co-Founder",
    initial: "K",
    color: "#00B512",
    quote: "Marketing kami bukan tentang manipulasi. Ini tentang bercerita jujur - tentang keluarga muda, tentang rumah pertama, tentang harapan. Cerita jujur selalu menang di akhir.",
  },
];

export default function TentangKamiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO - Cinematic */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-6 pt-20 md:pt-32 pb-24 md:pb-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest">
              <Home className="w-3.5 h-3.5" /> CERITA HUNIAJA
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mt-6 leading-[1.05]">
              Kami tidak menjual rumah.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B512] to-[#00B512]">
                Kami menemani orang pulang.
              </span>
            </h1>
            <p className="mt-6 text-base md:text-xl text-white/85 leading-relaxed max-w-2xl">
              Resmi hadir sejak <strong className="text-white">9 September 2026</strong>,
              Huniaja adalah jembatan baru antara mimpi punya rumah dan kunci
              pintu yang beneran ada di tanganmu. Ini bukan sekadar platform
              properti — ini adalah cara kami menemani ribuan keluarga
              Indonesia pulang, dengan aman.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/cari-properti"
                data-testid="tk-hero-cta-cari"
                className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-full px-6 py-3 text-sm shadow-lg transition"
              >
                Mulai Cari Rumah <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={WA_URL()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur hover:bg-white/20 text-white border border-white/25 font-bold rounded-full px-6 py-3 text-sm transition"
              >
                Bicara dengan Kami
              </a>
            </div>
          </div>

          {/* Floating stats card */}
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

      {/* Manifesto - Opening quote */}
      <section className="bg-white py-20 md:py-28 relative">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <Quote className="w-16 h-16 md:w-20 md:h-20 text-[#001DF3]/10 mx-auto" strokeWidth={2.5} />
          <p className="text-2xl md:text-4xl font-black text-slate-900 leading-tight mt-6 tracking-tight">
            "Rumah pertama adalah{" "}
            <span className="text-[#001DF3]">tempat mimpi menjadi alamat</span>.
            Kami di sini untuk memastikan alamat itu bukan sekadar angka - tapi
            awal dari babak terbaik dalam hidupmu."
          </p>
          <div className="mt-8 inline-flex items-center gap-3">
            <div className="w-12 h-px bg-slate-300" />
            <span className="text-sm font-bold text-slate-600 tracking-widest">
              MANIFESTO HUNIAJA
            </span>
            <div className="w-12 h-px bg-slate-300" />
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-2 relative">
            <div className="rounded-[36px] overflow-hidden shadow-2xl">
              <img
                src={FOUNDER_IMG}
                alt="Founding story"
                className="w-full h-96 md:h-[520px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#001DF3] flex items-center justify-center">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">
                    4,9
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Google Play Rating
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="inline-block bg-white border border-slate-200 text-[#001DF3] text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              BAGAIMANA KAMI DIMULAI
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
              Dari empat sahabat<br />
              yang gelisah, jadi tempat<br />
              pulang yang aman.
            </h2>
            <div className="mt-6 space-y-4 text-[15px] md:text-base text-slate-700 leading-[1.85]">
              <p>
                Tahun 2024, sepupu Reza tertipu Rp 200 juta oleh agen
                properti palsu. Cerita itu bukan pengecualian — itu potret
                harian di Indonesia. Malam itu, di sebuah warung kopi kecil
                di Bogor, empat sahabat bersumpah: mereka akan membangun
                sesuatu yang lebih baik.
              </p>
              <p>
                Butuh hampir dua tahun riset, patungan modal Rp 500 juta, dan
                puluhan kali gagal prototype. Kami tidak mau launching cepat —
                kami mau launching benar. Karena rumah bukan barang yang bisa
                dites lalu dikembalikan.
              </p>
              <p>
                <span className="font-bold text-slate-900">Tanggal 9 September 2026, Huniaja resmi online untuk publik.</span>{" "}
                Satu janji yang lahir di warung kopi akhirnya jadi platform
                yang bisa ditapaki bersama. Kami baru mulai — dan itulah yang
                bikin kami semangat setiap pagi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Journey */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14 md:mb-20">
            <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              PERJALANAN KAMI
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 leading-tight">
              Tujuh tahun.<br className="md:hidden" />{" "}
              <span className="text-[#001DF3]">Ribuan cerita.</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#001DF3]/20 via-[#00B512]/30 to-[#000066]/20 -translate-x-1/2" />

            <div className="space-y-8 md:space-y-16">
              {timeline.map((t, idx) => (
                <div
                  key={t.year}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center ${
                    idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className={idx % 2 === 1 ? "md:text-right" : ""}>
                    <div
                      className="inline-flex items-center gap-3 mb-3"
                      style={{ color: t.color }}
                    >
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                        style={{ backgroundColor: t.color }}
                      >
                        <t.Icon className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>
                      <span className="text-5xl md:text-6xl font-black tracking-tight">
                        {t.year}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 mt-3">
                      {t.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 mt-3 leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                  <div className="hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Owner Spotlight — Message from the Founder */}
      <section
        className="bg-white py-16 md:py-24 relative overflow-hidden"
        data-testid="owner-spotlight"
      >
        <div
          aria-hidden
          className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#001DF3]/8 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#00B512]/10 blur-3xl pointer-events-none"
        />

        <div className="relative max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Portrait — compact */}
            <div className="md:col-span-4">
              <div className="relative mx-auto md:mx-0 w-52 md:w-60">
                {/* Decorative offset frame */}
                <div
                  aria-hidden
                  className="absolute -top-3 -left-3 w-full h-full rounded-[28px] border-2 border-[#001DF3]"
                />
                <div
                  aria-hidden
                  className="absolute -bottom-3 -right-3 w-full h-full rounded-[28px] bg-[#00B512]/12"
                />
                <div className="relative rounded-[28px] overflow-hidden shadow-xl bg-slate-900">
                  <img
                    src={OWNER_IMG}
                    alt="Portrait pendiri Huniaja"
                    className="w-full h-64 md:h-72 object-cover"
                    data-testid="owner-portrait"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-2 md:-right-3 bg-white rounded-2xl shadow-xl border border-slate-100 px-3 py-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#001DF3] flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" strokeWidth={2.4} />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                      Sejak 9 Sep 2026
                    </div>
                    <div className="text-[11px] font-black text-slate-900">
                      Rumah untuk semua
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-8">
              <span className="inline-block bg-[#001DF3]/8 text-[#001DF3] text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
                PESAN DARI PENDIRI
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 leading-[1.1] tracking-tight">
                "Rumah adalah aset paling personal —{" "}
                <span className="text-[#001DF3]">
                  keputusannya seharusnya diambil dengan tenang, bukan tergesa.
                </span>
                "
              </h2>

              <div className="mt-7 space-y-4 text-slate-600 text-[15px] md:text-base leading-relaxed">
                <p>
                  Membeli rumah adalah salah satu keputusan finansial terbesar
                  dalam hidup seseorang. Tapi di Indonesia, prosesnya sering
                  terasa seperti tebak-tebakan — harga tidak transparan,
                  legalitas rumit, dan tidak ada satu tempat yang benar-benar
                  berpihak pada pembeli.
                </p>
                <p>
                  Kami membangun Huniaja untuk menutup jarak itu. Dengan data
                  properti yang diverifikasi, simulasi KPR yang jujur, dan
                  pendampingan dari tim yang memang paham hukumnya — supaya
                  setiap keluarga bisa membaca pilihan mereka dengan jelas,
                  bukan diarahkan oleh siapa yang komisinya paling besar.
                </p>
                <p className="font-semibold text-slate-800">
                  Prinsip kami sederhana: informasi yang benar akan
                  menghasilkan keputusan yang benar. Dan keputusan yang benar
                  hari ini adalah investasi terbaik untuk keluarga esok. Terima
                  kasih sudah memberi Huniaja kesempatan menemani perjalananmu.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="flex-1">
                  <div className="font-black text-slate-900 text-lg">
                    Harry Harth
                  </div>
                  <div className="text-xs text-slate-500 tracking-wide">
                    Founder &amp; CEO — Huniaja.com
                  </div>
                </div>
                <Link
                  to="/kontak"
                  className="hidden md:inline-flex items-center gap-2 bg-slate-900 hover:bg-[#000066] text-white text-sm font-bold rounded-full px-5 py-2.5 shadow-sm transition"
                  data-testid="owner-cta-contact"
                >
                  Sapa Tim <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <Link
                to="/kontak"
                className="mt-5 md:hidden inline-flex items-center gap-2 bg-slate-900 hover:bg-[#000066] text-white text-sm font-bold rounded-full px-5 py-2.5 shadow-sm transition"
              >
                Sapa Tim <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Speak */}
      <section className="bg-gradient-to-b from-[#00B512] to-[#009e0f] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-white/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#000066]/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-white/15 border border-white/30 text-white text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              PARA PENDIRI
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 leading-tight">
              Empat suara.<br className="md:hidden" />{" "}
              <span className="text-[#000066]">Satu misi.</span>
            </h2>
            <p className="text-sm md:text-base text-white/85 mt-4 max-w-2xl mx-auto">
              Mereka bukan super hero. Mereka empat orang biasa yang percaya
              pada satu hal yang sama: rumah harus jadi hak, bukan privilege.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {founders.map((f) => (
              <div
                key={f.name}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-6 md:p-7 hover:bg-white/15 transition"
              >
                <Quote
                  className="w-8 h-8 mb-3 text-white"
                  strokeWidth={2.5}
                />
                <p className="text-sm md:text-base text-white leading-relaxed italic">
                  "{f.quote}"
                </p>
                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-white/20">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-[#00B512] bg-white font-black text-base shadow-md"
                  >
                    {f.initial}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{f.name}</div>
                    <div className="text-xs text-white/80">{f.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
            <div className="lg:sticky lg:top-24">
              <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
                NILAI KAMI
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 leading-tight">
                Empat kata<br />
                yang jadi{" "}
                <span className="text-[#001DF3]">kompas</span> kami.
              </h2>
              <p className="text-sm md:text-base text-slate-600 mt-4 leading-relaxed">
                Bukan tulisan di dinding kantor. Ini keputusan sulit yang
                kami ambil setiap hari - saat berhadapan dengan pilihan
                antara profit dan prinsip.
              </p>
              <div className="mt-8 rounded-[28px] overflow-hidden shadow-lg">
                <img
                  src={CULTURE_IMG}
                  alt="Budaya kerja"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4 md:space-y-5">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="group relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl p-6 md:p-8 transition-all overflow-hidden"
                >
                  <div
                    className="absolute -top-16 -right-16 w-52 h-52 rounded-full opacity-[0.06] group-hover:opacity-[0.12] transition-opacity"
                    style={{ backgroundColor: v.color }}
                  />
                  <div className="relative flex gap-5 items-start">
                    <div className="text-[42px] font-black text-slate-100 leading-none w-16 shrink-0 group-hover:text-slate-200 transition">
                      0{i + 1}
                    </div>
                    <div className="flex-1">
                      <div
                        className="inline-flex w-11 h-11 rounded-2xl items-center justify-center mb-3"
                        style={{ backgroundColor: `${v.color}15` }}
                      >
                        <v.Icon
                          className="w-5 h-5"
                          style={{ color: v.color }}
                          strokeWidth={2}
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-black text-slate-900">
                        {v.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-600 mt-2 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-white text-[#001DF3] text-[11px] font-bold rounded-full px-3 py-1 tracking-widest border border-blue-100">
              JANJI KAMI KEPADAMU
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
              Tiga hal yang tidak akan<br />
              pernah kami kompromikan.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {commitments.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-7 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#001DF3] via-[#00B512] to-[#001DF3] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <c.Icon
                    className="w-7 h-7 text-[#001DF3]"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-black text-slate-900 mt-5 text-lg">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team culture (Big image + copy) */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="rounded-[36px] md:rounded-[48px] overflow-hidden shadow-2xl relative">
            <img
              src={TEAM_IMG}
              alt="Tim Huniaja"
              className="w-full h-80 md:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-end">
              <div className="p-8 md:p-14 max-w-3xl text-white">
                <span className="inline-block bg-white/15 backdrop-blur border border-white/20 text-white text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
                  KELUARGA HUNIAJA
                </span>
                <h3 className="text-3xl md:text-5xl font-black mt-4 leading-tight">
                  92 orang di<br />
                  belakang layar.
                </h3>
                <p className="text-sm md:text-lg text-white/85 mt-4 max-w-2xl leading-relaxed">
                  Dari engineer yang begadang debug bug, designer yang
                  memikirkan setiap pixel, hingga tim support yang jawab
                  chat jam 2 pagi - setiap orang di Huniaja berbagi obsesi
                  yang sama: memastikan pengalamanmu tidak terlupakan.
                </p>
                <Link
                  to="/karir"
                  data-testid="tk-cta-karir"
                  className="inline-flex items-center gap-2 mt-6 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-full px-6 py-3 text-sm shadow-lg transition"
                >
                  Bergabung dengan Kami <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact quote strip */}
      <section className="bg-[#001DF3] text-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <TrendingUp className="w-10 h-10 text-[#00B512] mx-auto" />
          <p className="text-2xl md:text-4xl font-black leading-tight mt-6">
            "Setiap kunci yang berpindah tangan,<br />
            adalah{" "}
            <span className="text-[#00B512]">satu keluarga</span>{" "}
            yang akhirnya pulang."
          </p>
          <p className="text-sm md:text-base text-white/70 mt-4">
            - Reza Pratama, CEO Huniaja
          </p>
        </div>
      </section>

      {/* Where we operate */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="rounded-[36px] overflow-hidden shadow-xl">
            <img
              src={CITY_IMG}
              alt="Kota-kota Huniaja"
              className="w-full h-96 object-cover"
            />
          </div>
          <div>
            <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              JANGKAUAN KAMI
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 leading-tight">
              Dari Sabang<br />
              sampai Merauke,<br />
              <span className="text-[#00B512]">satu platform.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 mt-4 leading-relaxed">
              Kami memulai di Bogor. Hari ini, Huniaja hadir di lebih dari
              50 kota di seluruh Indonesia - dari kota metropolitan hingga
              kabupaten yang baru bertumbuh.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                "Jabodetabek",
                "Bandung Raya",
                "Surabaya",
                "Medan",
                "Makassar",
                "Semarang",
                "Bali",
                "Yogyakarta",
              ].map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-2 bg-slate-50 rounded-full px-4 py-2"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#001DF3] shrink-0" />
                  <span className="text-xs md:text-sm text-slate-700 font-semibold">
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="relative bg-gradient-to-br from-[#001DF3] to-[#000066] rounded-[36px] md:rounded-[48px] p-8 md:p-16 overflow-hidden text-white">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00B512]/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <Building2 className="w-10 h-10 text-[#00B512]" />
                <h3 className="text-3xl md:text-4xl font-black leading-tight mt-4">
                  Siap menulis<br />
                  babak selanjutnya bersama kami?
                </h3>
                <p className="text-sm md:text-base text-white/85 mt-4 max-w-xl">
                  Entah kamu pencari rumah pertama, agen ambisius, atau
                  developer visioner - kami punya tempat untukmu.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  to="/cari-properti"
                  data-testid="tk-final-cta-cari"
                  className="bg-white text-[#001DF3] hover:bg-slate-100 font-bold rounded-full px-6 py-3 text-sm shadow-lg text-center transition"
                >
                  Cari Rumah Impian
                </Link>
                <Link
                  to="/kerjasama"
                  data-testid="tk-final-cta-kerjasama"
                  className="bg-[#00B512] hover:bg-[#009e0f] text-white font-bold rounded-full px-6 py-3 text-sm shadow-lg text-center transition"
                >
                  Ajak Kami Berkolaborasi
                </Link>
                <a
                  href={WA_URL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white font-bold rounded-full px-6 py-3 text-sm text-center transition"
                >
                  Chat Langsung
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
