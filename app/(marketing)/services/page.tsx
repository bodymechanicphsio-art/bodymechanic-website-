import SectionLabel from "@/components/ui/SectionLabel";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ActionButton from "@/components/ui/ActionButton";
import ClinicImage from "@/components/ui/ClinicImage";
import FaqAccordionList from "@/components/ui/FaqAccordionList";
import { FAQSchema } from "@/components/ui/JsonLd";
import { createPageMetadata } from "@/lib/seo";
import { SERVICES, FAQ_ITEMS } from "@/lib/constants";
import { BookOpen, CalendarCheck, Sparkles } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Our Services",
  description:
    "Complete physiotherapy services: sports injury rehab, dry needling, manual therapy, chronic pain management, and exercise programs in Lahore.",
  path: "/services",
  keywords: [
    "sports injury rehab",
    "dry needling",
    "manual therapy",
    "chronic pain",
    "neurological rehabilitation",
    "exercise therapy",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <FAQSchema />
      <div className="overflow-x-clip bg-bg-page pt-28 pb-24">
        <div className="container-site mb-16 max-w-4xl text-center md:mb-20">
          <AnimateOnScroll>
            <SectionLabel label="Our Services" />
            <h1 className="section-heading mb-6 font-display font-bold text-text-1">
              Treatment For <span className="gradient-text">Every Condition</span>
            </h1>
            <p className="section-subtext mx-auto max-w-2xl font-sans">
              We offer a comprehensive range of evidence-based physiotherapy treatments tailored to
              your specific needs and goals.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="container-site max-w-6xl space-y-6 sm:space-y-8">
          {SERVICES.map((service, i) => (
            <AnimateOnScroll key={service.id} delay={i * 0.06}>
              <div className="card-light flex flex-col overflow-hidden md:flex-row">
                <div className="relative aspect-[16/10] w-full shrink-0 md:aspect-auto md:w-72 md:min-h-[220px] lg:w-80">
                  <ClinicImage
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 text-center sm:p-6 md:p-8 md:text-left">
                  <h2 className="mb-2 font-display text-xl font-bold text-text-1 sm:text-2xl">
                    {service.title}
                  </h2>
                  <p className="detail-body mb-5 flex-1">{service.description}</p>

                  <div className="mb-6 grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 md:grid-cols-4">
                    {service.details.map((detail) => (
                      <div
                        key={detail}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-pink bg-brand-pink-light px-3 py-2.5 text-center font-sans text-sm text-brand-pink sm:text-[0.9375rem]"
                      >
                        <Sparkles size={14} strokeWidth={2} className="shrink-0 opacity-80" />
                        {detail}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center md:justify-start">
                    <ActionButton
                      href={`/services/${service.id}`}
                      icon={BookOpen}
                      variant="primary"
                      showArrow
                      className="sm:min-w-[11rem]"
                    >
                      View service
                    </ActionButton>
                    <ActionButton
                      href="/book"
                      icon={CalendarCheck}
                      variant="outline"
                      className="sm:min-w-[11rem]"
                    >
                      Book appointment
                    </ActionButton>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="container-site mt-20 max-w-3xl md:mt-24">
          <AnimateOnScroll className="mb-12 text-center">
            <SectionLabel label="FAQ" />
            <h2 className="section-heading font-display">
              Common <span className="gradient-text">Questions</span>
            </h2>
          </AnimateOnScroll>

          <FaqAccordionList items={FAQ_ITEMS} />
        </div>

        <AnimateOnScroll className="mt-16 px-5 text-center">
          <ActionButton
            href="/book"
            icon={CalendarCheck}
            variant="primary"
            showArrow
            className="mx-auto sm:min-w-[14rem]"
          >
            Book your appointment
          </ActionButton>
        </AnimateOnScroll>
      </div>
    </>
  );
}
