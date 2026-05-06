import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import serviceInterior from "@/assets/service-interior.webp";
import serviceExterior from "@/assets/service-exterior.webp";
import serviceCabinets from "@/assets/service-cabinets.webp";
import servicePrep from "@/assets/service-prep.webp";

const services = [
  {
    title: "Servicio Interior",
    description:
      "Transforme sus espacios interiores con nuestro servicio profesional. Preparamos las superficies adecuadamente, protegemos sus pisos y muebles, y aplicamos materiales de calidad para un acabado suave y duradero. Ideal para renovaciones completas o parciales.",
    image: serviceInterior,
  },
  {
    title: "Servicio Exterior",
    description:
      "Proteja y embellezca el exterior de su propiedad con nuestro servicio diseñado para las condiciones climáticas locales. Limpiamos y preparamos las superficies a fondo, reparamos áreas dañadas y utilizamos materiales de calidad que resisten la exposición al sol.",
    image: serviceExterior,
  },
  {
    title: "Renovación de Acabados",
    description:
      "Dele a su cocina o baño un aspecto nuevo sin el costo de reemplazo. Nuestro servicio profesional ofrece un acabado suave y de calidad industrial. Desmontamos, limpiamos, preparamos y aplicamos materiales duraderos para resultados que perduran.",
    image: serviceCabinets,
  },
  {
    title: "Preparación y Reparación",
    description:
      "Un trabajo de calidad comienza con una preparación adecuada. Nos encargamos de reparaciones, limpieza a presión, sellado de juntas y grietas, y una preparación exhaustiva de todas las superficies antes de comenzar el trabajo principal.",
    image: servicePrep,
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="bg-background py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-[320px] shrink-0">
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-0.5 bg-foreground" />
                <span className="text-foreground uppercase" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "14px", letterSpacing: "1.4px" }}>
                  Servicios Profesionales
                </span>
              </div>

              <h2 className="text-foreground mb-4" style={{ fontFamily: "'Lora', serif", fontWeight: 500, fontSize: "36px", lineHeight: "44px" }}>
                Soluciones Integrales
              </h2>

              <p className="text-muted-foreground mb-8 leading-relaxed" style={{ fontSize: "16px", lineHeight: "26px" }}>
                Desde renovaciones sencillas hasta transformaciones completas, manejamos proyectos residenciales y comerciales en toda la zona.
              </p>

              <Button variant="heroPrimary" size="xl">
                Obtener Presupuesto Gratis
              </Button>
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`bg-card rounded-sm overflow-hidden shadow-sm border border-border transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
                >
                  <img src={service.image} alt={service.title} className="w-full h-[280px] object-cover" />
                  <div className="p-8 pb-16 min-h-[300px]">
                    <h3 className="text-foreground mb-4" style={{ fontFamily: "'Lora', serif", fontWeight: 500, fontSize: "26px", lineHeight: "32px" }}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground" style={{ fontSize: "16px", lineHeight: "28px" }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;