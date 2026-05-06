import servicesBg from "@/assets/services-bg.png";
import serviceSpanishTile from "@/assets/service-spanish-tile.jpg";
import serviceCompositionShingle from "@/assets/service-composition-shingle.jpg";
import serviceRoofRepairs from "@/assets/service-roof-repairs.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Spanish Tile Roofing",
    description:
      "Expert installation of clay and concrete Spanish tiles including Mission 2-piece, S-tiles, Cedar-lite, and Eagle-Lite. Complete installations with proper underlayment, ventilation, and cool-roof compliance.",
    image: serviceSpanishTile,
  },
  {
    title: "Composition Shingle Roofing",
    description:
      "Durable, cost-effective roofing with GAF Timberline and comparable composition shingles. Complete tear-off, underlayment installation, proper ventilation, and manufacturer warranties included.",
    image: serviceCompositionShingle,
  },
  {
    title: "Roof Repairs & Inspections",
    description:
      "Professional diagnosis and repair of cracked tiles, damaged flashing, and leaks. Thorough inspections for real estate transactions and insurance claims with detailed written reports and photos.",
    image: serviceRoofRepairs,
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <img
        src={servicesBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        aria-hidden="true"
      />

      <div
        ref={ref}
        className={`relative z-10 container mx-auto px-6 lg:px-12 transition-all duration-700 ease-out delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="uppercase tracking-wider text-primary mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '13.9px' }}>
            Our Services
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Expert Roofing Services in South Bay & Palos Verdes
          </h2>
          <p
            className="text-muted-foreground leading-relaxed"
            style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "15px" }}
          >
            With 30 years of experience and 92 permitted projects under our belts, our
            professional roofers are among the most trusted in the local community. From
            Spanish tile installations to roof repairs, we work with precision and care
            to protect your home for decades to come.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background rounded-lg border-2 border-primary/20 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3
                  className="text-lg font-bold text-primary mb-2"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="block text-center bg-secondary px-6 py-2.5 text-sm font-semibold text-secondary-foreground hover:opacity-90 transition-opacity"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
