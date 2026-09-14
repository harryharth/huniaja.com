import React, { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import axios from "axios";
import { Lock, Loader2, ArrowLeft, ShieldCheck, Sparkles, Eye, EyeOff, Mail } from "lucide-react";
import { LOGO_BLUE } from "../../mock";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (localStorage.getItem("huniaja_admin_token")) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/admin/login`, { email, password });
      localStorage.setItem("huniaja_admin_token", data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Email atau password salah. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col overflow-hidden bg-gradient-to-br from-white via-[#EEF2FF] to-[#E9F8EC]">
      {/* Mesh gradient blobs */}
      <div
        aria-hidden
        className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-40"
        style={{ backgroundColor: "#001DF3" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-24 w-[540px] h-[540px] rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: "#00B512" }}
      />
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[360px] h-[360px] rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#000066" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #000066 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top bar */}
      <header className="relative">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition"
            data-testid="admin-login-back"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
          <Link to="/" className="shrink-0">
            <img src={LOGO_BLUE} alt="Huniaja" className="h-7 md:h-8 w-auto" />
          </Link>
        </div>
      </header>

      {/* Centered glass card */}
      <main className="relative flex-1 flex items-center justify-center px-4 md:px-6 py-10 md:py-14">
        <div className="w-full max-w-[440px]">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur border border-white shadow-sm rounded-full px-3 py-1.5 text-[11px] font-bold text-slate-600 tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00B512]" />
              Panel Admin
            </span>
          </div>

          <div className="relative bg-white/70 backdrop-blur-2xl border border-white shadow-[0_24px_70px_-20px_rgba(0,29,243,0.25)] rounded-[32px] p-7 md:p-9">
            <div
              aria-hidden
              className="absolute -top-px left-8 right-8 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(0,29,243,0.5), rgba(0,181,18,0.5), transparent)",
              }}
            />

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 mb-4">
                <Lock className="w-5 h-5" style={{ color: "#001DF3" }} strokeWidth={2.5} />
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight tracking-tight">
                Admin Huniaja
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Masuk untuk mengelola konten Huniaja.
              </p>
            </div>

            <form onSubmit={submit} className="mt-7 space-y-3">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-testid="admin-email-input"
                  placeholder="Email admin"
                  className="w-full h-12 rounded-2xl bg-white/80 border border-slate-200 focus:border-[#001DF3] focus:ring-2 focus:ring-[#001DF3]/15 outline-none pl-11 pr-4 text-sm transition"
                  required
                  autoFocus
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  data-testid="admin-password-input"
                  placeholder="Password"
                  className="w-full h-12 rounded-2xl bg-white/80 border border-slate-200 focus:border-[#001DF3] focus:ring-2 focus:ring-[#001DF3]/15 outline-none pl-11 pr-11 text-sm transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label="Toggle password visibility"
                >
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {error && (
                <div className="bg-[#001DF3]/8 border border-[#001DF3]/20 text-[#001DF3] text-sm rounded-2xl px-4 py-3">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !password}
                data-testid="admin-login-submit"
                className="w-full h-12 disabled:opacity-60 text-white rounded-2xl font-bold text-sm shadow-lg shadow-[#001DF3]/20 hover:shadow-xl hover:shadow-[#001DF3]/30 hover:-translate-y-0.5 transition-all mt-2 flex items-center justify-center gap-2"
                style={{
                  background:
                    "linear-gradient(135deg, #000066 0%, #001DF3 100%)",
                }}
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                Masuk Dashboard
                <Sparkles className="w-3.5 h-3.5 opacity-80" />
              </button>
            </form>

            <p className="text-xs text-slate-500 text-center mt-6">
              Bukan admin?{" "}
              <Link to="/login" className="text-[#001DF3] font-bold hover:underline">
                Masuk sebagai pengguna
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="relative border-t border-white/40 bg-white/40 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 text-xs text-slate-500 text-center">
          © 2026 Huniaja.com — Panel Admin
        </div>
      </footer>
    </div>
  );
}
