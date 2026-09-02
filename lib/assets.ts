/** Centralized public asset paths - one unique image per slot. */
export const ASSETS = {
  logo: "/images/logo/logo.png",
  ogImage: "/images/og/og-image.png",
  favicon: "/images/logo/favicon.ico",
  hero: {
    main: "/images/hero/hero-header.png",
    /** Previous stock photo - kept for reference */
    legacy: "/images/hero/hero-main.jpg",
  },
  clinic: {
    interior: "/images/clinic/clinic-interior.jpg",
    welcome: "/images/clinic/welcome.jpg",
    /** About page Our Story hero — Dr. Saima clinic portrait */
    aboutHero: "/images/clinic/dr-saima-about-hero.jpg",
  },
  contact: {
    clinicPhoto: "/images/contact/clinic-photo.jpg",
  },
  services: {
    manualTherapy: "/images/services/manual-therapy.jpg",
    dryNeedling: "/images/services/dry-needling.jpg",
    sportsInjury: "/images/services/sports-injury.jpg",
    exerciseRehab: "/images/services/exercise-rehab.jpg",
    posturalAssessment: "/images/services/postural-assessment.jpg",
    homeVisits: "/images/services/home-visits.jpg",
    allAges: "/images/services/all-ages.jpg",
    chronicPain: "/images/services/chronic-pain.jpg",
    neurological: "/images/services/neurological.png",
    strengthMobility: "/images/services/strength-mobility.jpg",
    postureWork: "/images/services/posture-work.png",
    sportsPhysio: "/images/services/sports-physio.jpg",
  },
  conditions: {
    backPain: "/images/conditions/back-pain.jpg",
    kneePain: "/images/conditions/knee-pain.jpg",
    shoulderPain: "/images/conditions/shoulder-pain.jpg",
    sportsInjury: "/images/conditions/sports-injury.jpg",
    chronicPain: "/images/conditions/chronic-pain.jpg",
    neurological: "/images/conditions/neurological.jpg",
    postSurgery: "/images/conditions/post-surgery.jpg",
    posturePain: "/images/conditions/posture-pain.jpg",
  },
  team: {
    saima: "/images/team/dr-saima-naseem.jpeg",
    sania: "/images/team/dr-sania-tariq.jpg",
    ayeza: "/images/team/dr-ayeza-gillani.jpg",
    durre: "/images/team/dr-durre-shehwar.jpg",
    aroosha: "/images/team/dr-aroosha.jpg",
    /** Legacy path - file may be unused */
    samia: "/images/team/dr-samia-hijab.jpg",
  },
  /** Optional technique modal images - add files under public/images/techniques/ */
  techniques: {
    cupping: "/images/techniques/cupping.jpg",
    manualTherapy: "/images/services/manual-therapy.jpg",
    electrotherapy: "/images/techniques/electrotherapy.png",
    kinesioTaping: "/images/techniques/kinesio-taping.png",
    dryNeedling: "/images/techniques/dry-needling.png",
    ultrasonic: "/images/ultrasound.jpeg",
    iastm: "/images/techniques/iastm.png",
    muscleEnergy: "/images/techniques/muscle-energy.jpg",
  },
} as const;

