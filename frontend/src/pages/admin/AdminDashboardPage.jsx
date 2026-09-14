import React, { useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Home,
  Image as ImageIcon,
  Newspaper,
  LogOut,
  Plus,
  Search,
  Edit3,
  Trash2,
  Eye,
  EyeOff,
  Loader2,
  Upload,
  X,
  BarChart3,
  Bell,
  Sparkles,
  TrendingUp,
  Heart,
  Users,
  ArrowUpRight,
  Zap,
  MessageCircle,
  BadgeCheck,
  MoreHorizontal,
  PanelLeftClose,
  PanelLeftOpen,
  Star,
  LayoutGrid,
  ClipboardList,
  Store,
  BookOpenText,
  Filter,
  Command,
  ChevronDown,
  ExternalLink,
  Folder,
  RefreshCw,
  Download,
} from "lucide-react";
import { adminApi, clearToken, getToken } from "./adminApi";

// Preset facilities (checklist) — grouped by category so admin can pick per listing
const FACILITIES = {
  "Fasilitas Properti": [
    "Carport 1 Mobil",
    "Carport 2 Mobil",
    "Garasi",
    "Taman Depan",
    "Taman Belakang",
    "Rooftop",
    "Balkon",
    "Kolam Renang",
    "Kolam Ikan",
    "Ruang Jemur",
    "Gudang",
  ],
  "Utilitas": [
    "Listrik 1300 VA",
    "Listrik 2200 VA",
    "Listrik 3500 VA",
    "WiFi Ready",
    "PDAM",
    "Air Sumur Bor",
    "Water Heater",
    "AC Kamar Utama",
    "AC Semua Kamar",
  ],
  "Keamanan & Cluster": [
    "Keamanan 24 Jam",
    "One Gate System",
    "CCTV Kawasan",
    "Rumah Cluster",
    "Bebas Banjir",
    "Sertifikat SHM",
    "Sertifikat HGB",
  ],
  "Interior": [
    "Furnished",
    "Semi Furnished",
    "Unfurnished",
    "Dapur Bersih",
    "Dapur Kotor",
    "Ruang Kerja",
    "Ruang Keluarga",
  ],
  "Dekat Dengan": [
    "Dekat Sekolah",
    "Dekat Universitas",
    "Dekat Rumah Sakit",
    "Dekat Mall",
    "Dekat Pasar",
    "Dekat Tempat Ibadah",
    "Dekat Transportasi Umum",
    "Dekat Tol",
    "Dekat Bandara",
    "Dekat Pusat Kota",
    "Dekat Kantor",
  ],
};

// Sidebar sections — mapped from the Floe reference to Huniaja context.
const NAV_SECTIONS = [
  { key: "home", label: "Home", Icon: Home },
  { key: "properties", label: "Properti", Icon: LayoutGrid },
  { key: "banners", label: "Banner Promo", Icon: ImageIcon },
  { key: "articles", label: "Berita", Icon: BookOpenText },
  { key: "submissions", label: "Pengajuan", Icon: ClipboardList },
  { key: "users", label: "Pengguna", Icon: Store },
];

// Folder color themes — soft pastels tinted with our brand palette
const FOLDER_THEMES = [
  { key: "properties", label: "Properti", from: "#001DF3", tint: "#EEF2FF" },
  { key: "banners", label: "Banner Promo", from: "#00B512", tint: "#E9F8EC" },
  { key: "articles", label: "Berita", from: "#000066", tint: "#E8ECFA" },
  { key: "submissions", label: "Pengajuan", from: "#001DF3", tint: "#EEF2FF" },
];

export default function AdminDashboardPage() {
  const [tab, setTab] = useState("home");
  const [collapsed, setCollapsed] = useState(false);
  const [globalSearch, setGlobalSearch] = useState("");
  const [notif, setNotif] = useState(0);
  const navigate = useNavigate();
  const hasToken = !!getToken();

  useEffect(() => {
    if (!hasToken) return;
    adminApi
      .get("/admin/stats")
      .then((r) => setNotif(r.data?.submissions?.new || 0))
      .catch(() => {});
  }, [tab, hasToken]);

  if (!hasToken) return <Navigate to="/admin/login" replace />;

  const logout = () => {
    clearToken();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside
        className={`sticky top-0 self-start h-screen bg-white border-r border-slate-200 flex flex-col transition-all ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-9 h-9 rounded-2xl bg-[#001DF3] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            {!collapsed && (
              <span className="font-black text-slate-900 truncate">Huniaja</span>
            )}
          </div>
          <button
            onClick={() => setCollapsed((v) => !v)}
            data-testid="admin-sidebar-toggle"
            className="w-8 h-8 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 flex items-center justify-center transition"
            title={collapsed ? "Buka sidebar" : "Ciutkan"}
          >
            {collapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
          </button>
        </div>

        <nav className="flex-1 px-2 py-2 space-y-1 overflow-y-auto">
          {NAV_SECTIONS.map((s) => {
            const active = tab === s.key;
            return (
              <button
                key={s.key}
                onClick={() => setTab(s.key)}
                data-testid={`admin-tab-${s.key}`}
                title={s.label}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                  active
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <s.Icon className={`w-5 h-5 shrink-0 ${active ? "text-[#001DF3]" : "text-slate-400"}`} />
                {!collapsed && <span className="truncate">{s.label}</span>}
                {!collapsed && active && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#001DF3]" />
                )}
              </button>
            );
          })}

          <div className="mt-4 border-t border-slate-100 pt-3">
            <button
              onClick={() => setTab("submissions")}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition relative"
              data-testid="admin-tab-notif"
            >
              <Bell className="w-5 h-5 text-slate-400 shrink-0" />
              {!collapsed && <span>Notifikasi</span>}
              {notif > 0 && (
                <span
                  className={`${
                    collapsed ? "absolute top-1 right-1" : "ml-auto"
                  } bg-[#001DF3] text-white text-[10px] font-black rounded-full min-w-[22px] h-[22px] px-1.5 flex items-center justify-center`}
                >
                  {notif}
                </span>
              )}
            </button>
          </div>

          {!collapsed && (
            <div className="mt-4">
              <div className="px-3 text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                Favourites
              </div>
              <FavouritesList />
            </div>
          )}
        </nav>

        <button
          onClick={logout}
          data-testid="admin-logout"
          className="m-3 flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          {!collapsed && <span>Keluar</span>}
        </button>
      </aside>

      {/* Main area */}
      <main className="flex-1 min-w-0 max-h-screen overflow-y-auto">
        <TopBar globalSearch={globalSearch} setGlobalSearch={setGlobalSearch} />
        <div className="p-6 md:p-8">
          {tab === "home" && (
            <HomePanel goTo={setTab} search={globalSearch} />
          )}
          {tab === "properties" && <PropertiesPanel />}
          {tab === "banners" && <BannersPanel />}
          {tab === "articles" && <ArticlesPanel />}
          {tab === "submissions" && <SubmissionsPanel />}
          {tab === "users" && <UsersPanel />}
        </div>
      </main>
    </div>
  );
}

// ============================ TOP BAR ============================
function TopBar({ globalSearch, setGlobalSearch }) {
  return (
    <div className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200 px-6 md:px-8 py-3.5 flex items-center gap-4">
      <div className="flex-1 max-w-lg relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        <input
          value={globalSearch}
          onChange={(e) => setGlobalSearch(e.target.value)}
          data-testid="admin-global-search"
          placeholder="Search..."
          className="w-full h-10 pl-10 pr-16 rounded-full bg-slate-100 focus:bg-white border border-transparent focus:border-slate-200 outline-none text-sm text-slate-700 placeholder:text-slate-400 transition"
        />
        <kbd className="absolute right-2 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-slate-400 bg-white border border-slate-200 rounded px-1.5 h-6">
          <Command className="w-3 h-3" /> F
        </kbd>
      </div>
      <div className="ml-auto flex items-center gap-3">
        <div className="hidden md:block text-xs text-slate-500">
          Credits remaining
        </div>
        <div className="w-9 h-9 rounded-full bg-[#001DF3] text-white flex items-center justify-center text-sm font-black shadow-sm">
          A
        </div>
      </div>
    </div>
  );
}

