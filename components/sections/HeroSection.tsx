export default function HeroSection() {
  return (
    <section 
      className="relative flex items-center justify-center overflow-hidden"
      style={{ 
        marginTop: '-180px',
        paddingTop: '180px',
        height: 'calc(100vh + 180px)',
        minHeight: 'calc(100vh + 180px)',
        backgroundImage: 'url(/marco%20polo%20images/sunset%20marco.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content - Centered */}
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 
            className="hidden md:block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 drop-shadow-lg uppercase"
            style={{ 
              fontFamily: "'GT America Mono', 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Courier New', monospace",
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
              fontWeight: 600,
              color: '#ffffff',
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
            }}
          >
            MARCO POLO SYDNEY HOTEL ACCOMMODATION
          </h1>

          {/* Subheading */}
          <h2 
            className="text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed drop-shadow-lg"
            style={{ 
              fontFamily: "'GT America Mono', 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Courier New', monospace",
              letterSpacing: '-0.01em',
              lineHeight: '1.4',
              fontWeight: 400,
              color: '#ffffff',
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
              marginBottom: '0'
            }}
          >
            WHERE AFFORDABILITY MEETS CONVENIENCE.
          </h2>

          {/* CTA Buttons - Centered */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-auto" style={{ marginTop: '80px' }}>
            <a
              href="https://bookings12.rmscloud.com/Search/Index/0C8B2754C6C8240A/1/"
              target="_blank"
              className="btn bg-white/20 text-white hover:bg-white/30 px-8 py-3.5 text-sm font-bold uppercase tracking-wide transition-all inline-block text-center min-w-[180px] rounded"
            >
              Book Your Stay
            </a>
            <a
              href="#rooms"
              className="btn bg-white/20 text-white hover:bg-white/30 px-8 py-3.5 text-sm font-bold uppercase tracking-wide transition-all inline-block text-center min-w-[180px] rounded"
            >
              View Rooms
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
