"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getHeroContent } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/utils";

interface HeroData {
  backgroundImage: any;
  subtitle: string;
  supportingText: string;
}

export default function HeroSection() {
  const pathname = usePathname();
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHeroContent() {
      try {
        const content = await getHeroContent();
        setHeroData(content);
      } catch (error) {
        console.error('Error fetching hero content:', error);
        // Fallback to default values
        setHeroData({
          backgroundImage: null,
          subtitle: "Roadside comfort, minutes from Sydney CBD.",
          supportingText: "Comfortable rooms, easy parking, honest prices.",
        });
      } finally {
        setLoading(false);
      }
    }
    fetchHeroContent();
  }, []);

  const handleSeeRoomsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we're on the home page, scroll to rooms section
    if (pathname === '/') {
      e.preventDefault();
      const roomsSection = document.getElementById('rooms');
      if (roomsSection) {
        roomsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // If on another page, the link will navigate to /#rooms normally
  };

  const handleScrollHintClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      const roomsSection = document.getElementById('rooms');
      if (roomsSection) {
        roomsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const backgroundImageUrl = heroData?.backgroundImage 
    ? urlFor(heroData.backgroundImage).width(1920).height(1080).url()
    : '/marco%20polo%20images/sunset%20marco.jpg';

  const subtitle = heroData?.subtitle || "Roadside comfort, minutes from Sydney CBD.";
  const supportingText = heroData?.supportingText || "Comfortable rooms, easy parking, honest prices.";

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay with fade-in */}
      <div className="hero-overlay absolute inset-0 bg-black/40 z-[1]"></div>
      
      {/* Hero content - centered */}
      <div className="hero-content relative z-[2] text-center">
        <h1 className="hero-title">Marco Polo</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <p className="hero-supporting">{supportingText}</p>
        
        <div className="hero-cta-group">
          <Link 
            href="/#rooms" 
            onClick={handleSeeRoomsClick} 
            className="hero-cta-primary"
          >
            See Rooms
          </Link>
          <Link 
            href="/about-us-hotels-in-sydney" 
            className="hero-cta-secondary"
          >
            About the inn
          </Link>
        </div>
      </div>
      
      {/* Scroll hint with delayed fade-in */}
      <Link 
        href="/#rooms" 
        onClick={handleScrollHintClick}
        className="hero-scroll-hint"
        aria-label="Scroll to rooms"
      >
        <span>Scroll to rooms</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </Link>
    </section>
  );
}
