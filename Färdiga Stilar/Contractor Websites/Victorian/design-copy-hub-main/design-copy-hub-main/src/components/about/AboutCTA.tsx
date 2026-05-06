import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const AboutCTA = () => {
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
    <section ref={sectionRef} className="bg-destructive py-16 px-4 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className={`font-playfair text-2xl md:text-3xl text-white font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Ready to Get Started?
        </h2>
        
        {/* Subtitle */}
        <p className="font-poppins text-white/90 text-base max-w-xl mx-auto mb-8">
          Get a free, no-obligation estimate for your painting project. We'll come 
          out, take a look, and give you an honest quote—no pressure, no gimmicks.
        </p>

        {/* CTA Button */}
        <div>
          <Button 
            variant="outline" 
            className="bg-white text-foreground hover:bg-white/90 font-poppins font-semibold px-8 h-12 border-0"
          >
            Get Free Estimate
          </Button>
        </div>

        {/* Phone */}
        <p className="font-poppins text-white/80 text-sm mt-6">
          Or call us directly:{' '}
          <a href="tel:XXXXXXXXXX" className="text-white font-semibold hover:underline">
            (XXX) XXX-XXXX
          </a>
        </p>
      </div>
    </section>
  );
};

export default AboutCTA;
