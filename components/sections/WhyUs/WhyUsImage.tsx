import Image from "next/image";
import { Heart } from "lucide-react";

export default function WhyUsImage() {
  return (
    <div className="relative">

      <div className="relative h-[700px] overflow-hidden rounded-3xl">
        <Image
          src="/images/why-us/shop.jpg"
          alt="Karen's Bakeshop"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute -bottom-6 right-6 rounded-2xl bg-white px-6 py-4 shadow-xl">
        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
            <Heart size={20} />
          </div>

          <div>
            <p className="font-serif text-lg">
              3 Generations
            </p>

            <p className="text-sm text-neutral-500">
              of family recipes
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}