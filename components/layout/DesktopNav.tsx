import Link from "next/link";
import { navigation } from "@/constants/navigation";

type DesktopNavProps = {
  scrolled: boolean;
};

export default function DesktopNav({ scrolled }: DesktopNavProps) {
  return (
    <nav className="hidden items-center gap-10 lg:flex">
      {navigation.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`text-sm font-medium transition-colors duration-300 hover:text-[#D4A24C] ${
            scrolled ? "text-[#3E2723]" : "text-white/90"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
