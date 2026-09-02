/** Single source of truth for clinic contact & business info. */

export const CLINIC = {
  name: "Body Mechanic Physiotherapy Clinic",
  shortName: "Body Mechanic",
  tagline: "Physiotherapy | Rehab | Wellness | Fitness",
  domain: "https://bodymechanic-physio.com",
  phone: "0310-4971086",
  phoneTel: "+923104971086",
  email: "bodymechanicphysiotherapy@gmail.com",
  mapsUrl: "https://maps.app.goo.gl/S7umCdbVuuuZ4TQA7",
  address: {
    line1: "487, J Block, LDA Avenue-1",
    line2: "Lahore, Pakistan",
    full: "487, J Block, LDA Avenue-1, Lahore, Pakistan",
  },
  instagram: {
    handle: "@body_mechanic_physio_clinic",
    url: "https://www.instagram.com/body_mechanic_physio_clinic?igsh=MW84eTc0OXgyNG55MQ==",
  },
  facebook: "https://www.facebook.com/bodymechanicphysio",
  twitter: "@body_mechanic_physio_clinic",
  geo: {
    latitude: "31.5204",
    longitude: "74.3587",
    postalCode: "54000",
    region: "Punjab",
    country: "PK",
  },
  googleReviews: {
    rating: 5.0,
    count: 15,
    /** Opens Google Maps / Business profile */
    url: "https://maps.app.goo.gl/S7umCdbVuuuZ4TQA7",
  },
} as const;

export const CLINIC_HOURS = {
  rows: [
    { label: "Monday - Friday", hours: "2:00 PM - 9:00 PM" },
    { label: "Saturday", hours: "2:00 PM - 6:00 PM" },
    { label: "Sunday", hours: "Closed" },
  ],
  weekday: { label: "Monday - Friday", hours: "2:00 PM - 9:00 PM" },
  friday: { label: "Friday", hours: "2:00 PM - 9:00 PM" },
  saturday: { label: "Saturday", hours: "2:00 PM - 6:00 PM" },
  sunday: { label: "Sunday", hours: "Closed" },
  contactSummary: "Mon-Fri 2 PM-9 PM · Sat 2 PM-6 PM · Sun Closed",
  heroSummary: "Mon-Sat (hours vary by day)",
  ctaSummary: "Open 6 Days a Week",
  schema: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ] as const,
      opens: "14:00",
      closes: "21:00",
    },
    {
      dayOfWeek: "Saturday" as const,
      opens: "14:00",
      closes: "18:00",
    },
  ],
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const BOOKING_OFFERINGS = [
  "In-Clinic Sessions",
  "Home Visit Service",
  "Online Consultations",
  "Sports Rehab Programs",
  "Post-Surgery Recovery",
] as const;

export const ACCREDITATIONS = [
  "DPT Qualified",
  "Sports Physio Certified",
  "Dry Needling Cert",
  "Home Visit Service",
] as const;

export const MISSION_VALUES = [
  {
    icon: "target" as const,
    title: "Our Mission",
    text: "To restore function, reduce pain, and enhance the quality of life for every patient through evidence-based physiotherapy.",
    accent: "pink" as const,
  },
  {
    icon: "lightbulb" as const,
    title: "Our Approach",
    text: "We treat the whole person not just the injury. Every treatment plan is individualised, and we listen before we act.",
    accent: "purple" as const,
  },
  {
    icon: "trophy" as const,
    title: "Our Standard",
    text: "Continuous education and clinical excellence. Our team holds advanced certifications and stays current with the latest research.",
    accent: "pink" as const,
  },
] as const;
