import React, { useEffect, useState } from "react";
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

const TABS = [
  { key: "stats", label: "Overview", Icon: BarChart3, color: "from-[#001DF3] to-[#7C3AED]" },
  { key: "properties", label: "Properti", Icon: Home, color: "from-[#00B512] to-[#0EA5E9]" },
  { key: "banners", label: "Banner", Icon: ImageIcon, color: "from-[#F59E0B] to-[#EC4899]" },
  { key: "articles", label: "Berita", Icon: Newspaper, color: "from-[#EC4899] to-[#8B5CF6]" },
];

export default function AdminDashboardPage() {
  const [tab, setTab] = useState("stats");
  const navigate = useNavigate();

  if (!getToken()) return <Navigate to="/admin/login" replace />;

  const logout = () => {
    clearToken();
    navigate("/");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-white to-[#E9F8EC] flex">
      {/* Decorative background blobs */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ backgroundColor: "#001DF3" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 right-1/4 w-[520px] h-[520px] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ backgroundColor: "#00B512" }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 -right-40 w-[420px] h-[420px] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ backgroundColor: "#EC4899" }}
      />

      {/* Sidebar */}
      <aside className="relative z-10 w-24 md:w-72 bg-white/60 backdrop-blur-2xl border-r border-white/60 flex flex-col shadow-[0_8px_40px_-12px_rgba(0,29,243,0.15)]">
        <div className="p-4 md:p-6 border-b border-white/60 flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#000066] to-[#001DF3] flex items-center justify-center shadow-lg shadow-[#001DF3]/30">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="hidden md:block">
            <h1 className="text-base font-black text-slate-900">Huniaja</h1>
            <p className="text-[11px] text-slate-500 mt-0.5">Content Studio</p>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1.5">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              data-testid={`admin-tab-${t.key}`}
              title={t.label}
              className={`w-full flex items-center gap-3 px-3 md:px-4 py-3 rounded-2xl text-sm font-semibold transition-all group ${
                tab === t.key
                  ? `bg-gradient-to-r ${t.color} text-white shadow-lg`
                  : "text-slate-600 hover:bg-white hover:shadow-sm"
              }`}
            >
              <t.Icon className="w-5 h-5 shrink-0" />
              <span className="hidden md:inline">{t.label}</span>
              {tab === t.key && (
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto hidden md:block" />
              )}
            </button>
          ))}
        </nav>
        <button
          onClick={logout}
          data-testid="admin-logout"
          className="m-3 flex items-center gap-2 justify-center md:justify-start px-4 py-2.5 rounded-2xl text-sm text-slate-600 hover:bg-red-50 hover:text-red-600 transition"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden md:inline">Keluar</span>
        </button>
      </aside>

      {/* Main */}
      <main className="relative z-10 flex-1 overflow-y-auto max-h-screen">
        <div className="p-5 md:p-8 lg:p-10">
          {tab === "stats" && <StatsPanel />}
          {tab === "properties" && <PropertiesPanel />}
          {tab === "banners" && <BannersPanel />}
          {tab === "articles" && <ArticlesPanel />}
        </div>
      </main>
    </div>
  );
}

