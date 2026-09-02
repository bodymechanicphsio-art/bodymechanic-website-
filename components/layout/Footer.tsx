import Link from "next/link";
import { AtSign, Mail, Phone } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";
import { NAV_LINKS, CLINIC } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

const FOOTER_LINKS = [
  ...NAV_LINKS,
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-default">
      <div className="container-site py-12 md:py-14">
        <div className="flex flex-col items-center gap-6 text-center">
          <BrandLogo size="md" />

          <p className="max-w-md font-sans text-sm leading-relaxed text-text-2">
            Helping you move better, feel stronger, live pain-free.
          </p>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-text-2 transition-colors hover:text-brand-pink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-2.5 font-sans text-sm text-text-2 sm:text-[0.9375rem]">
            <a
              href={`mailto:${CLINIC.email}`}
              className="inline-flex max-w-full items-center gap-2 break-all transition-colors hover:text-brand-pink"
            >
              <Mail size={16} strokeWidth={1.75} className="shrink-0 text-brand-pink" aria-hidden="true" />
              {CLINIC.email}
            </a>
            <a
              href={`tel:${CLINIC.phoneTel}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-brand-pink"
            >
              <Phone size={16} strokeWidth={1.75} className="shrink-0 text-brand-pink" aria-hidden="true" />
              {CLINIC.phone}
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href={CLINIC.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border-default text-text-2 transition-colors hover:border-brand-pink hover:text-brand-pink"
              aria-label="Instagram"
            >
              <AtSign size={20} strokeWidth={1.75} />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border-default text-text-2 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={20} />
            </a>
          </div>

          <p className="pt-4 font-sans text-xs text-text-2 sm:text-sm">
            © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
