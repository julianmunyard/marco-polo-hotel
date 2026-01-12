import Link from "next/link";
import { offers } from "@/data/offers";

export default function OffersSection() {
  return (
    <section className="section bg-section">
      <div className="container">
        <div className="text-center mb-12 px-4">
          <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-900">
            Special Offers
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Book early and save on your stay
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="card text-center bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 flex flex-col">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 break-words">{offer.title}</h3>
              <div className="mb-4 flex-grow">
                <div className="text-xl font-bold text-gray-900 mb-1">
                  <sup className="text-base">$</sup>
                  {offer.savings}
                </div>
                <div className="text-sm text-gray-600 break-words">
                  {offer.savingsType === "per_night" ? offer.conditions : "savings"}
                </div>
              </div>
              <Link
                href="https://bookings12.rmscloud.com/Search/Index/0C8B2754C6C8240A/1/"
                target="_blank"
                className="btn btn-primary w-full mt-auto"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
