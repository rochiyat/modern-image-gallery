import { create } from "zustand";
import { ImageData } from "./data";

interface LightboxStore {
  isOpen: boolean;
  currentIndex: number;
  images: ImageData[];
  openLightbox: (index: number, images: ImageData[]) => void;
  closeLightbox: () => void;
  nextImage: () => void;
  prevImage: () => void;
  setCurrentIndex: (index: number) => void;
}

export const useLightboxStore = create<LightboxStore>((set, get) => ({
  isOpen: false,
  currentIndex: 0,
  images: [],
  openLightbox: (index, images) =>
    set({ isOpen: true, currentIndex: index, images }),
  closeLightbox: () => set({ isOpen: false }),
  nextImage: () =>
    set((state) => ({
      currentIndex: (state.currentIndex + 1) % state.images.length,
    })),
  prevImage: () =>
    set((state) => ({
      currentIndex:
        state.currentIndex === 0
          ? state.images.length - 1
          : state.currentIndex - 1,
    })),
  setCurrentIndex: (index) => set({ currentIndex: index }),
}));
