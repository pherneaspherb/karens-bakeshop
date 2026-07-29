import { footerNote, openingHours } from "@/constants/footer";

export default function FooterHours() {
  return (
    <div>
      <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-white">
        Hours
      </h4>

      <div className="space-y-3">
        {openingHours.map((item) => (
          <div
            key={item.day}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-[#E8D5BE]">
              {item.day}
            </span>

            <span
              className={
                item.highlight
                  ? "font-medium text-[#D97706]"
                  : "font-medium text-white"
              }
            >
              {item.hours}
            </span>
          </div>
        ))}
      </div>

      <div className="my-6 h-px bg-white/10" />

      <p className="text-sm leading-6 text-[#E8D5BE]">
        {footerNote}
      </p>
    </div>
  );
}