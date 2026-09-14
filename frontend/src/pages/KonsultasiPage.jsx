import React, { useState } from "react";
import {
  Compass,
  MapPin,
  MessagesSquare,
  KeyRound,
  Sparkles,
  ArrowRight,
  Quote,
  CalendarClock,
  Phone,
  MessageCircle,
  Home,
  ShieldCheck,
  Rocket,
  Send,
  Check,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { WA_URL, WA_DISPLAY } from "../components/ChatWidget";
import { submitLead } from "../lib/publicApi";

const chapters = [
  {
    n: "01",
    tag: "The Question",
    title: "Semuanya dimulai dari sebuah pertanyaan.",
    body: "\"Rumah seperti apa yang cocok untuk lima tahun ke depan?\" Dari pertanyaan sederhana ini, banyak keluarga akhirnya menemukan hunian yang benar-benar mereka butuhkan. Konsultan Huniaja hadir untuk membantumu merumuskan pertanyaan-pertanyaan penting itu.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    accent: "#001DF3",
    Icon: Compass,
  },
  {
    n: "02",
    tag: "The Map",
    title: "Peta jalan yang jelas, bukan sekadar listing.",
    body: "Kami memetakan kebutuhan, budget, jarak kantor, dan rencana keluargamu. Alih-alih menawarkan ratusan properti acak, konsultan Huniaja mempersempit pilihan menjadi 3-5 properti yang benar-benar relevan.",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=80",
    accent: "#00B512",
    Icon: MapPin,
  },
  {
    n: "03",
    tag: "The Conversation",
    title: "Bukan sales pitch. Sebuah percakapan.",
    body: "Sesi konsultasi kami tidak dirancang untuk menjual. Ia dirancang untuk mendengarkan. Kadang kami menyarankanmu untuk menunda pembelian setahun lagi bila datamu belum siap. Kami di sisimu.",
    image:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=1200&q=80",
    accent: "#F59E0B",
    Icon: MessagesSquare,
  },
  {
    n: "04",
    tag: "The Keys",
    title: "Kunci itu akhirnya berpindah tangan.",
    body: "Ketika akad kredit selesai dan kunci rumah pertamamu ada di genggaman, kami tersenyum bersama. Itulah momen kenapa Huniaja ada. Setiap keluarga berhak atas hunian yang membuat mereka bertumbuh.",
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&q=80",
    accent: "#EC4899",
    Icon: KeyRound,
  },
];

const promises = [
  {
    Icon: ShieldCheck,
    title: "Independen & Transparan",
    desc: "Konsultan kami tidak dibayar berdasarkan siapa yang menjual - hanya berdasarkan kepuasanmu.",
  },
  {
    Icon: Rocket,
    title: "Rekomendasi Berbasis Data",
    desc: "Analisis pasar, komparasi harga, dan estimasi kenaikan nilai kami sajikan dalam bahasa manusia.",
  },
  {
    Icon: Home,
    title: "Pendampingan Sampai Akad",
    desc: "Dari survey pertama sampai serah terima kunci, kami menemani setiap langkah keputusanmu.",
  },
];

const steps = [
  {
    time: "10 Menit",
    title: "Jadwalkan Sesi Gratis",
    desc: "Pilih waktu yang cocok. Sesi awal 30 menit, tanpa biaya, tanpa komitmen.",
    Icon: CalendarClock,
  },
  {
    time: "30 Menit",
    title: "Sesi Diagnosa Kebutuhan",
    desc: "Kami mendengarkan visi keluargamu, gaya hidup, dan rencana finansial.",
    Icon: MessagesSquare,
  },
  {
    time: "3-5 Hari",
    title: "Kurasi Properti Personal",
    desc: "Konsultan menyusun shortlist properti yang paling sesuai dari database Huniaja.",
    Icon: Sparkles,
  },
  {
    time: "Fleksibel",
    title: "Dampingan Sampai Akad",
    desc: "Survey lokasi, negosiasi, KPR, dan akad - kami di sampingmu sampai selesai.",
    Icon: KeyRound,
  },
];

const testimonials = [
  {
    name: "Rani & Adit",
    role: "Keluarga muda, Bogor",
    text: "Awalnya kami hanya berencana beli rumah subsidi. Konsultan Huniaja justru menyarankan menabung 8 bulan lagi untuk masuk ke cluster yang tepat. Keputusan terbaik.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Pak Bagas",
    role: "Investor properti",
    text: "Saya biasa transaksi sendiri. Tapi konsultan Dea membantu saya menemukan unit off-plan yang belum di-list publik. Yield sewa 8% per tahun.",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Ibu Sasha",
    role: "Pindahan dari luar kota",
    text: "Dari Balikpapan pindah ke Depok, saya buta area. Tim Huniaja mengantar survey 3 properti dalam 1 hari. Rasanya benar-benar dipandu.",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
];

export default function KonsultasiPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    goal: "Beli Rumah Pertama",
    budget: "300 - 600 Juta",
    timeline: "Dalam 3 Bulan",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Nama & nomor WhatsApp wajib diisi.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await submitLead("konsultasi", form);
      // Build WhatsApp handoff message
      const waMsg =
        `Halo Huniaja, saya ingin sesi konsultasi properti.\n\n` +
        `Nama: ${form.name}\n` +
        `WhatsApp: ${form.phone}\n` +
        `Tujuan: ${form.goal}\n` +
        `Budget: ${form.budget}\n` +
        `Timeline: ${form.timeline}` +
        (form.message ? `\nCatatan: ${form.message}` : "");
      window.open(WA_URL(waMsg), "_blank", "noopener,noreferrer");
      setSent(true);
      setForm({
        name: "",
        phone: "",
        goal: "Beli Rumah Pertama",
        budget: "300 - 600 Juta",
        timeline: "Dalam 3 Bulan",
        message: "",
      });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      setError("Gagal mengirim data. Coba lagi ya.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-[#001DF3] text-white overflow-hidden pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="absolute -top-24 -left-16 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-16 w-[28rem] h-[28rem] rounded-full bg-[#00B512]/25 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> KONSULTASI PROPERTI
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mt-4">
            Setiap keputusan besar
            <br />
            dimulai dari{" "}
            <span className="text-[#00B512]">pertanyaan</span> yang tepat.
          </h1>
          <p className="mt-5 text-sm md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Konsultan Huniaja hadir bukan untuk menjual. Kami hadir untuk
            mendengarkan visi keluargamu - dan menerjemahkannya menjadi
            langkah-langkah konkret menuju hunian impian.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href="#form"
              className="bg-[#00B512] hover:bg-[#009e0f] text-[#001DF3] font-bold rounded-full px-6 py-3 text-sm shadow-lg transition"
            >
              Mulai Konsultasi Gratis
            </a>
            <a
              href={WA_URL("Halo, saya ingin konsultasi properti dengan Huniaja.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold rounded-full px-6 py-3 text-sm transition inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp {WA_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-20 md:space-y-28">
          {chapters.map((c, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <article
                key={c.n}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center`}
              >
                <div
                  className={`relative ${reversed ? "md:order-2" : ""}`}
                >
                  <div
                    className="absolute -inset-3 rounded-[44px] blur-2xl opacity-30 -z-10"
                    style={{ backgroundColor: c.accent }}
                  />
                  <div className="rounded-[36px] overflow-hidden shadow-xl">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  <div
                    className="absolute -bottom-5 -left-5 md:-left-8 w-24 h-24 md:w-28 md:h-28 rounded-3xl flex items-center justify-center text-white shadow-lg"
                    style={{ backgroundColor: c.accent }}
                  >
                    <c.Icon className="w-12 h-12" strokeWidth={1.8} />
                  </div>
                </div>
                <div className={`${reversed ? "md:order-1" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span
                      className="text-5xl md:text-7xl font-black leading-none"
                      style={{ color: c.accent }}
                    >
                      {c.n}
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-500">
                      {c.tag}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight mt-3">
                    {c.title}
                  </h2>
                  <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed max-w-lg">
                    {c.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Promise */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-500">
            Janji Kami
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-2">
            Tiga hal yang tidak akan pernah kami tawar.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-10 text-left">
            {promises.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 p-6 md:p-7 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <p.Icon className="w-7 h-7 text-[#001DF3]" strokeWidth={2} />
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

      {/* Timeline / How it works */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-500">
              Alur Konsultasi
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-2">
              Empat babak menuju rumah pilihanmu.
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-0.5 bg-slate-200" />
            <div className="space-y-8 md:space-y-14">
              {steps.map((s, i) => {
                const right = i % 2 === 1;
                return (
                  <div
                    key={i}
                    className={`relative md:grid md:grid-cols-2 md:gap-10 items-center`}
                  >
                    <div
                      className={`${
                        right ? "md:col-start-2" : "md:col-start-1 md:pr-10"
                      }`}
                    >
                      <div
                        className={`bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md p-5 md:p-6 ml-14 md:ml-0 transition ${
                          right ? "md:mr-0 md:ml-10" : ""
                        }`}
                      >
                        <span className="text-[11px] font-bold text-[#001DF3]">
                          {s.time}
                        </span>
                        <h3 className="font-bold text-slate-900 mt-1">
                          {s.title}
                        </h3>
                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`absolute left-0 top-4 md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#001DF3] text-white flex items-center justify-center shadow-lg z-10`}
                    >
                      <s.Icon className="w-5 h-5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#001DF3] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Quote className="w-10 h-10 mx-auto text-[#00B512]" />
            <h2 className="text-2xl md:text-3xl font-black mt-3">
              Cerita mereka yang sudah pulang ke rumahnya.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white/10 backdrop-blur border border-white/15 rounded-3xl p-6 hover:bg-white/15 transition"
              >
                <p className="text-sm md:text-[15px] text-white/95 leading-relaxed">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-white/70">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-500">
              Mulai Perjalananmu
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-2 leading-tight">
              Pesan sesi konsultasi gratismu.
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Isi form di samping. Konsultan senior kami akan menghubungimu
              dalam maksimal 24 jam kerja untuk menjadwalkan sesi 30 menit.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Gratis, tanpa komitmen.",
                "Konsultan tersertifikasi.",
                "Data pribadimu aman & privat.",
              ].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-[#00B512] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  {b}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-xs">
              <a
                href="tel:+6285119833362"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full px-4 py-2 font-semibold transition"
              >
                <Phone className="w-3.5 h-3.5" /> {WA_DISPLAY}
              </a>
            </div>
          </div>
          <div className="md:col-span-3 bg-white rounded-[32px] shadow-xl border border-slate-100 p-6 md:p-8">
            <form onSubmit={submit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Field
                  name="name"
                  placeholder="Nama Lengkap"
                  value={form.name}
                  onChange={handle}
                />
                <Field
                  name="phone"
                  placeholder="Nomor WhatsApp"
                  value={form.phone}
                  onChange={handle}
                />
              </div>
              <SelectField
                name="goal"
                label="Tujuan Konsultasi"
                value={form.goal}
                onChange={handle}
                options={[
                  "Beli Rumah Pertama",
                  "Investasi Properti",
                  "Take Over KPR",
                  "Jual Properti Lama",
                  "Pindah Kota",
                ]}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <SelectField
                  name="budget"
                  label="Rentang Budget"
                  value={form.budget}
                  onChange={handle}
                  options={[
                    "< 300 Juta",
                    "300 - 600 Juta",
                    "600 Juta - 1 M",
                    "1 - 2 M",
                    "> 2 M",
                  ]}
                />
                <SelectField
                  name="timeline"
                  label="Timeline Target"
                  value={form.timeline}
                  onChange={handle}
                  options={[
                    "Dalam 3 Bulan",
                    "3 - 6 Bulan",
                    "6 - 12 Bulan",
                    "Lebih dari 1 Tahun",
                  ]}
                />
              </div>
              <textarea
                name="message"
                rows={4}
                placeholder="Ceritakan singkat kondisi & impianmu (opsional)"
                value={form.message}
                onChange={handle}
                className="w-full rounded-2xl border border-slate-200 focus:border-[#001DF3] focus:ring-1 focus:ring-[#001DF3] outline-none px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400"
              />
              <Button
                type="submit"
                disabled={loading}
                data-testid="konsultasi-submit-button"
                className="w-full bg-[#001DF3] hover:bg-[#0017c2] text-white rounded-full font-bold h-12 text-sm shadow-md disabled:opacity-60"
              >
                <Send className="w-4 h-4 mr-2" />{" "}
                {loading ? "Mengirim..." : "Pesan Sesi Konsultasi"}
              </Button>
              {error && (
                <p className="text-center text-sm text-red-600 font-semibold">
                  {error}
                </p>
              )}
              {sent && (
                <p className="text-center text-sm text-[#00B512] font-semibold">
                  Terima kasih! Konsultan kami akan segera menghubungimu via
                  WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <p className="text-lg md:text-2xl font-serif italic text-slate-800 leading-relaxed">
            "Rumah bukan sekadar bangunan. Ia adalah ruang di mana masa depan
            keluargamu dirakit setiap hari."
          </p>
          <p className="mt-4 text-sm text-slate-500">
            - Tim Konsultan Huniaja
          </p>
          <a
            href="#form"
            className="inline-flex items-center gap-2 bg-[#001DF3] hover:bg-[#0017c2] text-white font-bold rounded-full px-6 py-3 text-sm shadow-lg mt-8 transition"
          >
            Mulai Konsultasi <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field(props) {
  return (
    <input
      {...props}
      className="w-full rounded-full border border-slate-200 focus:border-[#001DF3] focus:ring-1 focus:ring-[#001DF3] outline-none px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400"
    />
  );
}

function SelectField({ name, label, value, onChange, options }) {
  return (
    <div>
      <label className="text-xs font-semibold text-slate-600 ml-1">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 w-full rounded-full border border-slate-200 focus:border-[#001DF3] focus:ring-1 focus:ring-[#001DF3] outline-none px-4 py-3 text-sm text-slate-800 bg-white"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
