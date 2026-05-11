import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const ComoFunciona = () => {
  const { t } = useLanguage();
  useSEO({
    title: "Cómo Funciona | Diseño Web a Medida en 72 Horas — Velocity Web",
    description: "Te mostramos un diseño terminado sin costo y sin compromiso. Conocé el proceso paso a paso para tener tu sitio web profesional.",
  });

  const steps = [
    {
      titleEs: "Paso 1: Nos contás sobre tu negocio",
      titleEn: "Step 1: Tell us about your business",
      descEs: "Nos escribís por WhatsApp o completás el formulario en nuestra web. Solo necesitamos saber lo básico: qué hace tu negocio, dónde estás ubicado, quiénes son tus clientes, y si tenés algo que te diferencie de la competencia.",
      descEn: "Message us on WhatsApp or fill out the form on our site. We just need the basics: what your business does, where you're located, who your clients are, and what sets you apart.",
    },
    {
      titleEs: "Paso 2: Investigamos tu rubro y tu competencia",
      titleEn: "Step 2: We research your industry and competition",
      descEs: "Antes de diseñar nada, estudiamos tu mercado. Miramos qué hacen tus competidores, qué buscan tus clientes en Google, y qué mensajes funcionan mejor en tu rubro.",
      descEn: "Before designing anything, we study your market. We look at what your competitors do, what your clients search for, and what messages work best in your industry.",
    },
    {
      titleEs: "Paso 3: Diseñamos tu sitio web completo en 72 horas",
      titleEn: "Step 3: We design your complete website in 72 hours",
      descEs: "Con toda esa información, nuestro equipo diseña un sitio web a medida para tu negocio. Los textos, la estructura, los colores, las fotos — todo pensado para tu negocio específicamente. No usamos plantillas.",
      descEn: "With all that info, our team designs a custom website for your business. Copy, structure, colors, photos — all specifically tailored. No templates.",
    },
    {
      titleEs: "Paso 4: Lo revisás sin compromiso",
      titleEn: "Step 4: Review it with no commitment",
      descEs: "Te mostramos el sitio terminado. Lo mirás con calma, nos das tu opinión. Si querés ajustar algo, hacemos una ronda de cambios incluida. Si decidís que no es para vos — el diseño es tuyo, gratis.",
      descEn: "We show you the finished site. Take your time, give us feedback. Want adjustments? One round of changes is included. If you decide it's not for you — the design is yours, free.",
    },
    {
      titleEs: "Paso 5: Tu sitio está online",
      titleEn: "Step 5: Your site goes live",
      descEs: "Una vez que aprobás el diseño, lo publicamos en un dominio propio y lo dejamos listo para recibir visitas. A partir de ahí, nosotros nos encargamos: hosting, actualizaciones, respaldos, soporte.",
      descEn: "Once you approve the design, we publish it on your own domain. From there, we handle everything: hosting, updates, backups, support.",
    },
  ];

  return (
    <main className="pt-24">
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-section-h2 text-4xl md:text-5xl text-center mb-4">
            {t("Así construimos tu sitio web — paso a paso", "How we build your website — step by step")}
          </h1>
          <p className="text-section-body text-center mb-16">
            {t(
              "Desde que nos contactás hasta que tu sitio está online, todo el proceso es transparente.",
              "From first contact to your site going live, the entire process is transparent."
            )}
          </p>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="border-l-4 border-accent pl-6">
                <h2 className="font-outfit font-bold text-xl text-foreground mb-3">{t(step.titleEs, step.titleEn)}</h2>
                <p className="text-box-body leading-relaxed">{t(step.descEs, step.descEn)}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="font-outfit font-bold text-xl text-foreground mb-3">
              {t("¿Qué pasa después?", "What happens next?")}
            </h3>
            <p className="text-box-body leading-relaxed">
              {t(
                "Tu sitio no queda quieto. Si estás en el plan Visibilidad ($98/mes), nuestro equipo trabaja todos los meses en tu posicionamiento en Google, mantiene tu perfil de Google Mi Negocio actualizado, y tu sitio muestra automáticamente tus publicaciones de Instagram y tus reseñas de Google.",
                "Your site doesn't sit still. With the Visibility plan ($98/mo), our team works monthly on your Google positioning, keeps your Google My Business updated, and your site automatically shows your Instagram posts and Google reviews."
              )}
            </p>
          </div>

          <div className="mt-12 text-center">
            <h3 className="font-outfit font-bold text-2xl text-foreground mb-4">
              {t("¿Querés arrancar?", "Ready to start?")}
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contacto" className="btn-primary">{t("Quiero mi diseño gratis", "I want my free design")}</a>
              <a href="https://wa.me/5491154963756" target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                {t("Escribinos por WhatsApp", "Message us on WhatsApp")}
              </a>
            </div>
            <p className="text-muted-foreground font-dm-sans text-sm mt-3">{t("Sin tarjeta. Sin compromiso.", "No credit card. No commitment.")}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ComoFunciona;
