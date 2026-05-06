import { AnimatedSection } from "@/hooks/useScrollAnimation";

import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Modern living room painting" },
  { src: gallery2, alt: "Exterior house painting" },
  { src: gallery3, alt: "Kitchen cabinet painting" },
  { src: gallery4, alt: "Commercial office painting" },
  { src: gallery5, alt: "Bedroom painting project" },
  { src: gallery6, alt: "Bathroom renovation painting" },
];

// Duplicate for seamless loop
const marqueeImages = [...images, ...images];

const GallerySection = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <AnimatedSection>
          <p className="text-primary font-satoshi font-bold uppercase tracking-wider text-sm mb-2 text-center">
            Our Work
          </p>
          <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-foreground text-center">
            Recent Projects
          </h2>
        </AnimatedSection>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <div className="flex gap-5 animate-marquee">
          {marqueeImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[400px] h-[220px] md:h-[280px] rounded-xl overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
