import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AutoScrollGalleryProps {
  images: string[];
  autoScrollInterval?: number;
}

const AutoScrollGallery = ({ images, autoScrollInterval = 3000 }: AutoScrollGalleryProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Double the images for infinite scroll effect
  const duplicatedImages = [...images, ...images];

  const scrollLeft = useCallback(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.gallery-card')?.clientWidth || 300;
      const gap = 24; // gap-6
      setScrollPosition((prev) => {
        const newPos = prev - (cardWidth + gap);
        return newPos < 0 ? (images.length * (cardWidth + gap)) + newPos : newPos;
      });
    }
  }, [images.length]);

  const scrollRight = useCallback(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.gallery-card')?.clientWidth || 300;
      const gap = 24;
      const maxScroll = images.length * (cardWidth + gap);
      setScrollPosition((prev) => {
        const newPos = prev + (cardWidth + gap);
        return newPos >= maxScroll ? newPos - maxScroll : newPos;
      });
    }
  }, [images.length]);

  // Auto-scroll effect
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      scrollRight();
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [autoScrollInterval, isHovered, scrollRight]);

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-heading font-semibold uppercase tracking-wider text-sm mb-2">
            OUR RECENT WORK
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            See Our Quality Craftsmanship
          </h2>
          <p className="text-text-medium mt-4 max-w-2xl mx-auto">
            Browse through examples of our flooring installations across residential and commercial properties.
          </p>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Previous images"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Next images"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        {/* Scrolling Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 transition-transform duration-500 ease-out px-4"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="gallery-card flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px] aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={image}
                alt={`Flooring project ${(index % images.length) + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoScrollGallery;
