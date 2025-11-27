# 🖼️ Image Gallery with Lightbox

A beautiful, feature-rich image gallery built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Masonry Grid Layout** - Responsive 3-column layout (desktop), 2-column (tablet), 1-column (mobile)
- 🔍 **Search Functionality** - Filter images by title, description, or category
- 🏷️ **Category Filters** - Filter by Nature, Architecture, People, Food, Animals
- 🖼️ **Lightbox Modal** - Full-screen image viewer with smooth animations
- ⌨️ **Keyboard Navigation** - Use arrow keys (←/→) and Esc to navigate
- 📱 **Touch Gestures** - Swipe left/right on mobile devices
- ⚡ **Lazy Loading** - Optimized image loading with Next.js Image component
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 🎭 **Smooth Animations** - Beautiful transitions powered by Framer Motion
- 📦 **State Management** - Zustand for lightweight, efficient state management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Generate placeholder images:

```bash
node scripts/generate-placeholders.js
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
image-gallery-with-lightbox/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main gallery page
│   └── globals.css         # Global styles and theme variables
├── components/
│   ├── ui/                 # UI components (Button, Input)
│   ├── GalleryGrid.tsx     # Masonry grid layout component
│   ├── ImageCard.tsx       # Individual image card with hover effects
│   ├── Lightbox.tsx        # Fullscreen lightbox modal
│   ├── FilterBar.tsx       # Category filter buttons
│   ├── SearchBar.tsx       # Search input component
│   ├── Navbar.tsx          # Navigation bar with theme toggle
│   ├── ThemeToggle.tsx     # Dark/light mode toggle button
│   └── ThemeProvider.tsx   # Theme provider wrapper
├── lib/
│   ├── data.ts             # Image data and categories
│   ├── store.ts            # Zustand store for lightbox state
│   └── utils.ts            # Utility functions
├── public/
│   └── images/             # Placeholder images (generated)
└── scripts/
    └── generate-placeholders.js  # Script to create placeholder images
```

## 🎨 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Theme**: next-themes
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image + Sharp

## 🎯 Key Features Explained

### Lightbox Navigation

- **Keyboard**: 
  - `←` Previous image
  - `→` Next image
  - `Esc` Close lightbox
- **Mouse**: Click navigation buttons or click outside to close
- **Touch**: Swipe left/right to navigate on mobile

### Search & Filter

- Search bar filters by image title, description, or category
- Category buttons filter images by specific categories
- Real-time filtering with useMemo for performance

### Dark Mode

- Automatic system theme detection
- Manual toggle in navbar
- Persisted preference in localStorage
- Smooth transitions between themes

### Performance Optimizations

- Lazy loading with Next.js Image component
- Optimized image formats (AVIF, WebP)
- Memoized filtered results
- Efficient Zustand state management

## 🔧 Configuration

### Adding New Images

Edit `lib/data.ts` and add new image objects:

```typescript
{
  id: 21,
  src: "/images/your-image.jpg",
  title: "Your Title",
  category: "Nature", // or Architecture, People, Food, Animals
  description: "Your description",
}
```

Then place your image in `public/images/`.

### Customizing Categories

Edit the `categories` array in `lib/data.ts`:

```typescript
export const categories = ["All", "YourCategory1", "YourCategory2"];
```

### Theme Colors

Customize theme colors in `app/globals.css` by modifying the CSS variables:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  /* ... other variables */
}
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚢 Deploy to Vercel

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

## 📝 License

MIT

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Made with ❤️ using Next.js and TypeScript
