import type { Metadata } from "next";
import { CLINIC } from "@/lib/constants";
import { ASSETS } from "@/lib/assets";

/** Primary SEO keywords for Lahore physiotherapy searches. */
export const SITE_KEYWORDS = [
  "physiotherapy in lahore",
  "physiotherapist in lahore",
  "best physiotherapy clinic lahore",
  "physio clinic lahore",
  "physiotherapist near me lahore",
  "sports physiotherapy lahore",
  "sports injury rehab lahore",
  "back pain treatment lahore",
  "knee pain physio lahore",
  "chronic pain management lahore",
  "dry needling lahore",
  "cupping therapy lahore",
  "manual therapy lahore",
  "neurological rehabilitation lahore",
  "posture correction lahore",
  "female physiotherapist lahore",
  "home visit physiotherapy lahore",
  "body mechanic physiotherapy clinic",
] as const;

/** All indexable routes - used by sitemap.ts. */
export const SITEMAP_ROUTES = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/techniques", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/book", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
];

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

function absoluteUrl(path: string) {
  return `${CLINIC.domain}${path}`;
}

function ogImageMeta() {
  const url = absoluteUrl(ASSETS.ogImage);
  return [
    {
      url,
      width: 1200,
      height: 630,
      alt: `${CLINIC.name}, Physiotherapy in Lahore`,
    },
  ];
}

/** Root metadata for app/layout.tsx */
export const rootMetadata: Metadata = {
  title: {
    default: "Body Mechanic Physiotherapy Clinic | Lahore",
    template: "%s | Body Mechanic Physio",
  },
  description:
    "Expert physiotherapy clinic in Lahore. Sports injury rehab, chronic pain, dry needling, and wellness care that treats the root cause — not just symptoms.",
  keywords: [...SITE_KEYWORDS],
  authors: [{ name: CLINIC.name }],
  creator: CLINIC.name,
  publisher: CLINIC.name,
  metadataBase: new URL(CLINIC.domain),
  alternates: {
    canonical: CLINIC.domain,
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: CLINIC.domain,
    title: "Body Mechanic Physiotherapy Clinic | Expert Physio in Lahore",
    description:
      "Expert physiotherapy for sports injuries, chronic pain, and rehabilitation. Located in Lahore, Pakistan.",
    siteName: CLINIC.name,
    images: ogImageMeta(),
  },
  twitter: {
    card: "summary_large_image",
    title: CLINIC.name,
    description:
      "Expert physiotherapy in Lahore. Sports injury rehab, chronic pain management, and wellness care.",
    creator: CLINIC.twitter,
    images: [absoluteUrl(ASSETS.ogImage)],
  },
  icons: {
    icon: [
      { url: ASSETS.logo, type: "image/png" },
    ],
    apple: ASSETS.logo,
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
};

/** Per-page metadata factory - keeps OG, Twitter, and canonical in sync. */
export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: keywords ?? [...SITE_KEYWORDS],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_PK",
      url,
      title,
      description,
      siteName: CLINIC.name,
      images: ogImageMeta(),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: CLINIC.twitter,
      images: [absoluteUrl(ASSETS.ogImage)],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
