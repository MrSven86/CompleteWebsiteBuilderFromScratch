import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle, Info, Users } from "lucide-react";

const GatewaySection = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Info,
      titleEs: "Cómo funciona",
      titleEn: "How it works",
      descEs: "El proceso completo, paso a paso, desde el primer contacto hasta el sitio publicado.",
      descEn: "The complete process, step by step, from first contact to published site.",
      to: "/como-funciona",
    },
    {
      icon: Users,
      titleEs: "Sobre nosotros",
      titleEn: "About us",
      descEs: "Quiénes somos, de dónde venimos, y por qué hacemos esto.",
      descEn: "Who we are, where we come from, and why we do this.",
      to: "/sobre-nosotros",
    },
    {
      icon: HelpCircle,
      titleEs: "Preguntas frecuentes",
      titleEn: "FAQ",
      descEs: "Todo lo que necesitás saber antes de empezar.",
      descEn: "Everything you need to know before getting started.",
      to: "/faq",
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-section-h2 text-center mb-12">
          {t("Conocé más sobre cómo trabajamos", "Learn more about how we work")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Link
                key={i}
                to={card.to}
                className="bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-md transition-all duration-300 group hover:bg-[#10244C] hover:border-[#10244C]"
              >
                <Icon className="w-8 h-8 text-primary mb-4 group-hover:text-white transition-colors duration-300" />
                <h3 className="font-outfit font-bold text-lg text-foreground mb-2 group-hover:text-white transition-colors duration-300">{t(card.titleEs, card.titleEn)}</h3>
                <p className="text-box-body mb-4 group-hover:text-white/80 transition-colors duration-300">{t(card.descEs, card.descEn)}</p>
                <span className="inline-flex items-center gap-1 font-dm-sans font-semibold text-sm text-primary group-hover:text-[#FFCC33] group-hover:gap-2 transition-all duration-300">
                  {t("Ver más", "Learn more")} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GatewaySection;
