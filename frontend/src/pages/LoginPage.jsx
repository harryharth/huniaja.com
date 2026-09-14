import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Sparkles, Heart, ClipboardList } from "lucide-react";
import { LOGO_BLUE } from "../mock";
import { useAuth } from "../context/AuthContext";

// REMINDER: DO NOT HARDCODE THE URL, OR ADD ANY FALLBACKS OR REDIRECT URLS, THIS BREAKS THE AUTH
function startGoogleLogin() {
  const redirectUrl = window.location.origin + "/auth/callback";
  window.location.href = `https://auth.emergentagent.com/?redirect=${encodeURIComponent(
    redirectUrl
  )}`;
}

const benefits = [
  {
    Icon: Heart,
    title: "Simpan Properti Favorit",
    desc: "Tandai rumah impian dan akses kembali kapan saja dari akunmu.",
  },
  {
    Icon: ClipboardList,
    title: "Riwayat Pengajuan Tersimpan",
    desc: "Semua form konsultasi, brosur & lamaran karir tersimpan rapi di satu tempat.",
  },
  {
    Icon: ShieldCheck,
    title: "Login Aman & Cepat",
    desc: "Masuk dalam satu klik dengan akun Google — tanpa password baru.",
  },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) navigate("/akun", { replace: true });
  }, [loading, user, navigate]);

  return (
    <div className="min-h-screen relative flex flex-col overflow-hidden bg-white">
      {/* Brand ambient blobs (blue + green only) */}
      <div
        aria-hidden
        className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-25 bg-[#001DF3]"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-24 w-[540px] h-[540px] rounded-full blur-3xl opacity-20 bg-[#00B512]"
      />

      <header className="relative z-10 max-w-6xl w-full mx-auto flex items-center justify-between px-4 md:px-6 py-5">
        <Link to="/" className="flex items-center gap-2">
          <img src={LOGO_BLUE} alt="Huniaja" className="h-8 md:h-9" />
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#001DF3] font-semibold transition"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
        </Link>
      </header>

      <main className="relative z-10 flex-1 flex items-center">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 px-4 md:px-6 py-10 md:py-14 items-center">
          {/* Left — story / value prop */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 bg-[#001DF3]/8 text-[#001DF3] rounded-full px-3 py-1 text-[11px] font-black tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> AKUN HUNIAJA
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 leading-tight">
              Rumahmu, <span className="text-[#001DF3]">tersimpan</span>
              <br className="hidden md:block" /> di satu tempat.
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-600 max-w-md leading-relaxed">
              Masuk dengan akun Google-mu untuk menyimpan properti favorit,
              melacak pengajuan konsultasi, dan mendapatkan rekomendasi yang
              lebih personal.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-2xl bg-[#00B512]/12 flex items-center justify-center shrink-0">
                    <b.Icon className="w-5 h-5 text-[#00B512]" strokeWidth={2.2} />
                  </span>
                  <div>
                    <div className="font-bold text-slate-900 text-sm md:text-base">
                      {b.title}
                    </div>
                    <div className="text-xs md:text-sm text-slate-500 leading-relaxed">
                      {b.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — login card */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-[36px] shadow-2xl border border-slate-100 p-8 md:p-10 max-w-md mx-auto">
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                Masuk / Daftar
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Satu klik dengan Google — tanpa password, tanpa ribet.
              </p>

              <button
                type="button"
                onClick={startGoogleLogin}
                data-testid="google-login-button"
                className="mt-7 w-full flex items-center justify-center gap-3 bg-white border border-slate-200 hover:border-[#001DF3] hover:bg-[#001DF3]/5 text-slate-900 font-bold rounded-full px-5 h-12 text-sm transition shadow-sm"
              >
                <svg viewBox="0 0 48 48" className="w-5 h-5" aria-hidden>
                  <path fill="#EA4335" d="M24 9.5c3.5 0 6.5 1.3 8.9 3.5l6.6-6.6C35.5 2.7 30.2.5 24 .5 14.9.5 7.1 5.7 3.2 13.3l7.7 6c1.9-5.6 7.1-9.8 13.1-9.8z" />
                  <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.2-.4-4.7H24v9h12.7c-.6 3-2.3 5.5-4.9 7.2l7.6 5.9c4.5-4.1 7.1-10.2 7.1-17.4z" />
                  <path fill="#FBBC05" d="M10.9 28.7c-.5-1.5-.8-3.1-.8-4.7s.3-3.2.8-4.7l-7.7-6C1.5 16.6.5 20.2.5 24s1 7.4 2.7 10.7l7.7-6z" />
                  <path fill="#34A853" d="M24 47.5c6.2 0 11.5-2 15.3-5.6l-7.6-5.9c-2.1 1.4-4.8 2.2-7.7 2.2-6 0-11.2-4.1-13.1-9.8l-7.7 6C7.1 42.3 14.9 47.5 24 47.5z" />
                </svg>
                Lanjutkan dengan Google
              </button>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-[11px] tracking-widest text-slate-400 font-bold">
                  ATAU
                </span>
                <div className="flex-1 h-px bg-slate-200" />
              </div>

              <Link
                to="/admin/login"
                className="mt-6 block text-center text-xs text-slate-500 hover:text-[#001DF3] font-semibold"
              >
                Masuk sebagai Admin →
              </Link>

              <p className="text-[11px] text-slate-400 text-center mt-6 leading-relaxed">
                Dengan masuk, kamu menyetujui{" "}
                <Link to="/syarat-ketentuan" className="text-[#001DF3] hover:underline">
                  Syarat &amp; Ketentuan
                </Link>{" "}
                Huniaja.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
