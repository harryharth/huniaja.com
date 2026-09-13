import React, { useMemo, useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  Home,
  Sparkles,
  RotateCcw,
  Gavel,
  Zap,
  BadgeCheck,
  Wallet,
  ChevronLeft,
  ChevronRight,
  Hammer,
  CreditCard,
  Trees,
  Landmark,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListingCard from "../components/ListingCard";
import { allListings } from "../mock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Slider } from "../components/ui/slider";

const propertyTypes = [
  { label: "Rumah", Icon: Home, key: "Rumah" },
];

const conditions = [
  { label: "Baru", Icon: Sparkles, color: "#EF4444", key: "Baru" },
  { label: "Second", Icon: RotateCcw, color: "#F59E0B", key: "Second" },
  { label: "Lelang", Icon: Gavel, color: "#0EA5E9", key: "Lelang" },
];

const locationTabs = [
  "Semua",
  "Kab. Bogor",
  "Kab. Bekasi",
  "Kota Depok",
  "Tangerang",
  "Kota Bekasi",
];

const tipsFaq = [
  {
    q: "Apa itu KPR Syariah dan bagaimana cara kerjanya?",
    a: "KPR Syariah adalah pembiayaan pembelian properti berbasis prinsip syariah (jual-beli / kemitraan) tanpa bunga. Bank membeli properti kemudian menjualnya kepada Anda dengan margin yang disepakati di awal.",
  },
  {
    q: "Apa yang membedakan KPR Syariah dengan KPR Biasa?",
    a: "Perbedaan utamanya pada akad: KPR Syariah memakai akad Murabahah atau MMQ dengan margin flat, sementara KPR konvensional memakai bunga floating yang bisa naik-turun.",
  },
  {
    q: "Bagaimana cara mengajukan KPR Syariah?",
    a: "Lakukan simulasi di halaman /kpr, pilih program, lengkapi dokumen, dan tim Huniaja akan meneruskan ke bank rekanan.",
  },
  {
    q: "Apa saja jenis akad yang digunakan dalam KPR Syariah?",
    a: "Umumnya: Murabahah (jual-beli dengan margin), Musyarakah Mutanaqisah / MMQ (kemitraan menurun), dan IMBT (sewa berujung kepemilikan).",
  },
  {
    q: "Apakah ada persyaratan khusus untuk mengajukan KPR Syariah?",
    a: "Persyaratan mirip KPR konvensional: KTP, NPWP, slip gaji / laporan usaha. Tambahannya, properti harus lolos kriteria syariah bank.",
  },
  {
    q: "Apa keuntungan KPR Syariah dibandingkan KPR konvensional?",
    a: "Angsuran flat sampai akhir tenor, tidak ada penalti percepatan pelunasan, dan sesuai prinsip syariat Islam.",
  },
];

export default function CariPropertiPage() {
  const [type, setType] = useState(null);
  const [condition, setCondition] = useState(null);
  const [city, setCity] = useState("Semua");
  const [priceRange, setPriceRange] = useState([200, 1000]);
  const [certificate, setCertificate] = useState("");
  const [kprType, setKprType] = useState("");
  const [electricity, setElectricity] = useState("");
  const [facility, setFacility] = useState([]);
  const [installmentOnly, setInstallmentOnly] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return allListings.filter((it) => {
      if (type && it.type !== type) return false;
      if (condition && it.condition !== condition) return false;
      if (city !== "Semua" && it.city !== city) return false;
      const priceInMillions = it.priceValue / 1000000;
      if (priceInMillions < priceRange[0] || priceInMillions > priceRange[1])
        return false;
      if (
        query &&
        !(
          it.title.toLowerCase().includes(query.toLowerCase()) ||
          it.location.toLowerCase().includes(query.toLowerCase())
        )
      )
        return false;
      return true;
    });
  }, [type, condition, city, priceRange, query]);

  const perPage = 12;
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const resetFilters = () => {
    setType(null);
    setCondition(null);
    setCity("Semua");
    setPriceRange([200, 1000]);
    setCertificate("");
    setKprType("");
    setElectricity("");
    setFacility([]);
    setInstallmentOnly(false);
    setQuery("");
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-white pt-8 md:pt-10 pb-14">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sidebar */}
            <aside className="lg:col-span-3 space-y-3">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-3">
                <div className="flex items-center gap-2 bg-slate-50 rounded-full px-3 py-2">
                  <Home className="w-4 h-4 text-[#001DF3]" />
                  <span className="text-sm text-slate-500 font-semibold">Cari Rumah</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {propertyTypes.map((t) => {
                    const active = type === t.key;
                    return (
                      <button
                        key={t.key}
                        onClick={() => {
                          setType(active ? null : t.key);
                          setPage(1);
                        }}
                        className="flex flex-col items-center gap-1 py-2"
                      >
                        <span
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                            active
                              ? "bg-[#001DF3] text-white shadow-md"
                              : "bg-blue-50 text-[#001DF3] hover:bg-blue-100"
                          }`}
                        >
                          <t.Icon className="w-5 h-5" />
                        </span>
                        <span
                          className={`text-[10px] ${
                            active ? "text-[#001DF3] font-semibold" : "text-slate-600"
                          }`}
                        >
                          {t.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <FilterAccordion title="Kondisi" Icon={Sparkles} defaultOpen>
                <div className="grid grid-cols-3 gap-2">
                  {conditions.map((c) => {
                    const active = condition === c.key;
                    return (
                      <button
                        key={c.key}
                        onClick={() => {
                          setCondition(active ? null : c.key);
                          setPage(1);
                        }}
                        className="flex flex-col items-center gap-1 py-2"
                      >
                        <span
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                            active
                              ? "bg-[#001DF3] text-white shadow-md"
                              : "bg-slate-50 hover:bg-slate-100"
                          }`}
                          style={active ? {} : { color: c.color }}
                        >
                          <c.Icon className="w-5 h-5" />
                        </span>
                        <span
                          className={`text-[11px] ${
                            active ? "text-[#001DF3] font-semibold" : "text-slate-700"
                          }`}
                        >
                          {c.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </FilterAccordion>

              <FilterAccordion title="Harga (Juta Rp)" Icon={Wallet}>
                <div className="text-xs text-slate-600 mb-2 font-semibold">
                  Rp {priceRange[0]} Jt - Rp {priceRange[1]} Jt
                </div>
                <Slider
                  value={priceRange}
                  min={100}
                  max={2000}
                  step={50}
                  onValueChange={(v) => {
                    setPriceRange(v);
                    setPage(1);
                  }}
                />
              </FilterAccordion>

              <FilterAccordion title="Fasilitas" Icon={Trees}>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                  {[
                    "Kolam Renang",
                    "Taman",
                    "Carport",
                    "Garasi",
                    "AC",
                    "CCTV",
                    "Security 24 Jam",
                    "Playground",
                  ].map((f) => (
                    <label key={f} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="accent-[#001DF3]"
                        checked={facility.includes(f)}
                        onChange={(e) => {
                          if (e.target.checked)
                            setFacility([...facility, f]);
                          else setFacility(facility.filter((x) => x !== f));
                        }}
                      />
                      {f}
                    </label>
                  ))}
                </div>
              </FilterAccordion>

              <FilterAccordion title="Jenis KPR" Icon={Landmark}>
                <RadioList
                  name="kpr"
                  value={kprType}
                  onChange={setKprType}
                  options={["KPR Konvensional", "KPR Syariah", "KPR Take Over", "Cash Keras"]}
                />
              </FilterAccordion>

              <button
                onClick={resetFilters}
                className="w-full mt-2 border border-slate-200 rounded-full py-2 text-xs font-semibold text-slate-700 hover:border-[#001DF3] hover:text-[#001DF3] transition"
              >
                Reset Filter
              </button>
            </aside>

            {/* Right side */}
            <div className="lg:col-span-9">
              {/* Location tabs */}
              <div className="flex flex-wrap gap-2 mb-4 items-center">
                <div className="flex gap-2 overflow-x-auto flex-1 scrollbar-hide">
                  {locationTabs.map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setCity(t);
                        setPage(1);
                      }}
                      className={`shrink-0 text-xs font-medium px-3 py-1.5 rounded-full border transition ${
                        city === t
                          ? "bg-[#001DF3] text-white border-[#001DF3]"
                          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <button className="shrink-0 flex items-center gap-1 text-xs font-medium bg-[#00B512] text-white border border-transparent px-3 py-1.5 rounded-full">
                  <SlidersHorizontal className="w-3.5 h-3.5" /> Filter Lokasi
                </button>
              </div>

              <p className="text-xs text-slate-500 mb-3">
                Menampilkan{" "}
                <span className="font-bold text-slate-900">
                  {filtered.length}
                </span>{" "}
                properti
              </p>

              {paged.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {paged.map((item, i) => (
                    <ListingCard
                      key={item.id + i}
                      item={item}
                      variant={i === 0 && currentPage === 1 ? "featured-download" : "default"}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 text-slate-500 text-sm">
                  Properti dengan filter tersebut belum tersedia. Coba ubah
                  filter Anda.
                </div>
              )}

              {/* Pagination */}
              {filtered.length > perPage && (
                <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
                  <button
                    onClick={() => setPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#001DF3] hover:text-[#001DF3] flex items-center justify-center disabled:opacity-40 transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (p) => (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`w-9 h-9 rounded-full text-sm font-semibold transition ${
                          p === currentPage
                            ? "bg-[#001DF3] text-white"
                            : "border border-slate-200 text-slate-700 hover:border-[#001DF3] hover:text-[#001DF3]"
                        }`}
                      >
                        {p}
                      </button>
                    )
                  )}
                  <button
                    onClick={() =>
                      setPage(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#001DF3] hover:text-[#001DF3] flex items-center justify-center disabled:opacity-40 transition"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-white py-10 md:py-14 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
              Tips Seputar Properti
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {tipsFaq.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`t${i}`}
                  className="bg-white rounded-2xl border border-slate-200 px-5 hover:shadow-sm transition"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <span className="w-7 h-7 rounded-full bg-[#001DF3] text-white font-bold text-xs flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {f.q}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-600 leading-relaxed pl-10">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="w-full max-w-md aspect-square rounded-[44px] bg-slate-100 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=80"
                alt="Tips Properti"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FilterAccordion({ title, Icon, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
      >
        <span className="flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4 text-[#001DF3]" />}
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-slate-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-slate-500" />
        )}
      </button>
      {open && <div className="px-4 pb-4 pt-1">{children}</div>}
    </div>
  );
}

function RadioList({ name, options, value, onChange }) {
  return (
    <div className="space-y-2">
      {options.map((o) => (
        <label
          key={o}
          className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            className="accent-[#001DF3]"
            checked={value === o}
            onChange={() => onChange && onChange(o)}
          />
          {o}
        </label>
      ))}
    </div>
  );
}
