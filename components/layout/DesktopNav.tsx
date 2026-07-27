import Link from "next/link";
import { navigation } from "@/constants/navigation";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-10 lg:flex">
      {navigation.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-sm font-medium text-white/90 transition hover:text-[#D4A24C]"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}