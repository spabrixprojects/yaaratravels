"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND, DESTINATIONS } from "@/lib/content";

function InstagramIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    </svg>
  );
}



export default function Footer() {
  return (
    <footer className="bg-[#0b0c0e] text-[#a4abb8] pt-16 pb-10 border-t border-[#1e2026]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#1c1d22]">
          {/* Col 1: Brand Info & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-13 h-10 shrink-0 flex items-center justify-center">
                <Image
                  src={BRAND.logo}
                  alt="YAARA TRAVELS Logo"
                  fill
                  sizes="56px"
                  className="object-contain brightness-125"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-white tracking-wide">
                  YAARA TRAVELS
                </span>
                <span className="text-[9px] uppercase tracking-[0.24em] text-[#bd933f] font-medium">
                  {BRAND.tagline}
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#8e95a5] leading-relaxed max-w-sm">
              Your trusted travel partner from the heart of Kerala. We craft
              unforgettable journeys for families and couples across India and beyond.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#282a33] flex items-center justify-center text-[#8e95a5] hover:text-white hover:border-[#8B1D2C] hover:bg-[#8B1D2C] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={BRAND.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#282a33] flex items-center justify-center text-[#8e95a5] hover:text-white hover:border-[#8B1D2C] hover:bg-[#8B1D2C] transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Explore */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#8e95a5]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Destinations */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Popular Destinations
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#8e95a5]">
              {DESTINATIONS.map((dest) => (
                <li key={dest.id}>
                  <Link
                    href="/destinations"
                    className="hover:text-white transition-colors"
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#626875]">
          <p>{BRAND.copyright}</p>
        
        </div>
      </div>
    </footer>
  );
}
