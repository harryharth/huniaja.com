import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";
import { ICON_SERVICE_AC } from "../../mock";

const config = {
  label: "Service AC",
  tag: "Layanan Rumah Huniaja",
  icon: ICON_SERVICE_AC,
  accent: "#001DF3",
  accentSoft: "#E6F3FF",
  waMessage:
    "Halo Huniaja, saya mau pesan layanan Service AC. Boleh info paket & jadwal tekniknya?",

  heroTitle: "AC dingin lagi, tidur nyenyak lagi.",
  heroSub:
    "Cuci, isi freon, atau perbaiki AC-mu dengan teknisi bersertifikat. Datang tepat waktu, kerja aman, dan garansi hasil — tanpa drama.",
  heroImg:
    "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=1400&q=80",

  story: {
    heading: "AC yang dingin bukan kemewahan — itu tidur yang berkualitas.",
    body:
      "Malam panas, AC cuma keluar angin hangat, kamar makin sumuk. Anak-anak susah tidur, kamu bolak-balik cek suhu. Panggil teknisi random bikin was-was: harga tidak jelas, kadang dikerjakan sembarangan, malah nambah masalah. Huniaja hadir untuk itu. Kami hanya bekerja sama dengan teknisi bersertifikat dan berpengalaman minimal 3 tahun, dengan alat lengkap dan SOP jelas.",
    pullQuote:
      "AC-mu bukan mainan — makanya kami tidak asal panggil orang.",
  },

  steps: [
    {
      title: "Chat & Cerita Masalahnya",
      desc:
        "Kirim foto/video AC, sebutkan gejalanya (kurang dingin, bocor, bunyi). Tim kami diagnosa awal dan estimasi kunjungan.",
    },
    {
      title: "Atur Jadwal",
      desc:
        "Pilih hari & jam yang cocok. Kami kirim teknisi bersertifikat lengkap dengan foto profil sebelum datang.",
    },
    {
      title: "Diagnosa & Kerja",
      desc:
        "Teknisi cek unit indoor & outdoor, tunjukkan penyebabnya, lalu kerjakan setelah kamu setuju — bukan main pasang-lepas.",
    },
    {
      title: "Tes Dingin & Garansi",
      desc:
        "AC dinyalakan, tunggu suhu turun, dan kamu cek sendiri. Semua pekerjaan bergaransi 14 hari — tanpa biaya tambahan.",
    },
  ],

  includes: [
    "Teknisi bersertifikat & berpengalaman minimal 3 tahun, terverifikasi Huniaja",
    "Layanan lengkap: cuci AC (indoor/outdoor), isi freon R32/R410, service umum, pasang & bongkar",
    "Cek tekanan & kebocoran memakai alat manifold — bukan tebak-tebakan",
    "Bahan kimia cuci AC aman, tidak merusak evaporator atau cat unit",
    "Garansi hasil kerja 14 hari — kalau kurang dingin lagi, tim kembali gratis",
    "Harga transparan sebelum kerja dimulai — tidak ada biaya kejutan",
  ],

  testimonials: [
    {
      name: "Pak Bagas",
      place: "Kelapa Gading, Jakut",
      quote:
        "Sudah panggil 3 teknisi sebelumnya, cuma dibilang 'freon habis'. Tim Huniaja tunjukin bagian mana yang bocor, benerin, dan sampai sekarang normal.",
      rating: 5,
    },
    {
      name: "Bu Dini",
      place: "Cinere, Depok",
      quote:
        "Cuci AC 2 unit selesai dalam 90 menit, rapi, kamar tidak jadi kotor. Yang penting: teknisinya sopan dan pakai sepatu dalam bag.",
      rating: 5,
    },
    {
      name: "Mas Erwin",
      place: "Serpong",
      quote:
        "Harga di depan, kerjaan di depan, garansi juga jelas. Tidak ada 'nanti dulu bos'. Recommended banget buat yang trauma tukang AC nakal.",
      rating: 5,
    },
  ],

  faqs: [
    {
      q: "Layanan AC apa saja yang tersedia?",
      a: "Cuci AC (indoor & outdoor), isi freon (R32 / R22 / R410), service umum, perbaikan kebocoran, ganti sparepart, pasang unit baru, dan bongkar-pasang saat pindah rumah.",
    },
    {
      q: "Berapa lama pengerjaannya?",
      a: "Cuci AC standar sekitar 45–60 menit per unit. Perbaikan kebocoran atau ganti sparepart bisa 1–3 jam tergantung kompleksitas. Kami selalu informasikan durasi estimasi sebelum kerja.",
    },
    {
      q: "Ada garansi setelah service?",
      a: "Ya, seluruh pekerjaan bergaransi 14 hari. Jika masalah yang sama muncul dalam periode garansi, tim akan kembali gratis untuk memeriksa dan memperbaiki.",
    },
    {
      q: "Apakah harga sudah termasuk freon?",
      a: "Harga jasa cuci/service terpisah dari biaya freon. Kalau AC butuh isi ulang freon, teknisi akan cek tekanan dulu dan konfirmasi harga sebelum menambahkan. Semua transparan di depan.",
    },
    {
      q: "Kalau AC tidak bisa diperbaiki di tempat, gimana?",
      a: "Jika perlu bawa ke workshop (misal PCB rusak berat), kami informasikan estimasi biaya & lama perbaikan dulu. Kamu bebas lanjut atau tidak, tanpa tekanan.",
    },
  ],
};

export default function ServiceAcPage() {
  return <ServicePageTemplate config={config} />;
}
