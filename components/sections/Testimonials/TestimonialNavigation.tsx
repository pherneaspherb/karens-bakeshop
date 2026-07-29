import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

export default function TestimonialNavigation({
  current,
  total,
  onPrevious,
  onNext,
  onSelect,
}: Props) {
  return (
    <div className="mt-12 flex items-center justify-center gap-6">

      <button
        onClick={onPrevious}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/40 text-amber-300 transition hover:bg-amber-300 hover:text-amber-900"
      >
        <ChevronLeft size={18} />
      </button>

      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`h-2 rounded-full transition-all ${
              current === index
                ? "w-8 bg-amber-300"
                : "w-2 bg-amber-300/40"
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/40 text-amber-300 transition hover:bg-amber-300 hover:text-amber-900"
      >
        <ChevronRight size={18} />
      </button>

    </div>
  );
}