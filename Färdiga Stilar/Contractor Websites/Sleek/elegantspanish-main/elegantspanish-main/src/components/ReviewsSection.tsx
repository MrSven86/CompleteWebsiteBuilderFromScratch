import buildzoomIcon from "@/assets/buildzoom-icon.svg";
import licenseIcon from "@/assets/license-icon.svg";
import bbbIcon from "@/assets/bbb-icon.png";
import noSafetyIcon from "@/assets/no-safety-violation.png";

const credentials = [
  {
    icon: buildzoomIcon,
    title: "Puntuación: 92/100",
    text: "Calificación independiente que nos ubica en el 32% superior de todos los contratistas con licencia, basada en verificación, registros de seguridad y cumplimiento normativo.",
  },
  {
    icon: licenseIcon,
    title: "Contratista con Licencia",
    text: "Nuestra licencia profesional requiere años de experiencia, aprobación de exámenes estatales y cumplimiento continuo con las regulaciones de la industria.",
  },
  {
    icon: bbbIcon,
    title: "Calificación A-",
    text: "La calificación de organismos verificadores confirma una estructura empresarial adecuada y prácticas transparentes en nuestra comunidad.",
  },
  {
    icon: noSafetyIcon,
    title: "Sin Violaciones de Seguridad",
    text: "Puntuación de seguridad de 70/100 sin violaciones, inhabilitaciones ni problemas registrados, garantizando prácticas de trabajo seguras y conformes.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-foreground" />
            <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-foreground">
              Nuestras Credenciales
            </span>
          </div>
          <h2 className="font-serif text-[48px] leading-[52px] text-foreground mb-4">
            Estándares Verificados Independientemente
          </h2>
          <p className="text-muted-foreground text-[15px] leading-[24px] max-w-[680px]">
            Nuestras credenciales hablan de los estándares profesionales que mantenemos y el compromiso con la calidad en cada proyecto que realizamos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {credentials.map((cred, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm border border-border/40 flex flex-col gap-3">
              <img src={cred.icon} alt={cred.title} className="w-24 h-16 object-contain object-left" />
              <h3 className="font-semibold text-foreground text-[16px] leading-[22px]">{cred.title}</h3>
              <p className="text-muted-foreground text-[14px] leading-[22px]">{cred.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;