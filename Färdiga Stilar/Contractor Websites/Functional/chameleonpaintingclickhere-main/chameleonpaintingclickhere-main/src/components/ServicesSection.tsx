import { ArrowRight } from "lucide-react";
import interiorPaintingImg from "@/assets/services/interior-painting.jpg";
import exteriorPaintingImg from "@/assets/services/exterior-painting.jpg";
import drywallInstallationImg from "@/assets/services/drywall-installation.jpg";

const services = [
  {
    title: "Interior Painting",
    description: "Professional interior painting for residential and commercial properties, including walls, ceilings, trim, and surface preparation.",
    image: interiorPaintingImg,
    popular: true,
  },
  {
    title: "Exterior Painting",
    description: "Complete exterior painting services including surface preparation, priming, and protective coating applications for lasting results.",
    image: exteriorPaintingImg,
    popular: false,
  },
  {
    title: "Surface Preparation & Finishing",
    description: "Proper surface preparation including scraping, sanding, patching, and priming to ensure quality paint adhesion and finish.",
    image: drywallInstallationImg,
    popular: false,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <span className="font-general-sans font-medium text-secondary text-sm lg:text-base mb-2 block">
            What We Do
          </span>
          <h2 className="font-satoshi font-bold text-[32px] sm:text-[40px] lg:text-[48px] text-secondary">
            Our Services
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col group">
              <div className="relative rounded-xl overflow-hidden mb-4 lg:mb-6">
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                {service.popular && (
                  <span className="absolute bottom-4 left-4 bg-secondary text-white font-satoshi font-bold text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              
              <h3 className="font-satoshi font-bold text-lg lg:text-xl text-foreground mb-2 lg:mb-3">
                {service.title}
              </h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-satoshi font-bold text-sm text-secondary hover:text-secondary/80 transition-colors"
              >
                Read More
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 font-satoshi font-bold text-sm rounded transition-colors">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
