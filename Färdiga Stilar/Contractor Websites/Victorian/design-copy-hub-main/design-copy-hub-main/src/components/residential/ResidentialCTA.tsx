import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const benefits = [
  "Free estimate, no obligation",
  "We'll call to confirm, not sell",
  "Your info stays private",
];

const ResidentialCTA = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section ref={sectionRef} className="bg-primary py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div 
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            {/* Badge */}
            <p className="font-poppins text-destructive font-semibold text-sm uppercase tracking-wider mb-3">
              Get Started
            </p>

            {/* Heading */}
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6">
              Get Your Free Painting Estimate
            </h2>
            
            {/* Subtitle */}
            <p className="font-poppins text-white/80 text-base leading-relaxed mb-8">
              Tell us about your project and we'll get back to you within 24 hours to 
              schedule a time to see your home. No pressure, no obligation.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit}
                  className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <Check className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="font-poppins text-white/90 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Phone CTA */}
            <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="font-poppins text-white/70 text-sm mb-2">Prefer to talk now?</p>
              <a 
                href="tel:2035652316" 
                className="font-playfair text-2xl md:text-3xl text-white font-bold hover:text-gold-light transition-colors"
              >
                (203) 565-2316
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div 
            className={`bg-white rounded-lg shadow-2xl p-6 md:p-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <h3 className="font-playfair text-xl md:text-2xl text-foreground font-bold mb-2 text-center">
              Request Free Estimate
            </h3>
            <p className="font-poppins text-muted-foreground text-sm mb-6 text-center">
              We respond within 24 hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-poppins text-xs font-medium text-foreground mb-1.5 block">
                    Name *
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Name" 
                    required
                    className="h-10 border-gray-200 bg-white px-3 font-poppins text-sm"
                  />
                </div>
                <div>
                  <label className="font-poppins text-xs font-medium text-foreground mb-1.5 block">
                    Phone *
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="Phone" 
                    required
                    className="h-10 border-gray-200 bg-white px-3 font-poppins text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="font-poppins text-xs font-medium text-foreground mb-1.5 block">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="h-10 border-gray-200 bg-white px-3 font-poppins text-sm"
                />
              </div>

              <div>
                <label className="font-poppins text-xs font-medium text-foreground mb-1.5 block">
                  What do you need painted?
                </label>
                <Select>
                  <SelectTrigger className="h-10 border-gray-200 bg-white px-3 font-poppins text-sm">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="interior">Interior Painting</SelectItem>
                    <SelectItem value="exterior">Exterior Painting</SelectItem>
                    <SelectItem value="both">Both Interior & Exterior</SelectItem>
                    <SelectItem value="cabinet">Cabinet Refinishing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="font-poppins text-xs font-medium text-foreground mb-1.5 block">
                  Anything else we should know?
                </label>
                <Textarea 
                  placeholder="Number of rooms, specific areas, timing, etc." 
                  className="min-h-[80px] border-gray-200 bg-white px-3 py-2 font-poppins text-sm resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-destructive hover:bg-destructive/90 text-white font-poppins font-semibold text-sm h-11 rounded-md"
              >
                Request Free Estimate
              </Button>

              <p className="font-poppins text-xs text-muted-foreground text-center">
                By submitting, you agree to receive a call or text regarding your estimate.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialCTA;
