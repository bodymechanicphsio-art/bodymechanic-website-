import { Award } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ClinicImage from "@/components/ui/ClinicImage";
import SectionLabel from "@/components/ui/SectionLabel";
import { RECOGNITION_AWARDS } from "@/lib/constants/about";

/**
 * "Recognition & Awards" strip, small horizontal row of award cards.
 * Falls back to a text-only badge with an Award icon when image is missing,
 * so the section works even before photos are uploaded.
 */
export default function AboutAwards() {
  return (
    <section id="awards" className="container-site max-w-6xl mb-16 md:mb-24">
      <AnimateOnScroll className="mb-10 text-center md:mb-12">
        <SectionLabel label="Recognition & Awards" />
        <h2 className="section-heading font-display">
          Formally <span className="gradient-text">Recognised</span>
        </h2>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
        {RECOGNITION_AWARDS.map((award, i) => (
          <AnimateOnScroll key={award.title + award.issuer} delay={i * 0.08}>
            <article className="card-light flex h-full flex-col overflow-hidden">
              {award.image ? (
                <div className="relative aspect-[4/3] w-full bg-bg-section-pink">
                  <ClinicImage
                    src={award.image}
                    alt={award.imageAlt ?? `${award.title} awarded by ${award.issuer}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    objectFit="contain"
                  />
                </div>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-bg-section-pink">
                  <Award
                    size={44}
                    strokeWidth={1.5}
                    className="text-brand-pink"
                    aria-hidden="true"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col px-5 py-5">
                <h3 className="font-display text-[0.9375rem] font-bold leading-snug text-text-1 sm:text-base">
                  {award.title}
                </h3>
                <p className="mt-1.5 font-sans text-sm leading-snug text-text-2">
                  {award.issuer}
                </p>
                {award.year ? (
                  <p className="mt-auto pt-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-brand-pink">
                    {award.year}
                  </p>
                ) : null}
              </div>
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
