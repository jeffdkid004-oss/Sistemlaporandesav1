# Silades Ai Pro - Halaman Pengaturan Config

Paket ini menambahkan halaman baru:

`pengaturan-config.html`

Halaman ini dipakai untuk mengedit:
- Nama desa
- Kecamatan
- Kabupaten
- Alamat desa
- Tahun anggaran
- Nama Kades
- Nama Sekdes
- Nama Bendahara
- Nama PPKD
- Nomor rekening desa
- Kode rekening kegiatan
- Kode rekening belanja

## Cara pakai

1. Buka `pengaturan-config.html` di browser.
2. Edit data sesuai kebutuhan.
3. Klik `Generate File Config`.
4. Download file:
   - `config-desa.js`
   - `config-pejabat.js`
   - `config-rekening.js`
   - `config-kode-rekening.js`
5. Upload file config tersebut ke folder aplikasi yang sama dengan:
   - `silades-ai-pro-full-config-editor.html`
   - `silades-ai-pro-demo-config-editor.html`

## File aplikasi

- `silades-ai-pro-full-config-editor.html`
- `silades-ai-pro-demo-config-editor.html`

Kedua file ini sudah dibuat untuk membaca config:
- `config-desa.js`
- `config-pejabat.js`
- `config-rekening.js`
- `config-kode-rekening.js`

## Catatan

Browser tidak bisa menyimpan langsung ke file hosting. Karena itu halaman pengaturan menghasilkan file config baru untuk di-download.


## Update tombol dashboard

Versi ini sudah menambahkan tombol baru di Dashboard aplikasi:

`⚙️ Pengaturan Config`

Tombol ini membuka halaman:

`pengaturan-config.html`

Letakkan file berikut dalam folder yang sama:
- `silades-ai-pro-full-config-editor.html`
- `silades-ai-pro-demo-config-editor.html`
- `pengaturan-config.html`
- `config-desa.js`
- `config-pejabat.js`
- `config-rekening.js`
- `config-kode-rekening.js`

Catatan:
- Tombol pengaturan diberi class `non-ppkd-menu`, sehingga mengikuti pola menu internal/non-PPKD.
- Untuk keamanan, jangan berikan akses halaman config kepada calon pembeli umum jika aplikasi terhubung ke database asli.
