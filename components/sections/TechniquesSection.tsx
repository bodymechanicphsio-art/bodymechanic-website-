"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ClinicImage from "@/components/ui/ClinicImage";
import { useCenterViewportActive } from "@/hooks/useCenterViewportActive";
import { TECHNIQUES } from "@/lib/constants/techniques";
import type { Technique } from "@/lib/types";

function HexPattern({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 120"
      className={className}
      fill="currentColor"
    >
      <polygon opacity="0.55" points="30,8 50,8 60,25 50,42 30,42 20,25" />
      <polygon opacity="0.4" points="58,22 78,22 88,39 78,56 58,56 48,39" />
      <polygon opacity="0.35" points="14,44 34,44 44,61 34,78 14,78 4,61" />
      <polygon opacity="0.5" points="46,58 66,58 76,75 66,92 46,92 36,75" />
      <polygon opacity="0.3" points="72,62 92,62 102,79 92,96 72,96 62,79" />
    </svg>
  );
}

function TechniqueCard({ technique, index }: { technique: Technique; index: number }) {
  const image = technique.image ?? "";
  const href = `/techniques/${technique.id}`;
  const { ref, isCenter } = useCenterViewportActive<HTMLElement>();

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 2) * 0.06, duration: 0.4 }}
      className="group h-full min-w-0"
    >
      <Link
        href={href}
        className={`flex h-full min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-border-default bg-bg-card text-center shadow-[0_10px_40px_-14px_rgba(15,15,25,0.12)] transition-all duration-300 sm:text-left lg:flex-row lg:items-stretch lg:text-left ${isCenter ? "-translate-y-1.5 border-brand-pink/45" : ""} lg:hover:-translate-y-1.5 lg:hover:border-brand-pink/45`}
      >
        <div
          className={`relative mx-auto mt-3 aspect-square w-[calc(100%-1.5rem)] max-w-[9rem] shrink-0 overflow-hidden rounded-xl border border-border-default transition-colors duration-300 sm:mx-0 sm:ml-4 sm:mt-4 sm:w-auto sm:max-w-none lg:m-4 lg:aspect-auto lg:w-36 lg:self-stretch xl:w-40 ${isCenter ? "border-brand-pink/45" : ""} lg:group-hover:border-brand-pink/45`}
        >
          {image ? (
            <ClinicImage
              src={image}
              alt={technique.name}
              fill
              sizes="(max-width: 1024px) 45vw, 200px"
              className={`object-cover transition-transform duration-700 ease-out ${isCenter ? "scale-[1.04]" : ""} lg:group-hover:scale-[1.04]`}
            />
          ) : (
            <div className="absolute inset-0 bg-bg-page" />
          )}
        </div>

        <div className="relative flex min-w-0 flex-1 flex-col items-center justify-center px-4 pb-5 pt-3 sm:items-start sm:px-4 sm:pb-5 sm:pt-4 lg:px-4 lg:py-4 lg:pl-0 xl:pr-6">
          <HexPattern className="pointer-events-none absolute bottom-1 right-1 h-14 w-14 text-brand-pink/15 sm:h-16 sm:w-16 lg:h-20 lg:w-20" />

          <h3 className="relative mb-1.5 font-display text-base font-bold leading-snug text-text-1 sm:mb-2 sm:text-lg">
            {technique.name}
          </h3>
          <p className="relative mb-4 line-clamp-3 font-sans text-sm leading-relaxed text-text-2 sm:mb-4 sm:text-[0.9375rem] sm:leading-[1.65] lg:line-clamp-4">
            {technique.description}
          </p>
          <span
            className={`relative inline-flex items-center gap-1.5 rounded-lg border border-border-default px-4 py-2 font-sans text-sm font-semibold shadow-[0_6px_20px_-6px_rgba(233,30,140,0.20)] transition-all duration-300 ${isCenter ? "border-brand-pink/40 bg-brand-pink text-white" : "bg-brand-pink/10 text-brand-pink"} lg:group-hover:border-brand-pink/40 lg:group-hover:bg-brand-pink lg:group-hover:text-white`}
          >
            Read More
            <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export default function TechniquesSection() {
  return (
    <section id="techniques" className="relative scroll-mt-24 overflow-x-clip bg-bg-page py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <span className="mb-4 inline-flex items-center justify-center rounded-full border border-brand-pink/40 bg-brand-pink/10 px-4 py-2 text-[0.9375rem] font-semibold uppercase tracking-wide text-brand-pink">
            Our Techniques
          </span>
          <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-text-1">
            Physiotherapy <span className="gradient-text">Techniques</span>
          </h2>
          <p className="font-sans text-[clamp(1.0625rem,2.2vw,1.125rem)] leading-relaxed text-text-2">
            Evidence-based methods we use in clinic - each chosen for your specific recovery
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 min-[480px]:grid-cols-2 sm:gap-5 lg:gap-6">
          {TECHNIQUES.map((technique, index) => (
            <TechniqueCard key={technique.id} technique={technique} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
