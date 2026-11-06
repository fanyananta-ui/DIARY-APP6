**Nama:** Fany Ananta Rahmah  
**NIM:** 2430511045  
**Kelas:** 5C  
**Mata Kuliah:** Mobile Multi Platform

# DIARY-APP6

## Deskripsi Aplikasi

Diary App6 merupakan aplikasi catatan harian sederhana berbasis mobile yang dibuat menggunakan React Native dan Expo. Aplikasi ini digunakan untuk menulis, menyimpan, melihat, mencari, dan mengelola catatan harian.

## Fitur Aplikasi

1. **Daftar Diary** – Menampilkan catatan harian yang telah dibuat.
2. **Tambah Diary** – Menambahkan catatan baru dengan judul, isi, dan pilihan mood.
3. **Detail Diary** – Melihat isi catatan secara lengkap.
4. **Pencarian Diary** – Mencari catatan berdasarkan judul atau isi.
5. **Like Diary** – Menyukai dan membatalkan suka pada catatan.
6. **Diary Favorit** – Menampilkan catatan yang telah disukai.
7. **Hapus Diary** – Menghapus catatan yang tidak diperlukan.
8. **Compact Mode** – Mengatur tampilan aplikasi menjadi lebih ringkas.

## Teknologi yang Digunakan

- React Native
- Expo
- TypeScript
- Expo Router

## Struktur Folder

```text
DIARY-APP6/
├── app/
│   ├── (tabs)/
│   ├── detail/
│   └── _layout.tsx
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   └── styles/
└── README.md
```

## Cara Menjalankan Aplikasi

1. Clone repository dari GitHub.
2. Buka folder project melalui VS Code.
3. Install dependencies:

```bash
npm install
```

4. Jalankan aplikasi:

```bash
npx expo start
```