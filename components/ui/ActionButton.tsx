import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

type ActionButtonVariant = "primary" | "outline" | "soft";

interface ActionButtonProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
  variant?: ActionButtonVariant;
  external?: boolean;
  showArrow?: boolean;
  className?: string;
}

const shellClass =
  "group inline-flex w-full min-h-[3.25rem] items-center gap-3 rounded-full px-4 py-3 font-sans text-[1rem] font-semibold transition-all duration-200 sm:text-[1.0625rem] sm:px-5";

const variants: Record<ActionButtonVariant, string> = {
  primary:
    "bg-brand-pink text-white shadow-md shadow-brand-pink/20 hover:bg-brand-pink-dim hover:shadow-lg hover:shadow-brand-pink/25",
  outline:
    "border border-border-default bg-bg-card text-text-1 hover:border-brand-pink/50 hover:bg-brand-pink/5 hover:text-brand-pink",
  soft:
    "border border-brand-pink/35 bg-brand-pink/10 text-brand-pink hover:border-brand-pink hover:bg-brand-pink hover:text-white",
};

const iconShell: Record<ActionButtonVariant, string> = {
  primary: "bg-white/20 text-white",
  outline: "bg-brand-pink/10 text-brand-pink group-hover:bg-brand-pink/15",
  soft: "bg-brand-pink/15 text-brand-pink group-hover:bg-white/20 group-hover:text-white",
};

export default function ActionButton({
  href,
  icon: Icon,
  children,
  variant = "primary",
  external = false,
  showArrow = false,
  className = "",
}: ActionButtonProps) {
  const classes = `${shellClass} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${iconShell[variant]}`}
        aria-hidden="true"
      >
        <Icon size={18} strokeWidth={2} />
      </span>
      <span className="min-w-0 flex-1 text-left leading-snug">{children}</span>
      {showArrow && (
        <ArrowRight
          size={17}
          strokeWidth={2.2}
          className="shrink-0 opacity-90 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
