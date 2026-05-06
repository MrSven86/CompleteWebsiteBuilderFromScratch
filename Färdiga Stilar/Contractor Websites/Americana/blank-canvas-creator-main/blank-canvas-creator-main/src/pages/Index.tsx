import AboutSection from "@/components/AboutSection";
import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import ReviewSection from "@/components/ReviewSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import MeetOwnerSection from "@/components/MeetOwnerSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ReviewSection />
      <MeetOwnerSection />
      <ServiceAreasSection />
      <WhyChooseUsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
