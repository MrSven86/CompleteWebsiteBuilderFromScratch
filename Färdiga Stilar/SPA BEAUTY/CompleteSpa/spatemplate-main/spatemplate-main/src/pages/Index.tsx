import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TratamientosSection from "@/components/TratamientosSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";
import InstagramSection from "@/components/InstagramSection";
import StaffSection from "@/components/StaffSection";
import GetStartedSection from "@/components/GetStartedSection";
import FillerSection from "@/components/FillerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <TratamientosSection />
      <FeaturesSection />
      <TestimonialSection />
      <InstagramSection />
      <StaffSection />
      <GetStartedSection />
      <FillerSection />
      <Footer />
    </div>
  );
};

export default Index;
