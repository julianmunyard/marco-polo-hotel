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

    // Check if this is a reload/refresh
    // On refresh, clear the flag so landing screen shows
    let isReload = false;
    
    try {
      const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      if (navEntries.length > 0) {
        const navType = navEntries[0].type;
        if (navType === 'reload') {
          isReload = true;
        }
      }
      // Also try legacy Navigation Timing API as fallback
      // @ts-ignore - legacy API
      if (performance.navigation && performance.navigation.type === 1) {
        isReload = true;
      }
    } catch (e) {
      // Error - will check flag below
    }

    // If it's a reload, clear the flag
    if (isReload) {
      sessionStorage.removeItem('marco-polo-navigated');
    }

    // Check the flag - if flag is set (and it's not a reload), hide landing screen
    const hasNavigated = sessionStorage.getItem('marco-polo-navigated');
    
    if (hasNavigated === 'true' && !isReload) {
      // Flag was set and it's not a reload - this is a navigation, don't show landing screen
      setHasFadedOut(true);
      return;
    }

    // Either it's a reload (flag cleared) or no flag set - show landing screen

    // This is a fresh page load/refresh - show landing screen

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
        pointerEvents: isFadingOut ? 'none' : 'auto',
        willChange: 'opacity'
      }}
    >
      {/* Centered Content: Video Logo and Book Now Button */}
      <div className="flex flex-col items-center justify-center w-full h-full" style={{ position: 'relative' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-contain px-8 mb-6 md:mb-8"
          style={{ 
            maxHeight: '60vh', 
            maxWidth: '90vw',
            position: 'relative',
            willChange: 'auto'
          }}
        >
          <source src="/marco%20polo%20images/marco%20polo%20slow%20zoom.mp4" type="video/mp4" />
        </video>

        {/* Book Now Button - Just below video */}
        <button
          onClick={handleEnter}
          className="btn px-12 py-4 uppercase tracking-wider bg-transparent text-white border-[3px] border-white hover:bg-white/10"
          style={{
            minHeight: '60px',
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            transition: 'all 200ms ease',
            opacity: isFadingOut ? 0 : 1,
            position: 'relative'
          }}
        >
          Book Now
        </button>
      </div>
    </section>
  );
}
