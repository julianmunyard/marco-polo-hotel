import HeroSection from "@/components/sections/HeroSection";
import RoomsSection from "@/components/sections/RoomsSection";
import LocationSection from "@/components/sections/LocationSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import GallerySection from "@/components/sections/GallerySection";
import OffersSection from "@/components/sections/OffersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InfoGridSection from "@/components/sections/InfoGridSection";
import LandingSection from "@/components/sections/LandingSection";

export default function Home() {
  return (
    <>
      {/* Landing section sits on top as fixed overlay */}
      <LandingSection />
      
      {/* Normal home page content */}
      {/* HeroSection - Hidden for now, can restore later */}
      {/* <HeroSection /> */}
      <section id="rooms" className="section bg-section" style={{ paddingTop: '200px' }}>
        <div className="container">
          <RoomsSection />
        </div>
      </section>
      <LocationSection />
      <FeaturesSection />
      <GallerySection />
      <OffersSection />
      <TestimonialsSection />
      <InfoGridSection />
    </>
  );
}
