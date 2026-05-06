import { useState } from "react";
import framingImg from "@/assets/services-framing.jpg";
import drywallImg from "@/assets/services-drywall.jpg";

const services = [
  {
    name: "Drywall & Finishing",
    image: drywallImg,
    description:
      "Installation and finishing of all types of drywall across varying levels 1–5. Our team consults with architects to bring key concepts to life with precision craftsmanship and highly skilled tradespeople.",
  },
  {
    name: "Steel Stud Framing",
    image: framingImg,
    description:
      "Drawing on decades of framing experience, we bring highly skilled tradespeople to your projects. We maintain critical schedule commitments while upholding the highest standards of quality.",
  },
  {
    name: "Insulation",
    image: framingImg,
    description:
      "Batt insulation, rigid, semi-rigid and spray-applied insulation solutions. Sound and fireproofing details are critical to the performance of completed assemblies, ensuring both comfort and safety.",
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="section-dark py-20 md:py-32">
      <div className="container">
        <p className="label-uppercase text-primary mb-4">Services</p>
        <h2 className="heading-section text-3xl md:text-5xl text-foreground mb-12">
          Large scale commercial and residential
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tabs */}
          <div>
            <div className="flex flex-col gap-0 mb-8">
              {services.map((service, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-left py-4 px-4 border-l-2 transition-all ${
                    active === i
                      ? "border-l-primary bg-secondary/50 text-foreground"
                      : "border-l-border text-muted-foreground hover:text-foreground hover:border-l-muted-foreground"
                  }`}
                >
                  <span className="heading-section text-lg">{service.name}</span>
                </button>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {services[active].description}
            </p>

            <a
              href="#"
              className="label-uppercase text-primary hover:text-foreground transition-colors"
            >
              View Services →
            </a>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-sm">
            <img
              src={services[active].image}
              alt={services[active].name}
              className="w-full h-[400px] md:h-[500px] object-cover transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
