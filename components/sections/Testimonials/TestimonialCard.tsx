import { Quote, Star, MapPin } from "lucide-react";
import { Testimonial } from "@/constants/testimonials";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: Props) {
  return (
    <div className="mx-auto mt-16 max-w-3xl text-center">
      <Quote
        size={48}
        className="mx-auto text-amber-300 opacity-40"
      />

      <p className="mt-8 text-3xl leading-relaxed text-amber-50">
        "{testimonial.quote}"
      </p>

      <div className="mt-10 flex justify-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-amber-300 text-amber-300"
          />
        ))}
      </div>

      <div className="mt-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 font-semibold text-amber-900">
          {testimonial.initials}
        </div>

        <h3 className="mt-4 font-serif text-xl text-white">
          {testimonial.name}
        </h3>

        <div className="mt-2 flex items-center justify-center gap-2 text-amber-200">
          <MapPin size={14} />
          {testimonial.location}
        </div>
      </div>
    </div>
  );
}