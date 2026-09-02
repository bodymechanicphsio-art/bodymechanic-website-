import { ASSETS } from "@/lib/assets";

export interface Condition {
  id: string;
  title: string;
  description: string;
  image: string;
}

/** Conditions shown on home page grid - links to services page. */
export const CONDITIONS: Condition[] = [
  {
    id: "back-pain",
    title: "Back & Neck Pain",
    description: "Disc issues, muscle strain, posture problems and sciatica relief.",
    image: ASSETS.conditions.backPain,
  },
  {
    id: "knee-pain",
    title: "Knee Pain",
    description: "Arthritis, ligament strain, and post-injury knee rehabilitation.",
    image: ASSETS.conditions.kneePain,
  },
  {
    id: "shoulder-pain",
    title: "Shoulder Pain",
    description: "Frozen shoulder, rotator cuff issues, and overhead strain recovery.",
    image: ASSETS.conditions.shoulderPain,
  },
  {
    id: "sports-injury",
    title: "Sports Injury",
    description: "Return-to-play rehab for athletes at every level.",
    image: ASSETS.conditions.sportsInjury,
  },
  {
    id: "chronic-pain",
    title: "Chronic Pain",
    description: "Long-term pain management through evidence-based care.",
    image: ASSETS.conditions.chronicPain,
  },
  {
    id: "neurological",
    title: "Neurological Rehab",
    description: "Stroke, spinal injury, and neurological recovery support.",
    image: ASSETS.conditions.neurological,
  },
  {
    id: "post-surgery",
    title: "Post-Surgery Recovery",
    description: "Structured rehab after orthopaedic and surgical procedures.",
    image: ASSETS.conditions.postSurgery,
  },
  {
    id: "posture-pain",
    title: "Posture & Desk Pain",
    description: "Work-related strain, ergonomic advice, and corrective exercises.",
    image: ASSETS.conditions.posturePain,
  },
];
