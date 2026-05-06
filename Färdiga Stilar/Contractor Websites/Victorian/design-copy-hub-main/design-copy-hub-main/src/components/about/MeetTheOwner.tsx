import { useState, useEffect, useRef } from 'react';
import ownerPortrait from '@/assets/owner-portrait.jpg';

const MeetTheOwner = () => {
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
    <section ref={sectionRef} className="bg-background py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Image */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              <img 
                src={ownerPortrait} 
                alt="Company Owner" 
                className="w-full max-w-md mx-auto lg:mx-0 h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Badge */}
            <p className="font-poppins text-destructive font-semibold text-sm uppercase tracking-wider mb-3">
              Meet the Owner
            </p>

            {/* Name */}
            <h2 className="font-playfair text-3xl md:text-4xl text-foreground font-bold mb-2">
              [Owner Name]
            </h2>
            
            {/* Title */}
            <p className="font-poppins text-muted-foreground text-base mb-6">
              Founder & Lead Estimator
            </p>

            {/* Bio Paragraphs */}
            <div className="space-y-4 mb-8">
              <p className="font-poppins text-foreground/80 text-base leading-relaxed">
                [First name] started [Company Name] in [YEAR] after [X] years working for other painting 
                contractors. He saw firsthand what frustrated homeowners—crews that showed up late, 
                sloppy work, poor communication—and decided to build a company that did things right.
              </p>
              <p className="font-poppins text-foreground/80 text-base leading-relaxed">
                Today, [First name] personally meets with every customer to discuss their project. He 
                believes the best way to earn your trust is to show up, listen to what you need, and give you 
                an honest assessment—not a sales pitch.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-destructive pl-6 py-2 mb-6 bg-muted/50 rounded-r-lg">
              <p className="font-poppins text-foreground/90 text-base italic leading-relaxed">
                "[A genuine quote from the owner about their approach to work. Example: I tell people 
                the same thing I'd tell my own family—what the job actually needs, what it will cost, 
                and how long it will take. No surprises.]"
              </p>
            </blockquote>

            {/* Personal Detail */}
            <p className="font-poppins text-muted-foreground text-sm">
              [First name] lives in [City/Area] with [family details if appropriate]. When he's not painting, 
              you'll find him [personal detail that humanizes—coaching little league, fishing, etc.].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheOwner;
