import Link from "next/link";

import FeaturedProductsHeader from "./FeaturedProductsHeader";
import FeaturedProductCard from "./FeaturedProductCard";

import { featuredProducts } from "@/constants/featured-products";

export default function FeaturedProducts() {
  return (
    <section
      id="products"
      className="bg-[#F8F1E7] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <FeaturedProductsHeader />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <FeaturedProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="mt-16 text-center">

          <p className="text-neutral-600">
            Our full selection changes with the seasons —
            come in and see what's fresh today.
          </p>

          <Link
            href="#find-us"
            className="mt-8 inline-flex rounded-full border border-amber-700 px-8 py-4 font-medium text-amber-700 transition duration-300 hover:bg-amber-700 hover:text-white"
          >
            Find Us & Our Hours
          </Link>

        </div>

      </div>
    </section>
  );
}