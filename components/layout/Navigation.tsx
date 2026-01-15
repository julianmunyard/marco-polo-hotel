"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "@/components/ui/Logo";

const navItems = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/about-us-hotels-in-sydney" },
  { label: "Rooms", href: "/sydney-hotel-accommodation" },
  { label: "Attractions", href: "/sydney-attractions" },
  { label: "Reviews", href: "/reviews" },
  { label: "Location Hire", href: "/location-hire" },
  { label: "Contact", href: "/sydney-hotels-contact-us" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Mark that this is a navigation to home (not a refresh)
    // This prevents the landing screen from showing
    sessionStorage.setItem('marco-polo-navigated', 'true');
    
    // If we're on the home page, scroll to hero and dismiss landing section
    if (pathname === '/') {
      e.preventDefault();
      
      // Dismiss landing section if it exists
      const landingSection = document.querySelector('section[class*="fixed inset-0"]');
      if (landingSection) {
        const enterButton = landingSection.querySelector('button');
        if (enterButton) {
          enterButton.click();
        }
      }
      
      // Scroll to hero section after a brief delay to allow landing to fade
      setTimeout(() => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
    // If on another page, the link will navigate to /#hero normally
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
        <div className="container">
          <div className="flex items-center justify-between py-2 md:py-3 min-h-[80px] md:min-h-[100px]">
            {/* Desktop Menu Button on left */}
            <div className="hidden md:flex items-center">
              <button
                className="p-1.5 flex-shrink-0"
                onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
                aria-label="Toggle menu"
                type="button"
              >
                <svg
                  className="w-5 h-5 text-gray-900"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {desktopMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Logo on left for mobile, center for desktop */}
            <div className="flex items-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 overflow-hidden">
              <Link href="/#hero" onClick={pathname === '/' ? handleHomeClick : undefined} className="flex items-center" aria-label="Marco Polo Motel Home">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-14 md:h-18 lg:h-20 w-auto object-contain"
                  style={{ maxWidth: '220px' }}
                >
                  <source src="/marco%20polo%20images/marco%20video%20animation.mp4" type="video/mp4" />
                </video>
              </Link>
            </div>
          
            {/* Desktop Book Now Button on right */}
            <div className="hidden md:flex items-center">
              <Link
                href="https://bookings12.rmscloud.com/Search/Index/0C8B2754C6C8240A/1/"
                target="_blank"
                className="border border-black bg-transparent text-black uppercase transition-all hover:opacity-80"
                style={{
                  backgroundColor: 'transparent',
                  padding: '10px 20px',
                  fontSize: '15px',
                  fontFamily: "'Cantata One', serif",
                }}
              >
                BOOK NOW
              </Link>
            </div>

            {/* Mobile menu button on right */}
            <div className="md:hidden flex items-center">
              <button
                className="p-2 -mr-2 flex-shrink-0"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                type="button"
              >
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 pb-8 animate-fade-in">
              <div className="flex flex-col gap-4 items-center">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      if (item.label === "Home") {
                        handleHomeClick(e);
                      }
                    }}
                    className={`text-base font-medium transition-colors py-2 px-2 uppercase text-center ${
                      pathname === item.href || (item.label === "Home" && pathname === "/")
                        ? "text-gray-900"
                        : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

    {/* Desktop Slide-out Menu */}
    <div 
      className={`fixed top-0 left-0 h-full bg-white border-r-2 border-black z-40 transform transition-transform duration-300 ease-in-out ${
        desktopMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ width: '300px', paddingTop: '64px' }}
    >
      <div className="p-6">
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => {
                setDesktopMenuOpen(false);
                if (item.label === "Home") {
                  handleHomeClick(e);
                }
              }}
              className={`text-base font-medium transition-colors py-2 px-2 uppercase ${
                pathname === item.href || (item.label === "Home" && pathname === "/")
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>

    {/* Overlay when menu is open */}
    {desktopMenuOpen && (
      <div
        className="fixed inset-0 bg-black/20 z-30 md:block hidden"
        onClick={() => setDesktopMenuOpen(false)}
      />
    )}
    </>
  );
}
