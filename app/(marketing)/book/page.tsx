import SectionLabel from "@/components/ui/SectionLabel";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import BookingForm from "@/components/forms/BookingForm";
import FaqAccordionList from "@/components/ui/FaqAccordionList";
import { createPageMetadata } from "@/lib/seo";
import { CLINIC, CLINIC_HOURS, BOOKING_OFFERINGS, BOOK_FAQ_ITEMS } from "@/lib/constants";
import { MapPin, Clock, CheckCircle2, Phone } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Book Your Appointment",
  description:
    "Schedule your physiotherapy appointment online or by phone. In-clinic, home visit, or online consultations in Lahore.",
  path: "/book",
});

export default function BookPage() {
  return (
    <div className="pt-28 pb-24 bg-bg-page">
      <div className="container-site max-w-6xl">
        <AnimateOnScroll className="text-center mb-12 md:mb-14">
          <SectionLabel label="Book Now" color="purple" />
          <h1 className="section-heading text-text-1 mb-4">
            Start Your <span className="gradient-text">Recovery Today</span>
          </h1>
          <p className="section-subtext max-w-xl mx-auto font-sans">
            Fill in the form below and we&apos;ll confirm your appointment within 2 business hours.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="lg:col-span-3 order-2 lg:order-1">
            <AnimateOnScroll>
              <BookingForm />
            </AnimateOnScroll>
          </div>

          <div className="lg:col-span-2 space-y-5 order-1 lg:order-2">
            <AnimateOnScroll delay={0.15}>
              <div className="card-dark p-6">
                <h3 className="text-text-1 font-bold mb-4 flex items-center gap-3 font-display text-base sm:text-lg">
                  <span className="w-10 h-10 rounded-lg bg-brand-pink/15 border border-brand-pink/30 flex items-center justify-center text-brand-pink shrink-0">
                    <MapPin size={20} strokeWidth={1.75} />
                  </span>
                  Location
                </h3>
                <p className="text-text-2 text-sm sm:text-[15px] leading-relaxed font-sans pl-[3.25rem]">
                  {CLINIC.address.line1}
                  <br />
                  {CLINIC.address.line2}
                  <span className="text-text-2 text-sm mt-2 block">{CLINIC.instagram.handle}</span>
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="card-dark p-6">
                <h3 className="text-text-1 font-bold mb-4 flex items-center gap-3 font-display text-base sm:text-lg">
                  <span className="w-10 h-10 rounded-lg bg-brand-pink/15 border border-brand-pink/30 flex items-center justify-center text-brand-pink shrink-0">
                    <Clock size={20} strokeWidth={1.75} />
                  </span>
                  Hours
                </h3>
                <ul className="space-y-2.5 text-sm sm:text-[15px] text-text-2 font-sans pl-[3.25rem]">
                  <li className="flex justify-between gap-4">
                    <span>{CLINIC_HOURS.weekday.label}</span>
                    <span className="text-text-1">{CLINIC_HOURS.weekday.hours}</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>{CLINIC_HOURS.saturday.label}</span>
                    <span className="text-text-1">{CLINIC_HOURS.saturday.hours}</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>{CLINIC_HOURS.sunday.label}</span>
                    <span className="text-text-3">{CLINIC_HOURS.sunday.hours}</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.25}>
              <div className="card-dark p-6">
                <h3 className="text-text-1 font-bold mb-4 flex items-center gap-3 font-display text-base sm:text-lg">
                  <span className="w-10 h-10 rounded-lg bg-brand-pink/15 border border-brand-pink/30 flex items-center justify-center text-brand-pink shrink-0">
                    <CheckCircle2 size={20} strokeWidth={1.75} />
                  </span>
                  What We Offer
                </h3>
                <ul className="space-y-2.5 pl-[3.25rem]">
                  {BOOKING_OFFERINGS.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm sm:text-[15px] text-text-2 font-sans">
                      <span className="text-brand-pink text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.3}>
              <div className="card-dark p-6 border-brand-pink/20">
                <h3 className="text-text-1 font-bold mb-3 flex items-center gap-3 font-display text-base sm:text-lg">
                  <span className="w-10 h-10 rounded-lg bg-brand-pink/15 border border-brand-pink/30 flex items-center justify-center text-brand-pink shrink-0">
                    <Phone size={20} strokeWidth={1.75} />
                  </span>
                  Prefer to call?
                </h3>
                <div className="pl-[3.25rem]">
                  <a
                    href={`tel:${CLINIC.phoneTel}`}
                    className="text-brand-pink font-bold text-lg font-sans hover:underline"
                  >
                    {CLINIC.phone}
                  </a>
                  <p className="text-text-2 text-sm mt-1 font-sans">Available during clinic hours</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-3xl md:mt-24">
          <AnimateOnScroll className="mb-10 text-center">
            <SectionLabel label="Before You Book" />
            <h2 className="section-heading font-display">
              Common <span className="gradient-text">Booking Questions</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <FaqAccordionList items={BOOK_FAQ_ITEMS} />
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
