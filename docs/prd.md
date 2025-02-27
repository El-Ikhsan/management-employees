# Dokumen Persyaratan Produk: Sistem Manajemen Cuti

## 1. Pendahuluan

### 1.1 Tujuan
Dokumen ini menguraikan persyaratan untuk Sistem Manajemen Cuti yang akan memperlancar proses pengajuan, persetujuan, dan pelacakan cuti karyawan di berbagai divisi dalam organisasi.

### 1.2 Ruang Lingkup
Sistem ini akan memungkinkan karyawan untuk mengajukan cuti, manajer untuk meninjau dan menanggapi pengajuan ini, dan administrator untuk mengkonfigurasi jenis cuti dan menghasilkan laporan. Sistem akan dibangun menggunakan Vue.js untuk frontend dan Laravel untuk backend.

### 1.3 Definisi
- **Cuti**: Setiap ketidakhadiran resmi dari pekerjaan
- **Divisi**: Departemen atau unit tertentu dalam organisasi
- **Status Cuti**: Keadaan saat ini dari pengajuan cuti (Tertunda, Disetujui, Ditolak)

## 2. Gambaran Produk

### 2.1 Perspektif Produk
Sistem Manajemen Cuti akan menggantikan proses pengajuan cuti manual, menyediakan solusi digital terpusat untuk mengelola ketidakhadiran karyawan.

### 2.2 Kelas Pengguna dan Karakteristiknya
- **Karyawan**: Mengajukan permohonan cuti, melihat saldo cuti, dan melacak status pengajuan
- **Manajer**: Meninjau dan menyetujui/menolak pengajuan cuti dari divisi mereka
- **Administrator**: Mengkonfigurasi pengaturan sistem, mengelola divisi, dan menghasilkan laporan

### 2.3 Lingkungan Operasi
- Aplikasi berbasis web yang dapat diakses melalui browser modern
- Backend: PHP 8.1+, Laravel 10+
- Frontend: Vue.js 3+
- Database: MySQL 8.0+ atau PostgreSQL 14+

## 3. Persyaratan Fungsional

### 3.1 Autentikasi dan Otorisasi Pengguna
- FR1.1: Pendaftaran pengguna dengan verifikasi email
- FR1.2: Login aman dengan persyaratan kata sandi
- FR1.3: Kontrol akses berbasis peran (Karyawan, Manajer, Administrator)
- FR1.4: Fungsi pengaturan ulang kata sandi
- FR1.5: Manajemen sesi dengan batas waktu otomatis

### 3.2 Manajemen Divisi
- FR2.1: Membuat, mengedit, dan mengarsipkan divisi
- FR2.2: Menetapkan karyawan ke divisi
- FR2.3: Menetapkan manajer ke divisi
- FR2.4: Melihat struktur dan hierarki divisi
- FR2.5: Menghasilkan laporan khusus divisi

### 3.3 Manajemen Jenis Cuti
- FR3.1: Mengkonfigurasi berbagai jenis cuti (misalnya, Tahunan, Sakit, Orang Tua, Duka Cita)
- FR3.2: Menetapkan hak dan aturan akumulasi jenis cuti
- FR3.3: Mengkonfigurasi persyaratan persetujuan jenis cuti
- FR3.4: Mengaktifkan/menonaktifkan jenis cuti tertentu
- FR3.5: Menetapkan hari berturut-turut maksimum per jenis cuti

### 3.4 Proses Pengajuan Cuti
- FR4.1: Mengajukan permohonan cuti dengan tanggal mulai/akhir
- FR4.2: Secara otomatis menghitung hari kerja vs. akhir pekan/hari libur
- FR4.3: Melampirkan dokumen pendukung untuk pengajuan cuti
- FR4.4: Melacak status pengajuan cuti (Tertunda, Disetujui, Ditolak)
- FR4.5: Memberi tahu karyawan tentang perubahan status
- FR4.6: Memungkinkan pembatalan pengajuan cuti (jika masih tertunda)
- FR4.7: Mengaktifkan perpanjangan cuti dengan persetujuan tambahan

### 3.5 Alur Kerja Persetujuan Cuti
- FR5.1: Manajer menerima notifikasi untuk pengajuan cuti baru
- FR5.2: Menyetujui atau menolak pengajuan cuti dengan komentar
- FR5.3: Mendelegasikan wewenang persetujuan selama ketidakhadiran manajer
- FR5.4: Mengkonfigurasi persetujuan multi-level untuk jenis cuti tertentu
- FR5.5: Mengatur persetujuan otomatis untuk jenis cuti tertentu

### 3.6 Dasbor dan Pelaporan
- FR6.1: Dasbor karyawan yang menunjukkan saldo cuti dan riwayat pengajuan
- FR6.2: Dasbor manajer yang menampilkan ketidakhadiran anggota tim dan persetujuan tertunda
- FR6.3: Tampilan kalender ketidakhadiran seluruh divisi
- FR6.4: Menghasilkan laporan penggunaan cuti berdasarkan jenis, divisi, periode
- FR6.5: Mengekspor laporan ke format PDF, Excel, atau CSV

### 3.7 Notifikasi
- FR7.1: Notifikasi email untuk perubahan status pengajuan cuti
- FR7.2: Notifikasi dalam aplikasi untuk tindakan tertunda
- FR7.3: Notifikasi pengingat untuk manajer dengan pengajuan tertunda
- FR7.4: Integrasi kalender untuk cuti yang disetujui

## 4. Persyaratan Non-Fungsional

### 4.1 Kinerja
- NFR1.1: Waktu pemuatan halaman < 2 detik dalam beban normal
- NFR1.2: Mendukung 100+ pengguna bersamaan
- NFR1.3: Menangani 1000+ pengajuan cuti per bulan

