import React, { useState } from "react";
import {
  Truck,
  Sprout,
  Users,
  Eye,
  Handshake,
  Lightbulb,
  Award,
  Sparkles,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const jobs = [
  {
    position: "Full-Stack Developer",
    code: "HAFSD",
    location: "Bogor - Jawa Barat",
  },
  {
    position: "Graphic Designer",
    code: "HAUXD",
    location: "Bogor - Jawa Barat",
  },
  {
    position: "Digital Marketing Specialist",
    code: "HADMS",
    location: "Bogor - Jawa Barat",
  },
  {
    position: "Content Creator",
    code: "HACC",
    location: "Bogor - Jawa Barat",
  },
  {
    position: "Sales & Business Development",
    code: "HASBD",
    location: "Jabodetabek",
  },
  {
    position: "Customer Support & Community Manager",
    code: "HACSCM",
    location: "Bogor - Jawa Barat",
  },
  {
    position: "Copywriting",
    code: "HACP",
    location: "Bogor - Jawa Barat",
  },
];

const whyJoin = [
  {
    Icon: Truck,
    title: "Lingkungan Kolaboratif & Inovatif",
    desc: "Kami percaya ide-ide terbaik lahir dari kerja tim dan budaya terbuka.",
  },
  {
    Icon: Sprout,
    title: "Kesempatan Bertumbuh",
    desc: "Dengan mentorship dan proyek menantang, Anda bisa meningkatkan skill dan karier Anda lebih cepat.",
  },
  {
    Icon: Users,
    title: "Misi yang Berdampak Nyata",
    desc: "Setiap langkah Anda membawa perubahan untuk mempermudah jual beli properti di Indonesia.",
  },
];

const values = [
  { Icon: Truck, title: "Fokus & Konsisten", desc: "Bergerak cepat tanpa kehilangan kualitas." },
  { Icon: Eye, title: "Transparan", desc: "Jujur, terbuka, dan saling menghargai." },
  { Icon: Handshake, title: "Kolaborasi Tanpa Ego", desc: "Sukses tim di atas kepentingan pribadi." },
  { Icon: Lightbulb, title: "Solutif", desc: "Temukan jalan meski minim sumber daya." },
  { Icon: Award, title: "Tanggung Jawab Penuh", desc: "Pegang komitmen sampai tuntas." },
  { Icon: Sparkles, title: "Selalu Lebih Baik", desc: "Bertumbuh sedikit demi sedikit, setiap hari." },
];

export default function KarirPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setForm({ name: "", email: "", phone: "", resume: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#0025F5] text-white pt-10 md:pt-16 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            CAREERS
          </h1>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-white/90">
            Customers see, hear and feel the power of energy.
          </p>
        </div>
      </section>

      {/* Job Openings */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Bergabunglah Bersama Tim Huniaja.com!
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-3xl mx-auto mt-2">
              Kami percaya bahwa setiap orang bisa berkontribusi untuk membuat
              proses jual beli properti lebih mudah, transparan, dan
              menyenangkan. Sebagai startup proptech baru, kami membuka peluang
              untuk bergabung dan tumbuh bersama di posisi kunci berikut:
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 bg-[#0025F5] text-white text-xs md:text-sm font-semibold">
              <div className="col-span-5 md:col-span-6 px-4 py-3">Posisi</div>
              <div className="col-span-3 md:col-span-2 px-4 py-3">Code</div>
              <div className="col-span-4 px-4 py-3">Location</div>
            </div>
            {jobs.map((j, idx) => (
              <div
                key={j.code}
                className={`grid grid-cols-12 items-center border-t border-slate-100 text-xs md:text-sm ${
                  idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                }`}
              >
                <div className="col-span-12 md:col-span-6 px-4 py-3 md:py-4 font-medium text-slate-800">
                  {j.position}
                </div>
                <div className="col-span-4 md:col-span-2 px-4 pb-2 md:py-4 text-slate-600">
                  {j.code}
                </div>
                <div className="col-span-8 md:col-span-3 px-4 pb-3 md:py-4 text-slate-600">
                  {j.location}
                </div>
                <div className="col-span-12 md:col-span-1 px-4 pb-4 md:py-3 flex md:justify-end">
                  <button className="bg-[#12B815] hover:bg-[#0fa112] text-white text-xs font-bold px-6 py-1.5 rounded-full transition shadow-sm">
                    APPLY
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team image + Why Join */}
      <section className="bg-white pb-14 md:pb-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="rounded-[40px] overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1400&q=80"
              alt="Tim Huniaja"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          <div className="text-center mt-10 md:mt-14">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Mengapa Bergabung Bersama Kami?
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Alasan Memilih Karier di Huniaja.com
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-8">
            {whyJoin.map((w) => (
              <div
                key={w.title}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md p-6 text-center transition"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center">
                  <w.Icon
                    className="w-8 h-8 text-[#0025F5]"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-bold text-slate-900 mt-4">{w.title}</h3>
                <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#0025F5] text-white py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-xl md:text-2xl font-extrabold mb-2">
              Tertarik? Kirim Lamaran Anda!
            </h3>
            <p className="text-sm md:text-base text-white/90">
              Kami ingin mendengar cerita dan keahlian Anda. Unggah CV Anda
              dan bergabunglah dalam perjalanan kami untuk membuat jual-beli
              properti lebih mudah dan transparan.
            </p>
          </div>
          <Button className="bg-[#DAFF3D] hover:bg-[#c8ee1c] text-[#0025F5] rounded-full font-bold h-12 px-8 shadow-lg self-start md:self-auto">
            Kirim Lamaran Anda Sekarang
          </Button>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Nilai Utama Kami
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-2xl mx-auto">
              Kami mendukung setiap orang untuk berkembang optimal Di
              huniaja.com, kami melihat potensi setiap individu. Apapun tujuan
              kariermu, menjadi pemimpin tim, mengeksplorasi peran baru, atau
              memperluas keterampilan kami siap mendukung perjalananmu.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md p-6 text-center transition"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center">
                  <v.Icon className="w-7 h-7 text-[#0025F5]" />
                </div>
                <h3 className="font-bold text-slate-900 mt-4">{v.title}</h3>
                <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed">
                  {v.desc}
                </p>
                <button className="text-[#0025F5] text-xs font-semibold mt-4 hover:underline">
                  Lihat Detail
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Pool Form */}
      <section className="bg-slate-50 pb-16 md:pb-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Daftar Talent Pool huniaja.com
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
              Gabung di Talent Pool kami dan jadi orang pertama yang mendapat
              info peluang karier terbaru.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-[32px] shadow-lg p-6 md:p-10"
          >
            <h3 className="text-center text-lg md:text-xl font-bold text-slate-900 mb-6">
              We always hire talented and new people
            </h3>
            <div className="space-y-3">
              <Input
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />
              <Input
                name="email"
                type="email"
                placeholder="Your E-mail"
                value={form.email}
                onChange={handleChange}
              />
              <Input
                name="phone"
                placeholder="Your Phone"
                value={form.phone}
                onChange={handleChange}
              />
              <Input
                name="resume"
                placeholder="Your Resume (link CV / Google Drive)"
                value={form.resume}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-2xl border border-slate-200 focus:border-[#0025F5] focus:ring-1 focus:ring-[#0025F5] outline-none px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400"
              />
            </div>
            <div className="flex justify-center mt-6">
              <Button
                type="submit"
                className="bg-[#0025F5] hover:bg-[#001fd1] text-white rounded-full font-bold px-10 h-12 text-sm shadow-md"
              >
                APPLY NOW
              </Button>
            </div>
            {submitted && (
              <p className="text-center text-sm text-[#12B815] font-semibold mt-4">
                Lamaran terkirim! Kami akan menghubungi Anda segera.
              </p>
            )}
          </form>
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
      className="w-full rounded-full border border-slate-200 focus:border-[#0025F5] focus:ring-1 focus:ring-[#0025F5] outline-none px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400"
    />
  );
}
