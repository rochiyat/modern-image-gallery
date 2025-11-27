# 📦 Installation Guide - Modern Image Gallery

## ✅ Project Status: COMPLETE

Semua fitur sudah diimplementasikan dan siap digunakan!

---

## 🚀 Quick Start (3 Langkah)

### 1️⃣ Install Dependencies
```bash
npm install
```

**Dependencies yang akan terinstall:**
- next (15.x) - Framework
- react & react-dom (19.x) - UI Library
- framer-motion (11.x) - Animations
- zustand (5.x) - State Management
- next-themes (0.4.x) - Dark Mode
- lucide-react (0.468.x) - Icons
- tailwindcss (3.4.x) - Styling
- typescript (5.x) - Type Safety
- sharp (0.33.x) - Image Optimization

### 2️⃣ Generate Placeholder Images
```bash
node scripts/generate-placeholders.js
```

**Output:**
```
Created nature1.svg
Created nature2.svg
...
✅ All placeholder images generated successfully!
```

### 3️⃣ Run Development Server
```bash
npm run dev
```

**Output:**
```
▲ Next.js 15.5.6
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in 2.5s
```

**Buka browser:** http://localhost:3000

---

## 📁 Project Structure

```
modern-image-gallery/
├── 📄 Configuration Files
│   ├── package.json           # Dependencies & scripts
│   ├── tsconfig.json          # TypeScript config
│   ├── tailwind.config.ts     # Tailwind CSS config
│   ├── next.config.mjs        # Next.js config
│   └── postcss.config.mjs     # PostCSS config
│
├── 📱 App Directory (Next.js 15 App Router)
│   ├── layout.tsx             # Root layout dengan theme provider
│   ├── page.tsx               # Gallery utama (search, filter, grid)
│   └── globals.css            # Global styles & CSS variables
│
├── 🧩 Components
│   ├── ui/
│   │   ├── button.tsx         # Button component (Shadcn-style)
│   │   └── input.tsx          # Input component (Shadcn-style)
│   ├── GalleryGrid.tsx        # Masonry grid layout (3 kolom)
│   ├── ImageCard.tsx          # Card dengan hover effect & animations
│   ├── Lightbox.tsx           # Fullscreen modal (keyboard + gestures)
│   ├── FilterBar.tsx          # Category filter buttons
│   ├── SearchBar.tsx          # Search input dengan icon
│   ├── Navbar.tsx             # Navigation bar dengan title
│   ├── ThemeToggle.tsx        # Dark/light mode toggle
│   └── ThemeProvider.tsx      # next-themes wrapper
│
├── 📚 Library
│   ├── data.ts                # Image data (20 images)
│   ├── store.ts               # Zustand store (lightbox state)
│   └── utils.ts               # Utility functions (cn)
│
├── 🖼️ Public Assets
│   └── images/                # 20 SVG placeholder images
│       ├── nature1-4.svg
│       ├── architecture1-4.svg
│       ├── people1-4.svg
│       ├── food1-4.svg
│       └── animals1-4.svg
│
├── 🔧 Scripts
│   └── generate-placeholders.js  # Generate SVG placeholders
│
└── 📖 Documentation
    ├── README.md              # Full documentation
    ├── QUICK_START.md         # Quick start guide
    ├── FEATURES.md            # Feature list lengkap
    └── INSTALLATION_GUIDE.md  # (this file)
```

---

## 🎯 Verification Checklist

Setelah menjalankan `npm run dev`, cek apakah semua fitur berikut berfungsi:

### ✅ Visual Components
- [ ] Navbar muncul di atas dengan judul "Image Gallery"
- [ ] Dark mode toggle button di navbar (top-right)
- [ ] Search bar terlihat di bawah judul
- [ ] Filter buttons (All, Nature, Architecture, People, Food, Animals)
- [ ] Grid dengan 20 gambar placeholder berwarna-warni
- [ ] Hover pada gambar menampilkan overlay dengan info

### ✅ Search & Filter
- [ ] Ketik di search bar → gambar ter-filter real-time
- [ ] Klik category button → filter berubah
- [ ] Counter menunjukkan "Showing X of 20 images"

### ✅ Lightbox Functionality
- [ ] Klik gambar → lightbox terbuka
- [ ] Background gelap semi-transparan
- [ ] Gambar besar di tengah layar
- [ ] Title, description, category badge tampil
- [ ] Image counter (1/20) terlihat
- [ ] Close button (X) di top-right
- [ ] Navigation buttons (< >) di kiri-kanan

