import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  lines: string[];
}

export default function ContactItem({
  icon: Icon,
  title,
  lines,
}: Props) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
        <Icon size={18} />
      </div>

      <div>
        <h3 className="font-medium text-[#3E2723]">
          {title}
        </h3>

        {lines.map((line) => (
          <p
            key={line}
            className="text-sm leading-6 text-[#6B5B4D]"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}