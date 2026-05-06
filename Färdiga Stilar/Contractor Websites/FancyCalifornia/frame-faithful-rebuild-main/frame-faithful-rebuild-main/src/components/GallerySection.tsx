import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Interior painting - bright living room", label: "Interior Renovation", location: "Santa Monica, CA" },
  { src: gallery2, alt: "Exterior house painting", label: "Exterior Painting", location: "Pacific Palisades, CA" },
  { src: gallery3, alt: "Kitchen cabinet painting", label: "Cabinet Refinishing", location: "Venice, CA" },
  { src: gallery4, alt: "Commercial building painting", label: "Commercial Project", location: "Culver City, CA" },
  { src: gallery5, alt: "Bedroom accent wall painting", label: "Residential Interior", location: "Santa Monica, CA" },
  { src: gallery6, alt: "Victorian home exterior", label: "Historic Restoration", location: "Brentwood, CA" },
];

const GallerySection = () => {
  const marqueeImages = [...images, ...images];

  return (
    <section className="py-24 bg-accent overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Our Work
        </h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          Browse through some of our recent painting projects
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-8 animate-marquee w-max">
          {marqueeImages.map((image, index) => (
            <div
              key={index}
              className="group flex-shrink-0 w-[500px] h-[340px] rounded-xl overflow-hidden shadow-lg relative cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-10 h-1 bg-primary mb-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 origin-left" />
                <h3 className="text-white font-display text-xl font-bold">{image.label}</h3>
                <p className="text-white/70 text-sm mt-1">{image.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
