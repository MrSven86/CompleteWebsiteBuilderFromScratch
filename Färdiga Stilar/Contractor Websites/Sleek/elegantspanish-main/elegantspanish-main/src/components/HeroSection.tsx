import heroBg from "@/assets/hero-bg.webp";
import { Button } from "@/components/ui/button";
import licenseIcon from "@/assets/license-icon.svg";
import bbbIcon from "@/assets/bbb-hero.png";
import noSafetyIcon from "@/assets/no-safety-violation.png";

const valueIndicators = [
  { icon: licenseIcon, text: "Contratista con licencia profesional", invert: true },
  { icon: bbbIcon, text: "Calificación A- verificada", invert: false },
  { icon: noSafetyIcon, text: "Completamente asegurado", invert: true },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[520px] md:min-h-[680px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-primary/60" />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-2xl">
          <div className="opacity-0 animate-hero-fade-in flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-primary-foreground" />
            <span className="text-primary-foreground uppercase text-xs md:text-base" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: '1.8px' }}>
              Servicios Profesionales de Calidad
            </span>
          </div>

          <h1 className="opacity-0 animate-hero-fade-in text-primary-foreground leading-none mb-5 text-3xl md:text-[45px] md:leading-[55px]" style={{ fontFamily: "'Lora', serif", fontWeight: 500, animationDelay: '0.15s' }}>
            Transformamos Sus Espacios con Excelencia
          </h1>

          <p className="opacity-0 animate-hero-fade-in-slow text-primary-foreground/90 text-base leading-relaxed mb-5 max-w-xl">
            Somos una empresa con licencia profesional que ofrece servicios de alta calidad para hogares y negocios. Contamos con credenciales verificadas, seguro completo y años de experiencia en la industria para su total tranquilidad.
          </p>

          <div className="opacity-0 animate-hero-fade-in-slow flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8" style={{ animationDelay: '0.45s' }}>
            <Button variant="heroPrimary" size="xl" className="w-full sm:w-auto">
              Solicitar Presupuesto Gratis
            </Button>
            <Button variant="heroSecondary" size="xl" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Llamar (555) 123-4567
            </Button>
          </div>

          <div className="opacity-0 animate-hero-fade-in-slow grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4" style={{ animationDelay: '0.6s' }}>
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

export default HeroSection;