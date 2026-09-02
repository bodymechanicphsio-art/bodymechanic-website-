import type { Stat, TeamMember, Testimonial, HowItWorksStep } from "@/lib/types";
import { ASSETS } from "@/lib/assets";

export const STATS: Stat[] = [
  { value: 6, suffix: "", label: "Core Services" },
  { value: 8, suffix: "+", label: "Treatment Techniques" },
  { value: 5, suffix: "+", label: "Expert Therapists" },
  { value: 6, suffix: "", label: "Days Open Weekly" },
];

export const HERO_TAGS = [
  "Physiotherapy",
  "Rehabilitation",
  "Wellness",
  "Sports Physio",
] as const;

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Saima Naseem PT",
    role: "CEO & Consultant Physiotherapist",
    bio: "Sports Physiotherapist · Lead consultant for assessment, treatment planning, and sports injury rehabilitation.",
    credentials: ["DPT, RIU", "MS-SPT, RIU"],
    initials: "SN",
    gradient: "from-pink-600 to-brand-pink",
    image: ASSETS.team.saima,
    featured: true,
  },
  {
    name: "Dr. Sania Tariq PT",
    role: "Assistant Physiotherapist",
    bio: "Doctor of Physiotherapy (DPT)",
    credentials: ["DPT"],
    initials: "ST",
    gradient: "from-purple-600 to-pink-500",
    image: ASSETS.team.sania,
  },
  {
    name: "Dr. Ayeza Gillani PT",
    role: "Assistant Physiotherapist",
    bio: "Doctor of Physiotherapy (DPT)",
    credentials: ["DPT"],
    initials: "AG",
    gradient: "from-rose-500 to-pink-600",
    image: ASSETS.team.ayeza,
  },
  {
    name: "Dr. Durre Shehwar PT",
    role: "Assistant Physiotherapist",
    bio: "Doctor of Physiotherapy (DPT)",
    credentials: ["DPT"],
    initials: "DS",
    gradient: "from-fuchsia-600 to-pink-500",
    image: ASSETS.team.durre,
  },
  {
    name: "Dr. Aroosha PT",
    role: "Assistant Physiotherapist",
    bio: "Doctor of Physiotherapy (DPT)",
    credentials: ["DPT"],
    initials: "AR",
    gradient: "from-pink-500 to-rose-500",
    image: ASSETS.team.aroosha,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ayeza Gillani",
    rating: 5,
    text: "Treatment at Body Mechanic Physiotherapy Clinic was top-notch! Dr. Saima is a true professional, knowledgeable, empathetic, and effective. She helped me get back on track with my ankle pain. Highly recommended!",
    condition: "Ankle Pain",
  },
  {
    name: "Saher Khan",
    rating: 5,
    text: "I consulted Dr. Saima Naseem for a severe neck spasm and chronic back pain. Ma sha Allah she is an incredibly knowledgeable, professional, and caring doctor. Before starting treatment, she took a complete history and properly diagnosed the issue.",
    condition: "Neck Spasm & Back Pain",
  },
  {
    name: "Sania Tariq",
    rating: 5,
    text: "Dr. Saima provided excellent care and tailored treatment for my back pain. Her expertise and friendly approach made all the difference! Highly recommend for anyone seeking relief and recovery.",
    condition: "Back Pain",
  },
  {
    name: "Ali Raza",
    rating: 5,
    text: "I'm so grateful to have found Dr. Saima Naseem. After struggling with lower back pain for months, their expert care and personalized treatment plan made a huge difference. The therapist took the time to understand my specific issues.",
    condition: "Lower Back Pain",
  },
  {
    name: "Waleed Asif",
    rating: 5,
    text: "I visited Body Mechanic in extreme pain but Dr. Saima is so competent in her field that I left the pain at her clinic when I went home. Her way of treatment is very comfortable and the patient feels relaxed during treatment. Excellent physiotherapy clinic.",
    condition: "Pain Relief",
  },
  {
    name: "Tina Aftab",
    rating: 5,
    text: "I was suffering from multiple issues, severe muscle spasm, lower two discs displacement, and more. I tried many chiropractors and physiotherapists but had no relief. After sessions with Dr. Saima, I finally found real improvement.",
    condition: "Disc & Muscle Issues",
  },
  {
    name: "Faria Waqar",
    rating: 5,
    text: "We had a very good experience with Dr. Saima. She is very professional. We feel very energetic after taking fitness classes with her. Highly recommended!",
    condition: "Fitness & Wellness",
  },
  {
    name: "Rameen Tafukhar",
    rating: 5,
    text: "Dr. Saima is highly professional and cooperative. I feel much more energetic and experience better living by taking the fitness classes. Highly recommended!",
    condition: "Fitness Classes",
  },
  {
    name: "Iram Khan",
    rating: 5,
    text: "Very experienced doctors and good physiotherapists. Clean and hygienic environment with a professional ambience. Must visit!",
    condition: "Clinic Experience",
  },
  {
    name: "Amjad Baig",
    rating: 5,
    text: "Really a pain relief centre. Thumbs up for you, Dr. Saima Naseem.",
    condition: "Pain Relief",
  },
  {
    name: "Imran Anwar",
    rating: 5,
    text: "Very competent physiotherapist. Relaxing ambience and effective treatment.",
    condition: "Physiotherapy Care",
  },
  {
    name: "Munaza Jamshaid",
    rating: 5,
    text: "Excellent service.",
    condition: "Patient Care",
  },
];

