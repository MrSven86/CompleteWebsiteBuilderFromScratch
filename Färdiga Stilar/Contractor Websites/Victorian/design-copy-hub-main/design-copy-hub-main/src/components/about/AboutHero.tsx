import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import houseExterior from '@/assets/gallery/house-exterior.jpg';

const stats = [
  { value: "[XX]+", label: "Years in Business" },
  { value: "[XXX]+", label: "Homes Painted" },
  { value: "[X.X]", label: "Star Rating" },
  { value: "[XX]+", label: "Reviews" },
];

const AboutHero = () => {
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
    <section ref={sectionRef} className="relative">
      {/* Hero Image Background */}
      <div className="relative h-[400px] md:h-[450px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${houseExterior})` }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center px-4">
          <div className="max-w-7xl mx-auto w-full">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/80 text-sm font-poppins mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">About Us</span>
            </nav>

            {/* Content */}
            <div className={`max-w-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="font-playfair text-4xl md:text-5xl text-white font-bold mb-4">
                About Our Company
              </h1>
              <p className="font-poppins text-white/90 text-base md:text-lg leading-relaxed mb-8">
                [Company Name] has been painting homes in [Service Area] since [YEAR]. 
                We're a local, family-run business that treats every home like it's our own.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="destructive" 
                  className="font-poppins font-semibold px-6 h-11"
                >
                  Get a Free Estimate
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white text-foreground hover:bg-white/90 font-poppins font-medium px-6 h-11 border-0"
                >
                  Call (XXX) XXX-XXXX
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-primary py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-playfair text-3xl md:text-4xl text-white font-bold mb-1">
                {stat.value}
              </p>
              <p className="font-poppins text-white/80 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
