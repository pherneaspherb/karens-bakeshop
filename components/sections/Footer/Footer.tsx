import FooterBottom from "./FooterBottom";
import FooterBrand from "./FooterBrand";
import FooterHours from "./FooterHours";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <footer className="bg-[#2A1308] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <FooterBrand />
          <FooterLinks />
          <FooterLinks type="products" />
          <FooterHours />
        </div>
      </div>

      <FooterBottom />
    </footer>
  );
}
