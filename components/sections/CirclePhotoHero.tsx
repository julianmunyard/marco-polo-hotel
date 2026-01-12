"use client";

import { useState, useEffect } from "react";

const roomImages = [
  "/marco%20polo%20images/deluxe%20queen.webp",
  "/marco%20polo%20images/deluxe%20queen%20+%20single.webp",
  "/marco%20polo%20images/deluxe%20single.webp",
  "/marco%20polo%20images/queen%20room%20standard.webp",
  "/marco%20polo%20images/queen%20+%20single%20-%20standard.webp",
  "/marco%20polo%20images/single%20room%20-standard.webp",
];

export default function CirclePhotoHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roomImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + roomImages.length) % roomImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % roomImages.length);
  };

  return (
    <section className="section bg-section pb-0" style={{ marginTop: '180px', scrollMarginTop: '180px' }}>
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 gap-8 md:gap-12">
          {/* Text on the left */}
          <div className="flex-1 max-w-2xl text-left">
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
              style={{ 
                fontFamily: "'Playfair Display', 'Georgia', serif",
                letterSpacing: '-0.01em',
                lineHeight: '1.3',
                fontWeight: 700
              }}
            >
              Marco Polo Sydney Hotel Accommodation, where affordability meets convenience.
            </h2>
          </div>

          {/* Small square photo frame with vintage borders - positioned to the right */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
            {/* Outer border - thick vintage style */}
            <div className="border-[3px] border-black bg-white shadow-[8px_8px_0_0_rgb(0,0,0)] p-3">
              {/* Inner border - creates double frame effect */}
              <div className="border-[3px] border-black bg-white p-2">
                {/* Image container */}
                <div className="relative w-full h-full overflow-hidden bg-gray-100">
                  {/* Image slider */}
                  <div 
                    className="flex h-full transition-transform duration-700 ease-in-out"
                    style={{
                      transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                  >
                    {roomImages.map((image, index) => (
                      <div
                        key={index}
                        className="min-w-full h-full flex-shrink-0"
                      >
                        <img
                          src={image}
                          alt={`Room ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation arrows */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/80 text-white p-1.5 hover:bg-black transition-colors z-10 border-[2px] border-white"
                    aria-label="Previous image"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/80 text-white p-1.5 hover:bg-black transition-colors z-10 border-[2px] border-white"
                    aria-label="Next image"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Dot indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {roomImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-1.5 rounded-full transition-all border border-white ${
                          index === currentIndex
                            ? "bg-black w-6"
                            : "bg-white/80 hover:bg-white w-1.5"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                        type="button"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
