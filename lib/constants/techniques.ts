import { ASSETS } from "@/lib/assets";
import type { Technique } from "@/lib/types";

const COMMON_SESSION = {
  duration: "35-45 minutes",
  typicalCourse: "Depends on your condition",
} as const;

/**
 * 8 physiotherapy techniques offered at Body Mechanic.
 * Copy is patient-friendly, no clinical acronyms in visible headings.
 */
export const TECHNIQUES: Technique[] = [
  {
    id: "cupping",
    name: "Dynamic / Dry Cupping",
    description: "Suction-based treatment that eases tight muscles and improves circulation.",
    icon: "circle-dot",
    image: ASSETS.techniques.cupping,
    overview:
      "Small suction cups are placed on the skin to lift tight tissue and get blood flowing to sore areas. Dynamic cupping adds gentle sliding for a deeper release in stubborn muscle knots.",
    details: [
      "Eases tight, sore muscles",
      "Helps recovery after training or long desk days",
      "Works well combined with hands-on treatment",
      "Marks fade naturally within a few days",
    ],
    whatWeWillDo: [
      {
        step: 1,
        title: "Quick Check-Up",
        description:
          "We look at the area causing you trouble and confirm cupping is a good fit for you.",
      },
      {
        step: 2,
        title: "Explain The Treatment",
        description:
          "We tell you exactly what it will feel like and answer any questions before we start.",
      },
      {
        step: 3,
        title: "Treatment",
        description:
          "Cups are placed for a few minutes at a time, most people find it relaxing, not painful.",
      },
      {
        step: 4,
        title: "Simple Aftercare",
        description:
          "We give you gentle stretches to keep the area moving well between sessions.",
      },
    ],
    sessionInfo: COMMON_SESSION,
    faqs: [
      {
        question: "Does it hurt?",
        answer:
          "Most people feel a firm pulling sensation, not pain. We adjust the suction to your comfort.",
      },
      {
        question: "Why do the marks appear?",
        answer:
          "The circular marks are normal, painless, and simply show where blood flow was drawn to the area. They fade within a few days.",
      },
      {
        question: "How often should I have it done?",
        answer:
          "Usually once a week alongside your exercise plan, but we tailor this to your specific case.",
      },
    ],
  },
  {
    id: "manual-therapy",
    name: "Manual Therapy",
    description: "Hands-on treatment for stiff joints and tight muscles.",
    icon: "hand",
    image: ASSETS.techniques.manualTherapy,
    overview:
      "Skilled hands-on techniques to loosen stiff joints, release tight muscles, and get comfortable movement back, the core of good physiotherapy.",
    details: [
      "Loosens stiff joints",
      "Releases tight muscles",
      "Reduces pain and improves movement",
      "Chosen based on your specific check-up",
    ],
    whatWeWillDo: [
      {
        step: 1,
        title: "Find The Problem",
        description:
          "We check exactly which joint or muscle is causing your symptoms, no random treatment.",
      },
      {
        step: 2,
        title: "Explain What We'll Do",
        description:
          "We tell you which technique we'll use, why, and what it will feel like.",
      },
      {
        step: 3,
        title: "Hands-On Treatment",
        description:
          "Gentle, precise work on the exact area, we check in throughout to make sure you're comfortable.",
      },
      {
        step: 4,
        title: "Exercise To Keep It",
        description:
          "Every session ends with a simple exercise so the change we made lasts.",
      },
    ],
    sessionInfo: COMMON_SESSION,
    faqs: [
      {
        question: "Is manual therapy safe?",
        answer:
          "Yes, when done by a trained physiotherapist. We choose techniques based on what's safe for your body.",
      },
      {
        question: "Will I be sore after?",
        answer:
          "Some people feel mild soreness for a day, similar to after exercise. This is normal and settles quickly.",
      },
      {
        question: "How is this different from massage?",
        answer:
          "Manual therapy is prescribed after a proper check-up and targets a specific problem, massage is more general relaxation.",
      },
    ],
  },
  {
    id: "electrotherapy",
    name: "Electrotherapy",
    description: "Small electrical pulses to ease pain and support muscle recovery.",
    icon: "zap",
    image: ASSETS.techniques.electrotherapy,
    overview:
      "Gentle electrical stimulation, like TENS, that helps ease pain and switch muscles back on after injury. Always prescribed based on your specific problem.",
    details: [
      "Eases pain in the short term",
      "Helps switch weak muscles back on",
      "Used alongside hands-on care and exercise",
      "Settings adjusted every session",
    ],
    whatWeWillDo: [
      {
        step: 1,
        title: "Assess If It's Right For You",
        description:
          "We check whether electrical treatment is the right choice for your specific problem.",
      },
      {
        step: 2,
        title: "Comfortable Setup",
        description:
          "Small pads are placed on your skin, the current starts low and we adjust to your comfort.",
      },
      {
        step: 3,
        title: "Treatment Session",
        description:
          "Most people describe it as a mild buzzing or tapping, never painful.",
      },
      {
        step: 4,
        title: "Combine With Exercise",
        description:
          "We pair it with the right exercises so the improvement lasts beyond the session.",
      },
    ],
    sessionInfo: COMMON_SESSION,
    faqs: [
      {
        question: "Does it hurt?",
        answer:
          "No, it should feel like a gentle buzzing. If anything feels uncomfortable, we turn it down.",
      },
      {
        question: "Is it safe?",
        answer:
          "Yes, when applied by a trained physiotherapist. We check for anything that would make it unsafe before we start.",
      },
      {
        question: "How long before I feel better?",
        answer:
          "Some people feel relief after one session, but it usually works best as part of a wider treatment plan.",
      },
    ],
  },
  {
    id: "kinesio-taping",
    name: "Kinesio Taping",
    description: "Stretchy tape that supports injured areas without restricting movement.",
    icon: "bandage",
    image: ASSETS.techniques.kinesioTaping,
    overview:
      "Elastic tape gives your muscles and joints a bit of support while still letting them move naturally, useful between clinic visits.",
    details: [
      "Supports injured or tired areas",
      "Doesn't limit your normal movement",
      "Water-resistant, can be worn for several days",
      "Comfortable enough to wear during sport",
    ],
    whatWeWillDo: [
      {
        step: 1,
        title: "Assess The Area",
        description:
          "We check the area that needs support and decide the best taping pattern for it.",
      },
      {
        step: 2,
        title: "Clean & Prep",
        description:
          "We clean the skin so the tape sticks well and stays on for several days.",
      },
      {
        step: 3,
        title: "Apply The Tape",
        description:
          "The tape is applied in a specific pattern that gives your muscles the right kind of support.",
      },
      {
        step: 4,
        title: "Aftercare Advice",
        description:
          "We show you how to care for the tape and when to remove or replace it.",
      },
    ],
    sessionInfo: COMMON_SESSION,
    faqs: [
      {
        question: "Can I shower with it on?",
        answer:
          "Yes, the tape is water-resistant. Pat it dry after showering; don't rub.",
      },
      {
        question: "How long does it stay on?",
        answer:
          "Usually 3-5 days depending on the area and your activity level.",
      },
      {
        question: "Will it irritate my skin?",
        answer:
          "Rarely. If you have sensitive skin, we can test a small strip first.",
      },
    ],
  },
  {
    id: "muscle-energy",
    name: "Muscle Energy Techniques",
    description: "Your own gentle muscle contractions used to improve movement and alignment.",
    icon: "activity",
    image: ASSETS.techniques.muscleEnergy,
    overview:
      "You gently push against controlled resistance from your therapist, and that helps loosen stiff joints and improve alignment, especially helpful for neck, back, and pelvic issues.",
    details: [
      "Gentle and patient-active",
      "Improves movement and body symmetry",
      "Often used for neck, back, and hip complaints",
      "Feels controlled, never forced",
    ],
    whatWeWillDo: [
      {
        step: 1,
        title: "Find The Restriction",
        description:
          "We check exactly which joint or muscle isn't moving well.",
      },
      {
        step: 2,
        title: "Position You Comfortably",
        description:
          "We position the joint gently at the edge of its current movement.",
      },
      {
        step: 3,
        title: "You Push, We Resist",
        description:
          "You gently push against our resistance for a few seconds, this signals your muscles to relax and lengthen.",
      },
      {
        step: 4,
        title: "Retest & Repeat",
        description:
          "We recheck the movement and repeat as needed until we see clear improvement.",
      },
    ],
    sessionInfo: COMMON_SESSION,
    faqs: [
      {
        question: "Does it hurt?",
        answer:
          "No, the pushing effort is gentle and controlled. It shouldn't cause any pain.",
      },
      {
        question: "What conditions is it good for?",
        answer:
          "Neck stiffness, back pain, and hip/pelvic imbalances tend to respond well.",
      },
      {
        question: "How soon will I feel the change?",
        answer:
          "Most people feel more movement right after the session. Lasting change comes with follow-up exercises.",
      },
    ],
  },
  {
    id: "dry-needling",
    name: "Dry Needling",
    description: "Very thin needles used to release tight muscle knots and reduce pain.",
    icon: "target",
    image: ASSETS.techniques.dryNeedling,
    overview:
      "Fine, sterile needles are placed into tight muscle knots (called trigger points) to release the tension and ease the pain that spreads from them. Not the same as acupuncture.",
    details: [
      "Effective for long-standing muscle tightness",
      "Done by trained physiotherapists",
      "Works well combined with exercise",
      "Uses very thin, single-use needles",
    ],
    whatWeWillDo: [
      {
        step: 1,
        title: "Find The Trigger Points",
        description:
          "We identify the exact muscle knots causing your pain or restricting movement.",
      },
      {
        step: 2,
        title: "Explain Everything",
        description:
          "We tell you what to expect and get your consent before we start.",
      },
      {
        step: 3,
        title: "Needle Placement",
        description:
          "Thin needles are placed briefly into the tight spots, you may feel a small twitch, which is a good sign.",
      },
      {
        step: 4,
        title: "Movement Right After",
        description:
          "We finish with gentle movement so the released muscle relearns how to work well.",
      },
    ],
    sessionInfo: COMMON_SESSION,
    faqs: [
      {
        question: "Does it hurt?",
        answer:
          "The insertion is usually painless. You may feel a brief twitch or dull ache, that's the trigger point releasing.",
      },
      {
        question: "Is it safe?",
        answer:
          "Yes, needles are sterile, single-use, and only placed by certified therapists.",
      },
      {
        question: "How often do I need it?",
        answer:
          "Usually 1 session per week, with 4-8 sessions typically enough for most problems.",
      },
    ],
  },
  {
    id: "ultrasonic",
    name: "Ultrasonic Therapy",
    description: "Deep sound waves that help heal soft tissues and reduce inflammation.",
    icon: "waves",
    image: ASSETS.techniques.ultrasonic,
    overview:
      "A small handheld device sends sound waves into deeper tissues to boost blood flow and support healing in tendon and muscle injuries. You won't feel much, just gentle warmth.",
    details: [
      "Helps tendon and ligament injuries heal",
      "Painless, you barely feel a thing",
      "Non-invasive and quick per session",
      "Used only when it's the right fit",
    ],
    whatWeWillDo: [
      {
        step: 1,
        title: "Check It's Right For You",
        description:
          "We confirm ultrasound will help the specific injury or area you're dealing with.",
      },
      {
        step: 2,
        title: "Apply Gel",
        description:
          "A small amount of water-based gel is applied to help the device glide smoothly.",
      },
      {
        step: 3,
        title: "Treatment",
        description:
          "The device is moved gently over the area for a few minutes, you'll feel mild warmth at most.",
      },
      {
        step: 4,
        title: "Pair With Exercise",
        description:
          "We follow up with the right exercises so the healing you're getting actually sticks.",
      },
    ],
    sessionInfo: COMMON_SESSION,
    faqs: [
      {
        question: "Will I feel anything?",
        answer:
          "Most people feel only a slight warmth. It shouldn't be uncomfortable.",
      },
      {
        question: "Is it safe?",
        answer:
          "Yes, when used correctly. We check for anything (like an active infection or pacemaker) that would make it unsafe.",
      },
      {
        question: "How many sessions do I need?",
        answer:
          "Usually 4-8 sessions, but it depends on the injury and how your body responds.",
      },
    ],
  },
  {
    id: "iastm",
    name: "IASTM Tools",
    description: "Special hand tools that break down scar tissue and free up movement.",
    icon: "wrench",
    image: ASSETS.techniques.iastm,
    overview:
      "Smooth stainless-steel tools are gently glided over tight tissue and scar bands to break up restrictions and help the tissue layers slide over each other again, the way they should.",
    details: [
      "Breaks down scar tissue and stiff bands",
      "Common in sports and after-surgery recovery",
      "Paired with stretching and strengthening",
      "You may see mild redness, this is normal",
    ],
    whatWeWillDo: [
      {
        step: 1,
        title: "Assess The Area",
        description:
          "We find the exact spots where tissue isn't moving well, often around old injuries or scars.",
      },
      {
        step: 2,
        title: "Apply A Little Cream",
        description:
          "A small amount of cream helps the tools glide smoothly over your skin.",
      },
      {
        step: 3,
        title: "Guided Tool Work",
        description:
          "We glide the tools over the tight tissue, you may feel a firm scraping sensation, which is normal.",
      },
      {
        step: 4,
        title: "Movement & Exercise",
        description:
          "Right after, we do exercises so the freed tissue learns to move well.",
      },
    ],
    sessionInfo: COMMON_SESSION,
    faqs: [
      {
        question: "Does it leave marks?",
        answer:
          "You may see mild pink redness that fades within a day or two. This is normal and painless.",
      },
      {
        question: "Does it hurt?",
        answer:
          "You feel a firm scraping sensation. We match the pressure to your comfort level.",
      },
      {
        question: "How many sessions do I need?",
        answer:
          "Usually 4-6 sessions, alongside your exercise plan.",
      },
    ],
  },
];

export function techniqueHasDetail(technique: Technique): boolean {
  return Boolean(
    technique.image ||
      technique.overview ||
      (technique.details && technique.details.length > 0)
  );
}
