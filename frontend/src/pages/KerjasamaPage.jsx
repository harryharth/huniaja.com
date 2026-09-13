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
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const partnerships = [
  {
    Icon: Megaphone,
    title: "Paid Partnership",
    desc: "Kerja sama iklan bersponsor, listing prioritas, dan campaign co-marketing untuk brand Anda.",
    perks: ["Konten bersponsor", "Iklan prioritas", "Laporan performa"],
  },
  {
    Icon: Handshake,
    title: "Co-Branding",
    desc: "Bangun kampanye bersama Huniaja lewat konten kolaboratif, event, dan program eksklusif.",
    perks: ["Event bersama", "Konten kolaboratif", "Distribusi ke jaringan kami"],
  },
  {
    Icon: Building2,
    title: "Developer Partnership",
    desc: "Pasarkan proyek properti Anda langsung ke jutaan pencari properti aktif.",
    perks: ["Halaman proyek dedicated", "Leads berkualitas", "Priority listing"],
  },
  {
    Icon: Users,
    title: "Affiliate & Agent",
    desc: "Bergabung menjadi agen atau afiliasi resmi Huniaja dan dapatkan komisi kompetitif.",
    perks: ["Komisi hingga 80%", "Dashboard tracking", "Support pelatihan"],
  },
];

const steps = [
  {
    Icon: Mail,
    title: "Kirim Proposal",
    desc: "Isi form di bawah atau kirim proposal ke partnership@huniaja.com.",
  },
  {
    Icon: Phone,
    title: "Diskusi Kebutuhan",
    desc: "Tim kami menghubungi Anda dalam 2 hari kerja untuk memahami tujuan kerja sama.",
  },
  {
    Icon: Sparkles,
    title: "Eksekusi & Peluncuran",
    desc: "Kami eksekusi bersama tim Anda dan meluncurkan kampanye sesuai jadwal.",
  },
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

      {/* Hero */}
      <section className="bg-[#12B815] text-white pt-12 md:pt-16 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block bg-white/15 text-white text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
              LET'S GROW TOGETHER
            </span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mt-3">
              Kerja Sama dengan Huniaja.com
            </h1>
            <p className="mt-4 text-sm md:text-base text-white/95 max-w-lg">
              Kami terbuka untuk berbagai bentuk kerja sama - dari paid
              partnership, co-branding, developer marketing, hingga afiliasi.
              Mari tumbuh bersama ekosistem properti terbesar di Indonesia.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <a
                href="#form"
                className="bg-[#0025F5] hover:bg-[#001fd1] text-white font-bold rounded-full px-6 py-3 text-sm shadow-lg transition"
              >
                Ajukan Kerja Sama
              </a>
              <a
                href="mailto:partnership@huniaja.com"
                className="bg-white/15 hover:bg-white/25 text-white font-bold rounded-full px-6 py-3 text-sm transition"
              >
                partnership@huniaja.com
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Partner Aktif", value: "120+" },
              { label: "Kota Dijangkau", value: "50+" },
              { label: "Pengguna Aktif", value: "2Jt+" },
              { label: "Listing Aktif", value: "25K+" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/10 backdrop-blur rounded-3xl p-4 md:p-5"
              >
                <p className="text-2xl md:text-3xl font-black">{s.value}</p>
                <p className="text-xs text-white/85 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership types */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-center text-xl md:text-2xl font-bold text-slate-900">
            Bentuk Kerja Sama
          </h2>
          <p className="text-center text-sm text-slate-500 mt-2 max-w-2xl mx-auto">
            Kami menyediakan berbagai paket kerja sama yang bisa disesuaikan
            dengan kebutuhan brand, developer, dan komunitas Anda.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-10">
            {partnerships.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 p-6 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <p.Icon className="w-7 h-7 text-[#0025F5]" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-slate-900 mt-4">{p.title}</h3>
                <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed">
                  {p.desc}
                </p>
                <ul className="mt-4 space-y-1.5 text-xs md:text-sm">
                  {p.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-center gap-2 text-slate-700"
                    >
                      <Check
                        className="w-3.5 h-3.5 text-[#12B815]"
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

      {/* Process */}
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-center text-xl md:text-2xl font-bold text-slate-900">
            Alur Kerja Sama
          </h2>
          <p className="text-center text-sm text-slate-500 mt-2">
            Tiga langkah simpel dari proposal hingga peluncuran kampanye.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-10">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="relative bg-white rounded-3xl border border-slate-100 shadow-sm p-6 text-center"
              >
                <div className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-[#12B815] text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                  {i + 1}
                </div>
                <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center">
                  <s.Icon className="w-6 h-6 text-[#0025F5]" />
                </div>
                <h4 className="font-bold text-slate-900 mt-3">{s.title}</h4>
                <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="bg-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-white rounded-[32px] shadow-lg border border-slate-100 p-6 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
              Ajukan Kerja Sama
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Isi form berikut. Tim Business Development kami akan menghubungi
              Anda dalam 2x24 jam kerja.
            </p>
            <form onSubmit={submit} className="mt-6 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Input
                  name="name"
                  placeholder="Nama Lengkap"
                  value={form.name}
                  onChange={handle}
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
                  className="mt-1 w-full rounded-full border border-slate-200 focus:border-[#0025F5] focus:ring-1 focus:ring-[#0025F5] outline-none px-4 py-3 text-sm text-slate-800 bg-white"
                >
                  {partnerships.map((p) => (
                    <option key={p.title}>{p.title}</option>
                  ))}
                  <option>Lainnya</option>
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Ceritakan singkat tujuan kerja sama, target audiens dan timeline."
                rows={5}
                value={form.message}
                onChange={handle}
                className="w-full rounded-2xl border border-slate-200 focus:border-[#0025F5] focus:ring-1 focus:ring-[#0025F5] outline-none px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400"
              />
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-[#12B815] hover:bg-[#0fa112] text-white rounded-full font-bold px-6 h-11 text-sm"
                >
                  <Send className="w-4 h-4 mr-2" /> Kirim Proposal
                </Button>
              </div>
              {sent && (
                <p className="text-sm text-[#12B815] font-semibold text-right">
                  Terima kasih! Proposal Anda telah kami terima.
                </p>
              )}
            </form>
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
      className="w-full rounded-full border border-slate-200 focus:border-[#0025F5] focus:ring-1 focus:ring-[#0025F5] outline-none px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400"
    />
  );
}
