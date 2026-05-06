import { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const credentials = [
  "CA License #[XXXXXX]",
  "Fully Insured",
  "Workers' Comp",
  "Local to [Area]",
];

const LicensedInsured = () => {
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
    <section ref={sectionRef} className="bg-primary py-16 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className={`font-playfair text-2xl md:text-3xl text-white font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Licensed, Insured & Local
        </h2>
        
        {/* Subtitle */}
        <p className="font-poppins text-white/80 text-base max-w-2xl mx-auto mb-8">
          We're a fully licensed California painting contractor with liability insurance and workers' 
          compensation coverage. When you hire us, you're protected.
        </p>

        {/* Credentials */}
        <div className="flex flex-wrap justify-center gap-6">
          {credentials.map((credential) => (
            <div key={credential} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="font-poppins text-white text-sm">
                {credential}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicensedInsured;
