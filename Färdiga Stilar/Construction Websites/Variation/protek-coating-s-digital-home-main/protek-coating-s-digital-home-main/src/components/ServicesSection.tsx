import { Factory, Paintbrush, Droplets, Fuel, Wind, Building2, FlaskConical, CircleDot, Cylinder } from "lucide-react";

const services = [
  { icon: Factory, title: "Industrial Coating", desc: "Epoxy, urethane, and fluoropolymer coatings for commercial properties and other corrosion-resistance needs." },
  { icon: Paintbrush, title: "Painting", desc: "Perform a broad range of exterior and interior painting with various methods including spraying." },
  { icon: Droplets, title: "Water Tank Lining", desc: "Protect, maintain, and refinish potable and non-potable water storage systems." },
  { icon: Fuel, title: "Oil Tank Lining", desc: "Internal protective coatings for oil tanks, chemical lining, and fire-rated containment." },
  { icon: Wind, title: "Sandblasting", desc: "Abrasive blast cleaning for any type of material, prepared surface for any coatings." },
  { icon: Building2, title: "Infrastructure", desc: "Structural steel maintenance, coating, painting, and painting." },
  { icon: FlaskConical, title: "Concrete Coating", desc: "We specialize in coating all your concrete surfaces." },
  { icon: CircleDot, title: "Containment Coating", desc: "Textile, structural, mechanical, chemical containment and coating." },
  { icon: Cylinder, title: "Manhole Coating", desc: "All types of manholes, including sanitary sewer manholes." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading mb-2">Services</h2>
        <p className="text-muted-foreground mb-10">Quality work, ask about our other services</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="flex items-start gap-4 bg-background rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
