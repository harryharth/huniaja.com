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
} from "lucide-react";
import { adminApi, clearToken, getToken } from "./adminApi";

const TABS = [
  { key: "stats", label: "Overview", Icon: BarChart3 },
  { key: "properties", label: "Properti", Icon: Home },
  { key: "banners", label: "Banner", Icon: ImageIcon },
  { key: "articles", label: "Berita", Icon: Newspaper },
];

export default function AdminDashboardPage() {
  const [tab, setTab] = useState("stats");
  const navigate = useNavigate();

  if (!getToken()) return <Navigate to="/admin/login" replace />;

  const logout = () => {
    clearToken();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#000066] text-white flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-lg font-black">Admin Huniaja</h1>
          <p className="text-xs text-white/60 mt-0.5">Content Management</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              data-testid={`admin-tab-${t.key}`}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition ${
                tab === t.key
                  ? "bg-white text-[#000066]"
                  : "text-white/80 hover:bg-white/10"
              }`}
            >
              <t.Icon className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </nav>
        <button
          onClick={logout}
          data-testid="admin-logout"
          className="m-3 flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm text-white/70 hover:bg-white/10"
        >
          <LogOut className="w-4 h-4" /> Keluar
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto max-h-screen">
        {tab === "stats" && <StatsPanel />}
        {tab === "properties" && <PropertiesPanel />}
        {tab === "banners" && <BannersPanel />}
        {tab === "articles" && <ArticlesPanel />}
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
  const cards = [
    { label: "Total Properti", value: s.properties.total, sub: `${s.properties.published} tayang` },
    { label: "Total Views", value: s.properties.views, sub: "properti dilihat" },
    { label: "Total Likes", value: s.properties.likes, sub: "disimpan pengguna" },
    { label: "Artikel Berita", value: s.articles.total, sub: `${s.articles.published} tayang` },
    { label: "Banner Aktif", value: s.banners.total, sub: "hero carousel" },
  ];
  return (
    <div>
      <h2 className="text-2xl font-black text-slate-900">Ringkasan Konten</h2>
      <p className="text-sm text-slate-500 mt-1">Statistik real-time dari database.</p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
        {cards.map((c) => (
          <div key={c.label} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
            <div className="text-xs text-slate-500">{c.label}</div>
            <div className="text-3xl font-black text-[#001DF3] mt-2">{c.value}</div>
            <div className="text-[11px] text-slate-400 mt-1">{c.sub}</div>
          </div>
        ))}
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
      facilities: ["Carport", "Taman", "Keamanan 24 Jam"],
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
            <select value={item.condition} onChange={(e) => set("condition", e.target.value)} className={inputCls}>
              {["Baru", "Second", "Lelang"].map(c => <option key={c}>{c}</option>)}
            </select>
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
