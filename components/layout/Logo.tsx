import Link from "next/link";

type LogoProps = {
  scrolled: boolean;
};

export default function Logo({ scrolled }: LogoProps) {
  return (
    <Link
      href="/"
      className={`font-[var(--font-playfair)] text-3xl font-bold tracking-tight transition-colors duration-300 ${
        scrolled ? "text-[#3E2723]" : "text-white"
      }`}
    >
      Karen's <span className="text-[#A65A2E]">Bakeshop</span>
    </Link>
  );
}
