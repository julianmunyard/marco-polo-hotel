import RoomsSection from "@/components/sections/RoomsSection";

export default function AccommodationPage() {
  return (
    <>
      <section className="section bg-section" style={{ paddingTop: '200px' }}>
        <div className="container">
          <div className="text-center mb-12 px-4">
            <h1 className="text-lg md:text-xl font-bold mb-4 text-gray-900">
              Hotel Accommodation
            </h1>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Choose from our selection of comfortable, well-appointed rooms designed for your relaxation
            </p>
          </div>
          <RoomsSection showTitle={false} />
        </div>
      </section>
    </>
  );
}
