// Facility catalog + reverse-lookup helpers.
// Keep this in sync with FACILITIES in AdminDashboardPage.jsx.

export const FACILITIES = {
  "Fasilitas Properti": [
    "Carport 1 Mobil",
    "Carport 2 Mobil",
    "Garasi",
    "Taman Depan",
    "Taman Belakang",
    "Rooftop",
    "Balkon",
    "Kolam Renang",
    "Kolam Ikan",
    "Ruang Jemur",
    "Gudang",
  ],
  "Utilitas": [
    "Listrik 1300 VA",
    "Listrik 2200 VA",
    "Listrik 3500 VA",
    "WiFi Ready",
    "PDAM",
    "Air Sumur Bor",
    "Water Heater",
    "AC Kamar Utama",
    "AC Semua Kamar",
  ],
  "Keamanan & Cluster": [
    "Keamanan 24 Jam",
    "One Gate System",
    "CCTV Kawasan",
    "Rumah Cluster",
    "Bebas Banjir",
    "Sertifikat SHM",
    "Sertifikat HGB",
  ],
  "Interior": [
    "Furnished",
    "Semi Furnished",
    "Unfurnished",
    "Dapur Bersih",
    "Dapur Kotor",
    "Ruang Kerja",
    "Ruang Keluarga",
  ],
  "Dekat Dengan": [
    "Dekat Sekolah",
    "Dekat Universitas",
    "Dekat Rumah Sakit",
    "Dekat Mall",
    "Dekat Pasar",
    "Dekat Tempat Ibadah",
    "Dekat Transportasi Umum",
    "Dekat Tol",
    "Dekat Bandara",
    "Dekat Pusat Kota",
    "Dekat Kantor",
  ],
};

export const CATEGORY_META = {
  "Fasilitas Properti": { color: "#001DF3" },
  "Utilitas": { color: "#00B512" },
  "Keamanan & Cluster": { color: "#00B512" },
  "Interior": { color: "#000066" },
  "Dekat Dengan": { color: "#000066" },
};

/** Given an array of facility names, return { category: [names] } */
export function groupFacilities(list = []) {
  const grouped = {};
  for (const name of list) {
    for (const [cat, items] of Object.entries(FACILITIES)) {
      if (items.includes(name)) {
        grouped[cat] = grouped[cat] || [];
        grouped[cat].push(name);
        break;
      }
    }
  }
  return grouped;
}
