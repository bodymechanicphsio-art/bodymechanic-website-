"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";
import { whatsappLink, whatsappBookingMessage } from "@/lib/whatsapp";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  notes: string;
}

const INPUT_CLASS = "form-input font-sans";

const LABEL_CLASS = "form-label font-sans";

export default function BookingForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedService =
      SERVICES.find((s) => s.id === form.service)?.title ?? form.service;
    const url = whatsappLink(
      whatsappBookingMessage({
        name: form.name,
        phone: form.phone,
        service: selectedService,
        message: [
          form.email ? `Email: ${form.email}` : "",
          form.date ? `Preferred date: ${form.date}` : "",
          form.notes.trim(),
        ]
          .filter(Boolean)
          .join("\n"),
      })
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence mode="wait">
      <motion.form
        key="form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="card-dark p-8 space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className={LABEL_CLASS}>Full Name *</label>
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={INPUT_CLASS}
            />
          </div>
          <div>
            <label className={LABEL_CLASS}>Phone Number *</label>
            <input
              required
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="03XX-XXXXXXX"
              className={INPUT_CLASS}
            />
          </div>
        </div>

        <div>
          <label className={LABEL_CLASS}>Email Address</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={INPUT_CLASS}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className={LABEL_CLASS}>Service *</label>
            <select
              required
              name="service"
              value={form.service}
              onChange={handleChange}
              className={INPUT_CLASS}
            >
              <option value="">Select a service</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={LABEL_CLASS}>Preferred Date *</label>
            <input
              required
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className={INPUT_CLASS}
            />
          </div>
        </div>

        <div>
          <label className={LABEL_CLASS}>Additional Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={4}
            placeholder="Briefly describe your condition or any concerns..."
            className={`${INPUT_CLASS} resize-none`}
          />
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full">
          Send Booking via WhatsApp →
        </Button>

        <p className="text-text-3 text-xs text-center font-sans">
          Your details will open in WhatsApp so our team can confirm your appointment.
        </p>
      </motion.form>
    </AnimatePresence>
  );
}
