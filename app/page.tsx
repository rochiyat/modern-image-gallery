"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import GalleryGrid from "@/components/GalleryGrid";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import Lightbox from "@/components/Lightbox";
import { images } from "@/lib/data";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = useMemo(() => {
    return images.filter((image) => {
      const matchesSearch =
        searchQuery === "" ||
        image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || image.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Explore Beautiful Images
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Browse through our collection of stunning photographs
          </p>

          <div className="flex flex-col items-center gap-6 mb-8">
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
            <FilterBar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-4 text-center text-sm text-muted-foreground">
            Showing {filteredImages.length} of {images.length} images
          </div>
          <GalleryGrid images={filteredImages} />
        </motion.div>
      </div>

      <Lightbox />
    </>
  );
}
