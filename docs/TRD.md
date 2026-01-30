# Dokumen Kebutuhan Teknis (TRD)

## 1. Arsitektur Sistem
**Tipe:** Static Site Generation (SSG) dengan Partial Hydration (Islands Architecture).
**Framework:** Astro v5.x
**Versi Node:** v20 (LTS)

### 1.1. Strategi Rendering
- **Statis (Zero JS):** Hero, Fitur, Perbandingan Layanan, Footer.
- **Terhidrasi (Client JS):**
    - `Calculator.astro`: `<app-calculator client:visible />` (Alpine.js/Vanilla).
    - `MobileMenu.astro`: `<nav client:media="(max-width: 768px)" />`.
    - `ContactForm.astro`: `<form client:load />` (Validasi + GTM Push).

## 2. Spesifikasi Komponen

### 2.1. "Interactive Calculator" (Mesin Logika)
Pembeda utama. Harus instan dan bekerja tanpa refresh halaman.

- **Stack:** Alpine.js (disarankan demi kesederhanaan) atau Preact (jika logika semakin kompleks).
- **Logika Rumus (Contoh: Kontraktor Kolam):**
  ```javascript
  const hitungEstimasi = (panjang, lebar, tipe) => {
    const luas = panjang * lebar;
    const hargaDasar = luas * 5000000; // 5jt/m2
    const pengaliTipe = tipe === 'premium' ? 1.5 : 1.0;
    return hargaDasar * pengaliTipe;
  }
  ```
- **Manajemen State:** State lokal reaktif untuk input, output, dan pesan error validasi.

### 2.2. Schema Markup (Data Terstruktur)
Kita akan menggunakan komponen Astro khusus `<SchemaJSONLD />` yang menerima props dan merender `<script type="application/ld+json">`.

**Schema yang Akan Diimplementasikan:**
1.  **LocalBusiness:** Nama, Alamat, Telepon, Rentang Harga, Jam Buka.
2.  **Service:** Nama ("Landing Page High Conversion"), Penyedia, Area Layanan.
3.  **FAQPage:** Untuk bagian Tanya Jawab agar mendapatkan rich snippets.
4.  **BreadcrumbList:** Untuk pemahaman hierarki.

### 2.3. Rasional Teknologi & Strategi

#### 2.3.1. Kenapa Alpine.js dibanding React?
- **Ukuran:** Alpine hanya ~15kB vs React ~130kB+ (tergantung setup).
- **Arsitektur:** Astro itu "static first". Hidrasi React itu mahal (CPU/Jaringan). Alpine bekerja langsung di DOM, menjaga keunggulan kecepatan "HTML-first" yang diperlukan untuk garansi load <2 detik.
- **Kasus Penggunaan:** Interaktivitas kita hanya "taburan" (Kalkulator, Menu), bukan Single Page Application (SPA) penuh. React berlebihan (overkill); Alpine efisien.

#### 2.3.2. Kenapa Strategi "Kalkulator"?
"Kalkulator Interaktif" bukan sekadar fitur; ini adalah **Filter Kualifikasi Prospek**.
- **Psikologi:** Pengguna malas menghubungi bisnis karena "Ketidakpastian Harga". Kalkulator menghapus hambatan ini.
- **Nilai:** Dengan menawarkan kalkulator di halaman klien (misal: "Estimasi Biaya Kolam"), kita mengubah website dari sekadar brosur menjadi *alat bantu (utility)*.
- **Data:** Data input (misal: "kolam 50m2") ditangkap sebagai metadata leads yang detail, memungkinkan klien memprioritaskan prospek bernilai tinggi.

### 2.4. Infrastruktur Analitik ("Spy Pixel")
Kita akan mengimplementasikan wrapper **Data Layer** terpadu untuk mengabstraksi pemanggilan GTM/Facebook Pixel.

**Interface Global:**
```typescript
interface TrackingEvent {
  event: 'view_content' | 'generate_lead' | 'calculate_estimation';
  payload: Record<string, any>;
}

// Fungsi Utilitas
const trackEvent = (eventName, data) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...data,
    timestamp: new Date().toISOString()
  });
}
```

**Pemicu (Triggers):**
- **Pageview:** Otomatis saat dimuat.
- **Interaksi Kalkulator:** Memicu `calculate_estimation` saat pengguna melihat hasil.
- **Klik WhatsApp:** Memicu `generate_lead` dengan label "WA".

## 3. Kebutuhan Performa (Non-Fungsional)

### 3.1. Target Core Web Vitals
- **LCP (Largest Contentful Paint):** < 2.5d (Target < 1.5d).
- **CLS (Cumulative Layout Shift):** < 0.1.
- **INP (Interaction to Next Paint):** < 200ms.

### 3.2. Taktik Optimasi
- **Gambar:** Semua gambar diproses ke `WebP` via `astro:assets`. Komponen `<Image />` harus digunakan dengan dimensi eksplisit untuk mencegah CLS.
- **Skrip:** Skrip pihak ketiga (GTM, Pixel) **HARUS** ditunda (deferred) atau dimuat via `Partytown` (opsional, jika dampak main thread tinggi) untuk menghindari pemblokiran TBT.
- **Font:** Stack font sistem diutamakan (Inter/Roboto), subsetted woff2 jika kustom.

## 4. Pipeline Deployment
- **Platform:** Vercel (Disarankan) atau Netlify.
- **Perintah Build:** `astro build`.
- **Output:** Folder `/dist` berisi HTML/CSS/JS statis.
