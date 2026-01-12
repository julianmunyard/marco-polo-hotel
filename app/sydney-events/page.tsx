export default function EventsPage() {
  const events = [
    { name: "Sydney Festival", month: "January" },
    { name: "Vivid Sydney", month: "May-June" },
    { name: "Sydney Film Festival", month: "June" },
    { name: "Sydney Royal Easter Show", month: "March-April" },
    { name: "Sydney New Year's Eve", month: "December" },
  ];

  return (
    <div className="bg-section" style={{ paddingTop: '200px', paddingBottom: '64px' }}>
      <div className="container">
        <h1 className="text-lg md:text-xl font-bold mb-6 text-center text-gray-900">Sydney Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="card">
              <h3 className="text-base font-bold mb-2 text-gray-900">{event.name}</h3>
              <p className="text-gray-600">{event.month}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
