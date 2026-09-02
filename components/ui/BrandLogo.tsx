import Link from "next/link";
import { ASSETS } from "@/lib/assets";
import { CLINIC } from "@/lib/constants";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
  className?: string;
}

/** Logo aspect ratio from source file (816×306). */
const LOGO_ASPECT = 816 / 306;

const sizeConfig = {
  sm: { height: 52, width: Math.round(52 * LOGO_ASPECT) },
  md: { height: 64, width: Math.round(64 * LOGO_ASPECT) },
  lg: { height: 96, width: Math.round(96 * LOGO_ASPECT) },
} as const;

export default function BrandLogo({
  size = "md",
  asLink = true,
  className = "",
}: BrandLogoProps) {
  const { width, height } = sizeConfig[size];

  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={ASSETS.logo}
      alt={CLINIC.name}
      width={width}
      height={height}
      className={`block object-contain object-left ${className}`}
      decoding="async"
      fetchPriority={size === "sm" ? "high" : "auto"}
    />
  );

  if (asLink) {
    return (
      <Link href="/" className="inline-flex shrink-0 items-center" aria-label={`${CLINIC.name} home`}>
        {image}
      </Link>
    );
  }

  return <div className="inline-flex shrink-0 items-center">{image}</div>;
}
