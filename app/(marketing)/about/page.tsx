import SectionLabel from "@/components/ui/SectionLabel";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Button from "@/components/ui/Button";
import TeamMemberCard from "@/components/ui/TeamMemberCard";
import ClinicImage from "@/components/ui/ClinicImage";
import FaqAccordionList from "@/components/ui/FaqAccordionList";
import AboutJourney from "@/components/sections/AboutJourney";
import { createPageMetadata } from "@/lib/seo";
import { ASSETS } from "@/lib/assets";
import {
  TEAM_MEMBERS,
  MISSION_VALUES,
  ACCREDITATIONS,
  ABOUT_FAQ_ITEMS,
} from "@/lib/constants";
import { Target, Lightbulb, Trophy, type LucideIcon } from "lucide-react";

const MISSION_ICONS: Record<
  (typeof MISSION_VALUES)[number]["icon"],
  LucideIcon
> = {
  target: Target,
  lightbulb: Lightbulb,
  trophy: Trophy,
};

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Meet our expert physiotherapy team in Lahore. Learn about our mission, values, and commitment to evidence-based treatment and patient care.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 bg-bg-page">
      {/* 1. Our Story */}
      <div className="container-site max-w-6xl mb-16 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <AnimateOnScroll>
            <SectionLabel label="Our Story" />
            <h1 className="section-heading mb-5">
              Physiotherapy clinic in Lahore{" "}
            
            </h1>
            <p className="section-subtext font-sans">
              Body Mechanic Physiotherapy Clinic opened its doors in Lahore in
              2021, founded by Dr. Saima Naseem PT, a sports physiotherapist
              whose earlier career took her from the Tennis Federation of
              Pakistan to the Pakistan Cricket Board and international ITF
              events. She built the clinic around one idea: bring the same
              athlete-grade physiotherapy that keeps professional players
              match-fit to everyday patients across Lahore.
            </p>
            <p className="mt-4 font-sans text-[1.0625rem] leading-relaxed text-text-2 sm:text-[1.125rem]">
              From that first treatment room, Body Mechanic has grown into a
              full DPT-qualified team, structured internship programmes in
              partnership with Riphah International University, and regular
              professional workshops across Lahore and Islamabad. Along the way
              we&apos;ve been recognised with the LAPS Award (2023) and a Shield
              of Appreciation from the MIS Institute (2024) for our contribution
              to physiotherapy education, and, now four years on, the clinic is
              still growing.
            </p>
            <p className="mt-4 font-sans text-[1.0625rem] leading-relaxed text-text-2 sm:text-[1.125rem]">
              Today, Body Mechanic is one of Lahore&apos;s most trusted
              physiotherapy destinations for sports rehabilitation, chronic pain
              relief, and long-term wellness care. The values from day one still
              hold: evidence-based assessment, honest treatment plans with clear
              timelines, and warm, patient-first care, no referral needed to
              start.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-bg-section shadow-[0_16px_40px_-12px_rgba(0,0,0,0.12)] lg:max-w-md">
              <ClinicImage
                src={ASSETS.clinic.aboutHero}
                alt="Dr. Saima Naseem PT at Body Mechanic Physiotherapy Clinic in Lahore"
                width={585}
                height={1024}
                sizes="(max-width: 1024px) 90vw, 28rem"
                objectFit="contain"
                className="h-auto w-full"
                priority
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Mission / Approach / Standard */}
      <div className="container-site max-w-6xl mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MISSION_VALUES.map((item, i) => {
            const Icon = MISSION_ICONS[item.icon];
            return (
              <AnimateOnScroll key={item.title} delay={i * 0.1}>
                <div className="card-light p-7 md:p-8 h-full text-center">
                  <div className="w-12 h-12 rounded-xl bg-brand-pink-light border border-border-pink flex items-center justify-center mx-auto mb-4">
                    <Icon
                      size={22}
                      strokeWidth={2}
                      className="text-brand-pink"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-3 font-display text-brand-pink">
                    {item.title}
                  </h3>
                  <p className="text-text-2 text-sm sm:text-[15px] leading-relaxed font-sans">
                    {item.text}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>

      {/* 2. Our Journey, covers athletes, workshops, awards in-story (no repeat sections) */}
      <AboutJourney />

      {/* 3. Meet Your Physiotherapists */}
      <div className="container-site max-w-6xl mb-16 md:mb-24">
        <AnimateOnScroll className="text-center mb-12">
          <SectionLabel label="The Team" />
          <h2 className="section-heading font-display">
            Meet Your <span className="gradient-text">Physiotherapists</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll className="mb-6 md:mb-8">
          <TeamMemberCard
            member={TEAM_MEMBERS.find((m) => m.featured) ?? TEAM_MEMBERS[0]}
            variant="featured"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 items-start justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {TEAM_MEMBERS.filter((m) => !m.featured).map((member, i) => (
            <AnimateOnScroll
              key={member.name}
              delay={i * 0.08}
              className="w-full max-w-sm"
            >
              <TeamMemberCard member={member} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* 4. Trusted & Qualified */}
      <div className="container-site max-w-4xl mb-16">
        <AnimateOnScroll className="text-center mb-10">
          <SectionLabel label="Credentials" />
          <h2 className="section-heading font-display">
            Trusted & <span className="gradient-text">Qualified</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {ACCREDITATIONS.map((acc) => (
              <div
                key={acc}
                className="card-light p-5 text-center text-sm text-text-1 font-sans flex flex-col items-center justify-center"
              >
                <div className="text-brand-pink text-xl mb-2 font-bold">✓</div>
                {acc}
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>

      {/* FAQ */}
      <div className="container-site mb-16 max-w-3xl md:mb-20">
        <AnimateOnScroll className="mb-10 text-center">
          <SectionLabel label="FAQ" />
          <h2 className="section-heading font-display">
            Questions About <span className="gradient-text">Body Mechanic</span>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll>
          <FaqAccordionList items={ABOUT_FAQ_ITEMS} />
        </AnimateOnScroll>
      </div>

      {/* Booking CTA */}
      <AnimateOnScroll className="text-center">
        <Button variant="primary" size="lg" href="/book">
          Book Appointment →
        </Button>
      </AnimateOnScroll>
    </div>
  );
}
