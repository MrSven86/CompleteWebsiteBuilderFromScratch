import { useLanguage } from "@/context/LanguageContext";
import { MessageSquare, Paintbrush, Eye, Rocket } from "lucide-react";
import dustTexture from "@/assets/dust-texture.png";
import processCharacter from "@/assets/process-character.png";
import processWave from "@/assets/process-wave.svg";
import reviewPhoto from "@/assets/review-photo.png";
import starIcon from "@/assets/star-icon.svg";

const steps = [
  {
    icon: MessageSquare,
    numEs: "01",
    titleEs: "Contanos sobre tu negocio",
    titleEn: "Tell us about your business",
    descEs: "Completás un formulario breve o nos escribís por WhatsApp. Nos contás qué hace tu negocio, quiénes son tus clientes y qué te diferencia.",
    descEn: "Fill out a short form or message us on WhatsApp. Tell us what your business does, who your clients are, and what sets you apart.",
  },
  {
    icon: Paintbrush,
    numEs: "02",
    titleEs: "Te diseñamos el sitio en 72 horas",
    titleEn: "We design your site in 72 hours",
    descEs: "Nuestro equipo investiga tu rubro y tu competencia, y diseña un sitio web completo y a medida para tu negocio.",
    descEn: "Our team researches your industry and competition, and designs a complete custom website for your business.",
  },
  {
    icon: Eye,
    numEs: "03",
    titleEs: "Lo revisás sin compromiso",
    titleEn: "Review it with no commitment",
    descEs: "Te mostramos el diseño terminado. Si te gusta, seguimos. Si no, te quedás con el diseño gratis. Sin costo, sin letra chica.",
    descEn: "We show you the finished design. If you like it, we proceed. If not, you keep it free. No cost, no fine print.",
  },
  {
    icon: Rocket,
    numEs: "04",
    titleEs: "Tu sitio está online",
    titleEn: "Your site is live",
    descEs: "Lo publicamos, lo mantenemos y lo actualizamos. Vos te ocupás de tu negocio.",
    descEn: "We publish, maintain, and update it. You focus on your business.",
  },
];

const ProcessSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-section-h2 text-center mb-3">
          {t("¿Cómo funciona?", "How does it work?")}
        </h2>
        <p className="text-section-body text-center mb-16">
          {t("Así de simple es el proceso", "The process is this simple")}
        </p>

        <div className="relative mb-16">
          {/* Animated wave path behind cards */}
          <svg
            viewBox="0 0 880 267"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-auto z-0 pointer-events-none hidden lg:block"
            preserveAspectRatio="none"
          >
            <path
              d="M2.2754 111.507C70.0337 -37.3666 128.329 -33.7491 177.162 122.36C225.994 278.469 284.29 282.086 352.048 133.212C419.806 -15.6614 478.102 -12.0439 526.934 144.065C575.767 300.174 634.062 303.791 701.821 154.918C769.579 6.04375 827.874 9.66128 876.707 165.77"
              stroke="#1FAD53"
              strokeWidth="5"
              strokeLinecap="round"
              className="animate-snake-draw"
              style={{
                strokeDasharray: 1200,
                strokeDashoffset: 1200,
              }}
            />
          </svg>

          {/* Character illustration — feet touch top-right corner of card 3 */}
          <img
            src={processCharacter}
            alt=""
            className="absolute bottom-[100%] right-[18%] mb-[-2.5rem] w-[22rem] h-auto z-20 pointer-events-none hidden lg:block"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="relative bg-card rounded-2xl border border-border p-6 shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
                >
                  <img src={dustTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="font-space-grotesk font-bold text-sm text-muted-foreground">{step.numEs}</span>
                    </div>
                    <h3 className="text-box-headline mb-3">{t(step.titleEs, step.titleEn)}</h3>
                    <p className="text-box-body">{t(step.descEs, step.descEn)}</p>
                  </div>
                  {i < 3 && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/30 text-xl hidden lg:block">→</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Why free section + testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-primary/5 rounded-2xl border border-primary/10 p-8">
            <h3 className="font-space-grotesk font-bold text-xl text-foreground mb-4">
              {t("¿Por qué es gratis el diseño?", "Why is the design free?")}
            </h3>
            <p className="text-box-body leading-relaxed">
              {t(
                "Dos razones. Primero, porque sabemos que la mayoría de los negocios no pueden pagar miles de dólares por adelantado sin saber qué van a recibir. Segundo, porque si te hacemos un buen sitio web y lo mantenemos bien, te quedás. Si no, te vas. Es un modelo más honesto que cobrar una fortuna por adelantado y después desaparecer.",
                "Two reasons. First, most businesses can't pay thousands upfront without knowing what they'll get. Second, if we build a great site and maintain it well, you stay. If not, you leave. It's a more honest model than charging upfront and disappearing."
              )}
            </p>
          </div>
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <img src={reviewPhoto} alt="Elvis Mičulis" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover flex-shrink-0" />
            <div>
              <div className="flex gap-1 mb-3 justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={starIcon} alt="" className="w-5 h-5" />
                ))}
              </div>
              <blockquote
                className="font-dm-sans text-base sm:text-lg text-foreground leading-7 mb-4 text-center sm:text-left"
                dangerouslySetInnerHTML={{
                  __html: t(
                    '"El diseño del sitio web es <strong>limpio, moderno,</strong> y hecho con <strong>verdadera atención al detalle</strong> – capturó perfectamente la visión que tenía en mente".',
                    '"The website design is <strong>clean, modern,</strong> and built with <strong>real attention to detail</strong> – it perfectly captured the vision I had in mind".'
                  ),
                }}
              />
              <p className="font-dm-sans font-semibold text-foreground/80 text-center sm:text-left">Elvis Mičulis, <span className="font-normal">Axess Wallets</span></p>
              <p className="font-dm-sans text-sm text-muted-foreground text-center sm:text-left">www.axesswallets.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
