import aboutPhoto from "@/assets/about-photo.png";
import iconEmailOrange from "@/assets/icon-email-orange.svg";
import iconPhoneOrange from "@/assets/icon-phone-orange.svg";
import vectorUnderlineOrange from "@/assets/vector-underline-orange.svg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="w-full bg-background py-12 lg:py-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left: Photo with overlay */}
        <div
          ref={leftRef}
          className={`relative w-full max-w-[516px] aspect-square flex-shrink-0 transition-all duration-700 ease-out ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <div className="w-full h-full rounded-[15px] overflow-hidden">
            <img
              src={aboutPhoto}
              alt="Proyecto Disant Constructora"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Blue overlay card */}
          <div
            className="absolute z-10 hidden md:block"
            style={{ left: -30, top: '50%', transform: 'translateY(-50%)' }}
          >
            <div className="relative w-[260px] lg:w-[300px]">
              <div className="bg-[#4A6FA5]/[0.73] px-6 lg:px-7 pt-6 lg:pt-8 pb-8 lg:pb-10 w-full">
                <h3 className="text-primary-foreground font-bold text-base lg:text-lg font-sans uppercase tracking-wide leading-tight">
                  DISANT
                </h3>
                <p className="text-primary-foreground font-bold text-xs font-sans uppercase tracking-wide mt-0.5">
                  CONSTRUCTORA
                </p>
                <p className="text-primary-foreground/90 text-sm font-sans italic mt-4 leading-relaxed text-center">
                  En Disant, no somos solo<br />
                  constructores—somos<br />
                  socios en el camino para<br />
                  hacer realidad su visión.
                </p>
              </div>
              <div
                className="absolute left-0"
                style={{
                  top: '100%',
                  width: 0,
                  height: 0,
                  borderTop: '36px solid hsl(220, 20%, 15%)',
                  borderRight: '36px solid transparent',
                }}
              />
            </div>
          </div>
        </div>

        {/* Right: Text content */}
        <div
          ref={rightRef}
          className={`flex-1 flex flex-col justify-center transition-all duration-700 ease-out delay-200 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
        >
          <span className="text-foreground font-bold text-sm font-sans uppercase tracking-[0.2em]">
            ACERCA DE NOSOTROS
          </span>
          <h2 className="text-foreground text-3xl lg:text-[42px] font-bold font-sans leading-[1.15] mt-3">
            Constructora en CABA<br />
            en la Que Puede Confiar
          </h2>
          <img src={vectorUnderlineOrange} alt="" className="w-[160px] lg:w-[199px] h-auto mt-1" />

          <p className="text-muted-foreground text-base font-sans leading-7 mt-6 max-w-[520px]">
            Desde 1996, trabajamos directamente con propietarios para transformar
            sus ideas en realidad. Ya sea construcción nueva, remodelaciones completas
            o ampliaciones, manejamos el diseño, los permisos y la ejecución con la
            atención personalizada y honestidad que nuestros clientes destacan.
          </p>

          <div className="w-full max-w-[520px] h-px bg-border mt-8" />

          {/* Contact row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 mt-8">
            <div className="flex items-center gap-3">
              <img src={iconEmailOrange} alt="" className="w-10 h-10 lg:w-[50px] lg:h-[50px]" />
              <span className="text-foreground text-sm lg:text-base font-sans">contacto@disantconstrucciones.com</span>
            </div>
            <div className="flex items-center gap-3">
              <img src={iconPhoneOrange} alt="" className="w-10 h-10 lg:w-[50px] lg:h-[50px]" />
              <span className="text-foreground text-sm lg:text-base font-sans">(11) 2794-9481</span>
            </div>
          </div>

          <button className="mt-8 w-fit px-8 py-3 bg-primary text-primary-foreground font-bold text-sm font-sans uppercase tracking-wider hover:bg-primary/90 transition-colors">
            PRESUPUESTO GRATIS
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
