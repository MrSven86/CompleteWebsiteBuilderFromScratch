import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";
import ValuesCards from "./ValuesCards";

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Hero area */}
      <div className="relative h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 container">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="label-uppercase text-primary mb-4">Decades of Industry Experience</p>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              Full Service
              <br />
              Wall & Ceiling
              <br />
              Contractor
            </h1>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-full label-uppercase hover:bg-primary/90 transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Values cards floating between hero and next section */}
      <div className="relative z-20 -mt-24 mb-[-6rem]">
        <div className="container max-w-5xl">
          <ValuesCards />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
