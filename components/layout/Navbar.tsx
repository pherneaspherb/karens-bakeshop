"use client";

import { useEffect, useState } from "react";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF6EF]/95 shadow-md backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <Logo scrolled={scrolled} />

        <DesktopNav scrolled={scrolled} />

        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              document
                .getElementById("find-us")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden rounded-full bg-[#A65A2E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8A4923] lg:block"
          >
            Visit Us
          </button>

          <MobileNav scrolled={false} />
        </div>
      </div>
    </header>
  );
}