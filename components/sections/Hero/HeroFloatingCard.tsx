import { Clock, Star } from "lucide-react";

export default function HeroFloatingCard() {
  return (
    <div className="hidden lg:block">
      <div className="w-80 rounded-3xl border border-gray-100 bg-white/95 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.18)] backdrop-blur">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Today's Fresh Batch</h3>

          <Star className="fill-yellow-400 text-yellow-400" size={20} />
        </div>

        <p className="mt-2 text-sm text-gray-500">
          Fresh from the oven this morning
        </p>

        <div className="my-6 h-px bg-gray-200" />

        <ul className="space-y-3 text-gray-700">
          <li>🥖 Spanish Roll</li>
          <li>🥖 Cheese Roll</li>
          <li>🥖 Ensaymada</li>
          <li>🧁 Fresh Pastries</li>
        </ul>

        <div className="my-6 h-px bg-gray-200" />

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock size={16} />
          Open Mon – Sat • 7:00 AM – 5:00 PM
        </div>
      </div>
    </div>
  );
}
