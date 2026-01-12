export interface Feature {
  id: string;
  iconComponent: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: "wifi",
    iconComponent: "WifiIcon",
    title: "FREE WIFI",
    description: "Unlimited access to high-speed internet across all rooms and public areas.",
  },
  {
    id: "parking",
    iconComponent: "ParkingIcon",
    title: "24Hr ACCESS & FREE SECURE UNDERCOVER PARKING",
    description: "For guests traveling by car, we offer complimentary onsite secure undercover parking. Our on-site facility is not only free of charge but also shields your vehicle from weather conditions such as sun, rain, wind, and hail—keeping it safe and sheltered throughout your stay.",
  },
  {
    id: "housekeeping",
    iconComponent: "HousekeepingIcon",
    title: "EN-SUITES & DAILY HOUSEKEEPING",
    description: "At our hotel, we prioritize your comfort and convenience. Each of our rooms features a private en-suite bathroom, allowing you to enjoy the privacy and comfort of your own space.",
  },
  {
    id: "deals",
    iconComponent: "DealsIcon",
    title: "SYDNEY HOTEL DEALS",
    description: "Book early and save! Special discounts for extended stays and advance bookings.",
  },
  {
    id: "location",
    iconComponent: "LocationIcon",
    title: "CONVENIENT LOCATION - EASY ACCESS",
    description: "Situated in one of Sydney's most accessible areas, putting you close to major attractions, transport, and everything the city has to offer.",
  },
  {
    id: "transport",
    iconComponent: "TrainIcon",
    title: "SYDNEY TRANSPORT LINKS",
    description: "Just a short walk from train station, light rail, and bus stops. Easy access to all parts of Sydney.",
  },
  {
    id: "airports",
    iconComponent: "AirplaneIcon",
    title: "NEAR SYDNEY AIRPORTS & FERRY TERMINALS",
    description: "Located just 10–15 minutes from both Sydney Domestic and International Airports, as well as major ferry terminals.",
  },
  {
    id: "attractions",
    iconComponent: "AttractionsIcon",
    title: "NEAR SYDNEY ATTRACTIONS",
    description: "Close to Sydney's most iconic landmarks, entertainment venues, beaches, universities, and shopping centers.",
  },
];
