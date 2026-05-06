import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  const phoneNumber = "(310) 397-7294";

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Credentials badge */}
          <p className="text-primary font-medium text-sm mb-6 animate-fade-in">
            Licensed, bonded & insured • A+ BBB rated • Free estimates
          </p>

          {/* Main headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Commercial Painting &<br />
            Building Maintenance in<br />
            Santa Monica Since 1973
          </h1>

          {/* Subtext */}
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Get reliable commercial painting services from Santa Monica's longest-serving
            commercial contractor with nearly 50 years of proven expertise protecting your
            property.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a
              href={`tel:${phoneNumber.replace(/\D/g, "")}`}
              className="btn-cta-primary hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {phoneNumber}
            </a>
            <a 
              href="#contact" 
              className="btn-cta-outline hover:scale-105 hover:shadow-xl transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Your Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
