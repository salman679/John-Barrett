"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StickyCallToAction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-40 transition-all duration-300 transform",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-16 opacity-0 pointer-events-none"
      )}
    >
      <Link
        href="/contact"
        className="flex items-center gap-3 px-6 py-4 bg-royal-600 hover:bg-royal-700 text-white font-semibold rounded-full shadow-2xl hover:shadow-royal-500/50 transition-all duration-300 hover:scale-105 group"
      >
        <Calendar className="h-5 w-5 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">Book Your Strategy Call</span>
        <span className="sm:hidden">Book Now</span>
      </Link>
    </div>
  );
}
