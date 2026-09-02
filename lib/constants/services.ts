import type { Service } from "@/lib/types";
import { ASSETS } from "@/lib/assets";

const UNSPLASH = (id: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

/**
 * Full service catalog, 6 core services.
 * Copy is written for patients, not clinicians: plain language, no jargon.
 * Overview format: short intro paragraph, then "We help with:" bullet block.
 * `whoItsFor` intentionally omitted across the catalogue.
 */
export const SERVICES: Service[] = [
  {
    id: "sports-rehabilitation",
    title: "Sports Rehabilitation",
    description:
      "Get back to your sport safely and confidently, from weekend running to competitive play.",
    image: ASSETS.services.sportsPhysio,
    details: [
      "ACL & ligament recovery",
      "Muscle strain rehab",
      "Return-to-sport check",
      "Stay-strong maintenance",
    ],
    overview:
      "Get back to your sport safely, whether you're recovering from a serious injury like ACL surgery or an old ankle sprain that just won't heal right. We take you step by step so you return stronger, not just pain-free.\n\nWe help with:\n- Recovery after knee, ankle, or shoulder injuries\n- Getting your strength back to where it was before the injury\n- Testing your body before you return to play, so you don't get injured again\n- Building the routine that keeps you injury-free long-term",
    techniques: [
      {
        name: "Progressive Strength Training",
        description:
          "We rebuild your strength step by step, adding a little more each week so your body can handle it without setbacks.",
      },
      {
        name: "Balance & Body Awareness Work",
        description:
          "After an injury your balance often takes a hit, we retrain it using simple drills so joints feel steady and confident again.",
      },
      {
        name: "Practice For Your Sport",
        description:
          "We rehearse the exact movements your sport asks of you, cutting, sprinting, throwing, so your first game back feels familiar.",
      },
      {
        name: "Strength Comparison Testing",
        description:
          "We measure the strength of your injured side against the healthy side. When they match up, you're ready to return.",
      },
      {
        name: "Hands-On Treatment",
        description:
          "Manual work on stiff joints and tight muscles to restore movement before we load them up with exercise.",
      },
    ],
    conditionsTreated: [
      "Recovery after ACL, MCL, or meniscus surgery",
      "Hamstring, thigh, and calf muscle strains",
      "Rotator cuff and shoulder injuries",
      "Tennis elbow and golfer's elbow",
      "Wrist and forearm pain from racket sports",
      "Ankle sprains that keep coming back",
      "Achilles tendon and knee tendon pain",
      "Runner's knee and outer-knee pain",
      "Shin splints and stress-reaction pain",
      "Groin strains",
      "Lower back pain from cricket, gym, or running",
      "Recovery after a concussion",
    ],
    whatToExpect: [
      {
        step: 1,
        title: "First Visit",
        description:
          "We listen to your injury story, understand your sport, and set the goals that matter to you.",
      },
      {
        step: 2,
        title: "Full Check-Up",
        description:
          "We test your movement, strength, and balance so we know exactly where you stand today.",
      },
      {
        step: 3,
        title: "Your Recovery Plan",
        description:
          "You get a clear, step-by-step plan, in-clinic sessions plus simple exercises to do at home.",
      },
      {
        step: 4,
        title: "Regular Progress Checks",
        description:
          "Every few weeks we re-test to see improvements and adjust the plan so nothing stalls.",
      },
      {
        step: 5,
        title: "Back To Your Sport",
        description:
          "Final tests to make sure you're ready, plus a simple routine to keep you strong and injury-free.",
      },
    ],
    sessionInfo: {
      duration: "35-45 minutes",
      typicalCourse: "Depends on injury severity",
    },
    faqs: [
      {
        question: "How soon after knee surgery can I start?",
        answer:
          "Most people start within the first two weeks after surgery, following your surgeon's guidance. We work closely with your surgical team.",
      },
      {
        question: "How do I know when I'm ready to play again?",
        answer:
          "We use simple tests, like comparing the strength and balance of your injured side to the healthy side, to make that call with real data, not guesswork.",
      },
      {
        question: "Can you speak to my coach or trainer?",
        answer:
          "Yes, with your permission we share your progress with your coach so your training plan matches your recovery.",
      },
    ],
  },
  {
    id: "pain-management",
    title: "Pain Management (Acute & Chronic)",
    description:
      "Real relief for new or long-standing pain, we treat the root cause, not just the symptoms.",
    image: ASSETS.services.chronicPain,
    details: [
      "New or recent injury pain",
      "Long-standing pain plans",
      "Trigger-point release",
      "Long-term relief tools",
    ],
    overview:
      "Pain that sticks around long after an injury has healed is common and treatable. We combine hands-on care, targeted needling, and clear explanations so you understand what's driving your pain and what you can do about it.\n\nWe help with:\n- Settling a fresh injury quickly so you can move again\n- Long-standing pain that hasn't responded to other treatments\n- Reducing how often you need pain medication\n- Simple daily habits you can use to keep flare-ups small",
    techniques: [
      {
        name: "Hands-On Treatment",
        description:
          "Gentle joint and muscle work to calm irritated areas and get comfortable movement back.",
      },
      {
        name: "Trigger-Point Dry Needling",
        description:
          "Very thin needles placed into tight muscle knots to release the tension and ease the pain that spreads from them.",
      },
      {
        name: "TENS & Muscle Stimulation",
        description:
          "Small electrical pulses that ease pain in the short term so you can move and exercise more comfortably.",
      },
      {
        name: "Understanding Your Pain",
        description:
          "We explain in plain language why pain lasts and what actually helps, this alone is proven to make long-standing pain better.",
      },
      {
        name: "Step-By-Step Movement Rebuild",
        description:
          "A gradual return to work, exercise, or daily tasks, going slow enough to avoid flare-ups but steady enough to see progress.",
      },
    ],
    conditionsTreated: [
      "Long-standing lower back pain",
      "Neck and shoulder pain",
      "Fibromyalgia support",
      "Pain that won't settle after an injury",
      "Sciatica and nerve-related pain",
      "Knee and hip arthritis pain",
      "Pain that continues after surgery",
      "Tension-type headaches",
    ],
    whatToExpect: [
      {
        step: 1,
        title: "First Visit",
        description:
          "We listen to your pain story, when it started, what makes it better or worse, what you've already tried.",
      },
      {
        step: 2,
        title: "Full Check-Up",
        description:
          "We test how you move and look at how pain is affecting your sleep, work, and daily life.",
      },
      {
        step: 3,
        title: "Your Pain Plan",
        description:
          "You get hands-on treatment plus a home routine matched to exactly what's causing your pain.",
      },
      {
        step: 4,
        title: "Learn To Manage It",
        description:
          "You leave with simple, practical strategies for flare-ups, real independence, not endless clinic visits.",
      },
    ],
    sessionInfo: {
      duration: "35-45 minutes",
      typicalCourse: "Depends on your condition",
    },
    faqs: [
      {
        question: "Will treatment hurt?",
        answer:
          "We match every session to how sore you already are. Some techniques feel briefly uncomfortable, but we never push into pain that lasts.",
      },
      {
        question: "Do you offer dry needling?",
        answer:
          "Yes, when it's the right fit for you. Our therapists are certified and will explain everything before you decide.",
      },
      {
        question: "How long until I feel better?",
        answer:
          "New pain often eases within a few sessions. Long-standing pain usually improves gradually over 6-12 weeks of consistent work.",
      },
    ],
  },
  {
    id: "neurological-rehabilitation",
    title: "Neurological Rehabilitation",
    description:
      "Recovery support after a stroke, spinal injury, or other nerve-related condition.",
    image: ASSETS.services.neurological,
    details: [
      "Stroke recovery",
      "Balance training",
      "Walking retraining",
      "Everyday movement",
    ],
    overview:
      "When a stroke or nerve condition changes how you move, we help you re-learn the things that matter most, walking safely, using your affected side, getting in and out of a chair. Sessions are patient-paced and focused on your real life.\n\nWe help with:\n- Recovery after a stroke, at any stage\n- Managing Parkinson's, MS, or other nerve conditions\n- Balance work to prevent falls and rebuild confidence\n- Practical everyday movements, standing, walking, dressing",
    techniques: [
      {
        name: "Practising Real Daily Tasks",
        description:
          "The best way to get better at something is to practise it, walking, reaching, dressing, repeated in a safe, guided way.",
      },
      {
        name: "Hands-On Movement Guidance",
        description:
          "Gentle hands-on cueing that helps your body remember how to move well again after a stroke or injury.",
      },
      {
        name: "Walking Retraining",
        description:
          "Structured walking practice, with support bars or aids where needed, until walking feels smoother and safer.",
      },
      {
        name: "Balance Work",
        description:
          "Balance drills that start easy and get harder as you improve, cutting your risk of falls and giving you your confidence back.",
      },
      {
        name: "Mirror Therapy",
        description:
          "A simple, evidence-backed technique using a mirror to help your brain reconnect with a weak or paralysed limb.",
      },
    ],
    conditionsTreated: [
      "Weakness and walking problems after a stroke",
      "Parkinson's disease, movement and balance",
      "MS, fatigue and mobility support",
      "Recovery after a spinal injury",
      "Brain injury rehabilitation",
      "Nerve injuries in the arms or legs",
      "Dizziness and balance disorders",
      "Balance loss with ageing and falls history",
    ],
    whatToExpect: [
      {
        step: 1,
        title: "Full Assessment",
        description:
          "We check strength, coordination, and balance, and sit down with your family too if that helps.",
      },
      {
        step: 2,
        title: "Set Real Goals",
        description:
          "Together we pick the two or three things that matter most, every session works toward them.",
      },
      {
        step: 3,
        title: "Guided Sessions",
        description:
          "Hands-on work plus practising your priority movements over and over, that's how the nervous system relearns.",
      },
      {
        step: 4,
        title: "Home & Family Support",
        description:
          "A safe home routine, plus simple coaching for family members who help with daily activities.",
      },
      {
        step: 5,
        title: "Regular Progress Checks",
        description:
          "We re-test every few weeks and adjust the plan as your recovery moves forward.",
      },
    ],
    sessionInfo: {
      duration: "35-45 minutes",
      typicalCourse: "Depends on your condition",
    },
    faqs: [
      {
        question: "How soon after a stroke should we start?",
        answer:
          "Earlier is generally better. Once your medical team says active rehab is safe, we can begin, often in the first weeks.",
      },
      {
        question: "Do you visit at home?",
        answer:
          "Yes. Many neuro patients begin with home visits before moving to clinic sessions when travelling becomes easier.",
      },
      {
        question: "Can family be part of it?",
        answer:
          "Absolutely. With your permission, we teach family members safe ways to help you move and practise at home.",
      },
    ],
  },
  {
    id: "all-ages",
    title: "Physiotherapy for All Ages",
    description:
      "Physiotherapy for children, adults, and seniors, matched to every stage of life.",
    image: ASSETS.services.allAges,
    details: [
      "Care for children",
      "Adult rehab",
      "Safe senior mobility",
      "Family-focused plans",
    ],
    overview:
      "Different ages need different care. We see children working on movement milestones, adults recovering while balancing a busy life, and seniors focused on staying strong, safe, and independent. No one-size-fits-all plans, ever.\n\nWe help with:\n- Children who need movement or coordination support\n- Working-age adults recovering from injury\n- Seniors who want to stay mobile and prevent falls\n- Families supporting an older parent's mobility at home",
    techniques: [
      {
        name: "Children's Movement Check-Ups",
        description:
          "For kids, we screen movement milestones and use play-based exercises that hold their attention.",
      },
      {
        name: "Fall-Prevention Work",
        description:
          "Strength, balance, and quick-reaction drills, the exact things proven to reduce falls in older adults.",
      },
      {
        name: "Arthritis Care",
        description:
          "Gentle exercise and simple pacing strategies to keep arthritic joints moving comfortably.",
      },
      {
        name: "Simple Home Exercises",
        description:
          "Every patient leaves with a clear, doable home routine matched to their strength and life stage.",
      },
      {
        name: "Family Coaching",
        description:
          "For younger and older patients, we show family members how to safely help between sessions.",
      },
    ],
    conditionsTreated: [
      "Children with movement or coordination issues",
      "Muscle and joint injuries in adults",
      "Arthritis in the hips, knees, or hands",
      "Bone weakness and osteoporosis",
      "Weakness after a hospital stay",
      "Age-related balance decline and falls",
      "Long-standing joint stiffness in seniors",
      "Getting back to activity after a long illness",
    ],
    whatToExpect: [
      {
        step: 1,
        title: "Age-Right Check-Up",
        description:
          "The style and pace of your visit is matched to your age, playful for kids, thorough for seniors.",
      },
      {
        step: 2,
        title: "What Matters To You",
        description:
          "We agree what 'better' looks like, climbing stairs safely, playing with grandkids, running around at school.",
      },
      {
        step: 3,
        title: "Your Plan",
        description:
          "Hands-on care plus exercise pitched at the right level, never too much, never too little.",
      },
      {
        step: 4,
        title: "Regular Progress Checks",
        description:
          "We track your progress and adjust the plan as your confidence and strength change.",
      },
    ],
    sessionInfo: {
      duration: "35-45 minutes",
      typicalCourse: "Depends on your condition",
    },
    faqs: [
      {
        question: "From what age do you see children?",
        answer:
          "We see babies for movement concerns and older children for injuries or coordination work. A parent is always present.",
      },
      {
        question: "Is physio safe for elderly patients?",
        answer:
          "Yes, physiotherapy is one of the safest and most effective treatments for older adults. Every exercise is matched to your ability.",
      },
      {
        question: "Can I bring a family member?",
        answer:
          "Please do, for young children and seniors, family involvement really helps home practice.",
      },
    ],
  },
  {
    id: "posture-work",
    title: "Posture & Work-Related Pain",
    description:
      "Treatment and simple fixes for desk strain, work injuries, and posture-related pain.",
    image: ASSETS.services.postureWork,
    details: [
      "Ergonomic advice",
      "Desk posture fixes",
      "Neck & back relief",
      "Workplace check",
    ],
    overview:
      "Long hours at a desk, repetitive lifting, or awkward postures at work slowly load your neck, upper back, and lower back until pain shows up. We find the exact tissues being overloaded and give you practical fixes that last.\n\nWe help with:\n- Neck and upper-back pain from long desk hours\n- Lower back pain from sitting or driving\n- Repetitive strain in the wrists and forearms\n- Simple posture and workstation tweaks that actually work",
    techniques: [
      {
        name: "Posture Check-Up",
        description:
          "A detailed look at how you sit, stand, and move, so we know exactly which muscles are overworked and which are underused.",
      },
      {
        name: "Muscle Release Work",
        description:
          "Hands-on release of the tight muscles that get short from long postures, usually shoulders, chest, and hip fronts.",
      },
      {
        name: "Workstation Setup",
        description:
          "Practical, personal advice on your chair, screen, and keyboard, either from photos or a quick remote review.",
      },
      {
        name: "Strengthening Exercises",
        description:
          "Targeted exercises that build up the muscles that hold you upright, the ones your desk chair can't do for you.",
      },
      {
        name: "Movement-Break Habits",
        description:
          "Simple stretches and moves you can do at your desk to break up long sitting through the working day.",
      },
    ],
    conditionsTreated: [
      "Long-standing neck and upper-back pain",
      "Headaches from posture",
      "Numbness or tingling in the arms",
      "Wrist and forearm strain from typing",
      "Lower back pain from sitting too long",
      "Rounded shoulders and forward head",
      "Tight hips and weak glutes from sitting",
      "Posture pain after having a baby",
    ],
    whatToExpect: [
      {
        step: 1,
        title: "Your Work Story",
        description:
          "We map your day, how many hours sitting, your screen setup, driving time, even how you sleep.",
      },
      {
        step: 2,
        title: "Posture Check-Up",
        description:
          "We look at your posture and test specific muscles so we know what to release and what to strengthen.",
      },
      {
        step: 3,
        title: "Your Plan",
        description:
          "Hands-on treatment in clinic plus a short exercise routine matched to what we found.",
      },
      {
        step: 4,
        title: "Workstation Fixes",
        description:
          "Small setup changes for your desk, driving position, or study space, little tweaks add up to big relief.",
      },
      {
        step: 5,
        title: "Keep It Sorted",
        description:
          "A quick daily routine and movement-break habits so the pain stays away long after your last session.",
      },
    ],
    sessionInfo: {
      duration: "35-45 minutes",
      typicalCourse: "Depends on your condition",
    },
    faqs: [
      {
        question: "Can you check my workstation?",
        answer:
          "Yes, bring photos or we can do a short remote review to give you personal setup advice.",
      },
      {
        question: "How quickly will my neck pain settle?",
        answer:
          "Most desk-related neck pain gets noticeably better within 3-4 sessions when you also do the daily exercises.",
      },
      {
        question: "Do I need to change my job?",
        answer:
          "Almost never. Small posture, movement-break, and setup changes usually make sitting all day comfortable again.",
      },
    ],
  },
  {
    id: "strength-mobility",
    title: "Strength & Mobility Training",
    description:
      "Guided training to build strength, restore movement, and stop injuries coming back.",
    image: ASSETS.services.strengthMobility,
    details: [
      "Strength training",
      "Flexibility work",
      "Everyday movement",
      "Injury prevention",
    ],
    overview:
      "Strength and mobility training is where recovery turns into resilience. Whether you're finishing rehab or just want to move better, we build a plan around your body, your goals, and your lifestyle.\n\nWe help with:\n- Finishing rehab and staying injury-free for good\n- Reducing re-injury risk for weekend athletes\n- Learning safe strength training from scratch\n- Preparing your body for an upcoming event or surgery",
    techniques: [
      {
        name: "Progressive Strength Training",
        description:
          "Structured, measurable strength work, the training approach with the strongest evidence for staying injury-free.",
      },
      {
        name: "Mobility Drills",
        description:
          "Targeted mobility work for your specific tight areas, not generic 'stretch everything' advice.",
      },
      {
        name: "Movement Coaching",
        description:
          "Simple cues on squatting, lifting, pushing, and pulling so the strength you build stays safe outside the gym too.",
      },
    ],
    conditionsTreated: [
      "Recurring low-back niggles",
      "Weakness left over after an injury",
      "Long-standing joint stiffness",
      "Getting back after a long break from exercise",
      "Imbalances after surgery",
      "Preparation before planned surgery",
      "Reducing injury risk for weekend sports",
      "General deconditioning in adults",
    ],
    whatToExpect: [
      {
        step: 1,
        title: "Movement Screen & Goals",
        description:
          "A quick movement check plus a conversation about what you want to be able to do, comfortably and consistently.",
      },
      {
        step: 2,
        title: "Baseline Testing",
        description:
          "We measure your strength in key movements so we have a real starting point to work from.",
      },
      {
        step: 3,
        title: "Your Training Plan",
        description:
          "A progressive strength and mobility programme matched to your ability, schedule, and equipment.",
      },
      {
        step: 4,
        title: "Coached Sessions",
        description:
          "Weekly sessions with clear progression, no random exercise swapping, no wasted effort.",
      },
      {
        step: 5,
        title: "Train On Your Own",
        description:
          "You finish with the skills and confidence to keep training independently or move into a gym.",
      },
    ],
    sessionInfo: {
      duration: "35-45 minutes",
      typicalCourse: "Depends on your condition",
    },
    faqs: [
      {
        question: "Do I need gym experience?",
        answer:
          "None. We start from wherever you are and progress at a pace that stays safe and productive.",
      },
      {
        question: "How is this different from a personal trainer?",
        answer:
          "Every plan starts with a physio check-up. If you have an injury history, that's where we start, not where we ignore.",
      },
      {
        question: "Will I need equipment at home?",
        answer:
          "Often just resistance bands and a mat are enough. We match the plan to what you already have.",
      },
    ],
  },
];

export type ServiceIconKey =
  | "activity"
  | "heart-pulse"
  | "brain"
  | "users"
  | "monitor"
  | "dumbbell";

/** Home page service cards, all 6 core services. */
export const HOME_SERVICE_HIGHLIGHTS = SERVICES;

/** Simple title list for quick contact/booking selects. */
export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);
