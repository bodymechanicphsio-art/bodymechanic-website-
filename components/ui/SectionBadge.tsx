export type SectionBadgeVariant = "pink" | "cyan";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  /** Colour treatment. Defaults to the pink brand accent. */
  variant?: SectionBadgeVariant;
}

const VARIANT_CLASS: Record<SectionBadgeVariant, string> = {
  pink: "",
  cyan: "section-badge-cyan",
};

/** Readable section eyebrow badge - consistent across all pages. */
export default function SectionBadge({
  children,
  className = "",
  variant = "pink",
}: SectionBadgeProps) {
  return (
    <span className={`section-badge ${VARIANT_CLASS[variant]} ${className}`.trim()}>
      {children}
    </span>
  );
}
