import Image from "next/image";

interface ClinicImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  /** "cover" crops to fill the box; "contain" shows the whole image (no crop). */
  objectFit?: "cover" | "contain";
}

export default function ClinicImage({
  src,
  alt,
  className = "",
  priority = false,
  fill = false,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, 50vw",
  objectFit = "cover",
}: ClinicImageProps) {
  const fitClass = objectFit === "contain" ? "object-contain" : "object-cover";

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`${fitClass} ${className}`}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      priority={priority}
      sizes={sizes}
      className={`${fitClass} ${className}`}
    />
  );
}
