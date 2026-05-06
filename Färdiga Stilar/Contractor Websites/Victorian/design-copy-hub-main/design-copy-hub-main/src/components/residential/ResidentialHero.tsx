import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import heroImage from '@/assets/hero-interior.jpg';

const ResidentialHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[520px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Residential painting services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
        {/* Breadcrumb */}
        <nav 
          className={`mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2 text-sm text-white/80 font-poppins">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li className="text-white/60">›</li>
            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
            <li className="text-white/60">›</li>
            <li className="text-white">Residential</li>
          </ol>
        </nav>

        {/* Title */}
        <h1 
          className={`font-playfair text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 max-w-2xl transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Residential Painting Services
        </h1>

        {/* Subtitle */}
        <p 
          className={`font-poppins text-white/90 text-base md:text-lg max-w-xl mb-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Professional house painting for homeowners in Southern California.
          Interior and exterior. Licensed, insured, and done right.
        </p>

        {/* Badge */}
        <p 
          className={`font-poppins text-gold-light text-sm mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          ★ Licensed & Insured
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <Button variant="cta" size="lg" className="rounded-none">
            Get a Free Estimate
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-none bg-white text-foreground border-white hover:bg-white/90"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call (203) 565-2316
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResidentialHero;
