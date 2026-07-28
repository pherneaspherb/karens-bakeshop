import Image from "next/image";
import HeroContent from "./HeroContent";
import HeroFloatingCard from "./HeroFloatingCard";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/hero-bg.jpg"
        alt="Karen's Bakeshop"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid h-full max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        <HeroContent />
        <HeroFloatingCard />
      </div>
    </section>
  );
}
