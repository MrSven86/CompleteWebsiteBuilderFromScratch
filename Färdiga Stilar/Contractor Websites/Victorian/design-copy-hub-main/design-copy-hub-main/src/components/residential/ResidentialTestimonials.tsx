import { useState, useEffect, useRef } from 'react';
import { Star, Shield, Clock, Palette } from 'lucide-react';

const trustFeatures = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "CA License #2324242. Full liability coverage and workers' comp.",
  },
  {
    icon: Clock,
    title: "10+ Years in California",
    description: "We know local homes and what paint holds up in this climate.",
  },
  {
    icon: Palette,
    title: "Premium Paints",
    description: "We use Sherwin-Williams / Benjamin Moore for lasting results.",
  },
];

const ResidentialTestimonials = () => {
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
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Review */}
          <div 
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-poppins text-white text-lg md:text-xl leading-relaxed mb-6 italic">
              "ACTUAL VERIFIED REVIEW - Example: They painted our entire interior - living room, bedrooms, 
              and hallways. The crew was professional, showed up on time every day, and the finished result 
              looks amazing. Would definitely hire again.!!"
            </blockquote>

            {/* Author */}
            <div className="mb-2">
              <p className="font-poppins text-white font-semibold">[Customer Name]</p>
              <p className="font-poppins text-white/70 text-sm">[City] · Via Google Reviews</p>
            </div>
          </div>

          {/* Right Column - Trust Features */}
          <div 
            className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <h3 className="font-playfair text-2xl md:text-3xl text-white font-bold mb-8">
              Why Trust Us With Your Home
            </h3>

            <div className="space-y-6">
              {trustFeatures.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins text-white font-semibold mb-1">
                      {feature.title}
                    </h4>
                    <p className="font-poppins text-white/70 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialTestimonials;
