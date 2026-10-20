"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { TOUR_PACKAGES, TourPackage } from "@/lib/content";
import PackageCard from "@/components/PackageCard";

const CATEGORIES = ["All Packages", "India", "International"] as const;

export default function DestinationsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All Packages");

  const filteredPackages = useMemo(() => {
    if (activeCategory === "All Packages") return TOUR_PACKAGES;
    const isIndia = activeCategory === "India";
    const isInternational = activeCategory === "International";
    const indianDestinations = [
      "kerala",
      "rajasthan",
      "goa",
      "himachal pradesh",
      "andaman islands",
    ];

    return TOUR_PACKAGES.filter((pkg) => {
      if (isIndia) {
        return pkg.categories.includes("India");
      }
      if (isInternational) {
        return pkg.categories.includes("International");
      }
      return pkg.categories.includes(activeCategory);
    });
  }, [activeCategory]);

  return (
    <div className="flex flex-col w-full bg-[#fcfbf9] min-h-screen text-[#1f2937]">
      {/* 1. TOP HEADER & TITLE */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 bg-white border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center sm:text-left">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8B1D2C] font-sans block mb-2">
            TAILOR-MADE ITINERARIES
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#111827] tracking-tight mb-3">
            Tour Packages Made for You
          </h1>
          <p className="text-sm sm:text-base text-[#4b5563] max-w-2xl font-light leading-relaxed">
            Carefully crafted itineraries offering the perfect balance of discovery,
            relaxation, and memorable experiences.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center gap-2.5 overflow-x-auto pt-8 pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#8B1D2C] text-white shadow-xs"
                      : "bg-white text-[#4b5563] hover:text-[#8B1D2C] border border-[#d1d5db] hover:border-[#8B1D2C]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. PACKAGES GRID */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-8 w-full flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg, idx) => (
            <PackageCard key={pkg.id} pkg={pkg} priority={idx < 3} />
          ))}
        </div>
      </section>

      {/* 3. BOTTOM RED CTA BANNER */}
      <section className="bg-[#8B1D2C] text-white py-20 px-4 sm:px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight mb-3">
            Can&apos;t Find Your Perfect Package?
          </h2>
          <p className="text-sm sm:text-base text-[#fcf4f5] max-w-xl mb-8 font-serif italic">
            Please tell us what you are looking for, and our team will craft a
            customized itinerary just for you.
          </p>

          <a
            href="/contact?custom=true"
            className="inline-flex items-center justify-center bg-white hover:bg-[#f3f4f6] text-[#8B1D2C] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg active:scale-98"
          >
            Request a Custom Package
          </a>
        </div>
      </section>
    </div>
  );
}
