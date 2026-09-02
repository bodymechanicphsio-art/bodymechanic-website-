"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import GoogleReviewsBadge from "@/components/ui/GoogleReviewsBadge";
import { whatsappLink } from "@/lib/whatsapp";
import { CLINIC, CLINIC_HOURS } from "@/lib/constants";

const heroBtnClass =
  "inline-flex w-full sm:w-auto sm:min-w-[11rem] items-center justify-center gap-2 min-h-[3.25rem] rounded-full px-6 py-3.5 text-[1.0625rem] font-semibold font-sans transition-all duration-200";

interface HeroSectionProps {
  /** Live Google review summary from getGoogleReviews(). Optional, badge falls back to hardcoded values. */
  googleReviews?: { rating: number; totalCount: number };
}

export default function HeroSection({ googleReviews }: HeroSectionProps = {}) {
  return (
    <section
      id="home"
      className="relative z-[2] overflow-x-clip bg-bg-page pb-[13rem] sm:pb-[12rem] md:pb-[10rem] lg:pb-[11rem]"
    >
      <div className="relative overflow-visible rounded-b-3xl bg-[linear-gradient(145deg,#fdf2f8_0%,#faf5ff_38%,#fdf2f8_72%,#fff7f9_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] sm:rounded-b-[2rem] lg:rounded-b-[2.5rem]">
        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 pt-14 pb-[18rem] text-center sm:px-7 sm:pt-16 sm:pb-[17rem] md:pt-20 md:pb-[13rem] lg:px-9 lg:pt-24 lg:pb-[15rem]">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="mx-auto mb-5 max-w-3xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-text-1"
          >
            Move Better, Feel{" "}
            <span className="gradient-text">Stronger</span>, Live Pain-Free.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.5 }}
            className="mx-auto mb-4 max-w-2xl font-sans text-[clamp(1.0625rem,2.2vw,1.25rem)] leading-relaxed text-text-2"
          >
            At Body Mechanic Physiotherapy Clinic, we believe living pain-free is about more than
            simply treating symptoms. It&apos;s about understanding the root cause of your discomfort
            and helping your body move the way it was designed to.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="mx-auto mb-9 flex max-w-2xl flex-wrap items-center justify-center gap-x-4 gap-y-2 font-sans text-sm text-text-2 sm:text-[0.9375rem]"
            aria-label="Our promise"
          >
            <li className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-pink" />
              <span>Live the life you love, without pain holding you back.</span>
            </li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.5 }}
            className="mb-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`${heroBtnClass} bg-brand-pink text-white shadow-md shadow-brand-pink/25 hover:bg-brand-pink-dim`}
            >
              <MessageCircle size={17} strokeWidth={2.2} aria-hidden="true" />
              Book on WhatsApp
            </a>
            <Link
              href="#services"
              className={`${heroBtnClass} border border-border-default bg-bg-card text-text-1 hover:border-brand-pink hover:text-brand-pink`}
            >
              Explore our services
              <ArrowDown size={16} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.5 }}
            className="flex justify-center"
          >
            <GoogleReviewsBadge
              rating={googleReviews?.rating}
              count={googleReviews?.totalCount}
            />
          </motion.div>
        </div>

        {/* Floating info card: New Patients Welcome + Clinic Timings.
            Half inside hero, half overlapping into the next section. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 translate-y-1/2">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-7 lg:px-9">
            <div className="pointer-events-auto relative z-20 sm:px-2 md:px-5 lg:px-10 xl:px-14">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.45 }}
                className="grid w-full grid-cols-1 items-stretch overflow-hidden rounded-[1.375rem] shadow-[0_4px_6px_-1px_rgba(15,15,25,0.08),0_20px_40px_-12px_rgba(233,30,140,0.18)] md:grid-cols-[9fr_11fr] md:rounded-[2rem] lg:rounded-[2.25rem] [&>*]:min-w-0"
              >
                <div className="flex min-h-full flex-col rounded-t-[1.375rem] bg-gradient-to-br from-[#9a1260] via-[#c41878] to-brand-pink px-6 py-5 sm:px-7 sm:py-6 md:rounded-l-[2rem] md:rounded-tr-none md:rounded-br-none md:px-8 md:py-8 lg:rounded-l-[2.25rem] lg:px-14 lg:py-11">
                  <div className="flex h-full min-h-full flex-1 flex-col">
                    <h2 className="mb-3 font-sans text-[clamp(1.125rem,2.8vw,1.75rem)] font-bold leading-tight text-white md:mb-4">
                      New Patients Welcome
                    </h2>
                    <p className="mb-4 flex-1 font-sans text-[0.9375rem] leading-relaxed text-white/90 md:mb-5 md:text-[1.0625rem]">
                      Book your first assessment in-clinic or via WhatsApp. No referral needed.
                    </p>
                    <div className="mt-auto flex flex-col items-stretch gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
                      <Link
                        href="/book"
                        className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/85 bg-transparent px-6 py-2.5 font-sans text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-pink md:min-h-12 md:px-7 md:text-[1.0625rem]"
                      >
                        Appointment Now
                      </Link>
                      <a
                        href={whatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/85 bg-transparent px-6 py-2.5 font-sans text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-pink md:min-h-12 md:px-7 md:text-[1.0625rem]"
                      >
                        <MessageCircle size={16} strokeWidth={2.2} aria-hidden="true" />
                        Book on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex min-h-full flex-col rounded-b-[1.375rem] border border-border-default border-t-0 bg-bg-card px-6 py-5 sm:px-7 sm:py-6 md:rounded-r-[2rem] md:rounded-tl-none md:rounded-bl-none md:border-l-0 md:border-t md:px-8 md:py-8 lg:rounded-r-[2.25rem] lg:px-14 lg:py-11">
                  <div className="flex h-full min-h-full flex-1 flex-col">
                    <h2 className="mb-3 font-sans text-[clamp(1.125rem,2.8vw,1.75rem)] font-bold leading-tight text-text-1 md:mb-4">
                      Clinic Timings
                    </h2>
                    <ul className="m-0 flex flex-1 flex-col">
                      {CLINIC_HOURS.rows.map((row) => (
                        <li
                          key={row.label}
                          className="flex items-baseline justify-between gap-3 border-b border-dotted border-text-2/35 py-2.5 font-sans text-[0.9375rem] last:border-0 last:pb-0 md:gap-4 md:py-3 md:text-[1.0625rem]"
                        >
                          <span className="min-w-0 shrink pr-1 text-text-2">{row.label}</span>
                          <span className="shrink-0 whitespace-nowrap text-right font-semibold text-text-1">
                            {row.hours}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
