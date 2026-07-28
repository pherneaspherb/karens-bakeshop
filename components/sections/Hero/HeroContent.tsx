import HeroButtons from "./HeroButtons";
import HeroRating from "./HeroRating";

export default function HeroContent() {
  return (
    <div className="mx-auto flex h-full max-w-7xl items-center px-6">
      <div className="max-w-2xl text-white">
        <div className="mb-6 inline-flex rounded-full bg-amber-600/30 px-4 py-2 text-sm font-semibold text-amber-300">
          ❤️ FAMILY-OWNED SINCE 1987
        </div>

        <h1 className="mt-6 max-w-2xl text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
          Freshly Baked <br />
          Goodness, <br />
          Made with Love
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-gray-200">
          Every loaf, every cake, and every pastry is handcrafted fresh each
          morning using quality ingredients, bringing warmth and delicious
          flavours to our community.
        </p>

        <HeroButtons />

        <HeroRating />
      </div>
    </div>
  );
}