// ============================ HOME ============================
function HomePanel({ goTo, search }) {
  const [stats, setStats] = useState(null);
  const [properties, setProperties] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("Semua");
  const [grade, setGrade] = useState("Minggu");

  useEffect(() => {
    adminApi.get("/admin/stats").then((r) => setStats(r.data)).catch(() => {});
    adminApi.get("/admin/properties").then((r) => setProperties(r.data || [])).catch(() => {});
    adminApi.get("/admin/submissions").then((r) => setSubmissions((r.data || []).slice(0, 5))).catch(() => {});
    adminApi.get("/admin/users").then((r) => setUsers(r.data || [])).catch(() => {});
  }, []);

  const filterPills = ["Semua", "Rumah", "Apartemen", "Tanah", "List"];

  const totalProps = stats?.properties?.total || 0;
  const publishedProps = stats?.properties?.published || 0;
  const publishedPct = totalProps ? Math.round((publishedProps / totalProps) * 100) : 0;
  const viewsPct = Math.min(100, Math.round(((stats?.properties?.views || 0) / Math.max(50, totalProps * 10)) * 100));

  // Filter properties by tab
  const filteredProps = useMemo(() => {
    let list = properties;
    if (filter !== "Semua" && filter !== "List") {
      list = list.filter((p) => (p.type || "").toLowerCase() === filter.toLowerCase());
    }
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter((p) =>
        (p.title || "").toLowerCase().includes(q) ||
        (p.location || "").toLowerCase().includes(q)
      );
    }
    return list;
  }, [properties, filter, search]);

  const popularProps = filteredProps.slice(0, 3);

  return (
    <div>
      {/* Greeting row */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-slate-900 flex items-center justify-center text-white">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-base md:text-lg font-black text-slate-900">Hello, Admin</div>
            <div className="text-xs text-slate-500">
              {new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long" })},{" "}
              <span className="text-[#001DF3] font-semibold">
                {stats?.submissions?.new || 0} pengajuan hari ini
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.location.reload()}
            data-testid="home-refresh"
            className="inline-flex items-center gap-1.5 h-9 px-3 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:border-slate-300 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Refresh
          </button>
          <button className="inline-flex items-center gap-1.5 h-9 px-3 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:border-slate-300 transition">
            <Download className="w-3.5 h-3.5" /> Export
          </button>
          <button
            onClick={() => goTo("properties")}
            className="w-9 h-9 rounded-full bg-slate-900 hover:bg-black text-white flex items-center justify-center transition"
            title="Tambah properti"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Title + filter chips */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h1 className="text-2xl md:text-3xl font-black text-slate-900">Dashboard</h1>
        <div className="flex flex-wrap items-center gap-2">
          {filterPills.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full text-xs font-bold border transition ${
                  active
                    ? "bg-[#001DF3]/10 text-[#001DF3] border-[#001DF3]/20"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 md:gap-5">
        {/* LEFT COL — Learning progress, Popular, Friends */}
        <div className="xl:col-span-5 space-y-5">
          {/* Learning progress */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-[#001DF3]/10 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-[#001DF3]" />
                </span>
                <span className="font-bold text-slate-900 text-sm">Progres Konten</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <StatMiniCard
                label="Properti Tayang"
                sub={`${publishedProps}/${totalProps}`}
                pct={publishedPct}
                color="#001DF3"
              />
              <StatMiniCard
                label="Engagement"
                sub={`${stats?.properties?.views || 0} views`}
                pct={viewsPct}
                color="#00B512"
              />
            </div>
          </div>

          {/* Popular courses / properties */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-sm">Properti Populer</h3>
              <button
                onClick={() => goTo("properties")}
                className="text-[11px] text-[#001DF3] font-bold hover:underline"
              >
                Lihat semua
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {popularProps.length === 0 ? (
                <div className="col-span-3 text-center py-8 text-sm text-slate-400">
                  Belum ada data.
                </div>
              ) : (
                popularProps.map((p, idx) => (
                  <PopularCard key={p.id} item={p} tone={idx} onOpen={() => goTo("properties")} />
                ))
              )}
            </div>
          </div>

          {/* Friends / Users stat card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 flex items-center gap-6">
            <div>
              <div className="text-xs font-bold text-slate-500 mb-2">Pengguna Terdaftar</div>
              <div className="flex -space-x-2">
                {users.slice(0, 5).map((u, i) => (
                  <span
                    key={u.user_id || i}
                    title={u.name || u.email}
                    className="w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-slate-200 flex items-center justify-center text-xs font-black text-slate-700"
                  >
                    {u.picture ? (
                      <img src={u.picture} alt="" className="w-full h-full object-cover" />
                    ) : (
                      (u.name || u.email || "?").charAt(0).toUpperCase()
                    )}
                  </span>
                ))}
                {users.length === 0 && (
                  <span className="text-xs text-slate-400">Belum ada</span>
                )}
              </div>
            </div>
            <div className="ml-auto grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-xs text-slate-500 font-semibold">Total</div>
                <div className="text-lg font-black text-slate-900">{stats?.users?.total || 0}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-semibold">Pengajuan</div>
                <div className="text-lg font-black text-slate-900">{stats?.submissions?.total || 0}</div>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE COL — AI Plan + Schedule */}
        <div className="xl:col-span-4 space-y-5">
          <div className="bg-white rounded-3xl border border-slate-200 p-5">
            <div className="mb-3">
              <h3 className="font-black text-slate-900">Rencana Kelola</h3>
              <span className="inline-block bg-[#001DF3] text-white text-[10px] font-black rounded-full px-2.5 py-0.5 mt-1 tracking-wider">
                Rekomendasi AI
              </span>
            </div>
            <div className="flex gap-2 mb-4">
              {["Hari Ini", "Minggu", "Bulan"].map((g) => (
                <button
                  key={g}
                  onClick={() => setGrade(g)}
                  className={`text-[11px] font-bold rounded-full px-3 py-1 transition ${
                    grade === g
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
            <MiniSubjectCard
              title="Prioritas"
              subjects={[
                { name: "Update Banner", meta: `${stats?.banners?.total || 0} aktif`, tint: "bg-[#EEF2FF]", Icon: ImageIcon },
                { name: "Berita Baru", meta: `${stats?.articles?.total || 0} artikel`, tint: "bg-[#E9F8EC]", Icon: BookOpenText },
                { name: "Tambah", meta: "Konten baru", tint: "bg-slate-100", Icon: Plus, onClick: () => goTo("articles") },
              ]}
            />
            <div className="h-3" />
            <MiniSubjectCard
              title="Backlog"
              subjects={[
                { name: "Pengajuan", meta: `${stats?.submissions?.new || 0} baru`, tint: "bg-[#EEF2FF]", Icon: ClipboardList, onClick: () => goTo("submissions") },
                { name: "Pengguna", meta: `${stats?.users?.total || 0} akun`, tint: "bg-[#E9F8EC]", Icon: Users, onClick: () => goTo("users") },
                { name: "Properti", meta: `${totalProps} listing`, tint: "bg-[#E8ECFA]", Icon: LayoutGrid, onClick: () => goTo("properties") },
              ]}
            />
          </div>

          {/* Schedule */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-slate-900 text-sm">Pengajuan Terbaru</h3>
              <button
                onClick={() => goTo("submissions")}
                className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition"
              >
                <Plus className="w-3 h-3 text-slate-600" />
              </button>
            </div>
            <ul className="space-y-2">
              {submissions.length === 0 ? (
                <li className="text-xs text-slate-400 py-4 text-center">Belum ada pengajuan.</li>
              ) : (
                submissions.map((s) => {
                  const p = s.payload || {};
                  const time = s.created_at
                    ? new Date(s.created_at).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })
                    : "--:--";
                  return (
                    <li
                      key={s.id}
                      className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 rounded-2xl p-2.5 cursor-pointer transition"
                      onClick={() => goTo("submissions")}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#001DF3] shrink-0" />
                      <span className="flex-1 text-xs font-bold text-slate-900 truncate">
                        {SUB_TYPE_LABEL[s.type] || s.type} — {p.name || p.email || "Tanpa nama"}
                      </span>
                      <span className="text-[11px] text-slate-500 font-semibold shrink-0">{time}</span>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        </div>

        {/* RIGHT COL — Feature card (playful, yellow) */}
        <div className="xl:col-span-3">
          <div className="bg-gradient-to-br from-[#FFF9C4] via-[#FFF3A0] to-[#FFE58A] rounded-3xl border border-yellow-200/50 p-5 h-full flex flex-col relative overflow-hidden">
            <div className="flex items-start justify-between">
              <h3 className="font-black text-slate-900">Huniaja Craft</h3>
              <button className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center">
                <MoreHorizontal className="w-4 h-4 text-slate-600" />
              </button>
            </div>
            <span className="mt-2 inline-flex self-start items-center gap-1 bg-white/70 rounded-full px-2.5 py-0.5 text-[10px] font-black text-slate-700">
              <Star className="w-2.5 h-2.5 text-[#00B512] fill-[#00B512]" /> #1 Property CMS
            </span>

            {/* Hero visual — house emoji style */}
            <div className="flex-1 flex items-center justify-center py-6 relative">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#001DF3] to-[#000066] flex items-center justify-center shadow-xl rotate-[-6deg]">
                <Home className="w-14 h-14 text-white" strokeWidth={2.2} />
              </div>
              <span className="absolute top-2 right-2 text-lg">✨</span>
              <span className="absolute bottom-8 left-4 text-sm">🏡</span>
              <span className="absolute top-8 left-8 text-xs">📊</span>
            </div>

            <div className="mt-2">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-black text-slate-900 text-lg">Property Play</h4>
                <span className="ml-auto inline-flex items-center gap-1 bg-white/80 rounded-full px-2 py-0.5 text-[10px] font-black text-slate-700">
                  <Star className="w-3 h-3 text-[#00B512] fill-[#00B512]" /> 5.0
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kelola properti seperti main game — cepat, menyenangkan, dan hasilnya keren.
              </p>

              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="bg-white/70 rounded-2xl p-3 text-center">
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Views</div>
                  <div className="text-lg font-black text-slate-900">{stats?.properties?.views || 0}</div>
                </div>
                <div className="bg-white/70 rounded-2xl p-3 text-center">
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Likes</div>
                  <div className="text-lg font-black text-slate-900">{stats?.properties?.likes || 0}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatMiniCard({ label, sub, pct, color }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-4">
      <div className="flex items-baseline justify-between">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">{label}</span>
        <span className="text-[10px] font-black text-slate-400">{sub}</span>
      </div>
      <div className="text-2xl font-black mt-1" style={{ color }}>
        {pct}%
      </div>
      <div className="mt-2 h-1.5 rounded-full bg-white overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function PopularCard({ item, tone, onOpen }) {
  const tints = ["bg-[#FFE0EE]", "bg-[#FFF3C4]", "bg-[#DDEBFF]"];
  const img = item.image || (item.gallery && item.gallery[0]);
  return (
    <button
      onClick={onOpen}
      className={`group text-left rounded-2xl overflow-hidden hover:-translate-y-0.5 transition-all ${tints[tone % 3]}`}
    >
      <div className="aspect-[4/3] flex items-center justify-center p-3">
        {img ? (
          <img src={img} alt={item.title} className="w-full h-full object-cover rounded-xl" />
        ) : (
          <Home className="w-8 h-8 text-slate-500" />
        )}
      </div>
      <div className="px-3 pb-3">
        <div className="text-[11px] font-bold text-slate-900 truncate">{item.title}</div>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 text-[#00B512] fill-[#00B512]" />
          <span className="text-[10px] font-black text-slate-700">
            {(4 + Math.random() * 0.9).toFixed(1)}
          </span>
        </div>
      </div>
    </button>
  );
}

function MiniSubjectCard({ title, subjects }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-wide">
          {title}
        </span>
        <span className="text-[10px] text-slate-400 font-bold">{subjects.length} item</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {subjects.map((s, i) => (
          <button
            key={i}
            onClick={s.onClick}
            className={`${s.tint} rounded-xl p-3 text-center hover:shadow-md transition`}
          >
            <div className="w-8 h-8 rounded-xl bg-white/70 flex items-center justify-center mx-auto mb-2">
              <s.Icon className="w-4 h-4 text-slate-700" />
            </div>
            <div className="text-[10px] font-black text-slate-900 truncate">{s.name}</div>
            <div className="text-[9px] text-slate-500 mt-0.5 truncate">{s.meta}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function timeAgo(iso) {
  if (!iso) return "baru";
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return "baru";
  const diff = Date.now() - then;
  const d = Math.floor(diff / 86400000);
  if (d <= 0) {
    const h = Math.floor(diff / 3600000);
    if (h <= 0) return "baru saja";
    return `${h} jam lalu`;
  }
  if (d === 1) return "1 hari lalu";
  return `${d} hari lalu`;
}

function FavouritesList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    adminApi
      .get("/admin/properties")
      .then((r) => setList((r.data || []).filter((p) => p.verified).slice(0, 4)))
      .catch(() => {});
  }, []);
  if (list.length === 0) {
    return (
      <div className="px-3 text-xs text-slate-400">
        Properti verified akan muncul di sini.
      </div>
    );
  }
  return (
    <ul className="space-y-1">
      {list.map((p) => (
        <li key={p.id}>
          <button
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 text-left"
            title={p.title}
          >
            <span className="w-7 h-7 rounded-lg bg-slate-100 overflow-hidden shrink-0">
              {p.image && (
                <img src={p.image} alt="" className="w-full h-full object-cover" />
              )}
            </span>
            <span className="flex-1 text-xs font-semibold text-slate-700 truncate">
              {p.title}
            </span>
            <Star className="w-3.5 h-3.5 text-[#00B512] fill-[#00B512]" />
          </button>
        </li>
      ))}
    </ul>
  );
}

// ============================ SUBMISSIONS ============================
const SUB_TYPE_LABEL = {
  konsultasi: "Konsultasi",
  karir: "Karir",
  kontak: "Kontak",
  brosur: "Brosur",
};

function SubmissionsPanel() {
  const [list, setList] = useState([]);
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const params = [];
      if (type) params.push(`type=${type}`);
      if (status) params.push(`status=${status}`);
      const { data } = await adminApi.get(
        `/admin/submissions${params.length ? "?" + params.join("&") : ""}`
      );
      setList(data || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [type, status]);

  const mark = async (sid, next) => {
    await adminApi.patch(`/admin/submissions/${sid}`, { status: next });
    load();
  };
  const remove = async (sid) => {
    if (!window.confirm("Hapus pengajuan ini?")) return;
    await adminApi.delete(`/admin/submissions/${sid}`);
    load();
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-black text-slate-900">
          Pengajuan
        </h1>
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            data-testid="sub-filter-type"
            className="h-9 rounded-full bg-white border border-slate-200 px-3 text-xs text-slate-700"
          >
            <option value="">Semua Tipe</option>
            <option value="konsultasi">Konsultasi</option>
            <option value="karir">Karir</option>
            <option value="kontak">Kontak</option>
            <option value="brosur">Brosur</option>
          </select>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            data-testid="sub-filter-status"
            className="h-9 rounded-full bg-white border border-slate-200 px-3 text-xs text-slate-700"
          >
            <option value="">Semua Status</option>
            <option value="new">Baru</option>
            <option value="in_progress">Diproses</option>
            <option value="done">Selesai</option>
          </select>
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : list.length === 0 ? (
        <div className="rounded-3xl bg-white border border-slate-200 p-14 text-center">
          <ClipboardList className="w-8 h-8 text-slate-300 mx-auto" />
          <p className="text-sm text-slate-500 mt-3">Belum ada pengajuan.</p>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden">
          <ul className="divide-y divide-slate-100">
            {list.map((s) => {
              const p = s.payload || {};
              const badgeColor =
                s.status === "done"
                  ? "bg-[#00B512]/10 text-[#00B512]"
                  : s.status === "in_progress"
                  ? "bg-[#001DF3]/10 text-[#001DF3]"
                  : "bg-slate-100 text-slate-600";
              return (
                <li
                  key={s.id}
                  data-testid={`sub-item-${s.id}`}
                  onClick={() => setSelected(s)}
                  className="p-4 md:p-5 hover:bg-slate-50 flex flex-wrap items-start gap-4 cursor-pointer"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#001DF3]">
                        {SUB_TYPE_LABEL[s.type] || s.type}
                      </span>
                      <span
                        className={`inline-block text-[10px] font-black uppercase rounded-full px-2 py-0.5 ${badgeColor}`}
                      >
                        {s.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 mt-1 truncate">
                      {p.name || p.email || "Tanpa Nama"}
                      {p.position && ` — ${p.position}`}
                      {p.property_title && ` — ${p.property_title}`}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {p.email || "-"} • {p.phone || "-"}
                    </p>
                    {p.message && (
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {p.message}
                      </p>
                    )}
                    <p className="text-[10px] text-slate-400 mt-2">
                      {timeAgo(s.created_at)}
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-2 shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelected(s)}
                      data-testid={`sub-review-${s.id}`}
                      className="h-8 rounded-full px-3 text-xs font-bold bg-[#001DF3]/8 text-[#001DF3] hover:bg-[#001DF3] hover:text-white transition"
                    >
                      Review
                    </button>
                    <select
                      value={s.status}
                      onChange={(e) => mark(s.id, e.target.value)}
                      data-testid={`sub-status-${s.id}`}
                      className="h-8 rounded-full bg-white border border-slate-200 px-2 text-xs text-slate-700"
                    >
                      <option value="new">Baru</option>
                      <option value="in_progress">Diproses</option>
                      <option value="done">Selesai</option>
                    </select>
                    <button
                      onClick={() => remove(s.id)}
                      data-testid={`sub-delete-${s.id}`}
                      className="w-8 h-8 rounded-full text-slate-400 hover:bg-[#000066]/8 hover:text-[#000066] flex items-center justify-center transition"
                      title="Hapus"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {selected && (
        <SubmissionReviewModal
          item={selected}
          onClose={() => setSelected(null)}
          onStatusChange={async (next) => {
            await mark(selected.id, next);
            setSelected({ ...selected, status: next });
          }}
          onDelete={async () => {
            if (!window.confirm("Hapus pengajuan ini?")) return;
            await adminApi.delete(`/admin/submissions/${selected.id}`);
            setSelected(null);
            load();
          }}
        />
      )}
    </div>
  );
}

function SubmissionReviewModal({ item, onClose, onStatusChange, onDelete }) {
  const p = item.payload || {};
  const label = SUB_TYPE_LABEL[item.type] || item.type;
  const dt = item.created_at
    ? new Date(item.created_at).toLocaleString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "-";

  // Only show meaningful payload fields (skip empty)
  const entries = Object.entries(p).filter(
    ([, v]) => v !== null && v !== undefined && String(v).trim() !== ""
  );

  const waMsg = encodeURIComponent(
    `Halo${p.name ? " " + p.name : ""}, terima kasih sudah menghubungi Huniaja.\n\nKami menerima pengajuan ${label} dari kamu — tim kami akan segera membantu.`
  );
  const waPhone = (p.phone || "").replace(/[^0-9]/g, "").replace(/^0/, "62");

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      data-testid="sub-review-modal"
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#001DF3]">
                {label}
              </span>
              <span
                className={`text-[10px] font-black uppercase rounded-full px-2 py-0.5 ${
                  item.status === "done"
                    ? "bg-[#00B512]/10 text-[#00B512]"
                    : item.status === "in_progress"
                    ? "bg-[#001DF3]/10 text-[#001DF3]"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {item.status}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mt-1">
              {p.name || p.email || "Tanpa Nama"}
            </h2>
            <p className="text-xs text-slate-500 mt-1">Diterima {dt}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {entries.length === 0 ? (
            <p className="text-sm text-slate-500">Payload kosong.</p>
          ) : (
            <dl className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {entries.map(([k, v]) => (
                <div key={k} className="md:col-span-1">
                  <dt className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {k.replace(/_/g, " ")}
                  </dt>
                  <dd className="text-sm text-slate-900 font-medium mt-1 break-words whitespace-pre-wrap">
                    {String(v)}
                  </dd>
                </div>
              ))}
            </dl>
          )}
          {item.user_id && (
            <div className="mt-4 pt-4 border-t border-slate-100">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                User ID
              </span>
              <div className="text-xs font-mono text-slate-700 mt-1">
                {item.user_id}
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 md:p-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-semibold">Status:</span>
            <select
              value={item.status}
              onChange={(e) => onStatusChange(e.target.value)}
              data-testid="sub-review-status"
              className="h-9 rounded-full bg-white border border-slate-200 px-3 text-xs text-slate-700"
            >
              <option value="new">Baru</option>
              <option value="in_progress">Diproses</option>
              <option value="done">Selesai</option>
            </select>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            {waPhone && (
              <a
                href={`https://wa.me/${waPhone}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="sub-review-wa"
                className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-[#00B512] hover:bg-[#009e0f] text-white font-bold text-sm shadow-sm transition"
              >
                <MessageCircle className="w-4 h-4" /> Balas via WhatsApp
              </a>
            )}
            {p.email && (
              <a
                href={`mailto:${p.email}`}
                className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-white border border-slate-200 hover:border-[#001DF3] hover:text-[#001DF3] text-slate-700 font-bold text-sm transition"
              >
                Email
              </a>
            )}
            <button
              onClick={onDelete}
              data-testid="sub-review-delete"
              className="w-10 h-10 rounded-full text-slate-400 hover:bg-[#000066]/8 hover:text-[#000066] flex items-center justify-center transition"
              title="Hapus"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================ USERS ============================
function UsersPanel() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState("");
  const [showAdd, setShowAdd] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const { data } = await adminApi.get(
        `/admin/users${q ? `?q=${encodeURIComponent(q)}` : ""}`
      );
      setList(data || []);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
  }, []);
  useEffect(() => {
    const t = setTimeout(load, 300);
    return () => clearTimeout(t);
  }, [q]);

  const remove = async (uid) => {
    if (!window.confirm("Hapus akun pengguna ini?")) return;
    await adminApi.delete(`/admin/users/${uid}`);
    load();
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900">Pengguna</h1>
          <p className="text-sm text-slate-500 mt-1">
            Daftar akun terdaftar. Bisa dibuat via Google atau ditambahkan manual.
          </p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          data-testid="add-user-btn"
          className="inline-flex items-center gap-2 bg-[#001DF3] hover:bg-[#0017c2] text-white rounded-full font-bold px-5 h-10 text-sm shadow-sm transition"
        >
          <Plus className="w-4 h-4" /> Tambah Pengguna
        </button>
      </div>

      <div className="relative max-w-sm mb-4">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          data-testid="user-search"
          placeholder="Cari email atau nama..."
          className="w-full h-10 pl-10 pr-4 rounded-full bg-white border border-slate-200 focus:border-[#001DF3] outline-none text-sm text-slate-700 placeholder:text-slate-400"
        />
      </div>

      {loading ? (
        <Loader />
      ) : list.length === 0 ? (
        <div className="rounded-3xl bg-white border border-slate-200 p-14 text-center">
          <Users className="w-8 h-8 text-slate-300 mx-auto" />
          <p className="text-sm text-slate-500 mt-3">Belum ada pengguna.</p>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden">
          <ul className="divide-y divide-slate-100">
            {list.map((u) => (
              <li
                key={u.user_id}
                data-testid={`user-item-${u.user_id}`}
                className="p-4 md:p-5 hover:bg-slate-50 flex items-center gap-4"
              >
                {u.picture ? (
                  <img
                    src={u.picture}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="w-10 h-10 rounded-full bg-[#001DF3]/10 text-[#001DF3] font-black flex items-center justify-center shrink-0">
                    {(u.name || u.email).charAt(0).toUpperCase()}
                  </span>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 truncate">{u.name || u.email}</span>
                    <span
                      className={`text-[10px] font-black uppercase tracking-wide rounded-full px-2 py-0.5 ${
                        u.role === "admin"
                          ? "bg-[#00B512]/10 text-[#00B512]"
                          : "bg-[#001DF3]/10 text-[#001DF3]"
                      }`}
                    >
                      {u.role || "user"}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">
                      {u.auth_type === "password" ? "Manual" : "Google"}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 truncate">{u.email}</div>
                </div>
                <button
                  onClick={() => remove(u.user_id)}
                  data-testid={`user-delete-${u.user_id}`}
                  className="w-8 h-8 rounded-full text-slate-400 hover:bg-[#000066]/8 hover:text-[#000066] flex items-center justify-center transition shrink-0"
                  title="Hapus"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showAdd && (
        <AddUserModal
          onClose={() => setShowAdd(false)}
          onCreated={() => {
            setShowAdd(false);
            load();
          }}
        />
      )}
    </div>
  );
}

function AddUserModal({ onClose, onCreated }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    role: "user",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.email.trim() || form.password.length < 6) {
      setError("Email + password minimal 6 karakter wajib diisi.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await adminApi.post("/admin/users", form);
      onCreated();
    } catch (err) {
      const detail = err.response?.data?.detail;
      setError(typeof detail === "string" ? detail : "Gagal membuat pengguna.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-black text-slate-900">Tambah Pengguna</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <form onSubmit={submit} className="space-y-3">
          <Field label="Nama Lengkap">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              data-testid="user-form-name"
              className="w-full h-11 rounded-xl border border-slate-200 focus:border-[#001DF3] outline-none px-3 text-sm"
              placeholder="Opsional"
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              data-testid="user-form-email"
              required
              className="w-full h-11 rounded-xl border border-slate-200 focus:border-[#001DF3] outline-none px-3 text-sm"
              placeholder="nama@example.com"
            />
          </Field>
          <Field label="Password (min. 6 karakter)">
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              data-testid="user-form-password"
              required
              minLength={6}
              className="w-full h-11 rounded-xl border border-slate-200 focus:border-[#001DF3] outline-none px-3 text-sm"
              placeholder="••••••••"
            />
          </Field>
          <Field label="Role">
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              data-testid="user-form-role"
              className="w-full h-11 rounded-xl border border-slate-200 focus:border-[#001DF3] outline-none px-3 text-sm"
            >
              <option value="user">User (pengguna biasa)</option>
              <option value="admin">Admin (bisa kelola konten)</option>
            </select>
          </Field>
          {error && (
            <div className="text-xs text-[#001DF3] bg-[#001DF3]/8 border border-[#001DF3]/20 rounded-xl p-3 font-semibold">
              {error}
            </div>
          )}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="h-11 rounded-full px-5 text-sm font-bold text-slate-600 hover:bg-slate-50 transition"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={loading}
              data-testid="user-form-submit"
              className="h-11 rounded-full px-5 text-sm font-bold bg-[#001DF3] hover:bg-[#0017c2] text-white shadow-sm disabled:opacity-60 transition"
            >
              {loading ? "Menyimpan..." : "Buat Akun"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ============================ PROPERTIES ============================
function PropertiesPanel() {
  const [list, setList] = useState([]);
  const [q, setQ] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const load = async () => {
    setLoading(true);
    const { data } = await adminApi.get("/admin/properties", {
      params: { q, status: statusFilter },
    });
    setList(data);
    setLoading(false);
  };
  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, [q, statusFilter]);

  const openNew = () => {
    setEditItem({
      title: "",
      location: "",
      city: "Kab. Bogor",
      type: "Rumah",
      condition: "Baru",
      price_value: 500000000,
      installment: "Angsuran mulai 3 Jutaan/bln",
      image: "",
      gallery: [],
      specs: { lt: "110 m²", lb: "90 m²", kt: 3, km: 2 },
      description: "",
      facilities: ["Carport 2 Mobil", "Taman Depan", "Keamanan 24 Jam", "Rumah Cluster"],
      brosur_url: "",
      verified: false,
      tier: "HH Pro",
      status: "published",
      sort_order: list.length,
    });
    setShowForm(true);
  };

  const openEdit = (it) => {
    setEditItem({ ...it });
    setShowForm(true);
  };

  const togglePublish = async (id) => {
    await adminApi.patch(`/admin/properties/${id}/publish`);
    load();
  };

  const remove = async (id) => {
    if (!window.confirm("Hapus properti ini?")) return;
    await adminApi.delete(`/admin/properties/${id}`);
    load();
  };

  const save = async () => {
    const payload = { ...editItem };
    if (payload.id) {
      const id = payload.id;
      delete payload.id;
      delete payload.views;
      delete payload.likes;
      delete payload.created_at;
      delete payload.updated_at;
      await adminApi.put(`/admin/properties/${id}`, payload);
    } else {
      await adminApi.post("/admin/properties", payload);
    }
    setShowForm(false);
    setEditItem(null);
    load();
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900">Kelola Properti</h2>
          <p className="text-sm text-slate-500 mt-1">
            {list.length} properti tersimpan
          </p>
        </div>
        <button
          onClick={openNew}
          data-testid="admin-new-property"
          className="bg-[#00B512] hover:bg-[#009e0f] text-white rounded-full px-5 py-2.5 text-sm font-bold shadow-lg inline-flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Tambah Properti
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 items-center">
        <div className="flex items-center bg-white rounded-full pl-4 pr-1 py-1 shadow-sm border border-slate-200 flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari judul, lokasi, kota..."
            className="flex-1 min-w-0 bg-transparent outline-none px-3 py-2 text-sm"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm"
        >
          <option value="">Semua status</option>
          <option value="published">Tayang</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      <div className="mt-6 bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600 text-xs uppercase tracking-wide">
            <tr>
              <th className="p-4 text-left">Properti</th>
              <th className="p-4 text-left">Lokasi</th>
              <th className="p-4 text-left">Harga</th>
              <th className="p-4 text-left">Stats</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr><td colSpan={6} className="p-8 text-center"><Loader /></td></tr>
            )}
            {!loading && list.length === 0 && (
              <tr><td colSpan={6} className="p-8 text-center text-slate-400">Belum ada properti</td></tr>
            )}
            {list.map((p) => (
              <tr key={p.id} data-testid={`admin-prop-row-${p.id}`} className="border-t border-slate-100 hover:bg-slate-50/50">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    {p.image ? (
                      <img src={p.image} alt="" className="w-12 h-12 rounded-xl object-cover" />
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-slate-100" />
                    )}
                    <div>
                      <div className="font-semibold text-slate-900">{p.title}</div>
                      <div className="text-xs text-slate-500">{p.type} · {p.condition}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-slate-600">{p.location}</td>
                <td className="p-4 font-bold text-[#001DF3]">
                  {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(p.price_value || 0)}
                </td>
                <td className="p-4 text-xs text-slate-500">
                  {p.views || 0} views · {p.likes || 0} likes
                </td>
                <td className="p-4">
                  <span className={`inline-block px-2 py-1 rounded-full text-[10px] font-bold ${
                    p.status === "published"
                      ? "bg-green-50 text-[#00B512]"
                      : "bg-slate-100 text-slate-500"
                  }`}>
                    {p.status === "published" ? "Tayang" : "Draft"}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-1 justify-end">
                    <IconBtn onClick={() => togglePublish(p.id)} title={p.status === "published" ? "Sembunyikan" : "Publish"}>
                      {p.status === "published" ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </IconBtn>
                    <IconBtn onClick={() => openEdit(p)} title="Edit" testid={`admin-edit-${p.id}`}>
                      <Edit3 className="w-4 h-4" />
                    </IconBtn>
                    <IconBtn onClick={() => remove(p.id)} title="Hapus" red>
                      <Trash2 className="w-4 h-4" />
                    </IconBtn>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && editItem && (
        <PropertyFormModal
          item={editItem}
          onChange={setEditItem}
          onClose={() => { setShowForm(false); setEditItem(null); }}
          onSave={save}
        />
      )}
    </div>
  );
}

function PropertyFormModal({ item, onChange, onClose, onSave }) {
  const set = (k, v) => onChange({ ...item, [k]: v });
  const setSpec = (k, v) => onChange({ ...item, specs: { ...item.specs, [k]: v } });

  const uploadImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fd = new FormData();
    fd.append("file", file);
    const { data } = await adminApi.post("/admin/upload", fd, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    const url = `${process.env.REACT_APP_BACKEND_URL}${data.url}`;
    set("image", url);
  };

  const uploadGallery = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const existing = item.gallery || [];
    const remaining = Math.max(0, 15 - existing.length);
    const toUpload = files.slice(0, remaining);
    const urls = [];
    for (const file of toUpload) {
      const fd = new FormData();
      fd.append("file", file);
      const { data } = await adminApi.post("/admin/upload", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      urls.push(`${process.env.REACT_APP_BACKEND_URL}${data.url}`);
    }
    set("gallery", [...existing, ...urls]);
    e.target.value = "";
  };

  const removeGallery = (idx) => {
    const arr = [...(item.gallery || [])];
    arr.splice(idx, 1);
    set("gallery", arr);
  };

  const uploadBrosur = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fd = new FormData();
    fd.append("file", file);
    const { data } = await adminApi.post("/admin/upload", fd, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    const url = `${process.env.REACT_APP_BACKEND_URL}${data.url}`;
    set("brosur_url", url);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-3xl shadow-2xl max-h-[90vh] overflow-y-auto" data-testid="admin-property-form">
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between gap-3 z-10">
          <h3 className="text-lg font-black">{item.id ? "Edit Properti" : "Tambah Properti"}</h3>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => set("verified", !item.verified)}
              data-testid="prop-form-verified-toggle"
              className={`inline-flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-full border-2 transition ${
                item.verified
                  ? "bg-[#001DF3] text-white border-[#001DF3] shadow-sm"
                  : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
              }`}
              title="Tandai listing sebagai Terverifikasi"
            >
              <BadgeCheck className="w-4 h-4" />
              {item.verified ? "Terverifikasi" : "Belum Verifikasi"}
            </button>
            <button onClick={onClose} className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Judul" testid="prop-form-title">
            <input value={item.title} onChange={(e) => set("title", e.target.value)} data-testid="prop-form-title-input" className={inputCls} />
          </Field>
          <Field label="Lokasi">
            <input value={item.location} onChange={(e) => set("location", e.target.value)} className={inputCls} />
          </Field>
          <Field label="Kota">
            <select value={item.city} onChange={(e) => set("city", e.target.value)} className={inputCls}>
              {["Kab. Bogor", "Kab. Bekasi", "Kota Depok", "Tangerang", "Kota Bekasi", "Jakarta"].map(c => <option key={c}>{c}</option>)}
            </select>
          </Field>
          <Field label="Tipe">
            <select value={item.type} onChange={(e) => set("type", e.target.value)} className={inputCls}>
              {["Rumah", "Villa", "Apartemen", "Ruko", "Tanah"].map(c => <option key={c}>{c}</option>)}
            </select>
          </Field>
          <Field label="Kondisi">
            <div className="flex flex-wrap gap-2" data-testid="prop-form-condition">
              {[
                { key: "Baru", color: "#000066" },
                { key: "Second", color: "#00B512" },
                { key: "Lelang", color: "#001DF3" },
              ].map((c) => {
                const active = item.condition === c.key;
                return (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => set("condition", c.key)}
                    className={`flex-1 min-w-[90px] flex items-center justify-center gap-2 rounded-2xl border-2 py-2.5 text-sm font-semibold transition ${
                      active
                        ? "border-[#001DF3] bg-[#001DF3]/8 text-[#001DF3]"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: c.color }}
                    />
                    {c.key}
                  </button>
                );
              })}
            </div>
          </Field>
          <Field label="Harga (Rupiah)">
            <input type="number" value={item.price_value} onChange={(e) => set("price_value", parseInt(e.target.value || 0))} className={inputCls} />
          </Field>
          <Field label="Info Cicilan">
            <select
              value={item.installment}
              onChange={(e) => set("installment", e.target.value)}
              className={inputCls}
              data-testid="prop-form-installment"
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={`Angsuran mulai ${n} Jutaan/bln`}>
                  Angsuran mulai {n} Jutaan/bln
                </option>
              ))}
            </select>
          </Field>
          <Field label="Urutan Tampilan">
            <input type="number" value={item.sort_order} onChange={(e) => set("sort_order", parseInt(e.target.value || 0))} className={inputCls} />
          </Field>
          <Field label="Luas Tanah">
            <input value={item.specs.lt} onChange={(e) => setSpec("lt", e.target.value)} className={inputCls} />
          </Field>
          <Field label="Luas Bangunan">
            <input value={item.specs.lb} onChange={(e) => setSpec("lb", e.target.value)} className={inputCls} />
          </Field>
          <Field label="Kamar Tidur">
            <input type="number" value={item.specs.kt} onChange={(e) => setSpec("kt", parseInt(e.target.value || 0))} className={inputCls} />
          </Field>
          <Field label="Kamar Mandi">
            <input type="number" value={item.specs.km} onChange={(e) => setSpec("km", parseInt(e.target.value || 0))} className={inputCls} />
          </Field>
          <div className="md:col-span-2">
            <Field label="Deskripsi">
              <textarea value={item.description} onChange={(e) => set("description", e.target.value)} rows={4} className={inputCls + " rounded-2xl"} />
            </Field>
          </div>
          <div className="md:col-span-2">
            <Field label="Foto Utama">
              <div className="flex items-center gap-3">
                {item.image && <img src={item.image} alt="" className="w-20 h-20 rounded-xl object-cover" />}
                <label className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 rounded-full px-4 py-2 text-sm font-semibold cursor-pointer">
                  <Upload className="w-4 h-4" /> Upload / Ganti
                  <input type="file" accept="image/*" onChange={uploadImage} className="hidden" data-testid="prop-form-upload" />
                </label>
                <input value={item.image} onChange={(e) => set("image", e.target.value)} placeholder="atau paste URL gambar" className={inputCls + " flex-1"} />
              </div>
            </Field>
          </div>

          {/* Foto Pendukung / Gallery (max 15) */}
          <div className="md:col-span-2">
            <Field label={`Foto Pendukung (${(item.gallery || []).length}/15)`}>
              <div className="flex flex-wrap gap-2" data-testid="prop-form-gallery">
                {(item.gallery || []).map((src, idx) => (
                  <div key={idx} className="relative w-20 h-20 rounded-xl overflow-hidden group shrink-0">
                    <img src={src} alt="" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeGallery(idx)}
                      className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/60 hover:bg-[#000066] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                      aria-label="Hapus foto"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
                {(item.gallery || []).length < 15 && (
                  <label className="w-20 h-20 rounded-xl border-2 border-dashed border-slate-300 hover:border-[#001DF3] hover:bg-blue-50/40 flex flex-col items-center justify-center text-slate-500 hover:text-[#001DF3] text-[10px] font-semibold cursor-pointer transition shrink-0">
                    <Upload className="w-4 h-4 mb-0.5" />
                    Tambah
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={uploadGallery}
                      className="hidden"
                      data-testid="prop-form-gallery-upload"
                    />
                  </label>
                )}
              </div>
              <p className="text-[11px] text-slate-500 mt-1.5">
                Foto pendukung akan tampil di galeri halaman detail. Maksimal 15 foto — bisa upload sekaligus.
              </p>
            </Field>
          </div>

          {/* Brosur PDF */}
          <div className="md:col-span-2">
            <Field label="Brosur (PDF)">
              <div className="flex items-center gap-3 flex-wrap">
                {item.brosur_url && (
                  <a
                    href={item.brosur_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#001DF3] font-semibold underline break-all"
                  >
                    Preview brosur saat ini
                  </a>
                )}
                <label className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 rounded-full px-4 py-2 text-sm font-semibold cursor-pointer">
                  <Upload className="w-4 h-4" /> {item.brosur_url ? "Ganti Brosur" : "Upload Brosur"}
                  <input
                    type="file"
                    accept="application/pdf,image/*"
                    onChange={uploadBrosur}
                    className="hidden"
                    data-testid="prop-form-brosur-upload"
                  />
                </label>
                <input
                  value={item.brosur_url || ""}
                  onChange={(e) => set("brosur_url", e.target.value)}
                  placeholder="atau paste URL brosur"
                  className={inputCls + " flex-1"}
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-1.5">
                File brosur akan bisa diunduh calon pembeli di halaman detail setelah mereka mengisi data (Hot Buyer capture).
              </p>
            </Field>
          </div>

          {/* Facilities checklist */}
          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-600 tracking-wide">FASILITAS &amp; LINGKUNGAN</span>
              <span className="text-[11px] text-slate-500">{(item.facilities || []).length} dipilih</span>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 space-y-4 max-h-72 overflow-y-auto" data-testid="prop-form-facilities">
              {Object.entries(FACILITIES).map(([group, options]) => (
                <div key={group}>
                  <div className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-2">
                    {group}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {options.map((opt) => {
                      const checked = (item.facilities || []).includes(opt);
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => {
                            const list = new Set(item.facilities || []);
                            if (checked) list.delete(opt);
                            else list.add(opt);
                            set("facilities", Array.from(list));
                          }}
                          className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition ${
                            checked
                              ? "bg-[#001DF3] text-white border-[#001DF3]"
                              : "bg-white text-slate-700 border-slate-200 hover:border-[#001DF3]"
                          }`}
                        >
                          {checked && <span className="mr-1">✓</span>}
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Field label="Status">
            <select value={item.status} onChange={(e) => set("status", e.target.value)} className={inputCls}>
              <option value="published">Tayang</option>
              <option value="draft">Draft</option>
            </select>
          </Field>
        </div>
        <div className="sticky bottom-0 bg-white border-t border-slate-100 px-6 py-4 flex justify-end gap-3">
          <button onClick={onClose} className="px-5 py-2.5 rounded-full text-sm font-bold text-slate-600 hover:bg-slate-100">
            Batal
          </button>
          <button onClick={onSave} data-testid="prop-form-save" className="bg-[#001DF3] hover:bg-[#0017c2] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================ BANNERS ============================
function BannersPanel() {
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(null);
  const load = async () => setList((await adminApi.get("/admin/banners")).data);
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (edit.id) {
      const id = edit.id;
      const p = { ...edit };
      delete p.id; delete p.created_at; delete p.updated_at;
      await adminApi.put(`/admin/banners/${id}`, p);
    } else {
      await adminApi.post("/admin/banners", edit);
    }
    setEdit(null); load();
  };

  const uploadBannerImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fd = new FormData();
    fd.append("file", file);
    const { data } = await adminApi.post("/admin/upload", fd, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    setEdit({ ...edit, image: `${process.env.REACT_APP_BACKEND_URL}${data.url}` });
  };

  const emptyBanner = {
    title: "", subtitle: "", accent: "#001DF3", image: "",
    tagline: "", eyebrow: "PROMO SPESIAL", tag: "HUNIAJA VOUCHER",
    amount: "", validity: "", icon_name: "Sparkles",
    cta_label: "Klaim Sekarang", cta_href: "/cari-properti",
    bg: "bg-[#001DF3]", status: "published", sort_order: list.length,
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-slate-900">Banner Hero</h2>
          <p className="text-sm text-slate-500 mt-1">Kelola banner promo di homepage</p>
        </div>
        <button
          onClick={() => setEdit(emptyBanner)}
          data-testid="admin-new-banner"
          className="bg-[#00B512] hover:bg-[#009e0f] text-white rounded-full px-5 py-2.5 text-sm font-bold shadow-lg inline-flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Tambah Banner
        </button>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map((b) => (
          <div key={b.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex gap-4">
            {b.image ? (
              <img src={b.image} alt="" className="w-20 h-20 rounded-xl object-cover shrink-0" />
            ) : (
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center text-white font-black text-xs shrink-0"
                style={{ backgroundColor: b.accent || "#001DF3" }}
              >
                {b.amount || "TXT"}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2">
                <div className="min-w-0">
                  <div className="text-[10px] font-bold tracking-widest text-slate-500 truncate">{b.eyebrow}</div>
                  <h3 className="font-black text-slate-900 truncate">{b.title} {b.subtitle}</h3>
                  <p className="text-xs text-slate-500 mt-0.5 truncate">{b.tagline}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-[10px] font-bold shrink-0 ${b.status === "published" ? "bg-green-50 text-[#00B512]" : "bg-slate-100 text-slate-500"}`}>
                  {b.status === "published" ? "Tayang" : "Draft"}
                </span>
              </div>
              <div className="mt-2 flex gap-2">
                <button onClick={() => setEdit(b)} data-testid={`admin-edit-banner-${b.id}`} className="text-xs px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-full font-bold">Edit</button>
                <button onClick={async () => { if(confirm("Hapus banner ini?")) { await adminApi.delete(`/admin/banners/${b.id}`); load(); }}} className="text-xs px-3 py-1.5 bg-[#000066]/8 text-[#000066] hover:bg-[#000066]/15 rounded-full font-bold">Hapus</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {edit && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl max-h-[92vh] overflow-y-auto" data-testid="banner-form">
            <div className="sticky top-0 bg-white p-6 border-b border-slate-100 flex justify-between items-center z-10">
              <h3 className="font-black text-lg">{edit.id ? "Edit Banner" : "Banner Baru"}</h3>
              <button onClick={() => setEdit(null)} className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center"><X className="w-4 h-4" /></button>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Image upload */}
              <div className="md:col-span-2">
                <Field label="Gambar Banner (opsional)">
                  <div className="flex items-center gap-3 flex-wrap">
                    {edit.image ? (
                      <img src={edit.image} alt="" className="w-24 h-24 rounded-xl object-cover" />
                    ) : (
                      <div className="w-24 h-24 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 text-[10px] font-semibold text-center px-2">
                        Text Slide
                      </div>
                    )}
                    <label className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 rounded-full px-4 py-2 text-sm font-semibold cursor-pointer">
                      <Upload className="w-4 h-4" /> {edit.image ? "Ganti Gambar" : "Upload Gambar"}
                      <input type="file" accept="image/*" onChange={uploadBannerImage} className="hidden" data-testid="banner-image-upload" />
                    </label>
                    {edit.image && (
                      <button
                        type="button"
                        onClick={() => setEdit({ ...edit, image: "" })}
                        className="text-xs text-[#000066] hover:underline"
                      >
                        Hapus gambar
                      </button>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1.5">Jika kosong, banner akan tampil sebagai slide text-based dengan komposisi tiket khas Huniaja.</p>
                </Field>
              </div>

              <Field label="Eyebrow (label kecil di atas)">
                <input value={edit.eyebrow || ""} onChange={(e) => setEdit({ ...edit, eyebrow: e.target.value })} placeholder="PROMO SPESIAL" className={inputCls} />
              </Field>
              <Field label="Icon (untuk slide text)">
                <select value={edit.icon_name || "Sparkles"} onChange={(e) => setEdit({ ...edit, icon_name: e.target.value })} className={inputCls}>
                  {["Sparkles", "Ticket", "Home", "Percent"].map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </Field>

              <Field label="Judul Utama">
                <input value={edit.title} onChange={(e) => setEdit({ ...edit, title: e.target.value })} placeholder="Deal Hot" className={inputCls} />
              </Field>
              <Field label="Sub-Judul (italic)">
                <input value={edit.subtitle} onChange={(e) => setEdit({ ...edit, subtitle: e.target.value })} placeholder="Dám Say!" className={inputCls} />
              </Field>

              <div className="md:col-span-2">
                <Field label="Tagline (kalimat pendek)">
                  <input value={edit.tagline || ""} onChange={(e) => setEdit({ ...edit, tagline: e.target.value })} placeholder="Voucher Belanja Rumah Hingga Rp 50 Juta" className={inputCls} />
                </Field>
              </div>

              <Field label="Warna Aksen (HEX)">
                <div className="flex gap-2">
                  <input type="color" value={edit.accent || "#001DF3"} onChange={(e) => setEdit({ ...edit, accent: e.target.value })} className="w-12 h-11 rounded-2xl border border-slate-200 cursor-pointer" />
                  <input value={edit.accent || ""} onChange={(e) => setEdit({ ...edit, accent: e.target.value })} placeholder="#00B512" className={inputCls} />
                </div>
              </Field>
              <Field label="Tag (di kartu tiket)">
                <input value={edit.tag || ""} onChange={(e) => setEdit({ ...edit, tag: e.target.value })} placeholder="HUNIAJA VOUCHER" className={inputCls} />
              </Field>

              <Field label="Amount (angka besar tiket)">
                <input value={edit.amount || ""} onChange={(e) => setEdit({ ...edit, amount: e.target.value })} placeholder="Rp50Jt" className={inputCls} />
              </Field>
              <Field label="Validity (masa berlaku)">
                <input value={edit.validity || ""} onChange={(e) => setEdit({ ...edit, validity: e.target.value })} placeholder="Berlaku s/d 31 Des" className={inputCls} />
              </Field>

              <Field label="CTA Label">
                <input value={edit.cta_label} onChange={(e) => setEdit({ ...edit, cta_label: e.target.value })} placeholder="Klaim Voucher" className={inputCls} />
              </Field>
              <Field label="CTA Link">
                <input value={edit.cta_href} onChange={(e) => setEdit({ ...edit, cta_href: e.target.value })} placeholder="/cari-properti" className={inputCls} />
              </Field>

              <Field label="Status">
                <select value={edit.status} onChange={(e) => setEdit({ ...edit, status: e.target.value })} className={inputCls}>
                  <option value="published">Tayang</option><option value="draft">Draft</option>
                </select>
              </Field>
              <Field label="Urutan Tampilan">
                <input type="number" value={edit.sort_order || 0} onChange={(e) => setEdit({ ...edit, sort_order: parseInt(e.target.value || 0) })} className={inputCls} />
              </Field>
            </div>
            <div className="sticky bottom-0 bg-white p-6 border-t border-slate-100 flex justify-end gap-3">
              <button onClick={() => setEdit(null)} className="px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-100">Batal</button>
              <button onClick={save} data-testid="banner-save" className="bg-[#001DF3] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">Simpan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================ ARTICLES ============================
function ArticlesPanel() {
  const [list, setList] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(null); // null | {new: true} | article

  const load = async () => {
    setLoading(true);
    try {
      const { data } = await adminApi.get(
        `/admin/articles${q ? `?q=${encodeURIComponent(q)}` : ""}`
      );
      setList(data || []);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
  }, []);
  useEffect(() => {
    const t = setTimeout(load, 300);
    return () => clearTimeout(t);
  }, [q]);

  const remove = async (id) => {
    if (!window.confirm("Hapus artikel ini?")) return;
    await adminApi.delete(`/admin/articles/${id}`);
    load();
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900">Berita</h1>
          <p className="text-sm text-slate-500 mt-1">
            Kelola artikel yang tayang di /berita.
          </p>
        </div>
        <button
          onClick={() => setEditing({ new: true })}
          data-testid="article-add-btn"
          className="inline-flex items-center gap-2 bg-[#001DF3] hover:bg-[#0017c2] text-white rounded-full font-bold px-5 h-10 text-sm shadow-sm transition"
        >
          <Plus className="w-4 h-4" /> Tulis Artikel
        </button>
      </div>

      <div className="relative max-w-sm mb-4">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          data-testid="article-search"
          placeholder="Cari judul atau slug..."
          className="w-full h-10 pl-10 pr-4 rounded-full bg-white border border-slate-200 focus:border-[#001DF3] outline-none text-sm text-slate-700 placeholder:text-slate-400"
        />
      </div>

      {loading ? (
        <Loader />
      ) : list.length === 0 ? (
        <div className="rounded-3xl bg-white border border-slate-200 p-14 text-center">
          <Newspaper className="w-8 h-8 text-slate-300 mx-auto" />
          <p className="text-sm text-slate-500 mt-3">Belum ada artikel.</p>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="p-4 text-left font-bold">Judul</th>
                <th className="p-4 text-left font-bold">Kategori</th>
                <th className="p-4 text-left font-bold">Status</th>
                <th className="p-4 text-left font-bold">Views</th>
                <th className="p-4 text-right font-bold">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {list.map((a) => (
                <tr
                  key={a.id}
                  data-testid={`article-row-${a.id}`}
                  className="border-t border-slate-100 hover:bg-slate-50"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      {a.image ? (
                        <img
                          src={a.image}
                          alt=""
                          className="w-12 h-12 rounded-lg object-cover shrink-0"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                          <Newspaper className="w-4 h-4 text-slate-400" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="font-bold text-slate-900 truncate">
                          {a.title}
                        </div>
                        <div className="text-xs text-slate-400 truncate">
                          /{a.slug}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-slate-500">{a.category}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                        a.status === "published"
                          ? "bg-[#00B512]/10 text-[#00B512]"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {a.status === "published" ? "Tayang" : "Draft"}
                    </span>
                  </td>
                  <td className="p-4 text-slate-500">{a.views || 0}</td>
                  <td className="p-4 text-right">
                    <div className="inline-flex items-center gap-1">
                      <IconBtn
                        onClick={() => setEditing(a)}
                        testid={`article-edit-${a.id}`}
                        title="Edit"
                      >
                        <Edit3 className="w-4 h-4" />
                      </IconBtn>
                      <IconBtn
                        onClick={() => remove(a.id)}
                        testid={`article-delete-${a.id}`}
                        title="Hapus"
                        red
                      >
                        <Trash2 className="w-4 h-4" />
                      </IconBtn>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editing && (
        <ArticleFormModal
          item={editing.new ? null : editing}
          onClose={() => setEditing(null)}
          onSaved={() => {
            setEditing(null);
            load();
          }}
        />
      )}
    </div>
  );
}

function ArticleFormModal({ item, onClose, onSaved }) {
  const isEdit = !!item;
  const [form, setForm] = useState(
    item
      ? { ...item, tags: (item.tags || []).join(", ") }
      : {
          slug: "",
          title: "",
          excerpt: "",
          category: "Panduan",
          date: new Date().toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          read: "5 min",
          image: "",
          tags: "",
          content: "",
          status: "published",
        }
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const uploadCover = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const { data } = await adminApi.post("/admin/upload", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setForm((f) => ({ ...f, image: data.url }));
    } catch {
      setError("Gagal upload cover.");
    } finally {
      setUploading(false);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.slug.trim()) {
      setError("Judul dan slug wajib.");
      return;
    }
    setLoading(true);
    setError("");
    const payload = {
      slug: form.slug.trim(),
      title: form.title.trim(),
      excerpt: form.excerpt || "",
      category: form.category || "Panduan",
      date: form.date || "",
      read: form.read || "5 min",
      image: form.image || "",
      status: form.status || "published",
      tags:
        typeof form.tags === "string"
          ? form.tags.split(",").map((t) => t.trim()).filter(Boolean)
          : form.tags || [],
      content:
        typeof form.content === "string"
          ? [{ type: "p", text: form.content }]
          : form.content || [],
      sort_order: form.sort_order || 0,
    };
    try {
      if (isEdit) {
        await adminApi.put(`/admin/articles/${item.id}`, payload);
      } else {
        await adminApi.post("/admin/articles", payload);
      }
      onSaved();
    } catch (err) {
      const detail = err.response?.data?.detail;
      setError(typeof detail === "string" ? detail : "Gagal menyimpan artikel.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-lg font-black text-slate-900">
            {isEdit ? "Edit Artikel" : "Tulis Artikel Baru"}
          </h3>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <form onSubmit={submit} className="p-6 overflow-y-auto space-y-4">
          <Field label="Judul">
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              data-testid="article-form-title"
              required
              className={inputCls}
            />
          </Field>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Field label="Slug (URL)">
              <input
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                data-testid="article-form-slug"
                required
                pattern="[a-z0-9-]+"
                placeholder="cara-beli-rumah-pertama"
                className={inputCls}
              />
            </Field>
            <Field label="Kategori">
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className={inputCls}
              >
                {[
                  "Panduan",
                  "KPR",
                  "Legal",
                  "Tips",
                  "Investasi",
                  "Keuangan",
                  "Subsidi",
                  "Keamanan",
                  "Interior",
                ].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </Field>
          </div>
          <Field label="Ringkasan (excerpt)">
            <textarea
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              rows={2}
              className="w-full rounded-2xl border border-slate-200 focus:border-[#001DF3] outline-none px-4 py-2 text-sm"
            />
          </Field>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Field label="Tanggal">
              <input
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className={inputCls}
              />
            </Field>
            <Field label="Waktu baca">
              <input
                value={form.read}
                onChange={(e) => setForm({ ...form, read: e.target.value })}
                placeholder="5 min"
                className={inputCls}
              />
            </Field>
            <Field label="Status">
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className={inputCls}
              >
                <option value="published">Tayang</option>
                <option value="draft">Draft</option>
              </select>
            </Field>
          </div>
          <Field label="Cover Image">
            <div className="flex items-center gap-3">
              {form.image && (
                <img
                  src={form.image}
                  alt=""
                  className="w-16 h-16 rounded-xl object-cover"
                />
              )}
              <label className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-[#001DF3] rounded-full px-4 h-10 text-xs font-bold cursor-pointer transition">
                <Upload className="w-4 h-4" />
                {uploading ? "Uploading..." : form.image ? "Ganti" : "Upload"}
                <input
                  type="file"
                  accept="image/*"
                  onChange={uploadCover}
                  className="hidden"
                />
              </label>
              {form.image && (
                <button
                  type="button"
                  onClick={() => setForm({ ...form, image: "" })}
                  className="text-xs text-slate-500 hover:text-[#000066]"
                >
                  Hapus
                </button>
              )}
            </div>
          </Field>
          <Field label="Tag (pisahkan koma)">
            <input
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
              placeholder="rumah pertama, kpr, tips"
              className={inputCls}
            />
          </Field>
          <Field label="Isi artikel (paragraf, akan disimpan sebagai konten)">
            <textarea
              value={
                typeof form.content === "string"
                  ? form.content
                  : (form.content && form.content[0]?.text) || ""
              }
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              rows={6}
              className="w-full rounded-2xl border border-slate-200 focus:border-[#001DF3] outline-none px-4 py-2 text-sm"
              placeholder="Tulis isi artikel..."
            />
          </Field>
          {error && (
            <div className="text-xs text-[#001DF3] bg-[#001DF3]/8 border border-[#001DF3]/20 rounded-xl p-3 font-semibold">
              {error}
            </div>
          )}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="h-11 rounded-full px-5 text-sm font-bold text-slate-600 hover:bg-slate-50 transition"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={loading}
              data-testid="article-form-submit"
              className="h-11 rounded-full px-5 text-sm font-bold bg-[#001DF3] hover:bg-[#0017c2] text-white shadow-sm disabled:opacity-60 transition"
            >
              {loading ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Publish"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ============================ helpers ============================
const inputCls = "w-full rounded-full border border-slate-200 focus:border-[#001DF3] focus:ring-1 focus:ring-[#001DF3] outline-none px-4 py-2 text-sm bg-white";

function Field({ label, children, testid }) {
  return (
    <label className="block" data-testid={testid}>
      <span className="text-xs font-bold text-slate-600 tracking-wide">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function IconBtn({ children, onClick, red, title, testid }) {
  return (
    <button
      onClick={onClick}
      title={title}
      data-testid={testid}
      className={`w-8 h-8 rounded-lg flex items-center justify-center transition ${
        red ? "hover:bg-[#000066]/8 text-[#000066]" : "hover:bg-slate-100 text-slate-600"
      }`}
    >
      {children}
    </button>
  );
}

function Loader() {
  return (
    <div className="flex justify-center py-4">
      <Loader2 className="w-5 h-5 animate-spin text-slate-400" />
    </div>
  );
}
