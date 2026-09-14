// 30 artikel Huniaja yang paling sering dicari pembeli pemula
// Setiap artikel punya konten lengkap yang siap dibaca

const IMG = {
  rumah1: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=80",
  rumah2: "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?w=1200&q=80",
  rumah3: "https://images.unsplash.com/photo-1558661091-5cc1b64d0dc5?w=1200&q=80",
  rumah4: "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?w=1200&q=80",
  rumah5: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?w=1200&q=80",
  rumah6: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1200&q=80",
  rumah7: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
  rumah8: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  rumah9: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  rumah10: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
  interior1: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
  interior2: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
  interior3: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
  interior4: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
  kpr1: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1200&q=80",
  kpr2: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
  kpr3: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  legal1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  legal2: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
  legal3: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
  apartemen1: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
  apartemen2: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
  cluster: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
  investasi: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=1200&q=80",
  key: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
  renovasi: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
  banjir: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1200&q=80",
  penipuan: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
  feng: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
  serahterima: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
};

const AUTHORS = [
  { name: "Dea Ananda", role: "Property Consultant Huniaja", initial: "D" },
  { name: "Reza Pramudya", role: "Senior KPR Advisor", initial: "R" },
  { name: "Sinta Larasati", role: "Legal Property Expert", initial: "S" },
  { name: "Bagas Wicaksana", role: "Investment Analyst", initial: "B" },
  { name: "Kirana Ayu", role: "Content Editor Huniaja", initial: "K" },
];

// Helper untuk block content
const p = (text) => ({ type: "paragraph", text });
const h = (text) => ({ type: "heading", text });
const l = (items) => ({ type: "list", items });
const q = (text) => ({ type: "quote", text });
const cta = () => ({
  type: "cta",
  text:
    "Butuh diskusi langsung dengan konsultan properti kami? Tim Huniaja siap bantu 7 hari seminggu.",
});

