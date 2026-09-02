import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionBadge from "@/components/ui/SectionBadge";
import TeamMemberCard from "@/components/ui/TeamMemberCard";
import { TEAM_MEMBERS } from "@/lib/constants";

export default function TeamSection() {
  const featured = TEAM_MEMBERS.find((m) => m.image) ?? TEAM_MEMBERS[0];
  const others = TEAM_MEMBERS.filter((m) => m.name !== featured.name);

  return (
    <section id="team" className="scroll-mt-24 section-padding bg-bg-page">
      <div className="container-site max-w-6xl">
        <AnimateOnScroll className="mb-14 text-center md:mb-16">
          <SectionBadge className="mb-4">Meet The Team</SectionBadge>
          <h2 className="section-heading font-display">
            The Experts <span className="gradient-text">Behind Your Recovery</span>
          </h2>
          <p className="section-subtext mx-auto mt-4 max-w-xl font-sans">
            Highly qualified, genuinely passionate physiotherapists dedicated to your wellbeing.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll className="mb-6 md:mb-8">
          <TeamMemberCard member={featured} variant="featured" />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 items-start justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {others.map((member, i) => (
            <AnimateOnScroll key={member.name} delay={i * 0.06} className="w-full max-w-sm">
              <TeamMemberCard member={member} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
