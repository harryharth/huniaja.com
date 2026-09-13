import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Loader2, User } from "lucide-react";
import { LOGO_BLUE } from "../mock";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function LoginPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("login");
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setInfo("");
    setLoading(true);
    try {
      if (tab === "login") {
        const { data } = await axios.post(`${API}/admin/login`, {
          email: form.email,
          password: form.password,
        });
        localStorage.setItem("huniaja_admin_token", data.token);
        navigate("/admin/dashboard");
        return;
      }
      setInfo("Terima kasih! Kami akan aktifkan akunmu segera dan beritahu via email.");
    } catch (err) {
      if (err.response?.status === 401) {
        setError("Email atau password salah. Coba lagi.");
      } else {
        setError("Terjadi kesalahan. Coba beberapa saat lagi.");
      }
    } finally {
      setLoading(false);
    }
  };

  const isLogin = tab === "login";

  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      {/* Ultra-subtle decorative accents */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full blur-3xl opacity-[0.07]"
        style={{ backgroundColor: "#001DF3" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[420px] h-[420px] rounded-full blur-3xl opacity-[0.06]"
        style={{ backgroundColor: "#00B512" }}
      />

      {/* Top bar — plain white */}
      <header className="relative">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition"
            data-testid="login-back"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
          <Link to="/" className="shrink-0">
            <img src={LOGO_BLUE} alt="Huniaja" className="h-7 md:h-8 w-auto" />
          </Link>
        </div>
      </header>

      {/* Centered card */}
      <main className="relative flex-1 flex items-center justify-center px-4 md:px-6 py-10 md:py-16">
        <div className="w-full max-w-[420px]">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight">
              {isLogin ? "Selamat datang kembali" : "Bergabung dengan Huniaja"}
            </h1>
            <p className="mt-2 text-sm md:text-[15px] text-slate-500">
              {isLogin
                ? "Masuk untuk melanjutkan pencarian rumahmu."
                : "Buat akun barumu dalam hitungan detik."}
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-8 flex bg-slate-100/70 rounded-full p-1">
            <button
              onClick={() => { setTab("login"); setError(""); setInfo(""); }}
              data-testid="tab-login"
              className={`flex-1 h-10 rounded-full text-sm font-bold transition ${
                isLogin ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Masuk
            </button>
            <button
              onClick={() => { setTab("register"); setError(""); setInfo(""); }}
              data-testid="tab-register"
              className={`flex-1 h-10 rounded-full text-sm font-bold transition ${
                !isLogin ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Daftar
            </button>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="mt-6 space-y-3">
            {!isLogin && (
              <IconInput
                Icon={User}
                type="text"
                placeholder="Nama lengkap"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                testid="input-name"
              />
            )}
            <IconInput
              Icon={Mail}
              type="email"
              placeholder="Alamat email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              testid="input-email"
            />
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type={showPw ? "text" : "password"}
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                data-testid="input-password"
                className="w-full h-12 rounded-2xl border border-slate-200 focus:border-[#001DF3] focus:ring-2 focus:ring-[#001DF3]/15 outline-none pl-11 pr-11 text-sm bg-white transition"
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

            {isLogin && (
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                  <input type="checkbox" className="accent-[#001DF3]" />
                  Ingat saya
                </label>
                <button
                  type="button"
                  className="text-[#001DF3] font-semibold hover:underline"
                >
                  Lupa password?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              data-testid="login-submit"
              className="w-full h-12 bg-slate-900 hover:bg-black disabled:opacity-60 text-white rounded-2xl font-bold text-sm transition mt-3 flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {isLogin ? "Masuk" : "Buat Akun"}
            </button>

            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 text-sm rounded-2xl px-4 py-3">
                {error}
              </div>
            )}
            {info && (
              <div className="bg-green-50 border border-green-100 text-[#009e0f] text-sm rounded-2xl px-4 py-3">
                {info}
              </div>
            )}
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3 text-[11px] uppercase tracking-widest text-slate-400">
            <div className="flex-1 h-px bg-slate-200" />
            atau
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Google button */}
          <button
            type="button"
            className="w-full h-12 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-2xl font-semibold text-sm text-slate-700 flex items-center justify-center gap-3 transition"
            data-testid="google-login-btn"
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.5 0 6.5 1.3 8.9 3.5l6.6-6.6C35.5 2.7 30.2.5 24 .5 14.9.5 7.1 5.7 3.2 13.3l7.7 6c1.9-5.6 7.1-9.8 13.1-9.8z"/>
              <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.2-.4-4.7H24v9h12.7c-.6 3-2.3 5.5-4.9 7.2l7.6 5.9c4.5-4.1 7.1-10.2 7.1-17.4z"/>
              <path fill="#FBBC05" d="M10.9 28.7c-.5-1.5-.8-3.1-.8-4.7s.3-3.2.8-4.7l-7.7-6C1.5 16.6.5 20.2.5 24s1 7.4 2.7 10.7l7.7-6z"/>
              <path fill="#34A853" d="M24 47.5c6.2 0 11.5-2 15.3-5.6l-7.6-5.9c-2.1 1.4-4.8 2.2-7.7 2.2-6 0-11.2-4.1-13.1-9.8l-7.7 6C7.1 42.3 14.9 47.5 24 47.5z"/>
            </svg>
            Lanjutkan dengan Google
          </button>

          {/* Switch */}
          <p className="text-sm text-slate-500 text-center mt-8">
            {isLogin ? "Belum punya akun? " : "Sudah punya akun? "}
            <button
              onClick={() => { setTab(isLogin ? "register" : "login"); setError(""); setInfo(""); }}
              className="text-[#001DF3] font-bold hover:underline"
            >
              {isLogin ? "Daftar sekarang" : "Masuk di sini"}
            </button>
          </p>
        </div>
      </main>

      {/* Footer note */}
      <footer className="relative border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <span>© 2026 Huniaja.com — Semua urusan rumah, satu tempat.</span>
          <div className="flex items-center gap-4">
            <Link to="/syarat-ketentuan" className="hover:text-slate-700 transition">
              Syarat &amp; Ketentuan
            </Link>
            <Link to="/pusat-bantuan" className="hover:text-slate-700 transition">
              Pusat Bantuan
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function IconInput({ Icon, testid, ...props }) {
  return (
    <div className="relative">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      <input
        {...props}
        data-testid={testid}
        className="w-full h-12 rounded-2xl border border-slate-200 focus:border-[#001DF3] focus:ring-2 focus:ring-[#001DF3]/15 outline-none pl-11 pr-4 text-sm bg-white transition"
        required
      />
    </div>
  );
}