### 4.2 Keamanan
- NFR2.1: Enkripsi HTTPS/TLS untuk semua transmisi data
- NFR2.2: Enkripsi data untuk informasi sensitif
- NFR2.3: Perlindungan CSRF
- NFR2.4: Validasi dan sanitasi input
- NFR2.5: Audit dan pembaruan keamanan secara berkala

### 4.3 Keandalan
- NFR3.1: Waktu aktif sistem 99,9%
- NFR3.2: Pencadangan database otomatis
- NFR3.3: Pencatatan dan pemantauan kesalahan

### 4.4 Kegunaan
- NFR4.1: Desain responsif untuk perangkat mobile dan desktop
- NFR4.2: Antarmuka pengguna yang intuitif memerlukan pelatihan minimal
- NFR4.3: Pesan kesalahan dan panduan pengguna yang jelas
- NFR4.4: Kepatuhan aksesibilitas (WCAG 2.1 AA)

### 4.5 Skalabilitas
- NFR5.1: Mendukung pertumbuhan organisasi hingga 1000+ karyawan
- NFR5.2: Arsitektur modular untuk memungkinkan ekspansi di masa depan

## 5. Persyaratan Data

### 5.1 Entitas Data
- Pengguna (ID, Nama, Email, Kata Sandi, Peran, ID_Divisi)
- Divisi (ID, Nama, Deskripsi, ID_Manajer)
- Jenis_Cuti (ID, Nama, Deskripsi, Hari_Maksimum, Memerlukan_Dokumen)
- Pengajuan_Cuti (ID, ID_Pengguna, ID_Jenis_Cuti, Tanggal_Mulai, Tanggal_Akhir, Status, Alasan, Dokumen)
- Saldo_Cuti (ID_Pengguna, ID_Jenis_Cuti, Hari_Tersedia, Hari_Terpakai, Tahun)
- Notifikasi (ID, ID_Pengguna, Pesan, Status_Dibaca, Dibuat_Pada)

### 5.2 Hubungan Data
- Pengguna termasuk dalam Divisi
- Divisi memiliki banyak Pengguna
- Pengguna memiliki banyak Pengajuan_Cuti
- Pengajuan_Cuti termasuk dalam Jenis_Cuti
- Pengguna memiliki banyak Saldo_Cuti

## 6. Persyaratan Antarmuka Pengguna

### 6.1 Persyaratan UI Umum
- Antarmuka yang bersih dan modern menggunakan desain responsif
- Skema warna dan navigasi yang konsisten
- Indikator pemuatan untuk operasi asinkron

### 6.2 Layar Utama
- Layar Login/Pendaftaran
- Dasbor karyawan dengan saldo cuti dan riwayat pengajuan
- Formulir pengajuan cuti dengan pemilih tanggal dan opsi jenis
- Antarmuka persetujuan manajer dengan pengajuan tertunda
- Tampilan kalender ketidakhadiran tim
- Panel konfigurasi administratif
- Antarmuka pelaporan dengan filter dan opsi ekspor

## 7. Persyaratan Teknis

### 7.1 Frontend
- Vue.js 3 dengan Composition API
- Vuex untuk manajemen state
- Vue Router untuk navigasi
- Axios untuk komunikasi API
- Komponen Vue datepicker untuk pemilihan tanggal
- Chart.js untuk visualisasi dasbor

### 7.2 Backend
- Framework Laravel 10+
- Arsitektur API RESTful
- Laravel Sanctum untuk autentikasi
- Eloquent ORM untuk operasi database
- Laravel Notifications untuk peringatan email/dalam aplikasi
- Laravel Scheduler untuk tugas berulang

### 7.3 Database
- Database relasional (MySQL/PostgreSQL)
- Script migrasi untuk manajemen skema
- Seeders untuk populasi data awal

## 8. Tahapan Implementasi

### 8.1 Tahap 1: Fungsionalitas Inti
- Autentikasi pengguna dan manajemen profil dasar
- Pengaturan divisi dan penugasan karyawan
- Konfigurasi jenis cuti dasar
- Pengajuan cuti dan alur kerja persetujuan
- Notifikasi email sederhana

### 8.2 Tahap 2: Fitur yang Ditingkatkan
- Pelaporan dan analitik lanjutan
- Integrasi kalender
- Kemampuan lampiran dokumen
- Alur kerja persetujuan multi-level
- Visualisasi dasbor yang ditingkatkan

### 8.3 Tahap 3: Optimasi dan Ekstensi
- Aplikasi mobile
- Integrasi API dengan sistem HR
- Aturan akumulasi cuti lanjutan
- Verifikasi geolokasi (opsional)
- Analitik dan peramalan lanjutan

## 9. Asumsi dan Batasan

### 9.1 Asumsi
- Pengguna memiliki akses internet yang andal
- Sistem email tersedia untuk notifikasi
- Struktur organisasi relatif stabil
- Kompatibilitas browser dengan Chrome, Firefox, Safari, Edge

### 9.2 Batasan
- Timeline pengembangan 3-4 bulan
- Kepatuhan terhadap hukum ketenagakerjaan dan peraturan lokal
- Integrasi dengan sistem yang ada sesuai kebutuhan

## 10. Kriteria Penerimaan

- Semua persyaratan fungsional diimplementasikan dan diuji
- Sistem dapat diakses pada browser dan perangkat yang ditentukan
- Persyaratan kinerja terpenuhi di bawah pengujian beban
- Pengujian keamanan selesai tanpa kerentanan kritis
- Pengujian penerimaan pengguna selesai dengan persetujuan pemangku kepentingan
