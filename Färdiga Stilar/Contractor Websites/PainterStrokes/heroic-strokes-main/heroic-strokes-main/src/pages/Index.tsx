import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrushStrokeDivider from "@/components/BrushStrokeDivider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      
      <AboutSection />
      
      {/* Transition to dark services */}
      <BrushStrokeDivider variant="white-to-black" />
      
      <ServicesSection />
      
      
      <GallerySection />
      
      {/* Transition from gallery to white */}
      <BrushStrokeDivider variant="black-to-white" />
      
      <TestimonialsSection />
      <ContactSection />
      
      {/* Brush stroke in footer */}
      <BrushStrokeDivider variant="white-to-black" flip />
      
      <Footer />
    </div>
  );
};

export default Index;
