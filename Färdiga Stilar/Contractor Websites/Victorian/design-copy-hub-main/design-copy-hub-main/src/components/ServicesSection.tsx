import { useEffect, useRef, useState } from 'react';
import residentialIcon from "@/assets/icons/residential.png";
import apartmentIcon from "@/assets/icons/apartment.png";
import industrialIcon from "@/assets/icons/industrial.png";

const services = [
  {
    icon: residentialIcon,
    title: "Residential Painting",
    description: "Win Custom Painting Inc. will exceed your expectations for residential painting with our quality and professionalism when you need house painting in Southern California."
  },
  {
    icon: apartmentIcon,
    title: "Apartment Painting",
    description: "We offer a complete range of professional apartment painting services for landlords and tenants. We take pride in using only the highest quality products on all of our projects."
  },
  {
    icon: industrialIcon,
    title: "Industrial Painting",
    description: "Every paint job includes all prep work, such as cleaning, priming, and minor repairs. We can paint everything from walls and cabinets to door frames for any building or business."
  }
];

const ServicesSection = () => {
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
    <section ref={sectionRef} className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-poppins font-bold text-accent tracking-[0.1em] text-lg mb-4">
            Westfhal House Painters
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-navy mb-6">
            A New Look for Your Home
          </h2>
          <p className="font-poppins font-light text-navy text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            At Westfhal House Painters, we can help you with a variety of house painting
            and related projects designed to make your space look its best, inside and out.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`text-center group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + (index * 150)}ms` }}
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Title */}
              <h3 className="font-playfair text-2xl text-primary mb-4 transition-colors duration-300 group-hover:text-primary/80">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="font-poppins font-light text-muted-foreground text-sm leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
