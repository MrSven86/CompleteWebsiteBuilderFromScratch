import { useEffect, useRef, useState } from 'react';
import livingRoom from '@/assets/gallery/living-room.jpg';
import bathroom from '@/assets/gallery/bathroom.jpg';
import houseExterior from '@/assets/gallery/house-exterior.jpg';
import garageHome from '@/assets/gallery/garage-home.jpg';
import modernVilla1 from '@/assets/gallery/modern-villa-1.jpg';
import modernVilla2 from '@/assets/gallery/modern-villa-2.jpg';

const galleryImages = [
  { src: livingRoom, alt: 'Modern living room with navy blue walls' },
  { src: bathroom, alt: 'Elegant bathroom with double vanity' },
  { src: houseExterior, alt: 'Craftsman style home exterior at dusk' },
  { src: garageHome, alt: 'Suburban home with two-car garage' },
  { src: modernVilla1, alt: 'Modern white villa with pool' },
  { src: modernVilla2, alt: 'Contemporary home with infinity pool' },
];

const RecentWorkSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 
          className={`font-playfair text-4xl md:text-5xl text-foreground mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          Our Recent Work
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
              style={{ transitionDelay: `${200 + (index * 100)}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-poppins font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorkSection;
