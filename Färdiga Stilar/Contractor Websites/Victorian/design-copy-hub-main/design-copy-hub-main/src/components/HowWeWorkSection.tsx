import { useState, useEffect, useRef } from 'react';
import consultationImg from '@/assets/process/consultation.jpg';
import planningImg from '@/assets/process/planning.jpg';
import finalResultImg from '@/assets/process/final-result.jpg';

const processSteps = [
  {
    title: 'Consultation',
    image: consultationImg,
    description: "The first step in the process is getting a free estimate. Our Southern California painters will come to your home or business and do a thorough inspection.",
  },
  {
    title: 'Planning',
    image: planningImg,
    description: "We'll come up with an outline for your painting project including color hues, prep work, cleanup, the products we'll use, and more.",
  },
  {
    title: 'Final Result',
    image: finalResultImg,
    description: "The last step is for you to sit back, relax, and enjoy your new paint job! We guarantee our work will be high-quality and detailed to match your needs.",
  },
];

const HowWeWorkSection = () => {
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
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-poppins text-primary font-semibold text-lg mb-3">
            How We Work
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground font-bold mb-6 max-w-3xl">
            Let Us Take Care of Your Painting Project!
          </h2>
          <p className="font-poppins text-muted-foreground text-base md:text-lg leading-relaxed max-w-4xl">
            Win Custom Painting Inc. is the area's local & trusted painting contractor.
            We specialize in high-quality interior & exterior house painting. Call today and make your painting project a 'win'!
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {processSteps.map((step, index) => (
            <div 
              key={step.title}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Title */}
              <h3 className="font-playfair text-2xl md:text-[1.75rem] text-primary mb-5 text-center">
                {step.title}
              </h3>
              
              {/* Image with decorative brush stroke */}
              <div className="relative mb-6">
                {/* Decorative brush stroke behind image */}
                <div 
                  className="absolute -right-4 -top-4 w-32 h-32 opacity-30 z-0"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold)/0.3) 100%)',
                    borderRadius: '60% 40% 70% 30% / 40% 50% 50% 60%',
                    transform: 'rotate(-15deg)',
                  }}
                />
                
                <div className="relative z-10 overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="border-t-2 border-gold/40 mb-5"></div>
              
              {/* Description */}
              <p className="font-poppins text-muted-foreground text-sm md:text-base leading-relaxed text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
