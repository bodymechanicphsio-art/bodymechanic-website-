"use client";

import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import DetailModalScrollLayout from "@/components/ui/DetailModalScrollLayout";
import type { Technique } from "@/lib/types";

interface TechniqueDetailModalProps {
  technique: Technique | null;
  icon?: LucideIcon;
  onClose: () => void;
}

export default function TechniqueDetailModal({
  technique,
  icon: Icon,
  onClose,
}: TechniqueDetailModalProps) {
  const footer = (
    <div className="flex flex-col gap-2.5">
      <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
        <Link
          href="/book"
          onClick={onClose}
          className="inline-flex min-h-11 flex-1 cursor-pointer items-center justify-center rounded-full bg-brand-pink px-5 py-2.5 font-sans text-sm font-semibold text-white transition-colors hover:bg-brand-pink-dim sm:min-h-12 sm:text-base"
        >
          Book Appointment
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex min-h-11 flex-1 cursor-pointer items-center justify-center rounded-full border border-border-default px-5 py-2.5 font-sans text-sm font-semibold text-text-1 transition-colors hover:border-brand-pink hover:text-brand-pink sm:min-h-12 sm:text-base"
        >
          Close
        </button>
      </div>
      {technique && (
        <Link
          href={`/techniques/${technique.id}`}
          onClick={onClose}
          className="inline-flex items-center justify-center gap-1.5 font-sans text-sm font-semibold text-brand-pink transition-opacity hover:opacity-80"
        >
          View full technique page →
        </Link>
      )}
    </div>
  );

  return (
    <DetailModalScrollLayout
      isOpen={Boolean(technique)}
      onClose={onClose}
      image={technique?.image}
      imageAlt={technique?.name ?? ""}
      titleId="technique-modal-title"
      badge="Technique Details"
      title={technique?.name ?? ""}
      footer={footer}
      headerFallback={
        Icon ? (
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-border-default bg-brand-pink/10 text-brand-pink">
            <Icon size={28} strokeWidth={1.75} />
          </div>
        ) : null
      }
    >
      {technique && (
        <>
          <p className="font-sans text-[0.9375rem] leading-[1.75] text-text-2 sm:text-base sm:leading-relaxed">
            {technique.description}
          </p>

          {technique.overview && (
            <p className="mt-4 font-sans text-[0.9375rem] leading-[1.75] text-text-2 sm:text-base sm:leading-relaxed">
              {technique.overview}
            </p>
          )}

          {technique.details && technique.details.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-brand-pink sm:text-sm">
                Key benefits
              </h3>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {technique.details.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-border-default bg-bg-page px-3.5 py-3 font-sans text-sm leading-snug text-text-1"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-pink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </DetailModalScrollLayout>
  );
}
