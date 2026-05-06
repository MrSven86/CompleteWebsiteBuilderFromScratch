import heroBg from "@/assets/hero-bg.jpg";
import fiveStarGoogle from "@/assets/five-star-google.svg";
import fiveStarNextdoor from "@/assets/five-star-nextdoor.svg";
import fiveStarYelp from "@/assets/five-star-yelp.svg";
import arrowDown from "@/assets/arrow-down.svg";

const Navbar = () => (
  <nav className="absolute top-0 left-0 w-full z-20 px-[258px] pt-[52px]">
    <div className="flex items-center justify-between h-16">
      <div className="font-gibson font-bold text-2xl tracking-wider text-primary-foreground uppercase">
        <span className="text-accent">⬡</span> Acme Servicios<br/>
        <span className="text-xs tracking-[0.3em] font-medium ml-6">PRO</span>
      </div>
      <div className="flex items-center gap-8">
        {["Servicios", "Proyectos", "Recursos", "Área de Servicio", "Preguntas"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-primary-foreground text-lg font-medium font-gibson tracking-wide hover:opacity-80 transition-opacity flex items-center gap-1.5"
          >
            {item}
            {item === "Servicios" && (
              <img src={arrowDown} alt="" className="w-2.5 h-2.5" />
            )}
          </a>
        ))}
      </div>
      <a href="#contact" className="glass-button px-8 py-3 text-primary-foreground text-lg font-semibold font-gibson tracking-wide text-center">
        Contacto
      </a>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="relative w-full min-h-[700px] overflow-hidden">
    <img
      src={heroBg}
      alt="Servicios profesionales para el hogar"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="hero-gradient-overlay absolute inset-0" />
    <div className="absolute inset-0 bg-foreground/30" />

    <div className="relative z-10 px-[278px] pt-[263px] pb-24">
      {/* Star ratings */}
      <div className="flex items-center gap-6 mb-4">
        <img src={fiveStarGoogle} alt="5 estrellas en Google" className="h-4" />
        <img src={fiveStarNextdoor} alt="5 estrellas en Nextdoor" className="h-4" />
        <img src={fiveStarYelp} alt="5 estrellas en Yelp" className="h-4" />
      </div>

      {/* Subtitle */}
      <p className="text-secondary/80 text-xl font-light font-gibson tracking-wide mb-4">
        Profesionales de confianza en tu zona
      </p>

      {/* Heading */}
      <h1 className="text-primary-foreground text-7xl font-gibson leading-[88px] max-w-[877px] mb-10">
        Servicios Profesionales que{" "}
        Aumentan <span className="font-semibold">el Valor</span>{" "}
        <span className="font-semibold">y el Atractivo</span>{" "}
        <span className="font-semibold">de tu Propiedad</span>
      </h1>

      {/* Description */}
      <p className="text-primary-foreground text-xl font-gibson leading-8 tracking-wide max-w-[949px] mb-12">
        Expertos dedicados en servicios para hogares y negocios. Trabajos de interior,
        exterior y remodelación, realizados con cuidado, calidad y la precisión que mereces.
      </p>

      {/* CTA Buttons */}
      <div className="flex items-center gap-6">
        <a
          href="#estimate"
          className="bg-primary-foreground rounded-[50px] px-12 py-3 text-foreground/70 text-base font-semibold font-gibson text-center hover:bg-secondary transition-colors"
        >
          Solicita tu Presupuesto Gratis Hoy
        </a>
        <a
          href="sms:6505208290"
          className="glass-button px-8 py-3 text-primary-foreground text-base font-semibold font-gibson text-center"
        >
          Envía un SMS (650) 520-8290
        </a>
      </div>
    </div>
  </section>
);

export { Navbar, HeroSection };
