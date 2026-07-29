import WhyUsContent from "./WhyUsContent";
import WhyUsImage from "./WhyUsImage";

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-[#F0E6D0] py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <WhyUsImage />

        <WhyUsContent />

      </div>
    </section>
  );
}