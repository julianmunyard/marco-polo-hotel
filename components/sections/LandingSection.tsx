"use client";

import { useState, useEffect, useRef } from "react";

export default function LandingSection() {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [hasFadedOut, setHasFadedOut] = useState(false);
  const landingSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Only run this on home page
    if (window.location.pathname !== '/') {
      return;
    }

    // Set status bar to black for landing screen
    const themeColorMeta = document.getElementById('theme-color-meta') as HTMLMetaElement;
    const appleStatusBarMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]') as HTMLMetaElement;
    
    if (themeColorMeta) {
      themeColorMeta.content = '#000000';
    }
    if (appleStatusBarMeta) {
      appleStatusBarMeta.content = 'black';
    }

    // Reset scroll position to top
    window.scrollTo(0, 0);

    // Prevent scrolling initially
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleEnter = () => {
    setIsFadingOut(true);
    
    // Change status bar to white when transitioning to main page
    const themeColorMeta = document.getElementById('theme-color-meta') as HTMLMetaElement;
    const appleStatusBarMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]') as HTMLMetaElement;
    
    if (themeColorMeta) {
      themeColorMeta.content = '#ffffff';
    }
    if (appleStatusBarMeta) {
      appleStatusBarMeta.content = 'default';
    }
    
    // Enable scrolling after fade starts
    document.body.style.overflow = '';
    
    // Remove landing section after fade completes
    setTimeout(() => {
      setHasFadedOut(true);
    }, 1200); // Match fade duration
  };

  if (hasFadedOut) {
    return null;
  }

  return (
    <section 
      ref={landingSectionRef}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[100]"
      style={{ 
        height: '100vh',
        width: '100vw',
        opacity: isFadingOut ? 0 : 1,
        transition: 'opacity 1.2s ease-in-out',
        pointerEvents: isFadingOut ? 'none' : 'auto'
      }}
    >
      {/* Centered Content: Video Logo and Book Now Button */}
      <div className="flex flex-col items-center justify-center w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-contain px-8 mb-6 md:mb-8"
          style={{ 
            maxHeight: '60vh', 
            maxWidth: '90vw'
          }}
        >
          <source src="/marco%20polo%20images/marco%20polo%20slow%20zoom.mp4" type="video/mp4" />
        </video>

        {/* Book Now Button - Just below video */}
        {!isFadingOut && (
          <button
            onClick={handleEnter}
            className="btn px-12 py-4 uppercase tracking-wider bg-white text-black border-[3px] border-black hover:bg-gray-100"
            style={{
              minHeight: '60px',
              fontSize: '1rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              boxShadow: '4px 4px 0 0 rgb(156,163,175)',
              transition: 'all 200ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(2px, 2px)';
              e.currentTarget.style.boxShadow = '2px 2px 0 0 rgb(156,163,175)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = '4px 4px 0 0 rgb(156,163,175)';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'translate(4px, 4px)';
              e.currentTarget.style.boxShadow = '0 0 0 0 rgb(156,163,175)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translate(2px, 2px)';
              e.currentTarget.style.boxShadow = '2px 2px 0 0 rgb(156,163,175)';
            }}
          >
            Book Now
          </button>
        )}
      </div>
    </section>
  );
}
