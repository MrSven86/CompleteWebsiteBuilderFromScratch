import Header from "@/components/Header";
import HeroSection2 from "@/components/HeroSection2";
import ServiceIntroSection from "@/components/ServiceIntroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-[56px] lg:pt-[88px]">
        <HeroSection2 />
      </div>
      <ServiceIntroSection />
      <ServicesSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
