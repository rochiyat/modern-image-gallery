"use client";

import { useMemo } from "react";
import ImageCard from "./ImageCard";
import { ImageData } from "@/lib/data";
import { useLightboxStore } from "@/lib/store";
import { motion } from "framer-motion";

interface GalleryGridProps {
  images: ImageData[];
  viewMode?: "grid" | "list";
}

export default function GalleryGrid({ images, viewMode = "grid" }: GalleryGridProps) {
  const { openLightbox } = useLightboxStore();

  const columns = useMemo(() => {
    if (viewMode === "list") return []; // Not used in list mode
    const cols: ImageData[][] = [[], [], []];
    images.forEach((image, index) => {
      cols[index % 3].push(image);
    });
    return cols;
  }, [images, viewMode]);

  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-muted-foreground">
          No images found. Try adjusting your search or filter.
        </p>
      </div>
    );
  }

  if (viewMode === "list") {
    return (
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col md:flex-row gap-6 bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border"
            onClick={() => openLightbox(index, images)}
          >
            <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0 cursor-pointer overflow-hidden group">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col justify-center flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {image.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {image.title}
              </h3>
              <p className="text-muted-foreground">{image.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4 md:gap-6">
          {column.map((image) => {
            const imageIndex = images.findIndex((img) => img.id === image.id);
            return (
              <ImageCard
                key={image.id}
                image={image}
                index={imageIndex}
                onClick={() => openLightbox(imageIndex, images)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
