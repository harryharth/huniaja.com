import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";
import { ICON_HOME_CLEANING } from "../../mock";

const config = {
  label: "Home Cleaning",
  tag: "Layanan Rumah Huniaja",
  icon: ICON_HOME_CLEANING,
  accent: "#001DF3",
  accentSoft: "#EEF2FF",
  waMessage:
    "Halo Huniaja, saya mau pesan layanan Home Cleaning. Boleh info paket & jadwal terdekatnya?",

  heroTitle: "Rumah bersih tanpa perlu bersih-bersih.",
  heroSub:
    "Serahkan seluruh urusan bersih-bersih ke tim Huniaja. Datang dengan alat lengkap, kerja teliti, dan meninggalkan rumahmu wangi seperti baru pindah.",
  heroImg:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=80",

  story: {
    heading: "Rumah bersih itu bukan mewah — itu ketenangan.",
    body:
      "Kita semua tahu perasaan itu. Pulang kerja capek, lihat lantai berdebu, kamar mandi mulai kusam, dapur belum sempat disikat. Rasanya mau istirahat, tapi hati juga tidak tenang. Huniaja hadir supaya kamu tidak perlu memilih. Tim cleaning kami adalah mitra berpengalaman yang bekerja teliti dari langit-langit sampai sudut lantai — pakai produk aman, alat lengkap, dan standar yang sama di setiap kunjungan.",
    pullQuote:
      "Rumah bersih adalah hadiah untuk diri sendiri — kami yang siapkan.",
  },

  steps: [
    {
      title: "Chat & Pilih Paket",
      desc:
        "Ceritakan tipe rumah dan area yang mau dibersihkan. Kami rekomendasikan paket paling pas — regular, deep, atau setelah renovasi.",
    },
    {
      title: "Atur Jadwal",
      desc:
        "Pilih hari & jam yang cocok. Tim akan konfirmasi max 15 menit, lengkap dengan nama mitra yang datang ke rumahmu.",
    },
    {
      title: "Kerja Teliti",
      desc:
        "Tim bawa vacuum, mop, chemical aman, dan checklist. Setiap ruangan dibersihkan sesuai SOP — tanpa area terlewat.",
    },
    {
      title: "Cek Bareng & Selesai",
      desc:
        "Kami tinggalkan rumah wangi dan rapi. Cek bareng sebelum kami pamit — kalau ada yang kurang, kami rapikan gratis.",
    },
  ],

  includes: [
    "Vacuum HEPA, mop microfiber, dan chemical aman untuk anak & hewan peliharaan",
    "Bersihkan kamar tidur, ruang tamu, dapur, kamar mandi, dan area khusus sesuai permintaan",
    "Wipe permukaan meja, kaca, kompor, wastafel — bukan cuma menyapu",
    "Rapikan tempat tidur & buang sampah rumah tangga ke titik yang kamu tunjuk",
    "Mitra terverifikasi, berseragam rapi, dan sudah dilatih standar hospitality",
    "Garansi puas: kalau ada bagian yang kurang, tim kembali gratis di hari yang sama",
  ],

  testimonials: [
    {
      name: "Mbak Renata",
      place: "Grand Depok City",
      quote:
        "Baru pertama coba, langsung langganan tiap 2 minggu. Rumah wangi, lantai kinclong, dan yang penting mereka sopan sama anak-anak.",
      rating: 5,
    },
    {
      name: "Pak Rizal",
      place: "Cikarang, Bekasi",
      quote:
        "Setelah renovasi, debunya luar biasa. Tim Huniaja datang bawa alat sendiri, kerja 4 jam, hasilnya seperti unit baru. Worth it banget.",
      rating: 5,
    },
    {
      name: "Bu Vira",
      place: "Bintaro, Tangsel",
      quote:
        "Yang bikin beda: mereka teliti di detail — belakang kulkas, atas lemari, celah keramik. Rasanya kayak rumah baru.",
      rating: 5,
    },
  ],

  faqs: [
    {
      q: "Apa saja yang termasuk di paket regular?",
      a: "Paket regular meliputi menyapu, mengepel, membersihkan permukaan, kaca, dapur, dan kamar mandi. Untuk area khusus seperti setelah renovasi atau deep cleaning menyeluruh, kami rekomendasikan paket Deep Clean — chat kami dulu supaya rekomendasi paketnya tepat.",
    },
    {
      q: "Apakah alat & bahan pembersih dibawa sendiri?",
      a: "Ya. Tim membawa vacuum, mop, chemical, dan lap sendiri. Kamu tidak perlu menyiapkan apa pun — kecuali kalau kamu punya produk favorit, boleh diberitahu supaya tim pakai punyamu.",
    },
    {
      q: "Aman untuk anak & hewan peliharaan?",
      a: "Aman. Kami menggunakan chemical rumah tangga standar dengan bau ringan dan tanpa residu berbahaya. Kalau ada anggota keluarga sensitif atau alergi, beritahu kami — kami sesuaikan.",
    },
    {
      q: "Berapa lama satu kali cleaning?",
      a: "Rata-rata 2–4 jam untuk paket regular, tergantung luas rumah. Deep cleaning bisa 4–6 jam. Semua durasi dikomunikasikan sebelum tim datang.",
    },
    {
      q: "Bagaimana kalau hasilnya kurang bersih?",
      a: "Kami kasih garansi puas. Cukup chat WhatsApp kami di hari yang sama — tim akan kembali gratis untuk merapikan area yang kurang.",
    },
  ],
};

export default function HomeCleaningPage() {
  return <ServicePageTemplate config={config} />;
}
