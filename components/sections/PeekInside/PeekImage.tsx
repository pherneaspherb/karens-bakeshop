import Image from "next/image";

interface PeekImageProps {
  number: number;
  className?: string;
}

export default function PeekImage({
  number,
  className = "",
}: PeekImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`}>
      <Image
        src={`/images/peek/peek-${number}.jpg`}
        alt={`Karen's Bakeshop ${number}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 hover:scale-105"
        priority={number === 1}
      />
    </div>
  );
}