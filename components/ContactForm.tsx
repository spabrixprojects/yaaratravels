"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Phone,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { BRAND } from "@/lib/content";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  travelDates: string;
  travellers: string;
  message: string;
}

export default function ContactForm() {
  const searchParams = useSearchParams();

  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    travelDates: "",
    travellers: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  useEffect(() => {
    const dest = searchParams.get("destination");
    const pkg = searchParams.get("package");
    const srv = searchParams.get("service");

    if (dest) {
      setForm((prev) => ({ ...prev, destination: dest }));
    } else if (pkg) {
      setForm((prev) => ({
        ...prev,
        destination: pkg,
        message: `I am interested in reserving the "${pkg}" package. Please provide full itinerary details, customization options, and current availability.`,
      }));
    } else if (srv) {
      setForm((prev) => ({
        ...prev,
        message: `I would like to enquire about your travel service: "${srv}".`,
      }));
    }
  }, [searchParams]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {};

    if (!form.fullName.trim()) {
      errs.fullName = "Full name is required.";
    }

    if (!form.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      errs.phone = "Phone or WhatsApp number is required.";
    } else if (form.phone.trim().length < 7) {
      errs.phone = "Please enter a valid contact number.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmittedData({ ...form });
    }, 500);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Yaara Travels,%0A%0A*Name:* ${form.fullName || "Guest"}%0A*Phone:* ${form.phone || "Not specified"}%0A*Email:* ${form.email || "Not specified"}%0A*Destination/Package:* ${form.destination || "General Enquiry"}%0A*Travel Dates:* ${form.travelDates || "Flexible"}%0A*Travellers:* ${form.travellers || "2"}%0A*Message:* ${form.message || "Please share details."}`;
    window.open(`https://wa.me/918606555538?text=${text}`, "_blank");
  };

  if (submittedData) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#d6ad55]/40 shadow-xl flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-[#fcf4f5] border-2 border-[#7a1223] text-[#7a1223] flex items-center justify-center mb-5 shadow-xs">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9e7832] mb-1">
          Concierge Request Received
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1b1d22] mb-3">
          We&apos;re Ready to Plan Your Journey
        </h3>
        <p className="text-sm text-[#3f4450] max-w-md mb-8 leading-relaxed font-light">
          Thank you, <strong className="text-[#7a1223] font-semibold">{submittedData.fullName}</strong>. Your enquiry details are registered. For immediate real-time attention without server delay, you can instantly connect with our lead travel consultant on WhatsApp or via our 24/7 hotline.
        </p>

        {/* Structured summary box */}
        <div className="w-full max-w-md bg-[#faf7f2] p-5 rounded-2xl border border-[#e9e1d3] text-left text-xs text-[#282b33] space-y-2 mb-8">
          <div className="flex justify-between border-b border-[#e9e1d3] pb-1.5">
            <span className="text-[#717786]">Guest Name</span>
            <span className="font-semibold">{submittedData.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-[#e9e1d3] pb-1.5">
            <span className="text-[#717786]">Phone / WhatsApp</span>
            <span className="font-semibold">{submittedData.phone}</span>
          </div>
          <div className="flex justify-between border-b border-[#e9e1d3] pb-1.5">
            <span className="text-[#717786]">Email</span>
            <span className="font-semibold">{submittedData.email}</span>
          </div>
          {submittedData.destination && (
            <div className="flex justify-between border-b border-[#e9e1d3] pb-1.5">
              <span className="text-[#717786]">Destination</span>
              <span className="font-semibold text-[#7a1223]">{submittedData.destination}</span>
            </div>
          )}
          {submittedData.travelDates && (
            <div className="flex justify-between">
              <span className="text-[#717786]">Preferred Dates</span>
              <span className="font-semibold">{submittedData.travelDates}</span>
            </div>
          )}
        </div>

        {/* Instant Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <button
            onClick={handleWhatsAppDirect}
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </button>
          <a
            href={BRAND.phoneSupportTel}
            className="flex-1 flex items-center justify-center gap-2 bg-[#7a1223] hover:bg-[#5c0c19] text-white py-3.5 px-5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#d6ad55]" />
            <span>Call 24/7 Hotline</span>
          </a>
        </div>

        <button
          onClick={() => {
            setSubmittedData(null);
            setForm({
              fullName: "",
              email: "",
              phone: "",
              destination: "",
              travelDates: "",
              travellers: "",
              message: "",
            });
          }}
          className="mt-6 text-xs text-[#717786] hover:text-[#7a1223] underline transition-colors cursor-pointer"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-3xl p-7 sm:p-10 border border-[#e9e1d3] shadow-lg flex flex-col gap-6"
    >
      <div className="border-b border-[#f4efe6] pb-5">
        <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#9e7832] mb-1">
          <Sparkles className="w-3 h-3" />
          <span>Tailor-Made Travel Concierge</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1b1d22]">
          Send an Enquiry
        </h3>
        <p className="text-xs text-[#717786] mt-1 font-light">
          Share your holiday aspirations and our Thrissur-based specialists will design an unforgettable itinerary.
        </p>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="fullName"
            className="block text-[11px] font-bold uppercase tracking-wider text-[#282b33] mb-2"
          >
            Full Name <span className="text-[#7a1223]">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={form.fullName}
            onChange={(e) => {
              setForm({ ...form, fullName: e.target.value });
              if (errors.fullName) setErrors({ ...errors, fullName: undefined });
            }}
            placeholder="e.g. Rahul Menon"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#1b1d22] bg-[#faf7f2] focus:outline-none focus:ring-2 focus:ring-[#7a1223]/20 focus:border-[#7a1223] transition-all ${
              errors.fullName ? "border-red-500 bg-red-50/20" : "border-[#e9e1d3]"
            }`}
          />
          {errors.fullName && (
            <p className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-[11px] font-bold uppercase tracking-wider text-[#282b33] mb-2"
          >
            Email Address <span className="text-[#7a1223]">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder="e.g. rahul@example.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#1b1d22] bg-[#faf7f2] focus:outline-none focus:ring-2 focus:ring-[#7a1223]/20 focus:border-[#7a1223] transition-all ${
              errors.email ? "border-red-500 bg-red-50/20" : "border-[#e9e1d3]"
            }`}
          />
          {errors.email && (
            <p className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-[11px] font-bold uppercase tracking-wider text-[#282b33] mb-2"
          >
            Phone / WhatsApp <span className="text-[#7a1223]">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => {
              setForm({ ...form, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: undefined });
            }}
            placeholder="e.g. +91 98765 43210"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-[#1b1d22] bg-[#faf7f2] focus:outline-none focus:ring-2 focus:ring-[#7a1223]/20 focus:border-[#7a1223] transition-all ${
              errors.phone ? "border-red-500 bg-red-50/20" : "border-[#e9e1d3]"
            }`}
          />
          {errors.phone && (
            <p className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="destination"
            className="block text-[11px] font-bold uppercase tracking-wider text-[#282b33] mb-2"
          >
            Destination of Interest
          </label>
          <input
            id="destination"
            type="text"
            value={form.destination}
            onChange={(e) => setForm({ ...form, destination: e.target.value })}
            placeholder="e.g. Kerala, Rajasthan, Maldives, Europe"
            className="w-full px-4 py-3 rounded-xl border border-[#e9e1d3] text-sm text-[#1b1d22] bg-[#faf7f2] focus:outline-none focus:ring-2 focus:ring-[#7a1223]/20 focus:border-[#7a1223] transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="travelDates"
            className="block text-[11px] font-bold uppercase tracking-wider text-[#282b33] mb-2"
          >
            Preferred Travel Dates
          </label>
          <input
            id="travelDates"
            type="text"
            value={form.travelDates}
            onChange={(e) => setForm({ ...form, travelDates: e.target.value })}
            placeholder="e.g. Next Month / Flexible"
            className="w-full px-4 py-3 rounded-xl border border-[#e9e1d3] text-sm text-[#1b1d22] bg-[#faf7f2] focus:outline-none focus:ring-2 focus:ring-[#7a1223]/20 focus:border-[#7a1223] transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="travellers"
            className="block text-[11px] font-bold uppercase tracking-wider text-[#282b33] mb-2"
          >
            Number of Travellers
          </label>
          <input
            id="travellers"
            type="text"
            value={form.travellers}
            onChange={(e) => setForm({ ...form, travellers: e.target.value })}
            placeholder="e.g. 2 Adults, 4 Persons"
            className="w-full px-4 py-3 rounded-xl border border-[#e9e1d3] text-sm text-[#1b1d22] bg-[#faf7f2] focus:outline-none focus:ring-2 focus:ring-[#7a1223]/20 focus:border-[#7a1223] transition-all"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[11px] font-bold uppercase tracking-wider text-[#282b33] mb-2"
        >
          Your Travel Vision / Specific Requirements
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about special occasions, preferred hotels, sightseeing interests, or specific requests..."
          className="w-full px-4 py-3 rounded-xl border border-[#e9e1d3] text-sm text-[#1b1d22] bg-[#faf7f2] focus:outline-none focus:ring-2 focus:ring-[#7a1223]/20 focus:border-[#7a1223] transition-all"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-2.5 bg-[#7a1223] hover:bg-[#5c0c19] disabled:bg-[#7a1223]/60 text-white py-4 px-8 rounded-full font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
        >
          {submitting ? (
            <span>Securing Request...</span>
          ) : (
            <>
              <span>Send Enquiry</span>
              <Send className="w-4 h-4 text-[#d6ad55]" />
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-[#717786]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#9e7832]" />
          <span>Your privacy is safeguarded. No spam, ever.</span>
        </div>
      </div>
    </form>
  );
}
