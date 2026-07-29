import WhyUsFeature from "./WhyUsFeature";
import { whyUs } from "@/constants/why-us";

export default function WhyUsContent() {
  return (
    <div>

      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
        Why Us
      </p>

      <h2 className="mt-4 font-serif text-5xl leading-tight text-neutral-900">
        Baking the Way it Always Should Be
      </h2>

      <p className="mt-8 text-lg leading-8 text-neutral-600">
        We've been doing this for decades and still won't cut corners.
        Every loaf, cake, and pastry is made with care using quality
        ingredients and family recipes.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {whyUs.map((feature) => (
          <WhyUsFeature
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

    </div>
  );
}