import SectionLabel from "@/components/ui/SectionLabel";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ActionButton from "@/components/ui/ActionButton";
import ClinicImage from "@/components/ui/ClinicImage";
import { createPageMetadata } from "@/lib/seo";
import { TECHNIQUES } from "@/lib/constants";
import { BookOpen, CalendarCheck, Sparkles } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Our Techniques",
  description:
    "Physiotherapy techniques used at Body Mechanic, Lahore, manual therapy, dry needling, cupping, IASTM, kinesio taping, electrotherapy, muscle energy, and ultrasonic therapy.",
  path: "/techniques",
  keywords: [
    "physiotherapy techniques lahore",
    "manual therapy",
    "dry needling",
    "cupping therapy",
    "IASTM tools",
    "kinesio taping",
    "electrotherapy",
    "muscle energy techniques",
    "ultrasonic therapy",
  ],
});

export default function TechniquesPage() {
  return (
    <div className="overflow-x-clip bg-bg-page pt-28 pb-24">
      <div className="container-site mb-16 max-w-4xl text-center md:mb-20">
        <AnimateOnScroll>
          <SectionLabel label="Our Techniques" />
          <h1 className="section-heading mb-6 font-display font-bold text-text-1">
            Techniques We <span className="gradient-text">Use</span>
          </h1>
          <p className="section-subtext mx-auto max-w-2xl font-sans">
            Every technique is prescribed after a full check-up, chosen for your body, your
            problem, and your goals.
          </p>
        </AnimateOnScroll>
      </div>

      <div className="container-site max-w-6xl space-y-6 sm:space-y-8">
        {TECHNIQUES.map((technique, i) => (
          <AnimateOnScroll key={technique.id} delay={i * 0.06}>
            <div className="card-light flex flex-col overflow-hidden md:flex-row">
              <div className="relative aspect-[16/10] w-full shrink-0 md:aspect-auto md:w-72 md:min-h-[220px] lg:w-80">
                {technique.image ? (
                  <ClinicImage
                    src={technique.image}
                    alt={technique.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-bg-section-pink font-display text-base font-semibold text-brand-pink">
                    {technique.name}
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5 text-center sm:p-6 md:p-8 md:text-left">
                <h2 className="mb-2 font-display text-xl font-bold text-text-1 sm:text-2xl">
                  {technique.name}
                </h2>
                <p className="detail-body mb-5 flex-1">{technique.description}</p>

                {technique.details && technique.details.length > 0 && (
                  <div className="mb-6 grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    {technique.details.slice(0, 4).map((detail) => (
                      <div
                        key={detail}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-pink bg-brand-pink-light px-3 py-2.5 text-center font-sans text-sm text-brand-pink"
                      >
                        <Sparkles size={14} strokeWidth={2} aria-hidden="true" />
                        <span className="min-w-0 truncate">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                  <ActionButton
                    href={`/techniques/${technique.id}`}
                    icon={BookOpen}
                    variant="primary"
                    className="sm:min-w-[12rem]"
                  >
                    View Technique
                  </ActionButton>
                  <ActionButton
                    href="/book"
                    icon={CalendarCheck}
                    variant="soft"
                    className="sm:min-w-[12rem]"
                  >
                    Book Appointment
                  </ActionButton>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}
