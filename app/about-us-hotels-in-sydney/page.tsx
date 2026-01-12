import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="bg-section" style={{ paddingTop: '200px', paddingBottom: '64px' }}>
      <div className="container max-w-6xl">
        {/* Main Title */}
        <div className="text-center mb-12 border-b-2 border-black pb-6">
          <h1 className="text-lg md:text-xl font-bold mb-4 text-gray-900 uppercase tracking-tight">
            About Us – Hotels in Sydney
          </h1>
          <h2 className="text-base md:text-lg font-semibold text-gray-800">
            Marco Polo Hotels in Sydney
          </h2>
        </div>

        {/* Main Introduction Card */}
        <div className="card mb-8">
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Marco Polo Hotels in Sydney is conveniently located near ICC Sydney, Darling Harbour, Sydney Fish Market, <em>Climb</em> the iconic Sydney <em>Harbour Bridge, Barangaroo reserve,</em> Circular Quay, Opera House, the Rocks, Paddy's Market, China Town, King Cross, Domestic and International airports and ferry terminals, Broadway shopping center, University of Sydney, pubs and bars, Factory outlets, Sydney Olympic park, showground, Accor Stadium, Sydney Cricket Ground, Allianz Stadium, ICC Sydney Theatre, Capitol Theatre, Enmore Theatre, and more.
          </p>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            <strong>Marco Polo Sydney Hotel Accommodation</strong>, where affordability meets convenience. Our hotel provides a range of amenities to ensure a comfortable stay. From speedy check-in and friendly staff to comfortable beds and daily room cleaning, en-suite bathrooms, Wi-Fi, and free secure undercover parking. Enjoy our prime location, within easy walking distance to supermarkets, cafes, restaurants, MacDonald, Red Roaster, KFC, parks, and public transportation options like <strong>Summer Hill train station, Tavarners light rail</strong>, and a bus stop at door steps.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed font-semibold">
            <strong>Marco Polo Sydney Hotels: Clean, Comfort and Convenient located Accommodation in the Heart of the Sydney</strong>
          </p>
        </div>

        {/* Location Card */}
        <div className="card mb-8">
          <h3 className="text-base font-bold mb-4 text-gray-900 uppercase tracking-wide border-b-2 border-gray-300 pb-3">
            Hotels Accommodation Convenient Location | Sydney N.S.W
          </h3>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Located just short drive from key attractions like Darling Harbour, Circular Quay, the Opera House, The Rocks, and Paddy's Market, <strong>Marco Polo Hotels Sydney</strong> offers the perfect blend of convenience and comfort. Our hotel is ideally situated near major transport hubs, including Summer Hill Train Station, Taverner's Light Rail Station, and bus stops at the doorstep. Enjoy easy access to Domestic and International airports, ferry terminals, the University of Sydney, Prince Alfred Hospital and more.
          </p>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Whether you're visiting for business or leisure, you'll appreciate our <strong>prime location</strong> near <strong>Sydney's best restaurants, cafes, supermarkets, and parks</strong>. Our <strong>affordable accommodation</strong> features <strong>amenities</strong> such as free Wi-Fi and free secure undercover parking, comfortable and cleaned rooms with en-suite bathrooms. We also offer fast check-in, friendly staff, and daily room cleaning services with high quality linens to enhance your stay.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Experience the convenience of staying in one of Sydney's best-located hotels, with a <strong>rooftop</strong>, 400m walking distance to the nearest train station, and numerous transport options nearby. Book your stay today at <strong>Marco Polo Hotels Sydney</strong>, where affordability meets comfort in the heart of the Sydney!
          </p>
        </div>

        {/* Services & Amenities */}
        <div className="card mb-8">
          <h3 className="text-base font-bold mb-4 text-gray-900 uppercase tracking-wide border-b-2 border-gray-300 pb-3">
            Marco Polo Sydney Hotel Accommodation: Clean, Convenient and Hassle-Free Stay
          </h3>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            At <strong>Marco Polo Sydney Hotel Accommodation</strong>, we are dedicated to ensuring that your stay is as comfortable and seamless as possible. Enjoy a range of <strong>amenities and services</strong> designed to make your experience exceptional:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 mb-4">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Check-in time</strong>: 2:00 PM – 11:00 PM</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Check-out time</strong>: 10:00 AM</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Early Or Late check-in and late check-out</strong>: Available upon request, subject to availability and fees.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Reception Hours</strong>: Speedy check-in from 7:00 AM to 11:00 PM (Sunday to Thursday), and 24 hours on Fridays and Saturdays</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>After-Hours Contact</strong>: Reach us at 0410 113 288, 02 8880 9320, or 02 9037 9888</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Free Parking</strong>: Enjoy complimentary private, secure parking for peace of mind</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Wi-Fi</strong>: Stay connected with free unlimited fast speed Wi-Fi throughout the hotel</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Additional Services</strong>: Snack bar, laundry service, and room service for your convenience</span>
            </li>
          </ul>
        </div>

        {/* In-Room & Property Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h3 className="text-base font-bold mb-4 text-gray-900 uppercase tracking-wide border-b-2 border-gray-300 pb-3">
              In-Room Amenities
            </h3>
            <ul className="space-y-2 text-xs text-gray-700">
              <li>• Comfortable bedding with fresh linen</li>
              <li>• Air-conditioning & heating</li>
              <li>• Free high-speed Wi-Fi</li>
              <li>• Flat-screen TV with digital channels</li>
              <li>• Microwave, kettle, toaster & minibar</li>
              <li>• Cutlery, crockery & basic kitchenware</li>
              <li>• Private ensuite bathroom with complimentary toiletries</li>
              <li>• Work desk & chair – perfect for business travelers</li>
              <li>• Iron & ironing board (on request)</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-base font-bold mb-4 text-gray-900 uppercase tracking-wide border-b-2 border-gray-300 pb-3">
              Property Amenities
            </h3>
            <ul className="space-y-2 text-xs text-gray-700">
              <li>• <strong>Free secure undercover onsite parking</strong></li>
              <li>• 24-hour express check-in/check-out available</li>
              <li>• CCTV monitored premises for added security</li>
              <li>• Vending machines for snacks & drinks</li>
              <li>• Luggage storage</li>
              <li>• Non-smoking rooms</li>
              <li>• Guest laundry room - coin operated</li>
              <li>• Laundry powder can be purchased from front desk</li>
              <li>• Rooftop Terrace</li>
            </ul>
          </div>
        </div>

        {/* Sports & Entertainment */}
        <div className="card mb-8">
          <h3 className="text-base font-bold mb-4 text-gray-900 uppercase tracking-wide border-b-2 border-gray-300 pb-3">
            Sydney Sports Events and Venues: Sports and Entertainment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-700">
            <div>
              <ul className="space-y-1">
                <li>• Ian Thorpe Aquatic and Fitness Centre</li>
                <li>• Canterbury Olympic Ice Rink</li>
                <li>• Sydney Sabre Centre</li>
                <li>• Sydney Cricket Ground, Spotless Stadium</li>
                <li>• Sydney Football Stadium – Allianz Stadium</li>
                <li>• Sydney Olympic Park</li>
                <li>• Stadium Australia – Accor Stadium</li>
                <li>• Sydney Showground, Royal Easter Show</li>
                <li>• Sydney Super Dome – Allphones Arena</li>
                <li>• Sydney Olympic Park Tennis Centre</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li>• Lambert-Park – Leichhardt</li>
                <li>• Leichhardt Park Aquatic Centre</li>
                <li>• Ashfield Aquatic Centre</li>
                <li>• North Sydney Oval</li>
                <li>• Sydney Entertainment Centre</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tourist Attractions */}
        <div className="card mb-8">
          <h3 className="text-base font-bold mb-4 text-gray-900 uppercase tracking-wide border-b-2 border-gray-300 pb-3">
            Sydney Tourist Attractions, Convention, and Entertainment Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-700">
            <div>
              <ul className="space-y-1">
                <li>• Paddy's market, Chinatown, Luna Park</li>
                <li>• Darling Harbour, The Star Casino</li>
                <li>• Circular Quay, Opera House</li>
                <li>• Sydney theater, Enmore Theater</li>
                <li>• Kings cross, C.B.D, The Rocks</li>
                <li>• Bondi Beach, Manly Beach</li>
                <li>• Sydney Royal Botanic Gardens</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li>• Sydney Fish Market, Sydney Aquarium</li>
                <li>• Sydney Tower / Sydney Tower Eye</li>
                <li>• Sydney pubs and bars</li>
                <li>• Sydney Show Boats</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Public Transport */}
        <div className="card mb-8">
          <h3 className="text-base font-bold mb-4 text-gray-900 uppercase tracking-wide border-b-2 border-gray-300 pb-3">
            Sydney Public Transport: Easy Access and Convenience
          </h3>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            At <strong>Marco Polo Hotels Sydney</strong>, you'll enjoy the convenience of being located just moments from various public transport options, making it easy to explore all that <strong>Sydney</strong> has to offer.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <strong>Train</strong>: <strong>Summer Hill Railway Station</strong> is just a short 400-meter walk from the hotel, offering quick and easy access to major Sydney destinations, including the city center, Circular Quay, and Darling Harbour.
            </li>
            <li>
              <strong>Light Rail</strong>: <strong>Taverners Hill Light Rail Station</strong> is also within walking distance. The light rail connects to key locations like <strong>Central Station</strong>, <strong>Capitol Square</strong>, <strong>Paddy's Markets</strong>, <strong>Exhibition Centre</strong>, <strong>Pyrmont Bay</strong>, <strong>The Star</strong>, and more.
            </li>
            <li>
              <strong>Bus</strong>: Numerous <strong>bus stops</strong> near the hotel allow for convenient travel across different areas of the city.
            </li>
            <li>
              <strong>Taxi</strong>: Taxis are readily available in the area.
            </li>
            <li>
              <strong>Car Rental</strong>: Several <strong>car rental agencies</strong> close to the hotel.
            </li>
          </ul>
        </div>

        {/* Universities & Hospitals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h3 className="text-base font-bold mb-4 text-gray-900 uppercase tracking-wide border-b-2 border-gray-300 pb-3">
              Nearby Universities and Educational Institutions
            </h3>
            <ul className="space-y-2 text-xs text-gray-700">
              <li>• The University of Sydney</li>
              <li>• The University of Sydney – Rozelle Campus</li>
              <li>• Australian Technology Park</li>
              <li>• The University of New South Wales</li>
              <li>• The University of Technology</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-base font-bold mb-4 text-gray-900 uppercase tracking-wide border-b-2 border-gray-300 pb-3">
              Nearby Sydney Hospitals
            </h3>
            <ul className="space-y-2 text-xs text-gray-700">
              <li>• Royal Prince Alfred Hospital</li>
              <li>• Concord Repatriation General Hospital</li>
              <li>• The Sydney Private Hospital</li>
              <li>• King George V Memorial Hospital for Mothers & Babies</li>
              <li>• Centenary Institute Medical Research Foundation</li>
              <li>• Balmain Hospital</li>
              <li>• Canterbury Hospital</li>
              <li>• St Vincent's Private Hospital Sydney</li>
            </ul>
          </div>
        </div>

        {/* Shopping & Dining */}
        <div className="card mb-8">
          <h3 className="text-base font-bold mb-4 text-gray-900 uppercase tracking-wide border-b-2 border-gray-300 pb-3">
            Sydney Shopping, Dining, and Attractions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-bold mb-3 text-gray-900 uppercase">Shopping Destinations</h4>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>• Ashfield Shopping Centre</li>
                <li>• Burwood Shopping Centre</li>
                <li>• Broadway Shopping Centre</li>
                <li>• Westfield Sydney</li>
                <li>• Paddy's Market</li>
                <li>• DFO – Homebush</li>
                <li>• ASICS Factory Outlet – Birkenhead Point</li>
                <li>• Nike Factory Outlet, Auburn</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3 text-gray-900 uppercase">Dining & Cultural Hotspots</h4>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>• Chinatown Sydney</li>
                <li>• Darling Harbour</li>
                <li>• Sydney Fish Market</li>
                <li>• The Rocks</li>
                <li>• Various cafes and restaurants</li>
                <li>• Fast food options (MacDonald, KFC, Red Rooster)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Book Direct Offers */}
        <div className="card bg-gray-50 mb-8">
          <h3 className="text-base font-bold mb-4 text-gray-900 uppercase tracking-wide border-b-2 border-black pb-3">
            Book Direct & Save
          </h3>
          <div className="space-y-4 text-sm text-gray-700">
            <p>
              <strong>Book direct at Marco Polo Sydney Accommodation | 02 8880 8320.</strong> Minimum three-day stay, total savings of $15, up to one hour free, and late check-out at 11 a.m.
            </p>
            <p>
              <strong>Book direct at Marco Polo Sydney Accommodation | 02 8880 8320.</strong> Minimum Seven-day stay, total savings of $70, up to one hour free, and late check-out at 11 a.m.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="https://bookings12.rmscloud.com/Search/Index/0C8B2754C6C8240A/1/"
              target="_blank"
              className="btn btn-primary"
            >
              Book Today
            </Link>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="card">
          <p className="text-sm text-gray-700 leading-relaxed font-semibold text-center">
            Our goal at <strong>Marco Polo Hotels in Sydney</strong> is to offer hassle-free, <strong>Clean and affordable Sydney accommodation</strong> with all the necessary amenities to make your stay enjoyable. Book your stay today and experience the best of <strong>Sydney</strong> with convenience and comfort.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed text-center mt-4">
            <strong>Marco Polo Sydney Hotel – Comfort, Convenience, and Value in the Heart of Sydney</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
