interface PeekImageProps {
  number: number;
  className?: string;
}

export default function PeekImage({
  number,
  className = "",
}: PeekImageProps) {
  return (
    <div
      className={`
        flex
        items-center
        justify-center
        rounded-3xl
        border-2
        border-dashed
        border-amber-300
        bg-amber-100
        text-5xl
        font-bold
        text-amber-700
        ${className}
      `}
    >
      {number}
    </div>
  );
}