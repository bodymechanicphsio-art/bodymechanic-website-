import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ClinicImage from "@/components/ui/ClinicImage";
import SectionLabel from "@/components/ui/SectionLabel";
import { WORKSHOPS } from "@/lib/constants/about";

/**
 * "Workshops & Community" grid, 3 photos with captions.
 * Stacks on mobile, 3-col on md+.
 */
export default function AboutWorkshops() {
  return (
    <section id="workshops" className="container-site max-w-6xl mb-16 md:mb-24">
      <AnimateOnScroll className="mb-10 text-center md:mb-12">
        <SectionLabel label="Workshops & Community" />
        <h2 className="section-heading font-display">
          Teaching the Next Wave of{" "}
          <span className="gradient-text">Physiotherapists</span>
        </h2>
        <p className="section-subtext mx-auto mt-4 max-w-2xl font-sans">
          Between patients, Dr. Saima trains and mentors, running hands-on workshops and speaking
          at institutes across Lahore.
        </p>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        {WORKSHOPS.map((item, i) => (
          <AnimateOnScroll key={item.caption} delay={i * 0.08}>
            <figure className="card-light overflow-hidden">
              <div className="relative aspect-[4/5] w-full bg-bg-section-pink">
                <ClinicImage
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  objectFit="contain"
                />
              </div>
              <figcaption className="px-4 py-4 font-sans text-[0.9375rem] leading-snug text-text-2 sm:px-5 sm:py-5">
                {item.caption}
              </figcaption>
            </figure>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
