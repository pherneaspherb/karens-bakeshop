export interface FeaturedProduct {
  id: number;
  badge: string;
  title: string;
  description: string;
  image: string;
}

export const featuredProducts: FeaturedProduct[] = [
  {
    id: 1,
    badge: "Bestseller",
    title: "Cheese Roll",
    description:
      "Soft, fluffy bread generously filled and topped with rich, creamy cheese for a perfectly savoury bite.",
    image: "/images/products/cheeseroll.jpg",
  },
  {
    id: 2,
    badge: "Classic",
    title: "Spanish Roll",
    description:
      "Light and buttery bread rolled with a sweet, toasted breadcrumb filling that melts in every bite.",
    image: "/images/products/spanishroll.jpg",
  },
  {
    id: 3,
    badge: "Customer Favourite",
    title: "Ensaymada",
    description:
      "A soft, buttery Filipino brioche topped with creamy butter, sugar, and a generous sprinkle of grated cheese.",
    image: "/images/products/ensaymada.jpg",
  },
  {
    id: 4,
    badge: "Daily Special",
    title: "Pastry Selection",
    description:
      "A rotating daily trio of handcrafted tarts, danishes, and seasonal specialties.",
    image: "/images/products/pastries.jpg",
  },
];