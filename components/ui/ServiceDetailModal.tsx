"use client";

import Link from "next/link";
import DetailModalScrollLayout from "@/components/ui/DetailModalScrollLayout";
import type { Service } from "@/lib/types";

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
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
      {service && (
        <Link
          href={`/services/${service.id}`}
          onClick={onClose}
          className="inline-flex items-center justify-center gap-1.5 font-sans text-sm font-semibold text-brand-pink transition-opacity hover:opacity-80"
        >
          View full service page →
        </Link>
      )}
    </div>
  );

  return (
    <DetailModalScrollLayout
      isOpen={Boolean(service)}
      onClose={onClose}
      image={service?.image}
      imageAlt={service?.title ?? ""}
      titleId="service-modal-title"
      badge="Service Details"
      title={service?.title ?? ""}
      footer={footer}
    >
      {service && (
        <>
          <p className="mb-6 font-sans text-[0.9375rem] leading-[1.75] text-text-2 sm:text-base sm:leading-relaxed">
            {service.description}
          </p>

          {service.details.length > 0 && (
            <div className="mb-2">
              <h3 className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-brand-pink sm:text-sm">
                What we offer
              </h3>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {service.details.map((item) => (
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
