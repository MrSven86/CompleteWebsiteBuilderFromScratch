import PricingSection from "@/components/sections/PricingSection";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const Precios = () => {
  const { t } = useLanguage();
  useSEO({
    title: "Precios de Diseño Web | Planes desde $39 USD/mes sin Costo Inicial — Velocity Web",
    description: "Planes de diseño web profesional desde $39 USD/mes. Sin costo inicial. Incluye hosting, dominio, actualizaciones ilimitadas y soporte continuo.",
  });

  return (
    <main className="pt-24">
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-section-h2 text-4xl md:text-5xl mb-4">
            {t("Precios claros. Sin costo inicial. Sin sorpresas.", "Clear pricing. No upfront cost. No surprises.")}
          </h1>
          <p className="text-section-body max-w-2xl mx-auto">
            {t(
              "No importa qué plan elijas — diseñamos tu sitio web gratis primero. Solo empezás a pagar si decidís seguir adelante.",
              "No matter which plan you choose — we design your website free first. You only start paying if you decide to continue."
            )}
          </p>
        </div>
      </section>
      <PricingSection />

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <details className="mb-6 bg-card rounded-xl p-6 border border-border">
            <summary className="font-outfit font-bold text-lg text-foreground cursor-pointer">
              {t("¿Por qué un pago mensual y no un pago único grande?", "Why a monthly payment instead of a large one-time fee?")}
            </summary>
            <p className="text-box-body mt-3 leading-relaxed">
              {t(
                "Por dos razones. Primero, porque la mayoría de los negocios no pueden poner miles de dólares sobre la mesa antes de ver un solo resultado. Segundo, porque un pago mensual nos obliga a ganarnos tu confianza todos los meses. Si hacemos un buen trabajo, te quedás. Si no, te vas.",
                "Two reasons. First, most businesses can't put thousands on the table before seeing results. Second, a monthly payment forces us to earn your trust every month. If we do good work, you stay. If not, you leave."
              )}
            </p>
          </details>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contacto" className="btn-primary">{t("Quiero mi diseño", "I want my design")}</a>
              <a href="https://wa.me/5491154963756" target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" /> {t("Escribinos", "Message us")}
              </a>
            </div>
            <p className="text-muted-foreground font-dm-sans text-sm mt-3">{t("72 horas. Sin compromiso. Sin tarjeta.", "72 hours. No commitment. No credit card.")}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Precios;
