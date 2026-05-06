import { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const benefits = [
  {
    title: "Local expertise",
    description: "Crews who understand California weather and building codes.",
  },
  {
    title: "Proven reputation",
    description: "Thousands of homeowners served with durable results.",
  },
  {
    title: "Employee-owned commitment",
    description: "Our team takes pride in treating your home like our own.",
  },
];

const WhyChooseUs = () => {
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
        <div className="max-w-3xl">
          {/* Header */}
          <div className={`mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-playfair text-3xl md:text-4xl text-foreground font-bold mb-6">
              Why Homeowners Choose Us
            </h2>
            <p className="font-poppins text-muted-foreground text-base leading-relaxed">
              For over 10 years, the Westfhal name has stood for craftsmanship, reliability, 
              and "Always Good Work." Today, our home exterior division brings that same tradition 
              to door replacement across the Carolinas.
            </p>
          </div>

          {/* Benefits List */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className={`flex items-start gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-destructive" />
                </div>
                <div>
                  <span className="font-poppins text-foreground font-semibold">
                    {benefit.title}:
                  </span>{" "}
                  <span className="font-poppins text-muted-foreground">
                    {benefit.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
