"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plane } from "lucide-react";
import { TOUR_PACKAGES } from "@/lib/content";
import PackageCard from "@/components/PackageCard";
import ServicesCatalog from "@/components/ServicesCatalog";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#faf7f2] text-[#1b1d22] overflow-x-hidden">
      {/* 1. HERO SECTION - Tailored to fit screen viewport */}
      <section
        id="home"
        className="relative pt-6 sm:pt-0 min-h-[calc(100dvh-68px)] lg:h-[calc(100dvh-70px)] lg:min-h-[520px] lg:max-h-[920px] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#f8f5ee] via-[#f5efe4] to-[#ede4d4]"
      >
        {/* Background Atmosphere Image with subtle zoom entrance */}
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/hero123.jpg"
            alt="Scenic Sunrise Backwaters"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right md:object-center mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf7f2] via-[#faf7f2]/90 to-transparent sm:w-2/3" />
        </motion.div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-4 sm:py-6 lg:py-6 w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 my-auto">
          {/* Left Column: Heading and CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.08,
                },
              },
            }}
            className="max-w-xl lg:max-w-2xl"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: -12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-[#9E7832] font-sans block mb-2 sm:mb-3"
            >
              TRAVEL · DISCOVER · EXPERIENCE
            </motion.span>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="text-[44px] min-[380px]:text-5xl sm:text-6xl lg:text-[66px] xl:text-[76px] font-serif font-bold text-[#141517] leading-[1.04] tracking-tight mb-3.5 sm:mb-5"
            >
              Your Next <br />
              Adventure <br />
              <span className="text-[#8B1D2C]">Starts Here</span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-xs sm:text-sm md:text-[15px] text-[#080809] leading-relaxed max-w-lg mb-5 sm:mb-7 font-light"
            >
              Discover the world&apos;s most breathtaking destinations with Yaara
              Travels — your trusted partner for unforgettable journeys from the
              heart of Kerala.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#8B1D2C] hover:bg-[#6e1421] text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs font-semibold tracking-wider transition-colors shadow-md hover:shadow-lg"
                >
                  <span>Plan Your Journey</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/destinations"
                  className="inline-flex items-center gap-2 border border-[#8B1D2C]/40 hover:border-[#8B1D2C] text-[#8B1D2C] hover:bg-[#8B1D2C] hover:text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs font-semibold tracking-wider transition-colors shadow-xs hover:shadow bg-white/70 backdrop-blur-xs"
                >
                  <span>Explore Destinations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Stats Strip along bottom of Hero - cleanly fitted */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 mb-2 sm:mb-3 lg:mb-4"
        >
          <div className="relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full border border-[#e9e1d3] shadow-md py-2.5 sm:py-3.5 px-4 sm:px-10 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
            <motion.div whileHover={{ scale: 1.04 }} className="flex-1 min-w-[110px] text-center sm:text-left">
              <span className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#8B1D2C] block">
                25+
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#6c7582] uppercase tracking-wider font-medium">
                Years of Experience
              </span>
            </motion.div>

            <div className="hidden sm:block w-px h-7 bg-[#e9e1d3]" />

            <motion.div whileHover={{ scale: 1.04 }} className="flex-1 min-w-[110px] text-center sm:text-left">
              <span className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#8B1D2C] block">
                500+
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#6c7582] uppercase tracking-wider font-medium">
                Happy Travellers
              </span>
            </motion.div>

            <div className="hidden sm:block w-px h-7 bg-[#e9e1d3]" />

            <motion.div whileHover={{ scale: 1.04 }} className="flex-1 min-w-[110px] text-center sm:text-left">
              <span className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#8B1D2C] block">
                100%
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#6c7582] uppercase tracking-wider font-medium">
                Customised Itineraries
              </span>
            </motion.div>

            <div className="hidden sm:block w-px h-7 bg-[#e9e1d3]" />

            <motion.div whileHover={{ scale: 1.04 }} className="flex-1 min-w-[110px] text-center sm:text-left">
              <span className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#8B1D2C] block">
                24/7
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#6c7582] uppercase tracking-wider font-medium">
                Travel Support
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. ABOUT YAARA TRAVELS SECTION */}
      <section id="about" className="py-20 sm:py-28 bg-[#faf7f2] relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left side: Overlapping photos and badge */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 relative"
            >
              {/* Main photo */}
              <div className="relative w-4/5 aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/about.webp"
                  alt="Traveller looking at scenic mountain vistas"
                  fill
                  sizes="(max-width: 768px) 80vw, 400px"
                  className="object-cover"
                />
              </div>

              {/* Script handwriting on left */}
              <div className="absolute top-1/4 -left-4 sm:-left-8 z-20 -rotate-90 origin-bottom-left pointer-events-none">
                <span className="font-serif italic text-2xl sm:text-3xl text-[#2d050c]/80 whitespace-nowrap">
                  More Than Just Travel
                </span>
              </div>

              {/* Overlapping small coastal photo */}
              <div className="absolute -bottom-6 right-2 sm:right-6 w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/about2.webp"
                  alt="Tropical island travel"
                  fill
                  sizes="250px"
                  className="object-cover"
                />
              </div>

              {/* Travel stamp badge with gentle float */}
              <motion.div
                animate={{ rotate: [12, 16, 12], y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-6 w-20 h-20 rounded-full border-2 border-dashed border-[#8B1D2C] bg-[#faf7f2]/95 backdrop-blur-xs flex flex-col items-center justify-center p-2 shadow-md"
              >
                <Plane className="w-6 h-6 text-[#8B1D2C] -rotate-45" />
                <span className="text-[8px] font-bold uppercase tracking-wider text-[#8B1D2C] mt-0.5">
                  YAARA
                </span>
              </motion.div>
            </motion.div>

            {/* Right side: Editorial text and 4 stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9E7832] font-sans block mb-2">
                ABOUT YAARA TRAVELS
              </span>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#141517] tracking-tight leading-tight mb-5">
                Beyond the <span className="text-[#8B1D2C]">Journey</span>
              </h2>

              <p className="text-sm sm:text-base text-[#4a505a] leading-relaxed mb-4 font-light">
                Yaara Travels began its journey in 2021, founded with a simple yet
                powerful idea: travel should be more than just getting from one
                place to another.
              </p>

              <p className="text-sm sm:text-base text-[#4a505a] leading-relaxed mb-6 font-light">
                It should be about discovering new places, experiencing different
                cultures, creating unforgettable memories and enjoying every moment
                along the way. Whether exploring tranquil Kerala backwaters, majestic
                Indian heritage, or exotic global destinations, we craft every itinerary
                with personal attention, deep care, and seamless reliability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-3 sm:pt-0">
                <motion.div
                  whileHover={{ y: -4, borderColor: "#8B1D2C" }}
                  transition={{ duration: 0.2 }}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-[#e9e1d3] flex flex-col items-center text-center transition-all shadow-xs hover:shadow-md"
                >
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#141517] mb-2.5">
                    Experience
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#555d6b] leading-relaxed">
                    More than 25 years of travel industry knowledge guiding every booking and every plan.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4, borderColor: "#8B1D2C" }}
                  transition={{ duration: 0.2 }}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-[#e9e1d3] flex flex-col items-center text-center transition-all shadow-xs hover:shadow-md"
                >
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#141517] mb-2.5">
                    Passion
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#555d6b] leading-relaxed">
                    A genuine love for travel, exploration and discovery that shapes everything we do.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4, borderColor: "#8B1D2C" }}
                  transition={{ duration: 0.2 }}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-[#e9e1d3] flex flex-col items-center text-center transition-all shadow-xs hover:shadow-md"
                >
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#141517] mb-2.5">
                    Trust
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#555d6b] leading-relaxed">
                    Building relationships that continue beyond a single booking — your journey is our responsibility.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision Cards with hover lift */}
          <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-[#e9e1d3] shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#8B1D2C] flex items-center justify-center text-white mb-6 shadow-xs">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-[28px] font-serif font-bold text-[#141517] mb-3">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-[15px] text-[#555d6b] leading-relaxed mb-6 font-normal">
                  To make travel simple, safe, personal and memorable. We strive to understand every traveller&apos;s needs and create thoughtfully planned experiences that combine professional expertise, personal attention, value and reliability.
                </p>
              </div>
              <div className="border-l-[3px] border-[#8B1D2C] pl-4 py-0.5">
                <p className="text-xs sm:text-sm text-[#4a5260] italic leading-relaxed">
                  Our mission is to turn travel plans into experiences and experiences into lifelong memories.
                </p>
              </div>
            </motion.div>

            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-[#e9e1d3] shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#8B1D2C] flex items-center justify-center text-white mb-6 shadow-xs">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-[28px] font-serif font-bold text-[#141517] mb-3">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-[15px] text-[#555d6b] leading-relaxed mb-6 font-normal">
                  To build Yaara Travels into a trusted travel brand from Kerala with a global outlook &mdash; a trusted travel companion for individuals, families, groups and businesses travelling across India and around the world.
                </p>
              </div>
              <div className="border-l-[3px] border-[#8B1D2C] pl-4 py-0.5">
                <p className="text-xs sm:text-sm text-[#4a5260] italic leading-relaxed">
                  Our vision is to connect people with places, cultures and experiences &mdash; one journey at a time.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Memberships & Associations Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mt-16 sm:mt-20 pt-12 border-t border-[#e9e1d3]"
          >
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9E7832] font-sans block mb-2">
                INDUSTRY CREDENTIALS
              </span>
              <h3 className="text-2xl sm:text-4xl lg:text-[40px] font-serif font-bold text-[#141517] tracking-tight leading-tight mb-3">
                Our Memberships &amp; Associations
              </h3>
              <p className="text-xs sm:text-sm text-[#555d6b] leading-relaxed font-light">
                Yaara Travels is a proud active member of recognised travel industry associations &mdash; a mark of our commitment to professional standards and trusted service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {/* MKTA Card */}
              <motion.div
                whileHover={{ y: -6, borderColor: "#8B1D2C" }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-7 sm:p-9 border border-[#e9e1d3] shadow-xs hover:shadow-xl transition-all flex flex-col items-center text-center justify-between"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#e9e1d3] bg-white p-1 shadow-xs flex items-center justify-center shrink-0 mb-5">
                    <Image
                      src="/mkta-logo.jpg"
                      alt="My Kerala Tourism Association (MKTA)"
                      fill
                      sizes="128px"
                      className="object-contain p-1"
                    />
                  </div>

                  <h4 className="font-serif font-bold text-2xl sm:text-[26px] text-[#141517] tracking-wide mb-1">
                    MKTA
                  </h4>
                  <p className="text-sm sm:text-[15px] font-semibold text-[#8B1D2C] mb-1">
                    My Kerala Tourism Association
                  </p>
                  <p className="text-xs text-[#717786] font-medium mb-3">
                    Reg No: ALP/TC/213/22
                  </p>
                  <p className="text-xs sm:text-sm text-[#4a505a] leading-relaxed max-w-sm font-light">
                    Active member of My Kerala Tourism Association, promoting responsible and quality tourism across Kerala.
                  </p>
                </div>

                <div className="pt-6">
                  <span className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full text-xs font-semibold bg-[#fcf4f5] text-[#8B1D2C] border border-[#8B1D2C]/25 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B1D2C] animate-pulse" />
                    Active Member
                  </span>
                </div>
              </motion.div>

              {/* GTTAA Card */}
              <motion.div
                whileHover={{ y: -6, borderColor: "#8B1D2C" }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-7 sm:p-9 border border-[#e9e1d3] shadow-xs hover:shadow-xl transition-all flex flex-col items-center text-center justify-between"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#e9e1d3] bg-white p-1 shadow-xs flex items-center justify-center shrink-0 mb-5">
                    <Image
                      src="/gttaa-logo.jpg"
                      alt="Global Tourism Travel Agents Association of India (GTTAA)"
                      fill
                      sizes="128px"
                      className="object-contain p-1"
                    />
                  </div>

                  <h4 className="font-serif font-bold text-2xl sm:text-[26px] text-[#141517] tracking-wide mb-1">
                    GTTAA
                  </h4>
                  <p className="text-sm sm:text-[15px] font-semibold text-[#8B1D2C] mb-1">
                    Global Tourism Travel Agents Association of India
                  </p>
                  <p className="text-xs text-transparent select-none font-medium mb-3 hidden sm:block">
                    &nbsp;
                  </p>
                  <p className="text-xs sm:text-sm text-[#4a505a] leading-relaxed max-w-sm font-light">
                    Active member of the Global Tourism Travel Agents Association of India, upholding the highest standards of travel agency practice nationwide.
                  </p>
                </div>

                <div className="pt-6">
                  <span className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full text-xs font-semibold bg-[#fcf4f5] text-[#8B1D2C] border border-[#8B1D2C]/25 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B1D2C] animate-pulse" />
                    Active Member
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. OUR SERVICES SECTION */}
      <section
        id="services"
        className="py-20 sm:py-28 bg-[#f5f1e8] border-t border-b border-[#e9e1d3] relative scroll-mt-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9E7832] font-sans block mb-1">
              WHAT WE OFFER
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#141517] tracking-tight">
              Our Services
            </h2>
            <p className="text-xs sm:text-sm text-[#4a505a] mt-2 max-w-xl font-light">
              Everything you need for a seamless journey — from the first
              booking to the final transfer, we&apos;ve got you covered.
            </p>
          </motion.div>

          {/* 3 service cards */}
          <ServicesCatalog initialCount={3} isHomePage={true} />

          {/* More Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[#8B1D2C] hover:bg-[#6e1421] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition-colors shadow-md hover:shadow-lg"
              >
                <span>More Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. DESTINATIONS THAT INSPIRE SECTION */}
      <section
        id="destinations"
        className="py-20 sm:py-28 bg-[#faf7f2] relative scroll-mt-20 overflow-hidden border-b border-[#e9e1d3]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9E7832] font-sans block mb-1">
              EXPLORE THE WORLD
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#141517] tracking-tight">
              Destinations That Inspire
            </h2>
            <p className="text-xs sm:text-sm text-[#4a505a] mt-2 max-w-xl font-light">
              Discover our signature handcrafted holiday packages tailored for
              unforgettable experiences.
            </p>
          </motion.div>

          {/* 3 featured cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TOUR_PACKAGES.slice(0, 3).map((pkg, idx) => (
              <PackageCard key={pkg.id} pkg={pkg} priority={idx < 2} />
            ))}
          </div>

          {/* More Destinations Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 bg-[#8B1D2C] hover:bg-[#6e1421] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition-colors shadow-md hover:shadow-lg"
              >
                <span>More Destinations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
