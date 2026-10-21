"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  MessageCircle,
  ArrowRight,
  AlertCircle,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { BRAND } from "@/lib/content";

export default function ContactContent() {
  const searchParams = useSearchParams();
  const packageParam = searchParams.get("package");
  const serviceParam = searchParams.get("service");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travellers: "",
    message: "",
  });

  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (packageParam) {
      setForm((prev) => ({
        ...prev,
        destination: packageParam,
        message: `I'm interested in the "${packageParam}" package. Please provide itinerary and pricing details.`,
      }));
    } else if (serviceParam) {
      setForm((prev) => ({
        ...prev,
        message: `I would like to enquire about your "${serviceParam}" service.`,
      }));
    }
  }, [packageParam, serviceParam]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setFormError("Please fill in all required fields (Name, Email, Phone).");
      return;
    }
    setFormError("");

    const lines = [
      `*Name:* ${form.name.trim()}`,
      `*Phone:* ${form.phone.trim()}`,
      `*Email:* ${form.email.trim()}`,
      form.destination.trim() ? `*Destination:* ${form.destination.trim()}` : null,
      form.travelDate.trim() ? `*Date:* ${form.travelDate.trim()}` : null,
      form.travellers.trim() ? `*Travellers:* ${form.travellers.trim()}` : null,
      form.message.trim() ? `*Message:* ${form.message.trim()}` : null,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/918606555538?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#faf7f2] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
          alt="Tropical Sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2]/90 via-[#faf7f2]/95 to-[#faf7f2]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-16 sm:pt-24 pb-20 relative z-10">
        {/* Page Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#9E7832] font-sans block mb-2">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#141517] tracking-tight leading-tight mb-4">
            Let&apos;s Plan Your Journey
          </h1>
          <p className="text-xs sm:text-sm text-[#4a505a] leading-relaxed font-light">
            Tell us where you want to go — our team of dedicated travel specialists in Thrissur will take care of every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Contact Details & Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white/80 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-[#e9e1d3] shadow-md flex flex-col gap-6">
              <h2 className="text-lg font-serif font-bold text-[#141517] border-b border-[#f0eae1] pb-3">
                Contact Information
              </h2>

              <div className="flex flex-col gap-5 text-xs sm:text-[13px] text-[#282b33]">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#8B1D2C] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-[#9E7832] font-semibold">Call Us</span>
                    <a
                      href={BRAND.phoneOfficeTel}
                      className="font-semibold hover:text-[#8B1D2C] transition-colors"
                    >
                      {BRAND.phoneOffice} (Office)
                    </a>
                    <a
                      href={BRAND.phoneHolidaysTel}
                      className="text-[#4a505a] hover:text-[#8B1D2C] transition-colors"
                    >
                      {BRAND.phoneHolidays} (Holidays)
                    </a>
                    <a
                      href={BRAND.phoneSupportTel}
                      className="font-bold text-[#8B1D2C] hover:underline"
                    >
                      {BRAND.phoneSupport} (24/7 Support)
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-[#9E7832] font-semibold">WhatsApp Direct</span>
                    <a
                      href={BRAND.whatsapp1Url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-[#25D366] transition-colors"
                    >
                      {BRAND.whatsapp1} (Primary)
                    </a>
                    <a
                      href={BRAND.whatsapp2Url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4a505a] hover:text-[#25D366] transition-colors"
                    >
                      {BRAND.whatsapp2} (Support)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#8B1D2C] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-[#9E7832] font-semibold">Email Us</span>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="font-semibold hover:text-[#8B1D2C] transition-colors"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#8B1D2C] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] uppercase tracking-wider text-[#9E7832] font-semibold">Visit Our Office</span>
                    <p className="leading-relaxed text-xs text-[#4a505a]">
                      <strong className="text-[#141517] block">YAARA TRAVELS</strong>
                      Kizhipilly Towers, Opp. Peechi&apos;s Hospital, Peechi Road,
                      Thrissur – 680652, Kerala, India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges Card */}
            <div className="bg-[#f3ece0] rounded-2xl p-5 border border-[#e4d7c6] flex flex-col gap-3 text-xs text-[#524434]">
              <div className="flex items-center gap-2 text-[#8B1D2C] font-semibold">
                <Clock className="w-4 h-4" />
                <span>Working Hours: Mon – Sat (9:00 AM – 7:30 PM)</span>
              </div>
              <div className="flex items-center gap-2 text-[#34523a] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                <span>24/7 Dedicated Assistance for On-Tour Travellers</span>
              </div>
            </div>
          </div>

          {/* Right: Send Us an Enquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-9 border border-[#e9e1d3] shadow-xl">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#141517] mb-2">
                Send Us an Enquiry
              </h2>
              <p className="text-xs text-[#626875] mb-6">
                Fill in the details below and we will get back to you with custom quotes and options.
              </p>

              <form onSubmit={handleFormSubmit} className="flex flex-col gap-3.5">
                  {formError && (
                    <div className="bg-red-50 text-red-600 text-xs p-2.5 rounded-lg border border-red-200 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e9e1d3] text-xs text-[#141517] bg-[#faf7f2] focus:outline-none focus:border-[#8B1D2C]"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e9e1d3] text-xs text-[#141517] bg-[#faf7f2] focus:outline-none focus:border-[#8B1D2C]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp *"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e9e1d3] text-xs text-[#141517] bg-[#faf7f2] focus:outline-none focus:border-[#8B1D2C]"
                    />

                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Destination (e.g. Kerala, Maldives, Europe)"
                        value={form.destination}
                        onChange={(e) =>
                          setForm({ ...form, destination: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e9e1d3] text-xs text-[#141517] bg-[#faf7f2] focus:outline-none focus:border-[#8B1D2C]"
                      />
                      <MapPin className="w-3.5 h-3.5 text-[#8e95a5] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Preferred Travel Dates"
                        value={form.travelDate}
                        onChange={(e) =>
                          setForm({ ...form, travelDate: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e9e1d3] text-xs text-[#141517] bg-[#faf7f2] focus:outline-none focus:border-[#8B1D2C]"
                      />
                      <Calendar className="w-3.5 h-3.5 text-[#8e95a5] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Number of Travellers (e.g. 2, 4)"
                        value={form.travellers}
                        onChange={(e) =>
                          setForm({ ...form, travellers: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e9e1d3] text-xs text-[#141517] bg-[#faf7f2] focus:outline-none focus:border-[#8B1D2C]"
                      />
                      <Users className="w-3.5 h-3.5 text-[#8e95a5] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your dream trip — special requirements, preferred hotel standard, budget, or questions..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e9e1d3] text-xs text-[#141517] bg-[#faf7f2] focus:outline-none focus:border-[#8B1D2C]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#8B1D2C] hover:bg-[#6e1421] text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md cursor-pointer mt-1 active:scale-98"
                  >
                    <span>Send Enquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
            </div>
          </div>
        </div>

        {/* Location Map Section */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#e9e1d3] shadow-lg overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 px-2">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9E7832] font-sans block mb-1">
                  LOCATION &amp; DIRECTIONS
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#141517]">
                  Find Us on the Map
                </h2>
                <p className="text-xs text-[#626875] mt-0.5">
                  YAARA TRAVELS, Kizhipilly Towers, Opp. Peechi&apos;s Hospital, Peechi Road, Thrissur – 680652, Kerala
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=YAARA+TRAVELS+Kizhipilly+Towers+Peechi+Road+Thrissur+Kerala+680652"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#8B1D2C] hover:bg-[#6e1421] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors shadow-xs shrink-0"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>

            <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#e9e1d3] bg-[#faf7f2]">
              <iframe
                title="YAARA TRAVELS Location Map"
                src="https://maps.google.com/maps?q=Kizhipilly%20Towers%2C%20Opp.%20Peechi's%20Hospital%2C%20Peechi%20Road%2C%20Thrissur%2C%20Kerala%20680652&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
