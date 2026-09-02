"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionBadge from "@/components/ui/SectionBadge";
import ClinicImage from "@/components/ui/ClinicImage";
import { CONDITIONS } from "@/lib/constants";

export default function ConditionsSection() {
  return (
    <section id="conditions" className="section-padding bg-bg-section-pink">
      <div className="container-site max-w-6xl">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <SectionBadge className="mb-4">Conditions We Treat</SectionBadge>
          <h2 className="section-heading mb-4">
            Relief For <span className="gradient-text">Every Type of Pain</span>
          </h2>
          <p className="section-subtext font-sans">
            Evidence-based treatment for the conditions our patients face most often.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {CONDITIONS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
            >
              <Link
                href="/services"
                className="group block card-light card-light-hover overflow-hidden h-full"
              >
                <div className="relative aspect-square overflow-hidden">
                  <ClinicImage
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <h3 className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white font-display font-bold text-sm md:text-base leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="p-3 md:p-4 text-xs md:text-sm text-text-2 font-sans leading-relaxed hidden sm:block">
                  {item.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
