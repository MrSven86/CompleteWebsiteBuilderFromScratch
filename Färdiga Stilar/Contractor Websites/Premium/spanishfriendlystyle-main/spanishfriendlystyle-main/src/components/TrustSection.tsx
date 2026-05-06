import vanImg from "@/assets/van.png";

const TrustSection = () => (
  <section className="bg-background py-16 px-[258px]">
    <div className="flex items-center gap-16 max-w-[1404px] mx-auto">
      {/* Van Image */}
      <div className="flex-shrink-0 w-[500px]">
        <img src={vanImg} alt="Vehículo de servicio profesional" className="w-full h-auto" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="border-l-4 border-accent pl-4 mb-6">
          <h2 className="text-primary text-5xl font-black font-gibson capitalize leading-[48px]">
            Hecho con Cuidado,<br />Construido con Confianza
          </h2>
        </div>
        <p className="text-muted-foreground text-base font-gibson leading-7 mb-8 max-w-[567px]">
          Nuestro compromiso con la excelencia y la satisfacción del cliente impulsa cada
          aspecto de nuestro trabajo. Nos tomamos el tiempo para entender tus
          preferencias, estilo y necesidades funcionales, ofreciendo soluciones
          personalizadas que se alinean con tus objetivos.
        </p>
        <a
          href="#estimate"
          className="inline-block rounded-[50px] border border-foreground px-12 py-3 text-foreground/70 text-base font-semibold font-gibson text-center hover:bg-foreground hover:text-primary-foreground transition-colors"
        >
          Solicita tu Presupuesto Gratis Hoy
        </a>
      </div>
    </div>
  </section>
);

export default TrustSection;
