import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Home,
  TreePine,
  GraduationCap,
  HandHeart,
  Sparkles,
  ArrowRight,
  Quote,
  MapPin,
  Users,
  ShieldCheck,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { WA_URL } from "../components/ChatWidget";

const HERO_IMG =
  "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=1800&q=85";
const STORY_IMG =
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400&q=85";
const KIDS_IMG =
  "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1400&q=85";
const TREE_IMG =
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1400&q=85";

const impact = [
  { value: "127", label: "Rumah Layak Huni dibangun", color: "#001DF3" },
  { value: "1.240", label: "Anak menerima beasiswa", color: "#00B512" },
  { value: "23", label: "Desa binaan aktif", color: "#000066" },
  { value: "8.400+", label: "Pohon ditanam bersama warga", color: "#00B512" },
];

const programs = [
  {
    Icon: Home,
    color: "#001DF3",
    title: "Rumah Layak Huni",
    desc:
      "Kami merenovasi rumah keluarga kurang mampu di desa binaan — dari atap bocor sampai sanitasi. Karena tidak ada anak yang layak tidur di rumah yang bahaya.",
    tag: "Sejak 2020",
  },
  {
    Icon: GraduationCap,
    color: "#00B512",
    title: "Beasiswa Anak Konstruksi",
    desc:
      "Anak-anak dari keluarga tukang, mandor, dan pekerja konstruksi partner kami mendapat beasiswa penuh SD-SMA. Sekitar 300 anak menerima setiap tahun.",
    tag: "300 anak/tahun",
  },
  {
    Icon: HandHeart,
    color: "#000066",
    title: "Bantuan Bencana Alam",
    desc:
      "Ketika banjir, gempa, atau erupsi terjadi, tim Huniaja Peduli turun ke lokasi dalam 48 jam — logistik, tempat tinggal sementara, dan pendampingan rekonstruksi.",
    tag: "Response 48 jam",
  },
  {
    Icon: TreePine,
    color: "#00B512",
    title: "Reforestasi & Kota Hijau",
    desc:
      "Setiap 1 rumah terjual di Huniaja, kami menanam 3 pohon. Dari 8.400 pohon yang tertanam, 82% masih hidup dan tumbuh di lahan bekas tambang & lereng gundul.",
    tag: "3 pohon / transaksi",
  },
  {
    Icon: Sparkles,
    color: "#001DF3",
    title: "Edukasi Properti Gratis",
    desc:
      "Setiap bulan kami menggelar workshop KPR, cara cek legalitas, dan waspada penipuan properti — gratis, terbuka untuk siapa saja, offline & online.",
    tag: "12+ workshop/tahun",
  },
  {
    Icon: ShieldCheck,
    color: "#000066",
    title: "Advokasi Konsumen Properti",
    desc:
      "Kami mendampingi korban penipuan developer nakal — mulai konsultasi hukum sampai mediasi. Sudah 68 kasus rampung tanpa biaya bagi korban.",
    tag: "68 kasus tuntas",
  },
];

const stories = [
  {
    name: "Ibu Yati (52)",
    place: "Desa Cikahuripan, Bogor",
    text:
      "Rumah kami dulu atap dari terpal, dinding dari bilik bambu. Setelah 20 tahun begitu, tim Huniaja datang tanpa saya minta. Sekarang cucu saya bisa belajar tanpa hujan masuk ke buku pelajarannya.",
  },
  {
    name: "Randi (16)",
    place: "SMKN 3 Tangerang — Anak Tukang",
    text:
      "Bapak saya kuli bangunan di proyek partner Huniaja. Saya pikir mau berhenti sekolah untuk bantu bapak. Beasiswa Huniaja bikin saya sekarang bisa ikut lomba desain interior nasional.",
  },
  {
    name: "Pak Sarno (61)",
    place: "Korban penipuan developer, Depok",
    text:
      "Uang tabungan hasil kerja 30 tahun hilang sekejap. Saya kira semua sudah tamat. Tim advokasi Huniaja mendampingi 8 bulan sampai developer dipaksa refund 100%. Tanpa biaya.",
  },
];

