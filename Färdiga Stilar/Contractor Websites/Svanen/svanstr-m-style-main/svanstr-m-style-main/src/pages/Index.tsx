import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import JourSection from "@/components/JourSection";
import ServicesSection from "@/components/ServicesSection";
import CertificatesSection from "@/components/CertificatesSection";
import CtaSection from "@/components/CtaSection";
import AboutSection from "@/components/AboutSection";
import ContactFormSection from "@/components/ContactFormSection";
import SeoTextSection from "@/components/SeoTextSection";
import ArticlesSection from "@/components/ArticlesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <JourSection />
      <ServicesSection />
      <CertificatesSection />
      <CtaSection />
      <AboutSection />
      <ContactFormSection />
      <SeoTextSection />
      <ArticlesSection />
      <Footer />
    </div>
  );
};

export default Index;
