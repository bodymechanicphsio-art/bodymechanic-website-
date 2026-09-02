/**
 * About-page data, journey timeline, athlete partnerships, workshops,
 * and recognition/awards. Sourced from Dr. Saima Naseem's history PDF
 * ("Our History" 2017–present).
 *
 * Image paths point at files under /public/images/journey/, /athletes/,
 * /workshops/, and /awards/. TeamMemberCard already renders photos when
 * a team member has an `image` set, see lib/constants/content.ts.
 */

export interface JourneyImage {
  src: string;
  alt: string;
}

export interface JourneyMilestone {
  /** Displayed year range, e.g. "2017–2019" or "2023–Present". */
  years: string;
  title: string;
  description: string;
  /** 1–3 photos shown as a collage on the timeline card (mirrors the history PDF). */
  images: JourneyImage[];
}

export interface AthletePartnership {
  name: string;
  caption: string;
  image: string;
  imageAlt: string;
}

export interface WorkshopHighlight {
  caption: string;
  image: string;
  imageAlt: string;
}

export interface RecognitionAward {
  title: string;
  issuer: string;
  year?: string;
  image?: string;
  imageAlt?: string;
}

/** Founder's career journey, rendered as a vertical timeline on /about. */
export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    years: "2017–2019",
    title: "MS in Sports Physiotherapy · Riphah International University",
    description:
      "Completed MS in Sports Physiotherapy while building hands-on experience through a house job, private clinical practice, and holistic home physiotherapy services.",
    images: [
      {
        src: "/images/journey/2017-hands-on.png",
        alt: "Dr. Saima Naseem using IASTM tools to release cervical fascia during hands-on clinical practice",
      },
      {
        src: "/images/journey/2017-graduation-family.png",
        alt: "Dr. Saima Naseem with family at her Riphah International University convocation",
      },
    ],
  },
  {
    years: "2019–2020",
    title: "Physiotherapist · Tennis Federation of Pakistan",
    description:
      "Delivered sports injury management, rehabilitation, and athlete care for the Tennis Federation. Honoured with an Award of Honour for outstanding contribution.",
    images: [
      {
        src: "/images/journey/2019-tennis-medal.jpg",
        alt: "Dr. Saima Naseem with a tennis player at the Serena Hotel national ranking championship",
      },
      {
        src: "/images/journey/2019-tennis-award.jpg",
        alt: "Dr. Saima Naseem with a champion at an ITF World Tennis Tour J5 Islamabad event",
      },
      {
        src: "/images/journey/2019-tennis-ceremony.jpg",
        alt: "ITF World Tennis Tour J5 Islamabad prize-giving ceremony on court",
      },
    ],
  },
  {
    years: "2019–2023",
    title: "Physiotherapist · Pakistan Cricket Board (PCB)",
    description:
      "Provided sports rehabilitation and athlete care for the PCB. Also served as Clinic In-Charge at Physio Fitness, leading day-to-day clinical management.",
    images: [
      {
        src: "/images/journey/2019-psl.jpg",
        alt: "Dr. Saima Naseem providing match-day physiotherapy support at HBL PSL",
      },
      {
        src: "/images/journey/2019-pcb-cricket.jpg",
        alt: "Dr. Saima Naseem with a cricketer at a professional cricket ground",
      },
      {
        src: "/images/journey/2019-cricket-team.jpg",
        alt: "Pakistan women's cricket team on the field",
      },
    ],
  },
  {
    years: "2021–Present",
    title: "Founded Body Mechanic Physiotherapy Clinic",
    description:
      "Opened her own clinic in Lahore, dedicated to quality patient care, and began mentoring aspiring physiotherapists through structured internship programmes.",
    images: [
      {
        src: "/images/journey/2021-clinic-founded.jpg",
        alt: "Dr. Saima Naseem at the founding of Body Mechanic Physiotherapy Clinic in Lahore",
      },
      {
        src: "/images/journey/2021-clinic-exterior.png",
        alt: "Body Mechanic Physiotherapy Clinic building exterior in Lahore",
      },
      {
        src: "/images/journey/2021-internship.jpg",
        alt: "Dr. Saima Naseem with interns at a Body Mechanic clinical training certificate distribution",
      },
    ],
  },
  {
    years: "2023–Present",
    title: "Professional Workshops & Community Training",
    description:
      "Actively runs professional workshops and training sessions across Lahore alongside her clinical work, advancing physiotherapy education and skill development.",
    images: [
      {
        src: "/images/journey/2023-podium.jpg",
        alt: "Dr. Saima Naseem speaking at the MIS Institute, Islamabad",
      },
      {
        src: "/images/journey/2023-workshops.jpg",
        alt: "Dr. Saima Naseem demonstrating a hands-on cervical technique at a workshop",
      },
      {
        src: "/images/journey/2023-laps.jpg",
        alt: "Dr. Saima Naseem receiving the LAPS Award from the Lahore Academy of Physical Sciences",
      },
    ],
  },
];

