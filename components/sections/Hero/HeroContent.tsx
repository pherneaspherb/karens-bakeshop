import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="mx-auto flex h-full max-w-7xl items-center px-6">
      <div className="max-w-2xl text-white">

        <div className="mb-6 inline-flex rounded-full bg-amber-600/30 px-4 py-2 text-sm font-semibold text-amber-300">
          ❤️ FAMILY-OWNED SINCE 1987
        </div>

        <h1 className="text-6xl font-bold leading-tight">
          Freshly Baked
          <br />
          <span className="text-amber-400">
            Goodness,
          </span>
          <br />
          Made with Love
        </h1>

        <p className="mt-8 max-w-xl text-lg text-gray-200">
          Every loaf, every cake, every pastry is handcrafted every morning
          with care, bringing fresh flavours to our community.
        </p>

        <HeroButtons />

      </div>
    </div>
  );
}