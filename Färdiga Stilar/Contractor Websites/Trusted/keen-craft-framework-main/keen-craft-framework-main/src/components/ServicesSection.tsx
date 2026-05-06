import pic1 from "@/assets/pic1.png";
import pic2 from "@/assets/pic2.png";
import pc3 from "@/assets/pc3.png";

const services = [
  {
    image: pic1,
    title: "Interior Painting",
    desc: "Beautify your home with a fresh new look. Our craftsmanship and service is second to none!",
  },
  {
    image: pic2,
    title: "Exterior Walls & Trim",
    desc: "You can get a fresh, new, and modern update with just the right exterior paint changes!",
  },
  {
    image: pc3,
    title: "Cabinets",
    desc: "Refresh your kitchen with a cabinet overhaul. Update your cabinets without buying new!",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-background py-20">
      <div className="max-w-[1170px] mx-auto px-4 text-center">
        <p className="font-rubik text-sm text-muted-foreground mb-2 tracking-wide">
          Full Service Bay Area Painter
        </p>
        <h2 className="font-rubik font-bold text-4xl text-foreground mb-12">
          Services We Provide
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-2xl overflow-hidden text-center pb-10 relative"
            >
              {/* Image */}
              <div className="p-4 pb-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[220px] object-cover rounded-xl"
                />
              </div>

              {/* Text */}
              <div className="px-6 pt-6">
                <h3 className="font-rubik font-bold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-rubik text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Decorative half-circle at bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-8 rounded-t-full bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
