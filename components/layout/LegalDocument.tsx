import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import { LEGAL_LAST_UPDATED } from "@/lib/constants";

interface LegalSection {
  title: string;
  body: string;
  list?: readonly string[];
}

interface LegalDocumentProps {
  label: string;
  heading: string;
  intro: string;
  sections: readonly LegalSection[];
}

export default function LegalDocument({ label, heading, intro, sections }: LegalDocumentProps) {
  return (
    <div className="pt-28 pb-24 bg-bg-page">
      <div className="max-w-3xl mx-auto px-6">
        <AnimateOnScroll className="mb-12">
          <SectionLabel label={label} color="purple" />
          <h1
            className="font-display font-black text-text-1 mb-4 leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {heading}
          </h1>
          <p className="text-text-2 leading-relaxed font-sans">{intro}</p>
          <p className="text-text-3 text-sm mt-4 font-sans">Last updated: {LEGAL_LAST_UPDATED}</p>
        </AnimateOnScroll>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <AnimateOnScroll key={section.title} delay={i * 0.04}>
              <article className="card-dark p-6">
                <h2 className="text-text-1 font-bold text-lg mb-3 font-display">{section.title}</h2>
                <p className="text-text-2 text-sm leading-relaxed font-sans">{section.body}</p>
                {"list" in section && section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-text-2 text-sm leading-relaxed font-sans"
                      >
                        <span className="text-brand-pink shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
