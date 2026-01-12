import {
  TrainIcon,
  StadiumIcon,
  AttractionsIcon,
  AirplaneIcon,
  DiningIcon,
  ShoppingIcon,
} from "@/components/ui/Icons";

export default function InfoGridSection() {
  const infoItems = [
    { icon: <TrainIcon className="w-12 h-12 text-gray-900" />, title: "Public Transport", description: "Train, light rail, and bus stops minutes away" },
    { icon: <StadiumIcon className="w-12 h-12 text-gray-900" />, title: "Sports Venues", description: "Close to Accor Stadium, SCG, and Allianz Stadium" },
    { icon: <AttractionsIcon className="w-12 h-12 text-gray-900" />, title: "Attractions", description: "Opera House, Harbour Bridge, The Rocks, and more" },
    { icon: <AirplaneIcon className="w-12 h-12 text-gray-900" />, title: "Airports & Ferries", description: "15 minutes to airports and ferry terminals" },
    { icon: <DiningIcon className="w-12 h-12 text-gray-900" />, title: "Dining", description: "Restaurants and cafes within 5-7 minutes" },
    { icon: <ShoppingIcon className="w-12 h-12 text-gray-900" />, title: "Shopping", description: "Walking distance to supermarkets and shops" },
  ];

  return (
    <section className="section bg-section">
      <div className="container">
        <div className="text-center mb-16 px-4 border-b-2 border-black pb-8">
          <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-900 uppercase tracking-tight">
            Everything You Need
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto font-medium">
            Conveniently located near all major Sydney destinations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {infoItems.map((item, index) => (
            <div key={index} className="card text-center flex flex-col group">
              <div className="flex justify-center mb-6 flex-shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-base font-bold mb-3 text-gray-900 break-words uppercase tracking-wide border-b-2 border-gray-300 pb-3">{item.title}</h3>
              <p className="text-xs text-gray-700 break-words leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
