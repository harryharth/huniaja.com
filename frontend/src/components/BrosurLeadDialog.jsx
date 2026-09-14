import React, { useState } from "react";
import axios from "axios";
import { X, Loader2, Download, Mail, User, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { WA_URL } from "../components/ChatWidget";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

/**
 * Modal that captures buyer lead data before releasing brosur download.
 * If the property has no brosur_url, the CTA becomes a WhatsApp handoff.
 */
export default function BrosurLeadDialog({ open, onClose, property }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;

  const hasBrosur = !!property?.brosur_url;

  const reset = () => {
    setForm({ name: "", email: "", phone: "", address: "" });
    setSuccess(false);
    setError("");
    setLoading(false);
  };

  const close = () => {
    reset();
    onClose?.();
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await axios.post(`${API}/submissions/brosur`, {
        ...form,
        property_id: property?.id,
        property_title: property?.title,
        property_price: property?.price,
      });
      setSuccess(true);
      // Auto trigger download when brosur available
      if (property?.brosur_url) {
        setTimeout(() => {
          const a = document.createElement("a");
          a.href = property.brosur_url;
          a.download = `Brosur-${(property.title || "properti").replace(/\s+/g, "-")}.pdf`;
          a.target = "_blank";
          document.body.appendChild(a);
          a.click();
          a.remove();
        }, 400);
      }
    } catch (err) {
      setError("Gagal mengirim data. Coba lagi ya.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full h-11 rounded-2xl bg-white border border-slate-200 focus:border-[#001DF3] focus:ring-2 focus:ring-[#001DF3]/15 outline-none px-11 text-sm transition";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="bg-white rounded-[28px] shadow-2xl w-full max-w-md relative overflow-hidden"
        data-testid="brosur-lead-dialog"
      >
        <div
          aria-hidden
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: "#00B512" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ backgroundColor: "#001DF3" }}
        />

        <div className="relative px-6 pt-6 pb-3 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#001DF3]/8 text-[#001DF3] rounded-full px-2.5 py-0.5 text-[10px] font-black tracking-widest">
              <Download className="w-3 h-3" /> DOWNLOAD BROSUR
            </div>
            <h3 className="text-lg font-black text-slate-900 mt-2 leading-tight">
              {success ? "Terima kasih!" : "Isi Data Diri Dulu Ya"}
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-[85%]">
              {success
                ? hasBrosur
                  ? "Brosur sedang diunduh. Cek folder Downloads kamu."
                  : "Tim kami akan segera menghubungi via WhatsApp dengan info lengkap."
                : "Data ini kami butuhkan supaya tim bisa follow-up penawaran & jadwal survey."}
            </p>
          </div>
          <button
            onClick={close}
            className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center shrink-0"
            aria-label="Tutup"
          >
            <X className="w-4 h-4 text-slate-500" />
          </button>
        </div>

        {success ? (
          <div className="relative px-6 pb-6 pt-2">
            <div className="flex flex-col items-center text-center py-4">
              <div className="w-14 h-14 rounded-full bg-[#00B512]/12 flex items-center justify-center mb-3">
                <CheckCircle2 className="w-8 h-8 text-[#00B512]" strokeWidth={2.2} />
              </div>
              <p className="text-sm text-slate-700">
                {hasBrosur ? (
                  <>
                    Kalau download belum jalan otomatis,{" "}
                    <a
                      href={property.brosur_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#001DF3] font-bold underline"
                    >
                      klik di sini
                    </a>
                    .
                  </>
                ) : (
                  <>Kami akan hubungi kamu di WhatsApp beberapa saat lagi.</>
                )}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <button
                onClick={close}
                className="h-11 rounded-2xl bg-slate-100 hover:bg-slate-200 text-sm font-bold text-slate-700 transition"
              >
                Tutup
              </button>
              <a
                href={WA_URL(
                  `Halo Huniaja, saya baru download brosur ${property?.title}. Boleh info survey?`
                )}
                target="_blank"
                rel="noreferrer"
                className="h-11 rounded-2xl bg-[#00B512] hover:bg-[#009e0f] text-white text-sm font-bold flex items-center justify-center transition"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="relative px-6 pb-6 space-y-2.5">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nama lengkap"
                className={inputCls}
                required
                data-testid="brosur-input-name"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Alamat email"
                className={inputCls}
                required
                data-testid="brosur-input-email"
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Nomor HP / WhatsApp"
                className={inputCls}
                required
                data-testid="brosur-input-phone"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
              <textarea
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                placeholder="Alamat lengkap"
                rows={2}
                className={inputCls + " h-auto py-3 resize-none"}
                required
                data-testid="brosur-input-address"
              />
            </div>

            {error && (
              <div className="bg-[#001DF3]/8 border border-[#001DF3]/20 text-[#001DF3] text-xs rounded-2xl px-3 py-2">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              data-testid="brosur-submit"
              className="w-full h-12 disabled:opacity-60 text-white rounded-2xl font-bold text-sm shadow-lg shadow-[#001DF3]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all mt-2 flex items-center justify-center gap-2"
              style={{
                background:
                  "linear-gradient(135deg, #000066 0%, #001DF3 100%)",
              }}
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
              {hasBrosur ? "Kirim & Download Brosur" : "Kirim & Dihubungi via WA"}
            </button>

            <p className="text-[11px] text-slate-500 text-center mt-2">
              Data kamu aman & hanya digunakan tim Huniaja untuk follow-up penawaran ini.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
