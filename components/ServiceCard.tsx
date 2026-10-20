"use client";

import React from "react";
import {
  Plane,
  Palmtree,
  FileCheck2,
  Hotel,
  Car,
  Users,
  Ship,
  Heart,
  Briefcase,
  MapPin,
  ShieldCheck,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { Service } from "@/lib/content";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Plane,
  Palmtree,
  FileCheck2,
  Hotel,
  Car,
  Users,
  Ship,
  Heart,
  Briefcase,
  MapPin,
  Shield: ShieldCheck,
  ShieldCheck,
  ClipboardCheck,
};

export default function ServiceCard({ service }: { service: Service }) {
  const IconComp = iconMap[service.iconName] || Plane;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e5e7eb] shadow-xs hover:shadow-xl hover:border-[#8B1D2C]/40 transition-shadow duration-300 flex flex-col justify-between group h-full"
    >
      <div>
        {/* Top Icon Badge */}
        <div className="w-12 h-12 rounded-xl bg-[#fbf2f4] text-[#8B1D2C] flex items-center justify-center shrink-0 group-hover:bg-[#8B1D2C] group-hover:text-white transition-colors duration-300 shadow-2xs">
          <IconComp className="w-5 h-5 stroke-[1.8]" />
        </div>

        {/* Service Title */}
        <h3 className="text-lg sm:text-[19px] font-serif font-bold text-[#111827] group-hover:text-[#8B1D2C] transition-colors leading-snug mt-5 mb-2.5">
          {service.title}
        </h3>

        {/* Service Description */}
        <p className="text-xs sm:text-[13px] text-[#4b5563] leading-relaxed font-light">
          {service.description}
        </p>
      </div>

      {/* Enquiry Link */}
      <div className="mt-5 pt-4 border-t border-[#f3f4f6]">
        <a
          href={`/contact?service=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B1D2C] group-hover:text-[#6e1421] transition-colors"
        >
          <span>Enquire for this service</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
