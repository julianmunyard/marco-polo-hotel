"use client";

import { useState } from "react";
import { features } from "@/data/features";
import {
  WifiIcon,
  ParkingIcon,
  HousekeepingIcon,
  DealsIcon,
  LocationIcon,
  TrainIcon,
  AirplaneIcon,
  AttractionsIcon,
} from "@/components/ui/Icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  WifiIcon,
  ParkingIcon,
  HousekeepingIcon,
  DealsIcon,
  LocationIcon,
  TrainIcon,
  AirplaneIcon,
  AttractionsIcon,
};

export default function FeaturesSection() {
  return (
    <section className="section bg-section">
      <div className="container">
        <div className="text-center mb-16 px-4 border-b-2 border-black pb-8">
          <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-900 uppercase tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto font-medium">
            Everything you need for a comfortable and convenient stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: { id: string; iconComponent: string; title: string; description: string } }) {
  const [expanded, setExpanded] = useState(false);
  const IconComponent = iconMap[feature.iconComponent] || WifiIcon;

  return (
    <div className="card bg-white h-full flex flex-col group">
      <div className="flex justify-center mb-6 flex-shrink-0 group-hover:scale-110 transition-transform">
        <IconComponent className="w-12 h-12 text-gray-900" />
      </div>
      <h3 className="text-base font-bold mb-4 text-gray-900 break-words uppercase tracking-wide border-b-2 border-gray-300 pb-3">{feature.title}</h3>
      <p className={`text-xs text-gray-700 break-words flex-grow leading-relaxed ${!expanded && feature.description.length > 100 ? "line-clamp-3" : ""}`}>
        {feature.description}
      </p>
      {feature.description.length > 100 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm font-bold text-gray-900 hover:text-gray-700 transition-colors text-left uppercase tracking-wide border-b border-gray-900 inline-block self-start"
          type="button"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
