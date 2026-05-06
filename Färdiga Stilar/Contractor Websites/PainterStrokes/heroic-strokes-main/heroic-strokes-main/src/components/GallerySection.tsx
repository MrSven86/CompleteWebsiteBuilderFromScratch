import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.webp";
import gallery5 from "@/assets/gallery-5.webp";
import gallery6 from "@/assets/gallery-6.webp";
import gallery7 from "@/assets/gallery-7.webp";
import gallery8 from "@/assets/gallery-8.webp";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8];

const GallerySection = () => {
  return (
    <section id="gallery" className="bg-brand-dark py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="section-heading text-primary-foreground text-center mb-10">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-[20px]">
              <img
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-[280px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a href="#" className="btn-brand">SHOW MORE</a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
