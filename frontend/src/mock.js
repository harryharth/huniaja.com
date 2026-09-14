// Mock data for Huniaja website

export const LOGO_BLUE = "https://customer-assets-m6fa6gv7.emergentagent.net/job_4eed1f12-2d88-44f4-9aaa-62ae00ad5a06/artifacts/jousiv9l_LOGO%20HUNIAJA.png";
export const LOGO_WHITE = "https://customer-assets-m6fa6gv7.emergentagent.net/job_4eed1f12-2d88-44f4-9aaa-62ae00ad5a06/artifacts/jousiv9l_LOGO%20HUNIAJA.png";
export const LOGO_MAIN = "https://customer-assets-m6fa6gv7.emergentagent.net/job_4eed1f12-2d88-44f4-9aaa-62ae00ad5a06/artifacts/jousiv9l_LOGO%20HUNIAJA.png";
export const HERO_BANNER = "https://customer-assets-m6fa6gv7.emergentagent.net/job_4eed1f12-2d88-44f4-9aaa-62ae00ad5a06/artifacts/wle75380_Huniaja%201.webp";

export const ICON_CARIYUK = "https://customer-assets-gfyr7b9c.emergentagent.net/job_branding-suite-6/artifacts/6ahv5sq0_listing%20baru.png";
export const ICON_LISTING_BARU = "https://customer-assets-gfyr7b9c.emergentagent.net/job_branding-suite-6/artifacts/kjaom8ge_listing%20baru.png";
export const ICON_SUBSIDI = "https://customer-assets-gfyr7b9c.emergentagent.net/job_branding-suite-6/artifacts/d5dbjva7_subsidi.png";
export const ICON_POPULER = "https://customer-assets-gfyr7b9c.emergentagent.net/job_branding-suite-6/artifacts/fazpd8ej_populer.png";
export const ICON_BELI_PROPERTI = "https://customer-assets-gfyr7b9c.emergentagent.net/job_branding-suite-6/artifacts/rwzcb4o4_logo%20beli%20properti.png";
export const ICON_KERJASAMA = "https://customer-assets-gfyr7b9c.emergentagent.net/job_branding-suite-6/artifacts/sjy1m24v_logo%20kerjasama.png";
export const ICON_POTONG_RUMPUT = "https://customer-assets-gfyr7b9c.emergentagent.net/job_branding-suite-6/artifacts/4igyedeh_potong%20rumput.png";
export const ICON_HOME_CLEANING = "https://customer-assets-gfyr7b9c.emergentagent.net/job_branding-suite-6/artifacts/bo9eddcu_home%20cleaning.png";
export const ICON_SERVICE_AC = "https://customer-assets-gfyr7b9c.emergentagent.net/job_branding-suite-6/artifacts/nl0kdg72_service%20ac.png";
export const ICON_JAGA_RUMAH = "https://customer-assets-gfyr7b9c.emergentagent.net/job_branding-suite-6/artifacts/dwm082xp_security.png";

export const navLinks = [
  { label: "Beli", href: "/cari-properti" },
  { label: "KPR", href: "/kpr" },
];

export const searchTabs = ["Beli", "Sewa", "Baru"];

export const quickCategories = [
  { label: "Beli Properti", icon: "Home", color: "bg-[#001DF3]" },
  { label: "Kerjasama", icon: "House", color: "bg-[#00B512]" },
];

export const propertyTypes = [
  { label: "Rumah", icon: "Home" },
  { label: "Tanah", icon: "Trees" },
  { label: "Apartemen", icon: "Building2" },
  { label: "Ruko", icon: "Store" },
  { label: "Perkantoran", icon: "Briefcase" },
  { label: "Gudang", icon: "Warehouse" },
  { label: "Pabrik", icon: "Factory" },
  { label: "Hotel", icon: "Hotel" },
  { label: "Kost", icon: "BedDouble" },
  { label: "Villa", icon: "Palmtree" },
];

export const promoCards = [
  {
    title: "#BeliRumahJadiMudah",
    accent: "JadiMudah",
    bg: "bg-[#001DF3]",
  },
  {
    title: "BUKA PILIH SUKA",
    bg: "bg-[#00B512]",
  },
];

const houseImages = [
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
  "https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
  "https://images.unsplash.com/photo-1558661091-5cc1b64d0dc5?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
  "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
  "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
  "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
  "https://images.unsplash.com/photo-1706855203772-c249b75fe016?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
  "https://images.pexels.com/photos/18078684/pexels-photo-18078684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/20296321/pexels-photo-20296321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
];

