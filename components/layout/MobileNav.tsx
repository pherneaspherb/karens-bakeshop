"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { navigation } from "@/constants/navigation";

type MobileNavProps = {
  scrolled: boolean;
};

export default function MobileNav({ scrolled }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden"
      >
        {open ? (
          <X
            size={32}
            className={`transition-colors duration-300 ${
              scrolled ? "text-[#3E2723]" : "text-white"
            }`}
          />
        ) : (
          <Menu
            size={32}
            className={`transition-colors duration-300 ${
              scrolled ? "text-[#3E2723]" : "text-white"
            }`}
          />
        )}
      </button>

      {open && (
        <div className="absolute left-0 top-24 w-full bg-[#FAF6EF] shadow-lg lg:hidden">
          <nav className="flex flex-col py-4">
            {navigation.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  const id = item.href.replace("#", "");

                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" });

                  setOpen(false);
                }}
                className="px-6 py-4 text-left font-medium text-[#3E2723] transition hover:bg-[#F3E6D3]"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                document
                  .getElementById("find-us")
                  ?.scrollIntoView({ behavior: "smooth" });

                setOpen(false);
              }}
              className="mx-6 mt-4 rounded-full bg-[#A65A2E] py-3 font-semibold text-white"
            >
              Visit Us
            </button>
          </nav>
        </div>
      )}
    </>
  );
}