import kitchenImg from "@/assets/about-kitchen.png";

const AboutSection = () => (
  <section className="bg-background py-20 px-8 md:px-16 lg:px-[258px]">
    <div className="max-w-[1404px] mx-auto flex flex-col lg:flex-row items-start gap-16">
      {/* Left Content */}
      <div className="flex-1 max-w-[600px]">
        <span className="text-primary font-gibson font-bold text-sm uppercase tracking-widest mb-3 block">
          ¿Por qué elegirnos?
        </span>
        <h2 className="text-foreground font-gibson font-black text-4xl md:text-5xl leading-tight mb-4">
          Mejores que el resto.
        </h2>
        <div className="flex gap-1 mb-6">
          <div className="w-8 h-1 bg-foreground rounded-full" />
          <div className="w-8 h-1 bg-primary rounded-full" />
        </div>
        <p className="text-muted-foreground font-gibson text-base leading-7 mb-10">
          Más que una empresa de servicios, nos dedicamos a transformar espacios y
          maximizar el potencial de tu propiedad.
        </p>

        {/* Highlighted card */}
        <div className="bg-muted rounded-xl p-6 mb-8">
          <h3 className="text-foreground font-gibson font-bold text-lg mb-2">
            Más de 40 Años de Experiencia.
          </h3>
          <p className="text-muted-foreground font-gibson text-sm leading-6">
            Cuatro décadas de maestría nos respaldan. Nuestro legado abarca más de 1,000
            proyectos completados en remodelación y construcción.
          </p>
        </div>

        {/* Other points */}
        <div className="mb-8">
          <h3 className="text-foreground font-gibson font-bold text-lg mb-2">
            El Cliente es Primero.
          </h3>
          <p className="text-muted-foreground font-gibson text-sm leading-6">
            La satisfacción del cliente es nuestra máxima prioridad. Nuestro proceso basado en
            confianza y comunicación asegura que los proyectos se completen sin compromisos.
          </p>
        </div>

        <div>
          <h3 className="text-foreground font-gibson font-bold text-lg mb-2">
            Confiabilidad Garantizada.
          </h3>
          <p className="text-muted-foreground font-gibson text-sm leading-6">
            Nuestro equipo experimentado está comprometido con la fiabilidad. Nos enorgullecemos de
            nuestra tasa de finalización del 100%. Cada proyecto cuenta con licencia y seguro completo.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-shrink-0 w-full lg:w-[480px]">
        <img
          src={kitchenImg}
          alt="Remodelación moderna de cocina"
          className="w-full h-auto rounded-3xl object-cover"
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
