import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import { Lock, Loader2 } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
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
      const { data } = await axios.post(`${API}/admin/login`, { password });
      localStorage.setItem("huniaja_admin_token", data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Password salah. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000066] to-[#001DF3] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-white/10 backdrop-blur border border-white/20 items-center justify-center">
            <Lock className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl font-black text-white mt-4">Admin Huniaja</h1>
          <p className="text-white/70 text-sm mt-1">Masuk untuk mengelola konten</p>
        </div>
        <form
          onSubmit={submit}
          className="bg-white rounded-3xl shadow-2xl p-8 space-y-4"
        >
          <label className="block">
            <span className="text-xs font-bold text-slate-600 tracking-wide">
              PASSWORD ADMIN
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              data-testid="admin-password-input"
              autoFocus
              className="mt-1 w-full rounded-full border border-slate-200 focus:border-[#001DF3] focus:ring-1 focus:ring-[#001DF3] outline-none px-4 py-3 text-sm"
              placeholder="••••••••"
              required
            />
          </label>
          {error && (
            <div className="text-sm text-red-600 bg-red-50 rounded-xl px-3 py-2">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            data-testid="admin-login-submit"
            className="w-full h-12 bg-[#001DF3] hover:bg-[#0017c2] disabled:opacity-50 text-white rounded-full font-bold text-sm shadow-lg transition flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            Masuk Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
