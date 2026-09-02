"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Autoplay } from "swiper/modules";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionBadge from "@/components/ui/SectionBadge";
import { CLINIC, TESTIMONIALS } from "@/lib/constants";
import type { Testimonial } from "@/lib/types";

import "swiper/css";

interface TestimonialsProps {
  /** Live Google reviews from getGoogleReviews(). Optional — falls back to hardcoded TESTIMONIALS. */
  reviews?: readonly Testimonial[];
  /** Live total review count to display in the "View all on Google" link. Optional. */
  totalCount?: number;
}

function TestimonialCard({
  name,
  rating,
  text,
  condition,
}: Testimonial) {
  const initial = name.trim()[0]?.toUpperCase() ?? "?";

  return (
    <article className="flex h-full min-h-[240px] w-full flex-col gap-3 rounded-2xl border border-border-default bg-bg-card p-5 shadow-[0_10px_40px_-14px_rgba(15,15,25,0.12)] transition-colors sm:min-h-[220px] sm:p-6 lg:hover:border-brand-pink/35">
      <div className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: rating }).map((_, j) => (
          <span key={j} className="text-sm text-brand-pink sm:text-xs">
            ★
          </span>
        ))}
      </div>

      <blockquote className="m-0 flex-1 font-sans text-sm leading-[1.7] text-text-2 sm:text-[0.9375rem] sm:leading-relaxed">
        &ldquo;{text}&rdquo;
      </blockquote>

      <footer className="mt-auto flex items-center justify-between gap-3 border-t border-border-default pt-3">
        <div className="min-w-0">
          <cite className="font-sans text-sm font-semibold not-italic text-text-1">{name}</cite>
          <p className="mt-0.5 font-sans text-xs text-text-3">{condition}</p>
        </div>
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-pink font-sans text-xs font-bold text-white"
          aria-hidden="true"
        >
          {initial}
        </div>
      </footer>
    </article>
  );
}

export default function Testimonials({ reviews, totalCount }: TestimonialsProps = {}) {
  const items = reviews && reviews.length > 0 ? reviews : TESTIMONIALS;
  const loopSlides = [...items, ...items];
  const displayCount = totalCount ?? CLINIC.googleReviews.count;
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const swiper = swiperRef.current;
        if (!swiper?.autoplay) return;

        if (entry.isIntersecting) {
          swiper.update();
          swiper.autoplay.start();
        } else {
          swiper.autoplay.stop();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const goToSlide = (index: number) => {
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="scroll-mt-24 overflow-hidden bg-bg-section py-16 md:py-20 lg:py-24"
    >
      <div className="container-site max-w-6xl">
        <AnimateOnScroll className="mb-10 text-center md:mb-14">
          <SectionBadge className="mb-4">Patient Reviews</SectionBadge>
          <h2 className="section-heading font-display">
            Real Results, <span className="gradient-text">Real People</span>
          </h2>
          <p className="section-subtext mx-auto mt-4 max-w-xl font-sans">
            Real stories from patients who chose Body Mechanic for physiotherapy in Lahore,
            from back and neck pain to sports recovery and long-term wellness.
          </p>
        </AnimateOnScroll>

        <div className="min-w-0">
          <Swiper
            modules={[A11y, Autoplay]}
            className="testimonials-swiper !overflow-visible sm:!overflow-hidden"
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={16}
            grabCursor
            speed={700}
            loop
            loopAdditionalSlides={items.length}
            observer
            observeParents
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: "auto",
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: "auto",
                spaceBetween: 18,
              },
            }}
            a11y={{
              prevSlideMessage: "Previous review",
              nextSlideMessage: "Next review",
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setActiveIndex(swiper.realIndex);
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
          >
            {loopSlides.map((t, i) => (
              <SwiperSlide
                key={`${t.name}-${i}`}
                className="testimonials-slide !h-auto !w-full sm:!w-[300px] md:!w-[320px]"
              >
                <TestimonialCard {...t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-6 sm:mt-8">
          <div
            className="flex flex-wrap items-center justify-center gap-1.5 px-1 sm:gap-2"
            role="tablist"
            aria-label="Review slides"
          >
            {items.map((t, i) => (
              <button
                key={`${t.name}-${i}`}
                type="button"
                role="tab"
                aria-selected={activeIndex === i}
                aria-label={`Go to review from ${t.name}`}
                onClick={() => goToSlide(i)}
                className={`testimonials-bullet ${activeIndex === i ? "testimonials-bullet-active" : ""}`}
              />
            ))}
          </div>

          <div className="mt-5 flex justify-center sm:mt-6">
            <Link
              href={CLINIC.googleReviews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-brand-pink/35 bg-brand-pink/10 px-5 py-2.5 font-sans text-sm font-semibold text-brand-pink transition-colors hover:bg-brand-pink hover:text-white"
            >
              View all on Google ({displayCount} reviews)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
