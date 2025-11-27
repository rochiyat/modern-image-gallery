"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ImageData } from "@/lib/data";

interface ImageCardProps {
  image: ImageData;
  index: number;
  onClick: () => void;
}

export default function ImageCard({ image, index, onClick }: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
      onClick={onClick}
    >
      <div className="relative aspect-square">
        <Image
          src={image.src}
          alt={image.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-semibold text-lg">{image.title}</h3>
          <p className="text-sm text-gray-200 line-clamp-2">
            {image.description}
          </p>
          <span className="inline-block mt-2 text-xs bg-primary/80 px-2 py-1 rounded-full">
            {image.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
