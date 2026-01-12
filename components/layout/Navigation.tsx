"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "@/components/ui/Logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us-hotels-in-sydney" },
  { label: "Rooms", href: "/sydney-hotel-accommodation" },
  { label: "Attractions", href: "/sydney-attractions" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/sydney-hotels-contact-us" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container">
        <div className="flex flex-col">
          {/* Logo Row */}
          <div className="flex items-center justify-between py-4 min-h-[64px]">
            {/* Spacer on left */}
            <div className="flex-1 hidden md:block"></div>
            
            {/* Logo in center - Replaced with white background video */}
            <div className="flex-1 flex justify-center px-2 md:px-0">
              <Link href="/" className="flex items-center justify-center" aria-label="Marco Polo Motel Home">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-20 md:h-24 lg:h-32 w-auto object-contain max-w-[90vw] sm:max-w-[350px]"
                  style={{ maxWidth: '350px' }}
                >
                  <source src="/marco%20polo%20images/marco%20video%20animation.mp4" type="video/mp4" />
                </video>
              </Link>
            </div>
            
            {/* Mobile menu button on right */}
            <div className="flex-1 flex justify-end items-center gap-4">
              <button
                className="md:hidden p-2 -mr-2 flex-shrink-0"
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

          {/* Desktop Navigation - Underneath logo, always visible */}
          <div className="hidden md:flex items-center justify-center pb-4 pt-4 gap-6 lg:gap-8 flex-wrap">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium text-sm whitespace-nowrap px-2 uppercase"
              >
                <span className={`transition-colors ${
                  pathname === item.href
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                  className={`text-base font-medium transition-colors py-2 px-2 uppercase ${
                    pathname === item.href
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