### ✅ Keyboard Navigation
- [ ] Tekan `←` → previous image
- [ ] Tekan `→` → next image
- [ ] Tekan `Esc` → lightbox close

### ✅ Mobile (Test dengan Dev Tools Responsive Mode)
- [ ] Layout 1 kolom di mobile (<768px)
- [ ] Layout 2 kolom di tablet (768-1024px)
- [ ] Layout 3 kolom di desktop (>1024px)
- [ ] Touch gestures: swipe left/right di lightbox

### ✅ Dark Mode
- [ ] Klik toggle → theme berubah smooth
- [ ] Semua komponen support dark mode
- [ ] Refresh page → theme preference tersimpan

### ✅ Animations
- [ ] Image cards fade-in saat pertama load
- [ ] Hover pada card → scale up + shadow
- [ ] Lightbox open → smooth zoom in
- [ ] Navigate di lightbox → slide animation

---

## 🐛 Troubleshooting

### Problem: Port 3000 sudah dipakai
**Solution:**
```bash
# Windows
set PORT=3001 && npm run dev

# macOS/Linux
PORT=3001 npm run dev
```

### Problem: Images tidak muncul
**Solution:**
```bash
# Pastikan placeholder sudah digenerate
node scripts/generate-placeholders.js

# Atau cek manual folder public/images/
ls public/images/
```

### Problem: Build error
**Solution:**
```bash
# Clear cache dan rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Problem: TypeScript errors
**Solution:**
```bash
# Update tsconfig.json strict mode jika perlu
# Atau jalankan type check
npm run build
```

### Problem: Dark mode tidak berfungsi
**Solution:**
- Clear browser localStorage
- Hard refresh (Ctrl+Shift+R)
- Check browser console for errors

---

## 📦 Build for Production

### Local Production Build
```bash
npm run build
npm start
```

### Vercel Deployment
```bash
# 1. Push ke GitHub
git init
git add .
git commit -m "Initial commit: Modern Image Gallery"
git remote add origin https://github.com/username/repo.git
git push -u origin main

# 2. Di Vercel Dashboard
# - Import from GitHub
# - Deploy
```

### Manual Deployment
```bash
# Build
npm run build

# Export static (jika tidak pakai server)
# Edit next.config.mjs: add `output: 'export'`
npm run build

# Upload folder 'out/' ke hosting
```

---

## 🎨 Customization Guide

### Ganti Gambar Real

**Option 1: Replace SVG dengan JPEG/PNG**
1. Simpan gambar di `public/images/`
2. Rename: `nature1.jpg`, `architecture1.jpg`, etc.
3. Update `lib/data.ts`:
   ```typescript
   src: "/images/nature1.jpg",  // ganti .svg → .jpg
   ```

**Option 2: Tambah Gambar Baru**
1. Tambah gambar ke `public/images/`
2. Edit `lib/data.ts`:
   ```typescript
   {
     id: 21,
     src: "/images/your-image.jpg",
     title: "Your Title",
     category: "Nature",
     description: "Description here",
   }
   ```

### Tambah Kategori Baru

Edit `lib/data.ts`:
```typescript
export const categories = [
  "All", 
  "Nature", 
  "Architecture",
  "YourNewCategory"  // ← tambah disini
];
```

### Ubah Warna Theme

Edit `app/globals.css`:
```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* ← ubah warna primary */
  /* ... */
}
```

### Ubah Layout Grid

Edit `components/GalleryGrid.tsx`:
```typescript
// Ganti dari 3 kolom ke 4 kolom
const cols: ImageData[][] = [[], [], [], []];  // ← tambah 1 array
images.forEach((image, index) => {
  cols[index % 4].push(image);  // ← ganti 3 → 4
});
```

Dan update Tailwind classes:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                                                    {/* ↑ ganti 3 → 4 */}
```

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Zustand](https://github.com/pmndrs/zustand)
- [next-themes](https://github.com/pacocoursey/next-themes)

---

## 📞 Support

Jika menemukan bug atau ada pertanyaan:
1. Check `FEATURES.md` untuk dokumentasi fitur lengkap
2. Check `README.md` untuk overview project
3. Check browser console untuk error messages

---

**✨ Selamat! Project siap digunakan! ✨**

Run `npm run dev` dan buka http://localhost:3000