// ============================ STATS ============================
function StatsPanel() {
  const [s, setS] = useState(null);
  useEffect(() => {
    adminApi.get("/admin/stats").then((r) => setS(r.data));
  }, []);
  if (!s) return <Loader />;

  const bigCards = [
    {
      label: "Total Properti",
      value: s.properties.total,
      sub: `${s.properties.published} tayang`,
      Icon: Home,
      gradient: "from-[#001DF3] to-[#7C3AED]",
      textColor: "text-white",
    },
    {
      label: "Total Views",
      value: s.properties.views,
      sub: "dilihat pengguna",
      Icon: Eye,
      gradient: "from-[#0EA5E9] to-[#00B512]",
      textColor: "text-white",
    },
    {
      label: "Total Likes",
      value: s.properties.likes,
      sub: "disimpan pengguna",
      Icon: Heart,
      gradient: "from-[#EC4899] to-[#F59E0B]",
      textColor: "text-white",
    },
  ];

  const smallCards = [
    { label: "Artikel", value: s.articles.total, sub: `${s.articles.published} tayang`, Icon: Newspaper, color: "#8B5CF6" },
    { label: "Banner", value: s.banners.total, sub: "hero carousel", Icon: ImageIcon, color: "#F59E0B" },
    { label: "Uptime", value: "99.9%", sub: "sistem sehat", Icon: TrendingUp, color: "#00B512" },
    { label: "Notifikasi", value: 0, sub: "belum dibaca", Icon: Bell, color: "#EC4899" },
  ];

  return (
    <div>
      {/* Greeting header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur rounded-full px-3 py-1 text-[11px] font-bold text-[#001DF3] tracking-widest uppercase mb-3 border border-white shadow-sm">
            <Sparkles className="w-3 h-3" /> ADMIN STUDIO
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            Hey Admin! <span className="bg-gradient-to-r from-[#001DF3] to-[#00B512] bg-clip-text text-transparent">Selamat pagi.</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500 mt-2">
            Ini ringkasan konten Huniaja hari ini — semua tetap dalam kendalimu.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-11 h-11 rounded-2xl bg-white/70 backdrop-blur border border-white shadow-sm hover:shadow-md transition flex items-center justify-center text-slate-600">
            <Bell className="w-5 h-5" />
          </button>
          <div className="bg-white/70 backdrop-blur rounded-full pl-4 pr-1 py-1 border border-white shadow-sm flex items-center gap-3">
            <div className="text-right">
              <div className="text-xs text-slate-500">Score hari ini</div>
              <div className="text-sm font-black text-slate-900">532.9</div>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00B512] to-[#0EA5E9] flex items-center justify-center text-white text-sm font-black shadow-md">
              A
            </div>
          </div>
        </div>
      </div>

      {/* Big colorful cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {bigCards.map((c) => (
          <div
            key={c.label}
            className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${c.gradient} ${c.textColor} p-6 shadow-[0_20px_50px_-16px_rgba(0,29,243,0.30)] hover:-translate-y-1 transition-all`}
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-white/5 blur-xl pointer-events-none" />
            <div className="relative flex items-start justify-between">
              <div>
                <div className="text-xs font-bold tracking-widest opacity-80 uppercase">{c.label}</div>
                <div className="text-5xl font-black mt-3 leading-none">{c.value}</div>
                <div className="text-xs opacity-80 mt-2">{c.sub}</div>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                <c.Icon className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Small cards row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
        {smallCards.map((c) => (
          <div
            key={c.label}
            className="bg-white/70 backdrop-blur rounded-2xl border border-white shadow-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
              style={{ backgroundColor: `${c.color}18` }}
            >
              <c.Icon className="w-5 h-5" style={{ color: c.color }} />
            </div>
            <div className="text-2xl font-black text-slate-900">{c.value}</div>
            <div className="text-xs font-bold text-slate-700 mt-1">{c.label}</div>
            <div className="text-[11px] text-slate-500 mt-0.5">{c.sub}</div>
          </div>
        ))}
      </div>

      {/* Quick actions strip */}
      <div className="mt-8 bg-white/70 backdrop-blur rounded-3xl border border-white shadow-sm p-6">
        <div className="flex items-start justify-between mb-5">
          <div>
            <h3 className="text-lg font-black text-slate-900">Aksi Cepat</h3>
            <p className="text-xs text-slate-500 mt-1">Loncat langsung ke tugas yang sering dikerjakan.</p>
          </div>
          <Zap className="w-5 h-5 text-[#F59E0B]" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Tambah Properti", icon: Home, tab: "properties", color: "#001DF3" },
            { label: "Buat Banner", icon: ImageIcon, tab: "banners", color: "#F59E0B" },
            { label: "Publish Artikel", icon: Newspaper, tab: "articles", color: "#EC4899" },
            { label: "Cek Chat AI", icon: MessageCircle, tab: null, color: "#00B512" },
          ].map((a) => (
            <button
              key={a.label}
              className="flex items-center gap-3 bg-white rounded-2xl border border-slate-100 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all text-left"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${a.color}18` }}
              >
                <a.icon className="w-5 h-5" style={{ color: a.color }} />
              </div>
              <div className="text-sm font-bold text-slate-900 leading-tight">{a.label}</div>
            </button>
          ))}
        </div>
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
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
          <h3 className="text-lg font-black">{item.id ? "Edit Properti" : "Tambah Properti"}</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center">
            <X className="w-4 h-4" />
          </button>
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
                { key: "Baru", color: "#EC4899" },
                { key: "Second", color: "#F59E0B" },
                { key: "Lelang", color: "#0EA5E9" },
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
            <input value={item.installment} onChange={(e) => set("installment", e.target.value)} className={inputCls} />
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

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-slate-900">Banner Hero</h2>
          <p className="text-sm text-slate-500 mt-1">Kelola banner promo di homepage</p>
        </div>
        <button
          onClick={() => setEdit({ title: "", subtitle: "", accent: "", cta_label: "", cta_href: "", bg: "bg-[#001DF3]", status: "published", sort_order: list.length })}
          className="bg-[#00B512] hover:bg-[#009e0f] text-white rounded-full px-5 py-2.5 text-sm font-bold shadow-lg inline-flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Tambah Banner
        </button>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map((b) => (
          <div key={b.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-black text-slate-900">{b.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{b.subtitle}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${b.status === "published" ? "bg-green-50 text-[#00B512]" : "bg-slate-100 text-slate-500"}`}>
                {b.status === "published" ? "Tayang" : "Draft"}
              </span>
            </div>
            <div className="mt-3 flex gap-2">
              <button onClick={() => setEdit(b)} className="text-xs px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-full font-bold">Edit</button>
              <button onClick={async () => { await adminApi.delete(`/admin/banners/${b.id}`); load(); }} className="text-xs px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-full font-bold">Hapus</button>
            </div>
          </div>
        ))}
      </div>

      {edit && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-black">{edit.id ? "Edit Banner" : "Banner Baru"}</h3>
              <button onClick={() => setEdit(null)} className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center"><X className="w-4 h-4" /></button>
            </div>
            <div className="p-6 space-y-3">
              <Field label="Judul"><input value={edit.title} onChange={(e) => setEdit({ ...edit, title: e.target.value })} className={inputCls} /></Field>
              <Field label="Subtitle"><input value={edit.subtitle} onChange={(e) => setEdit({ ...edit, subtitle: e.target.value })} className={inputCls} /></Field>
              <Field label="Accent Text"><input value={edit.accent} onChange={(e) => setEdit({ ...edit, accent: e.target.value })} className={inputCls} /></Field>
              <Field label="CTA Label"><input value={edit.cta_label} onChange={(e) => setEdit({ ...edit, cta_label: e.target.value })} className={inputCls} /></Field>
              <Field label="CTA Link"><input value={edit.cta_href} onChange={(e) => setEdit({ ...edit, cta_href: e.target.value })} className={inputCls} /></Field>
              <Field label="Status">
                <select value={edit.status} onChange={(e) => setEdit({ ...edit, status: e.target.value })} className={inputCls}>
                  <option value="published">Tayang</option><option value="draft">Draft</option>
                </select>
              </Field>
            </div>
            <div className="p-6 border-t flex justify-end gap-3">
              <button onClick={() => setEdit(null)} className="px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-100">Batal</button>
              <button onClick={save} className="bg-[#001DF3] text-white px-5 py-2 rounded-full text-sm font-bold">Simpan</button>
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
  const load = async () => setList((await adminApi.get("/admin/articles")).data);
  useEffect(() => { load(); }, []);
  return (
    <div>
      <h2 className="text-2xl font-black text-slate-900">Artikel Berita</h2>
      <p className="text-sm text-slate-500 mt-1">{list.length} artikel · fitur edit lengkap segera hadir</p>
      <div className="mt-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-600">
            <tr><th className="p-4 text-left">Judul</th><th className="p-4 text-left">Kategori</th><th className="p-4 text-left">Status</th></tr>
          </thead>
          <tbody>
            {list.map((a) => (
              <tr key={a.id} className="border-t border-slate-100">
                <td className="p-4">{a.title}</td>
                <td className="p-4 text-slate-500">{a.category}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${a.status === "published" ? "bg-green-50 text-[#00B512]" : "bg-slate-100"}`}>
                    {a.status === "published" ? "Tayang" : "Draft"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
        red ? "hover:bg-red-50 text-red-500" : "hover:bg-slate-100 text-slate-600"
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
