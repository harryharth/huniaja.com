import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";
import { Megaphone } from "lucide-react";

/**
 * Headline Hero — 2 alternatif untuk A/B test:
 *   A (primary, saat ini aktif):
 *     "Bukan iklan properti biasa. Ini corong pembeli yang siap akad."
 *   B (alternate):
 *     "Dari scroll ke akad: strategi digital marketing khusus properti Indonesia."
 *
 * Catatan visual per section (untuk tim desain):
 *   - Hero        : ilustrasi funnel + dashboard mock (Meta/Google/TikTok logo), badge sertifikasi.
 *   - Story       : grafik siklus beli properti 90-180 hari (awareness → consideration → decision).
 *   - Cara Kerja  : timeline 4-langkah dengan icon per fase, highlight "Pilot 14 Hari" di step 2.
 *   - Includes    : 8 kartu kecil dengan ikon (funnel, ads, konten, WA, dashboard, dsb.)
 *   - Testimoni   : label "Simulasi Studi Kasus (Pilot 2026)" untuk transparansi status baru launch.
 *   - Final CTA   : ilustrasi tim + logo sertifikasi Google Ads, Meta Blueprint, TikTok Ads Manager.
 */
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
    "Halo Huniaja, saya tertarik dengan program Digital Marketing Properti — mau tanya soal pilot project & model kerjasamanya.",

  // ============ HERO ============
  heroTitle:
    "Bukan iklan properti biasa. Ini corong pembeli yang siap akad.",
  heroSub:
    "Setiap kampanye kami dibangun mengikuti siklus keputusan pembeli properti — panjang, penuh riset, sensitif harga. Bukan template massal, bukan tebak-tebakan. Setiap Rupiah bisa kamu pertanggungjawabkan ke bos, investor, atau dewan direksi.",
  heroImg:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=85",

  // ============ STORY (PROBLEM + BIG IDEA) ============
  story: {
    heading:
      "Kamu tidak butuh iklan lebih banyak. Kamu butuh iklan yang benar.",
    body:
      "Ini yang jarang dibicarakan agency iklan generik: membeli rumah bukan keputusan impuls. Buyer properti butuh 90-180 hari dari 'lihat listing' sampai 'tanda tangan akad' — mereka bandingkan lokasi, hitung KPR, tanya keluarga, dan mundur berkali-kali sebelum yakin. Tapi kebanyakan campaign properti diperlakukan seperti campaign fashion: satu creative, satu audience, spray-and-pray. Wajar kalau leads yang masuk 'cuma tanya-tanya' dan tidak pernah closing. Insight kami: setiap listing butuh narasi yang mengikuti tahapan buyer — awareness untuk yang baru tahu, consideration untuk yang bandingkan, decision untuk yang sudah siap survey. Bukan satu iklan untuk semua orang. Storytelling per-listing, bukan poster massal.",
    pullQuote:
      "Membeli rumah itu perjalanan, bukan transaksi. Iklan yang menang adalah iklan yang menemani buyer di setiap tahap.",
  },

  // ============ CARA KERJA (PROSES + PILOT LOW-RISK) ============
  steps: [
    {
      title: "Diagnostic & Blueprint (Hari 1-7)",
      desc:
        "Audit gratis: pemetaan ICP, kompetitor, dan channel yang paling relevan untuk produkmu. Deliverable akhir: strategi tertulis + estimasi ROI + rekomendasi alokasi budget. Tidak ada komitmen sebelum kamu setuju arahnya.",
    },
    {
      title: "Pilot Sprint 14 Hari (Hari 8-21)",
      desc:
        "Pilot terbatas di 1 listing atau 1 lini produk. Model kerjasama fleksibel: fixed fee, revenue-share, atau performance-based (bayar per kualitas leads). Kalau hasil tidak sesuai target di akhir pilot, kamu tidak wajib lanjut.",
    },
    {
      title: "Scale-Up Multi-Channel (Hari 22-60)",
      desc:
        "Aktivasi penuh: Meta Ads (FB + IG), Google Search & Performance Max, TikTok Ads. Setup pixel tracking, landing page konversi, dan konten kreatif per-tahap buyer journey. Semua channel di-manage tim internal bersertifikasi — bukan sub-kontrak.",
    },
    {
      title: "Optimize & Report (Bulanan)",
      desc:
        "Weekly stand-up 30 menit, dashboard real-time yang kamu akses kapan saja, dan laporan bulanan berisi: cost per lead, quality score, ROAS, channel scaling map, dan rekomendasi kuartal berikutnya.",
    },
  ],

  // ============ SOLUSI / VALUE PROPOSITION ============
  includes: [
    "Storytelling per-listing berbasis 3 tahap buyer journey (awareness · consideration · decision) — bukan template massal",
    "Performance ads full-stack di Meta, Google, dan TikTok — dieksekusi tim bersertifikasi Google Ads, Meta Blueprint, dan TikTok Ads Manager",
    "Personal branding kit untuk agen properti — content pillar, hook library, dan kalender konten 90-hari untuk IG & TikTok",
    "Landing page konversi + WhatsApp funnel terintegrasi — satu alur dari klik iklan sampai chat sales, tanpa drop-off di tengah",
    "Model kerjasama fleksibel: fixed retainer, revenue-share, atau performance-based per kualitas lead — pilih yang paling align dengan insentif tim kamu",
    "Pilot 14 hari dengan risiko minimal — kamu tidak keluar biaya besar sebelum lihat bukti hasil di listingmu sendiri",
    "Konsultan dedicated + dashboard real-time — kamu punya satu orang yang paham produkmu, bukan tim rotasi yang gonta-ganti",
    "Aset iklan, ad account, dan data leads 100% milik kamu — kalau kolaborasi berakhir, semuanya kamu bawa pulang tanpa negosiasi",
  ],

  // ============ KREDIBILITAS — dibingkai transparan sebagai pilot 2026 ============
  testimonials: [
    {
      name: "Cluster Grand Serpong · Pilot Developer",
      place: "40 unit · Tangerang Selatan · Simulasi Studi Kasus Q4 2026",
      quote:
        "Dalam pilot 14 hari, kami uji storytelling per-unit ala Huniaja: satu unit sudut, satu unit entry-price, satu unit family-friendly. Hasilnya, 3 dari 5 leads paling serius datang dari unit yang 'diceritakan' — bukan dari unit yang 'dipromosikan'. Kami lanjut kontrak 6 bulan.",
      rating: 5,
    },
    {
      name: "Agen Independen · Personal Branding Pilot",
      place: "Jakarta Selatan · Simulasi Studi Kasus 2026",
      quote:
        "Sebelum ini, saya post foto listing tanpa strategi dan hasilnya sepi. Setelah 30 hari mengikuti program personal branding Huniaja, follower TikTok naik dari 800 ke 6.400, dan 4 leads pertama datang lewat DM organik — bukan lewat iklan. Cost per lead: nol Rupiah.",
      rating: 5,
    },
    {
      name: "Sales Manager · Perumahan Mid-Range",
      place: "Bekasi · Simulasi Studi Kasus 2026",
      quote:
        "Yang berbeda dari tim Huniaja: mereka jujur bilang TikTok Ads bukan channel yang cocok untuk segmen kami. Kami dialihkan ke Google Search + Meta retargeting. Bulan pertama, cost per lead turun 47%. Transparansi seperti ini jarang di industri iklan.",
      rating: 5,
    },
  ],

  // ============ FAQ — mengangkat kredibilitas + visi ============
  faqs: [
    {
      q: "Kenapa harus Huniaja, bukan agency iklan biasa?",
      a: "Tiga alasan. Pertama, kami fokus 100% di properti Indonesia — bukan portfolio yang dibagi dengan F&B, retail, atau fashion. Setiap strategi kami dibangun untuk siklus beli 90-180 hari yang khas properti. Kedua, tim kami bersertifikasi Google Ads, Meta Blueprint, dan TikTok Ads Manager — semua channel di-manage in-house, bukan sub-kontrak. Ketiga, model kerjasama kami fleksibel (fixed, revenue-share, performance-based); kami berani karena kami yakin dengan hasil.",
    },
    {
      q: "Huniaja baru launch 9 September 2026 — apakah track record cukup?",
      a: "Iya, kami baru sekitar 5 bulan operasional, dan kami bingkai itu sebagai kekuatan. Fokus kami 100% di niche properti tanpa gangguan portfolio lain, dan setiap partner mendapat perhatian tim inti. Untuk mengurangi risiko partner, kami tawarkan pilot 14 hari dengan model performance-based — kamu bayar berdasarkan kualitas hasil, bukan berdasarkan janji.",
    },
    {
      q: "Model kerjasama seperti apa yang bisa saya pilih?",
      a: "Tiga model utama, bisa dikombinasi. (1) Fixed retainer bulanan (Rp 8-30 juta) untuk kepastian output & pipeline. (2) Revenue-share 5-15% dari nilai transaksi yang berhasil — cocok kalau kamu mau align insentif jangka panjang. (3) Performance-based per kualitas lead — kami tanggung media budget di awal, kamu bayar hanya untuk lead yang lolos filter kualitas yang disepakati.",
    },
    {
      q: "Berapa lama sampai kelihatan hasil?",
      a: "Leads pertama: minggu ke-2 setelah pilot aktif. Kualitas leads stabil: bulan ke-1. Closing atau DP: bulan ke-2 sampai bulan ke-4, tergantung tipe properti — starter home lebih cepat, luxury lebih lambat. Kami transparan dengan progress mingguan; kamu tidak perlu menunggu bulan ke-3 baru dapat laporan.",
    },
    {
      q: "Aset iklan dan data leads — milik siapa?",
      a: "Milik kamu 100%. Pixel tracking dipasang di domain kamu, ad account atas nama perusahaan kamu, landing page dan konten kami serahkan file mentahnya. Kalau di kemudian hari kolaborasi berakhir, kamu bawa pulang seluruh aset & learning tanpa proses negosiasi ulang.",
    },
    {
      q: "Kalau kami sudah punya tim marketing internal, apa peran Huniaja?",
      a: "Kami sering kerja berdampingan dengan tim internal — bukan menggantikan. Peran kami: specialist eksekusi channel (Meta / Google / TikTok Ads + landing page + konten performance). Tim kamu tetap pegang brand utama, content pillar besar, dan hubungan customer. Setiap minggu ada 30-menit sync untuk menyelaraskan arah.",
    },
  ],
};

export default function DigitalMarketingPage() {
  return <ServicePageTemplate config={config} />;
}
