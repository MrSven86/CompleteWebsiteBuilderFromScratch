import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import painterAtWork from '@/assets/painter-at-work.jpg';
import livingRoom from '@/assets/gallery/living-room.jpg';

const exteriorServices = [
  "Stucco and siding refinishing",
  "Trim, fascia, and soffit painting",
  "Wood repair & replacement",
  "Caulking & sealing",
  "Gutter and downspout painting (optional add-on)",
];

const interiorServices = [
  "Walls, ceilings, baseboards, moldings",
  "Trim detail work",
  "Cabinet painting & refinishing",
  "Drywall repair & finishing",
  "Color consultation to get the palette just right",
];

const ResidentialServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-poppins text-destructive font-semibold text-sm uppercase tracking-wider mb-3">
            Residential Painting
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground font-bold mb-6">
            We Paint Homes
          </h2>
          <p className="font-poppins text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
            Whether you need to refresh a single room or repaint your entire house, we handle residential 
            painting projects of all sizes. Our crews prepare surfaces properly, use quality paints, and leave 
            your home looking its best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-10">
          {/* Exterior House Painting */}
          <div 
            className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg mb-6">
              <img 
                src={painterAtWork} 
                alt="Exterior house painting" 
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-playfair text-2xl text-foreground font-semibold mb-4">
              Exterior House Painting
            </h3>
            <p className="font-poppins text-muted-foreground text-sm mb-4">
              Beautify and protect your home's exterior with our full-service painting solutions.
            </p>
            <ul className="space-y-2">
              {exteriorServices.map((service, index) => (
                <li key={index} className="flex items-start gap-2 font-poppins text-sm text-foreground/80">
                  <span className="text-destructive mt-1">•</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Interior House Painting */}
          <div 
            className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg mb-6">
              <img 
                src={livingRoom} 
                alt="Interior house painting" 
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-playfair text-2xl text-foreground font-semibold mb-4">
              Interior House Painting
            </h3>
            <p className="font-poppins text-muted-foreground text-sm mb-4">
              Interior House Painting: Bring new life to your living spaces with flawless interior finishes.
            </p>
            <ul className="space-y-2">
              {interiorServices.map((service, index) => (
                <li key={index} className="flex items-start gap-2 font-poppins text-sm text-foreground/80">
                  <span className="text-destructive mt-1">•</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* More Services Button */}
        <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button variant="cta" size="lg" className="rounded-none">
            More Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResidentialServices;
