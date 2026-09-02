import { CLINIC, CLINIC_HOURS, FAQ_ITEMS, TEAM_MEMBERS } from "@/lib/constants";
import { ASSETS } from "@/lib/assets";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": CLINIC.domain,
    name: CLINIC.name,
    description:
      "Expert physiotherapy clinic providing sports injury rehab, chronic pain management, dry needling, and rehabilitation services in Lahore, Pakistan.",
    image: `${CLINIC.domain}${ASSETS.logo}`,
    url: CLINIC.domain,
    telephone: CLINIC.phoneTel,
    email: CLINIC.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC.address.line1,
      addressLocality: "Lahore",
      addressRegion: CLINIC.geo.region,
      postalCode: CLINIC.geo.postalCode,
      addressCountry: CLINIC.geo.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINIC.geo.latitude,
      longitude: CLINIC.geo.longitude,
    },
    openingHoursSpecification: CLINIC_HOURS.schema.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.dayOfWeek,
      opens: entry.opens,
      closes: entry.closes,
    })),
    sameAs: [CLINIC.instagram.url, CLINIC.facebook],
    priceRange: "$$",
    areaServed: "Lahore, Punjab, Pakistan",
    knowsAbout: [
      "Physiotherapy",
      "Sports Medicine",
      "Rehabilitation",
      "Dry Needling",
      "Manual Therapy",
      "Exercise Therapy",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProfessionalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: CLINIC.name,
    url: CLINIC.domain,
    telephone: CLINIC.phoneTel,
    medicalSpecialty: [
      "Sports Medicine",
      "Physical Medicine and Rehabilitation",
      "Orthopedic Surgery",
    ],
    employee: TEAM_MEMBERS.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      knowsAbout: member.credentials,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${CLINIC.domain}/#website`,
    url: CLINIC.domain,
    name: CLINIC.name,
    description:
      "Expert physiotherapy clinic in Lahore for sports injury rehab, chronic pain, dry needling, and rehabilitation.",
    inLanguage: "en-PK",
    publisher: { "@id": CLINIC.domain },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
