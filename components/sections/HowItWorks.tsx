"use client";

import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionBadge from "@/components/ui/SectionBadge";
import { useCenterViewportActive } from "@/hooks/useCenterViewportActive";
import { HOW_IT_WORKS } from "@/lib/constants";
import {
  CalendarCheck,
  ThumbsUp,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

const STEP_ICONS: Record<number, LucideIcon> = {
  1: CalendarCheck,
  2: UsersRound,
  3: ThumbsUp,
};

function StepCard({ step }: { step: (typeof HOW_IT_WORKS)[number] }) {
  const Icon = STEP_ICONS[step.step] ?? CalendarCheck;
  const { ref, isCenter } = useCenterViewportActive<HTMLElement>();

  return (
    <article ref={ref} className="flex w-full max-w-[21rem] flex-col items-center px-1 text-center sm:max-w-[22rem]">
      <div className="relative mb-8 sm:mb-9">
        {/* Step number - fixed style, never changes on hover (reference) */}
        <span
          className="absolute left-5 top-0 z-20 flex h-7 w-7 -translate-y-1/3 items-center justify-center rounded-full border border-brand-pink/25 bg-bg-page font-sans text-[0.8125rem] font-semibold text-brand-pink/80 sm:left-6 sm:h-[1.875rem] sm:w-[1.875rem] sm:text-sm"
          aria-hidden="true"
        >
          {step.step}
        </span>

        {/* Main circle - fills pink when centered on mobile or hovered on desktop */}
        <div
          className={`group/main flex h-32 w-32 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-brand-pink/45 bg-bg-page text-brand-pink transition-all duration-300 ease-out sm:h-[8.5rem] sm:w-[8.5rem] ${isCenter ? "border-solid border-brand-pink bg-brand-pink text-white shadow-[0_20px_48px_-16px_rgba(233,30,140,0.5)]" : ""} lg:hover:border-solid lg:hover:border-brand-pink lg:hover:bg-brand-pink lg:hover:text-white lg:hover:shadow-[0_20px_48px_-16px_rgba(233,30,140,0.5)]`}
        >
          <Icon
            size={40}
            strokeWidth={1.35}
            className={`transition-colors duration-300 ${isCenter ? "text-white" : ""} lg:group-hover/main:text-white`}
            aria-hidden="true"
          />
        </div>
      </div>

      <h3 className="mb-3 font-display text-xl font-bold leading-snug text-text-1 sm:text-[1.375rem]">
        {step.title}
      </h3>
      <p className="max-w-[19rem] font-sans text-sm leading-[1.75] text-text-2 sm:max-w-[21rem] sm:text-[0.9375rem]">
        {step.description}
      </p>
    </article>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-bg-page py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-5 lg:px-6">
        <AnimateOnScroll className="mb-16 text-center md:mb-20">
          <SectionBadge className="mb-4">The Process</SectionBadge>
          <h2 className="section-heading font-display">
            Steps To Get <span className="gradient-text">Physiotherapy</span>
          </h2>
          <p className="section-subtext mx-auto mt-4 max-w-xl font-sans">
            Three steps to a stronger, pain-free body.
          </p>
        </AnimateOnScroll>

        <div className="hidden md:grid md:grid-cols-3 md:gap-4 lg:gap-6">
          {HOW_IT_WORKS.map((step, i) => (
            <AnimateOnScroll key={step.step} delay={i * 0.12}>
              <div className="flex justify-center">
                <StepCard step={step} />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="flex flex-col items-center gap-8 md:hidden">
          {HOW_IT_WORKS.map((step, i) => (
            <AnimateOnScroll key={step.step} delay={i * 0.1}>
              <StepCard step={step} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
