import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function WhyUsFeature({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
        <Icon size={20} />
      </div>

      <div>
        <h3 className="font-serif text-lg text-neutral-900">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-7 text-neutral-600">
          {description}
        </p>
      </div>
    </div>
  );
}