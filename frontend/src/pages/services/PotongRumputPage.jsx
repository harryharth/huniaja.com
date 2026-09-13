import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";
import { ICON_POTONG_RUMPUT } from "../../mock";

const config = {
  label: "Potong Rumput",
  tag: "Layanan Rumah Huniaja",
  icon: ICON_POTONG_RUMPUT,
  accent: "#00B512",
  accentSoft: "#E9F8EC",
  waMessage:
    "Halo Huniaja, saya mau pesan layanan Potong Rumput. Boleh minta info & jadwal terdekatnya?",

  heroTitle: "Halaman rapi, akhir pekan santai.",
  heroSub:
    "Serahkan urusan rumput ke tim Huniaja. Datang tepat waktu, kerja rapi, dan halaman bersih total sebelum kami pamit — tanpa sisa potongan berserakan.",
  heroImg:
    "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1400&q=80",

  story: {
    heading: "Rumput yang rapi bikin rumah terasa lebih lapang.",
    body:
      "Kami tahu rasanya. Weekend datang, tapi halaman sudah kayak semak. Tenaga sudah habis kerja seminggu, mau nyewa tukang bingung siapa yang bisa dipercaya, harga tak jelas, dan setelah selesai halaman malah kotor. Huniaja lahir untuk menghapus semua rasa itu. Tim kami adalah mitra terlatih yang datang tepat waktu, bekerja rapi, dan meninggalkan halaman lebih bersih dari sebelum mereka datang.",
    pullQuote:
      "Kami tidak sekadar memotong rumput — kami mengembalikan hari liburmu.",
  },

  steps: [
    {
      title: "Chat & Kirim Foto",
      desc:
        "Buka WhatsApp, kirim foto halaman & lokasi. Tim kami akan estimasi lama pengerjaan dan siapkan penawaran khusus untukmu.",
    },
    {
      title: "Pilih Jadwal Kamu",
      desc:
        "Weekend, hari kerja, pagi, atau sore — kami menyesuaikan. Konfirmasi tim ready max 15 menit setelah chat.",
    },
    {
      title: "Datang & Kerja Rapi",
      desc:
        "Mitra terverifikasi datang lengkap dengan alat sendiri. Rumput dipotong presisi, rapi di setiap sudut & pinggiran.",
    },
    {
      title: "Bersih Total & Selesai",
      desc:
        "Semua sisa potongan disapu, dikumpulkan, dan dibuang. Kami tinggalkan halaman siap kamu nikmati kembali.",
    },
  ],

  includes: [
    "Mesin potong rumput profesional (mower + trimmer) dibawa sendiri oleh tim",
    "Rapikan pinggiran teras, pagar, dan sekitar tanaman — bukan cuma tengah halaman",
    "Jaminan bersih total: seluruh sisa rumput disapu & dibuang, halaman siap dipakai",
    "Mitra terverifikasi identitasnya, ramah, dan berpakaian rapi",
    "Garansi kepuasan: kalau ada bagian yang kurang, tim balik gratis di hari yang sama",
    "Aman untuk hewan peliharaan & tanaman hias — kami tanya dulu sebelum memangkas",
  ],

  testimonials: [
    {
      name: "Bu Irma",
      place: "Cibubur, Bogor",
      quote:
        "Awalnya ragu, ternyata masnya sopan banget dan hasilnya rapi. Yang paling bikin saya kaget, halaman malah lebih bersih dari sebelum mereka datang.",
      rating: 5,
    },
    {
      name: "Pak Dhany",
      place: "BSD, Tangerang Selatan",
      quote:
        "Chat jam 8 pagi, jam 11 sudah dikerjakan. Cepat, harga transparan, dan tidak nawar-nawar lagi setelah selesai. Recommended.",
      rating: 5,
    },
    {
      name: "Keluarga Ardi",
      place: "Sentul City, Bogor",
      quote:
        "Sudah 3 bulan langganan tiap 2 minggu sekali. Anak-anak jadi lebih sering main di halaman karena benar-benar bersih.",
      rating: 5,
    },
  ],

  faqs: [
    {
      q: "Apakah harganya sudah termasuk alat & pembuangan sampah rumput?",
      a: "Iya. Tim membawa alat sendiri dan seluruh sisa rumput disapu, dikumpulkan, lalu dibuang ke titik pembuangan sesuai standar. Kamu tidak perlu menyiapkan apa pun selain akses ke halaman.",
    },
    {
      q: "Berapa lama satu kali kunjungan?",
      a: "Rata-rata 45–90 menit tergantung luas halaman. Untuk halaman lebih besar, kami kirim tim 2 orang agar tetap cepat dan rapi.",
    },
    {
      q: "Apakah aman untuk anak-anak dan hewan peliharaan?",
      a: "Aman. Kami memakai alat berstandar keselamatan dan meminta akses jelas sebelum mulai. Kalau kamu punya hewan peliharaan, cukup beritahu kami dulu — kami koordinasikan.",
    },
    {
      q: "Bagaimana kalau hasilnya kurang memuaskan?",
      a: "Kami kasih garansi kepuasan. Kalau ada bagian yang terlewat atau kurang rapi, cukup chat WhatsApp kami di hari yang sama — tim akan kembali gratis untuk merapikan.",
    },
    {
      q: "Apakah bisa langganan rutin?",
      a: "Bisa. Banyak pelanggan mengambil paket rutin 2 minggu sekali atau 1 bulan sekali. Chat tim kami untuk penawaran khusus langganan.",
    },
  ],
};

export default function PotongRumputPage() {
  return <ServicePageTemplate config={config} />;
}
