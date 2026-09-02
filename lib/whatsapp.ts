/**
 * WhatsApp helpers for Body Mechanic Physiotherapy Clinic.
 * Number is Pakistan +92 310 4971086.
 */

export const WHATSAPP_NUMBER = "923104971086"; // international format, no +

const DEFAULT_MESSAGE =
  "Assalam o Alaikum! I'd like to book a physiotherapy appointment at Body Mechanic Clinic.";

/** Build a wa.me link with optional pre-filled text. */
export function whatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Compose a structured booking request from form fields. */
export function whatsappBookingMessage(opts: {
  name: string;
  phone: string;
  service: string;
  message?: string;
}) {
  const lines = [
    "Hi Body Mechanic Clinic. I'd like to book an appointment.",
    "",
    `*Name:* ${opts.name || "-"}`,
    `*Phone:* ${opts.phone || "-"}`,
    `*Service:* ${opts.service || "-"}`,
  ];
  if (opts.message?.trim()) {
    lines.push(`*Message:* ${opts.message.trim()}`);
  }
  return lines.join("\n");
}
