import React, { Suspense } from "react";
import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Plan Your Dream Journey",
  description:
    "Get in touch with Yaara Travels, Thrissur. Enquire about flight tickets, tailor-made holiday packages, hotel bookings, and 24/7 travel planning.",
};

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#faf7f2] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#8B1D2C] border-t-transparent animate-spin" />
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
