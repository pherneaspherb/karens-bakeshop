export default function FooterBottom() {
  return (
    <div className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-[#BFA58E] lg:flex-row lg:px-8">
        <p>
          © {new Date().getFullYear()} Karen's Bakeshop. All rights reserved.
        </p>

        <p>
          Made with{" "}
          <span className="text-[#D97706]">♥</span>{" "}
          in Cabatuan, Iloilo
        </p>
      </div>
    </div>
  );
}