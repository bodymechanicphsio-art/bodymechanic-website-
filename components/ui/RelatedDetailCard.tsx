import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ClinicImage from "@/components/ui/ClinicImage";

interface RelatedDetailCardProps {
  href: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  actionLabel?: string;
}

export default function RelatedDetailCard({
  href,
  title,
  description,
  image,
  imageAlt,
  actionLabel = "View details",
}: RelatedDetailCardProps) {
  return (
    <Link
      href={href}
      className="group card-light card-light-hover flex h-full flex-col overflow-hidden"
    >
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <ClinicImage
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 text-center sm:text-left">
        <h3 className="mb-2 font-display text-base font-bold text-text-1 sm:text-lg">{title}</h3>
        <p className="line-clamp-3 flex-1 font-sans text-sm leading-relaxed text-text-2 sm:text-base">
          {description}
        </p>
        <span className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-pink/30 bg-brand-pink/10 px-4 py-2.5 font-sans text-sm font-semibold text-brand-pink transition-all duration-200 group-hover:border-brand-pink group-hover:bg-brand-pink group-hover:text-white sm:w-auto sm:self-start">
          {actionLabel}
          <ArrowRight
            size={15}
            strokeWidth={2.2}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
