const CONFIG = {
  // Google Apps Script Web App URL (leave empty to use the fallback static mapping below)
  // Example: "https://script.google.com/macros/s/.../exec"
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbwzsnqnzn5Nr-tUWTg30WLheVUVKrkLidEO8H7K3TmY0X8iLTDA6vyQ6Yiv-janRsytTg/exec",

  // Fallback static mapping of Google Drive File IDs (retrieved automatically from folder)
  // To update this automatically, please deploy google-apps-script.gs and paste the Web App URL above.
  assets: {
    video: {
      name: "Video Dokumentasi",
      id: "1yCVY31L0v6GWBMhucZ5zj0UJIpymaGCO", // Placeholder folder ID, replace with actual video file ID or use apps script
      embedUrl: "https://drive.google.com/file/d/1yCVY31L0v6GWBMhucZ5zj0UJIpymaGCO/preview"
    },
    photos: [
      { name: "1. Cover.png", id: "1yCVY31L0v6GWBMhucZ5zj0UJIpymaGCO", tag: "Cover" }
      // The rest of the photos will be loaded from the Google Apps Script once configured.
      // Alternatively, insert the file IDs from the new Google Drive folder here manually.
    ]
  },

  // Owner contact details
  owner: {
    name: "Evi Puspita Sari",
    photoUrl: "https://img.magnific.com/vektor-gratis/ilustrasi-ikon-vektor-kartun-gadis-lucu-berjilbab-duduk-di-kotak-ikon-objek-orang-terisolasi-datar_138676-14639.jpg?semt=ais_hybrid&w=740&q=80",
    whatsapp: "https://api.whatsapp.com/send/?phone=6283815234334&text&type=phone_number&app_absent=0",
    telegram: "https://t.me/Eps26"
  },

  // House Specifications & Info
  details: {
    tipe: "Kontrakan Rumah",
    harga: {
      bulanan: 700000
    },
    spesifikasi: [
      { label: "Harga Sewa", value: "Rp 700.000/bln (Bisa Nego)", icon: "banknote" },
      { label: "Kamar Mandi", value: "1", icon: "droplet" },
      { label: "Pembagian Ruang", value: "Ruang Sekat 1", icon: "layout" },
      { label: "Akses Jalan", value: "Hanya Masuk Motor", icon: "navigation" },
      { label: "Rekomendasi", value: "Karyawan Sendiri / Mahasiswa", icon: "user" }
    ],
    fasilitas: [
      { name: "Gratis Air & Iuran Sampah", desc: "Air sumur bersih melimpah dan iuran kebersihan/sampah bulanan sudah termasuk di dalam biaya sewa.", icon: "droplet" },
      { name: "Listrik Token 900 Watt", desc: "Menggunakan sistem token 900 watt (biaya listrik ditanggung penyewa).", icon: "zap" },
      { name: "Ruang Bersyekat", desc: "Terdapat 1 sekat pemisah ruangan untuk pengaturan area yang lebih baik.", icon: "layout" },
      { name: "Kamar Mandi Dalam", desc: "Dilengkapi 1 kamar mandi di dalam ruangan.", icon: "home" },
      { name: "Opsi Furnitur (Khusus Mahasiswa)", desc: "Jika dibutuhkan, dapat disediakan kasur, bantal, dan kipas angin (lemari dan sprei bawa sendiri).", icon: "briefcase" }
    ],
    lokasi: {
      alamat: "Gang Apun Rt. 01/09, Jalan Raden Sanim, Kelurahan Tanah Baru, Kecamatan Beji, Kota Depok, Jawa Barat 16426",
      jarakStasiun: "± 15 Menit ke Universitas Indonesia (UI) | ± 10 Menit ke RS Graha Permata Ibu | ± 15-20 Menit (4,5 km) ke Stasiun Pondok Cina",
      mapsLink: "https://maps.app.goo.gl/search" // Update map link if needed
    }
  }
};
