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
import { CLINIC, FAQ_ITEMS, TECHNIQUES } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";
import type { Technique } from "@/lib/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return TECHNIQUES.map((technique) => ({ slug: technique.id }));
}

function findTechnique(slug: string): Technique | undefined {
  return TECHNIQUES.find((technique) => technique.id === slug);
}

function techniqueKeywords(technique: Technique): string[] {
  const name = technique.name.toLowerCase();
  return [
    `${name} lahore`,
    `${name} physiotherapy`,
    `${name} treatment lahore`,
    "physiotherapist lahore",
    "physio techniques lahore",
    "body mechanic physio",
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const technique = findTechnique(slug);
  if (!technique) {
    return createPageMetadata({
      title: "Technique Not Found",
      description: "This technique page is unavailable.",
      path: `/techniques/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `${technique.name} in Lahore | ${CLINIC.shortName} Physiotherapy Clinic`,
    description: `${technique.description} ${technique.name} performed by DPT-qualified physiotherapists at ${CLINIC.shortName} Clinic, Lahore.`,
    path: `/techniques/${technique.id}`,
    keywords: techniqueKeywords(technique),
  });
}

function TechniqueSchema({ technique }: { technique: Technique }) {
  const faqEntity = (technique.faqs ?? []).map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: technique.name,
    description: technique.overview ?? technique.description,
    url: `${CLINIC.domain}/techniques/${technique.id}`,
    ...(technique.image && { image: `${CLINIC.domain}${technique.image}` }),
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

export default async function TechniqueDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const technique = findTechnique(slug);
  if (!technique) notFound();

  const related = TECHNIQUES.filter((t) => t.id !== technique.id).slice(0, 3);
  const faqs = technique.faqs ?? FAQ_ITEMS;
  const sessionInfoCards = technique.sessionInfo
    ? [
        {
          icon: CalendarClock,
          label: "Session duration",
          value: technique.sessionInfo.duration,
        },
        {
          icon: ClipboardList,
          label: "Typical course",
          value: technique.sessionInfo.typicalCourse,
        },
      ]
    : [];

  const whatsappHref = whatsappLink(
    `Hi, I'd like to learn more about ${technique.name} at Body Mechanic.`,
  );

  return (
    <>
      <TechniqueSchema technique={technique} />
      <article className="overflow-x-clip bg-bg-page pt-28 pb-24">
        <div className="container-site max-w-4xl">
          <BackNavButton href="/techniques">All techniques</BackNavButton>

          <header className="mb-8">
            <SectionBadge className="mb-4">Physiotherapy Technique</SectionBadge>
            <h1 className="mb-4 font-display text-[clamp(2rem,4.5vw,3rem)] font-bold leading-tight tracking-tight text-text-1">
              {technique.name}
            </h1>
            <p className="max-w-3xl font-sans text-[clamp(1.0625rem,2.2vw,1.25rem)] leading-relaxed text-text-2">
              {technique.description}
            </p>
          </header>

          {technique.image ? (
            <div className="mb-12 relative aspect-[16/10] overflow-hidden rounded-2xl border border-border-default shadow-[0_10px_40px_-14px_rgba(15,15,25,0.12)]">
              <ClinicImage
                src={technique.image}
                alt={`${technique.name} at ${CLINIC.shortName}, Lahore`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="mb-12 flex aspect-[16/10] items-center justify-center rounded-2xl border border-border-default bg-bg-section-pink font-display text-lg font-semibold text-brand-pink">
              {technique.name}
            </div>
          )}

          {technique.overview && (
            <section className="mb-12 max-w-3xl">
              <h2 className="detail-section-title mb-3 md:mb-4">How It Works</h2>
              <p className="detail-body">{technique.overview}</p>
            </section>
          )}

          {technique.details && technique.details.length > 0 && (
            <section className="mb-12">
              <h2 className="detail-section-title mb-5">Key benefits</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {technique.details.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border-default bg-bg-card px-4 py-3.5 font-sans text-base leading-snug text-text-1"
                  >
                    <CheckCircle2
                      size={20}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-brand-pink"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {technique.whatWeWillDo && technique.whatWeWillDo.length > 0 && (
            <section className="mb-12">
              <h2 className="detail-section-title mb-5">What We Will Do</h2>
              <ol className="space-y-4">
                {technique.whatWeWillDo.map((step) => (
                  <li
                    key={step.step}
                    className="flex gap-4 rounded-xl border border-border-default bg-bg-card p-5"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-pink/10 font-display text-base font-bold text-brand-pink"
                    >
                      {step.step}
                    </span>
                    <div className="min-w-0">
                      <h3 className="mb-1 font-display text-base font-bold text-text-1 md:text-lg">
                        {step.title}
                      </h3>
                      <p className="detail-body text-sm sm:text-base">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
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
            aria-label={`Book ${technique.name}`}
            className="mb-12 rounded-2xl border border-brand-pink/25 bg-brand-pink/5 p-6 md:p-10"
          >
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="detail-section-title mb-2">Ready to feel better?</h2>
                <p className="detail-body mb-4">
                  Book on WhatsApp in 30 seconds, we&apos;ll check if {technique.name} is right
                  for you and confirm your time within an hour.
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
              <h2 className="detail-section-title mb-5">Related techniques</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <RelatedDetailCard
                    key={item.id}
                    href={`/techniques/${item.id}`}
                    title={item.name}
                    description={item.description}
                    actionLabel="View technique"
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
