import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  BadgeCheck,
  Heart,
  Share2,
  MessageCircle,
  Phone,
  Calculator,
  Download,
  Home,
  Zap,
  Shield,
  Car,
  Trees,
  Wifi,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListingCard from "../components/ListingCard";
import { Button } from "../components/ui/button";
import { allListings } from "../mock";
import { WA_URL } from "../components/ChatWidget";
import { KprSyariahDialog } from "./KprDialogs";
import BrosurLeadDialog from "../components/BrosurLeadDialog";
import { fetchProperties, fetchProperty } from "../lib/publicApi";
import { groupFacilities, CATEGORY_META } from "../lib/facilities";
import { useAuth } from "../context/AuthContext";
import { useT } from "../lib/i18n";
import axios from "axios";

const USER_API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function PropertyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const t = useT();
  const [item, setItem] = useState(() => allListings.find((l) => l.id === id));
  const [allItems, setAllItems] = useState(allListings);
  const [notFound, setNotFound] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeBusy, setLikeBusy] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [kprOpen, setKprOpen] = useState(false);
  const [brosurOpen, setBrosurOpen] = useState(false);

  // Fetch live data from backend
  useEffect(() => {
    let mounted = true;
    (async () => {
      const [live, single] = await Promise.all([
        fetchProperties(),
        fetchProperty(id),
      ]);
      if (!mounted) return;
      if (single) {
        setItem(single);
        setLiked(single.liked || false);
      }
      if (live && live.length) {
        setAllItems(live);
        if (!single) {
          const found = live.find((l) => l.id === id);
          if (found) setItem(found);
          else if (!allListings.find((l) => l.id === id)) setNotFound(true);
        }
      } else if (!single && !allListings.find((l) => l.id === id)) {
        setNotFound(true);
      }
    })();
    return () => (mounted = false);
  }, [id]);

  if (notFound || !item) {
    if (notFound) return <Navigate to="/cari-properti" replace />;
    return null;
  }

  const gallery = (item.gallery && item.gallery.length)
    ? [item.image, ...item.gallery.filter((g) => g && g !== item.image)]
    : [
        item.image,
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
      ];

  const related = allItems
    .filter((l) => l.id !== item.id && l.city === item.city)
    .slice(0, 3);

  const facilities = [
    { Icon: Car, label: "Carport 2 Mobil" },
    { Icon: Trees, label: "Taman Depan" },
    { Icon: Wifi, label: "WiFi Ready" },
    { Icon: Shield, label: "Keamanan 24 Jam" },
    { Icon: Home, label: "Rumah Cluster" },
    { Icon: Zap, label: "Listrik 2200 VA" },
  ];

  const specifications = [
    { label: "Luas Tanah", value: item.specs.lt },
    { label: "Luas Bangunan", value: item.specs.lb },
    { label: "Kamar Tidur", value: `${item.specs.kt} Kamar` },
    { label: "Kamar Mandi", value: `${item.specs.km} Kamar` },
    { label: "Sertifikat", value: "SHM" },
    { label: "Tipe Properti", value: item.type },
    { label: "Kondisi", value: item.condition },
    { label: "Kota", value: item.city },
  ];

  const share = () => {
    if (navigator.share) {
      navigator
        .share({
          title: item.title,
          text: `${item.title} - ${item.price} di ${item.location}`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Breadcrumb */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4">
          <Link
            to="/cari-properti"
            data-testid="prop-back-link"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#001DF3] transition"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Properti
          </Link>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left: Gallery + Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Gallery */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
              <div className="relative group">
                <img
                  src={gallery[activeImg]}
                  alt={item.title}
                  className="w-full aspect-[16/10] object-cover"
                />

                {/* Slide controls */}
                {gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImg((activeImg - 1 + gallery.length) % gallery.length)
                      }
                      aria-label="Sebelumnya"
                      data-testid="prop-gallery-prev"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/95 backdrop-blur shadow-md flex items-center justify-center hover:bg-white transition"
                    >
                      <ChevronLeft className="w-5 h-5 text-slate-800" strokeWidth={2.4} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveImg((activeImg + 1) % gallery.length)}
                      aria-label="Berikutnya"
                      data-testid="prop-gallery-next"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/95 backdrop-blur shadow-md flex items-center justify-center hover:bg-white transition"
                    >
                      <ChevronRight className="w-5 h-5 text-slate-800" strokeWidth={2.4} />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                      {activeImg + 1} / {gallery.length}
                    </div>
                  </>
                )}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1 bg-white/95 backdrop-blur text-[#001DF3] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Terverifikasi
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={async () => {
                      if (!user) {
                        navigate("/login");
                        return;
                      }
                      if (likeBusy) return;
                      setLikeBusy(true);
                      const next = !liked;
                      setLiked(next);
                      try {
                        await axios.post(
                          `${USER_API}/user/favorites/${id}`,
                          {},
                          { withCredentials: true }
                        );
                      } catch {
                        setLiked(!next);
                      } finally {
                        setLikeBusy(false);
                      }
                    }}
                    data-testid="prop-like-btn"
                    className="w-10 h-10 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-sm hover:scale-110 transition"
                    aria-label="Simpan"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        liked ? "fill-[#00B512] text-[#00B512]" : "text-slate-600"
                      }`}
                    />
                  </button>
                  <button
                    onClick={share}
                    data-testid="prop-share-btn"
                    className="w-10 h-10 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-sm hover:scale-110 transition"
                    aria-label="Bagikan"
                  >
                    <Share2 className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
              </div>
              <div className="p-3 grid grid-cols-5 gap-2">
                {gallery.map((g, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition ${
                      activeImg === i
                        ? "border-[#001DF3]"
                        : "border-transparent hover:border-slate-200"
                    }`}
                  >
                    <img
                      src={g}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Property title + price — below gallery (mobile only) */}
            <div className="lg:hidden bg-white rounded-3xl p-5 md:p-6 border border-slate-100 shadow-sm">
              <PropertyHeader item={item} />
            </div>

            {/* Description */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm">
              <h2 className="text-lg md:text-xl font-black text-slate-900">
                Tentang Properti Ini
              </h2>
              <p className="text-sm md:text-[15px] text-slate-600 mt-3 leading-[1.8]">
                {item.title} berlokasi strategis di {item.location}. Rumah
                dengan konsep modern minimalis ini menawarkan kenyamanan
                keluarga muda dengan {item.specs.kt} kamar tidur luas,{" "}
                {item.specs.km} kamar mandi, dan area bangunan {item.specs.lb}.
              </p>
              <p className="text-sm md:text-[15px] text-slate-600 mt-3 leading-[1.8]">
                Akses mudah ke jalan tol, sekolah favorit, pusat perbelanjaan,
                dan rumah sakit. Lingkungan cluster dengan keamanan 24 jam
                menjadikan properti ini pilihan ideal untuk investasi jangka
                panjang atau hunian keluarga.
              </p>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm">
              <h2 className="text-lg md:text-xl font-black text-slate-900">
                Spesifikasi
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
                {specifications.map((s) => (
                  <div key={s.label} className="bg-slate-50 rounded-2xl p-4">
                    <div className="text-[11px] text-slate-500 uppercase tracking-wide">
                      {s.label}
                    </div>
                    <div className="text-sm md:text-base font-bold text-slate-900 mt-1">
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities — grouped by category, synced with admin dashboard checklist */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm">
              <h2 className="text-lg md:text-xl font-black text-slate-900">
                {t("Fasilitas & Lingkungan")}
              </h2>
              <FacilitiesAccordion facilities={item.facilities || []} />
            </div>

            {/* Location */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm">
              <h2 className="text-lg md:text-xl font-black text-slate-900">
                Lokasi
              </h2>
              <div className="flex items-start gap-3 mt-3">
                <MapPin className="w-5 h-5 text-[#001DF3] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {item.location}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {item.city}, Indonesia
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Sticky sidebar (agent + trust) */}
          <div className="space-y-4">
            {/* Property title + price (desktop only — original position) */}
            <div className="hidden lg:block bg-white rounded-3xl p-5 md:p-6 border border-slate-100 shadow-sm">
              <PropertyHeader item={item} />
            </div>

            <div className="bg-white rounded-3xl p-5 md:p-6 border border-slate-100 shadow-sm lg:sticky lg:top-24">
              {/* Agent card */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#001DF3] text-white font-black flex items-center justify-center text-lg">
                    D
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-slate-900 truncate">
                      Dea - Admin Huniaja
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00B512]" />
                      <span className="text-[11px] text-slate-500">
                        Online sekarang
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                  Tim kami akan membantu proses survey, negosiasi, hingga
                  serah terima kunci - gratis tanpa biaya tambahan.
                </p>
              </div>

              {/* Trust badges */}
              <div className="mt-5 grid grid-cols-2 gap-2 pt-5 border-t border-slate-100">
                <div className="flex items-center gap-2 text-[11px] text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00B512]" />
                  Terverifikasi
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00B512]" />
                  Legal Aman
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00B512]" />
                  Bebas Sengketa
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00B512]" />
                  KPR Ready
                </div>
              </div>

              {/* CTA buttons (desktop only — original position) */}
              <div className="mt-5 pt-5 border-t border-slate-100 space-y-2.5">
                <Button
                  asChild
                  className="w-full h-11 bg-[#00B512] hover:bg-[#009e0f] text-white rounded-full font-bold text-sm shadow-sm transition"
                >
                  <a
                    href={WA_URL(
                      `Halo, saya tertarik dengan ${item.title} (${item.location}) seharga ${item.price}. Bisa dijadwalkan survey?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="prop-wa-btn-desktop"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" /> Chat via WhatsApp
                  </a>
                </Button>
                <Button
                  onClick={() => setKprOpen(true)}
                  data-testid="prop-kpr-btn-desktop"
                  className="w-full h-11 bg-[#001DF3] hover:bg-[#0017c2] text-white rounded-full font-bold text-sm shadow-sm transition"
                >
                  <Calculator className="w-4 h-4 mr-2" /> Simulasi KPR
                </Button>
                <Button
                  onClick={() => setBrosurOpen(true)}
                  data-testid="prop-brosur-btn-desktop"
                  className="w-full h-11 bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 rounded-full font-bold text-sm transition"
                >
                  <Download className="w-4 h-4 mr-2" /> Download Brosur
                </Button>
              </div>

              <BrosurLeadDialog
                open={brosurOpen}
                onClose={() => setBrosurOpen(false)}
                property={item}
              />
            </div>
          </div>
        </div>

        {/* Bottom full-width CTA bar (mobile only) */}
        <div className="lg:hidden mt-8 md:mt-10 bg-white rounded-3xl p-5 md:p-6 border border-slate-100 shadow-sm">
          <div className="text-center mb-4">
            <h3 className="text-base md:text-lg font-black text-slate-900">
              Tertarik dengan properti ini?
            </h3>
            <p className="text-xs md:text-sm text-slate-500 mt-1">
              Pilih cara termudah untuk kamu lanjut ke langkah berikutnya
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button
              asChild
              className="h-12 bg-[#00B512] hover:bg-[#009e0f] text-white rounded-full font-bold text-sm shadow-sm transition"
            >
              <a
                href={WA_URL(
                  `Halo, saya tertarik dengan ${item.title} (${item.location}) seharga ${item.price}. Bisa dijadwalkan survey?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="prop-wa-btn"
              >
                <MessageCircle className="w-4 h-4 mr-2" /> Chat via WhatsApp
              </a>
            </Button>
            <Button
              onClick={() => setKprOpen(true)}
              data-testid="prop-kpr-btn"
              className="h-12 bg-[#001DF3] hover:bg-[#0017c2] text-white rounded-full font-bold text-sm shadow-sm transition"
            >
              <Calculator className="w-4 h-4 mr-2" /> Simulasi KPR
            </Button>
            <Button
              onClick={() => setBrosurOpen(true)}
              data-testid="prop-brosur-btn"
              className="h-12 bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 rounded-full font-bold text-sm transition"
            >
              <Download className="w-4 h-4 mr-2" /> Download Brosur
            </Button>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-white py-12 md:py-16 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex items-end justify-between mb-6 md:mb-8">
              <div>
                <span className="inline-block bg-slate-100 text-slate-600 text-[11px] font-bold rounded-full px-3 py-1 tracking-widest">
                  PROPERTI TERKAIT
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-3">
                  Rumah lain di {item.city}
                </h3>
              </div>
              <Link
                to="/cari-properti"
                className="hidden md:inline-flex items-center gap-1 text-sm font-bold text-[#001DF3] hover:underline"
              >
                Lihat Semua →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((r) => (
                <ListingCard key={r.id} item={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />

      <KprSyariahDialog open={kprOpen} onOpenChange={setKprOpen} />
    </div>
  );
}

function PropertyHeader({ item }) {
  return (
    <div>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="inline-block bg-blue-50 text-[#001DF3] text-[10px] font-bold rounded-full px-2 py-1 tracking-wider">
          {item.type}
        </span>
        <span className="inline-block bg-slate-100 text-slate-600 text-[10px] font-bold rounded-full px-2 py-1 tracking-wider">
          {item.condition}
        </span>
      </div>
      <h1 className="text-2xl md:text-3xl font-black text-slate-900 mt-3 leading-tight">
        {item.title}
      </h1>
      <p className="text-sm text-slate-500 mt-2 flex items-center gap-1">
        <MapPin className="w-3.5 h-3.5" /> {item.location}
      </p>
      <div className="mt-4 pt-4 border-t border-slate-100">
        <div className="text-[11px] text-slate-500 tracking-wide">
          Harga Properti
        </div>
        <div className="text-3xl font-black text-[#001DF3] leading-none mt-1">
          {item.price}
        </div>
        <div className="text-xs text-slate-500 mt-1.5">{item.installment}</div>
      </div>
      <div className="mt-4 flex items-center gap-4 text-sm text-slate-700 border-t border-slate-100 pt-4">
        <span className="flex items-center gap-1.5">
          <BedDouble className="w-4 h-4 text-slate-400" />
          <span className="font-semibold">{item.specs.kt}</span> KT
        </span>
        <span className="flex items-center gap-1.5">
          <Bath className="w-4 h-4 text-slate-400" />
          <span className="font-semibold">{item.specs.km}</span> KM
        </span>
        <span className="flex items-center gap-1.5">
          <Ruler className="w-4 h-4 text-slate-400" />
          <span className="font-semibold">{item.specs.lb}</span>
        </span>
      </div>
    </div>
  );
}


function FacilitiesAccordion({ facilities }) {
  const t = useT();
  const grouped = groupFacilities(facilities);
  const entries = Object.entries(grouped);
  // Default: first category expanded, rest collapsed (nicer FTUE than all closed)
  const [openMap, setOpenMap] = useState(() => {
    const init = {};
    entries.forEach(([cat], idx) => {
      init[cat] = idx === 0;
    });
    return init;
  });

  if (entries.length === 0) {
    return (
      <p className="text-sm text-slate-500 mt-4">
        {t("Belum ada fasilitas yang ditandai untuk properti ini.")}
      </p>
    );
  }

  const toggle = (cat) =>
    setOpenMap((m) => ({ ...m, [cat]: !m[cat] }));

  return (
    <div className="mt-5 space-y-3">
      {entries.map(([category, items]) => {
        const isOpen = !!openMap[category];
        return (
          <div
            key={category}
            data-testid={`facility-cat-${category}`}
            className={`rounded-2xl border overflow-hidden transition-colors ${
              isOpen ? "border-[#00B512] bg-[#00B512]" : "border-slate-100 bg-white"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(category)}
              aria-expanded={isOpen}
              className={`w-full flex items-center justify-between gap-3 px-4 md:px-5 py-3.5 md:py-4 transition text-left ${
                isOpen ? "hover:bg-[#009e0f]" : "hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    isOpen ? "bg-white/20" : "bg-[#00B512]/12"
                  }`}
                >
                  <CheckCircle2
                    className={`w-4 h-4 ${isOpen ? "text-white" : "text-[#00B512]"}`}
                    strokeWidth={2.4}
                  />
                </span>
                <div className="flex items-baseline gap-2 min-w-0">
                  <span
                    className={`text-sm md:text-[15px] font-semibold tracking-wide truncate ${
                      isOpen ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {t(category)}
                  </span>
                  <span
                    className={`text-[11px] font-semibold shrink-0 ${
                      isOpen ? "text-white/70" : "text-slate-400"
                    }`}
                  >
                    ({items.length})
                  </span>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 shrink-0 transition-transform ${
                  isOpen ? "rotate-180 text-white" : "text-slate-400"
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-4 md:px-5 pb-4 md:pb-5 pt-1 bg-white border-t border-[#00B512]/20">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 mt-3">
                  {items.map((name) => (
                    <div
                      key={name}
                      data-testid={`facility-${name}`}
                      className="flex items-center gap-2.5 bg-slate-50 rounded-2xl px-3 py-2.5"
                    >
                      <span className="w-7 h-7 rounded-lg bg-[#00B512]/12 flex items-center justify-center shrink-0">
                        <CheckCircle2
                          className="w-4 h-4 text-[#00B512]"
                          strokeWidth={2.2}
                        />
                      </span>
                      <span className="text-sm text-slate-900 font-medium leading-tight">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
