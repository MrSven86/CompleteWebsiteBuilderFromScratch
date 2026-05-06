import { ArrowRight } from "lucide-react";
import painterImage from "@/assets/painter.png";

const Hero = () => {
  return (
    <section className="hero-gradient relative overflow-visible" style={{ minHeight: '450px', paddingBottom: '140px' }}>
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-5 tracking-tight">
                Your Trusted
                <br />
                Partner for Home
                <br />
                Clean Solutions
              </h1>
              
              <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-[500px] leading-relaxed">
                We take pride in our attention to detail and commitment to
                customer satisfaction. Whether you require regular maintenance.
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <button className="btn-primary flex items-center gap-2 text-sm py-3 px-6">
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <a href="#" className="link-underline text-white font-medium hover:text-primary transition-colors text-sm">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Painter Image */}
      <img
        src={painterImage}
        alt="Professional Painter"
        className="absolute hidden md:block pointer-events-none z-20"
        style={{ 
          height: '650px',
          width: 'auto',
          right: '200px',
          bottom: '-80px'
        }}
      />
    </section>
  );
};

export default Hero;
