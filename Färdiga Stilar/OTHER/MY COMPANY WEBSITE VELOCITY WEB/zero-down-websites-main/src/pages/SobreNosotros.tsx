import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const SobreNosotros = () => {
  const { t } = useLanguage();
  useSEO({
    title: "Sobre Nosotros | Agencia de Diseño Web con 10+ Años de Experiencia — Velocity Web",
    description: "Más de 10 años de experiencia en diseño web profesional. Equipo local en Buenos Aires. Sitios web a medida para pequeños negocios.",
  });

  return (
    <main className="pt-24">
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-section-h2 text-4xl md:text-5xl text-center mb-4">
            {t(
              "Una agencia sueca que hace sitios web profesionales accesibles para negocios en Argentina",
              "A Swedish agency making professional websites accessible for businesses in Argentina"
            )}
          </h1>
          <p className="text-section-body text-center mb-16">
            {t(
              "Más de 10 años de experiencia en agencias digitales en Estocolmo.",
              "10+ years of experience in digital agencies in Stockholm."
            )}
          </p>

          <div className="space-y-6 mb-16">
            {[
              {
                es: "Pasamos años trabajando en el mundo de las agencias digitales en Estocolmo — aprendiendo cómo se construyen sitios web profesionales de verdad: el proceso de diseño, la investigación de mercado, los fundamentos de SEO, la ciencia detrás de lo que hace que un visitante se convierta en cliente.",
                en: "We spent years working in Stockholm's digital agency world — learning how professional websites are really built: the design process, market research, SEO fundamentals, the science behind what turns visitors into customers.",
              },
              {
                es: "Y nos dimos cuenta de algo: los negocios chicos — peluquerías, consultorios, pintores, comercios — necesitan exactamente el mismo nivel de sitio web que las empresas grandes. Pero no pueden pagar lo que cobra una agencia tradicional.",
                en: "And we realized something: small businesses — salons, clinics, painters, shops — need exactly the same level of website as big companies. But they can't afford what a traditional agency charges.",
              },
              {
                es: "Combinamos nuestra experiencia en agencias con herramientas modernas que redujeron drásticamente el tiempo de producción. El resultado: podemos hacer un sitio web profesional, diseñado a medida, con una propuesta de valor investigada — y entregarlo en 72 horas, sin cobrar nada por adelantado.",
                en: "We combined our agency experience with modern tools that drastically reduced production time. The result: we can build a professional, custom-designed website with a researched value proposition — delivered in 72 hours, with nothing charged upfront.",
              },
              {
                es: "Hoy trabajamos con negocios en Argentina y en otros países. No somos una agencia gigante y no pretendemos serlo. Somos un equipo chico que hace un producto bueno, a un precio justo, con un modelo honesto.",
                en: "Today we work with businesses in Argentina and other countries. We're not a giant agency and we don't pretend to be. We're a small team that makes a good product, at a fair price, with an honest model.",
              },
            ].map((p, i) => (
              <p key={i} className="text-section-body leading-relaxed">{t(p.es, p.en)}</p>
            ))}
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 mb-12">
            <h2 className="font-outfit font-bold text-2xl text-foreground mb-4">
              {t("Lo que creemos sobre los sitios web", "What we believe about websites")}
            </h2>
            <p className="text-box-body leading-relaxed mb-4">
              {t(
                "Un sitio web es una conversación. Cuando alguien llega a tu página, está preguntando: ¿quién sos?, ¿qué hacés?, ¿por qué te elegiría a vos? La mayoría de los sitios web responden mal a esas preguntas.",
                "A website is a conversation. When someone lands on your page, they're asking: who are you? what do you do? why should I choose you? Most websites answer those questions poorly."
              )}
            </p>
            <p className="text-box-body leading-relaxed">
              {t(
                "Un buen sitio web contesta esas tres preguntas en los primeros segundos, con evidencia que el visitante pueda creer. Por eso cada sitio que construimos empieza con una investigación de tu negocio y tu mercado.",
                "A good website answers those three questions in the first seconds, with evidence the visitor can believe. That's why every site we build starts with researching your business and market."
              )}
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-outfit font-bold text-2xl text-foreground mb-4">
              {t("¿Querés ver qué podemos hacer por tu negocio?", "Want to see what we can do for your business?")}
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contacto" className="btn-primary">{t("Quiero mi diseño gratis", "I want my free design")}</a>
              <a href="https://wa.me/5491154963756" target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" /> {t("Escribinos", "Message us")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SobreNosotros;
