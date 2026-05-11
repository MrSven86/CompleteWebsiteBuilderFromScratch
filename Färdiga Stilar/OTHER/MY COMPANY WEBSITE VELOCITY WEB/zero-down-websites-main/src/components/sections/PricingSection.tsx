import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";

const PricingSection = () => {
  const { t } = useLanguage();

  const tiers = [
    {
      nameEs: "Profesional", nameEn: "Professional", price: "$59", highlight: false,
      descEs: "Conseguí turnos mientras dormís. Un sitio web rápido, diseñado para convertir visitas en clientes, que canaliza a los visitantes directo a tu WhatsApp y transforma llamadas en turnos — incluso a las 2 de la mañana. Nosotros nos encargamos de todo en persona — dominio, hosting, configuración, onboarding. Vos te dedicás a tu negocio.",
      descEn: "Get bookings while you sleep. A fast website designed to convert visits into clients, channeling visitors directly to your WhatsApp and turning calls into appointments — even at 2 AM. We handle everything in person — domain, hosting, setup, onboarding. You focus on your business.",
      featuresEs: ["Sitio web diseñado a medida", "Formulario inteligente con alertas por WhatsApp y email", "Botón de WhatsApp con mensaje pre-escrito", "Onboarding en persona — dominio, hosting, configuración", "Soporte continuo"],
      featuresEn: ["Custom-designed website", "Smart form with WhatsApp and email alerts", "WhatsApp button with pre-written message", "In-person onboarding — domain, hosting, setup", "Ongoing support"],
    },
    {
      nameEs: "Visibilidad", nameEn: "Visibility", price: "$98", highlight: true, badge: t("Más completo", "Most complete"),
      descEs: "Todo lo del plan Profesional — más un sitio web hiper-optimizado para búsquedas locales. Cada página, cada palabra, cada pregunta frecuente pensada para que aparezcas cuando alguien en tu zona busca lo que hacés. Una configuración de 20 pasos de tu perfil de Google Mi Negocio para potenciar tu presencia en Google Maps. Todos tus sistemas — reseñas, turnos, Instagram — conectados y trabajando juntos para que tu presencia online crezca sola.",
      descEn: "Everything in Professional — plus a website hyper-optimized for local search. Every page, every word, every FAQ designed so you appear when someone in your area searches for what you do. A 20-step Google My Business setup to boost your Google Maps presence. All your systems — reviews, bookings, Instagram — connected and working together so your online presence grows on its own.",
      featuresEs: ["Todo lo del plan Profesional", "Actualizaciones ilimitadas", "Sesión de fotos gratuita", "Hiper-optimizado para búsquedas locales", "Configuración de 20 pasos de Google Mi Negocio", "Gestión continua de Google Mi Negocio", "Sistema de turnos", "Integraciones inteligentes de reseñas e Instagram"],
      featuresEn: ["Everything in Professional", "Unlimited updates", "Free photo session", "Hyper-optimized for local search", "20-step Google My Business setup", "Ongoing Google My Business management", "Booking system", "Smart reviews & Instagram integrations"],
    },
    {
      nameEs: "SEO Avanzado", nameEn: "Advanced SEO", price: "$499", highlight: false,
      descEs: "Todo lo del plan Visibilidad — más un equipo trabajando activamente en la autoridad de tu sitio todos los meses. Contenido nuevo, enlaces nuevos, páginas nuevas — trabajo SEO real que se acumula con el tiempo. Para negocios listos para dominar los resultados de búsqueda en su ciudad.",
      descEn: "Everything in Visibility — plus a team actively working on your site's authority every month. New content, new links, new pages — real SEO work that compounds over time. For businesses ready to dominate search results in their city.",
      featuresEs: ["Todo lo del plan Visibilidad", "Artículos de blog mensuales, optimización y citaciones", "Compra mensual de enlaces de calidad"],
      featuresEn: ["Everything in Visibility", "Monthly blog articles, optimization and citations", "Monthly quality link building"],
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-section-h2 text-center mb-3">
          {t("Precios", "Pricing")}
        </h2>
        <p className="text-section-body text-center mb-4">
          {t("Sin costo inicial. Cancelás cuando quieras.", "No upfront cost. Cancel anytime.")}
        </p>
        <p className="text-center font-dm-sans text-sm text-accent font-semibold mb-16">
          {t("El diseño es gratis. Solo pagás si decidís seguir.", "The design is free. Only pay if you decide to continue.")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 border transition-shadow ${
                tier.highlight
                  ? "bg-primary text-primary-foreground border-primary shadow-xl scale-[1.02]"
                  : "bg-card border-border shadow-sm hover:shadow-md"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-outfit font-semibold text-xs px-4 py-1 rounded-full">
                  {tier.badge}
                </span>
              )}
              <h3 className="font-outfit font-bold text-xl mb-2">{t(tier.nameEs, tier.nameEn)}</h3>
              <div className="mb-4">
                <span className="font-outfit font-bold text-4xl">{tier.price}</span>
                <span className={`text-sm font-dm-sans ${tier.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}> USD/{t("mes", "mo")}</span>
              </div>
              <p className={`text-sm font-dm-sans mb-6 ${tier.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {t(tier.descEs, tier.descEn)}
              </p>
              <ul className="space-y-2 mb-6">
                {(t(tier.featuresEs.join("|"), tier.featuresEn.join("|"))).split("|").map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm font-dm-sans">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlight ? "text-accent" : "text-whatsapp"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contacto" className={`block text-center font-outfit font-semibold text-sm py-3 rounded-xl transition-all ${
                tier.highlight ? "bg-accent text-accent-foreground hover:brightness-110" : "bg-primary text-primary-foreground hover:opacity-90"
              }`}>
                {t("Quiero mi sitio web", "I want my website")}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-box-body mb-4">
            {t(
              "$0 de costo inicial en todos los planes. El diseño es gratis — solo empezás a pagar si decidís seguir adelante. Cancelás con 90 días de aviso. El diseño siempre es tuyo.",
              "$0 upfront on all plans. Design is free — you only start paying if you decide to continue. Cancel with 90 days notice. The design is always yours."
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
