"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Dumbbell,
  HeartPulse,
  Monitor,
  Users,
  type LucideIcon,
} from "lucide-react";
import ClinicImage from "@/components/ui/ClinicImage";
import { useCenterViewportActive } from "@/hooks/useCenterViewportActive";
import { HOME_SERVICE_HIGHLIGHTS } from "@/lib/constants";
import type { Service } from "@/lib/types";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "sports-rehabilitation": Activity,
  "pain-management": HeartPulse,
  "neurological-rehabilitation": Brain,
  "all-ages": Users,
  "posture-work": Monitor,
  "strength-mobility": Dumbbell,
};

interface ServicesSectionProps {
  followsHero?: boolean;
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = SERVICE_ICONS[service.id] ?? Activity;
  const href = `/services/${service.id}`;
  const { ref, isCenter } = useCenterViewportActive<HTMLDivElement>();

  return (
    <div ref={ref} className="h-full min-h-0 pr-6 sm:pr-7 lg:pr-8">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.07, duration: 0.4 }}
        className="group h-full min-h-0"
      >
        <Link
          href={href}
          className={`grid h-full min-h-0 cursor-pointer grid-rows-[auto_1fr] overflow-visible transition-transform duration-300 ${isCenter ? "-translate-y-1.5" : ""} lg:hover:-translate-y-1.5`}
        >
          <div
            className={`relative aspect-[16/10] overflow-hidden rounded-t-xl border border-border-default border-b-0 bg-bg-card shadow-[0_10px_40px_-14px_rgba(15,15,25,0.12)] transition-colors duration-300 ${isCenter ? "border-brand-pink/45" : ""} lg:group-hover:border-brand-pink/45`}
          >
            <ClinicImage
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`object-cover transition-transform duration-700 ease-out ${isCenter ? "scale-[1.04]" : ""} lg:group-hover:scale-[1.04]`}
            />
          </div>

          <div className="flex h-full min-h-0 w-full min-w-0 items-stretch overflow-visible">
            <div
              className={`relative flex h-full min-w-0 flex-1 flex-col rounded-bl-xl border border-border-default border-r-0 bg-bg-card px-6 py-5 pt-14 shadow-[0_10px_40px_-14px_rgba(15,15,25,0.12)] transition-colors duration-300 sm:px-7 sm:py-6 sm:pt-16 ${isCenter ? "border-brand-pink/45" : ""} lg:group-hover:border-brand-pink/45`}
            >
              <div
                className={`absolute -top-8 left-6 z-10 flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-lg border border-border-default bg-bg-page text-brand-pink shadow-[0_8px_24px_-8px_rgba(15,15,25,0.10)] transition-all duration-300 sm:left-7 sm:h-[4.5rem] sm:w-[4.5rem] ${isCenter ? "border-brand-pink bg-brand-pink text-white" : ""} lg:group-hover:border-brand-pink lg:group-hover:bg-brand-pink lg:group-hover:text-white`}
                aria-hidden="true"
              >
                <Icon size={28} strokeWidth={1.65} />
              </div>

              <h3 className="mb-2.5 min-h-[3.1rem] font-display text-[1.125rem] font-bold leading-snug tracking-tight text-text-1 sm:min-h-[3.25rem] sm:text-[1.1875rem]">
                {service.title}
              </h3>
              <p className="line-clamp-3 min-h-[4.95rem] font-sans text-[0.9375rem] leading-[1.75] text-text-2 sm:min-h-[5.25rem] sm:text-[15px]">
                {service.description}
              </p>
            </div>

            <div className="relative flex h-full shrink-0 overflow-visible bg-bg-page py-[10px] pl-[10px]">
              <div className="relative h-full w-[2rem] overflow-visible sm:w-[2.25rem]">
                <span
                  aria-hidden="true"
                  className={`absolute inset-y-0 right-0 z-10 flex w-[4rem] translate-x-1/2 items-center justify-center px-6 py-4 shadow-[0_6px_20px_-6px_rgba(233,30,140,0.20)] transition-all duration-300 sm:w-[4.5rem] sm:px-8 sm:py-5 ${isCenter ? "bg-brand-pink" : "bg-brand-pink/10"} lg:group-hover:bg-brand-pink`}
                >
                  <span
                    className={`-rotate-90 whitespace-nowrap font-sans text-xs font-semibold uppercase tracking-[0.28em] transition-colors sm:text-[13px] ${isCenter ? "text-white" : "text-brand-pink"} lg:group-hover:text-white`}
                  >
                    Read More
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    </div>
  );
}

export default function ServicesSection({ followsHero = false }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className={`relative scroll-mt-24 bg-bg-page py-16 md:py-20 lg:py-24 ${
        followsHero ? "relative z-[1] pt-[8.5rem] sm:pt-[9rem] md:pt-[9rem] lg:pt-[10rem]" : ""
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <span className="mb-4 inline-flex items-center justify-center rounded-full border border-brand-pink/40 bg-brand-pink/10 px-4 py-2 text-[0.9375rem] font-semibold uppercase tracking-wide text-brand-pink">
            Our Services
          </span>
          <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-text-1">
            Services We <span className="gradient-text">Offer</span>
          </h2>
          <p className="font-sans text-[clamp(1.0625rem,2.2vw,1.25rem)] leading-relaxed text-text-2">
            Helping you move better, feel stronger, live pain-free.
          </p>
        </div>

        {/* 1 col mobile/tablet - avoids Read More strip colliding between columns */}
        <div className="grid grid-cols-1 items-stretch gap-12 overflow-visible md:grid-cols-2 md:gap-14 lg:grid-cols-3 lg:gap-16">
          {HOME_SERVICE_HIGHLIGHTS.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
