import Link from "next/link";

import {
  navigationLinks,
  productLinks,
} from "@/constants/footer";

interface FooterLinksProps {
  type?: "navigation" | "products";
}

export default function FooterLinks({
  type = "navigation",
}: FooterLinksProps) {
  const title = type === "navigation" ? "Navigate" : "Products";

  const links =
    type === "navigation"
      ? navigationLinks
      : productLinks;

  return (
    <div>
      <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#D97706]">
        {title}
      </h4>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-[#E8D5BE] transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}