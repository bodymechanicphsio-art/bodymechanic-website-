"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { whatsappLink, whatsappBookingMessage } from "@/lib/whatsapp";
import { CLINIC, SERVICE_OPTIONS } from "@/lib/constants";

function WhatsAppGlyph({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

/**
 * Merged CTA + Booking section. One clean centered frame:
 *   Heading + short subtext, then a centered booking form card.
 * Replaces the previous CTASection + ContactSection combo.
 */
export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: SERVICE_OPTIONS[0],
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = whatsappLink(whatsappBookingMessage(form));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="relative scroll-mt-24 bg-bg-section py-16 md:py-20">
      <div className="container-site max-w-2xl">
        <div className="mb-10 text-center">
          <h2 className="section-heading mb-4">
            Ready to Move <span className="gradient-text">Without Pain?</span>
          </h2>
          <p className="section-subtext mx-auto mb-6 max-w-xl font-sans">
            Book on WhatsApp in 30 seconds, we&apos;ll confirm your time within an hour.
          </p>
          <ul className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 font-sans text-sm text-text-2 sm:text-[0.9375rem]">
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="text-brand-pink">✓</span>
              First visit: full check-up + plan
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="text-brand-pink">✓</span>
              Session length: 35-45 minutes
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="text-brand-pink">✓</span>
              No referral needed
            </li>
          </ul>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="card-light p-6 md:p-8 flex flex-col gap-5"
        >
          <h3 className="font-display text-lg sm:text-xl font-bold text-text-1">
            Send a Booking Request
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField label="Your Name">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                type="text"
                placeholder="Full name"
                className="form-input"
              />
            </FormField>

            <FormField label="Phone Number">
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                type="tel"
                placeholder="03XX-XXXXXXX"
                className="form-input"
              />
            </FormField>
          </div>

          <FormField label="Service">
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="form-input"
            >
              {SERVICE_OPTIONS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </FormField>

          <FormField label="Message">
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              placeholder="Tell us briefly what you need help with..."
              className="form-input resize-none"
            />
          </FormField>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
            <button
              type="submit"
              className="btn-action bg-[#25D366] hover:bg-[#1faa54] text-white shadow-md shadow-[#25D366]/15"
            >
              <WhatsAppGlyph size={16} />
              Send via WhatsApp
            </button>
            <a
              href={`tel:${CLINIC.phoneTel}`}
              className="btn-action bg-brand-pink hover:bg-brand-pink-dim text-white shadow-md shadow-brand-pink/15"
            >
              <Phone size={16} strokeWidth={2.2} />
              Call the Clinic
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="form-label">{label}</span>
      {children}
    </label>
  );
}
