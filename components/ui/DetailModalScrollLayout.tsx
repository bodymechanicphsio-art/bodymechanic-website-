"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ClinicImage from "@/components/ui/ClinicImage";

/** Scroll distance until content top reaches modal top (280px image − 88px overlap) */
const SCROLL_TO_TOP = 192;

interface DetailModalScrollLayoutProps {
  isOpen: boolean;
  onClose: () => void;
  image?: string;
  imageAlt: string;
  titleId: string;
  badge: string;
  title: string;
  children: ReactNode;
  footer: ReactNode;
  headerFallback?: ReactNode;
}

export default function DetailModalScrollLayout({
  isOpen,
  onClose,
  image,
  imageAlt,
  titleId,
  badge,
  title,
  children,
  footer,
  headerFallback,
}: DetailModalScrollLayoutProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const el = scrollRef.current;
    if (!el) return;

    el.scrollTop = 0;
    setScrollProgress(0);

    const handleScroll = () => {
      setScrollProgress(Math.min(el.scrollTop / SCROLL_TO_TOP, 1));
    };

    handleScroll();
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [isOpen, image, title]);

  const overlayOpacity = 0.2 + scrollProgress * 0.78;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4 md:p-6">
          <motion.button
            type="button"
            aria-label="Close dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 cursor-pointer bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-[1.75rem] border border-border-default bg-bg-card shadow-[0_24px_80px_-12px_rgba(15,15,25,0.25)] sm:max-h-[min(88dvh,720px)] sm:max-w-2xl sm:rounded-3xl"
          >
            {image && (
              <>
                {/* Image pinned to modal top - never scrolls */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[220px] overflow-hidden sm:h-[280px]"
                  aria-hidden="true"
                >
                  <ClinicImage
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="object-cover object-center"
                    priority
                  />
                  <div
                    className="absolute inset-0 bg-bg-card transition-opacity duration-150"
                    style={{ opacity: overlayOpacity }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card/90 via-bg-card/15 to-transparent" />
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="absolute right-3 top-3 z-40 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/65 sm:right-4 sm:top-4 sm:h-10 sm:w-10"
                >
                  <X size={18} strokeWidth={2} />
                </button>
              </>
            )}

            {/* Scroll: spacer reveals fixed image, then content rises to card top, then body scrolls */}
            <div
              ref={scrollRef}
              className="scrollbar-hide relative z-10 min-h-0 flex-1 overflow-y-auto overscroll-contain"
            >
              {image ? (
                <>
                  <div
                    className="h-[132px] shrink-0 sm:h-[192px]"
                    aria-hidden="true"
                  />
                  <div className="rounded-t-[1.75rem] bg-bg-card px-5 pb-6 pt-5 shadow-[0_-12px_32px_rgba(15,15,25,0.10)] sm:px-8 sm:pb-8 sm:pt-6">
                    <span className="mb-3 inline-flex items-center rounded-full border border-brand-pink/35 bg-brand-pink/10 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-pink sm:text-xs">
                      {badge}
                    </span>
                    <h2
                      id={titleId}
                      className="mb-3 break-words font-display text-[clamp(1.375rem,4vw,1.875rem)] font-bold leading-tight tracking-tight text-text-1"
                    >
                      {title}
                    </h2>
                    {children}
                  </div>
                </>
              ) : (
                <>
                  <div className="relative shrink-0 border-b border-border-default bg-bg-page px-5 py-5 sm:px-8 sm:py-6">
                    <button
                      type="button"
                      onClick={onClose}
                      aria-label="Close"
                      className="absolute right-3 top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border-default bg-bg-card text-text-1 transition-colors hover:border-brand-pink hover:text-brand-pink sm:right-4 sm:top-4 sm:h-10 sm:w-10"
                    >
                      <X size={18} strokeWidth={2} />
                    </button>
                    {headerFallback}
                  </div>
                  <div className="px-5 py-5 sm:px-8 sm:py-7">
                    <span className="mb-3 inline-flex items-center rounded-full border border-brand-pink/35 bg-brand-pink/10 px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-pink sm:text-xs">
                      {badge}
                    </span>
                    <h2
                      id={titleId}
                      className="mb-3 break-words font-display text-[clamp(1.375rem,4vw,1.875rem)] font-bold leading-tight tracking-tight text-text-1"
                    >
                      {title}
                    </h2>
                    {children}
                  </div>
                </>
              )}
            </div>

            <div className="relative z-20 shrink-0 border-t border-border-default bg-bg-card px-5 py-4 sm:px-8 sm:py-5">
              {footer}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
