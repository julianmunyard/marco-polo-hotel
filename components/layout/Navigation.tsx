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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <div className="container">
        <div className="flex items-center justify-between py-2 md:py-4 min-h-[64px]">
          {/* Logo on left */}
          <div className="flex items-center">
            <Link href="/#hero" onClick={pathname === '/' ? handleHomeClick : undefined} className="flex items-center" aria-label="Marco Polo Motel Home">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                style={{ maxWidth: '250px' }}
              >
                <source src="/marco%20polo%20images/marco%20video%20animation.mp4" type="video/mp4" />
              </video>
            </Link>
          </div>
          
          {/* Desktop Navigation on right */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={item.label === "Home" ? handleHomeClick : undefined}
                className="font-medium text-sm whitespace-nowrap px-2 uppercase"
              >
                <span className={`transition-colors ${
                  pathname === item.href || (item.label === "Home" && pathname === "/")
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}>
                  {item.label}
                </span>
              </Link>
            ))}
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
  );
}
