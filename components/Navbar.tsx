"use client";

import { Image as ImageIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ImageIcon className="h-6 w-6 text-primary" />
          <h1 className="text-xl md:text-2xl font-bold">Image Gallery</h1>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
