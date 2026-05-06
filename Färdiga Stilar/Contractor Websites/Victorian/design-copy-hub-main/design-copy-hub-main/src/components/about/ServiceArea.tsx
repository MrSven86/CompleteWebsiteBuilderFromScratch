import { useState, useEffect, useRef } from 'react';

const cities = [
  "[City 1]",
  "[City 2]",
  "[City 3]",
  "[City 4]",
  "[City 5]",
  "[City 6]",
];

const ServiceArea = () => {
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
    <section ref={sectionRef} className="bg-background py-16 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className={`font-playfair text-2xl md:text-3xl text-foreground font-bold mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Proudly Serving [Region]
        </h2>

        {/* Cities List */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
          {cities.map((city, index) => (
            <span 
              key={city}
              className="font-poppins text-muted-foreground text-base"
            >
              {index > 0 && <span className="mr-3">•</span>}
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
