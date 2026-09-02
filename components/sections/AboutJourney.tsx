import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ClinicImage from "@/components/ui/ClinicImage";
import SectionLabel from "@/components/ui/SectionLabel";
import { JOURNEY_MILESTONES } from "@/lib/constants/about";
import type { JourneyImage, JourneyMilestone } from "@/lib/constants/about";

function YearBadge({ years }: { years: string }) {
  return (
    <span className="absolute left-5 top-0 z-20 -translate-y-1/2 rounded-full border border-brand-pink/20 bg-white/95 px-3 py-1 font-sans text-xs font-bold uppercase tracking-[0.12em] text-brand-pink shadow-sm backdrop-blur-sm">
      {years}
    </span>
  );
}

/** Mobile, each photo full width, stacked, faces not cropped. */
function MobileImageStack({ images }: { images: JourneyImage[] }) {
  return (
    <div className="flex flex-col gap-3 px-4 pb-4 pt-6">
      {images.map((img) => (
        <div
          key={img.src}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-bg-section-pink"
        >
          <ClinicImage
            src={img.src}
            alt={img.alt}
            fill
            sizes="100vw"
            objectFit="contain"
            className="object-center"
          />
        </div>
      ))}
    </div>
  );
}

/**
 * Desktop, professional editorial layout: full-width lead photo on top,
 * supporting thumbs in an equal row below. `contain` + pink bg ensures
 * faces are never cropped on portrait sources.
 */
function DesktopImageMosaic({ images }: { images: JourneyImage[] }) {
  const [main, ...rest] = images;
  const thumbs = rest.slice(0, 2);

  return (
    <div className="flex w-full flex-col gap-2">
      {/* Lead photo, wide 16/9, contained so nothing crops. */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-bg-section-pink">
        <ClinicImage
          src={main.src}
          alt={main.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 520px"
          objectFit="contain"
          className="object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      </div>

      {thumbs.length > 0 && (
        <div
          className={`grid gap-2 ${thumbs.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
        >
          {thumbs.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-bg-section-pink"
            >
              <ClinicImage
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 260px"
                objectFit="contain"
                className="object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MilestoneCard({ milestone }: { milestone: JourneyMilestone }) {
  return (
    <article className="card-light group relative overflow-visible transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(233,30,140,0.18)]">
      <YearBadge years={milestone.years} />

      <div className="lg:hidden">
        <MobileImageStack images={milestone.images} />
      </div>

      <div className="hidden p-3 pb-0 lg:block">
        <DesktopImageMosaic images={milestone.images} />
      </div>

      <div className="px-5 py-6 sm:px-7 sm:py-7 lg:pt-5">
        <h3 className="font-display text-[1.0625rem] font-bold leading-snug tracking-tight text-text-1 sm:text-[1.1875rem]">
          {milestone.title}
        </h3>
        <p className="mt-3 font-sans text-[0.9375rem] leading-[1.7] text-text-2">
          {milestone.description}
        </p>
      </div>
    </article>
  );
}

/**
 * Vertical timeline: single column on mobile, alternating left/right on lg+.
 */
export default function AboutJourney() {
  return (
    <section id="journey" className="container-site mb-16 max-w-6xl md:mb-24">
      <AnimateOnScroll className="mb-12 text-center md:mb-14">
        <SectionLabel label="Our Journey" />
        <h2 className="section-heading font-display">
          A Career Built On <span className="gradient-text">Elite Sports Care</span>
        </h2>
        <p className="section-subtext mx-auto mt-4 max-w-2xl font-sans">
          From national athletes to your first assessment, the road that shaped Body Mechanic.
        </p>
      </AnimateOnScroll>

      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-2 hidden h-[calc(100%-1rem)] w-px -translate-x-1/2 bg-gradient-to-b from-brand-pink/30 via-brand-pink/25 to-brand-pink/10 lg:block"
        />

        <ol className="space-y-10 lg:space-y-16">
          {JOURNEY_MILESTONES.map((milestone, i) => {
            const isLeft = i % 2 === 0;
            return (
              <li key={milestone.years} className="relative">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-brand-pink bg-bg-page shadow-[0_0_0_4px_rgba(233,30,140,0.08)] lg:block"
                />

                <div className="lg:hidden">
                  <AnimateOnScroll>
                    <MilestoneCard milestone={milestone} />
                  </AnimateOnScroll>
                </div>

                <div className="hidden grid-cols-2 items-start gap-12 lg:grid">
                  {isLeft ? (
                    <>
                      <div className="pr-8">
                        <AnimateOnScroll direction="left">
                          <MilestoneCard milestone={milestone} />
                        </AnimateOnScroll>
                      </div>
                      <div aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      <div aria-hidden="true" />
                      <div className="pl-8">
                        <AnimateOnScroll direction="right">
                          <MilestoneCard milestone={milestone} />
                        </AnimateOnScroll>
                      </div>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
