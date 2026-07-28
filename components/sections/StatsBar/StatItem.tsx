import { Stat } from "@/constants/stats";

interface Props {
  stat: Stat;
}

export default function StatItem({ stat }: Props) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-3xl font-bold text-amber-300">
        {stat.value}
      </span>

      <span className="text-sm text-amber-50">
        {stat.label}
      </span>
    </div>
  );
}