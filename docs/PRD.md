# Dokumen Kebutuhan Produk (PRD)

## 1. Ringkasan Proyek
**Nama Produk:** Layanan Landing Page Performa Tinggi (Kode Internal: *ConversionEngine*)
**Deskripsi:** Layanan agensi khusus yang menawarkan pembuatan landing page dengan konversi tinggi untuk pemilik bisnis jasa (UKM). Berbeda dengan "web profil" biasa, halaman ini direkayasa sebagai alat percakapan menggunakan metrik performa ketat, logika interaktif, dan pelacakan canggih.
**Output Utama:** Landing Page (LP) Agensi yang dibangun dengan Astro untuk mengubah pemilik bisnis menjadi leads.

## 2. Tujuan Bisnis
- **Diferensiasi:** Beralih dari "desain web komoditas" ke "rekayasa performa."
- **Target Audiens:** Fokus Awal: **Kontraktor Renovasi / Interior Design** (High Ticket, Trust Issue Tinggi).
- **Nilai Tawar (Value Proposition):**
    - **Logika:** Alat interaktif menjawab pertanyaan "Berapa harganya?" secara instan.
    - **SEO:** Data terstruktur berbicara langsung dengan Google.
    - **Kecepatan:** Jaminan waktu muat (load time) di bawah 2 detik.
    - **Data:** Infrastruktur analitik ("Spy Pixel") sudah terpasang.

## 3. "4 Komponen Premium" (Fitur Utama)

### 3.1. Kalkulator Interaktif (Layer Logika)
- **Masalah:** Pengguna tidak jadi membeli karena takut biaya tersembunyi.
- **Solusi:** Kalkulator berbasis JS kustom.
- **Implementasi (Astro Island):**
    - **Input:** Slider/input angka (misal: Luas area, Durasi, Kualitas Bahan).
    - **Logika:** `(Input A * Tarif) + Biaya Tetap = Estimasi`.
    - **Output:** Kisaran harga estimasi real-time.
    - **Teknologi:** Integrasi Alpine.js atau Preact di Astro.
    - **User Story:** "Sebagai klien kontraktor kolam renang, saya ingin pengunjung menghitung kasar biaya kolam agar saya hanya bicara dengan prospek yang serius."

### 3.2. Arsitektur Data Terstruktur (Layer SEO)
- **Masalah:** Situs bagus tapi Google tidak mengerti isinya.
- **Solusi:** Injeksi JSON-LD.
- **Implementasi:**
    - Schema `LocalBusiness` dengan `geo`, `openingHours`, `priceRange`.
    - Schema `Review` untuk rich snippets (bintang di pencarian).
    - Schema `FAQPage`.
    - **Teknologi:** Komponen Astro `<Schema />` yang menyuntikkan JSON-LD mentah ke `<head>`.

### 3.3. Optimasi "Speed Demon" (Layer Performa)
- **Masalah:** Latensi membunuh konversi (Data Amazon: 1 detik delay = -10% penjualan).
- **Solusi:** Obsesi pada Core Web Vitals.
- **Implementasi:**
    - **Gambar:** Konversi `.webp` / `.avif` + atribut width/height untuk mencegah CLS.
    - **Loading:** Lazy load semua yang ada di bawah lipatan layar (below the fold).
    - **Bundling:** Minifikasi Vite.
    - **Target:** Skor Lighthouse 95+ (Mobile).
    - **Teknologi:** Arsitektur default Astro (Zero-JS-by-default).

### 3.4. Infrastruktur Pelacakan Konversi (Layer Data)
- **Masalah:** Beriklan secara "buta".
- **Solusi:** Pelacakan event (kejadian) yang granular.
- **Implementasi:**
    - **Wadah GTM:** Sudah dimuat sebelumnya.
    - **Event:** `Lead` (Kirim Formulir), `Contact` (Klik WhatsApp), `ViewContent` (Kedalaman scroll).
    - **Teknologi:** `window.dataLayer.push()` pada interaksi kunci via utilitas JS terpisah.

### 3.5. Layanan "Ghost Audit" Manual (Strategi Lead Magnet)
- **Status:** MVP Manual (Zero Coding).
- **Proses:**
    - Kita mencari prospek (dari iklan IG/Google).
    - Melakukan audit manual 5 menit (Cek Pixel, Speed, Logic).
    - Mengirimkan laporan personal via WA/Email sebagai "pintu masuk".
- **Tujuan:** Pendekatan personal yang lebih tajam daripada tools otomatis di tahap awal.

### 3.6. Sticky WhatsApp Rotator (Konversi Lokal)
- **Masalah:** User Indonesia malas mencari tombol kontak.
- **Solusi:** Tombol WA Melayang yang selalu terlihat.
- **Fitur:**
    - **Sticky:** Selalu ada di pojok kanan bawah saat scroll.
    - **Rotator:** Jika punya banyak CS, bisa digilir (CS 1, CS 2).
### 3.7. "Live Performance Proof" (Pembuktian Langsung)
- **Konsep:** "Walk the Talk". Tampilkan metrik performa website ini sendiri secara transparan.
- **Implementasi:**
    - **Floating Badge:** Widget kecil di pojok kiri bawah yang menampilkan:
        - "Lighthouse Score: 100 🟢"
        - "Page Size: 18kb ⚡"
        - "Load Time: 0.4s 🚀"
    - **How It Works Section:** Bagian transparan yang menjelaskan stack teknis (Astro + Alpine) yang dipakai di halaman ini, membedakannya dari WordPress.
- **Tujuan:** Membangun *Authority* instan. "Kami menjual Speed, dan lihat sendiri, website ini ngebut."

## 4. Stack Teknis
- **Framework:** **Astro** (Static Site Generation utama, Islands untuk interaktivitas).
- **Styling:** **Tailwind CSS** (Utility-first, bundle CSS minimal).
- **Interaktivitas:** **Alpine.js** (Manipulasi DOM ringan untuk menu/modal) atau **Vanilla JS**.
- **Alat Build:** **Vite**.
- **Deployment:** Vercel / Netlify / Cloudflare Pages.

## 5. Arsitektur Situs (LP Agensi)
1.  **Hero Section:**
    - Headline: "Web Anda Lambat? Anda Membakar Uang."
    - Subhead: "Jasa Landing Page High-Performance dengan Garansi Load < 2 Detik."
    - CTA: "Audit Web Gratis" / "Lihat Demo".
2.  **Seksi "Demo Interaktif":**
    - Contoh langsung Kalkulator (misal: "Hitung Potensi Revenue Hilang" berdasarkan waktu load website).
3.  **Seksi "Speed Test":**
    - Perbandingan visual: "Web Biasa (8s)" vs "Web Kami (1.2s)".
4.  **Paket Layanan:**
    - 3 Tingkatan (Basic, Performance, Dominator).
5.  **Portofolio/Studi Kasus:**
    - Metrik Sebelum/Sesudah.
6.  **Footer:**
    - Link, Sosmed, Hak Cipta.

## 6. Kebutuhan Fungsional
- **Responsif:** Desain Mobile-first (karena sebagian besar trafik iklan dari HP).
- **Dark Mode:** Valid, tapi prioritaskan warna kontras tinggi "terpercaya" (Biru/Putih) untuk B2B.
- **Formulir:** Netlify Forms atau interceptor link WA sederhana untuk V1.
