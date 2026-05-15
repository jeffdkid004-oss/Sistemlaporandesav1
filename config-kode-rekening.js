/*
  CONFIG KODE REKENING KEGIATAN & BELANJA - SILADES AI PRO

  Edit file ini jika ingin mengubah:
  1. Kode rekening kegiatan
  2. Nama kegiatan
  3. Bidang dan sub bidang
  4. Kode rekening belanja
  5. Nama/uraian belanja

  Catatan penting:
  - Jangan mengubah nama variabel: window.SILADES_KODE_REKENING_CONFIG
  - Untuk kegiatan, gunakan struktur:
    { val, text, bid, sub }
  - Untuk belanja, gunakan struktur:
    { label, opts: ["5.2.1 Belanja ..."] }
  - Setelah file ini diedit, upload ulang bersama file HTML aplikasi.
*/

window.SILADES_KODE_REKENING_CONFIG = {
  // KODE REKENING KEGIATAN
  kegiatanGroups: [
            { label: "1. BIDANG PENYELENGGARAAN PEMERINTAHAN DESA", options: [{val: "1.1.01 Penyediaan Penghasilan Tetap dan Tunjangan Kepala Desa", text: "1.1.01 Penyediaan Siltap & Tunjangan Kades", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Siltap, Tunjangan dan Operasional"}, {val: "1.1.02 Penyediaan Penghasilan Tetap dan Tunjangan Perangkat Desa", text: "1.1.02 Penyediaan Siltap & Tunjangan Perangkat Desa", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Siltap, Tunjangan dan Operasional"}, {val: "1.1.03 Penyediaan Jaminan Sosial bagi Kepala Desa dan Perangkat Desa", text: "1.1.03 Penyediaan Jaminan Sosial Kades & Perangkat", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Siltap, Tunjangan dan Operasional"}, {val: "1.1.04 Penyediaan Operasional Pemerintah Desa", text: "1.1.04 Penyediaan Operasional Pemerintah Desa (ATK, Honor, dll)", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Siltap, Tunjangan dan Operasional"}, {val: "1.1.05 Penyediaan Tunjangan BPD", text: "1.1.05 Penyediaan Tunjangan BPD", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Siltap, Tunjangan dan Operasional"}, {val: "1.1.06 Penyediaan Operasional BPD", text: "1.1.06 Penyediaan Operasional BPD", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Siltap, Tunjangan dan Operasional"}, {val: "1.1.07 Penyediaan Insentif/Operasional RT/RW", text: "1.1.07 Penyediaan Insentif/Operasional RT/RW", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Siltap, Tunjangan dan Operasional"}, {val: "1.1.08 Operasional Desa yang bersumber dari dana desa", text: "1.1.08 Operasional Desa yang bersumber dari dana desa", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Siltap, Tunjangan dan Operasional"}, {val: "1.2.01 Penyediaan sarana (aset tetap) perkantoran/pemerintahan", text: "1.2.01 Penyediaan sarana perkantoran", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Sarana dan Prasarana Pemerintahan Desa"}, {val: "1.2.02 Pemeliharaan Gedung/Prasarana Kantor Desa", text: "1.2.02 Pemeliharaan Gedung Kantor Desa", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Sarana dan Prasarana Pemerintahan Desa"}, {val: "1.2.03 Pembangunan/Rehabilitasi Gedung Kantor Desa", text: "1.2.03 Pembangunan/Rehab Gedung Kantor Desa", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Sarana dan Prasarana Pemerintahan Desa"}, {val: "1.3.01 Pelayanan administrasi umum dan kependudukan", text: "1.3.01 Pelayanan administrasi umum & kependudukan", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Adminduk, Capil, Statistik & Kearsipan"}, {val: "1.3.02 Penyusunan/Pendataan/Pemutakhiran Profil Desa", text: "1.3.02 Penyusunan Profil Desa", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Adminduk, Capil, Statistik & Kearsipan"}, {val: "1.3.03 Pengelolaan administrasi dan kearsipan pemerintahan desa", text: "1.3.03 Pengelolaan administrasi & kearsipan desa", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Adminduk, Capil, Statistik & Kearsipan"}, {val: "1.4.01 Penyelenggaraan Musyawarah Perencanaan Desa/Pembahasan APBDes", text: "1.4.01 Musdes Perencanaan (Reguler)", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Tata Praja, Perencanaan, Keuangan & Pelaporan"}, {val: "1.4.03 Penyusunan Dokumen Perencanaan Desa (RPJMDes/RKPDes,dll)", text: "1.4.03 Penyusunan RPJMDes/RKPDes", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Tata Praja, Perencanaan, Keuangan & Pelaporan"}, {val: "1.4.04 Penyusunan Dokumen Keuangan Desa", text: "1.4.04 Penyusunan APBDes/LPJ", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Tata Praja, Perencanaan, Keuangan & Pelaporan"}, {val: "1.5.01 Sertifikasi Tanah Kas Desa", text: "1.5.01 Sertifikasi Tanah Kas Desa", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Pertanahan"}, {val: "1.5.06 Administrasi Pajak Bumi dan Bangunan (PBB)", text: "1.5.06 Administrasi PBB", bid: "Penyelenggaraan Pemerintahan Desa", sub: "Pertanahan"} ]},
            { label: "2. BIDANG PELAKSANAAN PEMBANGUNAN DESA", options: [{val: "2.1.01 Penyelenggaraan PAUD/TK/TPA/TKA/TPQ/Madrasah", text: "2.1.01 Honor Pengajar/Operasional PAUD/TK/TPA", bid: "Pelaksanaan Pembangunan Desa", sub: "Pendidikan"}, {val: "2.1.06 Pembangunan/Rehab Sarana PAUD/TK/TPA", text: "2.1.06 Pembangunan/Rehab Sarana PAUD", bid: "Pelaksanaan Pembangunan Desa", sub: "Pendidikan"}, {val: "2.2.02 Penyelenggaraan Posyandu", text: "2.2.02 Posyandu (PMT, Insentif Kader, dll)", bid: "Pelaksanaan Pembangunan Desa", sub: "Kesehatan"}, {val: "2.2.09 Pembangunan/Rehab Sarana Posyandu/Polindes", text: "2.2.09 Pembangunan/Rehab Posyandu/Polindes", bid: "Pelaksanaan Pembangunan Desa", sub: "Kesehatan"}, {val: "2.3.01 Pemeliharaan Jalan Desa", text: "2.3.01 Pemeliharaan Jalan Desa", bid: "Pelaksanaan Pembangunan Desa", sub: "Pekerjaan Umum dan Penataan Ruang"}, {val: "2.3.10 Pembangunan/Rehabilitasi/Peningkatan Jalan Desa", text: "2.3.10 Pembangunan/Pengerasan Jalan Desa", bid: "Pelaksanaan Pembangunan Desa", sub: "Pekerjaan Umum dan Penataan Ruang"}, {val: "2.3.14 Pembangunan/Rehabilitasi Drainase/Gorong-gorong", text: "2.3.14 Pembangunan Drainase/Gorong-gorong", bid: "Pelaksanaan Pembangunan Desa", sub: "Pekerjaan Umum dan Penataan Ruang"}, {val: "2.4.11 Pembangunan/Rehabilitasi Sumur Bor/Air Bersih", text: "2.4.11 Pembangunan Sumur Bor/Air Bersih", bid: "Pelaksanaan Pembangunan Desa", sub: "Kawasan Permukiman"} ]},
            { label: "3. BIDANG PEMBINAAN KEMASYARAKATAN", options: [{val: "3.1.02 Penguatan Kapasitas Satlinmas", text: "3.1.02 Kapasitas Satlinmas Desa", bid: "Pembinaan Kemasyarakatan", sub: "Ketenteraman dan Ketertiban"}, {val: "3.2.03 Penyelenggaraan Festival Kesenian/HUT RI/Hari Besar", text: "3.2.03 HUT RI / Perayaan Hari Besar", bid: "Pembinaan Kemasyarakatan", sub: "Kebudayaan dan Keagamaan"}, {val: "3.3.06 Pembinaan Karang Taruna/Klub Olah raga", text: "3.3.06 Pembinaan Karang Taruna/Klub Olahraga", bid: "Pembinaan Kemasyarakatan", sub: "Kepemudaan dan Olah Raga"}, {val: "3.4.03 Pembinaan PKK", text: "3.4.03 Pembinaan PKK", bid: "Pembinaan Kemasyarakatan", sub: "Kelembagaan Masyarakat"} ]},
            { label: "4. BIDANG PEMBERDAYAAN MASYARAKAT", options: [{val: "4.2.01 Peningkatan Produksi Tanaman Pangan", text: "4.2.01 Peningkatan Produksi Tanaman Pangan", bid: "Pemberdayaan Masyarakat", sub: "Pertanian dan Peternakan"}, {val: "4.3.02 Peningkatan kapasitas perangkat Desa", text: "4.3.02 Pelatihan/Bimtek Perangkat Desa", bid: "Pemberdayaan Masyarakat", sub: "Peningkatan Kapasitas Aparatur"}, {val: "4.6.01 Pembentukan/Penyertaan Modal BUM Desa", text: "4.6.01 Penyertaan Modal BUM Desa", bid: "Pemberdayaan Masyarakat", sub: "Dukungan Penanaman Modal"} ]},
            { label: "5. BIDANG PENANGGULANGAN BENCANA, DARURAT & MENDESAK", options: [{val: "5.3.00 Keadaan Mendesak (BLT DD)", text: "5.3.00 Keadaan Mendesak (BLT Dana Desa)", bid: "Penanggulangan Bencana, Darurat dan Mendesak", sub: "Keadaan Mendesak"} ]}
        ],

  // KODE REKENING BELANJA
  belanjaGroups: [
                {
                    label: "5.1 BELANJA PEGAWAI", 
                    opts: [
                        "5.1.1 Penghasilan Tetap Kepala Desa", 
                        "5.1.2 Penghasilan Tetap Perangkat Desa", 
                        "5.1.3 Tunjangan Kepala Desa", 
                        "5.1.4 Tunjangan Perangkat Desa", 
                        "5.1.5 Jaminan ketenagakerjaan Kepala Desa", 
                        "5.1.6 Jaminan Ketenagakerjaan Perangkat Desa",
 			"5.2.5.8 Belanja Insentif/Operasional RT",
			"5.2.5.90 Belanja Operasional BPD yang berasal dari BANKAB"

                    ]
                },
                {
                    label: "5.2 BELANJA BARANG DAN JASA", 
                    opts: [
                        "5.2.1 Belanja Alat Tulis dan Benda Pos", 
                        "5.2.2 Belanja Alat-Alat Listrik", 
                        "5.2.3 Belanja Peralatan Rumah Tangga", 
                        "5.2.4 Belanja Konsumsi", 
                        "5.2.5 Belanja Honorarium Petugas", 
                        "5.2.6 Belanja Honorarium Tim yang Melaksanakan Kegiatan", 
                        "5.2.7 Belanja Honorarium Narasumber", 
                        "5.2.8 Belanja Perjalanan Dinas dalam Kabupaten", 
                        "5.2.9 Belanja Perjalanan Dinas luar Kabupaten", 
                        "5.2.10 Belanja Jasa Pemeliharaan Peralatan Kantor", 
                        "5.2.11 Belanja Jasa Pemeliharaan Kendaraan Operasional Desa", 
                        "5.2.12 Belanja Barang yang diserahkan ke Masyarakat", 
                        "5.2.13 Belanja Spanduk"
                    ]
                },
                {
                    label: "5.3 BELANJA MODAL", 
                    opts: [
                        "5.3.1 Belanja Modal Peralatan Kantor", 
                        "5.3.2 Belanja Modal Gedung", 
                        "5.3.3 Belanja modal Kendaraan roda 2", 
                        "5.3.4 Belanja modal Kendaraan roda 4", 
                        "5.3.5 Belanja Upah Tukang-bangunan", 
                        "5.3.6 Belanja Sewa peralatan berat-bangunan"
                    ]
                },
                {
                    label: "5.4 BELANJA TAK TERDUGA", 
                    opts: [
                        "5.4.1 Belanja Bantuan Langsung Tunai"
                    ]
                }
            ]
};
