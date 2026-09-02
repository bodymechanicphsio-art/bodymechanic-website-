import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ClinicImage from "@/components/ui/ClinicImage";
import SectionLabel from "@/components/ui/SectionLabel";
import { ATHLETE_PARTNERSHIPS } from "@/lib/constants/about";

/**
 * "Trusted by Athletes" grid, 4 tiles (PCB, PSL 2023, Tennis Federation,
 * ITF World Tennis Tour). 1 col mobile → 2 col sm → 4 col lg.
 */
export default function AboutAthletes() {
  return (
    <section id="athletes" className="container-site max-w-6xl mb-16 md:mb-24">
      <AnimateOnScroll className="mb-10 text-center md:mb-12">
        <SectionLabel label="Trusted By Athletes" />
        <h2 className="section-heading font-display">
          Trusted To Keep Professional Athletes{" "}
          <span className="gradient-text">Match-Fit</span>
        </h2>
        <p className="section-subtext mx-auto mt-4 max-w-2xl font-sans">
          The same care that keeps national-level cricketers and tennis players on the field is
          the care your recovery deserves.
        </p>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {ATHLETE_PARTNERSHIPS.map((partner, i) => (
          <AnimateOnScroll key={partner.name} delay={i * 0.08}>
            <article className="card-light overflow-hidden">
              <div className="relative aspect-[4/3] w-full bg-bg-section-pink">
                <ClinicImage
                  src={partner.image}
                  alt={partner.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  objectFit="contain"
                />
              </div>
              <div className="px-4 py-4 sm:px-5 sm:py-5">
                <h3 className="font-display text-sm font-bold leading-snug text-text-1 sm:text-[0.9375rem]">
                  {partner.name}
                </h3>
                <p className="mt-1.5 font-sans text-xs leading-snug text-text-2 sm:text-[0.8125rem]">
                  {partner.caption}
                </p>
              </div>
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
