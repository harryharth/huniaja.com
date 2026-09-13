import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { WA_URL, WA_DISPLAY } from "../components/ChatWidget";

const contactMethods = [
  {
    Icon: Mail,
    label: "Email",
    value: "halo@huniaja.com",
    href: "mailto:halo@huniaja.com",
    color: "#0025F5",
  },
  {
    Icon: Phone,
    label: "Telepon",
    value: WA_DISPLAY,
    href: "tel:+6285119833362",
    color: "#12B815",
  },
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat Tim Huniaja",
    href: WA_URL(),
    color: "#22C55E",
  },
  {
    Icon: Clock,
    label: "Jam Operasional",
    value: "Senin - Jumat, 09:00 - 18:00",
    href: "#",
    color: "#F59E0B",
  },
];

export default function KontakPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#0025F5] text-white pt-12 md:pt-16 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Hubungi Kami
          </h1>
          <p className="mt-3 text-sm md:text-base text-white/90 max-w-2xl mx-auto">
            Kami siap membantu setiap pertanyaan seputar properti, KPR,
            kerja sama, hingga akun Anda. Pilih cara termudah untuk terhubung.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-12">
            {contactMethods.map((m) => (
              <a
                key={m.label}
                href={m.href}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 p-6 text-center transition-all"
              >
                <div
                  className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${m.color}15` }}
                >
                  <m.Icon
                    className="w-6 h-6"
                    style={{ color: m.color }}
                    strokeWidth={2.2}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-3">{m.label}</p>
                <p className="font-bold text-slate-900 mt-1 text-sm md:text-base break-words">
                  {m.value}
                </p>
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-[32px] shadow-lg border border-slate-100 p-6 md:p-10">
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                Kirim Pesan
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Ceritakan kebutuhan Anda. Tim kami akan merespons dalam 24 jam
                kerja.
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
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handle}
                  />
                </div>
                <Input
                  name="subject"
                  placeholder="Subjek pesan"
                  value={form.subject}
                  onChange={handle}
                />
                <textarea
                  name="message"
                  placeholder="Tulis pesan Anda..."
                  rows={5}
                  value={form.message}
                  onChange={handle}
                  className="w-full rounded-2xl border border-slate-200 focus:border-[#0025F5] focus:ring-1 focus:ring-[#0025F5] outline-none px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400"
                />
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-[#0025F5] hover:bg-[#001fd1] text-white rounded-full font-bold px-6 h-11 text-sm"
                  >
                    <Send className="w-4 h-4 mr-2" /> Kirim Pesan
                  </Button>
                </div>
                {sent && (
                  <p className="text-sm text-[#12B815] font-semibold text-right">
                    Pesan terkirim. Terima kasih telah menghubungi kami!
                  </p>
                )}
              </form>
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-slate-50 rounded-[32px] p-6 md:p-8">
                <h4 className="font-bold text-slate-900">Kantor Pusat</h4>
                <p className="flex items-start gap-2 text-sm text-slate-600 mt-3 leading-relaxed">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#0025F5] shrink-0" />
                  Sentul City Business Park, Bogor, Jawa Barat 16810,
                  Indonesia.
                </p>
              </div>

              <div className="bg-[#0025F5] text-white rounded-[32px] p-6 md:p-8">
                <h4 className="font-bold">Ikuti Kami</h4>
                <p className="text-sm text-white/85 mt-2">
                  Update tips properti, listing terbaru dan promo di media
                  sosial kami.
                </p>
                <div className="flex gap-3 mt-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={WA_URL()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
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
