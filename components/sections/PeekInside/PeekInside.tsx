import PeekInsideHeader from "./PeekInsideHeader";
import PeekInsideLayout from "./PeekInsideLayout";

export default function PeekInside() {
  return (
    <section
      id="peek-inside"
      className="bg-[#F8F1E7] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <PeekInsideHeader />

        <PeekInsideLayout />

        <p className="mt-12 text-center text-neutral-600">
          Follow us{" "}
          <span className="font-semibold">
            @karensbakeshop
          </span>{" "}
          for daily bakes.
        </p>

      </div>
    </section>
  );
}