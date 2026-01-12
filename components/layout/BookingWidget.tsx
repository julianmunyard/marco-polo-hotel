"use client";

import { useState } from "react";

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [children, setChildren] = useState(0);
  const [promoCode, setPromoCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      checkin: checkIn,
      checkout: checkOut,
      guests: guests.toString(),
      children: children.toString(),
    });
    if (promoCode) {
      params.append("promo", promoCode);
    }
    window.location.href = `https://bookings12.rmscloud.com/Search/Index/0C8B2754C6C8240A/1/?${params.toString()}`;
  };

  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  return (
    <div className="bg-gray-50 border-b border-gray-200 w-full">
      <div className="container py-4">
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-3 items-end">
          <div className="flex-1 min-w-[140px] max-w-full">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              min={today}
              className="w-full px-3 md:px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
              required
            />
          </div>
          <div className="flex-1 min-w-[140px] max-w-full">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Check-out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={checkIn || tomorrow}
              className="w-full px-3 md:px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
              required
            />
          </div>
          <div className="min-w-[100px] flex-1 sm:flex-initial max-w-full">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full px-3 md:px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="min-w-[100px] flex-1 sm:flex-initial max-w-full">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Children
            </label>
            <select
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="w-full px-3 md:px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
            >
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="min-w-[140px] flex-1 sm:flex-initial max-w-full">
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Promo Code
            </label>
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Optional"
              className="w-full px-3 md:px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
