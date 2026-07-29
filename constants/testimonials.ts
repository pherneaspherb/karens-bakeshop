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
    name: "Sarah Middleton",
    location: "Maple Grove",
    initials: "SM",
    rating: 5,
    quote:
      "Karen's sourdough is the only bread my family will eat now. We pick up two loaves every Saturday and they're gone by Sunday morning. Honestly life-changing.",
  },
  {
    id: 2,
    name: "Daniel Brooks",
    location: "Riverside",
    initials: "DB",
    rating: 5,
    quote:
      "The croissants are buttery, flaky, and always fresh. It's become our Saturday morning tradition to stop by Karen's before heading to the market.",
  },
  {
    id: 3,
    name: "Emily Carter",
    location: "Oakwood",
    initials: "EC",
    rating: 5,
    quote:
      "Every birthday cake we've ordered has been beautiful and delicious. Karen's Bakeshop never disappoints and the staff are always welcoming.",
  },
];