import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import ActionButton from "@/components/ui/ActionButton";
import { CLINIC } from "@/lib/constants";

interface BookingActionPanelProps {
  title: string;
  description: string;
  bookLabel?: string;
  whatsappMessage: string;
}

export default function BookingActionPanel({
  title,
  description,
  bookLabel = "Book Appointment",
  whatsappMessage,
}: BookingActionPanelProps) {
  const whatsappHref = `https://wa.me/${CLINIC.phoneTel.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <aside className="card-light p-6 md:p-8">
      <h2 className="mb-4 font-display text-xl font-bold text-text-1 md:text-2xl">{title}</h2>
      <p className="detail-body mb-6">{description}</p>
      <div className="flex flex-col gap-3">
        <ActionButton href="/book" icon={CalendarCheck} variant="primary" showArrow>
          {bookLabel}
        </ActionButton>
        <ActionButton href={whatsappHref} icon={MessageCircle} variant="outline" external>
          WhatsApp Us
        </ActionButton>
        <ActionButton href={`tel:${CLINIC.phoneTel}`} icon={Phone} variant="outline">
          {CLINIC.phone}
        </ActionButton>
      </div>
    </aside>
  );
}
