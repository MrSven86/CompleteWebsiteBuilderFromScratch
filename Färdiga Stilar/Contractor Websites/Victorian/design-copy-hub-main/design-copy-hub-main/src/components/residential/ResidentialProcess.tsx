import { useState, useEffect, useRef } from 'react';

const processSteps = [
  {
    number: "1",
    title: "Request an Estimate",
    description: "Call us or fill out the form below. We'll schedule a time to see your project—usually within a day or two.",
  },
  {
    number: "2",
    title: "Get Your Quote",
    description: "We'll walk through the job with you, discuss colors and options, and provide a detailed written quote—typically within 48 hours.",
  },
  {
    number: "3",
    title: "We Paint, You Enjoy",
    description: "Our crew handles everything—prep, painting, and cleanup. We do a final walkthrough with you to make sure you're happy.",
  },
];

const ResidentialProcess = () => {
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-poppins text-destructive font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-foreground font-bold mb-4">
            Getting Your Home Painted Is Simple
          </h2>
          <p className="font-poppins text-muted-foreground text-base max-w-2xl mx-auto">
            We make the process easy. You'll know exactly what to expect at every step.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {processSteps.map((step, index) => (
            <div 
              key={step.number}
              className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Number Circle */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-destructive flex items-center justify-center shadow-lg">
                  <span className="font-playfair text-2xl text-white font-bold">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-playfair text-xl md:text-2xl text-foreground font-semibold mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-poppins text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResidentialProcess;
