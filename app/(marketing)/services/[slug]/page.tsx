import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CalendarCheck,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  MessageCircle,
} from "lucide-react";
import ClinicImage from "@/components/ui/ClinicImage";
import SectionBadge from "@/components/ui/SectionBadge";
import BackNavButton from "@/components/ui/BackNavButton";
import ActionButton from "@/components/ui/ActionButton";
import RelatedDetailCard from "@/components/ui/RelatedDetailCard";
import FaqAccordionList from "@/components/ui/FaqAccordionList";
import { createPageMetadata } from "@/lib/seo";
import { CLINIC, FAQ_ITEMS, SERVICES } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";
import type { Service } from "@/lib/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.id }));
}

function findService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.id === slug);
}

function serviceKeywords(service: Service): string[] {
  const title = service.title.toLowerCase();
  return [
    `${title} lahore`,
    `${title} physiotherapy`,
    `${title} clinic lahore`,
    ...service.details.map((detail) => `${detail.toLowerCase()} lahore`),
    "physiotherapist lahore",
    "body mechanic physio",
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) {
    return createPageMetadata({
      title: "Service Not Found",
      description: "This service page is unavailable.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `${service.title} in Lahore | ${CLINIC.shortName} Physiotherapy Clinic`,
    description: `${service.description} Delivered at ${CLINIC.shortName} Clinic, Lahore. Book your assessment on ${CLINIC.phone}.`,
    path: `/services/${service.id}`,
    keywords: serviceKeywords(service),
  });
}

function ServiceSchema({ service }: { service: Service }) {
  const faqEntity = (service.faqs ?? []).map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.overview ?? service.description,
    url: `${CLINIC.domain}/services/${service.id}`,
    image: service.image.startsWith("http") ? service.image : `${CLINIC.domain}${service.image}`,
    procedureType: "Therapeutic",
    bodyLocation: "Musculoskeletal system",
    performer: {
      "@type": "MedicalBusiness",
      name: CLINIC.name,
      telephone: CLINIC.phoneTel,
      url: CLINIC.domain,
      address: {
        "@type": "PostalAddress",
        streetAddress: CLINIC.address.line1,
        addressLocality: "Lahore",
        addressRegion: CLINIC.geo.region,
        postalCode: CLINIC.geo.postalCode,
        addressCountry: CLINIC.geo.country,
      },
    },
    ...(faqEntity.length > 0 && {
      mainEntityOfPage: {
        "@type": "FAQPage",
        mainEntity: faqEntity,
      },
    }),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);
  const faqs = service.faqs ?? FAQ_ITEMS;
  const sessionInfoCards = service.sessionInfo
    ? [
        { icon: CalendarClock, label: "Session duration", value: service.sessionInfo.duration },
        { icon: ClipboardList, label: "Typical course", value: service.sessionInfo.typicalCourse },
      ]
    : [];

  // Split overview into paragraphs (bullet lines stripped) and bullets separately,
  // so a paragraph like "We help with:\n- item\n- item" doesn't render the bullet
  // text inline as prose AND again as a list below.
  const overviewParas = service.overview
    ? service.overview
        .split("\n\n")
        .map((para) =>
          para
            .split("\n")
            .filter((line) => !line.trim().startsWith("- "))
            .filter((line) => !/^we help with:?\s*$/i.test(line.trim()))
            .join(" ")
            .trim(),
        )
        .filter(Boolean)
    : [];
  const overviewBullets = service.overview
    ? service.overview
        .split("\n")
        .filter((line) => line.trim().startsWith("- "))
        .map((line) => line.replace(/^\s*-\s+/, ""))
    : [];

  const whatsappHref = whatsappLink(
    `Hi, I'd like to book a ${service.title} session.`,
  );

  return (
    <>
      <ServiceSchema service={service} />
      <article className="overflow-x-clip bg-bg-page pt-28 pb-24">
        <div className="container-site max-w-4xl">
          <BackNavButton href="/services">All services</BackNavButton>

          <header className="mb-8">
            <SectionBadge className="mb-4">Physiotherapy Service</SectionBadge>
            <h1 className="mb-4 font-display text-[clamp(2rem,4.5vw,3rem)] font-bold leading-tight tracking-tight text-text-1">
              {service.title}
            </h1>
            <p className="max-w-3xl font-sans text-[clamp(1.0625rem,2.2vw,1.25rem)] leading-relaxed text-text-2">
              {service.description}
            </p>
          </header>

          <div className="mb-12 relative aspect-[16/10] overflow-hidden rounded-2xl border border-border-default shadow-[0_10px_40px_-14px_rgba(15,15,25,0.12)]">
            <ClinicImage
              src={service.image}
              alt={`${service.title} at ${CLINIC.shortName}, Lahore`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
            />
          </div>

          {(overviewParas.length > 0 || overviewBullets.length > 0) && (
            <section className="mb-12 max-w-3xl">
              <h2 className="detail-section-title mb-4 md:mb-5">Overview</h2>
              <div className="detail-body space-y-4">
                {overviewParas.map((para) => (
                  <p key={para.slice(0, 32)}>{para}</p>
                ))}
              </div>
              {overviewBullets.length > 0 && (
                <ul className="mt-5 grid gap-2.5">
                  {overviewBullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-sans text-base leading-snug text-text-1"
                    >
                      <CheckCircle2
                        size={18}
                        strokeWidth={2}
                        className="mt-0.5 shrink-0 text-brand-pink"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {service.techniques && service.techniques.length > 0 && (
            <section className="mb-12">
              <h2 className="detail-section-title mb-2">What we do</h2>
              <p className="detail-body mb-5 max-w-3xl">
                Every treatment is chosen after a full check-up, no one-size-fits-all care.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {service.techniques.map((technique) => (
                  <div key={technique.name} className="card-light p-5 md:p-6">
                    <h3 className="mb-2 font-display text-base font-bold text-text-1 md:text-lg">
                      {technique.name}
                    </h3>
                    <p className="detail-body text-sm sm:text-base">{technique.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {service.conditionsTreated && service.conditionsTreated.length > 0 && (
            <section className="mb-12">
              <h2 className="detail-section-title mb-5">Conditions we treat</h2>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {service.conditionsTreated.map((condition) => (
                  <li
                    key={condition}
                    className="flex items-start gap-2.5 font-sans text-base leading-snug text-text-1"
                  >
                    <CheckCircle2
                      size={18}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-brand-pink"
                    />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {sessionInfoCards.length > 0 && (
            <section className="mb-12">
              <h2 className="detail-section-title mb-5">Session information</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {sessionInfoCards.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="card-light p-5 text-center">
                    <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-pink/10 text-brand-pink">
                      <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <p className="mb-1 font-sans text-xs font-semibold uppercase tracking-wider text-text-3">
                      {label}
                    </p>
                    <p className="font-display text-base font-bold text-text-1 sm:text-lg">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {faqs.length > 0 && (
            <section className="mb-12">
              <h2 className="detail-section-title mb-5">Frequently asked questions</h2>
              <FaqAccordionList items={faqs} />
            </section>
          )}

          <section
            aria-label={`Book ${service.title}`}
            className="mb-12 rounded-2xl border border-brand-pink/25 bg-brand-pink/5 p-6 md:p-10"
          >
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="detail-section-title mb-2">Ready to feel better?</h2>
                <p className="detail-body mb-4">
                  Book on WhatsApp in 30 seconds, we&apos;ll confirm your time within an hour.
                </p>
                <ul className="flex flex-col gap-1.5 font-sans text-[0.9375rem] text-text-2">
                  <li className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-brand-pink">✓</span>
                    First visit: full check-up + plan
                  </li>
                  <li className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-brand-pink">✓</span>
                    Session length: 35-45 minutes
                  </li>
                  <li className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-brand-pink">✓</span>
                    No referral needed
                  </li>
                </ul>
              </div>
              <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:w-auto md:shrink-0">
                <ActionButton
                  href="/book"
                  icon={CalendarCheck}
                  variant="primary"
                  showArrow
                  className="w-full sm:min-w-[12rem]"
                >
                  Book Appointment
                </ActionButton>
                <ActionButton
                  href={whatsappHref}
                  icon={MessageCircle}
                  variant="soft"
                  external
                  className="w-full sm:min-w-[12rem]"
                >
                  WhatsApp Us
                </ActionButton>
              </div>
            </div>
          </section>

          {related.length > 0 && (
            <section>
              <h2 className="detail-section-title mb-5">Related services</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <RelatedDetailCard
                    key={item.id}
                    href={`/services/${item.id}`}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    imageAlt={item.title}
                    actionLabel="View service"
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
}
