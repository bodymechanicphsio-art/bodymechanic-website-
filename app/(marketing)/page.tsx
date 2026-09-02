import { createPageMetadata } from "@/lib/seo";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechniquesSection from "@/components/sections/TechniquesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import TeamSection from "@/components/sections/TeamSection";
import Testimonials from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/ContactSection";
import SectionBadge from "@/components/ui/SectionBadge";
import FaqAccordionList from "@/components/ui/FaqAccordionList";
import { HOME_FAQ_ITEMS } from "@/lib/constants";
import { getGoogleReviews } from "@/lib/google-reviews";

export const metadata = createPageMetadata({
  title: "Body Mechanic Physiotherapy Clinic | Lahore",
  description:
    "Expert physiotherapy clinic in Lahore, Pakistan. Sports injury rehab, chronic pain management, dry needling, and wellness care.",
  path: "/",
});

export default async function HomePage() {
  const googleReviews = await getGoogleReviews();

  return (
    <>
      <HeroSection googleReviews={{ rating: googleReviews.rating, totalCount: googleReviews.totalCount }} />
      <WhyChooseUs />
      <ServicesSection />
      <TechniquesSection />
      <HowItWorks />
      <TeamSection />
      <Testimonials reviews={googleReviews.reviews} totalCount={googleReviews.totalCount} />
      <section id="faqs" className="scroll-mt-24 bg-bg-page py-16 md:py-20 lg:py-24">
        <div className="container-site max-w-3xl">
          <div className="mb-10 text-center">
            <SectionBadge className="mb-4">Common Questions</SectionBadge>
            <h2 className="section-heading font-display mb-4">
              Everything You <span className="gradient-text">Need to Know</span>
            </h2>
            <p className="section-subtext font-sans">
              Quick answers to the questions we hear most from new patients.
            </p>
          </div>
          <FaqAccordionList items={HOME_FAQ_ITEMS} />
        </div>
      </section>
      <ContactSection />
    </>
  );
}
