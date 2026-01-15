"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeroSection() {
  const pathname = usePathname();

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

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(/marco%20polo%20images/sunset%20marco.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]"></div>
      {/* Bento Container - Left Side */}
      <div className="container relative z-[2] px-4 md:px-0 py-8 md:py-20 lg:py-32">
        {/* Mobile Design */}
        <div className="md:hidden flex flex-col items-center justify-center w-full min-h-[80vh]">
          {/* Action Buttons - Mobile */}
          <div className="flex flex-col gap-0 w-full max-w-xs items-center">
              <Link
                href="/#rooms"
                onClick={handleSeeRoomsClick}
                className="bg-transparent text-white px-8 py-4 w-full text-center uppercase tracking-wide transition-all active:scale-95"
                style={{
                  fontFamily: "'GT America Mono', 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Courier New', monospace",
                  textTransform: 'lowercase',
                  fontWeight: 600,
                  boxShadow: 'none',
                  minHeight: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                see rooms
              </Link>
              <Link
                href="https://bookings12.rmscloud.com/Search/Index/0C8B2754C6C8240A/1/"
                target="_blank"
                className="bg-transparent text-white px-8 py-4 w-full text-center uppercase tracking-wide transition-all active:scale-95"
                style={{
                  fontFamily: "'GT America Mono', 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Courier New', monospace",
                  textTransform: 'lowercase',
                  fontWeight: 600,
                  boxShadow: 'none',
                  minHeight: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                book now
              </Link>
          </div>
        </div>

        {/* Desktop Design */}
        <div className="hidden md:flex flex-col gap-6 items-start">
          {/* Combined Box */}
          <div className="bg-transparent border-[4px] border-white p-8 lg:p-10 xl:p-12 w-auto md:max-w-max text-left">
              <h1 
                className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight uppercase mb-4 lg:mb-6"
                style={{ 
                  fontFamily: "'Skranji', cursive",
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2',
                  fontWeight: 700,
                  color: '#ffffff'
                }}
              >
                MARCO POLO SYDNEY HOTEL
              </h1>

              {/* Links inside box */}
              <div className="flex flex-row gap-6 items-start mt-2">
                <Link
                  href="/#rooms"
                  onClick={handleSeeRoomsClick}
                  className="text-base uppercase tracking-wide transition-colors hover:opacity-80"
                  style={{
                    fontFamily: "'GT America Mono', 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Courier New', monospace",
                    color: '#ffffff',
                    textTransform: 'lowercase'
                  }}
                >
                  see rooms
                </Link>
                <Link
                  href="https://bookings12.rmscloud.com/Search/Index/0C8B2754C6C8240A/1/"
                  target="_blank"
                  className="text-base uppercase tracking-wide transition-colors hover:opacity-80"
                  style={{
                    fontFamily: "'GT America Mono', 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Courier New', monospace",
                    color: '#ffffff',
                    textTransform: 'lowercase'
                  }}
                >
                  book now
                </Link>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
