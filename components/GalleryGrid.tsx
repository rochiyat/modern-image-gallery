"use client";

import { useMemo } from "react";
import ImageCard from "./ImageCard";
import { ImageData } from "@/lib/data";
import { useLightboxStore } from "@/lib/store";

interface GalleryGridProps {
  images: ImageData[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const { openLightbox } = useLightboxStore();

  const columns = useMemo(() => {
    const cols: ImageData[][] = [[], [], []];
    images.forEach((image, index) => {
      cols[index % 3].push(image);
    });
    return cols;
  }, [images]);

  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-muted-foreground">
          No images found. Try adjusting your search or filter.
        </p>
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
