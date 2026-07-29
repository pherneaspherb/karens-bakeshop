import { Menu } from "lucide-react";

type MobileNavProps = {
  scrolled: boolean;
};

export default function MobileNav({ scrolled }: MobileNavProps) {
  return (
    <button className="lg:hidden">
      <Menu
        className={`transition-colors duration-300 ${
          scrolled ? "text-[#3E2723]" : "text-white"
        }`}
      />
    </button>
  );
}