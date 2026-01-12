"use client";

import { useState, useRef, useEffect } from "react";

export default function FloatingVideoPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const videoBoxRef = useRef<HTMLDivElement>(null);

  const handleStartDrag = (clientX: number, clientY: number) => {
    if (!videoBoxRef.current) return;
    const rect = videoBoxRef.current.getBoundingClientRect();
    setDragOffset({
      x: clientX - rect.left,
      y: clientY - rect.top
    });
    setIsDragging(true);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    // Only prevent dragging if clicking directly on the close button
    const target = e.target as HTMLElement;
    if (target.closest('button[aria-label="Close Video"]')) return;
    handleStartDrag(e.clientX, e.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    // Only prevent dragging if touching directly on the close button
    const target = e.target as HTMLElement;
    if (target.closest('button[aria-label="Close Video"]')) return;
    const touch = e.touches[0];
    handleStartDrag(touch.clientX, touch.clientY);
  };

  useEffect(() => {
    const handleMove = (clientX: number, clientY: number) => {
      if (isDragging) {
        // Constrain to viewport
        const maxX = window.innerWidth - (videoBoxRef.current?.offsetWidth || 400);
        const maxY = window.innerHeight - (videoBoxRef.current?.offsetHeight || 250);
        setPosition({
          x: Math.max(0, Math.min(maxX, clientX - dragOffset.x)),
          y: Math.max(0, Math.min(maxY, clientY - dragOffset.y))
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, dragOffset]);

  return (
    <>
      {/* Video Icon Button - Bottom Right */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors border-2 border-white"
        style={{
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-label="Watch Video"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      </button>

      {/* Draggable Video Box */}
      {isOpen && (
        <div
          ref={videoBoxRef}
          className="fixed z-50 bg-white border-[3px] border-black shadow-[8px_8px_0_0_rgb(0,0,0)]"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: '400px',
            maxWidth: '90vw',
            opacity: isOpen ? 1 : 0,
            transition: isDragging ? 'none' : 'opacity 0.3s ease-out',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none'
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Close Button - Top Left */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            className="absolute -top-2 -left-2 bg-black text-white w-6 h-6 flex items-center justify-center border-2 border-black hover:bg-gray-800 transition-colors z-10"
            style={{
              fontSize: '14px',
              lineHeight: '1',
              pointerEvents: 'auto'
            }}
            aria-label="Close Video"
          >
            ×
          </button>

          {/* Video Container with Halftone Overlay */}
          <div className="relative" style={{ padding: '3px', pointerEvents: 'auto' }}>
            <div className="relative overflow-hidden" style={{ aspectRatio: '16/9', pointerEvents: 'auto' }}>
              {/* Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover pointer-events-auto"
                style={{ display: 'block', pointerEvents: 'none' }}
              >
                <source src="/marco%20polo%20images/marco%20vlog.mov" type="video/quicktime" />
                <source src="/marco%20polo%20images/marco%20vlog.mov" type="video/mp4" />
              </video>

              {/* Halftone Dots Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.9) 0.5px, transparent 0.5px)`,
                  backgroundSize: '3px 3px',
                  opacity: 0.65,
                  mixBlendMode: 'multiply'
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
