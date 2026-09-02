import { Activity, type LucideIcon } from "lucide-react";

type SectionIconSize = "sm" | "md" | "lg";

const SIZE_MAP: Record<
  SectionIconSize,
  { box: string; icon: number; stroke: number }
> = {
  sm: { box: "w-11 h-11", icon: 20, stroke: 1.75 },
  md: { box: "w-14 h-14", icon: 26, stroke: 1.75 },
  lg: { box: "w-16 h-16", icon: 30, stroke: 1.65 },
};

interface SectionIconProps {
  icon: LucideIcon;
  size?: SectionIconSize;
  className?: string;
}

/** Chirofind-style icon container - consistent stroke icons on tinted plate. */
export default function SectionIcon({
  icon: Icon = Activity,
  size = "md",
  className = "",
}: SectionIconProps) {
  const ResolvedIcon = Icon ?? Activity;
  const { box, icon, stroke } = SIZE_MAP[size];

  return (
    <div
      className={`${box} rounded-xl bg-brand-pink/10 border border-brand-pink/25 flex items-center justify-center shrink-0 ${className}`}
    >
      <ResolvedIcon size={icon} className="text-brand-pink" strokeWidth={stroke} aria-hidden="true" />
    </div>
  );
}
