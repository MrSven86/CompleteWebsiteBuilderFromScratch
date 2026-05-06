import { Button } from "@/components/ui/button";
import contactBg from "@/assets/contact-bg.jpg";
import licenseIcon from "@/assets/license-icon.svg";
import bbbIcon from "@/assets/bbb-hero.png";
import noSafetyIcon from "@/assets/no-safety-violation.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const valueIndicators = [
  { icon: licenseIcon, text: "Contratista con licencia profesional", invert: true },
  { icon: bbbIcon, text: "Calificación A- verificada", invert: false },
  { icon: noSafetyIcon, text: "Completamente asegurado", invert: true },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="relative min-h-[440px] flex items-center" ref={ref}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className={`max-w-[680px] transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-serif text-3xl md:text-[48px] md:leading-[56px] text-primary-foreground mb-4">
            ¿Listo Para Transformar Su Espacio?
          </h2>

          <p className="text-primary-foreground/90 text-[15px] leading-[26px] mb-8 max-w-[580px]">
            Obtenga un presupuesto gratuito y sin compromiso para su proyecto. Evaluaremos sus necesidades, discutiremos las opciones y proporcionaremos un presupuesto detallado con cronograma y materiales.
          </p>

          <Button className="h-14 bg-hero-cta text-primary-foreground hover:bg-hero-cta/90 font-semibold text-base rounded-lg px-10">
            Solicitar Presupuesto Gratis Hoy
          </Button>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {valueIndicators.map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-primary-foreground/90 text-xs sm:text-sm">
                <img src={item.icon} alt="" className={`w-8 h-8 object-contain shrink-0 ${item.invert ? 'brightness-0 invert' : ''}`} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;