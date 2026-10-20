"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Filter, Sparkles } from "lucide-react";
import { TOUR_PACKAGES, TourPackage } from "@/lib/content";
import PackageCard from "@/components/PackageCard";

const CATEGORIES = ["All Packages", "India", "International"] as const;

export default function PackagesFilterView() {
  const searchParams = useSearchParams();
  const initialDest = searchParams.get("destination") || "";

  const [activeCategory, setActiveCategory] = useState<string>("All Packages");
  const [searchQuery, setSearchQuery] = useState<string>(initialDest);

  const filteredPackages = useMemo(() => {
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
      const matchesCategory =
        activeCategory === "All Packages" ||
        (isIndia &&
          (pkg.categories.includes("India") ||
            indianDestinations.includes(pkg.destination.toLowerCase()))) ||
        (isInternational &&
          (pkg.categories.includes("International") ||
            !indianDestinations.includes(pkg.destination.toLowerCase())));

      const matchesSearch =
        searchQuery.trim() === "" ||
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col gap-12">
      {/* Modern Filter & Search Toolbar */}
      <div className="bg-white p-5 sm:p-7 rounded-3xl border border-[#e9e1d3] shadow-md flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#7a1223] text-white shadow-md scale-102"
                    : "bg-[#faf7f2] text-[#3f4450] hover:bg-[#7a1223]/10 hover:text-[#7a1223] border border-[#e9e1d3]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-80">
          <Search className="w-4 h-4 text-[#717786] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by destination or package..."
            className="w-full pl-11 pr-16 py-3 rounded-full border border-[#e9e1d3] text-xs text-[#1b1d22] bg-[#faf7f2] focus:outline-none focus:ring-2 focus:ring-[#7a1223]/20 focus:border-[#7a1223] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-semibold text-[#7a1223] hover:underline cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Counter bar */}
      <div className="flex items-center justify-between text-xs text-[#717786] px-2 font-mono">
        <span>
          SHOWING <strong className="text-[#1b1d22]">{filteredPackages.length}</strong> OF{" "}
          <strong>{TOUR_PACKAGES.length}</strong> EXPERIENCES
        </span>
        <div className="flex items-center gap-2">
          {searchQuery && (
            <span className="bg-[#fcf4f5] border border-[#7a1223]/20 text-[#7a1223] font-sans font-semibold text-[11px] px-3 py-1 rounded-full flex items-center gap-1.5">
              Destination: {searchQuery}
              <button
                onClick={() => setSearchQuery("")}
                className="hover:font-bold ml-1"
                aria-label="Remove filter"
              >
                ×
              </button>
            </span>
          )}
          {activeCategory !== "All Packages" && (
            <span className="text-[#9e7832] font-semibold text-[11px] font-sans">
              Collection: {activeCategory}
            </span>
          )}
        </div>
      </div>

      {/* All 16 Packages Grid */}
      {filteredPackages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredPackages.map((pkg, idx) => (
            <PackageCard key={pkg.id} pkg={pkg} priority={idx < 3} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-16 text-center border border-[#e9e1d3] flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#fcf4f5] text-[#7a1223] flex items-center justify-center mb-4">
            <Filter className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-serif font-bold text-[#1b1d22] mb-2">
            No matching itineraries found
          </h3>
          <p className="text-xs text-[#717786] max-w-sm mb-6 font-light">
            Try adjusting your search criteria, or request a bespoke custom travel plan crafted from scratch.
          </p>
          <button
            onClick={() => {
              setActiveCategory("All Packages");
              setSearchQuery("");
            }}
            className="text-xs font-semibold uppercase tracking-wider text-[#7a1223] hover:underline cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
