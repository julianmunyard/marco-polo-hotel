export default function HeroSection() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-section px-4" style={{ paddingTop: '200px', paddingBottom: '80px' }}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Main Card */}
          <div className="card bg-white shadow-lg p-12 md:p-20 mb-12">
            <div className="text-center">
              {/* Decorative element */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-1 bg-black"></div>
              </div>
              
              {/* Title */}
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto mb-8">
                Affordable, Comfort, Prime Sydney Location
              </h1>
              
              <h2 className="text-base md:text-lg font-semibold text-gray-700 mb-10 max-w-3xl mx-auto">
                Family-Friendly Rooms – Book Direct & Save
              </h2>
              
              {/* Divider */}
              <div className="flex justify-center mb-10">
                <div className="w-24 h-px bg-gray-300"></div>
              </div>
              
              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Select from one of our standard rooms, deluxe rooms, or family suites, all equipped with flat-screen televisions, FREE WiFi, reverse cycle air conditioning, and tea/coffee/toaster facilities.
              </p>
            </div>
          </div>
          
          {/* Buttons - Centered and better spaced */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="https://bookings12.rmscloud.com/Search/Index/0C8B2754C6C8240A/1/"
              target="_blank"
              className="btn btn-primary px-12 py-3.5 text-sm min-w-[200px] text-center"
            >
              Book Your Stay
            </a>
            <a
              href="#rooms"
              className="btn btn-secondary px-12 py-3.5 text-sm min-w-[200px] text-center"
            >
              View Rooms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
