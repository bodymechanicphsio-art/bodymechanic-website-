import LegalDocument from "@/components/layout/LegalDocument";
import { createPageMetadata } from "@/lib/seo";
import { PRIVACY_SECTIONS } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Body Mechanic Physiotherapy Clinic. Learn how we collect, use, and protect your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalDocument
      label="Legal"
      heading="Privacy Policy"
      intro="Your privacy matters to us. This policy describes how Body Mechanic Physiotherapy Clinic handles information collected through our website and booking channels."
      sections={PRIVACY_SECTIONS}
    />
  );
}
