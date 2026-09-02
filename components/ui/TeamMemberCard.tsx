import ClinicImage from "@/components/ui/ClinicImage";
import type { TeamMember } from "@/lib/types";

interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
  /** Featured photo layout - used only when member has an image */
  variant?: "default" | "featured";
}

export default function TeamMemberCard({
  member,
  className = "",
  variant = "default",
}: TeamMemberCardProps) {
  const hasPhoto = Boolean(member.image);

  if (variant === "featured" && hasPhoto) {
    return (
      <article
        className={`card-light w-full overflow-hidden border-brand-pink/35 ${className}`}
      >
        <div className="grid grid-cols-1 items-stretch md:grid-cols-[minmax(0,14rem)_1fr] lg:grid-cols-[minmax(0,16rem)_1fr]">
          <div className="relative flex min-h-[16rem] items-center justify-center bg-bg-section px-4 py-5 md:min-h-0 md:py-6">
            <div className="relative mx-auto h-[14.5rem] w-full max-w-[12.5rem] md:h-[16.5rem] md:max-w-[14rem]">
              <ClinicImage
                src={member.image!}
                alt={`${member.name}, ${member.role} at Body Mechanic Physiotherapy Clinic Lahore`}
                fill
                sizes="(max-width: 768px) 200px, 224px"
                className="object-contain object-center"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col justify-center px-6 py-6 text-center md:px-8 md:py-7 md:text-left lg:px-10">
            <h3 className="font-display text-[1.25rem] font-bold leading-snug tracking-tight text-text-1 sm:text-[1.375rem]">
              {member.name}
            </h3>
            <p className="mt-2 font-sans text-[0.9375rem] font-semibold leading-snug text-brand-pink">
              {member.role}
            </p>
            <p className="mt-3 font-sans text-[0.9375rem] leading-[1.75] text-text-2 sm:text-[15px]">
              {member.bio}
            </p>
            <p className="mt-5 border-t border-border-default pt-4 font-sans text-sm leading-snug text-text-2">
              {member.credentials.join(" · ")}
            </p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`card-light flex w-full max-w-sm flex-col items-center px-6 py-6 text-center md:px-7 md:py-7 ${
        member.featured ? "border-brand-pink/35" : ""
      } ${className}`}
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} text-base font-bold text-white shadow-[0_8px_20px_-8px_rgba(233,30,140,0.4)]`}
        aria-hidden="true"
      >
        {member.initials}
      </div>

      <h3 className="mt-4 font-display text-[1.0625rem] font-bold leading-snug tracking-tight text-text-1 sm:text-[1.125rem]">
        {member.name}
      </h3>

      <p className="mt-1.5 font-sans text-sm font-semibold leading-snug text-brand-pink">
        {member.role}
      </p>

      <p className="mt-2.5 font-sans text-sm leading-[1.7] text-text-2 sm:text-[0.9375rem]">
        {member.bio}
      </p>

      <p className="mt-4 w-full border-t border-border-default pt-3.5 font-sans text-xs leading-snug text-text-2 sm:text-sm">
        {member.credentials.join(" · ")}
      </p>
    </article>
  );
}
