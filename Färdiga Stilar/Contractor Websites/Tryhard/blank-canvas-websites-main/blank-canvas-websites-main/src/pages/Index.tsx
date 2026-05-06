import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ResidentialSection from "@/components/ResidentialSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import logoPlaceholder from "@/assets/logo-placeholder.svg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Logo - spans both TopBar and NavBar */}
      <div className="absolute left-[49px] top-[8px] z-30">
        <img src={logoPlaceholder} alt="Company Logo" className="w-[296px] h-auto" />
      </div>

      <TopBar />
      <NavBar />
      <HeroSection />
      <ResidentialSection />
      <ServicesSection />
      <ReviewsSection />
      <GallerySection />
      <AboutSection />
      <ServiceAreasSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
