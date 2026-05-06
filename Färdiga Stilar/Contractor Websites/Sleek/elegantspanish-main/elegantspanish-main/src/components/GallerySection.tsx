import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.webp";
import gallery5 from "@/assets/gallery-5.webp";
import gallery6 from "@/assets/gallery-6.webp";
import gallery7 from "@/assets/gallery-7.webp";
import gallery8 from "@/assets/gallery-8.webp";
import gallery9 from "@/assets/gallery-9.webp";
import gallery10 from "@/assets/gallery-10.webp";

const images = [
  { src: gallery1, alt: "Proyecto profesional 1" },
  { src: gallery2, alt: "Proyecto profesional 2" },
  { src: gallery3, alt: "Proyecto profesional 3" },
  { src: gallery4, alt: "Proyecto profesional 4" },
  { src: gallery5, alt: "Proyecto profesional 5" },
  { src: gallery6, alt: "Proyecto profesional 6" },
  { src: gallery7, alt: "Proyecto profesional 7" },
  { src: gallery8, alt: "Proyecto profesional 8" },
  { src: gallery9, alt: "Proyecto profesional 9" },
  { src: gallery10, alt: "Proyecto profesional 10" },
];

const GallerySection = () => {
  const allImages = [...images, ...images];

  return (
    <section className="w-full overflow-hidden py-12 bg-background">
      <div className="flex items-center gap-3 mb-8 container mx-auto px-4">
        <span className="w-6 h-0.5 bg-foreground" />
        <span
          className="text-foreground uppercase"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            letterSpacing: "1.4px",
          }}
        >
          Nuestro Trabajo
        </span>
      </div>

      <div className="relative">
        <div className="flex gap-3 sm:gap-4 animate-scroll-left w-max">
          {allImages.map((image, index) => (
            <div
              key={index}
              className="shrink-0 w-[280px] sm:w-[400px] h-[350px] sm:h-[500px] rounded-sm overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
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