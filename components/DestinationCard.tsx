"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Destination } from "@/lib/content";
import { motion } from "framer-motion";

interface DestinationCardProps {
  destination: Destination;
  priority?: boolean;
}

export default function DestinationCard({
  destination,
  priority = false,
}: DestinationCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-[#e9e1d3] luxury-card transition-shadow duration-300"
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e9e1d3]">
        <Image
          src={destination.image}
          alt={`${destination.name} - ${destination.tagline}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        {/* Region Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 bg-[#2d050c]/90 backdrop-blur-md text-[#fbf5e6] text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-[#d6ad55]/30 shadow-xs">
            <MapPin className="w-3 h-3 text-[#d6ad55]" />
            {destination.region}
          </span>
        </div>

        {/* Bottom overlay title inside image */}
        <div className="absolute bottom-4 left-5 right-5 text-white">
          <p className="text-[10px] uppercase tracking-widest text-[#d6ad55] font-sans font-semibold mb-1">
            {destination.tagline}
          </p>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-none drop-shadow-md">
            {destination.name}
          </h3>
        </div>
      </div>

      {/* Content description */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5 bg-white">
        <p className="text-xs sm:text-sm text-[#3f4450] leading-relaxed">
          {destination.description}
        </p>

        <div className="pt-4 border-t border-[#f4efe6] flex items-center justify-between">
          <Link
            href={`/packages?destination=${encodeURIComponent(destination.name)}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#7a1223] hover:text-[#5c0c19] transition-colors group/link"
          >
            <span>Explore Packages</span>
            <ArrowUpRight className="w-4 h-4 text-[#d6ad55] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href={`/contact?destination=${encodeURIComponent(destination.name)}`}
            className="text-xs font-medium text-[#717786] hover:text-[#7a1223] transition-colors"
          >
            Custom Enquiry
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
