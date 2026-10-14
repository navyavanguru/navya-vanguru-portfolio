import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import { DottedSurface } from "@/components/ui/dotted-surface";

const Index = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <SplashScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <>
      <div className="relative z-0">
        <DottedSurface className="opacity-30" />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;


