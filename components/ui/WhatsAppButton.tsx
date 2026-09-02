"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { CLINIC } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const syncMenuState = () => {
      setMenuOpen(document.body.dataset.mobileMenuOpen === "true");
    };
    syncMenuState();
    const observer = new MutationObserver(syncMenuState);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-mobile-menu-open"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 800);
    const tt = setTimeout(() => setTooltipOpen(true), 2500);
    const tt2 = setTimeout(() => setTooltipOpen(false), 8000);
    return () => {
      clearTimeout(t);
      clearTimeout(tt);
      clearTimeout(tt2);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && !menuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 280, damping: 24 }}
          className="fixed bottom-5 right-5 z-50 flex items-end gap-3"
        >
          <AnimatePresence>
            {tooltipOpen && (
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.2 }}
                className="hidden sm:block mb-1.5 max-w-[240px]"
              >
                <div className="relative rounded-xl border border-border-default bg-bg-card/95 backdrop-blur-md px-4 py-3.5 shadow-[0_12px_40px_rgba(15,15,25,0.15)]">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-pink mb-1 font-sans">
                    {CLINIC.shortName}
                  </p>
                  <p className="text-[13px] leading-snug text-text-1 font-sans">
                    Book your appointment on WhatsApp. We reply during clinic hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setTooltipOpen(false)}
                    aria-label="Dismiss message"
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full border border-border-default bg-bg-card text-text-2 hover:text-text-1 hover:border-brand-pink/40 flex items-center justify-center transition-colors"
                  >
                    <X size={12} strokeWidth={2.5} aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book on WhatsApp"
            onClick={() => setTooltipOpen(false)}
            className="group relative flex items-center justify-center w-[3.25rem] h-[3.25rem] rounded-full bg-[#25D366] hover:bg-[#1faa54] text-white shadow-lg shadow-[#25D366]/35 hover:shadow-[#25D366]/50 hover:scale-[1.03] active:scale-95 transition-all"
          >
            <span
              className="absolute inset-0 rounded-full bg-[#25D366]/25 animate-ping opacity-60 group-hover:opacity-0 transition-opacity"
              aria-hidden="true"
            />
            <WhatsAppIcon size={24} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
