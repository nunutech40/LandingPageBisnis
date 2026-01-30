# Agensi Landing Page Performa Tinggi (Proyek: ConversionEngine)

## 🚀 Ringkasan
**"Landing Page bukan Karya Seni, tapi Alat Konversi."**

Proyek ini adalah etalase digital untuk agensi web spesialis yang membuat landing page berbasis data dan performa tinggi untuk bisnis jasa. Kami membedakan diri dengan menawarkan nilai rekayasa (engineering) yang nyata dibanding sekadar desain visual.

### 4 Pilar Layanan ("Bumbu Rahasia")
1.  **Kalkulator Interaktif:** Logika kustom untuk memfilter prospek dan memberikan nilai instan.
2.  **Arsitek Schema Markup:** JSON-LD tingkat lanjut untuk dominasi Rich Snippets.
3.  **Speed Demon:** Teroptimasi Core Web Vitals (Load < 2s).
4.  **Spy Pixel Setup:** Infrastruktur lengkap GTM/Facebook CAPI.

## 🛠 Tech Stack
- **Inti:** [Astro](https://astro.build) (Static Site Generation untuk kecepatan maksimal)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) (v4)
- **Interaktivitas:** [Alpine.js](https://alpinejs.dev) (Logika ringan)
- **Build:** Vite

## 📂 Struktur Proyek
```
/
├── docs/
│   ├── PRD.md            # Kebutuhan Produk (Logika Bisnis, Fitur)
│   ├── TRD.md            # Kebutuhan Teknis (Arsitektur, Performa)
│   ├── SEO_Strategy.md   # Checklist Halaman Satu Google
│   └── Manual_Audit_SOP.md # Cara Audit Klien Manual
├── src/                  # Kode sumber Astro
├── run_app.command       # 🟢 Double click untuk menjalankan App
└── kill_servers.command  # 🔴 Double click untuk mematikan semua server
```

## 🏃‍♂️ Cara Menjalankan (One-Click)
Kami telah menyediakan script eksekusi otomatis agar tidak perlu mengetik perintah terminal.

### 1. Menyalakan Aplikasi 🟢
Klik dua kali file **`run_app.command`**.
*   Otomatis menjalankan server (`npm run dev`).
*   Otomatis membuka browser ke `http://localhost:4321`.

### 2. Mematikan Aplikasi (Wajib jika Error) 🔴
Jika port nyangkut atau server error, klik dua kali **`kill_servers.command`**.
*   Ini akan "membunuh" semua proses Astro/Node yang berjalan di background.
*   Gunakan ini sebelum menjalankan aplikasi project lain.

## 📈 Roadmap (Active Phase: 3)
- [x] Inisialisasi Proyek Astro
- [x] Setup Layout & SEO Foundation
- [ ] Bangun Komponen "Kalkulator" (Island) -> **NEXT**
- [ ] Implementasi Seksi Landing Page
- [ ] Integrasi GTM & Analytics

## 📝 Dokumentasi
Lihat folder `docs/` untuk panduan lengkap strategi bisnis & teknis.
