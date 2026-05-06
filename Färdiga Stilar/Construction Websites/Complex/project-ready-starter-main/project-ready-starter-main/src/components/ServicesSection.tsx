import serviceDeck from "@/assets/service-deck.jpg";
import serviceStairs from "@/assets/service-stairs.jpg";
import serviceBalcony from "@/assets/service-balcony.jpg";

const services = [
  {
    image: serviceDeck,
    title: "Construcción Nueva",
    description:
      "Desarrollamos proyectos residenciales desde cero. Incluimos planos, gestión de permisos municipales, y construcción completa hasta la entrega llave en mano con materiales de calidad y mano de obra especializada.",
  },
  {
    image: serviceStairs,
    title: "Remodelaciones Integrales",
    description:
      "Transformamos espacios existentes con renovaciones completas. Actualizamos cocinas, baños, y ambientes interiores con diseño integrado y ejecución profesional que respeta la estructura original de su propiedad.",
  },
  {
    image: serviceBalcony,
    title: "Ampliaciones y Reformas",
    description:
      "Agregamos espacio funcional a su propiedad actual. Realizamos ampliaciones diseñadas arquitectónicamente, incluso en casas antiguas donde se requiere especial cuidado, además de refacciones y trabajos de mantenimiento.",
  },
];

import { useScrollReveal } from "@/hooks/useScrollReveal";

const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="w-full bg-background py-14 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-10 lg:mb-14 transition-all duration-600 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="text-primary font-bold text-sm font-sans uppercase tracking-[0.2em]">
            NUESTROS SERVICIOS
          </span>
          <h2 className="text-foreground text-2xl sm:text-3xl lg:text-[42px] font-bold font-sans leading-[1.15] mt-3">
            Servicios Profesionales de Construcción Que Protegen Su Inversión
          </h2>
          <p className="text-muted-foreground text-base font-sans leading-7 mt-4 max-w-[680px] mx-auto">
            Ofrecemos servicios integrales para todo tipo de proyecto residencial
            en CABA y Gran Buenos Aires
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-700 ease-out delay-150 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-lg overflow-hidden border border-border flex flex-col"
            >
              <div className="w-full h-[220px] md:h-[280px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <h3 className="text-primary font-bold text-lg lg:text-xl font-sans underline decoration-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm font-sans leading-7 mt-4 flex-1">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-primary font-semibold text-sm font-sans mt-6 inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  Conocer Más <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 lg:mt-14">
          <button className="px-8 py-3 bg-primary text-primary-foreground font-bold text-sm font-sans uppercase tracking-wider rounded hover:bg-primary/90 transition-colors">
            Explorar Todos los Servicios
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
