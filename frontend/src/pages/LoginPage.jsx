import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Loader2 } from "lucide-react";
import { LOGO_WHITE } from "../mock";

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
        // Try admin login (email+password auth)
        const { data } = await axios.post(`${API}/admin/login`, {
          email: form.email,
          password: form.password,
        });
        localStorage.setItem("huniaja_admin_token", data.token);
        navigate("/admin/dashboard");
        return;
      }
      // Register - placeholder
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

  return (
    <div className="min-h-screen bg-white">
      {/* Simple top bar */}
      <div className="bg-[#001DF3] text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white/90 hover:text-white transition">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
          </Link>
          <Link to="/">
            <img src={LOGO_WHITE} alt="Huniaja" className="h-7 w-auto" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-72px)]">
        {/* Left visual */}
        <div className="hidden md:flex relative overflow-hidden bg-gradient-to-br from-[#000066] to-[#001DF3] text-white p-14 flex-col justify-between">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00B512]/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest">
              HUNIAJA
            </span>
            <h1 className="text-4xl lg:text-5xl font-black mt-6 leading-tight">
              Selamat datang<br />
              kembali di{" "}
              <span className="text-[#00B512]">rumah</span>.
            </h1>
            <p className="text-white/80 text-sm md:text-base mt-4 max-w-md leading-relaxed">
              Simpan properti favorit, lanjutkan konsultasi, dan pantau
              perjalanan pencarian rumahmu - semua di satu tempat.
            </p>
          </div>
          <div className="relative grid grid-cols-3 gap-4 text-white/85">
            <div>
              <div className="text-2xl font-black">2,4Jt+</div>
              <div className="text-[11px] text-white/60 mt-1">Pengguna aktif</div>
            </div>
            <div>
              <div className="text-2xl font-black">50K+</div>
              <div className="text-[11px] text-white/60 mt-1">Rumah terjual</div>
            </div>
            <div>
              <div className="text-2xl font-black">50+</div>
              <div className="text-[11px] text-white/60 mt-1">Kota Indonesia</div>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="flex items-center justify-center px-4 md:px-10 py-10 md:py-16 bg-slate-50">
          <div className="w-full max-w-md">
            <div className="flex bg-white rounded-full p-1 shadow-sm border border-slate-100">
              <button
                onClick={() => { setTab("login"); setError(""); setInfo(""); }}
                data-testid="tab-login"
                className={`flex-1 h-10 rounded-full text-sm font-bold transition ${
                  tab === "login" ? "bg-[#001DF3] text-white" : "text-slate-600"
                }`}
              >
                Masuk
              </button>
              <button
                onClick={() => { setTab("register"); setError(""); setInfo(""); }}
                data-testid="tab-register"
                className={`flex-1 h-10 rounded-full text-sm font-bold transition ${
                  tab === "register" ? "bg-[#001DF3] text-white" : "text-slate-600"
                }`}
              >
                Daftar
              </button>
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-8 leading-tight">
              {tab === "login" ? "Masuk ke akunmu" : "Buat akun baru"}
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              {tab === "login"
                ? "Senang melihatmu kembali. Yuk lanjutkan pencarian rumah."
                : "Beberapa detik saja, dan kamu jadi bagian keluarga Huniaja."}
            </p>

            <form onSubmit={submit} className="mt-6 space-y-3">
              {tab === "register" && (
                <IconInput
                  Icon={Mail}
                  type="text"
                  placeholder="Nama Lengkap"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  testid="input-name"
                />
              )}
              <IconInput
                Icon={Mail}
                type="email"
                placeholder="Email"
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
                  className="w-full rounded-full border border-slate-200 focus:border-[#001DF3] focus:ring-1 focus:ring-[#001DF3] outline-none pl-11 pr-11 py-3 text-sm bg-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {tab === "login" && (
                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="flex items-center gap-2 text-slate-600">
                    <input type="checkbox" className="accent-[#001DF3]" />
                    Ingat saya
                  </label>
                  <button type="button" className="text-[#001DF3] font-semibold hover:underline">
                    Lupa password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                data-testid="login-submit"
                className="w-full h-12 bg-[#00B512] hover:bg-[#009e0f] disabled:opacity-50 text-white rounded-full font-bold text-sm shadow-lg transition mt-2 flex items-center justify-center gap-2"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {tab === "login" ? "Masuk Sekarang" : "Buat Akun"}
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

            <div className="my-6 flex items-center gap-3 text-xs text-slate-400">
              <div className="flex-1 h-px bg-slate-200" />
              atau
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            <button
              type="button"
              className="w-full h-12 bg-white border border-slate-200 hover:bg-slate-50 rounded-full font-semibold text-sm flex items-center justify-center gap-3 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.5 0 6.5 1.3 8.9 3.5l6.6-6.6C35.5 2.7 30.2.5 24 .5 14.9.5 7.1 5.7 3.2 13.3l7.7 6c1.9-5.6 7.1-9.8 13.1-9.8z"/>
                <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.2-.4-4.7H24v9h12.7c-.6 3-2.3 5.5-4.9 7.2l7.6 5.9c4.5-4.1 7.1-10.2 7.1-17.4z"/>
                <path fill="#FBBC05" d="M10.9 28.7c-.5-1.5-.8-3.1-.8-4.7s.3-3.2.8-4.7l-7.7-6C1.5 16.6.5 20.2.5 24s1 7.4 2.7 10.7l7.7-6z"/>
                <path fill="#34A853" d="M24 47.5c6.2 0 11.5-2 15.3-5.6l-7.6-5.9c-2.1 1.4-4.8 2.2-7.7 2.2-6 0-11.2-4.1-13.1-9.8l-7.7 6C7.1 42.3 14.9 47.5 24 47.5z"/>
              </svg>
              Lanjutkan dengan Google
            </button>

            <p className="text-xs text-slate-500 text-center mt-6">
              {tab === "login" ? "Belum punya akun? " : "Sudah punya akun? "}
              <button
                onClick={() => setTab(tab === "login" ? "register" : "login")}
                className="text-[#001DF3] font-bold hover:underline"
              >
                {tab === "login" ? "Daftar sekarang" : "Masuk di sini"}
              </button>
            </p>
          </div>
        </div>
      </div>
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
        className="w-full rounded-full border border-slate-200 focus:border-[#001DF3] focus:ring-1 focus:ring-[#001DF3] outline-none pl-11 pr-4 py-3 text-sm bg-white"
        required
      />
    </div>
  );
}
