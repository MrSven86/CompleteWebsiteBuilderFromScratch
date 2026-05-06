import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import RecentWorkSection from "@/components/RecentWorkSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <RecentWorkSection />
      <HowWeWorkSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
