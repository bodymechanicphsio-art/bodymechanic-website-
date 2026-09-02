"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedStatProps {
  value: number;
  suffix: string;
  label: string;
  index?: number;
  compact?: boolean;
  variant?: "default" | "bar";
  scrollTriggerRef?: React.RefObject<HTMLElement | null>;
}

export default function AnimatedStat({
  value,
  suffix,
  label,
  index = 0,
  compact = false,
  variant = "default",
  scrollTriggerRef,
}: AnimatedStatProps) {
  const numRef = useRef<HTMLSpanElement>(null);
  const isBar = variant === "bar";

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const trigger = scrollTriggerRef?.current ?? el;
    const obj = { val: 0 };

    const tween = gsap.to(obj, {
      val: value,
      duration: isBar ? 2.8 : 2,
      ease: "power1.out",
      delay: index * 0.15,
      scrollTrigger: {
        trigger,
        start: "top 85%",
        once: true,
      },
      onUpdate() {
        if (numRef.current) {
          numRef.current.textContent = Math.round(obj.val).toString();
        }
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, index, isBar, scrollTriggerRef]);

  if (isBar) {
    return (
      <div className="min-w-0 w-full">
        <div className="flex items-end justify-center gap-0.5 lg:justify-start">
          <span
            ref={numRef}
            className="font-display text-[1.875rem] font-bold leading-none text-white tabular-nums sm:text-3xl lg:text-[clamp(2rem,3.2vw,2.5rem)]"
          >
            0
          </span>
          {suffix ? (
            <span className="pb-0.5 font-display text-xl font-bold leading-none text-white sm:text-2xl lg:text-[clamp(1.25rem,2.2vw,1.5rem)]">
              {suffix}
            </span>
          ) : null}
        </div>
        <span className="mt-1.5 block text-[0.8125rem] font-semibold leading-snug text-white sm:text-sm md:text-[0.9375rem] lg:mt-2 lg:text-base lg:font-medium lg:whitespace-nowrap">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center px-4 py-3 text-center">
      <div className="flex items-end justify-center gap-0.5">
        <span
          ref={numRef}
          className={`font-display font-bold leading-none gradient-text ${
            compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"
          }`}
        >
          0
        </span>
        <span
          className={`pb-0.5 font-display font-bold leading-none gradient-text ${
            compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
          }`}
        >
          {suffix}
        </span>
      </div>
      <span className="mt-2 font-sans text-sm font-medium leading-snug text-text-1 sm:text-base">
        {label}
      </span>
    </div>
  );
}
