"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import GalleryGrid from "@/components/GalleryGrid";
import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import Lightbox from "@/components/Lightbox";
import ViewToggle from "@/components/ViewToggle";
import PaginationControls from "@/components/PaginationControls";
import { images } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [paginationMode, setPaginationMode] = useState<"pagination" | "infinite">("pagination");
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(12);
  const itemsPerPage = 12;

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
    setVisibleCount(itemsPerPage);
  }, [searchQuery, selectedCategory]);

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

  const displayedImages = useMemo(() => {
    if (paginationMode === "pagination") {
      const startIndex = (currentPage - 1) * itemsPerPage;
      return filteredImages.slice(startIndex, startIndex + itemsPerPage);
    } else {
      return filteredImages.slice(0, visibleCount);
    }
  }, [filteredImages, paginationMode, currentPage, visibleCount]);

  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);

  // Infinite scroll handler
  useEffect(() => {
    if (paginationMode !== "infinite") return;

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setVisibleCount((prev) => Math.min(prev + itemsPerPage, filteredImages.length));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [paginationMode, filteredImages.length]);

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
            
            <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-4xl justify-between">
              <FilterBar
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
              
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPaginationMode(prev => prev === "pagination" ? "infinite" : "pagination")}
                  className="gap-2"
                >
                  <Settings2 className="h-4 w-4" />
                  {paginationMode === "pagination" ? "Pagination" : "Infinite Scroll"}
                </Button>
                <ViewToggle viewMode={viewMode} onViewChange={setViewMode} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-4 text-center text-sm text-muted-foreground">
            Showing {displayedImages.length} of {filteredImages.length} images
          </div>
          
          <GalleryGrid images={displayedImages} viewMode={viewMode} />

          {paginationMode === "pagination" && (
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
          
          {paginationMode === "infinite" && visibleCount < filteredImages.length && (
             <div className="text-center mt-8 text-muted-foreground animate-pulse">
               Loading more...
             </div>
          )}
        </motion.div>
      </div>

      <Lightbox />
    </>
  );
}
