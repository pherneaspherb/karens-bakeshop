"use client";

import { useState } from "react";

import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialCard from "./TestimonialCard";
import TestimonialNavigation from "./TestimonialNavigation";

import { testimonials } from "@/constants/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="bg-[#7B431E] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">

        <TestimonialsHeader />

        <TestimonialCard
          testimonial={testimonials[current]}
        />

        <TestimonialNavigation
          current={current}
          total={testimonials.length}
          onPrevious={previous}
          onNext={next}
          onSelect={setCurrent}
        />

      </div>
    </section>
  );
}