const makeListing = (i, tier = "HH Pro") => ({
  id: `list-${i}`,
  image: houseImages[i % houseImages.length],
  title: [
    "Rumah Modern Cluster",
    "Villa Minimalis 2 Lantai",
    "Rumah Tropis Asri",
    "Townhouse Premium",
    "Rumah Cluster Elegan",
    "Griya Modern Bogor",
    "Rumah Idaman Keluarga",
  ][i % 7],
  location: [
    "Bogor Selatan, Jawa Barat",
    "Cibubur, Bogor",
    "Sentul City, Bogor",
    "Depok, Jawa Barat",
    "Bekasi Timur",
    "Tangerang Selatan",
    "BSD City",
  ][i % 7],
  city: [
    "Kab. Bogor",
    "Kab. Bogor",
    "Kab. Bogor",
    "Kota Depok",
    "Kota Bekasi",
    "Tangerang",
    "Kab. Bekasi",
  ][i % 7],
  type: ["Rumah", "Villa", "Rumah", "Apartemen", "Rumah", "Ruko", "Rumah"][i % 7],
  condition: ["Baru", "Second", "Baru", "Baru", "Second", "Baru", "Lelang"][i % 7],
  priceValue: [500, 650, 420, 780, 550, 900, 380][i % 7] * 1000000,
  price: "Rp " + ([500, 650, 420, 780, 550, 900, 380][i % 7]).toLocaleString("id-ID") + ".000.000",
  installment: "Angsuran mulai 3 Jutaan/bln",
  tier,
  verified: true,
  specs: {
    lb: "90 m\u00b2",
    lt: "110 m\u00b2",
    kt: 3,
    km: 2,
  },
  liked: i === 0,
});

export const listingTabs = [
  "Kts. Bogor",
  "Kab. Bekasi",
  "Kota Depok",
  "Tangerang",
  "Kota Bekasi",
];

export const newListings = [
  makeListing(0),
  makeListing(1),
  makeListing(2),
];

export const allListings = Array.from({ length: 24 }, (_, i) => makeListing(i));

export const subsidiListings = [
  makeListing(4, "HH Pro"),
  makeListing(5, "HH Pro"),
  makeListing(6, "HH Pro"),
  makeListing(7, "HH Pro"),
];

export const popularListings = [
  makeListing(8, "HH Pro"),
  makeListing(9, "HH Pro"),
  makeListing(10, "HH Pro"),
];

export const favoriteLocations = [
  "Jakarta",
  "Bogor",
  "Depok",
  "Tangerang",
  "Bekasi",
  "BSD",
  "Jakarta Timur",
  "Cibubur",
  "PIK",
  "Bandung",
];

export const testimonials = [
  {
    name: "Harry Harth",
    role: "Pembeli Perumahan Didepok via huniaja.com",
    avatar: "https://i.pravatar.cc/150?img=12",
    text: "Cari hunian via huniaja.com lancar banget! Fitur pencarian terkategorisasi dengan baik. Setelah saya isi data diri untuk mencari info lebih lanjut soal rumah idepok, saya diarahkan untuk berkomunikasi langsung dengan agen. Agennya responsif dan ahli dalam pekerjaannya. Itu yang bikin saya yakin.",
  },
  {
    name: "Siti Rahmawati",
    role: "Pembeli Rumah di BSD via huniaja.com",
    avatar: "https://i.pravatar.cc/150?img=45",
    text: "Proses pembelian rumah pertama saya sangat mudah dengan Huniaja. Timnya membantu dari awal sampai akhir, semua transparan dan cepat. Sangat direkomendasikan untuk keluarga muda!",
  },
  {
    name: "Budi Santoso",
    role: "Investor Properti via huniaja.com",
    avatar: "https://i.pravatar.cc/150?img=33",
    text: "Sebagai investor, saya butuh informasi properti yang akurat dan cepat. Huniaja memberikan semua itu dengan ekosistem yang lengkap. Sudah 3 transaksi berhasil saya lakukan disini.",
  },
];

export const whyFeatures = [
  {
    title: "Platform Properti Tumbuh Paling Cepat",
    icon: "TrendingUp",
    color: "text-green-600",
  },
  {
    title: "Paling Inovatif dengan Teknologi AI",
    icon: "Cpu",
    color: "text-blue-600",
  },
  {
    title: "Ekosistem Properti Paling Tepercaya",
    icon: "ShieldCheck",
    color: "text-blue-700",
  },
  {
    title: "Jaringan Agen & Developer Terluas",
    icon: "Users",
    color: "text-amber-500",
  },
  {
    title: "Sistem Afiliasi Properti Terbaik",
    icon: "Megaphone",
    color: "text-red-500",
  },
];

export const footerCols = [
  {
    title: "Tentang Kami",
    links: ["Karir", "Afiliasi", "Edukasi Agen", "Acara", "Berita"],
  },
  {
    title: "Transaksi",
    links: [
      "Komunitas",
      "Tips Jual/Sewa",
      "KPR Syariah",
      "Home Service",
      "Cuan Dari Rumah",
    ],
  },
  {
    title: "Mobile App",
    links: [
      "Kerjasama",
      "Pusat Bantuan",
      "Syarat & Ketentuan",
      "Kebijakan Privasi",
      "Estimasi Nilai Properti",
    ],
  },
];
