interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <p className="text-xs uppercase tracking-[0.3em] text-[#C88A2B]">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-[var(--font-playfair)] text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
}