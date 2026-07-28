import StatItem from "./StatItem";
import { stats } from "@/constants/stats";

export default function StatsBar() {
  return (
    <section className="bg-[#8B4A22] py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-12 px-6">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}