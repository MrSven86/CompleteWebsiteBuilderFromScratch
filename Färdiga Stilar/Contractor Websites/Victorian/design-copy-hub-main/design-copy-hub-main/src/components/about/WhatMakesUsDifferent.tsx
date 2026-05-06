import { useState, useEffect, useRef } from 'react';
import { UserCheck, Users, Award } from 'lucide-react';

const differentiators = [
  {
    icon: UserCheck,
    title: "Owner On Every Estimate",
    description: "[Owner name] personally meets with you to discuss your project. You're not handed off to a salesperson—you talk directly to the person responsible for the work.",
  },
  {
    icon: Users,
    title: "Same Crew, Start to Finish",
    description: "The crew that starts your job finishes it. We don't shuffle workers around. You'll know who's in your home, and they'll know your project.",
  },
  {
    icon: Award,
    title: "We Stand Behind Our Work",
    description: "If something's not right, we fix it. Period. We're not happy until you're happy with the finished result.",
  },
];

const WhatMakesUsDifferent = () => {
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
    <section ref={sectionRef} className="bg-muted py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-poppins text-destructive font-semibold text-sm uppercase tracking-wider mb-3">
            Why Choose Us
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-foreground font-bold">
            What Makes Us Different
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((item) => (
            <div 
              key={item.title}
              className="bg-background rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-destructive" />
              </div>

              {/* Title */}
              <h3 className="font-poppins text-foreground font-semibold text-lg mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-poppins text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
