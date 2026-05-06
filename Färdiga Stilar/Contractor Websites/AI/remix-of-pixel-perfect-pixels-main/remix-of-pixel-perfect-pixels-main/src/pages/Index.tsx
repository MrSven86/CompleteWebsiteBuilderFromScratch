import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <Hero />
      <TrustBadges />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
