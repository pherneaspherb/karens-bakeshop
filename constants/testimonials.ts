export interface Testimonial {
  id: number;
  name: string;
  location: string;
  initials: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Phoebe",
    location: "Brgy. Tiring",
    initials: "PR",
    rating: 5,
    quote:
      "Hindi kumpleto ang merienda namin without Karen's Spanish Roll. Isang box pa lang, ubos agad! Soft, buttery, at tamang-tama ang tamis.",
  },
  {
    id: 2,
    name: "Bukay",
    location: "Brgy. Tiring",
    initials: "BA",
    rating: 5,
    quote:
      "Hindi nawawala ang Karen's Ensaymada sa weekend namin. Ang lambot, ang buttery, at ang generous ng cheese—perfect partner sa kape.",
  },
  {
    id: 3,
    name: "Bonsay",
    location: "Brgy. Manguna",
    initials: "YS",
    rating: 5,
    quote:
      "Parang bumabalik ako sa pagkabata sa bawat kagat ng Karen's Pandesal. Malambot, bagong luto, at talagang nakaka-comfort.",
  },
];