import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionListProps {
  items: readonly FaqItem[];
}

export default function FaqAccordionList({ items }: FaqAccordionListProps) {
  return (
    <div className="space-y-3">
      {items.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-2xl border border-border-default bg-bg-card p-5 open:border-brand-pink/40 open:shadow-[0_8px_30px_-12px_rgba(233,30,140,0.15)] sm:p-6"
        >
          <summary className="cursor-pointer list-none marker:hidden">
            <span className="flex items-start justify-between gap-4">
              <span className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-pink/10 text-brand-pink"
                  aria-hidden="true"
                >
                  <HelpCircle size={16} strokeWidth={2} />
                </span>
                <span className="font-display text-base font-semibold leading-snug text-text-1 sm:text-lg">
                  {faq.question}
                </span>
              </span>
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-default bg-bg-page text-brand-pink transition-transform duration-200 group-open:rotate-180"
                aria-hidden="true"
              >
                <ChevronDown size={16} strokeWidth={2.2} />
              </span>
            </span>
          </summary>
          <p className="detail-body mt-4 border-t border-border-default/60 pt-4 pl-11">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
