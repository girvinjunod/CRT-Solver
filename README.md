# Chinese Remainder Theorem Solver
## Deskripsi
Aplikasi web solver untuk Chinese Remainder Theorem(CRT) ini dibuat menggunakan React JS untuk frontend dan Express untuk backend. Aplikasi dapat menerima input berupa sistem kekongruenan linear yang ingin dipecahkan melalui CRT. Input berupa pembagi dan sisa untuk tiap kekongruenan dan jumlah kekongruenan yang diinput dibebaskan ke user. Aplikasi dapat menampilkan jawaban dari CRT beserta langkah-langkah penyelesaian. Aplikasi ini dideploy melalui Azure pada link "https://witty-ocean-0116c780f.azurestaticapps.net/". CI/CD untuk website ini menggunakan github Actions melalui CI/CD yang ada dari Azure.

(Link akan expire pada 7 Juni 2022)

## Dependencies
- Nodejs, install dari https://nodejs.org/en/. Cek apakah sudah terinstall dengan `node -v` dan `npm -v`. Pastikan npm sudah versi latest dengan `npm install npm@latest -g`
- Dependencies lain (seperti React JS) dapat di-install dengan `npm install` saat berada di directory frontend (folder crtsolver) dan backend

## How to Run

### Lokal
#### Set Up
##### Frontend
1. cd ke folder crtsolver
2. Jalankan command ``npm install``
3. Jalankan command ``npm start``
##### Backend
1. cd ke folder backend
2. Jalankan command ``npm install``
3. Jalankan command ``npm start``


#### Menggunakan Web
1. Buka web application di alamat "http://localhost:3000/" dengan web browser versi terbaru (dicoba menggunakan Microsoft Edge)
### Website Hasil Deploy Melalui Azure
1. Pergi ke alamat "https://witty-ocean-0116c780f.azurestaticapps.net/" dengan web browser versi terbaru (dicoba menggunakan Microsoft Edge)

## Cara Menggunakan Website
1. Masukkan nilai pembagi dan sisa per kekongruenan
2. Klik tombol ``Tambah Kekongruenan`` untuk menambahkan kekongruenan ke sistem kekongruenan linear
3. Ulangi langkah 1 dan 2 sampai sistem kekongruenan linear sesuai keinginan
4. Untuk menghapus kekongruenan dari sistem kekongruenan linear, tekan simbol 'X' yang ada di samping kekongruenan
5. Untuk mendapatkan jawaban CRT dari sistem kekongruenan linear, tekan tombol ``Jawaban``
6. Jawaban dapat dilihat di bagian bawah web site beserta metode dan langkah-langkah penyelesaiannya
7. Untuk menggunakan lagi, dapat mengubah sistem kekongruean linear yang ada dan menekan lagi tombol ``Jawaban``

## CI/CD
Dapat dilihat pada github Actions

## Author
- Girvin Junod 13519096
