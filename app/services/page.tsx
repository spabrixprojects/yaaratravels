import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import ServicesCatalog from "@/components/ServicesCatalog";

export const metadata: Metadata = {
  title: "Our Services — Complete Travel Solutions",
  description:
    "Everything you need for a seamless journey — air tickets, holiday packages, visa assistance, hotel reservations, car rentals, cruise bookings, and 24/7 travel planning.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* Services Catalog */}
      <section className="py-16 sm:py-24 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ServicesCatalog isHomePage={false} />
        </div>
      </section>

      {/* 3. Call to Action Banner */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-[#8B1D2C] to-[#67111F] text-white text-center overflow-hidden">
        {/* Subtle Decorative Ambient Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-3">
            Ready to Start Planning?
          </h2>

          <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto font-light leading-relaxed mb-8">
            Talk to our travel experts today. We&apos;ll take care of every
            detail so you can focus on the journey.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#8B1D2C] hover:bg-[#faf7f2] font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full shadow-md hover:shadow-xl active:scale-98 transition-all duration-300"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
