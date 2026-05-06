import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectsGrid from "@/components/ProjectsGrid";
import QualityBanner from "@/components/QualityBanner";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SafetyCards from "@/components/SafetyCards";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedProject />
      <ProjectsGrid />
      <QualityBanner />
      <ServicesSection />
      <AboutSection />
      <SafetyCards />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
