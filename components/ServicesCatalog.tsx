import React from "react";
import { SERVICES } from "@/lib/content";
import ServiceCard from "./ServiceCard";

interface ServicesCatalogProps {
  initialCount?: number;
  isHomePage?: boolean;
}

export default function ServicesCatalog({
  initialCount = 3,
  isHomePage = false,
}: ServicesCatalogProps) {
  const displayedServices = isHomePage ? SERVICES.slice(0, initialCount) : SERVICES;

  return (
    <div>
      {/* 3-column Grid on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayedServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