const timeline = [
  { year: "2019", event: "Huniaja Peduli lahir sebagai divisi CSR — modal awal 0,5% net revenue." },
  { year: "2021", event: "Program Rumah Layak Huni pertama di Kampung Muara, Bogor." },
  { year: "2022", event: "Beasiswa anak konstruksi meluas ke 4 provinsi." },
  { year: "2024", event: "Advokasi konsumen properti tuntas kasus pertama, refund Rp 480 juta." },
  { year: "2026", event: "Target: 500 rumah, 5.000 anak, dan 30.000 pohon tertanam." },
];

export default function CsrPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Huniaja Peduli"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#000066]/85 via-slate-900/70 to-[#001DF3]/70" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-24 md:py-32">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-widest">
            <Heart className="w-3.5 h-3.5 text-[#00B512]" /> HUNIAJA PEDULI
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mt-5 max-w-4xl">
            Rumah adalah{" "}
            <span className="text-[#00B512]">hak dasar</span>. <br />
            Kami hanya bantu memulangkan yang tercecer.
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl leading-relaxed">
            Sejak 2019, 0,5% dari pendapatan bersih Huniaja disisihkan untuk
            program sosial — bukan sebagai kewajiban, tapi sebagai janji. Karena
            di balik setiap rumah yang kami bantu jual, ada rumah lain yang belum
            punya kesempatan.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#program"
              className="bg-[#00B512] hover:bg-[#009e0f] text-white font-bold rounded-full px-6 py-3 text-sm shadow-lg transition inline-flex items-center gap-2"
              data-testid="csr-hero-programs"
            >
              Lihat Program Kami <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 text-white font-bold rounded-full px-6 py-3 text-sm transition"
            >
              Bergabung / Donasi
            </a>
          </div>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              DAMPAK NYATA
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 leading-tight tracking-tight">
              Angka yang <span className="text-[#001DF3]">bukan cuma angka</span>.
            </h2>
            <p className="text-sm md:text-base text-slate-500 mt-3 max-w-2xl mx-auto">
              Setiap digit di bawah ini adalah wajah, keluarga, dan mimpi yang
              berhasil kami sentuh — bersama pengguna Huniaja seperti kamu.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {impact.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition"
              >
                <div
                  className="text-3xl md:text-4xl font-black"
                  style={{ color: s.color }}
                >
                  {s.value}
                </div>
                <p className="text-xs md:text-sm text-slate-600 mt-2 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Story */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-6">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#001DF3]/8 via-white to-[#00B512]/12 blur-2xl -z-10" />
                <div className="rounded-[32px] overflow-hidden shadow-xl">
                  <img src={STORY_IMG} alt="Story" className="w-full h-80 md:h-[440px] object-cover" />
                </div>
                <div className="absolute -bottom-5 -left-3 md:-bottom-6 md:-left-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#00B512]/12 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#00B512]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                      Desa Cikahuripan
                    </div>
                    <div className="text-sm font-black text-slate-900">
                      Kabupaten Bogor
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <span className="inline-block bg-[#001DF3]/8 text-[#001DF3] text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
                CERITA YANG DIMULAI DARI SATU RUMAH
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 leading-tight tracking-tight">
                Kami tidak berangkat dengan mimpi menyelamatkan dunia. Cuma satu rumah.
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 text-[15px] md:text-base leading-relaxed">
                <p>
                  Awal 2020, tim kami berkunjung ke Desa Cikahuripan untuk pendataan
                  potensi properti. Tapi yang kami temukan bukan investasi — melainkan
                  keluarga Ibu Yati dengan atap terpal dan lantai tanah.
                </p>
                <p>
                  Kami pulang, patungan, dan tiga bulan kemudian atap terpal itu berganti
                  genteng, dinding bilik jadi batako, dan cucu Ibu Yati tidak lagi belajar
                  di bawah tetesan hujan.
                </p>
                <p className="font-semibold text-slate-800">
                  Dari satu rumah itu, Huniaja Peduli lahir. Kami tidak menyelamatkan dunia
                  — kami cuma percaya bahwa setiap rumah yang layak adalah satu bab baru
                  untuk keluarga yang menempatinya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="program" className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              PROGRAM AKTIF
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 leading-tight tracking-tight">
              Enam cara kami{" "}
              <span className="text-[#00B512]">berterima kasih</span> pada kepercayaanmu.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {programs.map((p) => (
              <div
                key={p.title}
                className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all p-6 md:p-7 relative overflow-hidden"
                data-testid={`csr-program-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className="absolute -top-14 -right-14 w-40 h-40 rounded-full opacity-[0.06] group-hover:opacity-[0.1] transition-opacity"
                  style={{ backgroundColor: p.color }}
                />
                <div
                  className="relative w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm"
                  style={{ backgroundColor: `${p.color}18` }}
                >
                  <p.Icon className="w-6 h-6" style={{ color: p.color }} strokeWidth={2.2} />
                </div>
                <div className="text-[10px] font-black tracking-widest uppercase" style={{ color: p.color }}>
                  {p.tag}
                </div>
                <h3 className="font-black text-slate-900 text-lg md:text-xl mt-1 leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voices from the ground */}
      <section
        className="py-16 md:py-24 text-white relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #000066 0%, #001DF3 55%, #001DF3 100%)",
        }}
      >
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-[#00B512]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <span className="inline-block bg-white/10 border border-white/20 text-white text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              SUARA DARI LAPANGAN
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 leading-tight tracking-tight">
              Bukan brosur.{" "}
              <span className="text-[#00B512]">Ini kata mereka sendiri.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {stories.map((s) => (
              <div
                key={s.name}
                className="bg-white/8 backdrop-blur border border-white/15 rounded-3xl p-6 md:p-7 hover:bg-white/12 transition"
              >
                <Quote className="w-8 h-8 mb-3 text-[#00B512]" strokeWidth={2.5} />
                <p className="text-sm md:text-base text-white/90 leading-relaxed italic">
                  "{s.text}"
                </p>
                <div className="mt-5 pt-4 border-t border-white/15">
                  <div className="text-sm font-bold">{s.name}</div>
                  <div className="text-xs text-white/70 mt-0.5">{s.place}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              PERJALANAN
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 leading-tight tracking-tight">
              7 tahun. Dan{" "}
              <span className="text-[#001DF3]">masih baru dimulai</span>.
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-slate-200 md:-translate-x-0.5" />
            {timeline.map((t, i) => {
              const right = i % 2 === 1;
              return (
                <div
                  key={t.year}
                  className={`relative mb-8 md:mb-10 flex md:items-center ${
                    right ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className={`bg-white rounded-2xl border border-slate-100 shadow-sm p-5 ${right ? "md:text-right" : ""}`}>
                      <div className="text-[11px] font-black tracking-widest text-[#001DF3]">
                        {t.year}
                      </div>
                      <p className="text-sm md:text-base text-slate-700 mt-1 leading-relaxed">
                        {t.event}
                      </p>
                    </div>
                  </div>
                  <span className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 w-3 h-3 rounded-full bg-[#00B512] ring-4 ring-white shadow" />
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div
            className="relative rounded-[36px] p-8 md:p-14 text-white overflow-hidden shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, #00B512 0%, #009e0f 100%)",
            }}
          >
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#000066]/25 blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
              <div className="md:col-span-8">
                <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-widest">
                  <Users className="w-3.5 h-3.5" /> BERGABUNG
                </span>
                <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mt-4">
                  Kalau setiap dari kita menyisihkan sedikit —{" "}
                  <span className="text-white/85">bahkan cuma waktu</span> —
                  kita bisa menyelesaikan banyak.
                </h2>
                <p className="text-sm md:text-base text-white/85 mt-4 max-w-2xl leading-relaxed">
                  Kamu bisa berdonasi, jadi relawan renovasi rumah, atau membagikan
                  workshop KPR gratis kami ke keluarga yang butuh. Tidak ada
                  kontribusi yang terlalu kecil.
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col gap-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="csr-cta-donate"
                  className="bg-white text-[#00B512] hover:bg-slate-100 font-black rounded-full px-6 py-3.5 text-sm shadow-lg inline-flex items-center justify-center gap-2 transition"
                >
                  Donasi via WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/karir"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/25 text-white font-bold rounded-full px-6 py-3.5 text-sm inline-flex items-center justify-center gap-2 transition"
                >
                  Jadi Relawan
                </Link>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-8">
            Semua laporan program Huniaja Peduli diaudit tahunan oleh KAP independen.
            Ringkasan bisa diminta via kontak@huniaja.com.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
