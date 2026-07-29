import FindUsHeader from "./FindUsHeader";
import FindUsMap from "./FindUsMap";
import FindUsInfo from "./FindUsInfo";

export default function FindUs() {
  return (
    <section className="bg-[#FBF6EF] py-28" id="find-us">
      <div className="mx-auto max-w-6xl px-6">
        <FindUsHeader />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.8fr_1.2fr]">
          <FindUsMap />
          <FindUsInfo />
        </div>
      </div>
    </section>
  );
}
