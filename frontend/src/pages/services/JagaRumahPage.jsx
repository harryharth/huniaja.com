import React from "react";
import ServicePageTemplate from "./ServicePageTemplate";
import { ICON_JAGA_RUMAH } from "../../mock";

const config = {
  label: "Jaga Rumah",
  tag: "Layanan Rumah Huniaja",
  icon: ICON_JAGA_RUMAH,
  accent: "#000066",
  accentSoft: "#E8ECFA",
  waMessage:
    "Halo Huniaja, saya mau tanya layanan Jaga Rumah selama saya bepergian. Boleh info paketnya?",

  heroTitle: "Pergi tenang, rumah tetap aman.",
  heroSub:
    "Titipkan rumah kosongmu ke tim Huniaja. Kami cek berkala, siram tanaman, ambil paket, dan kirim laporan foto — supaya kamu bisa liburan tanpa was-was.",
  heroImg:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80",

  story: {
    heading: "Rumah kosong bukan berarti tanpa penjaga.",
    body:
      "Liburan panjang, dinas ke luar kota, atau mudik lebaran — rasanya sudah tidak sabar. Tapi begitu sampai destinasi, pikiran malah tertinggal di rumah. Apakah pintu terkunci? Apakah tanaman kekeringan? Ada paket datang? CCTV masih menyala? Huniaja hadir supaya kamu tenang dari menit pertama meninggalkan pagar. Tim jaga rumah kami adalah mitra terverifikasi identitasnya, bertugas mengecek rumahmu berkala dan mengirim laporan yang bisa kamu lihat di HP.",
    pullQuote:
      "Kami bukan cuma menjaga rumah — kami menjaga ketenanganmu selama pergi.",
  },

  steps: [
    {
      title: "Chat & Booking",
      desc:
        "Ceritakan tanggal keberangkatan & pulang, alamat, serta hal khusus (tanaman, hewan, kunci cadangan). Kami buatkan skema kunjungan.",
    },
    {
      title: "Serah Terima Kunci",
      desc:
        "Kami kirim mitra ke rumahmu sehari sebelum berangkat untuk serah terima kunci, orientasi rumah, dan tanda tangan berita acara.",
    },
    {
      title: "Kunjungan Berkala",
      desc:
        "Setiap 2–3 hari (bisa disesuaikan) tim datang: cek pintu, tanaman disiram, paket diambil, foto laporan dikirim ke kamu via WhatsApp.",
    },
    {
      title: "Serah Terima Kembali",
      desc:
        "Saat kamu pulang, kunci dikembalikan dan laporan akhir diberikan. Rumah tetap seperti saat kamu tinggalkan — atau lebih rapi.",
    },
  ],

  includes: [
    "Kunjungan rutin sesuai jadwal (harian / 2 harian / mingguan)",
    "Laporan foto & video via WhatsApp setiap kali kunjungan — real time",
    "Siram tanaman, kasih makan ikan, terima paket ekspedisi, cek CCTV",
    "Mitra terverifikasi identitas + berita acara serah terima kunci resmi",
    "Kontak darurat 24 jam — kalau ada apa-apa, kami kabari duluan",
    "Asuransi perlindungan properti untuk paket bulanan (opsional)",
  ],

  testimonials: [
    {
      name: "Keluarga Anwar",
      place: "Cibubur, Bogor",
      quote:
        "Mudik 3 minggu, biasanya deg-degan tinggalin rumah. Tim Huniaja kirim foto tiap kunjungan — pintu, dapur, halaman. Tenang banget rasanya.",
      rating: 5,
    },
    {
      name: "Bu Melly",
      place: "Alam Sutera, Tangsel",
      quote:
        "Dinas ke Singapura 10 hari. Tanaman disiram, paket diterima, semua difoto. Pulang, rumah malah lebih rapi karena mereka juga rapikan meja.",
      rating: 5,
    },
    {
      name: "Pak Reza",
      place: "Pondok Indah, Jaksel",
      quote:
        "Sistemnya profesional: ada surat serah terima, laporan tertulis, kunci disegel. Ini yang bikin kami nyaman bayar untuk peace of mind.",
      rating: 5,
    },
  ],

  faqs: [
    {
      q: "Bagaimana jaminan keamanan kunci rumah?",
      a: "Kunci diserah-terimakan dengan berita acara tertulis, disegel, dan hanya dipegang mitra yang bertugas. Setiap kunjungan tercatat waktunya. Selesai masa titip, kunci dikembalikan langsung ke tanganmu dengan berita acara pengembalian.",
    },
    {
      q: "Frekuensi kunjungan bisa disesuaikan?",
      a: "Bisa. Standar kami 2–3 hari sekali, tapi kamu boleh pilih harian, mingguan, atau custom sesuai kebutuhan (misal ada tanaman/hewan yang butuh perhatian lebih).",
    },
    {
      q: "Apa saja yang dikerjakan setiap kunjungan?",
      a: "Cek keamanan pintu & jendela, siram tanaman, kasih makan hewan (kalau ada), terima paket ekspedisi, buang sampah, cek CCTV, dan foto seluruh area sebagai laporan.",
    },
    {
      q: "Bagaimana kalau ada kejadian tidak diinginkan?",
      a: "Tim langsung hubungi kamu via WhatsApp/telepon, koordinasi dengan security komplek atau pihak berwenang bila perlu, dan kirim laporan lengkap. Kami juga menyediakan asuransi opsional untuk paket bulanan.",
    },
    {
      q: "Berapa lama minimal masa titip rumah?",
      a: "Minimal 3 hari. Untuk kebutuhan lebih pendek, kami punya paket 'Cek Sesekali' — chat kami untuk penawaran khusus sesuai jadwalmu.",
    },
  ],
};

export default function JagaRumahPage() {
  return <ServicePageTemplate config={config} />;
}