/** Elite sports organisations Dr. Saima has worked with. */
export const ATHLETE_PARTNERSHIPS: AthletePartnership[] = [
  {
    name: "Pakistan Cricket Board",
    caption: "Sports rehabilitation and athlete care · 2019–2023",
    image: "/images/athletes/pcb-cricket.jpg",
    imageAlt: "Pakistan Cricket Board women's team on the field",
  },
  {
    name: "PSL 2023",
    caption: "Match-day physiotherapy support · Pakistan Super League",
    image: "/images/athletes/psl-2023.jpg",
    imageAlt: "PSL 2023 match-day pitchside physiotherapy support",
  },
  {
    name: "Tennis Federation of Pakistan",
    caption: "Sports injury management · 2019–2020",
    image: "/images/athletes/tennis-federation.jpg",
    imageAlt:
      "Dr. Saima Naseem with a Tennis Federation of Pakistan athlete at Serena Hotels courts",
  },
  {
    name: "ITF World Tennis Tour J5 Islamabad",
    caption: "Championship physiotherapy support · Tayyar Abbas Memorial 2020",
    image: "/images/athletes/itf-world-tennis.jpg",
    imageAlt:
      "Dr. Saima Naseem with an ITF World Tennis Tour J5 Islamabad champion, 2020",
  },
];

/** Community education and speaking engagements. */
export const WORKSHOPS: WorkshopHighlight[] = [
  {
    caption: "Speaking at the MIS Institute, Islamabad",
    image: "/images/workshops/podium-speaking.jpg",
    imageAlt:
      "Dr. Saima Naseem speaking at a podium during a professional physiotherapy conference",
  },
  {
    caption: "Hands-on cervical technique demo, practical training session",
    image: "/images/workshops/hands-on-demo.jpg",
    imageAlt:
      "Dr. Saima Naseem demonstrating a cervical hands-on physiotherapy technique on a workshop attendee",
  },
  {
    caption: "Receiving a shield of appreciation from MIS Institute",
    image: "/images/workshops/award-shield.jpg",
    imageAlt:
      "Dr. Saima Naseem receiving a shield of appreciation at the MIS Institute after a workshop",
  },
];

/** Formal recognitions. Image is optional, text badge renders when omitted. */
export const RECOGNITION_AWARDS: RecognitionAward[] = [
  {
    title: "Award of Honour",
    issuer: "Tennis Federation of Pakistan",
    year: "2020",
    image: "/images/awards/tennis-award-of-honour.jpg",
    imageAlt:
      "Award of Honour from the Tennis Federation of Pakistan presented to Dr. Saima Naseem",
  },
  {
    title: "LAPS Award",
    issuer: "Lahore Academy of Physical Sciences",
    year: "2023",
    image: "/images/awards/laps-award.jpg",
    imageAlt: "LAPS award presented to Dr. Saima Naseem",
  },
  {
    title: "Shield of Appreciation",
    issuer: "MIS Institute",
    year: "2024",
    image: "/images/awards/mis-shield.jpg",
    imageAlt:
      "Shield of appreciation from MIS Institute presented to Dr. Saima Naseem",
  },
];
