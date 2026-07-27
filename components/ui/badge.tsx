interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#A65A2E]/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#F3C04D]">
      {children}
    </span>
  );
}