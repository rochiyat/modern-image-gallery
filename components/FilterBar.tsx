"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { categories } from "@/lib/data";

interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function FilterBar({
  selectedCategory,
  onCategoryChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <motion.div
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => onCategoryChange(category)}
            className="transition-all"
          >
            {category}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
