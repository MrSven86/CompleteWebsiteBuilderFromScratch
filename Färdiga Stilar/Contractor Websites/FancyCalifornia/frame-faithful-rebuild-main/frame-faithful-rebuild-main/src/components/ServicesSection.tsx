import { ArrowRight } from "lucide-react";
import painterImg from "@/assets/painter-scaffold.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "APARTMENT & MULTI-FAMILY",
    description:
      "Professional painting for apartment complexes, condominiums, and HOA properties. We minimize disruption to residents while delivering quality results on schedule.",
  },
  {
    title: "PARKING STRUCTURES",
    description:
      "Specialized coatings and surface preparation for parking structures including concrete repair, waterproofing, and traffic-bearing coatings.",
  },
  {
    title: "HIGH-RISE BUILDINGS",
    description:
      "Experienced in high-rise commercial painting with proper equipment, safety protocols, and techniques for multi-story buildings and office complexes.",
  },
  {
    title: "HISTORICAL RESTORATION",
    description:
      "Careful restoration of historic buildings using appropriate materials and techniques that preserve architectural integrity while providing lasting protection.",
  },
];

const ServicesSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 lg:py-28 bg-muted/30 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Service Cards Grid - 2x2 */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={cn(
                  "bg-background border border-border rounded-lg p-6 md:p-8 flex flex-col transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 hover:border-primary/30",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
              >
                <h3 className="font-display text-lg md:text-xl text-nav font-semibold tracking-wide mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide hover:gap-3 transition-all group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>

          {/* Image */}
          <div
            className={cn(
              "hidden lg:block transition-all duration-700 ease-out delay-300",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
          >
            <div className="h-full rounded-2xl overflow-hidden group">
              <img
                src={painterImg}
                alt="Professional painter on scaffold"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
