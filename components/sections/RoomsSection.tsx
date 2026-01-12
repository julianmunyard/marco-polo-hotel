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
    <>
      {showTitle && (
        <div className="text-center mb-16 px-4 border-b-2 border-black pb-12">
          <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-900 uppercase tracking-tight">
            Our Rooms
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed pb-4">
            Choose from our selection of comfortable, well-appointed rooms designed for your relaxation
          </p>
        </div>
      )}
      
      {/* Filter Tabs - Vintage Style */}
      <div className="flex justify-center gap-6 mb-24 px-4 flex-wrap mt-12">
        <button
          onClick={() => setFilter("deluxe")}
          className={`px-6 py-2.5 border-[3px] text-sm font-bold transition-all whitespace-nowrap uppercase tracking-wide ${
            filter === "deluxe"
              ? "bg-black text-white border-black shadow-[4px_4px_0_0_rgb(156,163,175)]"
              : "bg-transparent text-gray-900 border-black hover:bg-black hover:text-white shadow-[4px_4px_0_0_rgb(156,163,175)]"
          }`}
          type="button"
        >
          Deluxe
        </button>
        <button
          onClick={() => setFilter("standard")}
          className={`px-6 py-2.5 border-[3px] text-sm font-bold transition-all whitespace-nowrap uppercase tracking-wide ${
            filter === "standard"
              ? "bg-black text-white border-black shadow-[4px_4px_0_0_rgb(156,163,175)]"
              : "bg-transparent text-gray-900 border-black hover:bg-black hover:text-white shadow-[4px_4px_0_0_rgb(156,163,175)]"
          }`}
          type="button"
        >
          Standard
        </button>
      </div>

      {/* Room Grid - Using items-stretch to ensure all cards have same height */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mt-16">
        {filteredRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </>
  );
}
