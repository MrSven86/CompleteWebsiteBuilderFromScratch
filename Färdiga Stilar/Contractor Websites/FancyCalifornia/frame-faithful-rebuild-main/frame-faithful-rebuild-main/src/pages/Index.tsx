import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const Index = () => {
  const { isScrolled } = useScrollPosition();

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <TopBar hidden={isScrolled} />
      
      {/* Navigation */}
      <Navbar isScrolled={isScrolled} />
      
      {/* Spacer for fixed navbar */}
      {isScrolled && <div className="h-24" />}
      
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Why Choose Us Section */}
      <WhyChooseSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
