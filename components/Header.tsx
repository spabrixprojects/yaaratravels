"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ["contact", "destinations", "services", "about", "home"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 pointer-events-none ${
          scrolled ? "pt-2.5 sm:pt-3 px-3 sm:px-6" : "pt-0 px-0"
        }`}
      >
        <div
          className={`transition-all duration-300 pointer-events-auto flex items-center justify-between mx-auto ${
            scrolled
              ? "max-w-5xl rounded-full bg-[#faf7f2]/90 backdrop-blur-md shadow-lg border border-[#e9e1d3]/90 px-5 sm:px-7 py-2"
              : "w-full max-w-7xl px-4 sm:px-8 py-3.5 sm:py-4 bg-[#faf7f2] border-b border-[#e9e1d3]/70"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div
              className={`relative flex items-center justify-center shrink-0 transition-all duration-300 ${
                scrolled ? "w-10 h-7 sm:w-12 sm:h-8" : "w-12 h-9 sm:w-14 sm:h-10"
              }`}
            >
              <Image
                src={BRAND.logo}
                alt="YAARA TRAVELS Logo"
                fill
                sizes="56px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif font-bold tracking-tight text-[#8B1D2C] group-hover:text-[#67111F] transition-all leading-none ${
                  scrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
                }`}
              >
                YAARA TRAVELS
              </span>
              <span
                className={`uppercase tracking-[0.2em] text-[#717786] font-medium transition-all ${
                  scrolled
                    ? "text-[8px] sm:text-[9px] mt-0.5"
                    : "text-[9px] sm:text-[10px] mt-0.5"
                }`}
              >
                {BRAND.tagline}
              </span>
            </div>
          </Link>

          {/* Center Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {NAV_LINKS.map((link) => {
              const isExactPage = pathname === link.href;
              const sectionId = link.href.replace("/#", "").replace("/", "") || "home";
              const isSectionActive = pathname === "/" && activeSection === sectionId;
              const isActive = isExactPage || isSectionActive;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 text-[13px] tracking-wide transition-colors ${
                    isActive
                      ? "text-[#8B1D2C] font-semibold"
                      : "text-[#3f4450] hover:text-[#8B1D2C]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#8B1D2C] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#282b33] hover:text-[#8B1D2C] rounded-full sm:rounded-lg border border-[#e9e1d3] bg-white/70 active:scale-95 transition-all cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Sidewise Mobile Drawer with Round Corners */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Side Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 h-full w-[84%] max-w-xs bg-[#faf7f2] shadow-2xl z-50 rounded-l-[32px] border-l border-y border-[#e9e1d3] flex flex-col justify-between p-6 overflow-y-auto"
            >
              {/* Top Bar with Brand & Close Button */}
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#e9e1d3]">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-11 h-8 shrink-0 flex items-center justify-center">
                      <Image
                        src={BRAND.logo}
                        alt="YAARA TRAVELS Logo"
                        fill
                        sizes="44px"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-serif font-bold tracking-tight text-[#8B1D2C] text-base leading-none">
                        YAARA TRAVELS
                      </span>
                      <span className="text-[8px] uppercase tracking-[0.2em] text-[#717786] font-medium mt-0.5">
                        {BRAND.tagline}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-8 h-8 rounded-full bg-white border border-[#e9e1d3] text-[#282b33] hover:text-[#8B1D2C] flex items-center justify-center shadow-xs cursor-pointer active:scale-95 transition-all"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-1.5 pt-6">
                  {NAV_LINKS.map((link) => {
                    const isExactPage = pathname === link.href;
                    const sectionId = link.href.replace("/#", "").replace("/", "") || "home";
                    const isSectionActive = pathname === "/" && activeSection === sectionId;
                    const isActive = isExactPage || isSectionActive;

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                          isActive
                            ? "bg-[#8B1D2C] text-white shadow-xs"
                            : "text-[#282b33] hover:bg-[#f1ebe0] hover:text-[#8B1D2C]"
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className={`text-xs ${isActive ? "text-white/80" : "text-[#9E7832]"}`}>
                          →
                        </span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Quick Contact & WhatsApp */}
              <div className="pt-6 border-t border-[#e9e1d3] flex flex-col gap-3">
                <a
                  href={BRAND.whatsapp1Url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-full text-xs font-semibold shadow-xs transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
                <p className="text-[11px] text-center text-[#8e95a5]">
                  {BRAND.phoneSupport} · 24/7 Support
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
