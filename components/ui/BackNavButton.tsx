import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackNavButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Sticky back-nav pill used on detail pages (services + techniques).
 * Anchors below the sticky navbar as the user scrolls so they can
 * always return to the parent listing without hunting for the browser
 * back button.
 */
export default function BackNavButton({ href, children, className = "" }: BackNavButtonProps) {
  return (
    <div className="sticky top-20 z-40 mb-6 flex sm:top-24">
      <Link
        href={href}
        className={`pointer-events-auto inline-flex items-center gap-3 rounded-full border border-border-default bg-bg-card/95 px-4 py-2.5 font-sans text-sm font-semibold text-text-1 shadow-[0_4px_20px_-8px_rgba(15,15,25,0.18)] backdrop-blur-md transition-all duration-200 hover:border-brand-pink/45 hover:text-brand-pink sm:px-5 sm:py-3 sm:text-base ${className}`}
      >
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-pink/10 text-brand-pink"
          aria-hidden="true"
        >
          <ArrowLeft size={16} strokeWidth={2.2} />
        </span>
        {children}
      </Link>
    </div>
  );
}
