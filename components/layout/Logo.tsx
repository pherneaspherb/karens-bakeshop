import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="font-[var(--font-playfair)] text-3xl font-bold tracking-tight text-white"
    >
      Karen's <span className="text-[#A65A2E]">Bakeshop</span>
    </Link>
  );
}