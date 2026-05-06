import { useState, useEffect, useCallback } from "react";
import arrowLeft from "@/assets/arrow-left.svg";
import arrowRight from "@/assets/arrow-right.svg";
import g1 from "@/assets/gallery-new-1.jpg";
import g2 from "@/assets/gallery-new-2.jpg";
import g3 from "@/assets/gallery-new-3.jpg";
import g4 from "@/assets/gallery-new-4.jpg";
import g5 from "@/assets/gallery-new-5.jpg";
import g6 from "@/assets/gallery-new-6.jpg";
import g7 from "@/assets/gallery-new-7.jpg";
import g8 from "@/assets/gallery-new-8.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const images = [g1, g2, g3, g4, g5, g6, g7, g8];

const GallerySection = () => {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const { ref, isVisible } = useScrollAnimation(0.1);

  // Responsive visible count
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = images.length - visibleCount;

  const next = useCallback(() => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)), [maxIndex]);
  const prev = () => setCurrent((c) => Math.max(0, c - 1));

  // Reset current if it exceeds maxIndex after resize
  useEffect(() => {
    setCurrent((c) => Math.min(c, maxIndex));
  }, [maxIndex]);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-10">
          <p className="uppercase tracking-wider text-primary mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '13.9px' }}>
            Gallery
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "Inter, sans-serif" }}>
            Our Recent Work
          </h2>
        </div>

        <div className="relative w-full">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(current * 100) / visibleCount}%)` }}
            >
              {images.map((img, i) => (
                <div key={i} className="flex-shrink-0 px-1" style={{ width: `${100 / visibleCount}%` }}>
                  <img src={img} alt={`Gallery work ${i + 1}`} className="w-full h-[280px] md:h-[380px] lg:h-[440px] object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </div>

          <button onClick={prev} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 hover:scale-110 transition-transform" aria-label="Previous">
            <img src={arrowLeft} alt="" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
          </button>
          <button onClick={next} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 hover:scale-110 transition-transform" aria-label="Next">
            <img src={arrowRight} alt="" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
          </button>
        </div>

        <div className="flex justify-center items-center gap-2 mt-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(Math.min(i, maxIndex))}
              className={`rounded-full transition-all ${i === current ? "w-4 h-4 bg-primary" : "w-3 h-3 bg-muted-foreground/50"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
