import PeekImage from "./PeekImage";

export default function PeekInsideLayout() {
  return (
    <div className="mt-12 mx-auto max-w-6xl">

      {/* Top Section */}
      <div className="grid grid-cols-2 gap-4">

        {/* Left Large Image */}
        <PeekImage
          number={1}
          className="h-[360px]"
        />

        {/* Right Side */}
        <div className="flex flex-col gap-4">

          {/* Top Right */}
          <div className="grid grid-cols-2 gap-4">
            <PeekImage
              number={2}
              className="h-[160px]"
            />

            <PeekImage
              number={3}
              className="h-[160px]"
            />
          </div>

          {/* Wide Image */}
          <PeekImage
            number={4}
            className="h-[184px]"
          />

        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-4 grid grid-cols-[1fr_2fr] gap-4">

        <PeekImage
          number={5}
          className="h-[280px]"
        />

        <div className="flex items-start">
          <PeekImage
            number={6}
            className="h-[130px] w-full"
          />
        </div>

      </div>

    </div>
  );
}