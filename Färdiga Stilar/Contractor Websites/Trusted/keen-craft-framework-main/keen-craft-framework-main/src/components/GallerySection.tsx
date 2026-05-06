import { useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
    alt: "Living room interior painting",
  },
  {
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    alt: "Exterior house painting",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    alt: "Kitchen renovation",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    alt: "Commercial office painting",
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
    alt: "Bedroom interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    alt: "Exterior home project",
  },
  {
    src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80",
    alt: "Modern living space",
  },
];

const VISIBLE = 5;

const GallerySection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () =>
    setStartIndex((i) => (i - 1 + images.length) % images.length);
  const next = () =>
    setStartIndex((i) => (i + 1) % images.length);

  const visibleImages = Array.from({ length: VISIBLE }, (_, i) => {
    const idx = (startIndex + i) % images.length;
    return images[idx];
  });

  return (
    <section className="w-full bg-muted/40 py-20">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-rubik text-sm text-muted-foreground tracking-wide mb-2">
            Our Work
          </p>
          <h2 className="font-rubik font-bold text-4xl text-foreground">
            Recent Projects
          </h2>
        </div>

        {/* Gallery with arrows */}
        <div className="relative flex items-center">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute -left-5 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground shadow-sm transition-colors text-lg"
          >
            ‹
          </button>

          <div className="grid grid-cols-5 gap-4 w-full">
            {visibleImages.map((img, i) => (
              <div
                key={`${img.alt}-${i}`}
                className="rounded-xl overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[320px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="absolute -right-5 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground shadow-sm transition-colors text-lg"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
