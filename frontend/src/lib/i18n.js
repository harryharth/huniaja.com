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
    "Berita": "Article",
    "Artikel": "Article",
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

    // Hero / Home extras
    "Ajukan Sekarang": "Apply Now",
    "Lihat Promo": "See Promo",
    "Berlaku s/d 31 Des": "Valid until Dec 31",
    "Tenor s/d 20 Tahun": "Tenor up to 20 Years",
    "Untuk Rumah Terpilih": "For Selected Homes",

    // KPR page
    "KPR SYARIAH · BEBAS RIBA": "SHARIA MORTGAGE · RIBA-FREE",
    "Cicilan tetap.": "Fixed installments.",
    "Hati tenang.": "Peace of mind.",
    "Rumah jadi milikmu.": "Your home, secured.",
    "Simulasi Cicilan Gratis": "Free Installment Simulation",
    "Lihat Cerita Mereka": "See Their Stories",
    "Fatwa DSN-MUI": "DSN-MUI Fatwa",
    "10+ Bank Rekanan": "10+ Partner Banks",
    "12.500+ Keluarga": "12,500+ Families",
    "PRINSIP KAMI": "OUR PRINCIPLES",
    "CERITA MEREKA": "THEIR STORIES",
    "Kenapa harus KPR syariah di Huniaja": "Why choose Sharia mortgage at Huniaja",
    "Simulasi Cicilan KPR": "Mortgage Installment Simulator",
    "dan Take Over Syariah": "and Sharia Take Over",
    "KPR Syariah": "Sharia Mortgage",
    "KPR Take Over Syariah": "Sharia Mortgage Take Over",
    "Simulasikan Cicilan KPR Syariah": "Simulate Sharia Mortgage",
    "Simulasikan Take Over Syariah": "Simulate Sharia Take Over",
    "Cicilan mulai": "Starting from",
    "Approval rate": "Approval rate",
    "92% disetujui": "92% approved",
    "Bank yang bekerjasama dengan": "Banks partnering with",
    "Langkah Mudah Mengajukan": "Easy Steps to Apply",
    "KPR Syariah di": "Sharia Mortgage at",

    // Konsultasi
    "KONSULTASI GRATIS": "FREE CONSULTATION",
    "Bingung mulai dari mana?": "Not sure where to start?",
    "Kami dengar dulu.": "We listen first.",
    "Pesan Sesi Konsultasi": "Book a Consultation",
    "Nomor WhatsApp": "WhatsApp Number",
    "Tujuan": "Goal",
    "Budget": "Budget",
    "Timeline": "Timeline",
    "Beli Rumah Pertama": "Buy First Home",
    "Investasi Properti": "Property Investment",
    "Refinancing / Take Over": "Refinancing / Take Over",
    "Dalam 3 Bulan": "Within 3 Months",
    "Dalam 6 Bulan": "Within 6 Months",
    "Belum Pasti": "Not Sure Yet",
    "Ceritakan sedikit kondisimu": "Tell us a bit about your situation",
    "Nama & nomor WhatsApp wajib diisi.": "Name & WhatsApp are required.",
    "Gagal mengirim data. Coba lagi ya.": "Failed to send. Please try again.",

    // Karir
    "KARIR HUNIAJA": "CAREERS AT HUNIAJA",
    "Bangun karir": "Build your career",
    "yang bermakna.": "that matters.",
    "Lamar Sekarang": "Apply Now",
    "Daftar Talent Pool": "Join Talent Pool",
    "Bab": "Chapter",
    "Bergabung": "Join",
    "Berkembang": "Grow",
    "Berkarya": "Create",
    "Berdampak": "Impact",
    "Nama, email & nomor WhatsApp wajib diisi.": "Name, email & WhatsApp are required.",
    "Gagal mengirim lamaran. Coba lagi ya.": "Failed to submit application. Please try again.",
    "Lamaran terkirim! Tim rekrutmen akan menghubungimu via WhatsApp.": "Application sent! Our team will contact you via WhatsApp.",

    // Property Detail
    "Deskripsi Properti": "Property Description",
    "Fasilitas Properti": "Property Facilities",
    "Utilitas": "Utilities",
    "Keamanan & Cluster": "Security & Cluster",
    "Interior": "Interior",
    "Dekat Dengan": "Nearby",
    "Belum ada fasilitas yang ditandai untuk properti ini.": "No facilities marked yet for this property.",
    "Simulasi KPR Properti Ini": "Simulate mortgage for this property",
    "Chat Agen": "Chat Agent",

    // Akun page (extra)
    "Diterima": "Received",
    "Baru": "New",
    "Diproses": "In Progress",
    "Selesai": "Completed",
    "Pengajuan": "Submission",
    "Konsultasi": "Consultation",
    "Karir": "Career",
    "Kontak": "Contact",
    "Brosur": "Brochure",
    "Download Brosur": "Download Brochure",
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
