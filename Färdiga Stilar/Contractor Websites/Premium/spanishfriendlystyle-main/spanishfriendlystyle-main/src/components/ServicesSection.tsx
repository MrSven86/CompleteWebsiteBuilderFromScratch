import interiorImg from "@/assets/service-interior.jpg";
import exteriorImg from "@/assets/service-exterior.jpg";
import cabinetsImg from "@/assets/service-cabinets.jpg";

const services = [
  {
    image: interiorImg,
    title: "Trabajos de Interior",
    description: "Embellece tu hogar con una renovación completa. Nuestra artesanía y servicio son insuperables.",
  },
  {
    image: exteriorImg,
    title: "Trabajos de Exterior",
    description: "Dale un aspecto fresco y moderno a tu propiedad con los cambios exteriores adecuados.",
  },
  {
    image: cabinetsImg,
    title: "Remodelaciones",
    description: "Renueva tus espacios con una remodelación profesional. Transforma lo que tienes sin reemplazarlo.",
  },
];

const ServicesSection = () => (
  <section className="bg-background py-20 px-8">
    <div className="max-w-[1200px] mx-auto text-center">
      <p className="text-accent text-base font-gibson tracking-wide mb-2">
        Profesionales de Servicio Completo en tu Zona
      </p>
      <h2 className="text-foreground text-4xl font-black font-gibson mb-14">
        Servicios que Ofrecemos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-border bg-card overflow-hidden text-center pb-8"
          >
            <div className="p-4 pb-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[260px] object-cover rounded-xl"
              />
            </div>
            <h3 className="text-foreground text-2xl font-bold font-gibson mt-6 mb-3">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-base font-gibson leading-7 px-6">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
