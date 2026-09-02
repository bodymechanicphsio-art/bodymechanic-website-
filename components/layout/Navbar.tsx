"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";
import { NAV_LINKS, CLINIC } from "@/lib/constants";

type ActiveSection = "home" | "services" | "contact";

function resolveActiveLink(
  href: string,
  pathname: string,
  activeSection: ActiveSection
): boolean {
  if (href === "/about") return pathname === "/about";
  if (href === "/services") {
    return (
      pathname === "/services" ||
      pathname.startsWith("/services/") ||
      (pathname === "/" && activeSection === "services")
    );
  }
  if (href === "/#contact") {
    return pathname === "/book" || (pathname === "/" && activeSection === "contact");
  }
  if (href === "/") {
    return pathname === "/" && activeSection === "home";
  }
  return false;
}

function navLinkClasses(isActive: boolean, variant: "desktop" | "mobile") {
  if (variant === "desktop") {
    return `relative z-10 rounded-lg px-4 py-2.5 font-sans text-base font-medium transition-all duration-200 lg:px-5 ${
      isActive
        ? "bg-brand-pink font-semibold text-white shadow-[0_4px_14px_-4px_rgba(233,30,140,0.45)]"
        : "text-text-2 hover:bg-brand-pink/10 hover:text-brand-pink"
    }`;
  }

  return `w-full max-w-xs rounded-lg px-5 py-3.5 text-base font-medium font-sans transition-colors ${
    isActive
      ? "bg-brand-pink font-semibold text-white shadow-[0_4px_14px_-4px_rgba(233,30,140,0.45)]"
      : "text-text-2 hover:bg-brand-pink/10 hover:text-brand-pink"
  }`;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<ActiveSection>("home");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds: ActiveSection[] = ["home", "services", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-42% 0px -48% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.dataset.mobileMenuOpen = "true";
    } else {
      document.body.style.overflow = "";
      delete document.body.dataset.mobileMenuOpen;
    }
    return () => {
      document.body.style.overflow = "";
      delete document.body.dataset.mobileMenuOpen;
    };
  }, [mobileOpen]);

  const navLinkClass = (href: string) =>
    navLinkClasses(resolveActiveLink(href, pathname, activeSection), "desktop");

  return (
    <header
      className={`site-header sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_8px_30px_-12px_rgba(15,15,25,0.12)]" : ""
      }`}
    >
      <nav
        className={`border-b transition-colors duration-300 ${
          isScrolled || !isHome ? "bg-bg-card/98 backdrop-blur-xl border-border-default" : "bg-bg-card border-border-default/80"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-5 py-1 sm:h-[4.75rem] sm:px-7 lg:h-20 lg:gap-10 lg:px-9">
          <BrandLogo size="sm" />

          <div className="hidden md:flex flex-1 items-center justify-center gap-0.5 lg:gap-1">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 ml-auto shrink-0">
            <a
              href={`tel:${CLINIC.phoneTel}`}
              className="hidden lg:inline-flex items-center gap-2.5 text-text-1 hover:text-brand-pink transition-colors font-sans"
            >
              <span className="w-10 h-10 rounded-full bg-brand-pink/15 border border-brand-pink/30 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-brand-pink" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="text-base font-semibold whitespace-nowrap">{CLINIC.phone}</span>
            </a>

            <Link
              href="/book"
              className="hidden sm:inline-flex min-h-[2.875rem] items-center justify-center rounded-full bg-brand-pink px-6 py-2.5 font-sans text-base font-semibold text-white transition-colors hover:bg-brand-pink-dim"
            >
              Get Appointment
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-text-1 hover:bg-bg-hover transition-colors"
            >
              {mobileOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm top-16 sm:top-[4.75rem] lg:top-20"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed left-0 right-0 z-[60] max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-border-default bg-bg-card shadow-xl top-16 sm:top-[4.75rem] lg:top-20"
            >
              <div className="container-site flex flex-col items-center gap-2 py-6 pb-28 text-center">
                {NAV_LINKS.map((link) => {
                  const isActive = resolveActiveLink(link.href, pathname, activeSection);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={navLinkClasses(isActive, "mobile")}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <a
                  href={`tel:${CLINIC.phoneTel}`}
                  className="mt-3 flex w-full max-w-xs items-center justify-center gap-3 rounded-xl border border-border-default px-5 py-3.5 font-sans text-base text-text-1"
                >
                  <Phone size={18} className="shrink-0 text-brand-pink" strokeWidth={1.75} />
                  {CLINIC.phone}
                </a>

                <Link
                  href="/book"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 inline-flex min-h-[3.25rem] w-full max-w-xs items-center justify-center rounded-full bg-brand-pink px-6 py-3 font-sans text-base font-semibold text-white transition-colors hover:bg-brand-pink-dim"
                >
                  Get Appointment
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