export const HOW_IT_WORKS: HowItWorksStep[] = [
  {
    step: 1,
    title: "Make an Appointment",
    description:
      "Book online or on WhatsApp. Share your concerns and we schedule a full assessment at a time that suits you.",
    icon: "clipboard",
  },
  {
    step: 2,
    title: "Get Consultation",
    description:
      "We assess your movement, pain, and goals in clinic, then explain findings clearly before treatment begins.",
    icon: "map",
  },
  {
    step: 3,
    title: "Enjoy Our Therapy",
    description:
      "Follow your personalised plan with hands-on care and rehab guidance until you move better and feel stronger.",
    icon: "pulse",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Do I need a doctor's referral to visit?",
    answer:
      "No, you can book with us directly. A physiotherapist is trained to check you, find the cause of your pain, and start treatment on the same visit.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "It depends on your problem and how long you've had it. After your first visit we give you a clear plan with an estimated number of sessions, no long, open-ended commitment.",
  },
  {
    question: "How soon can I get an appointment?",
    answer:
      "Most patients get a slot the same week they book on WhatsApp. Message 0310-4971086 and we'll confirm a time that suits you within an hour of your enquiry.",
  },
  {
    question: "What should I bring on my first visit?",
    answer:
      "Any past medical reports, X-rays, or scans if you have them, plus comfortable clothes you can move in. Nothing else needed, we'll take care of the rest.",
  },
] as const;

/** Homepage FAQ block, general first-visit questions. */
export const HOME_FAQ_ITEMS = [
  {
    question: "What does a physiotherapist actually do?",
    answer:
      "A physiotherapist finds and treats the real cause of pain, stiffness, or weakness, using hands-on treatment plus exercises. We don't just settle the pain, we fix the reason it's there so it stops coming back.",
  },
  {
    question: "How do I know if I need physio?",
    answer:
      "If pain, stiffness, or weakness has lasted more than a week, or keeps coming back, it's worth a check-up. Common reasons to visit: back pain, neck pain, sports injuries, recovery after surgery, or trouble with daily movement.",
  },
  {
    question: "Do I need a doctor's referral to visit?",
    answer:
      "No. You can book straight with us on WhatsApp or by phone. We assess you on your first visit and start treatment the same day if you're ready.",
  },
  {
    question: "Where in Lahore is your clinic located?",
    answer:
      "We're at 487, J Block, LDA Avenue-1, Lahore. Easy to reach and with parking nearby. Call 0310-4971086 if you need directions on the day of your visit.",
  },
] as const;

/** About page FAQ block. */
export const ABOUT_FAQ_ITEMS = [
  {
    question: "What makes Body Mechanic different from other Lahore clinics?",
    answer:
      "We focus on finding the real cause of your problem, not just easing the pain for a day. Every plan is built around your body and your goals, and we take the time to explain everything so you know exactly why we're doing what we're doing.",
  },
  {
    question: "Are treatments safe for pregnant women and elderly patients?",
    answer:
      "Yes. We tailor every session to your body, pregnancy, older age, or any medical condition all get their own careful approach. We check your history first and choose only techniques that are safe for you.",
  },
  {
    question: "Who will actually treat me, Dr. Saima or another therapist?",
    answer:
      "Dr. Saima Naseem leads every case and sees new patients personally. Depending on schedule and your treatment plan, some sessions may be delivered by our qualified assistant physiotherapists, all DPT-certified and trained by Dr. Saima.",
  },
] as const;

/** Booking page FAQ block. */
export const BOOK_FAQ_ITEMS = [
  {
    question: "How do I book an appointment?",
    answer:
      "Fastest way is WhatsApp, message us on 0310-4971086 and we'll confirm a time within an hour. You can also fill the form on this page or call the clinic during opening hours.",
  },
  {
    question: "What happens on my first visit?",
    answer:
      "Your first session is a full check-up (35-45 minutes). We listen to your problem, examine you, explain what we found, and start treatment the same day if you're ready. You leave with a clear plan for what happens next.",
  },
  {
    question: "What are your fees?",
    answer:
      "Fees depend on the type of session. Message us on WhatsApp (0310-4971086) for current pricing, we'll give you a clear answer before you book, no surprises later.",
  },
  {
    question: "Can I reschedule if something comes up?",
    answer:
      "Yes, just message us on WhatsApp as early as you can and we'll move your slot. No rescheduling fee if you tell us at least a few hours before.",
  },
] as const;

export const WHY_CHOOSE_FEATURES = [
  {
    icon: "shield" as const,
    title: "Trusted Clinic",
    description: "Evidence-based care with clear assessment, honest guidance, and results you can feel.",
  },
  {
    icon: "therapist" as const,
    title: "Expert Therapists",
    description: "DPT-qualified physiotherapists specialising in sports injury, pain, and rehab.",
  },
] as const;

/** @deprecated use WHY_CHOOSE_FEATURES */
export const WHY_CHOOSE_HIGHLIGHTS = [
  { icon: "users" as const, label: "Physiotherapy for All Ages" },
  { icon: "stethoscope" as const, label: "Expert Clinical Assessment" },
  { icon: "award" as const, label: "Personalized Treatment Plans" },
] as const;

export const WHY_CHOOSE_TRUST = [
  "Certified Sports Physiotherapist",
  "Advanced Pain Management Techniques",
  "Evidence-Based Treatment Plans",
] as const;
