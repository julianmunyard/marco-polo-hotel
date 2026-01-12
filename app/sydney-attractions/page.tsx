export default function AttractionsPage() {
  const attractions = [
    { name: "Sydney Opera House", distance: "20 min by train" },
    { name: "Sydney Harbour Bridge", distance: "20 min by train" },
    { name: "Darling Harbour", distance: "15 min by train" },
    { name: "Bondi Beach", distance: "30 min by train" },
    { name: "Taronga Zoo", distance: "25 min by train + ferry" },
    { name: "The Rocks", distance: "20 min by train" },
  ];

  return (
    <div className="bg-section" style={{ paddingTop: '200px', paddingBottom: '64px' }}>
      <div className="container">
        <h1 className="text-lg md:text-xl font-bold mb-6 text-center text-gray-900">Sydney Attractions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction, index) => (
            <div key={index} className="card">
              <h3 className="text-base font-bold mb-2 text-gray-900">{attraction.name}</h3>
              <p className="text-gray-600">{attraction.distance}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
