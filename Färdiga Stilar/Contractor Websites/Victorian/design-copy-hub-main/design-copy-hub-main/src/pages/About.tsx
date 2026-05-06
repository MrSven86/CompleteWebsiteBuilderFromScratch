import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import AboutHero from "@/components/about/AboutHero";
import MeetTheOwner from "@/components/about/MeetTheOwner";
import WhatMakesUsDifferent from "@/components/about/WhatMakesUsDifferent";
import AboutReviews from "@/components/about/AboutReviews";
import LicensedInsured from "@/components/about/LicensedInsured";
import ServiceArea from "@/components/about/ServiceArea";
import AboutCTA from "@/components/about/AboutCTA";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <Navigation />
      <AboutHero />
      <MeetTheOwner />
      <WhatMakesUsDifferent />
      <AboutReviews />
      <LicensedInsured />
      <ServiceArea />
      <AboutCTA />
      <Footer />
    </div>
  );
};

export default About;
