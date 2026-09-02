"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Stethoscope, type LucideIcon } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import { useCenterViewportActive } from "@/hooks/useCenterViewportActive";
import { WHY_CHOOSE_FEATURES } from "@/lib/constants";

const FEATURE_ICONS: Record<(typeof WHY_CHOOSE_FEATURES)[number]["icon"], LucideIcon> = {
  shield: ShieldCheck,
  therapist: Stethoscope,
};

function FeatureItem({
  feature,
  index,
}: {
  feature: (typeof WHY_CHOOSE_FEATURES)[number];
  index: number;
}) {
  const Icon = FEATURE_ICONS[feature.icon];
  const { ref, isCenter } = useCenterViewportActive<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group flex gap-4 text-left"
    >
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300 sm:h-16 sm:w-16 ${isCenter ? "bg-brand-pink text-white" : "bg-brand-pink/10 text-brand-pink"} lg:group-hover:bg-brand-pink lg:group-hover:text-white`}
      >
        <Icon size={26} strokeWidth={1.65} />
      </div>
      <div className="min-w-0 pt-0.5">
        <h3 className="mb-1.5 font-display text-[1.125rem] font-bold leading-snug tracking-tight text-text-1">
          {feature.title}
        </h3>
        <p className="font-sans text-[0.9375rem] leading-[1.75] text-text-2">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative scroll-mt-24 overflow-x-clip bg-bg-section py-16 md:py-20 lg:py-24"
    >
      <div className="container-site max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto text-center"
        >
          <SectionBadge className="mb-4">Welcome</SectionBadge>

          <h2 className="section-heading font-display mb-5">
            Welcome To Body Mechanic{" "}
            <span className="gradient-text">Physiotherapy Clinic</span>
          </h2>

          <p className="section-subtext mx-auto mb-10 max-w-2xl font-sans">
            First time visiting us? At Body Mechanic you get evidence-based physiotherapy in Lahore
            with a patient-first approach: clear assessment, hands-on care, and a plan built around
            your goals.
          </p>

          <div className="mb-8 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 sm:gap-5">
            {WHY_CHOOSE_FEATURES.map((feature, i) => (
              <FeatureItem key={feature.title} feature={feature} index={i} />
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-brand-pink px-8 py-3 font-sans text-base font-semibold text-white transition-colors hover:bg-brand-pink-dim"
          >
            About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
