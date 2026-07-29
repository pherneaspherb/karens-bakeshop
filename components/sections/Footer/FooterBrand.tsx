import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function FooterBrand() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-3xl font-bold text-white">
          Karen's Bakeshop
        </h3>

        <p className="mt-4 max-w-xs text-sm leading-7 text-[#E8D5BE]">
          A family-owned neighborhood bakery crafting artisan breads,
          celebration cakes, and freshly baked pastries made with love every
          day.
        </p>
      </div>

      <div className="flex gap-3">
        <a
          href="#"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-[#E8D5BE] transition hover:border-[#D97706] hover:text-[#D97706]"
        >
          <FaInstagram size={18} />
        </a>

        <a
          href="#"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-[#E8D5BE] transition hover:border-[#D97706] hover:text-[#D97706]"
        >
          <FaFacebookF size={18} />
        </a>
      </div>
    </div>
  );
}