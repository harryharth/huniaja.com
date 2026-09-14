import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

/**
 * Minimal i18n system. Keys are the Indonesian phrase itself, so untranslated
 * text still falls back gracefully. Only ADD keys here when you actually
 * translate them in a component (via useT()) — this keeps the file scannable.
 */
export const LANGS = {
  id: { label: "Indonesia", short: "ID", flag: "🇮🇩" },
  en: { label: "English (US)", short: "EN", flag: "🇺🇸" },
};

const dict = {
  en: {
    // Header nav
    "Beli": "Buy",
    "Konsultasi": "Consult",
    "KPR": "Mortgage",
    "Kerjasama": "Partner",
    "Karir": "Career",
    "Berita": "News",
    "Tentang Kami": "About Us",
    "Kontak": "Contact",
    "Pasang Iklan": "List Property",
    "Masuk/Daftar": "Sign In / Up",
    "Masuk / Daftar": "Sign In / Up",
    "Masuk": "Sign In",
    "Daftar": "Sign Up",
    "Keluar": "Sign Out",
    "Akunku": "My Account",
    "Favorit": "Favorites",
    "Riwayat Pengajuan": "Submission History",
    "Cari properti...": "Search properties...",
    "Cari": "Search",

    // Search tabs
    "Rumah": "House",
    "Apartemen": "Apartment",
    "Tanah": "Land",
    "Kavling": "Plot",

    // Home hero
    "Klaim Voucher": "Claim Voucher",
    "Beli Properti": "Buy Property",
    "Cari Properti": "Find Property",
    "Potong Rumput": "Lawn Care",
    "Home Cleaning": "Home Cleaning",
    "Service AC": "AC Service",
    "Jaga Rumah": "House Sitting",
    "LIHAT SEMUA": "SEE ALL",
    "Lihat Semua": "See All",
    "Chat AI": "AI Chat",

    // Sections
    "Listing Baru": "New Listings",
    "Populer": "Popular",
    "Properti yang paling banyak Diskonya": "Properties with the biggest discounts",
    "Kenapa Huniaja?": "Why Huniaja?",
    "Kenapa Huniaja": "Why Huniaja",

    // CTAs common
    "Hubungi Kami": "Contact Us",
    "Chat WhatsApp": "Chat on WhatsApp",
    "Chat WhatsApp Sekarang": "Chat on WhatsApp Now",
    "Ajukan via Form": "Submit Form",
    "Kirim": "Send",
    "Kirim Pesan": "Send Message",
    "Kirim Lamaran": "Submit Application",
    "Mengirim...": "Sending...",
    "Batal": "Cancel",
    "Simpan": "Save",
    "Hapus": "Delete",
    "Kembali ke Beranda": "Back to Home",

    // Property detail
    "Fasilitas & Lingkungan": "Facilities & Neighborhood",
    "Deskripsi": "Description",
    "Spesifikasi": "Specifications",
    "Kamar Tidur": "Bedrooms",
    "Kamar Mandi": "Bathrooms",
    "Luas Tanah": "Land Area",
    "Luas Bangunan": "Building Area",
    "Terverifikasi": "Verified",
    "Download Brosur": "Download Brochure",

    // Auth / Login
    "Satu klik dengan Google — tanpa password, tanpa ribet.": "One click with Google — no password, no hassle.",
    "Lanjutkan dengan Google": "Continue with Google",
    "ATAU MASUK DENGAN EMAIL": "OR SIGN IN WITH EMAIL",
    "ATAU": "OR",
    "Email": "Email",
    "Password": "Password",
    "Masuk sebagai Admin →": "Sign in as Admin →",
    "Dengan masuk, kamu menyetujui": "By signing in, you agree to",
    "Syarat & Ketentuan": "Terms & Conditions",
    "Email & password wajib diisi.": "Email & password are required.",
    "Email atau password salah.": "Wrong email or password.",

    // Account page
    "Halo": "Hello",
    "AKUN HUNIAJA": "HUNIAJA ACCOUNT",
    "Profil": "Profile",
    "Profilmu": "Your Profile",
    "Data ini berasal dari akun Google-mu.": "This data comes from your Google account.",
    "Nama Lengkap": "Full Name",
    "ID Akun": "Account ID",
    "Keluar dari akun": "Sign out of account",
    "Belum ada properti favorit": "No favorite properties yet",
    "Klik ikon hati di properti manapun untuk menyimpannya di sini.": "Tap the heart icon on any property to save it here.",
    "Jelajahi Properti": "Browse Properties",
    "Belum ada pengajuan": "No submissions yet",
    "Form konsultasi, brosur, kontak, dan lamaran karir kamu akan muncul di sini.": "Your consult, brochure, contact & career forms will appear here.",
    "Mulai Konsultasi": "Start a Consult",

    // Footer
    "Beranda": "Home",
    "Pusat Bantuan": "Help Center",
    "FAQ": "FAQ",
    "S&K": "T&C",
    "Ikuti Kami": "Follow Us",

    // Language switcher itself
    "Bahasa": "Language",
  },
};

const LangContext = createContext({
  lang: "id",
  setLang: () => {},
  t: (s) => s,
});

const STORAGE_KEY = "huniaja_lang";

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === "undefined") return "id";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved && LANGS[saved] ? saved : "id";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l) => {
    if (LANGS[l]) setLangState(l);
  }, []);

  const t = useCallback(
    (key) => {
      if (lang === "id") return key;
      return (dict[lang] && dict[lang][key]) || key;
    },
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export function useT() {
  return useContext(LangContext).t;
}
