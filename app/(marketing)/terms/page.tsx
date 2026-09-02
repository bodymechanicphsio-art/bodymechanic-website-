import LegalDocument from "@/components/layout/LegalDocument";
import { createPageMetadata } from "@/lib/seo";
import { TERMS_SECTIONS } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service for Body Mechanic Physiotherapy Clinic website and online booking services in Lahore, Pakistan.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalDocument
      label="Legal"
      heading="Terms of Service"
      intro="Please read these terms carefully before using our website or submitting a booking request."
      sections={TERMS_SECTIONS}
    />
  );
}
