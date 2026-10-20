"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Clock } from "lucide-react";
import { TourPackage } from "@/lib/content";
import { motion } from "framer-motion";

interface PackageCardProps {
  pkg: TourPackage;
  priority?: boolean;
}

export default function PackageCard({ pkg, priority = false }: PackageCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-xs hover:shadow-xl transition-shadow duration-300 h-full"
    >
      {/* Image container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f3f4f6]">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          priority={priority}
        />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className="bg-[#8B1D2C] text-white text-[11px] font-semibold px-3 py-1 rounded-full tracking-wide shadow-xs">
            {pkg.destination}
          </span>

          <span className="bg-white/95 backdrop-blur-md text-[#1f2937] text-[11px] font-medium px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#8B1D2C]" />
            {pkg.duration}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          {/* Destination small tag */}
          <span className="text-[11px] uppercase tracking-wider text-[#6b7280] font-medium block mb-1">
            {pkg.destination}
          </span>

          {/* Title */}
          <h3 className="text-xl font-serif font-bold text-[#111827] group-hover:text-[#8B1D2C] transition-colors leading-snug">
            {pkg.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-[13px] text-[#4b5563] leading-relaxed line-clamp-2 font-light">
            {pkg.description}
          </p>

          {/* 4 Checkmark inclusions */}
          {pkg.highlights && pkg.highlights.length > 0 && (
            <div className="mt-4 pt-3 border-t border-[#f3f4f6] flex flex-col gap-1.5">
              {pkg.highlights.slice(0, 4).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-[#4b5563]"
                >
                  <Check className="w-3.5 h-3.5 text-[#8B1D2C] shrink-0 stroke-[2.5]" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price & Book Now button */}
        <div className="pt-4 border-t border-[#f3f4f6] flex items-center justify-between gap-3">
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-[#9ca3af] font-medium">
              Starting From
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#8B1D2C]">
                {pkg.price}
              </span>
              <span className="text-[10px] text-[#6b7280]">/ person</span>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`/contact?package=${encodeURIComponent(pkg.title)}`}
            className="bg-[#8B1D2C] hover:bg-[#6e1421] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 shadow-xs hover:shadow"
          >
            Book Now
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}
