/** Legal page content - single source for Privacy Policy and Terms of Service. */

const CLINIC_NAME = "Body Mechanic Physiotherapy Clinic";
const CLINIC_INTRO =
  'Body Mechanic Physiotherapy Clinic ("we", "our", "us") operates bodymechanic-physio.com.';

export const LEGAL_LAST_UPDATED = "July 31, 2026";

export const PRIVACY_SECTIONS = [
  {
    title: "1. Introduction",
    body: `${CLINIC_INTRO} This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website, contact us, or book an appointment.`,
  },
  {
    title: "2. Information We Collect",
    body: "We may collect the following information when you use our website or contact us:",
    list: [
      "Name and contact details (phone number, email address)",
      "Appointment preferences (service type, preferred date, notes about your condition)",
      "Communications you send us via WhatsApp, phone, email, or contact forms",
      "Basic usage data such as pages visited and device/browser type (if analytics are enabled)",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: "We use your information solely to:",
    list: [
      "Respond to booking requests and appointment enquiries",
      "Provide physiotherapy services and follow-up care",
      "Communicate with you about appointments, treatment, and clinic updates",
      "Improve our website and patient experience",
      "Comply with applicable legal and regulatory requirements",
    ],
  },
  {
    title: "4. WhatsApp & Third-Party Services",
    body: "When you choose to book via WhatsApp, your message is processed through WhatsApp/Meta platforms under their own privacy policies. Our website may also link to Instagram and other third-party services. We do not control how those platforms handle your data.",
  },
  {
    title: "5. Data Storage & Security",
    body: "We take reasonable steps to protect your personal information. Appointment details shared via WhatsApp or phone are handled by our clinic staff using secure clinical practices. We do not sell your personal data to third parties.",
  },
  {
    title: "6. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information by contacting us. You may also opt out of non-essential communications at any time.",
  },
  {
    title: "7. Contact Us",
    body: "For privacy-related questions, contact us at bodymechanicphysiotherapy@gmail.com or call 0310-4971086. Clinic address: 487 J Block, LDA Avenue-1, Lahore, Pakistan.",
  },
] as const;

export const TERMS_SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing ${CLINIC_NAME} website (bodymechanic-physio.com) or using our booking services, you agree to these Terms of Service. If you do not agree, please do not use our website.`,
  },
  {
    title: "2. Medical Disclaimer",
    body: "Information on this website is for general educational purposes only and does not constitute medical advice, diagnosis, or treatment. Always consult a qualified physiotherapist or healthcare provider for personal medical decisions. In case of emergency, contact emergency services immediately.",
  },
  {
    title: "3. Appointments & Bookings",
    body: "Submitting a booking request via our website or WhatsApp does not guarantee an appointment until confirmed by our clinic staff. We reserve the right to reschedule or decline bookings based on availability and clinical suitability.",
  },
  {
    title: "4. Services",
    body: "We provide physiotherapy, rehabilitation, and related wellness services as described on our website. Service availability may vary. Home visit and online consultation options are subject to location, scheduling, and clinical assessment.",
  },
  {
    title: "5. Patient Responsibilities",
    body: "You agree to provide accurate contact and health-related information, attend scheduled appointments on time, and follow treatment plans as advised by your physiotherapist. Late cancellations may affect future booking availability.",
  },
  {
    title: "6. Fees & Payment",
    body: "Service fees are communicated at the time of booking or during your visit. Payment terms may vary by service type. Contact the clinic directly for current pricing and insurance coverage questions.",
  },
  {
    title: "7. Intellectual Property",
    body: "All website content, including text, branding, design, and logos, is owned by Body Mechanic Physiotherapy Clinic unless otherwise stated. You may not copy, reproduce, or distribute content without written permission.",
  },
  {
    title: "8. Limitation of Liability",
    body: "We strive to keep website information accurate and up to date but make no warranties about completeness or availability. To the fullest extent permitted by law, we are not liable for indirect damages arising from use of this website.",
  },
  {
    title: "9. Changes to Terms",
    body: "We may update these Terms of Service at any time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.",
  },
  {
    title: "10. Contact",
    body: "Questions about these terms? Contact Body Mechanic Physiotherapy Clinic at bodymechanicphysiotherapy@gmail.com or 0310-4971086.",
  },
] as const;
