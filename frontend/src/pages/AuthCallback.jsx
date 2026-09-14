import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { Loader2 } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

// REMINDER: DO NOT HARDCODE THE URL, OR ADD ANY FALLBACKS OR REDIRECT URLS, THIS BREAKS THE AUTH
export default function AuthCallback() {
  const location = useLocation();
  const navigate = useNavigate();
  const { refresh } = useAuth();
  const [error, setError] = useState("");
  const hasProcessed = useRef(false);

  useEffect(() => {
    if (hasProcessed.current) return;
    hasProcessed.current = true;

    const hash = location.hash || window.location.hash || "";
    const match = hash.match(/session_id=([^&]+)/);
    const sessionId = match ? decodeURIComponent(match[1]) : "";
    if (!sessionId) {
      setError("Sesi login tidak ditemukan.");
      return;
    }

    (async () => {
      try {
        await axios.post(
          `${API}/auth/session`,
          { session_id: sessionId },
          { withCredentials: true }
        );
        // Clear the fragment before navigating
        window.history.replaceState(null, "", window.location.pathname);
        await refresh();
        navigate("/akun", { replace: true });
      } catch (e) {
        setError("Gagal memverifikasi sesi. Silakan coba lagi.");
      }
    })();
  }, [location.hash, navigate, refresh]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-8 h-8 text-[#001DF3] animate-spin mx-auto" />
        <p className="mt-4 text-sm text-slate-600">
          {error || "Memverifikasi akun Google-mu..."}
        </p>
        {error && (
          <button
            onClick={() => navigate("/login", { replace: true })}
            className="mt-6 text-sm font-semibold text-[#001DF3] hover:underline"
          >
            Kembali ke halaman masuk
          </button>
        )}
      </div>
    </div>
  );
}