export const articles = [
  {
    id: 1,
    slug: "cara-beli-rumah-pertama-panduan-lengkap-pemula",
    title: "Cara Beli Rumah Pertama: Panduan Lengkap untuk Pemula 2026",
    excerpt:
      "Dari menabung DP, memilih lokasi, mengajukan KPR, hingga serah terima kunci. Panduan A-Z beli rumah pertama untuk kamu yang bingung mulai dari mana.",
    category: "Panduan",
    date: "12 Feb 2026",
    read: "8 min",
    image: IMG.rumah1,
    author: AUTHORS[0],
    tags: ["Rumah Pertama", "Pemula", "KPR", "Tips"],
    content: [
      p(
        "Beli rumah pertama adalah salah satu keputusan finansial terbesar dalam hidup. Wajar kalau kamu gugup, banyak pertanyaan, dan takut salah langkah. Tenang - panduan ini akan membawamu langkah demi langkah, dari nol sampai kamu memegang kunci rumah impianmu."
      ),
      h("1. Kenali Kemampuan Finansialmu Dulu"),
      p(
        "Sebelum melihat listing rumah, hitung dulu berapa cicilan yang realistis untukmu. Aturan umum: cicilan KPR maksimal 30-35% dari penghasilan bulanan bersih. Kalau gajimu Rp 8 juta, cicilan aman berkisar Rp 2,4-2,8 juta."
      ),
      l([
        "Cek slip gaji 3 bulan terakhir",
        "Hitung pengeluaran wajib (transport, makan, cicilan lain)",
        "Sisihkan dana darurat minimal 3x pengeluaran bulanan",
        "Baru tentukan angka cicilan yang nyaman untukmu",
      ]),
      h("2. Siapkan DP Minimal 15-20%"),
      p(
        "DP (Down Payment) adalah uang muka yang harus kamu bayar di awal. Untuk KPR konvensional, bank umumnya minta 15-20% dari harga rumah. Rumah subsidi bisa serendah 1%, tapi ada batasan gaji dan tipe rumah."
      ),
      p(
        "Tips menabung DP: buka rekening terpisah, gunakan reksadana pasar uang untuk hasil lebih baik dari tabungan biasa, dan konsisten setiap bulan sebelum uang habis di tempat lain."
      ),
      h("3. Pilih Lokasi dengan Bijak"),
      p(
        "Lokasi menentukan 3 hal penting: kualitas hidupmu sehari-hari, potensi kenaikan harga, dan kemudahan menjual kembali. Prioritaskan akses ke tempat kerja, sekolah, rumah sakit, dan transportasi umum."
      ),
      q(
        "Rumah bagus di lokasi buruk akan sulit dijual. Rumah biasa di lokasi bagus akan selalu punya peminat. Lokasi adalah raja."
      ),
      h("4. Cek Legalitas Sebelum DP"),
      p(
        "Jangan pernah transfer DP sebelum kamu memastikan sertifikat rumah asli dan atas nama penjual. Cek ke BPN setempat atau gunakan layanan cek sertifikat online. Pastikan ada IMB/PBG, bukan tanah sengketa, dan tidak sedang dijaminkan di bank."
      ),
      h("5. Ajukan KPR ke Beberapa Bank"),
      p(
        "Jangan hanya mengajukan ke satu bank. Bandingkan minimal 3 bank untuk mendapatkan bunga terbaik. Perhatikan bunga fixed vs floating, biaya administrasi, provisi, dan biaya notaris."
      ),
      h("6. Tanda Tangan AJB dan Serah Terima"),
      p(
        "Setelah KPR disetujui, kamu akan menandatangani AJB (Akta Jual Beli) di depan PPAT. Setelah itu, kunci rumah resmi jadi milikmu. Selamat - kamu resmi punya rumah pertama!"
      ),
      cta(),
    ],
  },
  {
    id: 2,
    slug: "kpr-syariah-vs-kpr-konvensional",
    title: "KPR Syariah vs KPR Konvensional: Mana yang Lebih Menguntungkan?",
    excerpt:
      "Perbandingan lengkap dari sisi akad, margin/bunga, cicilan, dan risiko. Bantu kamu memilih KPR yang paling cocok dengan prinsipmu.",
    category: "KPR",
    date: "10 Feb 2026",
    read: "7 min",
    image: IMG.kpr1,
    author: AUTHORS[1],
    tags: ["KPR", "Syariah", "Keuangan"],
    content: [
      p(
        "Banyak pembeli pemula bingung memilih antara KPR Syariah dan Konvensional. Keduanya sama-sama membantu kamu memiliki rumah, tapi memiliki filosofi dan struktur yang berbeda."
      ),
      h("Perbedaan Akad"),
      p(
        "KPR Konvensional menggunakan sistem bunga (interest). Bank meminjamkan uang, kamu mengembalikan dengan bunga yang bisa berubah (floating) setelah masa fixed."
      ),
      p(
        "KPR Syariah menggunakan akad jual beli (murabahah) atau sewa beli (ijarah muntahiya bittamlik). Bank membeli rumah lalu menjualnya kepadamu dengan margin yang disepakati di awal - cicilan tetap dari awal hingga lunas."
      ),
      h("Simulasi Cicilan"),
      p(
        "Untuk rumah Rp 500 juta, tenor 15 tahun, DP 20% (Rp 100 juta):"
      ),
      l([
        "KPR Konvensional: bunga 7% fixed 3 tahun, floating setelahnya. Cicilan awal ~Rp 3,6 juta - bisa naik ke Rp 4,5 juta saat floating.",
        "KPR Syariah: margin ~9% flat, cicilan tetap ~Rp 4,1 juta selama 15 tahun. Tidak akan naik.",
      ]),
      h("Keunggulan Masing-masing"),
      p("KPR Konvensional cocok jika:"),
      l([
        "Kamu suka fleksibilitas dan berani ambil risiko fluktuasi bunga",
        "Berencana lunasi lebih cepat saat masa fixed",
        "Ingin cicilan awal lebih ringan",
      ]),
      p("KPR Syariah cocok jika:"),
      l([
        "Kamu ingin cicilan tetap dan mudah direncanakan",
        "Mengutamakan prinsip syariah tanpa riba",
        "Tidak suka kejutan kenaikan cicilan",
      ]),
      q(
        "Tidak ada yang lebih baik secara mutlak. Yang ada hanya lebih cocok - dengan situasi finansial dan nilai hidupmu."
      ),
      cta(),
    ],
  },
  {
    id: 3,
    slug: "berapa-dp-rumah-ideal-untuk-pemula",
    title: "Berapa DP Rumah Ideal untuk Pemula? Ini Perhitungan Realistisnya",
    excerpt:
      "DP terlalu kecil bikin cicilan berat, DP terlalu besar bikin tabungan habis. Temukan angka DP yang paling seimbang untuk kondisimu.",
    category: "KPR",
    date: "08 Feb 2026",
    read: "5 min",
    image: IMG.kpr2,
    author: AUTHORS[1],
    tags: ["DP", "KPR", "Pemula"],
    content: [
      p(
        "DP alias uang muka adalah salah satu tantangan terbesar bagi pembeli pemula. Terlalu kecil, cicilan jadi berat. Terlalu besar, tabungan darurat habis. Berapa sih DP yang ideal?"
      ),
      h("Aturan Umum: 15-25% dari Harga Rumah"),
      p(
        "Untuk KPR konvensional, bank biasanya minta minimal 15-20% DP. Bank Indonesia melalui aturan Loan to Value (LTV) menetapkan batas ini agar pembeli tidak terlalu terbebani cicilan."
      ),
      h("Untuk Rumah Subsidi: 1-10%"),
      p(
        "Rumah subsidi FLPP hanya membutuhkan DP 1%. Ini opsi paling terjangkau, tapi ada syarat: penghasilan maksimal Rp 8 juta, WNI, belum pernah punya rumah, dan tipe rumah terbatas."
      ),
      h("Kenapa Sebaiknya Jangan Kurang dari 15%?"),
      l([
        "Cicilan bulanan akan sangat berat",
        "Total bunga yang kamu bayar jauh lebih besar",
        "Risiko under-water (utang lebih besar dari nilai rumah) saat harga turun",
        "Sulit dapat approval dari bank",
      ]),
      h("Kenapa Sebaiknya Jangan Lebih dari 30%?"),
      l([
        "Tabungan daruratmu akan habis",
        "Kamu kehilangan likuiditas untuk keadaan tak terduga",
        "Dana bisa dipakai untuk investasi dengan return lebih tinggi",
      ]),
      h("Simulasi DP untuk Rumah Rp 400 Juta"),
      l([
        "DP 10% (Rp 40 juta) - cicilan ~Rp 3,2 juta/bulan (15 tahun)",
        "DP 20% (Rp 80 juta) - cicilan ~Rp 2,9 juta/bulan (rekomendasi)",
        "DP 30% (Rp 120 juta) - cicilan ~Rp 2,5 juta/bulan (paling nyaman)",
      ]),
      q(
        "Rumus emas: DP 20-25%, sisakan minimal 6 bulan pengeluaran sebagai dana darurat."
      ),
      cta(),
    ],
  },
  {
    id: 4,
    slug: "cek-legalitas-rumah-sebelum-beli",
    title: "Cara Cek Legalitas Rumah Sebelum Beli: 7 Dokumen Wajib Dicek",
    excerpt:
      "Jangan tergiur harga murah tanpa cek legalitas. Ini daftar 7 dokumen yang wajib kamu verifikasi sebelum transfer DP.",
    category: "Legal",
    date: "06 Feb 2026",
    read: "6 min",
    image: IMG.legal1,
    author: AUTHORS[2],
    tags: ["Legal", "Sertifikat", "Verifikasi"],
    content: [
      p(
        "Membeli rumah tanpa cek legalitas sama dengan berjalan di tengah kegelapan. Banyak kasus pembeli merugi karena sertifikat palsu, tanah sengketa, atau rumah masih dijaminkan di bank."
      ),
      h("7 Dokumen Legalitas Wajib Cek"),
      l([
        "1. Sertifikat (SHM/SHGB) - pastikan asli, atas nama penjual, dan nomor sesuai BPN",
        "2. IMB atau PBG - izin mendirikan bangunan yang sah",
        "3. PBB terbaru - bukti tidak ada tunggakan pajak",
        "4. KTP & KK penjual - cocokkan dengan nama di sertifikat",
        "5. Bukti bayar listrik & air 3 bulan terakhir",
        "6. Surat nikah (jika penjual sudah menikah, wajib persetujuan pasangan)",
        "7. Surat kuasa (jika yang jual bukan pemilik langsung)",
      ]),
      h("Cara Cek Sertifikat di BPN"),
      p(
        "Datang ke kantor BPN wilayah tempat rumah berada, bawa fotokopi sertifikat, dan minta 'cek sertifikat'. Biayanya sekitar Rp 50-100 ribu. Bisa juga pakai aplikasi 'Sentuh Tanahku' dari BPN."
      ),
      h("Tanda Bahaya yang Harus Diwaspadai"),
      l([
        "Penjual menolak menunjukkan sertifikat asli",
        "Harga jauh di bawah pasaran (>30% lebih murah)",
        "Sertifikat masih dijaminkan di bank",
        "Ada perbedaan nama di sertifikat vs KTP",
        "Alamat di sertifikat tidak cocok dengan lokasi rumah",
      ]),
      q(
        "Uang bisa dicari lagi, rumah sengketa bisa jadi mimpi buruk seumur hidup. Cek legalitas bukan opsi - itu wajib."
      ),
      cta(),
    ],
  },
  {
    id: 5,
    slug: "rumah-subsidi-flpp-syarat-cara-daftar",
    title: "Rumah Subsidi FLPP: Syarat Lengkap dan Cara Daftar 2026",
    excerpt:
      "Dengan DP 1% dan cicilan tetap 5% selama 20 tahun, rumah subsidi jadi pintu masuk kepemilikan rumah untuk milenial berpenghasilan rendah.",
    category: "Subsidi",
    date: "04 Feb 2026",
    read: "6 min",
    image: IMG.rumah3,
    author: AUTHORS[1],
    tags: ["Subsidi", "FLPP", "Pemula"],
    content: [
      p(
        "FLPP (Fasilitas Likuiditas Pembiayaan Perumahan) adalah program pemerintah yang membuat rumah jadi terjangkau untuk masyarakat berpenghasilan rendah (MBR). Bunga tetap 5% selama 20 tahun - jauh di bawah pasar."
      ),
      h("Syarat Utama Rumah Subsidi FLPP"),
      l([
        "WNI dengan KTP aktif",
        "Penghasilan maksimal Rp 8 juta/bulan (untuk rumah tapak)",
        "Belum pernah memiliki rumah",
        "Belum pernah menerima subsidi kepemilikan rumah dari pemerintah",
        "Minimal masa kerja 1 tahun (karyawan) atau usaha 2 tahun (wiraswasta)",
        "Usia minimal 21 tahun atau sudah menikah",
      ]),
      h("Dokumen yang Perlu Disiapkan"),
      l([
        "KTP, KK, Akta Nikah (jika sudah menikah)",
        "NPWP",
        "SPT tahunan atau slip gaji 3 bulan",
        "Rekening koran 3 bulan terakhir",
        "Surat keterangan kerja",
        "Surat pernyataan belum memiliki rumah (bermaterai)",
      ]),
      h("Langkah Daftar FLPP"),
      l([
        "1. Cari perumahan bersubsidi terdaftar di SiKumbang",
        "2. Datangi developer, minta simulasi",
        "3. Bayar booking fee (biasanya Rp 1-5 juta)",
        "4. Ajukan KPR FLPP ke bank penyalur (BTN, BRI, Mandiri, dll)",
        "5. Verifikasi & appraisal oleh bank",
        "6. Akad kredit di notaris",
        "7. Serah terima kunci",
      ]),
      p(
        "Simulasi: rumah Rp 168 juta (batas maksimum 2026), DP 1% = Rp 1,68 juta, cicilan ~Rp 1,1 juta/bulan selama 20 tahun. Sangat terjangkau."
      ),
      cta(),
    ],
  },
  {
    id: 6,
    slug: "perbedaan-shm-shgb-hgu-girik",
    title: "Perbedaan SHM, SHGB, HGU, dan Girik: Mana yang Paling Aman?",
    excerpt:
      "Jenis sertifikat sangat menentukan hak kepemilikanmu. Kenali perbedaan dan risiko masing-masing sebelum tanda tangan.",
    category: "Legal",
    date: "02 Feb 2026",
    read: "7 min",
    image: IMG.legal2,
    author: AUTHORS[2],
    tags: ["Legal", "Sertifikat", "SHM"],
    content: [
      p(
        "Salah pilih jenis sertifikat bisa bikin kamu 'kehilangan' rumah setelah masa berlaku habis. Yuk kenali empat sertifikat properti paling umum di Indonesia."
      ),
      h("1. SHM (Sertifikat Hak Milik) - Paling Kuat"),
      p(
        "SHM adalah bukti kepemilikan penuh tanpa batas waktu. Hanya WNI yang boleh punya SHM. Ini sertifikat paling ideal untuk rumah tinggal jangka panjang."
      ),
      h("2. SHGB (Sertifikat Hak Guna Bangunan)"),
      p(
        "SHGB memberi hak mendirikan bangunan di atas tanah negara/pihak lain, dengan masa 30 tahun (bisa diperpanjang 20 tahun, lalu diperbarui 30 tahun). Umum untuk apartemen dan rumah cluster developer."
      ),
      h("3. HGU (Hak Guna Usaha)"),
      p(
        "HGU untuk usaha pertanian, perkebunan, atau peternakan. Bukan untuk rumah tinggal. Masa 25-35 tahun."
      ),
      h("4. Girik / Petok - Paling Berisiko"),
      p(
        "Girik hanya bukti pembayaran pajak, bukan sertifikat kepemilikan. Belum terdaftar di BPN. Sebaiknya hindari atau balik nama ke SHM dulu sebelum beli."
      ),
      h("Rekomendasi untuk Pembeli Pemula"),
      l([
        "Prioritas 1: SHM - aman selamanya",
        "Prioritas 2: SHGB - aman selama masa berlaku, bisa diperpanjang",
        "Hindari: Girik, Petok D, AJB tanpa sertifikat resmi",
      ]),
      q(
        "SHM adalah investasi jangka panjang. SHGB adalah pilihan praktis. Girik adalah gamble."
      ),
      cta(),
    ],
  },
  {
    id: 7,
    slug: "pajak-beli-rumah-bphtb-ppn",
    title: "Pajak Beli Rumah 2026: BPHTB, PPN, dan Biaya Lain yang Wajib Kamu Tahu",
    excerpt:
      "Harga rumah bukan satu-satunya biaya. Siapkan 5-8% ekstra dari harga rumah untuk pajak dan biaya notaris yang sering tidak disebutkan.",
    category: "Keuangan",
    date: "31 Jan 2026",
    read: "6 min",
    image: IMG.kpr3,
    author: AUTHORS[3],
    tags: ["Pajak", "Biaya", "BPHTB"],
    content: [
      p(
        "Banyak pembeli pemula terkejut saat tahu total biaya beli rumah bisa 5-8% lebih tinggi dari harga tertera. Yuk breakdown apa saja pajak dan biaya yang perlu kamu siapkan."
      ),
      h("1. BPHTB (Bea Perolehan Hak atas Tanah dan Bangunan)"),
      p(
        "Dibayar oleh PEMBELI. Besarannya 5% x (NJOP - NJOPTKP). NJOPTKP tergantung daerah, biasanya Rp 60-80 juta. Contoh: rumah NJOP Rp 500 juta, NJOPTKP Rp 80 juta, BPHTB = 5% x Rp 420 juta = Rp 21 juta."
      ),
      h("2. PPN 11% (untuk Rumah Baru dari Developer)"),
      p(
        "Jika beli dari developer, akan dikenakan PPN 11%. Untuk rumah subsidi, PPN ditanggung pemerintah. Rumah bekas antar-perorangan biasanya bebas PPN."
      ),
      h("3. Biaya Notaris/PPAT"),
      p(
        "Sekitar 0,5-1% dari harga transaksi. Termasuk pembuatan AJB, balik nama, dan cek sertifikat. Bisa dinegosiasi."
      ),
      h("4. Biaya KPR"),
      l([
        "Provisi bank: 1% dari plafon KPR",
        "Biaya administrasi: Rp 300 ribu - 1 juta",
        "Asuransi jiwa & kebakaran: 0,5-1% dari plafon",
        "Appraisal: Rp 500 ribu - 1,5 juta",
      ]),
      h("Total Estimasi untuk Rumah Rp 500 Juta"),
      l([
        "BPHTB: ~Rp 21 juta",
        "PPN (jika baru): ~Rp 55 juta",
        "Notaris: ~Rp 5 juta",
        "Biaya KPR (plafon 400 juta): ~Rp 6 juta",
        "TOTAL: Rp 30-90 juta tergantung kondisi",
      ]),
      p(
        "Selalu siapkan dana ekstra minimal 6-8% dari harga rumah untuk cover semua biaya ini."
      ),
      cta(),
    ],
  },
  {
    id: 8,
    slug: "cara-menghitung-kemampuan-kpr-dsr",
    title: "Cara Menghitung Kemampuan KPR (DSR): Rumus Gampang untuk Pemula",
    excerpt:
      "Sebelum ke bank, hitung sendiri berapa maksimal cicilan yang aman untukmu. Cukup satu rumus sederhana bernama DSR.",
    category: "KPR",
    date: "29 Jan 2026",
    read: "5 min",
    image: IMG.kpr2,
    author: AUTHORS[1],
    tags: ["KPR", "DSR", "Kemampuan"],
    content: [
      p(
        "DSR (Debt Service Ratio) adalah rasio yang dipakai bank untuk menilai kemampuanmu membayar cicilan. Aturan umum: total cicilanmu (KPR + lainnya) tidak boleh melebihi 30-40% dari penghasilan bersih."
      ),
      h("Rumus DSR"),
      q(
        "DSR = (Total Cicilan Bulanan / Penghasilan Bersih Bulanan) x 100%"
      ),
      p("Bank akan menyetujui KPR jika DSR-mu di bawah 35-40%."),
      h("Contoh Perhitungan"),
      p("Andi punya penghasilan bersih Rp 10 juta/bulan. Cicilan lain:"),
      l([
        "Cicilan motor: Rp 800 ribu",
        "Cicilan kartu kredit: Rp 500 ribu",
        "Total cicilan existing: Rp 1,3 juta",
      ]),
      p(
        "Batas DSR 40% = Rp 4 juta. Berarti sisa kapasitas Andi untuk KPR = Rp 4 juta - Rp 1,3 juta = Rp 2,7 juta/bulan."
      ),
      p(
        "Dengan cicilan Rp 2,7 juta, tenor 15 tahun, bunga 7%, Andi bisa dapat KPR sekitar Rp 300 juta."
      ),
      h("Cara Meningkatkan Kapasitas KPR"),
      l([
        "Lunasi cicilan kartu kredit & pinjaman online",
        "Ajak pasangan gabung penghasilan (joint income)",
        "Perpanjang tenor (dari 10 ke 20 tahun)",
        "Naikkan DP agar plafon KPR lebih kecil",
        "Cari bank dengan bunga lebih rendah",
      ]),
      cta(),
    ],
  },
  {
    id: 9,
    slug: "tips-negosiasi-harga-rumah",
    title: "Tips Negosiasi Harga Rumah agar Turun 10-20%: Strategi Profesional",
    excerpt:
      "Harga listing bukan harga final. Dengan strategi yang tepat, kamu bisa hemat puluhan hingga ratusan juta.",
    category: "Tips",
    date: "27 Jan 2026",
    read: "6 min",
    image: IMG.rumah5,
    author: AUTHORS[0],
    tags: ["Negosiasi", "Tips", "Hemat"],
    content: [
      p(
        "Jarang ada penjual yang tidak siap turun harga. Kuncinya: kamu harus tahu kapan menawar, seberapa besar menawar, dan bagaimana cara menyampaikan."
      ),
      h("1. Riset Harga Pasaran Dulu"),
      p(
        "Cek harga rumah serupa (luas, lokasi, kondisi) di Huniaja atau portal lain. Kumpulkan minimal 5 data pembanding. Baru kamu punya amunisi kuat untuk negosiasi."
      ),
      h("2. Cari Motivasi Penjual"),
      p(
        "Kenapa mereka jual? Pindah kerja? Butuh dana cepat? Cerai? Penjual dengan urgensi tinggi lebih mudah diajak nego 10-15%. Penjual santai maksimal turun 3-5%."
      ),
      h("3. Mulai Tawaran 15-20% di Bawah"),
      p(
        "Ini beri ruang bagi kedua pihak untuk 'bertemu di tengah'. Kalau langsung tawar mepet, kamu tidak punya ruang gerak."
      ),
      h("4. Sebutkan Kekurangan Rumah"),
      l([
        "Cat mengelupas - butuh renovasi Rp X",
        "Atap bocor - perbaikan Rp X",
        "Lokasi jauh dari sekolah - nilai turun",
        "Umur bangunan 15 tahun - perlu perawatan",
      ]),
      h("5. Tunjukkan Kesiapan Bayar"),
      p(
        "'Saya siap DP hari ini kalau harga bisa Rp X.' Penjual lebih suka pembeli yang cepat dan pasti daripada tawaran tinggi tapi lama."
      ),
      h("6. Silent Treatment"),
      p(
        "Setelah menawar, diam. Jangan panik menaikkan tawaran. Biarkan penjual yang menghubungi kamu duluan."
      ),
      q(
        "Negosiasi bukan tentang menang atau kalah. Ini tentang menemukan angka yang bikin dua pihak sama-sama tersenyum."
      ),
      cta(),
    ],
  },
  {
    id: 10,
    slug: "rumah-second-vs-rumah-baru",
    title: "Rumah Second vs Rumah Baru: Mana yang Lebih Untung untuk Pemula?",
    excerpt:
      "Rumah baru lebih fresh tapi mahal. Rumah second lebih murah tapi butuh renovasi. Bandingkan lengkap sebelum kamu memutuskan.",
    category: "Tips",
    date: "25 Jan 2026",
    read: "6 min",
    image: IMG.rumah6,
    author: AUTHORS[0],
    tags: ["Rumah Baru", "Rumah Second", "Perbandingan"],
    content: [
      p(
        "Pertanyaan klasik: beli rumah baru atau second? Jawabannya tergantung situasimu. Yuk bedah keuntungan dan risiko masing-masing."
      ),
      h("Rumah Baru - Kelebihan"),
      l([
        "Kondisi 100% baru, garansi developer",
        "Desain modern & efisien",
        "Fasilitas cluster (kolam, taman, keamanan 24 jam)",
        "Skema KPR & DP lebih fleksibel",
        "Tidak perlu renovasi 5-10 tahun ke depan",
      ]),
      h("Rumah Baru - Kekurangan"),
      l([
        "Harga per meter lebih mahal 20-40%",
        "Lokasi biasanya jauh dari pusat kota",
        "Fasilitas umum belum lengkap",
        "PPN 11%",
      ]),
      h("Rumah Second - Kelebihan"),
      l([
        "Harga lebih murah 15-30%",
        "Lokasi lebih strategis (di dalam kota)",
        "Bebas PPN",
        "Bisa langsung ditempati",
        "Ruang negosiasi lebih besar",
      ]),
      h("Rumah Second - Kekurangan"),
      l([
        "Kondisi bervariasi - perlu inspeksi teliti",
        "Butuh dana renovasi (siapkan 10-20%)",
        "Legalitas kadang rumit (waris, sengketa)",
        "Bank kadang appraisal lebih rendah",
      ]),
      h("Rekomendasi Berdasarkan Profil"),
      l([
        "Milenial dengan budget terbatas → Rumah second di lokasi strategis",
        "Keluarga muda ingin praktis → Rumah baru cluster",
        "Investor jangka panjang → Rumah baru dengan potensi kenaikan",
        "Solo bekerja di kota → Apartemen atau rumah second dekat kantor",
      ]),
      cta(),
    ],
  },
  {
    id: 11,
    slug: "panduan-pilih-lokasi-rumah-investasi",
    title: "Panduan Pilih Lokasi Rumah untuk Investasi: 8 Indikator Wajib Cek",
    excerpt:
      "Lokasi menentukan 70% nilai investasi properti. Ini 8 indikator yang dipakai investor properti profesional.",
    category: "Investasi",
    date: "23 Jan 2026",
    read: "7 min",
    image: IMG.investasi,
    author: AUTHORS[3],
    tags: ["Investasi", "Lokasi", "Properti"],
    content: [
      p(
        "Kata mereka: lokasi, lokasi, lokasi. Tapi lokasi bagus itu spesifiknya bagaimana? Ini 8 indikator yang dipakai investor properti profesional."
      ),
      h("1. Akses Transportasi Umum"),
      p(
        "Rumah dekat MRT, LRT, atau BRT selalu punya premium harga 10-30%. Cek juga rencana jalur baru dari pemerintah."
      ),
      h("2. Sekolah & Kampus Berkualitas"),
      p("Area sekitar sekolah favorit selalu diburu keluarga muda."),
      h("3. Rumah Sakit & Pusat Kesehatan"),
      p("Semakin dekat rumah sakit besar, semakin tinggi nilai jual."),
      h("4. Pusat Bisnis & Kantor"),
      p(
        "Rumah dalam radius 30 menit dari CBD (Central Business District) selalu punya demand tinggi."
      ),
      h("5. Perkembangan Kawasan"),
      p(
        "Cek RTRW (Rencana Tata Ruang Wilayah) - apakah area akan dikembangkan untuk komersial atau residensial?"
      ),
      h("6. Kepadatan Penduduk & Kelas Sosial"),
      p("Kelas sosial menentukan target pasar sewa/jual kembali."),
      h("7. Bebas Banjir & Bencana"),
      p("Cek riwayat banjir 5 tahun terakhir - satu banjir bisa menurunkan nilai 20%."),
      h("8. Fasilitas Rekreasi & Retail"),
      p("Mall, restoran, dan hiburan meningkatkan livability score."),
      q(
        "Rumah yang salah lokasi akan mengunci uangmu selama puluhan tahun. Riset lokasi lebih penting dari desain rumah."
      ),
      cta(),
    ],
  },
  {
    id: 12,
    slug: "cara-baca-imb-pbg",
    title: "Cara Baca IMB dan PBG: Perizinan Wajib Sebelum Beli Rumah",
    excerpt:
      "IMB kini berganti nama jadi PBG. Kenali cara verifikasi izin bangunan agar rumah yang kamu beli tidak bermasalah.",
    category: "Legal",
    date: "21 Jan 2026",
    read: "5 min",
    image: IMG.legal3,
    author: AUTHORS[2],
    tags: ["IMB", "PBG", "Legal"],
    content: [
      p(
        "Sejak 2021, IMB (Izin Mendirikan Bangunan) diganti dengan PBG (Persetujuan Bangunan Gedung). Fungsinya sama: bukti bahwa bangunan sesuai peraturan tata ruang."
      ),
      h("Kenapa PBG Penting?"),
      l([
        "Bukti bangunan legal & sesuai peruntukan zona",
        "Syarat wajib untuk KPR di bank",
        "Menentukan nilai jual kembali",
        "Menghindari sanksi pembongkaran",
      ]),
      h("Info Penting di Dokumen PBG"),
      l([
        "Nama pemilik & alamat lokasi",
        "Luas tanah & luas bangunan",
        "Fungsi bangunan (rumah tinggal, komersial)",
        "Jumlah lantai yang diizinkan",
        "GSB (Garis Sempadan Bangunan)",
        "Tanggal terbit",
      ]),
      h("Cara Verifikasi PBG"),
      l([
        "Datangi Dinas Cipta Karya / DPMPTSP setempat",
        "Bawa fotokopi PBG",
        "Minta cek keabsahan dokumen",
        "Cek luas bangunan aktual vs yang di izin",
      ]),
      p(
        "Bangunan tanpa PBG tetap bisa dibeli, tapi kamu wajib urus 'IMB Retroaktif' - biayanya bisa 2-5x lebih mahal dari baru."
      ),
      cta(),
    ],
  },
  {
    id: 13,
    slug: "take-over-kpr-untung-rugi",
    title: "Take Over KPR: Untung Ruginya + Kapan Sebaiknya Dilakukan",
    excerpt:
      "Pindahkan KPR-mu ke bank lain untuk dapat bunga lebih rendah. Ini panduan take over agar kamu benar-benar hemat.",
    category: "KPR",
    date: "19 Jan 2026",
    read: "6 min",
    image: IMG.kpr1,
    author: AUTHORS[1],
    tags: ["Take Over", "KPR", "Refinancing"],
    content: [
      p(
        "Take over KPR adalah memindahkan cicilan KPR dari satu bank ke bank lain, biasanya untuk mendapat bunga lebih rendah atau tenor yang lebih fleksibel."
      ),
      h("Kapan Take Over Menguntungkan?"),
      l([
        "Selisih bunga minimal 1,5-2% lebih rendah",
        "Sisa tenor masih 5+ tahun",
        "Kamu punya track record cicilan lancar",
        "Bank baru menawarkan skema fixed lebih panjang",
      ]),
      h("Kapan Sebaiknya TIDAK Take Over?"),
      l([
        "Sisa tenor kurang dari 3 tahun (tidak akan hemat)",
        "Selisih bunga kurang dari 1%",
        "Biaya take over lebih tinggi dari potensi hemat",
        "Riwayat kredit belum stabil",
      ]),
      h("Simulasi Hemat"),
      p(
        "KPR sisa Rp 300 juta, sisa tenor 10 tahun. Bank lama: bunga 11%. Bank baru: bunga 8%."
      ),
      l([
        "Cicilan bank lama: ~Rp 4,1 juta/bulan",
        "Cicilan bank baru: ~Rp 3,6 juta/bulan",
        "Hemat per bulan: Rp 500 ribu",
        "Total hemat 10 tahun: Rp 60 juta",
      ]),
      h("Biaya Take Over"),
      l([
        "Provisi bank baru: 1%",
        "Notaris: 0,5-1%",
        "Appraisal: Rp 1-2 juta",
        "Penalty bank lama: 1-3% (jika masih masa fixed)",
      ]),
      cta(),
    ],
  },
  {
    id: 14,
    slug: "simulasi-kpr-sederhana-sendiri",
    title: "Cara Simulasi KPR Sederhana Sendiri Tanpa Kalkulator Bank",
    excerpt:
      "Hitung cicilan KPR-mu dalam 5 menit dengan rumus sederhana. Cocok untuk cek awal sebelum ke bank.",
    category: "KPR",
    date: "17 Jan 2026",
    read: "4 min",
    image: IMG.kpr3,
    author: AUTHORS[1],
    tags: ["Simulasi", "KPR", "Kalkulator"],
    content: [
      p(
        "Sebelum ke bank, kamu bisa simulasi KPR sendiri dengan rumus flat sederhana. Meski bank pakai bunga efektif (lebih rumit), rumus flat cukup untuk gambaran awal."
      ),
      h("Rumus Flat"),
      q(
        "Cicilan = (Pokok / Tenor Bulan) + (Pokok x Bunga Tahunan / 12)"
      ),
      h("Contoh Simulasi"),
      p("Rumah Rp 500 juta, DP 20% (Rp 100 juta), KPR Rp 400 juta, tenor 15 tahun (180 bulan), bunga 7%:"),
      l([
        "Cicilan pokok = 400 juta / 180 = Rp 2,22 juta",
        "Cicilan bunga = 400 juta x 7% / 12 = Rp 2,33 juta",
        "Total cicilan awal = Rp 4,55 juta",
      ]),
      p(
        "Di bulan berikutnya, cicilan bunga akan sedikit turun karena pokok sudah berkurang. Ini disebut bunga efektif."
      ),
      h("Rumus Cepat: Rp 1 Juta = Rp 10.000/Bulan"),
      p(
        "Rule of thumb: setiap Rp 1 juta plafon KPR = ~Rp 10.000 cicilan per bulan (bunga 7%, tenor 15 tahun). Jadi Rp 400 juta = ~Rp 4 juta cicilan."
      ),
      h("Gunakan Kalkulator KPR Huniaja"),
      p(
        "Untuk hasil yang lebih akurat, gunakan simulator KPR di halaman KPR Huniaja - sudah dengan bunga efektif dan skenario floating."
      ),
      cta(),
    ],
  },
  {
    id: 15,
    slug: "cek-sertifikat-rumah-di-bpn-online",
    title: "Cara Cek Sertifikat Rumah di BPN Online: Panduan 2026",
    excerpt:
      "Kini tidak perlu antre di kantor BPN. Cek keaslian sertifikat rumah cukup dari smartphone dengan aplikasi Sentuh Tanahku.",
    category: "Legal",
    date: "15 Jan 2026",
    read: "4 min",
    image: IMG.legal2,
    author: AUTHORS[2],
    tags: ["BPN", "Sertifikat", "Online"],
    content: [
      p(
        "Verifikasi sertifikat properti kini bisa dilakukan online melalui aplikasi resmi BPN 'Sentuh Tanahku'. Ini cara terbaik untuk cek awal sebelum datang ke kantor BPN."
      ),
      h("Langkah Cek Sertifikat Online"),
      l([
        "1. Download aplikasi 'Sentuh Tanahku' di Play Store/App Store",
        "2. Registrasi dengan KTP & foto",
        "3. Pilih menu 'Info Berkas'",
        "4. Masukkan nomor sertifikat",
        "5. Hasil verifikasi muncul dalam hitungan detik",
      ]),
      h("Info yang Bisa Dicek"),
      l([
        "Nama pemilik terdaftar",
        "Luas & lokasi tanah",
        "Jenis sertifikat (SHM/SHGB/dll)",
        "Status: aktif, dalam sengketa, atau dijaminkan",
        "Riwayat balik nama",
      ]),
      h("Yang Perlu Diperhatikan"),
      p(
        "Aplikasi Sentuh Tanahku hanya menampilkan info dasar. Untuk verifikasi mendalam (misal cek fisik sertifikat), tetap perlu datang ke BPN dengan biaya sekitar Rp 50-100 ribu."
      ),
      h("Tanda-tanda Sertifikat Bermasalah"),
      l([
        "Data tidak ditemukan di sistem",
        "Nama pemilik berbeda dengan penjual",
        "Status 'dijaminkan bank'",
        "Ada catatan sengketa",
      ]),
      cta(),
    ],
  },
  {
    id: 16,
    slug: "biaya-tersembunyi-beli-rumah",
    title: "10 Biaya Tersembunyi Saat Beli Rumah yang Sering Terlupakan",
    excerpt:
      "Selain DP dan cicilan, masih ada 10 biaya lain yang harus kamu siapkan. Total bisa mencapai 8-10% dari harga rumah.",
    category: "Keuangan",
    date: "13 Jan 2026",
    read: "6 min",
    image: IMG.interior1,
    author: AUTHORS[3],
    tags: ["Biaya", "Hidden Cost", "Pemula"],
    content: [
      p(
        "Banyak pembeli pemula kaget di detik-detik terakhir karena tidak siap dengan biaya tambahan. Ini daftar lengkapnya."
      ),
      h("10 Biaya Tersembunyi"),
      l([
        "1. BPHTB - 5% x (NJOP - NJOPTKP)",
        "2. Biaya Notaris - 0,5-1% harga transaksi",
        "3. Biaya Balik Nama - Rp 250 ribu - 1 juta",
        "4. Provisi Bank - 1% dari plafon KPR",
        "5. Biaya Administrasi Bank - Rp 500 ribu - 1,5 juta",
        "6. Asuransi Jiwa Kredit - 0,3-0,5% x plafon",
        "7. Asuransi Kebakaran - 0,1-0,2% x plafon",
        "8. Biaya Appraisal - Rp 500 ribu - 2 juta",
        "9. Biaya AJB & Cek Sertifikat - Rp 1-3 juta",
        "10. Biaya Pindahan & Interior - siapkan minimal 5% harga rumah",
      ]),
      h("Estimasi Total untuk Rumah Rp 500 Juta"),
      l([
        "DP 20%: Rp 100 juta",
        "Biaya notaris + BPHTB: ~Rp 25 juta",
        "Biaya KPR: ~Rp 6 juta",
        "Furniture & interior: ~Rp 25 juta",
        "TOTAL SIAPAN DANA: Rp 156 juta (30%+ dari harga rumah)",
      ]),
      q(
        "Rumus emas pembeli pemula: siapkan 30% dari harga rumah sebagai total dana tunai, bukan hanya 20% untuk DP."
      ),
      cta(),
    ],
  },
  {
    id: 17,
    slug: "peran-notaris-ppat-cara-pilih",
    title: "Notaris & PPAT: Peran, Biaya, dan Cara Pilih yang Terpercaya",
    excerpt:
      "Notaris adalah kunci legalitas transaksimu. Pilih yang salah, dokumen bisa bermasalah bertahun-tahun kemudian.",
    category: "Legal",
    date: "11 Jan 2026",
    read: "5 min",
    image: IMG.legal1,
    author: AUTHORS[2],
    tags: ["Notaris", "PPAT", "Legal"],
    content: [
      p(
        "Notaris/PPAT (Pejabat Pembuat Akta Tanah) memegang peran vital dalam transaksi properti. Mereka menjadi saksi netral dan pembuat dokumen resmi negara."
      ),
      h("Peran Notaris di Jual Beli Rumah"),
      l([
        "Membuat & menandatangani AJB (Akta Jual Beli)",
        "Verifikasi identitas kedua pihak",
        "Cek keaslian sertifikat ke BPN",
        "Mengurus balik nama sertifikat",
        "Menghitung & memungut BPHTB",
        "Menjadi penyimpan dokumen asli",
      ]),
      h("Berapa Biaya Notaris?"),
      p(
        "Bervariasi 0,5-1% dari harga transaksi. Untuk rumah Rp 500 juta, biaya sekitar Rp 3-5 juta. Bisa dinegosiasi terutama jika dua pihak setuju pakai notaris yang sama."
      ),
      h("Cara Pilih Notaris Terpercaya"),
      l([
        "Cek keanggotaan di INI (Ikatan Notaris Indonesia)",
        "Minta rekomendasi dari bank/developer",
        "Baca review online",
        "Datangi kantor - pastikan legit, ada plang resmi",
        "Tanyakan estimasi biaya detail di awal",
        "Pilih yang berlokasi dekat dengan lokasi rumah",
      ]),
      h("Red Flag Notaris"),
      l([
        "Tidak punya kantor tetap",
        "Meminta pembayaran tunai tanpa kwitansi",
        "Tidak mau tunjukkan sertifikat asli notaris",
        "Menekan cepat tanda tangan tanpa penjelasan",
      ]),
      cta(),
    ],
  },
  {
    id: 18,
    slug: "rumah-developer-vs-perorangan",
    title: "Beli Rumah dari Developer vs Perorangan: Untung Rugi Lengkap",
    excerpt:
      "Developer menawarkan skema mudah tapi harga premium. Perorangan lebih murah tapi butuh lebih banyak due diligence.",
    category: "Tips",
    date: "09 Jan 2026",
    read: "6 min",
    image: IMG.rumah7,
    author: AUTHORS[0],
    tags: ["Developer", "Perorangan", "Perbandingan"],
    content: [
      p("Beli dari siapa? Ini pertanyaan yang menentukan skema pembayaran, harga, dan tingkat risikomu."),
      h("Beli dari Developer - Kelebihan"),
      l([
        "DP bisa dicicil beberapa kali",
        "KPR lebih mudah karena bank sudah kerjasama",
        "Ada fasilitas cluster & keamanan",
        "Rumah baru, garansi 1-2 tahun",
        "Legalitas biasanya sudah dilengkapi developer",
      ]),
      h("Beli dari Developer - Kekurangan"),
      l([
        "Harga premium (mark-up 20-40%)",
        "Kena PPN 11%",
        "Fasilitas kadang hanya janji brosur",
        "Rumah sering serah terima molor",
        "Kualitas material bisa mengecewakan",
      ]),
      h("Beli dari Perorangan - Kelebihan"),
      l([
        "Harga bisa 15-30% lebih murah",
        "Bebas PPN",
        "Ruang nego lebih besar",
        "Lokasi biasanya lebih strategis",
        "Bisa langsung ditempati",
      ]),
      h("Beli dari Perorangan - Kekurangan"),
      l([
        "Due diligence lebih intensif",
        "Legalitas kadang perlu diurus dari nol",
        "Kondisi rumah bervariasi",
        "DP biasanya dibayar sekaligus",
        "Butuh notaris terpercaya",
      ]),
      p(
        "Rekomendasi: Pemula dengan waktu terbatas → Developer. Pembeli yang teliti dengan budget ketat → Perorangan."
      ),
      cta(),
    ],
  },
  {
    id: 19,
    slug: "panduan-serah-terima-rumah",
    title: "Panduan Serah Terima Rumah (Handover): 15 Titik Wajib Cek",
    excerpt:
      "Serah terima adalah momen krusial. Jangan tanda tangan sebelum mengecek 15 titik ini - tuntutan setelahnya akan sulit.",
    category: "Panduan",
    date: "07 Jan 2026",
    read: "7 min",
    image: IMG.serahterima,
    author: AUTHORS[0],
    tags: ["Serah Terima", "Handover", "Checklist"],
    content: [
      p(
        "Serah terima rumah (handover) adalah momen kamu pertama kali menerima kunci. Cek dengan detail - kekurangan yang diketahui setelah ini akan sulit dituntut."
      ),
      h("Checklist 15 Titik Wajib Cek"),
      l([
        "1. Struktur bangunan - dinding, langit-langit, lantai retak?",
        "2. Atap - bocor, ada rembesan?",
        "3. Instalasi listrik - semua stop kontak berfungsi?",
        "4. Meteran listrik - kWh sesuai, tidak ada tunggakan",
        "5. Instalasi air - keran, shower, water heater lancar?",
        "6. Saluran pembuangan - tidak tersumbat, ada bau?",
        "7. Pintu & jendela - engsel, kunci, kaca utuh?",
        "8. Cat tembok - rata, tidak ada bercak",
        "9. Keramik & granit - tidak ada retak/pecah",
        "10. AC (jika ada) - dingin, remote berfungsi",
        "11. Water heater (jika ada) - panas normal",
        "12. Perkarangan - tanaman, pagar, gerbang",
        "13. Meteran PDAM - tidak ada tagihan tertunggak",
        "14. Sertifikat & IMB/PBG - terima langsung yang asli",
        "15. Buku panduan & garansi peralatan",
      ]),
      h("Bawa Peralatan Ini Saat Handover"),
      l([
        "Senter untuk cek sudut gelap",
        "Testpen untuk cek stop kontak",
        "Kamera/handphone untuk dokumentasi",
        "Air botol untuk tes kebocoran keramik",
        "Selotip warna untuk tandai kekurangan",
        "Kertas checklist",
      ]),
      p(
        "Jika ada kekurangan, catat di berita acara handover. Developer wajib memperbaiki dalam waktu yang disepakati."
      ),
      cta(),
    ],
  },
  {
    id: 20,
    slug: "tips-renovasi-rumah-second-budget-minim",
    title: "Tips Renovasi Rumah Second dengan Budget Minim: Prioritas 80/20",
    excerpt:
      "Budget renovasi terbatas? Fokus di 20% renovasi yang memberikan 80% impact - dapur, kamar mandi, cat, dan pencahayaan.",
    category: "Tips",
    date: "05 Jan 2026",
    read: "6 min",
    image: IMG.renovasi,
    author: AUTHORS[4],
    tags: ["Renovasi", "Hemat", "Interior"],
    content: [
      p(
        "Renovasi rumah second bisa jadi black hole finansial jika tidak strategi. Ikuti prinsip 80/20: 20% renovasi paling penting akan memberi 80% peningkatan kualitas hidup."
      ),
      h("Prioritas 1: Kamar Mandi (30% Budget)"),
      p(
        "Kamar mandi lama sering bocor, keramik jamuran, kloset rusak. Renovasi ini paling terasa impact-nya. Alokasikan Rp 5-15 juta."
      ),
      h("Prioritas 2: Dapur (25% Budget)"),
      p(
        "Ganti kompor, wastafel, keramik dapur. Pertimbangkan kitchen set minimalis dari Rp 8-20 juta."
      ),
      h("Prioritas 3: Cat & Dinding (20% Budget)"),
      p(
        "Cat baru berwarna netral (putih, krem, abu muda) langsung mengubah suasana. Bisa DIY, budget Rp 3-8 juta."
      ),
      h("Prioritas 4: Pencahayaan & Listrik (15% Budget)"),
      p("Ganti lampu ke LED putih, tambah stop kontak, cek instalasi listrik lama."),
      h("Prioritas 5: Kunci & Keamanan (10% Budget)"),
      p("Ganti semua kunci pintu, pertimbangkan CCTV mini di pintu depan."),
      h("Yang Bisa Ditunda"),
      l([
        "Renovasi eksterior (fokus interior dulu)",
        "Landscape halaman",
        "Kamar tidur (kecuali kondisi ekstrem)",
        "Wallpaper premium",
      ]),
      q(
        "Renovasi terbaik bukan yang paling mewah, tapi yang paling meningkatkan kualitas hidup harianmu."
      ),
      cta(),
    ],
  },
  {
    id: 21,
    slug: "cara-cek-banjir-bencana-lokasi-rumah",
    title: "Cara Cek Riwayat Banjir & Bencana di Lokasi Rumah",
    excerpt:
      "Satu banjir bisa menurunkan nilai rumah 20-30%. Ini cara profesional cek riwayat bencana sebelum kamu deal.",
    category: "Tips",
    date: "03 Jan 2026",
    read: "5 min",
    image: IMG.banjir,
    author: AUTHORS[0],
    tags: ["Banjir", "Bencana", "Cek Lokasi"],
    content: [
      p(
        "Membeli rumah di zona rawan banjir adalah salah satu penyesalan terbesar pembeli properti. Untungnya, kini kamu bisa cek risiko bencana dengan mudah."
      ),
      h("1. Cek Peta Rawan Banjir BNPB"),
      p(
        "Buka InaRISK BNPB (inarisk.bnpb.go.id). Masukkan alamat, sistem akan tunjukkan level risiko banjir, longsor, gempa, dan tsunami."
      ),
      h("2. Cek Google Maps + Tanggal Musim Hujan"),
      p(
        "Cari nama daerah + kata 'banjir' + tahun. Lihat berita 5 tahun ke belakang. Foto dan video dari media lokal biasanya jujur."
      ),
      h("3. Tanya Warga Sekitar"),
      p(
        "Datang saat sore hari, ngobrol dengan tetangga atau warung dekat rumah. Tanya: 'Pak, dulu di sini pernah banjir sampai berapa tinggi?'"
      ),
      h("4. Cek Drainase & Kontur Tanah"),
      l([
        "Apakah rumah lebih rendah dari jalan?",
        "Ada saluran air besar di sekitar?",
        "Dekat sungai/kali?",
        "Kontur tanah landai atau miring?",
      ]),
      h("5. Cek Riwayat Perbaikan Cat/Dinding"),
      p(
        "Rumah yang sering banjir biasanya ada bekas air di dinding bagian bawah - meski sudah dicat ulang, bekasnya tetap terlihat jika kamu teliti."
      ),
      q(
        "Rumah terbaik bukan yang paling cantik, tapi yang tidak mengkhawatirkanmu setiap musim hujan tiba."
      ),
      cta(),
    ],
  },
  {
    id: 22,
    slug: "ajb-ppjb-akta-kredit-bedanya",
    title: "AJB, PPJB, dan Akta Kredit: Bedanya Apa? Panduan Lengkap Pemula",
    excerpt:
      "Tiga dokumen ini sering membuat pembeli pemula bingung. Kenali fungsi masing-masing agar tidak salah tanda tangan.",
    category: "Legal",
    date: "01 Jan 2026",
    read: "5 min",
    image: IMG.legal3,
    author: AUTHORS[2],
    tags: ["AJB", "PPJB", "Legal"],
    content: [
      p(
        "Dalam proses jual beli rumah, ada 3 dokumen utama yang akan kamu temui: PPJB, AJB, dan Akta Kredit. Jangan sampai salah tanda tangan!"
      ),
      h("1. PPJB (Perjanjian Pengikatan Jual Beli)"),
      p(
        "PPJB adalah perjanjian AWAL antara pembeli dan penjual. Dibuat sebelum semua syarat terpenuhi (misal: sertifikat belum jadi, KPR belum cair). Sifatnya perjanjian, bukan bukti kepemilikan."
      ),
      p("Kapan dipakai:"),
      l([
        "Beli rumah developer yang belum jadi (indent)",
        "KPR masih proses",
        "Sertifikat masih dalam pengurusan balik nama",
      ]),
      h("2. AJB (Akta Jual Beli)"),
      p(
        "AJB adalah dokumen resmi peralihan kepemilikan. Dibuat oleh Notaris/PPAT saat semua syarat terpenuhi. Setelah AJB ditandatangani, rumah RESMI menjadi milikmu."
      ),
      p("Yang wajib ada saat AJB:"),
      l([
        "Sertifikat asli",
        "Bukti pembayaran BPHTB",
        "PBB terbaru",
        "IMB/PBG",
        "KTP & NPWP kedua pihak",
      ]),
      h("3. Akta Kredit (khusus KPR)"),
      p(
        "Akta Kredit adalah perjanjian utang antara kamu dengan bank. Berisi jumlah pinjaman, bunga, tenor, dan jaminan (rumah itu sendiri)."
      ),
      p(
        "Urutan penandatanganan biasanya: PPJB → Akad KPR (Akta Kredit) → AJB → Balik Nama Sertifikat."
      ),
      q(
        "PPJB adalah janji. AJB adalah bukti kepemilikan. Akta Kredit adalah kesepakatan utangmu."
      ),
      cta(),
    ],
  },
  {
    id: 23,
    slug: "cara-ajukan-kpr-agar-cepat-approved",
    title: "Cara Ajukan KPR ke Bank agar Cepat Approved: Rahasia Insider",
    excerpt:
      "80% aplikasi KPR ditolak karena hal-hal kecil yang bisa dihindari. Ini insider tips dari analis kredit bank.",
    category: "KPR",
    date: "30 Des 2025",
    read: "7 min",
    image: IMG.kpr1,
    author: AUTHORS[1],
    tags: ["KPR", "Approval", "Bank"],
    content: [
      p(
        "Bank tidak asal setuju - ada scoring internal yang menilai kelayakan finansialmu. Ini rahasia untuk maksimalkan peluang approved."
      ),
      h("1. Bersihkan Riwayat Kredit (SLIK OJK)"),
      p(
        "Cek SLIK OJK dulu - kalau ada tunggakan atau kolektibilitas 3+, lunasi & tunggu 6 bulan sebelum ajukan KPR."
      ),
      h("2. Stabilkan Penghasilan"),
      l([
        "Karyawan: minimal 1 tahun di perusahaan sama",
        "Wiraswasta: usaha berjalan minimal 2 tahun",
        "Freelancer: siapkan bukti transaksi 6-12 bulan",
      ]),
      h("3. Tunjukkan Konsistensi Menabung"),
      p(
        "Bank suka melihat mutasi tabungan yang konsisten - saldo mengendap minimal 3 bulan setinggi cicilan. Contoh: cicilan Rp 3 juta, siapkan saldo Rp 9 juta di rekening."
      ),
      h("4. Kurangi Cicilan Lain"),
      p("Lunasi kartu kredit, KTA, atau pinjaman online sebelum ajukan KPR."),
      h("5. Pilih Bank yang Tepat"),
      l([
        "BTN & BRI: paling mudah untuk KPR subsidi",
        "Mandiri & BCA: bunga kompetitif, syarat ketat",
        "BSI: pilihan syariah",
        "Bank swasta: fleksibel untuk profesional",
      ]),
      h("6. Ajukan ke 2-3 Bank Sekaligus"),
      p(
        "Bandingkan penawaran, pilih yang terbaik. Tapi jangan lebih dari 3 - terlalu banyak inquiry akan menurunkan credit score."
      ),
      h("7. Siapkan Dokumen Lengkap"),
      p(
        "Kelengkapan dokumen mempercepat proses 2-3x. Bank paling suka aplikasi yang tidak perlu bolak-balik follow up."
      ),
      cta(),
    ],
  },
  {
    id: 24,
    slug: "strategi-menabung-dp-rumah-2-tahun",
    title: "Strategi Menabung DP Rumah dalam 2 Tahun: Rumus 30-30-30-10",
    excerpt:
      "DP Rp 100 juta dalam 24 bulan? Bisa - jika kamu menerapkan rumus 30-30-30-10 dan konsisten. Ini panduan praktisnya.",
    category: "Keuangan",
    date: "28 Des 2025",
    read: "6 min",
    image: IMG.kpr2,
    author: AUTHORS[3],
    tags: ["Menabung", "DP", "Keuangan"],
    content: [
      p(
        "Menabung DP rumah bukan tentang keajaiban - ini tentang sistem. Rumus 30-30-30-10 telah membantu ratusan klien Huniaja punya DP dalam 2 tahun."
      ),
      h("Rumus 30-30-30-10"),
      l([
        "30% Penghasilan → Kebutuhan Pokok (makan, transport, sewa)",
        "30% Penghasilan → Tabungan DP di rekening terpisah",
        "30% Penghasilan → Cicilan & pengeluaran lain",
        "10% Penghasilan → Dana darurat & self-reward",
      ]),
      h("Simulasi untuk Gaji Rp 10 Juta"),
      l([
        "Tabungan DP: Rp 3 juta/bulan",
        "Ditambah bonus & THR: Rp 5-10 juta/tahun",
        "Total setelah 2 tahun: Rp 75-90 juta",
      ]),
      h("Percepat dengan 5 Trik Ini"),
      l([
        "1. Auto-debit tabungan setiap gajian - jangan tunggu sisa",
        "2. Simpan di reksadana pasar uang (return 4-6%/tahun vs 2% deposito)",
        "3. Jual barang yang tidak terpakai (baju, gadget lama)",
        "4. Ambil pekerjaan sampingan 1 hari/minggu",
        "5. Cut langganan yang jarang dipakai (Netflix, gym, apps premium)",
      ]),
      h("Pisahkan Rekening DP dari Rekening Utama"),
      p(
        "Rekening DP wajib SEPARATE dan tanpa kartu ATM. Semakin susah diakses, semakin aman dari 'godaan'."
      ),
      q(
        "Menabung DP bukan tentang berapa yang kamu tabung. Ini tentang seberapa disiplin kamu tidak menyentuhnya."
      ),
      cta(),
    ],
  },
  {
    id: 25,
    slug: "rumah-cluster-vs-perumahan-terbuka",
    title: "Rumah Cluster vs Perumahan Terbuka: Mana yang Lebih Baik?",
    excerpt:
      "Cluster menawarkan keamanan & fasilitas, perumahan terbuka lebih bebas & murah. Bandingkan untuk pilih yang cocok denganmu.",
    category: "Tips",
    date: "26 Des 2025",
    read: "5 min",
    image: IMG.cluster,
    author: AUTHORS[0],
    tags: ["Cluster", "Perumahan", "Perbandingan"],
    content: [
      p(
        "Rumah cluster jadi tren, tapi apakah selalu lebih baik dari perumahan terbuka? Yuk bandingkan objektif."
      ),
      h("Rumah Cluster - Kelebihan"),
      l([
        "Keamanan 24 jam + one gate system",
        "Fasilitas lengkap (kolam, taman, jogging track)",
        "Lingkungan lebih rapi & terawat",
        "Komunitas homogen (kelas ekonomi mirip)",
        "Bebas kendaraan besar & PKL",
      ]),
      h("Rumah Cluster - Kekurangan"),
      l([
        "Harga premium 20-40%",
        "IPL (Iuran Pengelolaan Lingkungan) Rp 300 ribu - 1 juta/bulan",
        "Peraturan ketat (renovasi, warna cat, hewan peliharaan)",
        "Akses tamu ribet",
        "Kadang jauh dari fasilitas umum",
      ]),
      h("Perumahan Terbuka - Kelebihan"),
      l([
        "Harga lebih terjangkau",
        "Tanpa IPL bulanan",
        "Kebebasan renovasi & lifestyle",
        "Akses lebih mudah",
        "Interaksi sosial lebih variatif",
      ]),
      h("Perumahan Terbuka - Kekurangan"),
      l([
        "Keamanan bergantung inisiatif RT/RW",
        "Lingkungan tidak selalu terawat",
        "Traffic lebih ramai",
        "Kadang campur dengan komersial (bengkel, warung)",
      ]),
      h("Rekomendasi"),
      l([
        "Keluarga muda dengan anak kecil → Cluster (keamanan #1)",
        "Solo profesional → Cluster kecil atau apartemen",
        "Ingin bebas biaya bulanan → Perumahan terbuka",
        "Nilai kebersamaan tetangga → Perumahan terbuka",
      ]),
      cta(),
    ],
  },
  {
    id: 26,
    slug: "investasi-properti-untuk-pemula",
    title: "Investasi Properti untuk Pemula: Mulai dari Mana? (Modal Rp 100 Juta)",
    excerpt:
      "Investasi properti dulu tidak lagi eksklusif untuk orang kaya. Dengan Rp 100 juta pun kamu bisa mulai - ini rutenya.",
    category: "Investasi",
    date: "24 Des 2025",
    read: "8 min",
    image: IMG.investasi,
    author: AUTHORS[3],
    tags: ["Investasi", "Pemula", "Properti"],
    content: [
      p(
        "Investasi properti punya reputasi 'hanya untuk orang kaya'. Faktanya, kini banyak strategi entry-level yang bisa kamu mulai dengan Rp 100-200 juta."
      ),
      h("Opsi 1: Rumah Subsidi untuk Disewakan"),
      p(
        "Beli rumah subsidi Rp 168 juta, DP 1% (Rp 1,68 juta), cicilan ~Rp 1,1 juta/bulan. Sewakan ke keluarga muda Rp 1,5-2 juta/bulan. Profit ~Rp 400-900 ribu/bulan + apresiasi properti."
      ),
      h("Opsi 2: Kost / Rumah Kontrakan"),
      p(
        "Beli rumah lama di dekat kampus/kantor, renovasi jadi 4-6 kamar kost. Investasi Rp 300-500 juta. Return sewa 8-12%/tahun."
      ),
      h("Opsi 3: Tanah di Kawasan Berkembang"),
      p(
        "Beli tanah Rp 50-100 juta di daerah yang akan dikembangkan (dekat rencana tol, MRT, dll). Tunggu 3-5 tahun, jual dengan margin 2-3x."
      ),
      h("Opsi 4: Property Crowdfunding"),
      p(
        "Platform seperti properti fintech memungkinkan kamu investasi properti mulai dari Rp 5-10 juta. Return 8-12%/tahun, tapi likuiditas terbatas."
      ),
      h("Opsi 5: REIT (Real Estate Investment Trust)"),
      p("Investasi properti melalui saham di BEI. Modal minim, likuid, tapi return lebih rendah (6-9%)."),
      h("Aturan Emas Investasi Properti"),
      l([
        "1. Lokasi > Bangunan > Ukuran",
        "2. Diversifikasi setelah punya 2-3 properti",
        "3. Selalu simpan cash reserve 6 bulan sewa",
        "4. Riset RTRW pemerintah lokal",
        "5. Sabar - properti adalah long game",
      ]),
      q("Rumah pertama untuk ditinggali. Rumah kedua untuk investasi."),
      cta(),
    ],
  },
  {
    id: 27,
    slug: "waspada-penipuan-jual-beli-properti",
    title: "10 Modus Penipuan Jual Beli Properti yang Wajib Kamu Tahu",
    excerpt:
      "Dari sertifikat palsu, agen abal-abal, hingga listing bodong. Kenali 10 modus penipuan properti agar kamu tetap aman.",
    category: "Keamanan",
    date: "22 Des 2025",
    read: "7 min",
    image: IMG.penipuan,
    author: AUTHORS[2],
    tags: ["Penipuan", "Keamanan", "Waspada"],
    content: [
      p(
        "Nilai properti yang besar membuatnya jadi target favorit penipu. Kenali 10 modus paling sering agar kamu tidak jadi korban."
      ),
      h("Modus 1: Sertifikat Palsu"),
      p("Selalu verifikasi ke BPN. Jangan pernah transfer DP tanpa cek fisik sertifikat asli."),
      h("Modus 2: Rumah Sudah Dijual ke 2 Pembeli"),
      p("Cek status blokir di BPN. Bayar DP hanya melalui notaris."),
      h("Modus 3: Agen Abal-abal"),
      p("Verifikasi agen di REI (Real Estate Indonesia) atau AREBI."),
      h("Modus 4: Listing Bodong di Marketplace"),
      p(
        "Ciri: harga terlalu murah, foto pinjam dari luar negeri, kontak hanya WA, minta DP transfer tanpa lihat rumah."
      ),
      h("Modus 5: Notaris Palsu"),
      p("Cek keanggotaan di INI (Ikatan Notaris Indonesia). Datangi kantor - harus ada plang resmi."),
      h("Modus 6: PPJB Tanpa AJB"),
      p("Penjual maunya cuma PPJB, tidak lanjut ke AJB. Ini penipuan - PPJB bukan bukti kepemilikan."),
      h("Modus 7: Rumah Dijaminkan di Bank"),
      p("Selalu cek status jaminan sertifikat di BPN sebelum transfer."),
      h("Modus 8: Tanah Waris Belum Diselesaikan"),
      p(
        "Jika penjual tanah warisan, minta surat waris & persetujuan SEMUA ahli waris - satu tidak setuju, jual beli batal."
      ),
      h("Modus 9: Pura-pura Developer"),
      p(
        "Developer palsu buka pameran, ambil DP, lalu hilang. Cek PT di AHU (Administrasi Hukum Umum) & lisensi REI."
      ),
      h("Modus 10: Asuransi & KPR Palsu"),
      p("Selalu urus KPR langsung ke bank, bukan lewat 'perantara' yang minta biaya di depan."),
      q(
        "Jika penawaran terlalu bagus untuk jadi kenyataan, biasanya memang tidak nyata. Selalu skeptis, selalu verifikasi."
      ),
      cta(),
    ],
  },
  {
    id: 28,
    slug: "feng-shui-rumah-fakta-atau-mitos",
    title: "Feng Shui Rumah: Fakta atau Mitos? Perspektif Modern",
    excerpt:
      "Banyak pembeli percaya feng shui, banyak juga yang skeptis. Yuk bahas ilmiah - mana yang benar dan mana yang mitos.",
    category: "Tips",
    date: "20 Des 2025",
    read: "5 min",
    image: IMG.feng,
    author: AUTHORS[4],
    tags: ["Feng Shui", "Hoki", "Kepercayaan"],
    content: [
      p(
        "Feng shui adalah filosofi Tiongkok kuno tentang harmonisasi ruang dengan energi. Kini banyak yang percaya, banyak juga yang skeptis. Yuk lihat objektif."
      ),
      h("Yang Punya Dasar Ilmiah"),
      l([
        "Pintu depan tidak langsung menghadap pintu belakang - benar, sirkulasi udara lebih baik",
        "Kamar tidur tidak menghadap kamar mandi - benar, higienis & psikologis nyaman",
        "Cahaya matahari masuk cukup - benar, kesehatan mental & fisik",
        "Tidak ada tembok di depan pintu utama - benar, akses & psikologi",
      ]),
      h("Yang Lebih ke Preferensi Estetika"),
      l([
        "Warna cat menurut arah",
        "Posisi tanaman & air",
        "Bentuk pintu bulat/kotak",
      ]),
      h("Yang Murni Kepercayaan"),
      l([
        "Rumah hook lebih hoki",
        "Rumah tusuk sate bikin sial",
        "Nomor rumah tertentu membawa keberuntungan",
      ]),
      p(
        "Fakta market: rumah dengan feng shui 'baik' cenderung lebih laris di kalangan pembeli tertentu, meningkatkan nilai jual 5-10%. Jadi meski kamu tidak percaya, mempertimbangkannya bisa menguntungkan untuk resale."
      ),
      q(
        "Feng shui yang paling penting: rumah yang bikin kamu nyaman, aman, dan bahagia setiap kali pulang."
      ),
      cta(),
    ],
  },
  {
    id: 29,
    slug: "kpr-ditolak-penyebab-solusi",
    title: "KPR Ditolak Bank? Ini 8 Penyebab Umum dan Solusinya",
    excerpt:
      "Aplikasi KPR ditolak bukan akhir dunia. Kenali penyebabnya, perbaiki, dan ajukan ulang dengan strategi yang tepat.",
    category: "KPR",
    date: "18 Des 2025",
    read: "6 min",
    image: IMG.kpr3,
    author: AUTHORS[1],
    tags: ["KPR", "Ditolak", "Solusi"],
    content: [
      p(
        "KPR ditolak adalah salah satu penyesalan terbesar calon pembeli. Sebelum kecewa, pahami penyebabnya - hampir semua bisa diperbaiki."
      ),
      h("Penyebab 1: BI Checking / SLIK Buruk"),
      p("Solusi: Lunasi semua tunggakan, tunggu 3-6 bulan agar status update."),
      h("Penyebab 2: DSR di Atas 40%"),
      p("Solusi: Lunasi cicilan lain, atau ajukan dengan pasangan (joint income)."),
      h("Penyebab 3: Penghasilan Tidak Stabil"),
      p("Solusi: Untuk freelancer, siapkan rekening koran 12 bulan + bukti pajak tahunan."),
      h("Penyebab 4: Masa Kerja Kurang"),
      p("Solusi: Tunggu hingga minimal 1 tahun di perusahaan sama."),
      h("Penyebab 5: Umur Terlalu Muda / Tua"),
      p(
        "Solusi: Minimal 21 tahun. Untuk usia >45, gunakan tenor pendek atau ajukan dengan anak sebagai co-debtor."
      ),
      h("Penyebab 6: Nilai Appraisal Lebih Rendah"),
      p("Solusi: Nego penjual turunkan harga, atau tambah DP untuk cover selisih."),
      h("Penyebab 7: Sertifikat Rumah Bermasalah"),
      p("Solusi: Minta penjual selesaikan legalitas dulu. Kalau tidak bisa, batal."),
      h("Penyebab 8: Riwayat Pinjol Online"),
      p("Solusi: Lunasi semua pinjol, hindari 6-12 bulan sebelum ajukan KPR."),
      p(
        "Setelah perbaikan, kamu bisa ajukan ulang. Tapi jangan terburu-buru - beri jeda minimal 3 bulan agar SLIK-mu 'refresh'."
      ),
      cta(),
    ],
  },
  {
    id: 30,
    slug: "panduan-beli-apartemen-untuk-pemula",
    title: "Panduan Beli Apartemen untuk Pemula: Cocok atau Tidak untukmu?",
    excerpt:
      "Apartemen lebih murah dari rumah tapak dan strategis. Tapi cocokkah untukmu? Ini panduan lengkap plus checklist wajib.",
    category: "Panduan",
    date: "16 Des 2025",
    read: "7 min",
    image: IMG.apartemen1,
    author: AUTHORS[0],
    tags: ["Apartemen", "Pemula", "Panduan"],
    content: [
      p(
        "Apartemen jadi favorit generasi muda karena lokasi strategis dan harga per unit lebih terjangkau dari rumah tapak. Tapi ada banyak hal yang perlu kamu ketahui."
      ),
      h("Apartemen Cocok Untukmu Jika..."),
      l([
        "Kamu single atau pasangan tanpa anak",
        "Sering bepergian & butuh keamanan tinggi",
        "Kerja di CBD dan tidak mau macet",
        "Punya budget Rp 300-800 juta",
        "Menyukai lifestyle modern & fasilitas lengkap",
      ]),
      h("Apartemen KURANG Cocok Jika..."),
      l([
        "Kamu punya keluarga besar (>4 orang)",
        "Suka berkebun & ruang outdoor",
        "Punya banyak barang / hobby ruang",
        "Anggaran maintenance ketat (IPL bisa Rp 1-3 juta/bulan)",
        "Ingin punya tanah sendiri untuk warisan",
      ]),
      h("Beda Sertifikat Apartemen"),
      l([
        "SHM Sarusun - hak milik terkuat (WNI only)",
        "SHGB Sarusun - masa 30 tahun (WNA bisa)",
        "HGB Bersama - kepemilikan bersama seluruh unit",
      ]),
      h("Checklist Sebelum Beli Apartemen"),
      l([
        "Cek reputasi developer (proyek lama on-time?)",
        "PBG & IMB apartemen valid",
        "Fasilitas yang dijanjikan sudah ada",
        "IPL bulanan & apa yang dicover",
        "Aturan bawa hewan, renovasi, sewa harian",
        "Rasio parkir - 1 unit dapat berapa slot?",
        "Struktur & maintenance record gedung",
      ]),
      h("Investasi Apartemen"),
      p(
        "Return sewa apartemen di lokasi strategis 5-9%/tahun. Lebih baik dari deposito, tapi lebih rendah dari kost."
      ),
      q(
        "Apartemen bukan sekadar rumah kecil di lantai atas - ini adalah gaya hidup. Pilih yang cocok dengan kepribadianmu."
      ),
      cta(),
    ],
  },

  // ========== BATCH 2: 30 artikel tambahan (id 31–60) ==========
  // Panduan (+5), KPR (+1), Legal (+1), Tips (+1),
  // Investasi (+5), Keuangan (+5), Subsidi (+6), Keamanan (+6)

  // ---------- Panduan ----------
  {
    id: 31,
    slug: "panduan-beli-rumah-second-aman-2026",
    title: "Panduan Beli Rumah Second yang Aman: 8 Langkah Anti Rugi",
    excerpt:
      "Rumah second sering lebih murah, tapi risikonya juga besar. Ikuti 8 langkah ini supaya kamu dapat rumah berkualitas tanpa jebakan.",
    category: "Panduan",
    date: "15 Feb 2026",
    read: "7 min",
    image: IMG.rumah3,
    author: AUTHORS[0],
    tags: ["Rumah Second", "Panduan", "Anti Rugi"],
    content: [
      p("Rumah second menawarkan harga lebih terjangkau, lokasi yang sudah matang, dan bisa ditempati langsung. Tapi tanpa pengecekan tepat, kamu bisa dapat rumah bermasalah."),
      h("1. Verifikasi Legalitas Sertifikat"),
      p("Pastikan sertifikat SHM atas nama penjual, bukan atas nama pihak sebelumnya. Cek keaslian di BPN atau via aplikasi Sentuh Tanahku."),
      h("2. Cek Fisik Rumah Secara Menyeluruh"),
      l(["Retakan struktural pada dinding & lantai", "Kebocoran atap saat hujan", "Kualitas instalasi listrik & air", "Ventilasi & pencahayaan tiap ruangan"]),
      h("3. Riset Lingkungan Sekitar"),
      p("Datang di jam berbeda (pagi, sore, malam) untuk cek kebisingan, banjir, dan aktivitas warga. Tanyakan tetangga soal riwayat rumah dan area."),
      h("4. Cek Tunggakan PBB, Listrik & Air"),
      p("Minta bukti pembayaran 12 bulan terakhir. Tunggakan bisa jadi beban kamu setelah balik nama."),
      h("5. Nego Harga dengan Data"),
      p("Cek harga pasar sekitar via situs listing. Sampaikan alasan konkret untuk nego: perlu renovasi, dinding retak, atap bocor."),
      h("6. Gunakan PPAT Terpercaya"),
      p("Jangan pakai notaris yang direkomendasikan penjual tanpa cek reputasi. Cari PPAT terdaftar di daerah lokasi rumah."),
      h("7. Bayar Bertahap"),
      p("Jangan bayar lunas sebelum sertifikat balik nama selesai. Skema aman: DP 30% saat PPJB, 40% saat AJB, 30% saat sertifikat sudah atas nama kamu."),
      h("8. Renovasi Bertahap"),
      p("Prioritaskan atap, listrik, dan sanitasi dulu. Estetika (cat, keramik) bisa menyusul."),
      cta(),
    ],
  },
  {
    id: 32,
    slug: "panduan-take-over-kpr-lengkap",
    title: "Panduan Lengkap Take Over KPR: Untung, Risiko & Cara Prosesnya",
    excerpt:
      "Take over KPR bisa hemat puluhan juta bunga. Tapi banyak yang salah kaprah. Ini panduan step-by-step yang benar.",
    category: "Panduan",
    date: "16 Feb 2026",
    read: "6 min",
    image: IMG.kpr1,
    author: AUTHORS[1],
    tags: ["Take Over", "KPR", "Refinance"],
    content: [
      p("Take Over KPR adalah proses memindahkan KPR yang sedang berjalan dari bank A ke bank B, biasanya untuk mendapat bunga lebih rendah."),
      h("Kapan Take Over Menguntungkan?"),
      l(["Selisih bunga bank baru ≥ 2% dibanding bank lama", "Sisa tenor masih di atas 5 tahun", "Nilai properti sudah naik signifikan", "Kamu punya BI Checking bersih"]),
      h("Dokumen yang Disiapkan"),
      p("KTP, KK, NPWP, slip gaji 3 bulan, rekening koran 3 bulan, sertifikat rumah, buku KPR aktif, dan surat keterangan sisa hutang dari bank lama."),
      h("Proses Lengkap (14–30 hari kerja)"),
      l(["Ajukan KPR baru ke bank tujuan", "Bank baru appraisal ulang properti", "Bank baru terbitkan SP3K", "Pelunasan ke bank lama via bank baru", "Balik nama sertifikat ke jaminan bank baru", "AJB & akad kredit baru di notaris"]),
      h("Biaya yang Harus Disiapkan"),
      p("Provisi bank baru (1%), biaya appraisal, biaya notaris, dan potensi penalti pelunasan dini dari bank lama (biasanya 1-2% sisa pokok). Total sekitar 3-5% dari plafon KPR."),
      q("Take over yang cerdas bisa hemat hingga Rp 100 juta bunga sepanjang tenor. Yang tergesa bisa rugi karena penalti."),
      cta(),
    ],
  },
  {
    id: 33,
    slug: "panduan-pindah-rumah-efisien",
    title: "Panduan Pindah Rumah dengan Efisien & Hemat Biaya",
    excerpt:
      "Pindah rumah bisa bikin stres kalau tidak terencana. Ikuti checklist ini supaya proses pindah lancar tanpa kehilangan barang atau boros biaya.",
    category: "Panduan",
    date: "17 Feb 2026",
    read: "5 min",
    image: IMG.key,
    author: AUTHORS[4],
    tags: ["Pindah Rumah", "Tips", "Panduan"],
    content: [
      p("Pindah rumah adalah salah satu proses paling melelahkan setelah beli rumah. Dengan perencanaan tepat, kamu bisa hemat waktu, uang, dan tenaga."),
      h("4 Minggu Sebelum Pindah"),
      l(["Buat inventory semua barang", "Sortir: bawa, jual, donasi, buang", "Pesan jasa pindahan (bandingkan 3 vendor)", "Urus dokumen: BPJS, alamat KTP, sekolah anak"]),
      h("2 Minggu Sebelum Pindah"),
      l(["Beli kardus, bubble wrap, lakban", "Kemas barang jarang dipakai duluan", "Foto elektronik untuk asuransi", "Konfirmasi jadwal jasa pindahan"]),
      h("Hari-H Pindah"),
      p("Bangun pagi, siapkan tas berisi kebutuhan penting: dokumen, obat, pakaian ganti, charger HP, snack. Sisihkan uang tunai untuk tip kuli & jajan."),
      h("Setelah Pindah"),
      l(["Cek semua barang sesuai inventory", "Bersihkan rumah baru dulu sebelum atur furniture", "Aktifkan listrik, air, internet atas nama baru", "Kenalan dengan tetangga baru"]),
      h("Estimasi Biaya Pindahan"),
      p("Jasa pindahan Jabodetabek: Rp 800rb-3jt tergantung jarak & volume. Kalau DIY sewa mobil pickup: Rp 400-800rb + tenaga. Selalu asuransikan barang berharga."),
      cta(),
    ],
  },
  {
    id: 34,
    slug: "panduan-beli-rumah-untuk-milenial",
    title: "Panduan Beli Rumah untuk Milenial: Realistis di Tengah Harga Naik",
    excerpt:
      "Punya gaji Rp 8-15 juta dan pengen punya rumah? Milenial harus main strategi. Panduan ini khusus untuk generasi kamu.",
    category: "Panduan",
    date: "18 Feb 2026",
    read: "7 min",
    image: IMG.rumah7,
    author: AUTHORS[3],
    tags: ["Milenial", "Rumah Pertama", "Strategi"],
    content: [
      p("Harga rumah naik 8-12% per tahun, sementara kenaikan gaji milenial hanya 5-7%. Tanpa strategi yang tepat, mimpi punya rumah bisa hanya jadi angan."),
      h("Realita Milenial di 2026"),
      p("Rata-rata harga rumah tapak Jabodetabek: Rp 800 juta - 1,5 miliar. Cicilan 20 tahun dengan DP 20%: Rp 6-11 juta per bulan. Butuh gaji minimum Rp 20-35 juta."),
      h("Strategi 1: Mulai dari Lokasi Emerging"),
      p("Cimahi, Karawang, Purwakarta, Cikarang, Serang — kota-kota ini masih terjangkau (Rp 300-500 juta) dengan akses tol ke Jakarta yang makin baik."),
      h("Strategi 2: Beli Berdua (Co-Ownership)"),
      p("Beli rumah bareng pasangan atau saudara. Gaji digabung, DP dibagi, cicilan lebih ringan. Pastikan kesepakatan hitam-putih via notaris."),
      h("Strategi 3: KPR Subsidi FLPP"),
      p("Kalau gaji di bawah Rp 8 juta, kamu berhak KPR subsidi: DP 1%, bunga tetap 5% seumur tenor, cicilan Rp 1-2 juta/bulan."),
      h("Strategi 4: Apartemen Studio Dulu"),
      p("Apartemen studio Rp 300-500 juta bisa jadi stepping stone. Ditinggali 3-5 tahun, disewakan, lalu dijual untuk upgrade ke rumah tapak."),
      h("Strategi 5: Tunda Gaya Hidup, Prioritaskan Aset"),
      p("Skip liburan mewah, gadget flagship, dan langganan berlebih. Alokasikan minimal 25% gaji ke tabungan DP di reksadana pasar uang."),
      q("Milenial tidak harus punya rumah di usia 25. Yang penting: punya rencana yang realistis dan konsisten dijalankan."),
      cta(),
    ],
  },
  {
    id: 35,
    slug: "rumah-tapak-vs-cluster-vs-apartemen",
    title: "Rumah Tapak vs Cluster vs Apartemen: Mana yang Cocok Untukmu?",
    excerpt:
      "Tiga tipe hunian, tiga gaya hidup berbeda. Kenali kelebihan-kekurangan tiap tipe supaya tidak salah pilih.",
    category: "Panduan",
    date: "19 Feb 2026",
    read: "6 min",
    image: IMG.cluster,
    author: AUTHORS[0],
    tags: ["Rumah Tapak", "Cluster", "Apartemen"],
    content: [
      p("Sebelum beli, kenali dulu 3 tipe hunian utama di Indonesia beserta plus-minusnya."),
      h("Rumah Tapak (Landed House)"),
      p("Rumah individu berdiri sendiri di atas tanah SHM. Bebas renovasi, punya halaman, privasi maksimal."),
      l(["+ Bebas renovasi & ekspansi", "+ SHM (aset paling kuat)", "+ Cocok untuk keluarga besar", "- Butuh perawatan sendiri (atap, taman)", "- Keamanan tergantung diri sendiri"]),
      h("Rumah Cluster"),
      p("Rumah tapak dalam kompleks tertutup dengan satu pintu masuk & security 24 jam. Terbaik untuk keluarga muda modern."),
      l(["+ Keamanan terjaga (one-gate system)", "+ Fasilitas bersama (playground, kolam)", "+ Komunitas homogen", "- IPL bulanan (Rp 200rb-1jt)", "- Aturan renovasi lebih ketat"]),
      h("Apartemen"),
      p("Hunian vertikal dengan HGB di atas HPL. Cocok untuk pekerja produktif yang mengutamakan lokasi strategis."),
      l(["+ Lokasi umumnya CBD/strategis", "+ Fasilitas premium (gym, kolam, lobby)", "+ Perawatan gedung dikelola PT", "- Bukan SHM (HGB terbatas)", "- Service charge bulanan tinggi (Rp 15-25rb/m²/bulan)", "- Tidak bisa renovasi struktural"]),
      h("Cocok Untuk Siapa?"),
      l(["Keluarga besar / anak >2: Rumah tapak", "Pasangan muda: Cluster", "Single/DINK di CBD: Apartemen"]),
      q("Tidak ada tipe yang 'paling baik'. Yang ada adalah yang paling cocok untuk gaya hidupmu sekarang dan 5 tahun ke depan."),
      cta(),
    ],
  },

  // ---------- KPR ----------
  {
    id: 36,
    slug: "kpr-untuk-freelancer-dan-wirausaha",
    title: "KPR untuk Freelancer & Wirausaha: Bisa, Ini Caranya",
    excerpt:
      "Tidak punya slip gaji tetap? Tenang, bank tetap bisa terima kamu. Ini strategi lengkap KPR untuk pekerja lepas.",
    category: "KPR",
    date: "20 Feb 2026",
    read: "6 min",
    image: IMG.kpr2,
    author: AUTHORS[1],
    tags: ["KPR", "Freelancer", "Wirausaha"],
    content: [
      p("Freelancer, YouTuber, konsultan, pengusaha UMKM — semua bisa dapat KPR. Yang berbeda hanya dokumen buktinya."),
      h("Dokumen Pengganti Slip Gaji"),
      l(["Mutasi rekening 6-12 bulan (bukti transaksi masuk konsisten)", "Laporan pajak SPT Tahunan minimal 2 tahun", "Surat keterangan usaha dari kelurahan (untuk UMKM)", "Kontrak kerja/klien terbaru", "Portofolio & bukti pembayaran"]),
      h("Bank yang Ramah Freelancer"),
      p("Bank Mandiri, BCA, BSI, dan CIMB Niaga cukup akomodatif. BSI khususnya menerima profil kreatif & pengusaha muda dengan analisis DSR (Debt Service Ratio) yang fleksibel."),
      h("Tips Meningkatkan Approval"),
      l(["Konsolidasikan pendapatan ke satu rekening tetap", "Bayar semua tagihan tepat waktu (BI Checking bersih)", "Ajukan bareng pasangan/orang tua sebagai co-borrower", "Siapkan DP lebih besar (25-30%) untuk mengurangi risiko bank", "Tunjukkan tabungan/investasi sebagai bukti kestabilan"]),
      h("Yang Harus Dihindari"),
      p("Jangan pinjam pinjol atau tarik dana kartu kredit maksimal sebelum ajukan KPR — semua tercatat di BI Checking dan bikin DSR-mu jelek."),
      q("Bank tidak menolak freelancer. Mereka menolak profil yang tidak jelas. Buat profilmu jelas dan konsisten, mereka akan buka pintu."),
      cta(),
    ],
  },

  // ---------- Legal ----------
  {
    id: 37,
    slug: "cara-balik-nama-sertifikat-rumah",
    title: "Cara Balik Nama Sertifikat Rumah: Prosedur, Biaya & Estimasi Waktu",
    excerpt:
      "Setelah AJB, sertifikat harus balik nama ke pemilik baru. Prosesnya rumit tapi wajib. Ini panduan step-by-step di BPN.",
    category: "Legal",
    date: "21 Feb 2026",
    read: "6 min",
    image: IMG.legal2,
    author: AUTHORS[2],
    tags: ["Legal", "Balik Nama", "Sertifikat"],
    content: [
      p("Balik nama sertifikat adalah proses mengubah nama pemilik pada sertifikat tanah di BPN dari penjual ke pembeli. Wajib dilakukan setelah AJB."),
      h("Dokumen yang Disiapkan"),
      l(["AJB asli & fotokopi", "Sertifikat tanah asli", "KTP & KK pembeli dan penjual", "NPWP kedua pihak", "SPPT PBB tahun berjalan", "Bukti bayar BPHTB & PPh Final", "Surat pengantar dari kelurahan"]),
      h("Prosedur di BPN"),
      l(["Datang ke Kantah BPN sesuai lokasi properti", "Ambil formulir & isi lengkap", "Serahkan berkas + bayar biaya", "Terima tanda terima berkas", "Proses verifikasi 5-14 hari kerja", "Ambil sertifikat baru atas nama pembeli"]),
      h("Rincian Biaya"),
      p("Biaya BPN sekitar 1‰ nilai transaksi (min. Rp 50rb, max. Rp 2 juta). BPHTB pembeli 5% dari NJOP dikurangi NJOP-TKP. PPh Final penjual 2,5%. Jasa PPAT/notaris 0,5-1%."),
      h("Alternatif: Gunakan Jasa Notaris"),
      p("Jika tidak sempat, gunakan jasa PPAT yang sudah handle AJB — mereka biasanya paket lengkap sampai balik nama, biaya sekitar Rp 2-5 juta."),
      h("Estimasi Waktu Total"),
      p("Rata-rata 30-45 hari kerja dari AJB sampai sertifikat baru diterima. Bisa lebih lama kalau ada revisi berkas."),
      q("Jangan tinggalkan proses balik nama. Rumah tanpa sertifikat atas namamu = tidak sepenuhnya milikmu."),
      cta(),
    ],
  },

  // ---------- Tips ----------
  {
    id: 38,
    slug: "tips-nego-harga-rumah-sampai-turun-10-persen",
    title: "Tips Nego Harga Rumah Second Sampai Turun 10%",
    excerpt:
      "Penjual selalu buka harga di atas target. Dengan 7 taktik nego cerdas ini, kamu bisa hemat puluhan juta.",
    category: "Tips",
    date: "22 Feb 2026",
    read: "5 min",
    image: IMG.rumah5,
    author: AUTHORS[4],
    tags: ["Tips", "Nego", "Rumah Second"],
    content: [
      p("Rata-rata rumah second bisa turun 5-15% dari harga listing kalau kamu tahu cara neganya. Berikut 7 taktik yang terbukti efektif."),
      h("1. Riset Harga Pasar Sekitar"),
      p("Cek 5-10 listing serupa di radius 1 km. Ambil rata-rata sebagai patokan penawaran awal kamu."),
      h("2. Identifikasi Kekurangan Rumah"),
      p("Dinding retak, atap bocor, keramik retak, cat mengelupas — sebutkan spesifik saat nego. Setiap kekurangan = alasan turun harga."),
      h("3. Cek Berapa Lama Rumah Dijual"),
      p("Rumah yang sudah listing >6 bulan biasanya penjualnya capek dan siap kompromi. Rumah baru masuk pasar lebih kaku."),
      h("4. Pahami Motivasi Penjual"),
      p("Penjual butuh cepat (mau pindah tugas, cerai, hutang)? Tawar rendah dengan syarat closing cepat. Penjual santai? Tawar wajar."),
      h("5. Tawaran Pertama: 15% di Bawah Listing"),
      p("Jangan langsung tawar mendekati harga listing. Mulai 15% di bawah, siapkan buffer 5% untuk mencapai target 10%."),
      h("6. Bawa Bukti Cash / SP3K"),
      p("Penjual lebih senang closing cepat. Kalau kamu sudah punya SP3K atau cash siap, gunakan itu sebagai leverage nego."),
      h("7. Siap Walk Away"),
      p("Nego terbaik adalah nego yang kamu siap tinggalkan. Kalau penjual tahu kamu ngebet, mereka tidak akan turun harga."),
      q("Nego rumah bukan soal jago ngomong. Soal riset yang matang dan kesabaran yang lebih lama dari penjual."),
      cta(),
    ],
  },

  // ---------- Investasi ----------
  {
    id: 39,
    slug: "investasi-rumah-kost-modal-200-juta",
    title: "Investasi Rumah Kost Modal Rp 200 Juta: Hitungan Realistis",
    excerpt:
      "Rumah kost salah satu investasi properti paling stabil. Ini simulasi realistis: modal, ROI, dan risiko yang harus kamu tahu.",
    category: "Investasi",
    date: "23 Feb 2026",
    read: "7 min",
    image: IMG.investasi,
    author: AUTHORS[3],
    tags: ["Investasi", "Kost", "ROI"],
    content: [
      p("Rumah kost menawarkan cashflow bulanan yang konsisten, apresiasi properti, dan risiko lebih rendah dibanding saham. Tapi butuh strategi tepat."),
      h("Simulasi Modal Rp 200 Juta"),
      p("Opsi 1: Beli tanah + bangun kost sendiri. Tanah 60m² di area kampus/kantor Rp 100-150 juta, bangun 6 kamar sederhana Rp 80-100 juta."),
      p("Opsi 2: Beli rumah second yang bisa dikonversi. Cari rumah tapak 3-4 kamar tidur di area kampus dengan harga Rp 250-400 juta (KPR 20%)."),
      h("Perhitungan ROI"),
      l(["6 kamar × Rp 800rb/bulan = Rp 4,8 juta/bulan", "Setahun: Rp 57,6 juta", "Biaya operasional (listrik air kebersihan): Rp 10 juta/tahun", "Net income: Rp 47,6 juta/tahun", "ROI: 23,8% (modal Rp 200 juta)"]),
      h("Lokasi Terbaik"),
      p("Radius 500m dari kampus besar (UI, ITB, UGM, ITS, Undip, Unpad, USU), rumah sakit besar, atau kawasan industri. Occupancy rate biasanya di atas 85%."),
      h("Risiko yang Harus Diketahui"),
      l(["Vacancy saat libur semester (2-3 bulan/tahun)", "Kerusakan properti oleh anak kost", "Biaya renovasi berkala (5 tahun sekali)", "Pajak PPh dari sewa (10%)"]),
      h("Tips Sukses Kost"),
      l(["Fasilitas standar: WiFi, dapur, mesin cuci, area jemur", "Kontrak minimum 6 bulan (kurangi turnover)", "Cek KTP & data penyewa (screening)", "Pasang CCTV & security minimal 12 jam"]),
      q("Kost bukan bisnis pasif 100%. Perlu perhatian minimal, tapi ROI-nya bisa 2-3x deposito."),
      cta(),
    ],
  },
  {
    id: 40,
    slug: "investasi-tanah-vs-rumah",
    title: "Investasi Tanah vs Rumah: Mana Lebih Menguntungkan?",
    excerpt:
      "Tanah kosong murah tapi tidak menghasilkan. Rumah menghasilkan tapi ada biaya perawatan. Ini analisis komprehensifnya.",
    category: "Investasi",
    date: "24 Feb 2026",
    read: "6 min",
    image: IMG.rumah8,
    author: AUTHORS[3],
    tags: ["Investasi", "Tanah", "Properti"],
    content: [
      p("Investasi tanah dan rumah punya karakteristik berbeda. Pilihan tepat tergantung profil risiko, likuiditas, dan tujuan investasimu."),
      h("Investasi Tanah"),
      l(["+ Modal awal lebih kecil", "+ Tidak ada biaya perawatan", "+ Apresiasi bisa 10-20%/tahun di area berkembang", "- Tidak ada cashflow bulanan", "- Likuiditas rendah (susah dijual cepat)", "- Risiko sertifikat sengketa lebih tinggi"]),
      h("Investasi Rumah"),
      l(["+ Ada cashflow sewa (5-8% dari nilai/tahun)", "+ Apresiasi + rental yield = total return lebih tinggi", "+ Likuiditas lebih baik (peminat lebih banyak)", "- Butuh perawatan berkala", "- Ada biaya awal lebih tinggi", "- Risiko penyewa bermasalah"]),
      h("Simulasi 10 Tahun (Modal Rp 500 Juta)"),
      p("Tanah: nilai jadi Rp 1,5-2 miliar (apresiasi 12%/tahun rata-rata). Total return: 200-300%."),
      p("Rumah: nilai jadi Rp 1,2-1,4 miliar + rental Rp 300-400 juta = Rp 1,5-1,8 miliar. Total return: 200-260%."),
      h("Kesimpulan"),
      p("Tanah untuk investor sabar dengan modal cadangan lain. Rumah untuk yang butuh cashflow bulanan atau investor pemula yang mau belajar."),
      q("Warren Buffett-nya properti bilang: tanah menang di long-term, rumah menang di cashflow. Kombinasi keduanya = portofolio ideal."),
      cta(),
    ],
  },
  {
    id: 41,
    slug: "investasi-properti-untuk-pensiun-dini",
    title: "Investasi Properti untuk Pensiun Dini: Strategi FIRE ala Indonesia",
    excerpt:
      "Ingin pensiun di usia 45? Properti bisa jadi tulang punggungnya. Ini blueprint 15-tahun untuk mencapai financial freedom.",
    category: "Investasi",
    date: "25 Feb 2026",
    read: "7 min",
    image: IMG.rumah9,
    author: AUTHORS[3],
    tags: ["FIRE", "Pensiun Dini", "Investasi"],
    content: [
      p("FIRE (Financial Independence Retire Early) di Indonesia realistis dicapai lewat portofolio properti passive income. Butuh disiplin & waktu."),
      h("Rumus Sederhana FIRE"),
      p("Target passive income bulanan = 25× pengeluaran tahunan. Kalau butuh Rp 15 juta/bulan (Rp 180 juta/tahun), kamu butuh aset produktif senilai Rp 4,5 miliar."),
      h("Blueprint 15 Tahun (Umur 30-45)"),
      l(["Tahun 1-3: Kumpulkan modal Rp 200 juta (gaji + samping)", "Tahun 4: Beli properti #1 (kost 6 kamar / rumah sewa)", "Tahun 5-6: Beli properti #2 dengan KPR (rental cover cicilan)", "Tahun 7-9: Beli properti #3 & #4 (equity dari properti awal)", "Tahun 10-12: Lunasi KPR bertahap dengan surplus rental", "Tahun 13-15: Portofolio 5-6 properti, semua lunas, cashflow Rp 15-20 juta/bulan"]),
      h("Tipe Properti Ideal"),
      l(["Kost mahasiswa (yield 15-20%)", "Rumah kontrak keluarga (yield 5-8%)", "Ruko/kios strategis (yield 8-12%)", "Apartemen studio dekat CBD (yield 5-7%)"]),
      h("Kesalahan yang Harus Dihindari"),
      l(["Over-leverage (KPR terlalu banyak = cashflow negatif)", "Lokasi buruk demi harga murah", "Skip riset penyewa/tenant target", "Tidak simpan dana emergency 6 bulan cicilan"]),
      q("FIRE bukan tentang jadi kaya cepat. Tentang membangun aset yang membiayai hidupmu sementara kamu tidur."),
      cta(),
    ],
  },
  {
    id: 42,
    slug: "cara-analisis-roi-properti",
    title: "Cara Analisis ROI Properti dengan Benar: 5 Metrik Wajib",
    excerpt:
      "Jangan cuma lihat harga sewa vs harga beli. Ada 5 metrik yang investor properti serius pasti hitung sebelum akuisisi.",
    category: "Investasi",
    date: "26 Feb 2026",
    read: "6 min",
    image: IMG.investasi,
    author: AUTHORS[3],
    tags: ["ROI", "Analisis", "Investasi"],
    content: [
      p("Banyak investor pemula terjebak di angka ROI kasar. Investor profesional pakai 5 metrik ini untuk memilih properti yang benar-benar menguntungkan."),
      h("1. Gross Rental Yield"),
      p("Rumus: (Harga Sewa Tahunan / Harga Properti) × 100%. Ini metrik paling dasar. Target: minimum 6% untuk residensial, 10% untuk komersial."),
      h("2. Net Rental Yield"),
      p("Sama dengan Gross Yield tapi dikurangi biaya operasional (pajak, perawatan, IPL, vacancy). Angka yang sebenarnya kamu terima."),
      h("3. Cap Rate"),
      p("Rumus: NOI (Net Operating Income) / Harga Properti. Digunakan untuk membandingkan properti berbeda-beda skala. Cap rate tinggi = potensi return tinggi (tapi risiko lebih tinggi)."),
      h("4. Cash-on-Cash Return"),
      p("Rumus: Annual Cashflow / Total Cash Investasi (DP + biaya awal). Cocok untuk analisis properti dengan KPR. Target: 8-12%."),
      h("5. IRR (Internal Rate of Return)"),
      p("Menghitung total return termasuk apresiasi + rental + potensi jual. Metrik paling akurat untuk long-term. Target: 15-20% per tahun."),
      h("Contoh Perhitungan"),
      p("Rumah Rp 500 juta, sewa Rp 3 juta/bulan (Rp 36 juta/tahun), biaya operasional Rp 6 juta/tahun. Gross Yield: 7,2%. Net Yield: 6%. Kalau apresiasi 8%/tahun, total IRR: sekitar 14%."),
      q("Angka tidak berbohong. Kalau ROI properti di bawah 8%, coba reksadana atau saham dulu — sama return tapi lebih likuid."),
      cta(),
    ],
  },
  {
    id: 43,
    slug: "investasi-rumah-second-untuk-disewakan",
    title: "Investasi Rumah Second untuk Disewakan: Panduan Anti Gagal",
    excerpt:
      "Rumah second murah, tapi ada strategi khusus supaya cepat dapat penyewa dan yield tinggi. Ini blueprint-nya.",
    category: "Investasi",
    date: "27 Feb 2026",
    read: "6 min",
    image: IMG.rumah6,
    author: AUTHORS[3],
    tags: ["Rumah Second", "Sewa", "Investasi"],
    content: [
      p("Rumah second untuk disewakan bisa jadi mesin cashflow terbaik — kalau kamu tahu formula pemilihannya."),
      h("Kriteria Rumah Second Ideal untuk Sewa"),
      l(["Lokasi dekat kantor/kampus (max 3 km)", "3 kamar tidur (paling laku disewa keluarga)", "Kondisi struktur bagus (renovasi min. cukup)", "Akses jalan mobil bisa masuk", "Bebas banjir historis 10 tahun"]),
      h("Perhitungan Modal & Renovasi"),
      p("Beli Rp 400 juta + renovasi Rp 50 juta (cat, keramik, sanitasi, listrik) = Rp 450 juta. Sewa Rp 30-40 juta/tahun. Gross yield: 6,7-8,9%."),
      h("Strategi Renovasi Efisien"),
      l(["Fokus dapur & kamar mandi (paling dilihat calon penyewa)", "Cat ulang dengan warna netral (putih/beige)", "Ganti keramik yang retak", "Bersihkan langit-langit dari noda bocor", "Pasang WiFi & AC minimal 1 unit"]),
      h("Cara Cari Penyewa Cepat"),
      l(["Foto profesional (siang hari, semua ruangan)", "Listing di Huniaja, OLX, Facebook Marketplace", "Sebar info via komunitas kantor/kampus", "Kontrak fleksibel (bulanan/tahunan)", "Diskon 5-10% untuk kontrak 1 tahun full"]),
      h("Perhitungan Break Even"),
      p("Dengan yield 8%/tahun + apresiasi 8%/tahun, break-even kembali modal sekitar 7-8 tahun. Setelah itu, murni profit + apresiasi."),
      cta(),
    ],
  },

  // ---------- Keuangan ----------
  {
    id: 44,
    slug: "cara-menabung-dp-100-juta-3-tahun",
    title: "Cara Menabung DP Rp 100 Juta dalam 3 Tahun (Gaji Rp 8 Juta)",
    excerpt:
      "DP terlihat menakutkan? Dengan strategi yang tepat, siapa saja bisa kumpulkan DP Rp 100 juta dalam 3 tahun.",
    category: "Keuangan",
    date: "28 Feb 2026",
    read: "6 min",
    image: IMG.kpr3,
    author: AUTHORS[3],
    tags: ["Keuangan", "DP", "Menabung"],
    content: [
      p("Kumpulkan DP Rp 100 juta dalam 3 tahun butuh disiplin, bukan gaji besar. Ini roadmap-nya."),
      h("Matematika Sederhana"),
      p("Rp 100 juta ÷ 36 bulan = Rp 2,78 juta/bulan. Kalau ditambah return investasi 8%/tahun, kamu cuma butuh Rp 2,5 juta/bulan."),
      h("Alokasi Gaji Rp 8 Juta"),
      l(["Kebutuhan pokok (makan, transport, kos): Rp 3 juta (37%)", "Menabung DP: Rp 2,5 juta (31%)", "Dana darurat: Rp 500rb (6%)", "Asuransi & kesehatan: Rp 500rb (6%)", "Gaya hidup & hiburan: Rp 1,5 juta (19%)"]),
      h("Instrumen Menabung yang Tepat"),
      l(["Reksadana Pasar Uang (return 5-6%, risiko rendah)", "Reksadana Pendapatan Tetap (return 7-8%, risiko rendah-medium)", "Deposito berjangka (return 4-5%, terjamin LPS)", "Hindari saham/kripto untuk dana DP (volatilitas tinggi)"]),
      h("Percepat dengan Side Hustle"),
      l(["Freelance skill kamu (Rp 1-3 juta/bulan)", "Jualan online produk niche (Rp 500rb-2 juta)", "Investasi affiliate/dropship", "Sewakan barang: kamera, drone, motor (Rp 500rb-1,5 juta)"]),
      h("Reward Milestone"),
      p("Setiap Rp 25 juta terkumpul, kasih diri kamu reward kecil (makan enak, staycation). Ini bikin kamu tetap termotivasi."),
      q("Tabungan DP bukan tentang seberapa banyak yang kamu simpan. Tapi seberapa konsisten kamu menyimpan."),
      cta(),
    ],
  },
  {
    id: 45,
    slug: "kelola-keuangan-setelah-punya-kpr",
    title: "Mengelola Keuangan Setelah Punya Cicilan KPR: 5 Aturan Wajib",
    excerpt:
      "Punya cicilan KPR = tanggung jawab 20-30 tahun ke depan. Jangan sampai jadi 'house poor'. Ikuti 5 aturan ini.",
    category: "Keuangan",
    date: "01 Mar 2026",
    read: "6 min",
    image: IMG.kpr1,
    author: AUTHORS[3],
    tags: ["Keuangan", "KPR", "Manajemen"],
    content: [
      p("Punya rumah itu impian. Tapi salah kelola keuangan setelahnya bisa bikin kamu jadi 'house poor' — punya rumah tapi tidak punya cashflow."),
      h("1. Dana Darurat 12 Bulan Cicilan"),
      p("Sebelum ambil KPR, pastikan tabungan darurat setara 12 bulan cicilan. Kalau cicilan Rp 4 juta, sisihkan Rp 48 juta terpisah. Ini bantalan kalau terjadi PHK atau musibah."),
      h("2. Sisakan 20% Gaji untuk Investasi"),
      p("Jangan seluruh sisa gaji habis untuk kebutuhan. Alokasikan minimum 20% ke investasi (reksadana, saham, emas) supaya wealth-mu tetap tumbuh."),
      h("3. Beli Asuransi Jiwa KPR"),
      p("Kalau kamu meninggal atau cacat total, asuransi jiwa KPR akan melunasi sisa hutang. Premi cukup 0,3-0,5% dari plafon KPR per tahun."),
      h("4. Bayar Ekstra Kalau Ada Rejeki"),
      p("Bonus tahunan atau THR bisa dipakai untuk bayar ekstra pokok KPR. Bayar 1x cicilan ekstra per tahun bisa hemat 3-5 tahun tenor total."),
      h("5. Review Refinancing Setiap 3 Tahun"),
      p("Cek suku bunga bank lain. Kalau ada yang menawarkan 2%+ lebih rendah dari yang kamu bayar sekarang, pertimbangkan take over. Bisa hemat puluhan juta."),
      h("Warning Signs 'House Poor'"),
      l(["Cicilan >40% gaji bulanan", "Tidak bisa investasi/menabung setelah cicilan", "Sering telat bayar tagihan lain", "Stress finansial berlebihan"]),
      cta(),
    ],
  },
  {
    id: 46,
    slug: "5-kesalahan-finansial-saat-beli-rumah",
    title: "5 Kesalahan Finansial Fatal Saat Beli Rumah (Wajib Dihindari)",
    excerpt:
      "Salah keputusan finansial saat beli rumah bisa berdampak 20 tahun ke depan. Ini 5 kesalahan paling umum & cara menghindarinya.",
    category: "Keuangan",
    date: "02 Mar 2026",
    read: "5 min",
    image: IMG.kpr2,
    author: AUTHORS[3],
    tags: ["Kesalahan", "Keuangan", "KPR"],
    content: [
      p("Beli rumah adalah keputusan finansial terbesar dalam hidup. Jangan sampai kesalahan berikut menghantui kamu 20 tahun ke depan."),
      h("1. Beli Rumah di Atas Kemampuan"),
      p("Aturan: cicilan max 30% gaji bersih. Kalau kamu paksa 40-50% karena tergiur rumah 'sedikit lebih mewah', kamu akan menyesal saat gaji tidak naik."),
      h("2. Habiskan Semua Tabungan untuk DP"),
      p("Habiskan tabungan untuk DP maksimal 70%. Sisakan minimal 30% untuk dana darurat. Bank ambil DP-mu, tapi mereka tidak akan bantu saat AC rusak atau atap bocor."),
      h("3. Skip Asuransi Jiwa KPR"),
      p("Beberapa orang skip asuransi jiwa untuk hemat premi. Padahal kalau terjadi apa-apa, keluarga bisa kehilangan rumah. Investasi kecil untuk perlindungan besar."),
      h("4. Tidak Bandingkan Bank"),
      p("Ajukan KPR hanya di 1 bank karena kenal marketingnya = kehilangan potensi hemat puluhan juta. Selalu bandingkan minimal 3 bank."),
      h("5. Skip Biaya Tersembunyi"),
      p("Selain DP & cicilan, ada BPHTB (5%), notaris (1-2%), balik nama (1%), asuransi kebakaran (0,1%/tahun), IPL (untuk cluster). Total biaya awal bisa capai 10-12% dari harga rumah."),
      q("Pastikan kamu punya cukup 'buffer' — bukan cuma cukup untuk DP, tapi juga untuk kejutan yang pasti datang."),
      cta(),
    ],
  },
  {
    id: 47,
    slug: "reksadana-vs-deposito-untuk-dp",
    title: "Reksadana vs Deposito untuk Dana DP: Mana yang Lebih Optimal?",
    excerpt:
      "Nabung DP di deposito aman, tapi return-nya kalah inflasi. Reksadana lebih agresif tapi ada risiko. Ini panduan pilihnya.",
    category: "Keuangan",
    date: "03 Mar 2026",
    read: "5 min",
    image: IMG.kpr3,
    author: AUTHORS[3],
    tags: ["Reksadana", "Deposito", "DP"],
    content: [
      p("Menyimpan dana DP di produk yang salah bisa bikin kamu terlambat beli rumah karena kalah inflasi properti."),
      h("Deposito Berjangka"),
      l(["+ Terjamin LPS sampai Rp 2 miliar", "+ Return tetap (4-5% per tahun)", "+ Cocok jangka pendek <2 tahun", "- Kalah inflasi properti (8-12%)", "- Dana terkunci sesuai tenor"]),
      h("Reksadana Pasar Uang (RDPU)"),
      l(["+ Return 5-6% per tahun", "+ Bisa dicairkan kapan saja (T+1)", "+ Modal minim (mulai Rp 100rb)", "+ Risiko sangat rendah", "- Tidak dijamin LPS", "- Return masih di bawah inflasi properti"]),
      h("Reksadana Pendapatan Tetap (RDPT)"),
      l(["+ Return 7-9% per tahun", "+ Cocok jangka 1-3 tahun", "+ Risiko rendah-menengah", "- Nilai bisa berfluktuasi jangka pendek"]),
      h("Reksadana Campuran"),
      l(["+ Return 8-12% per tahun (jangka panjang)", "+ Cocok jangka >3 tahun", "- Fluktuasi menengah", "- Risiko lebih tinggi"]),
      h("Rekomendasi Berdasarkan Timeline DP"),
      l(["<1 tahun beli: Deposito atau RDPU", "1-2 tahun beli: RDPU + RDPT (60:40)", "2-4 tahun beli: RDPT + Campuran (50:50)", ">4 tahun beli: Campuran + saham blue chip (60:40)"]),
      q("Kalau inflasi properti 10% dan tabunganmu di deposito hanya 5%, kamu setiap tahun makin jauh dari rumah — bukan makin dekat."),
      cta(),
    ],
  },
  {
    id: 48,
    slug: "total-biaya-beli-rumah-jangan-kaget",
    title: "Total Biaya Beli Rumah Rp 500 Juta: Jangan Kaget dengan Angka Ini",
    excerpt:
      "Harga rumah Rp 500 juta bukan artinya kamu bayar Rp 500 juta. Ada 10+ biaya tersembunyi. Ini rincian lengkapnya.",
    category: "Keuangan",
    date: "04 Mar 2026",
    read: "6 min",
    image: IMG.kpr2,
    author: AUTHORS[3],
    tags: ["Biaya", "Keuangan", "Transparansi"],
    content: [
      p("Banyak pembeli pemula kaget saat lihat total biaya awal beli rumah. Berikut breakdown lengkap untuk rumah Rp 500 juta."),
      h("Biaya Awal (Dibayar Saat Akad)"),
      l(["DP 20%: Rp 100 juta", "BPHTB (pembeli, 5% NJOP): ~Rp 20 juta", "Provisi Bank (1% plafon KPR): Rp 4 juta", "Biaya Administrasi Bank: Rp 500rb-1 juta", "Appraisal Bank: Rp 500rb-1 juta", "Notaris/PPAT (AJB + KPR): Rp 8-12 juta", "Balik Nama Sertifikat: Rp 3-5 juta", "Asuransi Kebakaran (5 tahun): Rp 2-3 juta", "Asuransi Jiwa KPR (5 tahun): Rp 3-5 juta"]),
      p("**Total Biaya Awal: sekitar Rp 141-152 juta** (28-30% dari harga rumah)"),
      h("Biaya Berjalan Bulanan"),
      l(["Cicilan KPR (Rp 400jt, 20th, 8% p.a.): ~Rp 3,3 juta/bulan", "PBB (tahunan): ~Rp 500rb-1jt/tahun", "IPL Cluster (opsional): Rp 200-500rb/bulan", "Listrik: Rp 300-800rb/bulan", "Air: Rp 100-300rb/bulan", "Internet: Rp 300-500rb/bulan"]),
      h("Biaya Tak Terduga"),
      l(["Renovasi & perbaikan (5-10 tahun sekali): Rp 30-100 juta", "Ganti pompa/genset: Rp 3-8 juta", "Cat ulang eksterior: Rp 5-15 juta", "Ganti keramik/lantai: Rp 20-50 juta"]),
      h("Kesimpulan"),
      p("Untuk rumah Rp 500 juta, siapkan cash Rp 150 juta di awal + kemampuan bayar Rp 4-5 juta/bulan (cicilan + operasional). Kalau tidak, jangan paksakan."),
      q("Rumah bukan hanya nilai jual belinya. Rumah adalah mesin biaya seumur hidup — pastikan kamu siap."),
      cta(),
    ],
  },

  // ---------- Subsidi ----------
  {
    id: 49,
    slug: "rumah-subsidi-flpp-2026-syarat-cara-daftar",
    title: "Rumah Subsidi FLPP 2026: Syarat, Cara Daftar & Update Terbaru",
    excerpt:
      "KPR Subsidi FLPP memberi cicilan tetap 5% seumur tenor. Wajib tahu syarat & cara daftarnya di 2026.",
    category: "Subsidi",
    date: "05 Mar 2026",
    read: "6 min",
    image: IMG.rumah4,
    author: AUTHORS[1],
    tags: ["Subsidi", "FLPP", "KPR Subsidi"],
    content: [
      p("Program FLPP (Fasilitas Likuiditas Pembiayaan Perumahan) adalah subsidi pemerintah untuk MBR (Masyarakat Berpenghasilan Rendah)."),
      h("Manfaat KPR FLPP"),
      l(["Bunga tetap 5% seumur tenor (max 20 tahun)", "DP mulai 1% dari harga rumah", "Bebas PPN & BPHTB", "Cicilan Rp 1-2 juta/bulan tergantung tipe"]),
      h("Syarat Penerima FLPP 2026"),
      l(["WNI berusia min. 21 tahun & max. 65 tahun saat KPR lunas", "Punya NPWP aktif & SPT Tahunan", "Belum pernah punya rumah (single atau bersama pasangan)", "Belum pernah menerima subsidi perumahan", "Gaji max Rp 8 juta/bulan (single) atau Rp 10 juta/bulan (keluarga)", "BI Checking bersih (kolektibilitas 1)"]),
      h("Batas Harga Rumah 2026"),
      p("Rp 168 juta (Jawa) - Rp 240 juta (Papua). Diperbarui setiap tahun sesuai wilayah."),
      h("Cara Daftar"),
      l(["Pilih perumahan bersertifikat FLPP (cek di ppdpp.id)", "Daftar via developer atau langsung ke bank penyalur", "Isi formulir + serahkan dokumen (KTP, KK, NPWP, SPT, Slip Gaji)", "Verifikasi eligibility oleh bank (7-14 hari)", "Jika lolos, terbitkan SP3K", "Akad kredit & serah terima"]),
      h("Bank Penyalur FLPP"),
      p("BTN, BSI, Bank Mandiri, Bank BJB, Bank Nagari, dan bank daerah lain. BTN paling dominan (60% penyaluran nasional)."),
      cta(),
    ],
  },
  {
    id: 50,
    slug: "beda-rumah-subsidi-tapera-dan-flpp",
    title: "Bedanya Rumah Subsidi Tapera vs FLPP: Mana yang Cocok Untukmu?",
    excerpt:
      "Tapera dan FLPP sama-sama subsidi pemerintah, tapi mekanismenya beda. Kenali sebelum ambil salah satu.",
    category: "Subsidi",
    date: "06 Mar 2026",
    read: "5 min",
    image: IMG.rumah5,
    author: AUTHORS[1],
    tags: ["Tapera", "FLPP", "Subsidi"],
    content: [
      p("Sejak 2024, program subsidi rumah pemerintah punya dua jalur: Tapera dan FLPP. Keduanya berbeda dan tidak saling tumpang tindih."),
      h("FLPP (Fasilitas Likuiditas Pembiayaan Perumahan)"),
      l(["Program lama sejak 2010", "Bunga 5% tetap seumur tenor", "Batasan gaji Rp 8-10 juta", "Semua WNI eligible (tidak wajib peserta Tapera)", "Pengelola: BP Tapera + PPDPP"]),
      h("Tapera (Tabungan Perumahan Rakyat)"),
      l(["Program baru sejak 2016, wajib mulai 2024", "Iuran wajib 3% gaji (2,5% pekerja + 0,5% pemberi kerja)", "Bisa akses KPR Tapera setelah peserta min. 12 bulan", "Bunga KPR 5% tetap juga", "Bisa untuk KPR baru, renovasi, atau bangun sendiri"]),
      h("Perbedaan Utama"),
      l(["FLPP: dana subsidi dari APBN, tidak perlu iuran", "Tapera: dana dari iuran peserta + subsidi", "FLPP: fokus rumah baru saja", "Tapera: fleksibel (baru/renovasi/DP tambahan)"]),
      h("Cocok Untuk Siapa?"),
      p("FLPP: kamu baru pertama beli rumah dan belum peserta Tapera. Tapera: kamu sudah jadi peserta aktif dan butuh KPR fleksibel."),
      h("Bisa Ambil Keduanya?"),
      p("Tidak. Prinsip 'satu subsidi per orang' berlaku. Kalau sudah pakai FLPP, tidak bisa ambil Tapera untuk rumah kedua yang bersubsidi."),
      cta(),
    ],
  },
  {
    id: 51,
    slug: "kpr-bersubsidi-pns-tni-polri",
    title: "Panduan KPR Bersubsidi untuk PNS, TNI & Polri: Khusus Aparatur Negara",
    excerpt:
      "PNS, TNI, dan Polri punya jalur KPR khusus dengan bunga lebih rendah. Kenali program & cara aksesnya.",
    category: "Subsidi",
    date: "07 Mar 2026",
    read: "5 min",
    image: IMG.kpr1,
    author: AUTHORS[1],
    tags: ["PNS", "TNI", "Polri", "Subsidi"],
    content: [
      p("Aparatur Sipil Negara dan TNI/Polri punya beberapa program KPR khusus dengan bunga lebih rendah dari FLPP biasa."),
      h("Program Utama untuk PNS"),
      l(["BP Tapera Bersubsidi (bunga 4,5-5%)", "KPR Bapertarum (khusus PNS aktif)", "KPR Bank Jatim/BJB/BPD daerah dengan fasilitas cicilan potong gaji"]),
      h("Program untuk TNI"),
      l(["ASABRI KPR (Asabri Persero)", "Bunga khusus 5-6% dengan tenor sampai 25 tahun", "Bisa via BTN, Mandiri, atau bank BUMN lain"]),
      h("Program untuk Polri"),
      l(["Yasbhum Polri", "Sama seperti ASABRI, potongan gaji langsung", "Program YAPKALLA untuk perwira & bintara"]),
      h("Keuntungan KPR Aparatur"),
      l(["Bunga lebih rendah dari pasar", "Potong gaji langsung (auto-debit, tidak ada denda)", "Tenor lebih panjang", "Approval lebih mudah (BI Checking otomatis clean karena PNS)"]),
      h("Persyaratan"),
      l(["Aktif minimal 2 tahun", "Surat keterangan atasan langsung", "SK pengangkatan asli", "Slip gaji 3 bulan + rincian tunjangan"]),
      h("Tips Optimasi"),
      p("Kombinasikan gaji + tunjangan kinerja + tunjangan jabatan saat perhitungan penghasilan. Bank aparatur biasanya mengakui semua komponen ini."),
      cta(),
    ],
  },
  {
    id: 52,
    slug: "perumahan-subsidi-terbaik-jabodetabek",
    title: "10 Lokasi Perumahan Subsidi Terbaik di Jabodetabek 2026",
    excerpt:
      "Rumah subsidi tidak harus jauh & jelek. Ini 10 lokasi Jabodetabek dengan akses baik & fasilitas komplet.",
    category: "Subsidi",
    date: "08 Mar 2026",
    read: "6 min",
    image: IMG.cluster,
    author: AUTHORS[0],
    tags: ["Subsidi", "Jabodetabek", "Lokasi"],
    content: [
      p("Perumahan subsidi FLPP 2026 di Jabodetabek makin banyak yang berkualitas. Ini 10 lokasi terbaik yang direkomendasikan."),
      h("Bogor & Sekitarnya"),
      l(["Perumahan Puri Suradita (Cariu) - akses tol Jagorawi", "Cluster Griya Tirta (Cileungsi) - dekat kawasan industri", "Puri Bagasasi (Cibinong) - dekat stasiun & fasilitas"]),
      h("Tangerang"),
      l(["Grand Nusa Indah (Rajeg) - Rp 168 juta, tipe 30/60", "Villa Melati Mas (Pasar Kemis) - dekat industri"]),
      h("Bekasi"),
      l(["Puri Harmoni (Cikarang) - dekat industri MM2100", "Grand Bekasi Regency (Tambun) - akses tol Cikampek"]),
      h("Depok"),
      l(["Cluster Nirwana (Sawangan) - akses tol Depok-Antasari"]),
      h("Karawang & Purwakarta"),
      l(["Green Village (Karawang Timur) - kawasan industri", "Villa Setia Mekar (Purwakarta) - Rp 168 juta"]),
      h("Kriteria Pemilihan"),
      l(["Jarak max 45 menit ke area kerja", "Akses transportasi umum", "Air PDAM & listrik PLN sudah masuk", "Bebas banjir 5 tahun terakhir", "Developer terpercaya (cek reputasi)"]),
      h("Yang Harus Diwaspadai"),
      p("Hindari perumahan subsidi yang terlalu jauh dari pusat aktivitas — bisa jadi kamu justru boros transport & tersiksa commuting."),
      cta(),
    ],
  },
  {
    id: 53,
    slug: "rumah-subsidi-vs-non-subsidi",
    title: "Rumah Subsidi vs Non-Subsidi: Mana yang Cocok Untukmu?",
    excerpt:
      "Rumah subsidi murah tapi ada batasan. Non-subsidi bebas tapi mahal. Ini panduan pilih yang tepat berdasarkan profilmu.",
    category: "Subsidi",
    date: "09 Mar 2026",
    read: "5 min",
    image: IMG.rumah6,
    author: AUTHORS[0],
    tags: ["Subsidi", "Perbandingan"],
    content: [
      p("Rumah subsidi dan non-subsidi punya keunggulan berbeda. Pilih yang paling cocok dengan profil finansial & rencana hidupmu."),
      h("Rumah Subsidi"),
      l(["+ DP mulai 1% (super rendah)", "+ Bunga tetap 5% (paling murah)", "+ Bebas PPN & BPHTB", "- Batasan gaji Rp 8-10 juta", "- Tipe rumah kecil (30-45m²)", "- Lokasi umumnya pinggiran kota", "- Tidak boleh dijual/disewakan 5 tahun pertama", "- Bebas jadi hak milik penuh setelah lunas"]),
      h("Rumah Non-Subsidi"),
      l(["+ Bebas pilih tipe & lokasi", "+ Bisa langsung disewakan/dijual", "+ Kualitas material lebih baik", "+ Fasilitas cluster lengkap", "- DP 15-20% (mahal)", "- Bunga floating (bisa naik)", "- Kena PPN 11% & BPHTB 5%"]),
      h("Cocok Rumah Subsidi Kalau..."),
      l(["Gaji kamu di bawah Rp 10 juta", "Belum punya rumah sebelumnya", "Siap tinggal di area pinggiran", "Rencana tinggal minimal 5 tahun"]),
      h("Cocok Rumah Non-Subsidi Kalau..."),
      l(["Gaji di atas Rp 15 juta", "Butuh lokasi strategis", "Berpotensi disewakan/dijual dalam 3-5 tahun", "Cari rumah tipe menengah-besar"]),
      h("Kombinasi Cerdas"),
      p("Beberapa orang beli rumah subsidi dulu (jadi tempat tinggal), lalu setelah 5 tahun beli rumah non-subsidi sebagai upgrade. Rumah subsidi lama disewakan/dijual."),
      cta(),
    ],
  },
  {
    id: 54,
    slug: "ciri-rumah-subsidi-ilegal",
    title: "Jangan Tertipu! 7 Ciri Rumah Subsidi Ilegal yang Wajib Dihindari",
    excerpt:
      "Banyak developer nakal jual rumah 'subsidi' padahal tidak terdaftar resmi. Kenali cirinya supaya tidak terjebak.",
    category: "Subsidi",
    date: "10 Mar 2026",
    read: "5 min",
    image: IMG.penipuan,
    author: AUTHORS[2],
    tags: ["Subsidi", "Penipuan", "Waspada"],
    content: [
      p("Booming rumah subsidi bikin oknum nakal ikut memanfaatkan. Kenali 7 ciri rumah subsidi ilegal supaya kamu tidak jadi korban."),
      h("1. Tidak Terdaftar di PPDPP"),
      p("Semua perumahan FLPP resmi terdaftar di ppdpp.id. Kalau developer klaim FLPP tapi tidak ada di daftar, hindari."),
      h("2. Harga di Atas Batas FLPP"),
      p("Batas harga FLPP 2026: Rp 168-240 juta tergantung wilayah. Kalau developer jual 'FLPP' tapi harga Rp 300 juta, itu bohong."),
      h("3. Bank Penyalur Tidak Jelas"),
      p("FLPP hanya bisa via bank penyalur resmi (BTN, BSI, Mandiri, BJB, dll). Kalau ditawarkan 'KPR sendiri dari developer', itu bukan FLPP."),
      h("4. Sertifikat Belum Dipecah"),
      p("Sering ditemukan: satu SHM induk dibagi ke 50 unit tanpa proses pemecahan resmi. Akibatnya pembeli hanya dapat 'AJB' tapi tidak SHM per unit."),
      h("5. Lokasi di Lahan Bermasalah"),
      p("Cek tata ruang: apakah tanah masuk zona perumahan atau lahan hijau/pertanian. Sering ditemukan developer bangun di lahan tidak sesuai peruntukan."),
      h("6. Fasilitas Tidak Sesuai Standar"),
      p("Rumah subsidi resmi wajib punya listrik PLN, air PDAM/sumber layak, akses jalan lebar min 4m, saluran drainase. Kalau kurang salah satunya, curigai."),
      h("7. Testimoni Terlalu Manis"),
      p("Cek review Google Maps & forum properti untuk developer. Kalau semua review positif dan 'baru' dalam 1 bulan, biasanya fake."),
      q("Rumah subsidi ilegal awalnya kelihatan murah — tapi berakhir dengan sertifikat tidak keluar, akses bank ditolak, dan uang hilang."),
      cta(),
    ],
  },

  // ---------- Keamanan ----------
  {
    id: 55,
    slug: "10-ciri-agen-properti-penipu",
    title: "10 Ciri Agen Properti Penipu (Wajib Waspada Sebelum Transaksi!)",
    excerpt:
      "Tidak semua agen properti jujur. Kenali 10 red flags berikut supaya tidak jadi korban penipuan puluhan juta.",
    category: "Keamanan",
    date: "11 Mar 2026",
    read: "6 min",
    image: IMG.penipuan,
    author: AUTHORS[2],
    tags: ["Penipuan", "Agen", "Waspada"],
    content: [
      p("Modus penipuan agen properti makin canggih. Kenali 10 ciri berikut sebagai peringatan dini."),
      h("1. Tidak Punya Kartu Anggota AREBI/HISPI"),
      p("Agen legit tergabung di asosiasi resmi seperti AREBI atau HISPI. Kalau tidak bisa tunjukkan kartu anggota, curigai."),
      h("2. Meminta 'Tanda Jadi' Sebelum Survey"),
      p("Agen legit tidak akan minta uang sebelum kamu lihat rumah langsung. Kalau minta transfer 'tanda jadi' via WA, hindari."),
      h("3. Tidak Bisa Tunjukkan Dokumen Rumah"),
      p("Sertifikat, IMB/PBG, PBB - agen jujur bisa tunjukkan semua saat kamu tanya. Yang menghindar biasanya menyembunyikan sesuatu."),
      h("4. Harga Terlalu Jauh di Bawah Pasar"),
      p("Rumah senilai Rp 500 juta tiba-tiba dijual Rp 300 juta 'urgent BU'? Itu jebakan klasik untuk memancing DP cepat."),
      h("5. Meminta Transfer ke Rekening Pribadi"),
      p("Transaksi properti resmi selalu via rekening perusahaan/developer atau escrow. Rekening pribadi = red flag terbesar."),
      h("6. Menekan untuk Cepat Keputusan"),
      p("'Ini last unit, tadi baru ada yang tanya juga'. Tekanan waktu adalah taktik agar kamu tidak sempat verifikasi."),
      h("7. Tidak Mau Ketemu Langsung"),
      p("Semua komunikasi hanya via WA/telepon, tidak mau meeting fisik. Agen legit siap ketemu di kantor atau lokasi rumah."),
      h("8. Foto Rumah Tidak Konsisten"),
      p("Foto interior beda dari eksterior (beda gaya arsitektur). Cek reverse image search di Google - sering foto curian dari luar negeri."),
      h("9. Nomor Telepon Prepaid Baru"),
      p("Nomor HP prepaid yang baru aktif 1-3 bulan biasanya milik oknum. Agen legit punya nomor stabil dan email domain perusahaan."),
      h("10. Testimoni di Website Terlalu Manis"),
      p("Semua testimoni 5 bintang, foto avatar identik, kata-kata seragam - biasanya fake reviews yang dibayar."),
      q("Investasi 15 menit riset agen bisa selamatkan investasi ratusan juta rumah kamu."),
      cta(),
    ],
  },
  {
    id: 56,
    slug: "cara-cek-sertifikat-rumah-sentuh-tanahku",
    title: "Cara Cek Sertifikat Rumah Lewat Aplikasi Sentuh Tanahku (BPN Resmi)",
    excerpt:
      "Sekarang cek sertifikat bisa dari HP dalam 5 menit. Panduan step-by-step pakai aplikasi resmi BPN.",
    category: "Keamanan",
    date: "12 Mar 2026",
    read: "4 min",
    image: IMG.legal2,
    author: AUTHORS[2],
    tags: ["BPN", "Sertifikat", "Keamanan"],
    content: [
      p("Aplikasi Sentuh Tanahku adalah layanan resmi BPN untuk cek keaslian sertifikat properti dari genggaman. Wajib dipakai sebelum transaksi."),
      h("Download & Instalasi"),
      l(["Download di Google Play / App Store", "Cari 'Sentuh Tanahku' (developer: Kementerian ATR/BPN)", "Install & buka aplikasinya", "Daftar akun dengan email + NIK KTP"]),
      h("Cara Cek Sertifikat"),
      l(["Login aplikasi", "Pilih menu 'Info Sertifikat'", "Masukkan nomor sertifikat + kode kabupaten/kota", "Bayar biaya cek (Rp 10-25rb via e-wallet)", "Hasil keluar dalam 5-15 menit"]),
      h("Info yang Kamu Dapat"),
      l(["Nama pemilik terdaftar", "Luas tanah & bangunan", "Nomor sertifikat & jenis (SHM/HGB/HGU)", "Alamat & koordinat", "Status: bersih / sedang dijaminkan / dalam sengketa", "Riwayat balik nama sebelumnya"]),
      h("Kapan Wajib Dicek?"),
      l(["Sebelum DP (paling penting)", "Sebelum AJB", "Setelah balik nama (verifikasi ke nama kamu)", "Setiap 2-3 tahun untuk update status"]),
      h("Alternatif: Cek di Kantor BPN"),
      p("Kalau tidak punya akses aplikasi, bisa datang langsung ke Kantah BPN dengan fotokopi sertifikat + Rp 25-50rb biaya administrasi."),
      cta(),
    ],
  },
  {
    id: 57,
    slug: "modus-penipuan-kpr-fiktif",
    title: "Modus Penipuan KPR Fiktif dan Cara Menghindarinya",
    excerpt:
      "Ada oknum yang jual 'jasa loloskan KPR' padahal KPR-nya fiktif. Kenali modusnya supaya uang jasa tidak lenyap.",
    category: "Keamanan",
    date: "13 Mar 2026",
    read: "5 min",
    image: IMG.penipuan,
    author: AUTHORS[2],
    tags: ["KPR", "Penipuan", "Waspada"],
    content: [
      p("KPR ditolak? Waspada tawaran 'jasa lolos KPR' dari oknum tidak dikenal. Banyak yang berujung penipuan puluhan juta."),
      h("Modus 1: 'Bisa Loloskan BI Checking Buruk'"),
      p("Klaim bisa 'membersihkan' BI Checking kamu dengan bayar Rp 10-50 juta. Faktanya: BI Checking hanya bisa diperbaiki dengan bayar hutang lama, tidak ada shortcut."),
      h("Modus 2: 'Slip Gaji & Dokumen Palsu'"),
      p("Oknum menawarkan buat slip gaji palsu dan dokumen dukungan. Selain kena penipuan, kamu juga bisa kena pasal pemalsuan dokumen (Pasal 263 KUHP, ancaman 6 tahun)."),
      h("Modus 3: 'Kenal Orang Dalam Bank'"),
      p("Klaim punya koneksi manajer bank yang bisa loloskan. 99% kasus: uang jasa Rp 5-20 juta dibayar, tapi KPR tetap ditolak."),
      h("Modus 4: 'Booking Fee KPR Jasa'"),
      p("Setelah bayar Rp 500rb-2 juta 'booking fee', oknum hilang atau selalu bilang 'lagi diproses' berminggu-minggu."),
      h("Cara Menghindari"),
      l(["Ajukan KPR langsung ke bank resmi (tanpa perantara)", "Kalau butuh bantuan, gunakan konsultan resmi Huniaja (verified)", "Tidak pernah bayar 'jasa' sebelum SP3K resmi terbit", "Verifikasi status marketing bank via customer service resmi"]),
      h("Kalau Sudah Jadi Korban"),
      l(["Segera lapor Polisi (bawa bukti transfer, chat)", "Lapor ke OJK via 157 atau konsumen.ojk.go.id", "Konsultasi advokat untuk gugatan perdata", "Hindari public shaming (bikin oknum kabur)"]),
      cta(),
    ],
  },
  {
    id: 58,
    slug: "rumah-bekas-banjir-cara-cek-sebelum-beli",
    title: "Rumah Bekas Banjir: 6 Cara Cek Sebelum Beli",
    excerpt:
      "Rumah bekas banjir dijual murah, tapi ada risiko tersembunyi. Ini cara cek supaya tidak menyesal setelah pindah.",
    category: "Keamanan",
    date: "14 Mar 2026",
    read: "5 min",
    image: IMG.banjir,
    author: AUTHORS[2],
    tags: ["Banjir", "Rumah Second", "Waspada"],
    content: [
      p("Rumah bekas banjir sering dijual 20-40% di bawah harga pasar. Menggiurkan? Ya. Tanpa cek matang bisa jadi mimpi buruk."),
      h("1. Cek Peta Rawan Banjir"),
      p("Buka petabencana.id atau BNPB.go.id. Cek lokasi rumah di peta rawan banjir. Kalau zona merah (banjir tahunan), pikir 1000 kali."),
      h("2. Tanya Tetangga Lama"),
      p("Datangi 5-10 tetangga sekitar. Tanya frekuensi banjir 10 tahun terakhir, ketinggian air, dan durasi. Jangan tanya pemilik langsung (bisa bohong)."),
      h("3. Cek Bekas Air di Dinding"),
      p("Lihat garis noda kuning kecoklatan di dinding — biasanya menunjukkan ketinggian banjir. Cat baru bisa menutupi, tapi cat kelupas dan ubin retak jadi jejaknya."),
      h("4. Periksa Struktur Bangunan"),
      p("Banjir merusak fondasi & dinding. Cek retakan struktural, pintu-jendela yang tidak lurus lagi, dan lantai yang miring/menggelembung."),
      h("5. Instalasi Listrik & Air"),
      p("Sistem kelistrikan bisa rusak karena banjir. Minta inspeksi teknisi listrik profesional (Rp 200-500rb). Cek juga pipa air apakah pernah karat."),
      h("6. Historis Klaim Asuransi"),
      p("Kalau rumah pernah punya asuransi, minta bukti klaim banjir sebelumnya. Frekuensi klaim tinggi = banjir sering."),
      h("Kalau Tetap Mau Beli"),
      l(["Nego turun min. 30% dari harga pasar", "Anggarkan renovasi sanitasi & elektrik Rp 30-80 juta", "Tambah asuransi banjir (premi 0,3-0,5% nilai rumah/tahun)", "Bangun lantai ditinggikan 30-50cm dari jalan"]),
      q("Harga murah bekas banjir tidak menang kalau kamu keluar Rp 100 juta perbaikan + stress banjir tiap tahun."),
      cta(),
    ],
  },
  {
    id: 59,
    slug: "modus-booking-fee-fiktif-developer",
    title: "Waspada! Modus Booking Fee Fiktif dari Oknum Developer",
    excerpt:
      "Booking fee Rp 5-25 juta bisa lenyap kalau developer bermasalah. Ini cara verifikasi supaya uang aman.",
    category: "Keamanan",
    date: "15 Mar 2026",
    read: "5 min",
    image: IMG.penipuan,
    author: AUTHORS[2],
    tags: ["Developer", "Booking Fee", "Penipuan"],
    content: [
      p("Kasus pembeli rumah kehilangan booking fee makin sering terjadi. Kenali modusnya dan cara memverifikasi developer sebelum bayar."),
      h("Modus Umum"),
      l(["Developer tidak punya izin proyek resmi", "Lahan proyek masih sengketa/HPL", "Developer fiktif (perusahaan cangkang)", "Skema Ponzi (uang pembeli baru untuk bayar pembeli lama)"]),
      h("Cara Verifikasi Developer"),
      l(["Cek legalitas PT di ahu.go.id (Direktorat Jenderal AHU)", "Cek NIB & SIUP resmi", "Cek portofolio proyek sebelumnya (kalau ada) via Google Street View", "Cek daftar developer di REI (Real Estate Indonesia)", "Cek review pembeli sebelumnya di forum properti"]),
      h("Verifikasi Proyek"),
      l(["Lahan sudah bersertifikat SHM/HGB atas nama developer", "Izin proyek: PBG, izin lingkungan, izin peruntukan lahan", "Marketing office fisik (bukan cuma virtual)", "Pengerjaan fisik sudah dimulai (bukan hanya render)"]),
      h("Klausul Pengembalian Booking Fee"),
      p("Selalu minta klausul tertulis: 'Kalau KPR ditolak / proyek batal / molor >6 bulan, booking fee dikembalikan 100% dalam 14 hari kerja'."),
      h("Bayar dengan Aman"),
      l(["Transfer ke rekening PT developer (bukan rekening pribadi)", "Simpan bukti transfer + kwitansi tandatangan basah", "Sertakan invoice resmi bermeterai", "Rekaman percakapan saat pembayaran (untuk bukti)"]),
      h("Red Flags"),
      p("Developer minta booking fee besar (>10% harga) sebelum PPJB, tidak mau kasih rincian tertulis, atau tidak punya kantor fisik = jangan bayar."),
      cta(),
    ],
  },
  {
    id: 60,
    slug: "keamanan-data-pribadi-kpr-online",
    title: "Keamanan Data Pribadi Saat Ajukan KPR Online: 5 Tips Wajib",
    excerpt:
      "Ajukan KPR online praktis, tapi datamu bisa disalahgunakan. Ikuti 5 tips ini supaya data aman dari peretas.",
    category: "Keamanan",
    date: "16 Mar 2026",
    read: "5 min",
    image: IMG.legal3,
    author: AUTHORS[2],
    tags: ["Data Pribadi", "KPR Online", "Keamanan"],
    content: [
      p("Kebocoran data pribadi jadi masalah serius di era digital. Saat ajukan KPR online, kamu wajib waspada dengan 5 hal ini."),
      h("1. Pastikan Website Bank Asli"),
      p("Cek URL: harus HTTPS + domain resmi bank (bca.co.id, mandiri.co.id, bsi.co.id). Waspada domain mirip seperti 'bca-kpr.com' atau 'mandiri-online.id'."),
      h("2. Jangan Upload di Grup WA/Telegram"),
      p("KTP, KK, slip gaji, NPWP jangan dikirim via chat grup. Kalau harus kirim ke marketing, gunakan email resmi bank (bukan Gmail pribadi)."),
      h("3. Gunakan Wi-Fi Aman"),
      p("Ajukan KPR online hanya via jaringan pribadi/kantor. Hindari Wi-Fi publik (kafe, mall) yang bisa disadap. Kalau harus, gunakan VPN."),
      h("4. Password Kuat & 2FA"),
      p("Akun bank online wajib pakai password min 12 karakter + 2-Factor Authentication (OTP). Jangan pakai password sama untuk akun lain."),
      h("5. Cek Hak Akses Data"),
      p("Sebelum kirim data, baca Kebijakan Privasi bank/platform. Pastikan mereka tidak bagikan data ke pihak ketiga tanpa persetujuanmu (sesuai UU PDP 2022)."),
      h("Yang Wajib Dilakukan Setelah Ajukan"),
      l(["Simpan bukti pengajuan tertulis", "Aktifkan notifikasi SMS/email semua transaksi", "Cek kartu kredit & rekening berkala (waspada transaksi mencurigakan)", "Kalau ada percobaan phishing, laporkan ke bank + patrolisiber.id"]),
      h("Yang Dilarang"),
      l(["Kirim foto KTP tanpa watermark", "Upload dokumen di cloud publik", "Kasih akses e-KTP scan ke marketing tidak resmi", "Simpan password di file bernama 'password.txt'"]),
      q("Data pribadimu lebih berharga dari uangmu. Uang bisa diganti, identitasmu tidak."),
      cta(),
    ],
  },
];

export const articleCategories = [
  "Semua",
  "Panduan",
  "KPR",
  "Legal",
  "Tips",
  "Investasi",
  "Keuangan",
  "Subsidi",
  "Keamanan",
];

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(currentSlug, category, limit = 3) {
  return articles
    .filter((a) => a.slug !== currentSlug && a.category === category)
    .slice(0, limit);
}
