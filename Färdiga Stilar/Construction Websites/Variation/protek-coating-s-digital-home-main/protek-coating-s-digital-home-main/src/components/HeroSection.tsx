import { Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center justify-start overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 section-padding max-w-7xl mx-auto w-full">
        <p className="text-primary-foreground/80 font-heading text-sm md:text-base uppercase tracking-widest mb-2">
          Coating Specialist in Bakersfield
        </p>
        <h1 className="text-primary-foreground font-heading font-black text-4xl md:text-6xl lg:text-7xl uppercase leading-tight max-w-2xl">
          Over 30 Years of{" "}
          <span className="text-primary">Experience</span>
        </h1>
        <div className="flex items-center gap-2 mt-4">
          <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">PAINTED PRO</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-primary-foreground/70 text-sm">450 reviews</span>
        </div>
        <p className="text-primary-foreground/80 mt-6 max-w-xl text-sm md:text-base leading-relaxed">
          Providing industrial painting, coating and sandblasting for the California coating industry. Family owned and operated since 1991 we take pride in our quality work and our safety protocols.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
