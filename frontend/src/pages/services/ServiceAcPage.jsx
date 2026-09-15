import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";
import { TrendingUp } from "lucide-react";

const config = {
  label: "Property Investment",
  tag: "Layanan Bisnis Huniaja",
  icon: (
    <div className="w-14 h-14 rounded-2xl bg-[#00B512] text-white flex items-center justify-center">
      <TrendingUp className="w-7 h-7" />
    </div>
  ),
  accent: "#00B512",
  accentSoft: "#E7FBEA",
  waMessage:
    "Halo Huniaja, saya tertarik dengan layanan Property Investment. Bisa cerita detail cara kerjanya?",

  heroTitle: "Investasi properti yang berbasis data, bukan intuisi.",
  heroSub:
    "Kami analisis lokasi, hitung yield, kalkulasi ROI, dan pantau risiko — supaya keputusan investasimu jelas hitam-putih. Karena beli properti Rp 500 juta - 5 miliar bukan momen untuk 'ikut teman'.",
  heroImg:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=85",

  story: {
    heading: "80% investor properti pemula rugi karena satu alasan yang sama.",
    body:
      "Mereka membeli properti berdasarkan 'katanya area ini bakal berkembang' — tanpa data. Setelah 5 tahun, harga tidak naik, penyewa tidak dapat, cicilan malah jadi beban. Kami di Huniaja Property Investment memutus siklus itu. Setiap properti yang kami rekomendasikan lewat 3 lapis analisis: makro (pertumbuhan area & rencana infrastruktur), mikro (perbandingan dengan properti sekitar), dan proyeksi (yield 3, 5, 10 tahun). Tidak ada tebak-tebakan. Kalau angkanya tidak masuk, kami jujur bilang tidak masuk.",
    pullQuote:
      "Investasi properti terbaik adalah yang bisa kamu jelaskan angkanya dalam 3 menit ke pasangan.",
  },

  steps: [
    {
      title: "Konsultasi Tujuan Investasi",
      desc:
        "Cashflow bulanan, apresiasi jangka panjang, atau tabungan pensiun? Setiap tujuan butuh strategi properti yang berbeda.",
    },
    {
      title: "Analisis & Rekomendasi (7-14 hari)",
      desc:
        "Kami cari 5-10 properti kandidat, analisis satu per satu (yield, cap rate, ROI, IRR), kirim laporan tertulis lengkap.",
    },
    {
      title: "Due Diligence Bareng",
      desc:
        "Kami dampingi survey fisik, cek legalitas via BPN, verifikasi status developer, dan simulasi KPR bareng mitra bank.",
    },
    {
      title: "Akuisisi & Manajemen",
      desc:
        "Dari nego harga, akad KPR, sampai serah terima. Setelah itu (opsional): kami bantu carikan penyewa & manage properti bulanan.",
    },
  ],

  includes: [
    "Analisis lokasi mendalam: pertumbuhan harga historis, rencana infrastruktur (tol, MRT, kawasan industri), demografi penyewa",
    "Perhitungan yield realistis (Gross Yield, Net Yield, Cap Rate, Cash-on-Cash Return, IRR)",
    "Laporan tertulis min. 20 halaman untuk setiap properti kandidat — bukan sekadar chat",
    "Cek legalitas & due diligence dokumen (SHM/HGB, PBG, PBB, riwayat sengketa)",
    "Simulasi KPR di 3-5 bank dan rekomendasi yang paling optimal (bunga & tenor)",
    "Pendampingan negosiasi harga — pengalaman kami rata-rata turunkan 8-15% dari asking price",
    "Property Management bulanan (opsional): pencarian penyewa, kontrak, kolektif sewa, maintenance",
    "Review portfolio 6 bulanan — kapan hold, kapan sell, kapan refinance",
  ],

  testimonials: [
    {
      name: "Pak Andrew — Dokter",
      place: "Portfolio 3 properti sewa",
      quote:
        "Sebelum Huniaja, saya beli properti hanya karena 'kata teman lokasi ini bakal booming'. 5 tahun stagnan. Dengan Huniaja, properti ke-3 saya di Bogor: yield 9.8%/tahun, apresiasi 14% di 18 bulan. Angka bicara.",
      rating: 5,
    },
    {
      name: "Bu Melinda — Business Owner",
      place: "Investor Pertama Kali",
      quote:
        "Kami baru mau mulai investasi properti umur 35. Bingung banget. Tim Huniaja audit tujuan (pensiun dini), rekomendasikan 2 properti kost dekat kampus. Sekarang cashflow Rp 12 juta/bulan pasif.",
      rating: 5,
    },
    {
      name: "Pak Hendra — Corporate Executive",
      place: "Diversifikasi Portfolio",
      quote:
        "Yang bikin beda: mereka SANGGUP bilang 'jangan beli ini' walau berarti kehilangan komisi. Itu langka. Sekarang 4 properti aktif, semua yield di atas 8%, tidak ada yang loss.",
      rating: 5,
    },
  ],

  faqs: [
    {
      q: "Berapa modal minimum untuk mulai investasi properti dengan Huniaja?",
      a: "Rp 100-200 juta untuk properti pertama (rumah subsidi FLPP atau rumah tapak entry-level di daerah berkembang). Rp 500 juta - 1 miliar untuk properti tapak menengah. Kami rekomendasikan strategi bertahap: mulai dari yang terjangkau, cashflow ditambahkan ke DP properti berikutnya.",
    },
    {
      q: "Apa target yield yang realistis di 2026?",
      a: "Properti sewa keluarga: Gross Yield 5-8% per tahun. Kost mahasiswa/pekerja: 12-20%. Ruko/kios: 8-12%. Apartemen studio CBD: 5-7%. Semua ini SEBELUM apresiasi properti yang biasanya 6-10%/tahun di area yang tepat.",
    },
    {
      q: "Berapa biaya jasa Property Investment ini?",
      a: "Konsultasi awal + analisis 1 kandidat: gratis. Paket Standard (analisis 5 kandidat + pendampingan akuisisi): Rp 10-15 juta ATAU 1.5% dari nilai transaksi (mana yang lebih rendah). Property Management bulanan (opsional): 8-10% dari sewa bulanan.",
    },
    {
      q: "Apa bedanya sama beli langsung dari agen developer?",
      a: "Agen developer punya bias — mereka jual properti perusahaan mereka. Kami independen — kami cari SEMUA opsi (baru, second, lelang, take-over KPR) yang paling optimal untuk tujuanmu. Kami dibayar oleh kamu, jadi loyalty kami ke kamu.",
    },
    {
      q: "Bagaimana kalau properti yang direkomendasikan ternyata rugi?",
      a: "Kami hanya rekomendasikan properti yang proyeksi ROI 3-5 tahun-nya positif. Kalau setelah 3 tahun angkanya meleset >30% dari proyeksi (di luar force majeure), kami kembalikan 50% biaya jasa. Ini komitmen tertulis di kontrak.",
    },
  ],
};

export default function PropertyInvestmentPage() {
  return <ServicePageTemplate config={config} />;
}
