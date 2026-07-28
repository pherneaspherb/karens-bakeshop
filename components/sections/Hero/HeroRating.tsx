import { Star } from "lucide-react";

export default function HeroRating() {
  return (
    <div className="mt-10 flex items-center gap-4">
      <div className="flex -space-x-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-orange-100 font-semibold text-orange-700"
          >
            {item}
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        <p className="text-sm text-gray-200">
          Loved by hundreds of happy customers
        </p>
      </div>
    </div>
  );
}