import React from "react";
import LandingHeader from "@/components/layout/LandingHeader/LandingHeader";
import LandingFooter from "@/components/layout/LandingFooter/LandingFooter";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import ServiceStrip from "@/components/organisms/ServiceStrip/ServiceStrip";
import AboutSection from "@/components/organisms/AboutSection/AboutSection";
import ServicesSection from "@/components/organisms/ServicesSection/ServicesSection";
import WhySection from "@/components/organisms/WhySection/WhySection";
import ProcessSection from "@/components/organisms/ProcessSection/ProcessSection";
import CapabilitiesSection from "@/components/organisms/CapabilitiesSection/CapabilitiesSection";
import FutureBanner from "@/components/organisms/FutureBanner/FutureBanner";
import GlobalPresenceSection from "@/components/organisms/GlobalPresenceSection/GlobalPresenceSection";
import CtaSection from "@/components/organisms/CtaSection/CtaSection";
import classes from "./page.module.css";

export const metadata = {
  title: "Zabsol Technologies | IT Services, Software & AI",
  description:
    "Zabsol Technologies builds custom software, AI solutions, cloud systems and data platforms for modern businesses.",
};

export default function HomePage() {
  return (
    <main id="top" className={classes.landingPage}>
      <LandingHeader />
      <HeroSection />
      <ServiceStrip />
      <AboutSection />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <CapabilitiesSection />
      <FutureBanner />
      <GlobalPresenceSection />
      <CtaSection />
      <LandingFooter />
    </main>
  );
}
