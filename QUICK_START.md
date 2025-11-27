# 🚀 Quick Start Guide

## Instalasi Cepat

### 1. Install Dependencies
```bash
npm install
```

### 2. Generate Placeholder Images
```bash
node scripts/generate-placeholders.js
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Buka Browser
Akses aplikasi di: **http://localhost:3000**

---

## 📋 Fitur yang Sudah Aktif

✅ **Grid Layout Masonry** - Layout 3 kolom responsive  
✅ **Search Bar** - Cari gambar berdasarkan judul, deskripsi, atau kategori  
✅ **Filter Kategori** - Filter: All, Nature, Architecture, People, Food, Animals  
✅ **Lightbox Modal** - Klik gambar untuk view fullscreen  
✅ **Navigasi Keyboard** - `←` `→` untuk navigasi, `Esc` untuk close  
✅ **Touch Gestures** - Swipe kiri/kanan di mobile  
✅ **Lazy Loading** - Gambar di-load bertahap dengan Next/Image  
✅ **Dark Mode** - Toggle di navbar (top-right)  
✅ **Animasi Smooth** - Powered by Framer Motion  

---

## ⌨️ Keyboard Shortcuts (di Lightbox)

- **← (Arrow Left)**: Previous image
- **→ (Arrow Right)**: Next image  
- **Esc**: Close lightbox

---

## 📱 Mobile Gestures

- **Swipe Left**: Next image
- **Swipe Right**: Previous image
- **Tap outside**: Close lightbox

---

## 🎨 Mengganti Gambar dengan Gambar Real

### Option 1: Ganti Placeholder SVG
Simpan gambar real (JPG/PNG) di `public/images/` dengan nama yang sama:
```
public/images/nature1.jpg
public/images/architecture1.jpg
...
```

Lalu update `lib/data.ts` untuk menggunakan `.jpg` atau `.png` extension:
```typescript
src: "/images/nature1.jpg",  // ganti dari .svg ke .jpg
```

### Option 2: Download dari Unsplash/Pexels
Bisa gunakan script tambahan untuk download images:
```bash
# Contoh: download dari Unsplash
curl -o public/images/nature1.jpg https://source.unsplash.com/800x800/?nature
```

---

## 🏗️ Build Production

```bash
npm run build
npm start
```

---

## 🚢 Deploy ke Vercel

1. Push code ke GitHub repository
2. Buka [vercel.com](https://vercel.com) dan sign in
3. Import project dari GitHub
4. Deploy otomatis!

---

## 🛠️ Troubleshooting

### Port 3000 Sudah Dipakai
```bash
# Gunakan port lain
PORT=3001 npm run dev
```

### Images Tidak Muncul
```bash
# Generate ulang placeholder
node scripts/generate-placeholders.js
```

### Build Error
```bash
# Clear cache dan rebuild
rm -rf .next
npm run build
```

---

## 📚 Dokumentasi Lengkap

Baca **README.md** untuk dokumentasi lengkap struktur project dan customization.

---

**Selamat Mencoba! 🎉**
