import { ServiceAreaMap } from "@/components/ServiceAreaMap";

const cities = [
  "Palos Verdes Estates",
  "Rancho Palos Verdes",
  "Rolling Hills",
  "Rolling Hills Estates",
  "Hermosa Beach",
  "Redondo Beach",
  "Manhattan Beach",
  "Torrance",
  "Pacific Palisades",
  "Malibu",
];

const ServiceAreasSection = () => {
  const midpoint = Math.ceil(cities.length / 2);
  const leftColumn = cities.slice(0, midpoint);
  const rightColumn = cities.slice(midpoint);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div>
            <p className="uppercase tracking-wider text-primary mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '13.9px' }}>
              Service Areas
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] leading-tight font-bold text-foreground mb-10">
              Proudly Serving the following communities
            </h2>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <div className="flex flex-col gap-4">
                {leftColumn.map((city) => (
                  <div
                    key={city}
                    className="border border-secondary rounded-full px-6 py-3 text-foreground text-sm font-medium"
                  >
                    {city}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {rightColumn.map((city) => (
                  <div
                    key={city}
                    className="border border-secondary rounded-full px-6 py-3 text-foreground text-sm font-medium"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <ServiceAreaMap cities={cities} className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
