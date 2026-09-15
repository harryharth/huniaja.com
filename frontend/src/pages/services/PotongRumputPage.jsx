import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";
import { Megaphone } from "lucide-react";

const config = {
  label: "Digital Marketing Properti",
  tag: "Layanan Bisnis Huniaja",
  icon: (
    <div className="w-14 h-14 rounded-2xl bg-[#001DF3] text-white flex items-center justify-center">
      <Megaphone className="w-7 h-7" />
    </div>
  ),
  accent: "#001DF3",
  accentSoft: "#EEF2FF",
  waMessage:
    "Halo Huniaja, saya tertarik dengan layanan Digital Marketing Properti. Bisa cerita lebih detail?",

  heroTitle: "Listing yang dilihat. Leads yang beli. Brand yang dikenang.",
  heroSub:
    "Iklan properti yang bekerja bukan yang paling gencar — tapi yang paling tepat. Kami rancang seluruh corong digital marketing propertimu: dari listing yang menonjol, kampanye leads berkualitas, sampai brand yang dipercaya.",
  heroImg:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=85",

  story: {
    heading: "Beriklan tanpa strategi = membakar uang.",
    body:
      "Setiap developer, agen, dan pemilik properti pernah merasakannya: pasang iklan di 5 platform, keluarkan puluhan juta, tapi tidak ada satu pun leads berkualitas yang masuk. Masalahnya bukan produkmu — masalahnya adalah strategi yang salah. Huniaja Digital Marketing hadir untuk mengubah cara propertimu ditemukan. Kami tidak menjual 'kuota post' — kami menjual audiens yang siap beli, konten yang membuat brand-mu dipercaya, dan angka yang bisa kamu pertanggungjawabkan ke bos atau investor.",
    pullQuote:
      "Uang iklan yang tepat sasaran nilainya 10x lipat uang iklan yang gencar.",
  },

  steps: [
    {
      title: "Audit & Strategi (Hari 1-7)",
      desc:
        "Analisis produk, target market, kompetitor, dan corong konversi. Deliverable: strategi tertulis + estimasi ROI.",
    },
    {
      title: "Setup Kampanye (Hari 8-14)",
      desc:
        "Bangun landing page konversi tinggi, siapkan pixel tracking, foto/video profesional, dan konten kreatif yang scroll-stopping.",
    },
    {
      title: "Aktivasi & Optimasi (Hari 15-30)",
      desc:
        "Live campaign di Meta Ads, TikTok Ads, Google Ads. Optimasi harian berdasarkan data — bukan tebak-tebakan.",
    },
    {
      title: "Report & Scale (Bulanan)",
      desc:
        "Laporan detail: cost per lead, kualitas leads, ROAS. Kami rekomendasikan channel mana yang di-scale, mana yang di-pause.",
    },
  ],

  includes: [
    "Foto & video profesional properti (drone, virtual tour, reels format ready-to-post)",
    "Landing page konversi tinggi + WhatsApp funnel yang terintegrasi",
    "Meta Ads (Facebook + Instagram) + TikTok Ads + Google Search Ads",
    "Copywriting kreatif yang stopping scroll — bukan template kaku",
    "Tracking pixel & dashboard real-time (kamu lihat sendiri performa kampanye)",
    "Report bulanan detail: leads masuk, CPL, CTR, ROAS, dan rekomendasi optimasi",
    "Konsultan dedicated — kamu punya 1 orang yang kenal proyekmu, bukan tim rotasi",
    "Garansi minimum jumlah leads bulanan sesuai paket, atau kami kompensasi hari berikutnya",
  ],

  testimonials: [
    {
      name: "Pak Bayu — Developer",
      place: "Cluster Grand Serpong, 40 Unit",
      quote:
        "Sebelum pakai Huniaja, kami spend Rp 30 juta/bulan iklan, hasilnya 5 leads tanpa konversi. Bulan pertama pakai Huniaja: 47 leads berkualitas, 8 closing dalam 60 hari. ROAS 12x.",
      rating: 5,
    },
    {
      name: "Bu Sinta — Independent Agent",
      place: "Jakarta Selatan",
      quote:
        "Aku pikir digital marketing cuma untuk developer besar. Ternyata Huniaja bantu aku set up personal branding di IG & TikTok — 3 bulan follower naik 8x, komisi bulanan naik 3x.",
      rating: 5,
    },
    {
      name: "Pak Dedi — Sales Manager",
      place: "Perumahan Mid-Range, Bekasi",
      quote:
        "Yang beda: tim Huniaja jujur bilang channel mana yang jangan dipakai untuk produk kami. Bukan sekadar ambil budget. Hasilnya? Cost per lead turun 62% dalam 2 bulan.",
      rating: 5,
    },
  ],

  faqs: [
    {
      q: "Berapa investasi minimum untuk mulai?",
      a: "Paket Starter mulai Rp 8 juta/bulan (untuk 1 unit atau agen personal), Growth Rp 15-25 juta/bulan (developer skala kecil-menengah), Enterprise custom (>Rp 30 juta) untuk portfolio besar. Chat kami untuk audit gratis dulu — kami sarankan paket yang paling sesuai objektifmu.",
    },
    {
      q: "Berapa lama sampai kelihatan hasil?",
      a: "Untuk leads: minggu ke-2. Untuk conversion (viewing, DP, closing): bulan ke-1 sampai 2 tergantung siklus beli produkmu. Kami tidak menjanjikan hasil instan — properti bukan produk retail, tapi kami transparan dengan progres mingguan.",
    },
    {
      q: "Apakah harus komitmen jangka panjang?",
      a: "Tidak wajib. Minimum kontrak 3 bulan (karena optimasi butuh waktu untuk matang). Setelah itu bulanan, bisa berhenti kapan saja. Kami percaya kalau layanan kami bagus, kamu sendiri yang mau lanjut — bukan karena terkunci kontrak.",
    },
    {
      q: "Apa bedanya dengan agency iklan biasa?",
      a: "Tiga hal: (1) fokus 100% di properti Indonesia — kami paham siklus beli KPR, negosiasi, dan psikologi pembeli rumah. (2) Bukan cuma iklan — kami setup funnel lengkap (landing page + WA + follow up script). (3) Transparansi angka — dashboard real-time, tidak ada 'trust me' tanpa data.",
    },
    {
      q: "Bagaimana kalau leadsnya tidak berkualitas?",
      a: "Kualitas leads bergantung target audience yang benar. Kami definisikan bareng di fase audit (bujet buyer, lokasi, motivasi beli). Kalau hasilnya masih meleset, kami adjust targeting gratis di bulan berikutnya sampai match. Garansi minimum leads berkualitas tertulis di kontrak.",
    },
  ],
};

export default function DigitalMarketingPage() {
  return <ServicePageTemplate config={config} />;
}
