"use client";

import { useState, useMemo, useEffect } from "react";
import RoomCard from "@/components/ui/RoomCard";
import { rooms } from "@/data/rooms";

interface RoomsSectionProps {
  showTitle?: boolean;
}

export default function RoomsSection({ showTitle = true }: RoomsSectionProps) {
  const [filter, setFilter] = useState<"deluxe" | "standard">("deluxe");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const roomType = params.get("room_type");
    if (roomType === "deluxe" || roomType === "standard") {
      setFilter(roomType);
    }
  }, []);

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => room.type === filter);
  }, [filter]);

  return (
    <section id="rooms" className="section bg-section">
      <div className="container">
        {showTitle && (
          <div className="text-center mb-12 px-4">
            <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-900 uppercase tracking-tight">
              Our Rooms
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Choose from our selection of comfortable, well-appointed rooms designed for your relaxation
            </p>
          </div>
        )}
        
        {/* Spacer between description and buttons */}
        <div className="h-6 md:h-8"></div>
        
        {/* Filter Tabs - Redesigned with better spacing */}
        <div className="flex justify-center items-center gap-8 px-4">
          <div className="border-t-2 border-black flex-1 max-w-xs"></div>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setFilter("deluxe")}
              className={`px-8 py-3 border-[3px] text-sm font-bold transition-all whitespace-nowrap uppercase tracking-wide ${
                filter === "deluxe"
                  ? "bg-black text-white border-black shadow-[4px_4px_0_0_rgb(156,163,175)]"
                  : "bg-white text-gray-900 border-black hover:bg-gray-100 shadow-[4px_4px_0_0_rgb(156,163,175)]"
              }`}
              type="button"
            >
              Deluxe
            </button>
            <button
              onClick={() => setFilter("standard")}
              className={`px-8 py-3 border-[3px] text-sm font-bold transition-all whitespace-nowrap uppercase tracking-wide ${
                filter === "standard"
                  ? "bg-black text-white border-black shadow-[4px_4px_0_0_rgb(156,163,175)]"
                  : "bg-white text-gray-900 border-black hover:bg-gray-100 shadow-[4px_4px_0_0_rgb(156,163,175)]"
              }`}
              type="button"
            >
              Standard
            </button>
          </div>
          <div className="border-t-2 border-black flex-1 max-w-xs"></div>
        </div>

        {/* Spacer for more space between buttons and cards */}
        <div className="h-8 md:h-12"></div>

        {/* Room Grid - Using items-stretch to ensure all cards have same height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
