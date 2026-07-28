import Image from "next/image";
import { FeaturedProduct } from "@/constants/featured-products";

interface Props {
  product: FeaturedProduct;
}

export default function FeaturedProductCard({ product }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-56">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white">
          {product.badge}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-serif text-neutral-900">
          {product.title}
        </h3>

        <p className="mt-3 leading-7 text-neutral-600">{product.description}</p>
      </div>
    </article>
  );
}
