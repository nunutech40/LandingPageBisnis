# SOP Audit Website Manual ("The Ghost Audit")

Dokumen ini adalah panduan langkah demi langkah untuk melakukan audit website calon klien secara manual. Tujuannya adalah menemukan "celah kesalahan" di website mereka yang bisa kita tawarkan solusinya.

**Waktu Pengerjaan:** 5-10 Menit per Website.
**Tools Wajib:**
1.  **Google PageSpeed Insights** (Cek Kecepatan)
2.  **Wappalyzer** (Chrome Extension - Cek Teknologi/Pixel)
3.  **Mata Telanjang** (Cek Copywriting & Flow)

---

## Langkah 1: Cek "Spy Pixel" (Potensi Bocor Iklan)
Pebisnis benci rugi. Kalau mereka iklan tapi gak tracking data, itu "dosa besar".

1.  Buka website target.
2.  Klik Extension **Wappalyzer** atau **Meta Pixel Helper**.
3.  **Cek:** Apakah ada *Facebook Pixel* atau *Google Analytics*?
    *   **Jika TIDAK ADA:**  🚨 **TEMUAN FATAL.**
    *   *Jualan Kamu:* "Pak, saya cek bapak iklan di IG, tapi di web gak ada Pixel. Bapak 'membuang' data pengunjung yang sudah bayar mahal."

## Langkah 2: Cek "Speed Demon" (Kecepatan)
1.  Buka [PageSpeed Insights](https://pagespeed.web.dev/).
2.  Masukkan URL klien. Tunggu hasil **Mobile**.
3.  **Cek Skor:**
    *   **Merah (0-49):** 🚨 **SASARAN EMPUK.**
    *   *Jualan Kamu:* "Skor web Bapak 35. Menurut data Google, 50% pengunjung kabur kalau loading kayak gini. Sayang budget iklannya."

## Langkah 3: Cek "Logic/Calculator" (Interaksi)
1.  Lihat apakah hanya ada tombol "Hubungi Kami" atau "WA"?
2.  Apakah ada cara user mengetahui estimasi harga?
    *   **Jika TIDAK ADA:**
    *   *Jualan Kamu:* "Orang malas nanya kalau buta harga, Pak. Gimana kalau kita pasang **Simulasi Biaya** supaya yang WA bapak itu orang yang serius dan sudah tau budget?"

## Langkah 4: Cek "Trust Signals" (Struktur SEO)
1.  Cek di Google: Ketik `site:namaweblien.com`.
2.  Lihat hasilnya di Google:
    *   Apakah ada bintang-bintang (Review)?
    *   Apakah deskripsinya menarik?
    *   **Jika TIDAK:**
    *   *Jualan Kamu:* "Di Google tampilan Bapak biasa aja. Saya bisa bikin ada bintang limanya biar lebih menarik dibanding kompetitor."

---

## Template Laporan Audit (Dikirim via WA/Email)

Jangan kirim teknis njelimet. Kirim bahasa "Duit".

**Subjek:** Review Singkat Website [Nama Bisnis] - Ada 3 Celah Fatal

> Halo Pak [Nama],
>
> Saya baru lihat iklan Bapak di IG dan iseng cek websitenya ([URL]). Saya menemukan 3 hal yang sayang banget kalau didiamkan (bikin boncos iklan):
>
> 1.  ❌ **Tidak ada 'CCTV' (Pixel):** Bapak keluar uang iklan, tapi tidak merekam data pengunjungnya.
> 2.  ❌ **Loading Lambat (Skor: 35/100):** Terlalu berat di HP, potensi 40% pengunjung tutup web sebelum baca.
> 3.  ❌ **Tidak ada Filter Harga:** User ragu mau WA karena takut kemahalan.
>
> Saya ada solusi simpel (termasuk fitur Kalkulator Otomatis biar CS gak capek jawab pertanyaan harga).
>
> Kalau boleh saya kirimkan contoh demonya?
>
> [Nama Kamu]
> *Lead Developer*
