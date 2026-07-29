import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex items-center gap-4">

      <Link
        href="#products"
        className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-4 font-semibold text-[var(--dark)] transition-all duration-300 hover:scale-105"
      >
        Explore Our Bakes
        <ArrowRight size={18} />
      </Link>

      <Link
        href="#why-us"
        className="rounded-full border border-white px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[var(--dark)]"
      >
        Our Story
      </Link>

    </div>
  );
}