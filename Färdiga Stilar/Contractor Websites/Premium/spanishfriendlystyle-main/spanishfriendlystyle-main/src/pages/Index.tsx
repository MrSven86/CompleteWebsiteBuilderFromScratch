import { Navbar, HeroSection } from "@/components/HeroSection";
import BrandsBar from "@/components/BrandsBar";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import ProjectGallery from "@/components/ProjectGallery";
import AboutSection from "@/components/AboutSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BrandsBar />
      <TrustSection />
      <ServicesSection />
      <ReviewsSection />
      <ProjectGallery />
      <AboutSection />
      <ServiceAreasSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
