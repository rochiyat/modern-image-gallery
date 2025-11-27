"use client";

import { useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLightboxStore } from "@/lib/store";
import { Button } from "./ui/button";

export default function Lightbox() {
  const { isOpen, currentIndex, images, closeLightbox, nextImage, prevImage } =
    useLightboxStore();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const currentImage = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
      }
    },
    [isOpen, closeLightbox, nextImage, prevImage]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!currentImage) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full h-full max-w-7xl max-h-screen p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="flex items-center justify-center h-full">
              <motion.div
                key={currentIndex}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex flex-col items-center justify-center"
              >
                <div className="relative w-full h-[70vh] md:h-[75vh]">
                  <Image
                    src={currentImage.src}
                    alt={currentImage.title}
                    fill
                    className="object-contain"
                    priority
                    sizes="100vw"
                  />
                </div>

                <div className="mt-6 text-center text-white max-w-2xl">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {currentImage.title}
                  </h2>
                  <p className="text-gray-300 mb-2">
                    {currentImage.description}
                  </p>
                  <span className="inline-block bg-primary px-3 py-1 rounded-full text-sm">
                    {currentImage.category}
                  </span>
                  <p className="text-sm text-gray-400 mt-3">
                    {currentIndex + 1} / {images.length}
                  </p>
                </div>
              </motion.div>
            </div>

            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full w-12 h-12"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full w-12 h-12"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
