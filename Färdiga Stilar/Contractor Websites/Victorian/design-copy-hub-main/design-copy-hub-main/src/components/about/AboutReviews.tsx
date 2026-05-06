import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "[ACTUAL VERIFIED REVIEW - Example: We had our entire interior painted and couldn't be happier. The crew was professional, cleaned up every day, and the finished work is beautiful. Would absolutely recommend.]",
    author: "[Customer Name]",
    location: "[City] · via Google",
  },
  {
    text: "[ACTUAL VERIFIED REVIEW - Example: After getting several quotes, we went with [Company] and it was the right choice. Fair price, great communication, and excellent work. Our house looks brand new.]",
    author: "[Customer Name]",
    location: "[City] · via Yelp",
  },
];

const AboutReviews = () => {
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
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-poppins text-destructive font-semibold text-sm uppercase tracking-wider mb-3">
            What Our Customers Say
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-foreground font-bold">
            Don't Take Our Word For It
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-muted rounded-lg p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-poppins text-foreground/90 text-base leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-poppins text-foreground font-semibold">
                  {review.author}
                </p>
                <p className="font-poppins text-muted-foreground text-sm">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutReviews;
