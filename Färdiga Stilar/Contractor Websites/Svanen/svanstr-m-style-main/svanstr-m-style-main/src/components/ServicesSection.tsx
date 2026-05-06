const services = [
  {
    title: "Pintura Interior",
    image: "/images/elektriker.jpg",
    alt: "Servicio de pintura interior",
  },
  {
    title: "Pintura Exterior",
    image: "/images/rormokare.jpg",
    alt: "Servicio de pintura exterior",
  },
  {
    title: "Mantenimiento de Edificios",
    image: "/images/fastighetsforvaltning.jpg",
    alt: "Mantenimiento de edificios",
  },
];

const ServicesSection = () => {
  return (
    <section className="svan-section py-16">
      <div className="svan-container">
        <h2 className="text-3xl font-bold svan-text-body mb-10">
          Nuestros servicios principales
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {services.map((service) => (
            <a
              key={service.title}
              href="#"
              className="group block rounded-lg overflow-hidden border hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold svan-text-body mb-1">
                  {service.title}
                </h3>
                <p className="text-sm font-semibold" style={{ color: "hsl(240 100% 20%)" }}>
                  Leer más
                </p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center">
          <a href="#" className="svan-btn-outline">
            Todos los servicios
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
