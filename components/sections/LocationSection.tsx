import { TrainIcon, BusIcon, LightRailIcon } from "@/components/ui/Icons";

export default function LocationSection() {
  const transportOptions = [
    {
      icon: <TrainIcon className="w-12 h-12 text-gray-900" />,
      title: "Train Station",
      description: "Summer Hill Train Station – 400m walk. Easy access to Sydney's major attractions, CBD, airports, and ferry terminals.",
    },
    {
      icon: <BusIcon className="w-12 h-12 text-gray-900" />,
      title: "Bus Stop",
      description: "Multiple bus routes (460, 461X, 480, 483, 461N) right at your doorstep for direct service to the city.",
    },
    {
      icon: <LightRailIcon className="w-12 h-12 text-gray-900" />,
      title: "Light Rail",
      description: "Taverners Hill Light Rail stop is just 400 meters away, providing convenient access to Sydney's light rail network.",
    },
  ];

  return (
    <section className="section bg-section">
      <div className="container">
        <div className="text-center mb-12 px-4">
          <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-900">
            Prime Location
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Strategically located with excellent transport links to all of Sydney
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transportOptions.map((option, index) => (
            <div key={index} className="text-center px-4">
              <div className="flex justify-center mb-6">{option.icon}</div>
              <h3 className="text-base font-semibold mb-3 text-gray-900 break-words">{option.title}</h3>
              <p className="text-gray-600 leading-relaxed break-words">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
