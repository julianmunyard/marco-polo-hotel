import Link from "next/link";

export default function HeroSection() {
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(/marco%20polo%20images/sunset%20marco.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]"></div>
      {/* Bento Container - Left Side */}
      <div className="container relative z-[2] px-4 py-8 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Design */}
          <div className="md:hidden flex flex-col items-center justify-center w-full min-h-[80vh]">
            {/* Title Box - Mobile */}
            <div className="bg-transparent border-[4px] border-white p-8 w-full text-center mb-6" style={{ boxShadow: 'none' }}>
              <h1 
                className="text-3xl font-bold leading-tight uppercase mb-4"
                style={{ 
                  fontFamily: "'Skranji', cursive",
                  letterSpacing: '-0.02em',
                  lineHeight: '1.1',
                  fontWeight: 700,
                  color: '#ffffff'
                }}
              >
                MARCO POLO SYDNEY HOTEL
              </h1>
            </div>

            {/* Slogan Box - Mobile */}
            <div className="bg-transparent border-[4px] border-white p-6 w-full text-center mb-8" style={{ boxShadow: 'none' }}>
              <h2 
                className="text-base font-normal leading-relaxed"
                style={{ 
                  fontFamily: "'Cantata One', serif",
                  letterSpacing: '-0.01em',
                  lineHeight: '1.5',
                  fontWeight: 400,
                  color: '#ffffff'
                }}
              >
                WHERE AFFORDABILITY MEETS CONVENIENCE.
              </h2>
            </div>

            {/* Action Buttons - Mobile */}
            <div className="flex flex-col gap-0 w-full max-w-xs">
              <Link
                href="/sydney-hotel-accommodation"
                className="bg-white text-black border-[3px] border-white px-8 py-4 text-center uppercase tracking-wide transition-all active:scale-95"
                style={{
                  fontFamily: "'GT America Mono', 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Courier New', monospace",
                  textTransform: 'lowercase',
                  fontWeight: 600,
                  boxShadow: 'none'
                }}
              >
                see rooms
              </Link>
              <Link
                href="https://bookings12.rmscloud.com/Search/Index/0C8B2754C6C8240A/1/"
                target="_blank"
                className="bg-transparent text-white border-[3px] border-white border-t-0 px-8 py-4 text-center uppercase tracking-wide transition-all active:scale-95 -mt-[3px]"
                style={{
                  fontFamily: "'GT America Mono', 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Courier New', monospace",
                  textTransform: 'lowercase',
                  fontWeight: 600,
                  boxShadow: '4px 4px 0 0 rgba(255, 255, 255, 0.5)'
                }}
              >
                book now
              </Link>
            </div>
          </div>

          {/* Desktop Design */}
          <div className="hidden md:flex flex-col gap-6 items-start w-auto md:max-w-max">
            {/* Combined Box */}
            <div className="bg-transparent border-[4px] border-white p-8 lg:p-10 xl:p-12 w-auto md:max-w-max text-left">
              <h1 
                className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight uppercase mb-4 lg:mb-6"
                style={{ 
                  fontFamily: "'Skranji', cursive",
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2',
                  fontWeight: 700,
                  color: '#ffffff'
                }}
              >
                MARCO POLO SYDNEY HOTEL
              </h1>
              
              <h2 
                className="text-xl lg:text-2xl font-normal leading-relaxed mb-6 lg:mb-8"
                style={{ 
                  fontFamily: "'Cantata One', serif",
                  letterSpacing: '-0.01em',
                  lineHeight: '1.4',
                  fontWeight: 400,
                  color: '#ffffff'
                }}
              >
                WHERE AFFORDABILITY MEETS CONVENIENCE.
              </h2>

              {/* Links inside box */}
              <div className="flex flex-row gap-6 items-start mt-2">
                <Link
                  href="/sydney-hotel-accommodation"
                  className="text-base uppercase tracking-wide transition-colors hover:opacity-80"
                  style={{
                    fontFamily: "'GT America Mono', 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Courier New', monospace",
                    color: '#ffffff',
                    textTransform: 'lowercase'
                  }}
                >
                  see rooms
                </Link>
                <Link
                  href="https://bookings12.rmscloud.com/Search/Index/0C8B2754C6C8240A/1/"
                  target="_blank"
                  className="text-base uppercase tracking-wide transition-colors hover:opacity-80"
                  style={{
                    fontFamily: "'GT America Mono', 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Courier New', monospace",
                    color: '#ffffff',
                    textTransform: 'lowercase'
                  }}
                >
                  book now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
