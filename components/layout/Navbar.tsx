"use client";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-4">
          <button className="hidden rounded-full bg-[#A65A2E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8A4923] lg:block">
            Visit Us
          </button>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}