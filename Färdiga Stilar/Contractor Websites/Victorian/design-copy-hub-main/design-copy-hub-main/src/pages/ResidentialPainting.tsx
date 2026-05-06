import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ResidentialHero from "@/components/residential/ResidentialHero";
import WePaintHomes from "@/components/residential/WePaintHomes";
import InteriorPainting from "@/components/residential/InteriorPainting";
import LocalPaintingCompany from "@/components/residential/LocalPaintingCompany";
import ResidentialTestimonials from "@/components/residential/ResidentialTestimonials";
import WhyChooseUs from "@/components/residential/WhyChooseUs";
import ResidentialContactForm from "@/components/residential/ResidentialContactForm";

const ResidentialPainting = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <Navigation />
      <ResidentialHero />
      <WePaintHomes />
      <InteriorPainting />
      <LocalPaintingCompany />
      <ResidentialTestimonials />
      <WhyChooseUs />
      <ResidentialContactForm />
      <Footer />
    </div>
  );
};

export default ResidentialPainting;
