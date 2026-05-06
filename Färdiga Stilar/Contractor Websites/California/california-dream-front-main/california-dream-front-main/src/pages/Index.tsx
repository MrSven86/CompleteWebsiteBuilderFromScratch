import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CraftedSection from "@/components/CraftedSection";
import NeedHelpSection from "@/components/NeedHelpSection";
import ProjectsSection from "@/components/ProjectsSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTABanner from "@/components/CTABanner";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import WhatsAppSection from "@/components/WhatsAppSection";
import MapSection from "@/components/MapSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CraftedSection />
      <NeedHelpSection />
      <ProjectsSection />
      <ReviewsSection />
      <CTABanner />
      <AboutSection />
      <FAQSection />
      <WhatsAppSection />
      <MapSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
