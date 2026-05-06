import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import brushIcon from '@/assets/icons/brush.png';
import yelpLogo from '@/assets/icons/yelp-logo.png';
import yelpStars from '@/assets/icons/yelp-stars.png';
import testimonialsHouse from '@/assets/testimonials-house.jpg';

const testimonials = [
  {
    id: 1,
    text: "Lived in our house for 40 yrs. Best exterior paint job we've had. Jose, Juan and his crew exceed our expectations! Their attention to detail is what impressed us the most. Highly recommend these guys",
    author: "Peter C.",
    date: "July 16, 2025",
    rating: 5,
  },
  {
    id: 2,
    text: "Outstanding work on our commercial building. Professional, punctual, and the quality exceeded our expectations. Will definitely use again for future projects.",
    author: "Sarah M.",
    date: "June 28, 2025",
    rating: 5,
  },
  {
    id: 3,
    text: "Transformed our apartment complex beautifully. The team was respectful of residents and completed the work on schedule. Exceptional service!",
    author: "Michael R.",
    date: "May 15, 2025",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div 
            className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="relative">
              <img 
                src={testimonialsHouse} 
                alt="Beautiful painted home exterior" 
                className="w-full h-[400px] lg:h-[480px] object-cover rounded-lg shadow-2xl"
              />
              {/* Experience Badge */}
              <div className="absolute -bottom-4 left-4 lg:-left-4 bg-primary px-6 py-3 rounded-lg shadow-lg">
                <p className="font-playfair text-lg lg:text-xl text-white italic">
                  08+ Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Heading */}
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-[2.75rem] text-primary mb-4 leading-tight">
              Customer Testimonials
            </h2>
            
            {/* Subtitle */}
            <p className="font-poppins text-foreground/80 text-base leading-relaxed mb-8">
              From small repairs to large commercial projects, our skills and customer 
              service exceed expectations. Discover why our customers love us!
            </p>

            {/* Decorative Divider with Brush */}
            <div className={`flex items-center gap-4 mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="flex-1 border-t-2 border-dashed border-gold/60"></div>
              <img 
                src={brushIcon} 
                alt="Brush" 
                className="w-5 h-5 object-contain"
                style={{ filter: 'invert(21%) sepia(96%) saturate(2673%) hue-rotate(340deg) brightness(82%) contrast(96%)' }}
              />
              <div className="flex-1 border-t-2 border-dashed border-gold/60"></div>
            </div>

            {/* Review Card */}
            <div 
              className={`bg-white rounded-xl shadow-lg border border-gray-100 p-5 md:p-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              {/* Rating Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-poppins font-semibold text-foreground text-sm">Excellent rating</p>
                  <p className="font-poppins text-muted-foreground text-xs">Based on 102 reviews</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src={yelpLogo} alt="Yelp" className="h-6 object-contain" />
                  <img src={yelpStars} alt="5 stars" className="h-5 object-contain" />
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 mb-4"></div>

              {/* Review Text */}
              <p className="font-poppins text-foreground/90 text-sm leading-relaxed mb-3">
                "{current.text}"
              </p>

              {/* Read More */}
              <a href="#" className="font-poppins text-primary text-sm hover:underline inline-block mb-4">
                Read more
              </a>

              {/* Author and Navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/60 to-primary flex items-center justify-center">
                    <span className="text-white font-poppins font-medium text-sm">
                      {current.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-poppins font-semibold text-foreground text-sm">{current.author}</p>
                    <p className="font-poppins text-muted-foreground text-xs">{current.date}</p>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-2">
                  <button 
                    onClick={prevTestimonial}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-200"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-200"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Verified Badge */}
            <div className={`mt-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-poppins font-medium shadow-md">
                Verified by Trustindex
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
