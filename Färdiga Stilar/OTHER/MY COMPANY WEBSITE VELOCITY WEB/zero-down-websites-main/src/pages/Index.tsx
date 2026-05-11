import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ExamplesSection from "@/components/sections/ExamplesSection";
import ReviewSection from "@/components/sections/ReviewSection";
import SmartFormSection from "@/components/sections/SmartFormSection";
import PricingSection from "@/components/sections/PricingSection";
import GatewaySection from "@/components/sections/GatewaySection";
import ContactSection from "@/components/sections/ContactSection";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "Diseño Web Buenos Aires | Sitios Web Profesionales para tu Negocio — Velocity Web",
    description: "Agencia de diseño web en Buenos Aires. Sitios web profesionales diseñados a medida para tu negocio, listos en 72 horas. Sin costo inicial. Con equipo local en Buenos Aires.",
  });

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <ExamplesSection />
      <ReviewSection />
      <SmartFormSection />
      <PricingSection />
      <GatewaySection />
      <ContactSection />
    </main>
  );
};

export default Index;
