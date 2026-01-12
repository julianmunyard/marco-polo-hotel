export interface Offer {
  id: string;
  title: string;
  savings: number;
  savingsType: "fixed" | "per_night";
  conditions: string;
}

export const offers: Offer[] = [
  {
    id: "stay-3-nights",
    title: "Stay 3 Nights or More",
    savings: 15,
    savingsType: "fixed",
    conditions: "Minimum 3 nights stay",
  },
  {
    id: "stay-7-nights",
    title: "Stay 7 Nights or More",
    savings: 70,
    savingsType: "fixed",
    conditions: "Minimum 7 nights stay",
  },
  {
    id: "book-14-days",
    title: "Book 14 Days in Advance",
    savings: 5,
    savingsType: "per_night",
    conditions: "Per Night!",
  },
  {
    id: "book-45-days",
    title: "Book 45 Days in Advance",
    savings: 10,
    savingsType: "per_night",
    conditions: "Per Night!",
  },
];
