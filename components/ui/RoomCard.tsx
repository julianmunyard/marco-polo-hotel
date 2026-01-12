import Link from "next/link";
import Image from "next/image";

export interface Room {
  id: string;
  type: "deluxe" | "standard";
  name: string;
  description?: string;
  capacity: {
    adults: number;
    children?: number;
  };
  beds: string;
  price: number;
  image?: string;
}

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="card group flex flex-col h-full">
      {/* Image */}
      {room.image ? (
        <div className="aspect-video rounded-lg mb-6 overflow-hidden relative flex-shrink-0">
          <Image
            src={room.image}
            alt={room.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6 overflow-hidden flex-shrink-0">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center px-2">
              <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2"></div>
              <span className="text-sm text-gray-500">Room Image</span>
            </div>
          </div>
        </div>
      )}

      {/* Content - flex-grow to push button to bottom */}
      <div className="flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 ${
            room.type === "deluxe" 
              ? "bg-blue-50 text-blue-700" 
              : "bg-gray-100 text-gray-700"
          }`}>
            {room.type.charAt(0).toUpperCase() + room.type.slice(1)}
          </span>
        </div>
        
        <h3 className="text-base font-semibold mb-2 text-gray-900 break-words">{room.name}</h3>
        {room.description && (
          <p className="text-xs text-gray-600 mb-2 break-words italic">{room.description}</p>
        )}
        <p className="text-sm text-gray-600 mb-4 break-words">{room.beds}</p>
        
        <div className="flex items-center gap-4 mb-6 text-sm text-gray-600 flex-wrap">
          <span className="flex items-center gap-1 whitespace-nowrap">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.196-2.13M9 14a3 3 0 00-3 3v2h9v-2a3 3 0 00-3-3m0 0V9a3 3 0 013-3m-3 3a3 3 0 013 3" />
            </svg>
            {room.capacity.adults}
          </span>
          {room.capacity.children && room.capacity.children > 0 && (
            <span className="flex items-center gap-1 whitespace-nowrap">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {room.capacity.children}
            </span>
          )}
        </div>
      </div>

      {/* Price and Button - Always at bottom */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-200 gap-4 mt-auto">
        <div className="flex-shrink-0">
          <div className="text-lg font-bold text-gray-900">${room.price}</div>
          <div className="text-xs text-gray-500 whitespace-nowrap">per night</div>
        </div>
        <Link
          href="https://bookings12.rmscloud.com/Search/Index/0C8B2754C6C8240A/1/"
          target="_blank"
          className="btn btn-primary flex-shrink-0"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
