import React, { useEffect, useState, useCallback } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import {
  User,
  Heart,
  ClipboardList,
  LogOut,
  Loader2,
  MapPin,
  Calendar,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { Button } from "../components/ui/button";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const TABS = [
  { key: "profil", label: "Profil", Icon: User },
  { key: "favorit", label: "Favorit", Icon: Heart },
  { key: "riwayat", label: "Riwayat Pengajuan", Icon: ClipboardList },
];

const SUB_TYPE_LABEL = {
  konsultasi: "Konsultasi",
  karir: "Lamaran Karir",
  kontak: "Pesan Kontak",
  brosur: "Download Brosur",
};

function fmtDate(iso) {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function AkunPage() {
  const { user, loading, logout } = useAuth();
  const [tab, setTab] = useState("profil");
  const [favorites, setFavorites] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [tabLoading, setTabLoading] = useState(false);

  const loadFavorites = useCallback(async () => {
    setTabLoading(true);
    try {
      const { data } = await axios.get(`${API}/user/favorites`, {
        withCredentials: true,
      });
      setFavorites(data || []);
    } catch {
      setFavorites([]);
    } finally {
      setTabLoading(false);
    }
  }, []);

  const loadSubmissions = useCallback(async () => {
    setTabLoading(true);
    try {
      const { data } = await axios.get(`${API}/user/submissions`, {
        withCredentials: true,
      });
      setSubmissions(data || []);
    } catch {
      setSubmissions([]);
    } finally {
      setTabLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!user) return;
    if (tab === "favorit") loadFavorites();
    if (tab === "riwayat") loadSubmissions();
  }, [user, tab, loadFavorites, loadSubmissions]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#001DF3] animate-spin" />
      </div>
    );
  }
  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#001DF3] text-white pt-12 md:pt-16 pb-24 md:pb-32 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#00B512]/25 blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 md:px-6 flex items-center gap-4 md:gap-6">
          {user.picture ? (
            <img
              src={user.picture}
              alt={user.name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white/30 object-cover shrink-0"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/15 border-4 border-white/30 flex items-center justify-center text-2xl font-black shrink-0">
              {(user.name || user.email || "?").charAt(0).toUpperCase()}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <span className="inline-flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-0.5 text-[10px] font-black tracking-widest">
              <Sparkles className="w-3 h-3" /> AKUN HUNIAJA
            </span>
            <h1 className="text-2xl md:text-4xl font-black mt-2 leading-tight truncate">
              Halo, {(user.name || user.email).split(" ")[0]} 👋
            </h1>
            <p className="text-sm md:text-base text-white/80 mt-1 truncate">
              {user.email}
            </p>
          </div>
        </div>
      </section>

      {/* Tabs container */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 -mt-16 md:-mt-20 relative z-10 pb-16">
        <div className="bg-white rounded-[32px] shadow-xl border border-slate-100 overflow-hidden">
          <div className="flex border-b border-slate-100 overflow-x-auto">
            {TABS.map((t) => {
              const active = tab === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  data-testid={`akun-tab-${t.key}`}
                  className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-4 md:py-5 text-sm font-bold transition ${
                    active
                      ? "text-[#001DF3] border-b-2 border-[#001DF3] bg-[#001DF3]/5"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <t.Icon className="w-4 h-4" />
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="p-6 md:p-10">
            {tab === "profil" && <ProfilTab user={user} onLogout={logout} />}
            {tab === "favorit" && (
              <FavoritTab loading={tabLoading} favorites={favorites} onReload={loadFavorites} />
            )}
            {tab === "riwayat" && (
              <RiwayatTab loading={tabLoading} submissions={submissions} />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// ---------- Tabs ----------------------------------------------------------

function ProfilTab({ user, onLogout }) {
  return (
    <div className="max-w-xl">
      <h2 className="text-lg md:text-xl font-black text-slate-900">Profilmu</h2>
      <p className="text-sm text-slate-500 mt-1">
        Data ini berasal dari akun Google-mu.
      </p>

      <dl className="mt-6 space-y-4">
        <FieldRow label="Nama Lengkap" value={user.name || "-"} />
        <FieldRow label="Email" value={user.email} />
        <FieldRow label="ID Akun" value={user.user_id} mono />
      </dl>

      <div className="mt-8 pt-6 border-t border-slate-100">
        <Button
          onClick={onLogout}
          data-testid="akun-logout-button"
          className="bg-white border border-slate-200 hover:border-[#000066] hover:bg-[#000066]/5 text-slate-900 rounded-full font-bold px-6 h-11 text-sm"
        >
          <LogOut className="w-4 h-4 mr-2" /> Keluar dari akun
        </Button>
      </div>
    </div>
  );
}

function FieldRow({ label, value, mono }) {
  return (
    <div className="grid grid-cols-3 gap-4 items-baseline">
      <dt className="text-xs md:text-sm text-slate-500 font-semibold col-span-1">
        {label}
      </dt>
      <dd
        className={`col-span-2 text-sm md:text-base text-slate-900 font-medium break-all ${
          mono ? "font-mono text-xs md:text-sm" : ""
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

function FavoritTab({ loading, favorites }) {
  if (loading) {
    return (
      <div className="py-14 text-center">
        <Loader2 className="w-6 h-6 text-[#001DF3] animate-spin mx-auto" />
      </div>
    );
  }
  if (!favorites.length) {
    return (
      <EmptyState
        Icon={Heart}
        title="Belum ada properti favorit"
        desc="Klik ikon hati di properti manapun untuk menyimpannya di sini."
        cta={{ to: "/cari-properti", label: "Jelajahi Properti" }}
      />
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
      {favorites.map((p) => (
        <Link
          key={p.id}
          to={`/properti/${p.id}`}
          data-testid={`favorite-card-${p.id}`}
          className="group rounded-3xl border border-slate-100 hover:border-[#001DF3]/30 hover:shadow-lg overflow-hidden bg-white transition"
        >
          <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
            {p.image ? (
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                Tidak ada foto
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-bold text-slate-900 text-sm md:text-base truncate">
              {p.title}
            </h3>
            {p.location && (
              <div className="flex items-center gap-1 text-xs text-slate-500 mt-1 truncate">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                {p.location}
              </div>
            )}
            {p.price && (
              <div className="text-[#001DF3] font-black text-base mt-2">
                {p.price}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

function RiwayatTab({ loading, submissions }) {
  if (loading) {
    return (
      <div className="py-14 text-center">
        <Loader2 className="w-6 h-6 text-[#001DF3] animate-spin mx-auto" />
      </div>
    );
  }
  if (!submissions.length) {
    return (
      <EmptyState
        Icon={ClipboardList}
        title="Belum ada pengajuan"
        desc="Form konsultasi, brosur, kontak, dan lamaran karir kamu akan muncul di sini."
        cta={{ to: "/konsultasi", label: "Mulai Konsultasi" }}
      />
    );
  }
  return (
    <ul className="space-y-3">
      {submissions.map((s) => {
        const label = SUB_TYPE_LABEL[s.type] || s.type;
        const payload = s.payload || {};
        return (
          <li
            key={s.id}
            data-testid={`submission-${s.id}`}
            className="border border-slate-100 rounded-2xl p-4 md:p-5 hover:border-[#001DF3]/30 transition"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <span className="inline-block text-[10px] font-black tracking-widest bg-[#001DF3]/10 text-[#001DF3] rounded-full px-2 py-0.5 uppercase">
                  {label}
                </span>
                <h3 className="font-bold text-slate-900 mt-2 text-sm md:text-base truncate">
                  {payload.property_title ||
                    payload.subject ||
                    payload.goal ||
                    payload.position ||
                    "Pengajuan"}
                </h3>
                {payload.message && (
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {payload.message}
                  </p>
                )}
              </div>
              <div className="text-[11px] text-slate-400 shrink-0 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {fmtDate(s.created_at)}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function EmptyState({ Icon, title, desc, cta }) {
  return (
    <div className="py-10 md:py-14 text-center">
      <div className="w-14 h-14 mx-auto rounded-2xl bg-[#001DF3]/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#001DF3]" strokeWidth={2} />
      </div>
      <h3 className="font-bold text-slate-900 mt-4 text-base md:text-lg">
        {title}
      </h3>
      <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">{desc}</p>
      {cta && (
        <Link
          to={cta.to}
          className="inline-flex items-center gap-2 mt-6 bg-[#001DF3] hover:bg-[#0017c2] text-white font-bold rounded-full px-5 py-2.5 text-sm transition"
        >
          {cta.label} <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      )}
    </div>
  );
}
