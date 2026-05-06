import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import houseExterior from '@/assets/gallery/house-exterior.jpg';

const ContactSection = () => {
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
    <section ref={sectionRef} className="bg-background py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Image */}
          <div 
            className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={houseExterior} 
                  alt="Beautiful painted home exterior" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Experience Banner */}
              <div className="absolute bottom-0 left-0 right-0 bg-primary py-4 px-6">
                <p className="font-playfair text-2xl md:text-3xl text-white text-center italic">
                  08 years of Experience!
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div 
            className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            {/* Heading */}
            <h2 className="font-playfair text-4xl md:text-5xl text-foreground font-bold mb-4">
              GET A FREE QUOTE
            </h2>
            
            {/* Subtitle */}
            <p className="font-poppins text-muted-foreground text-base leading-relaxed mb-8">
              Have questions, ideas, or just want to say hello? We'd love to hear from you! 
              Reach out via our contact form, email, or social media, and we'll get back to 
              you as soon as possible. Let's connect—we're here to help!
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-poppins text-sm font-medium text-foreground mb-2 block">
                  Name
                </label>
                <Input 
                  type="text" 
                  placeholder="Name" 
                  className="h-12 rounded-full border-gray-200 bg-white px-5 font-poppins"
                />
              </div>

              <div>
                <label className="font-poppins text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="h-12 rounded-full border-gray-200 bg-white px-5 font-poppins"
                />
              </div>

              <div>
                <label className="font-poppins text-sm font-medium text-foreground mb-2 block">
                  Phone
                </label>
                <Input 
                  type="tel" 
                  placeholder="Phone" 
                  className="h-12 rounded-full border-gray-200 bg-white px-5 font-poppins"
                />
              </div>

              <div>
                <label className="font-poppins text-sm font-medium text-foreground mb-2 block">
                  Address
                </label>
                <Input 
                  type="text" 
                  placeholder="Address" 
                  className="h-12 rounded-full border-gray-200 bg-white px-5 font-poppins"
                />
              </div>

              <div>
                <label className="font-poppins text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="How can we help you?" 
                  className="min-h-[120px] rounded-2xl border-gray-200 bg-white px-5 py-4 font-poppins resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="bg-accent hover:bg-accent/90 text-white font-poppins font-semibold text-base h-12 px-8 rounded-full mt-4 group"
              >
                GET YOUR FREE QUOTE
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
