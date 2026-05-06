import TopBar from "@/components/TopBar";
import HeaderBar from "@/components/HeaderBar";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import WhyFTRSection from "@/components/WhyFTRSection";
import CTASection from "@/components/CTASection";
import ChecklistBar from "@/components/ChecklistBar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  // Force preview refresh
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <HeaderBar />
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <WhyFTRSection />
      <CTASection />
      <ChecklistBar />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
