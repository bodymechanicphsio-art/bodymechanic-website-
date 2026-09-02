export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceTechnique {
  name: string;
  description: string;
  image?: string;
}

export interface ServiceJourneyStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceSessionInfo {
  duration: string;
  typicalCourse: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  /** One-line tagline shown on the card. */
  description: string;
  /** Hero image path or remote URL. Used in card + detail hero. */
  image: string;
  /** Short bullet chips shown on the card and listing. */
  details: string[];
  /** Optional richer content used by /services/[slug]. */
  overview?: string;
  whoItsFor?: string[];
  techniques?: ServiceTechnique[];
  conditionsTreated?: string[];
  whatToExpect?: ServiceJourneyStep[];
  sessionInfo?: ServiceSessionInfo;
  faqs?: ServiceFaq[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  initials: string;
  gradient: string;
  image?: string;
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  condition: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: "clipboard" | "map" | "pulse";
}

export interface Technique {
  id: string;
  name: string;
  /** Short line on the grid tile */
  description: string;
  icon:
    | "circle-dot"
    | "hand"
    | "zap"
    | "bandage"
    | "activity"
    | "target"
    | "waves"
    | "wrench";
  /** Optional hero image in the detail modal - path from ASSETS or /public */
  image?: string;
  /** Short intro paragraph shown under the hero. */
  overview?: string;
  /** Plain-language bullet points (key benefits). */
  details?: string[];
  /** Numbered patient-journey steps for the detail page. */
  whatWeWillDo?: ServiceJourneyStep[];
  /** Session logistics shown as two stat cards. */
  sessionInfo?: ServiceSessionInfo;
  /** Per-technique FAQs. Falls back to global FAQ_ITEMS. */
  faqs?: ServiceFaq[];
}
