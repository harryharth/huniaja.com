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
    color: "#12B815",
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
  {
    position: "Copywriting",
    code: "HACP",
    location: "Bogor - Jawa Barat",
    type: "Full-time",
    Icon: PenTool,
    color: "#7C3AED",
    desc: "Tulis narasi properti, artikel Berita, dan copy campaign yang mengundang aksi.",
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
        <div className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full bg-[#12B815]/25 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> KARIR DI HUNIAJA
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-4">
            Bangun masa depan properti Indonesia bersama kami.
          </h1>
          <p className="mt-4 text-sm md:text-lg text-white/85 max-w-2xl mx-auto">
            Kami sedang mencari talenta yang berani, kolaboratif, dan
            berdampak untuk tumbuh bersama Huniaja.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#openings"
              className="bg-[#DAFF3D] hover:bg-[#c8ee1c] text-[#0025F5] font-bold rounded-full px-6 py-3 text-sm shadow-lg transition"
            >
              Lihat Lowongan
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
                  className="w-full mt-5 bg-[#12B815] hover:bg-[#0fa112] text-white rounded-full font-bold h-11 text-sm"
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
                className="bg-[#DAFF3D] hover:bg-[#c8ee1c] text-[#0025F5] font-bold rounded-full px-6 py-3 text-sm shadow-lg transition"
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
        <div className="flex items-center justify-center gap-2 text-sm text-[#12B815] font-semibold pt-1">
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
