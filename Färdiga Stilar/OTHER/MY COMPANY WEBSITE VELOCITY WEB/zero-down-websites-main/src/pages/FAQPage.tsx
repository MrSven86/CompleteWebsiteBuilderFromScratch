import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";

const FAQPage = () => {
  const { t } = useLanguage();
  useSEO({
    title: "Preguntas Frecuentes | Diseño Web Buenos Aires — Velocity Web",
    description: "Respuestas a las preguntas más comunes sobre nuestro servicio de diseño web. Costo, proceso, plazos y más.",
  });

  const faqs = [
    { qEs: "¿El sitio web es realmente gratis?", qEn: "Is the website really free?", aEs: "El diseño inicial es gratis. Te mostramos un sitio web completo y terminado, diseñado a medida para tu negocio, sin cobrarte nada. Si te gusta y querés que lo publiquemos, empezás a pagar el plan mensual que elijas. Si no te gusta, el diseño es tuyo y no te cobramos un peso.", aEn: "The initial design is free. We show you a complete, finished website custom-designed for your business at no charge. If you like it and want us to publish it, you start the monthly plan. If not, the design is yours and we charge nothing." },
    { qEs: "¿Cuál es el costo mensual?", qEn: "What's the monthly cost?", aEs: "Depende del plan. El plan Starter es $39 USD/mes, el Profesional es $59 USD/mes, y el Visibilidad es $98 USD/mes. Todos incluyen hosting, dominio, actualizaciones ilimitadas y soporte. No hay costo inicial en ningún plan.", aEn: "Depends on the plan. Starter is $39/mo, Professional is $59/mo, and Visibility is $98/mo. All include hosting, domain, unlimited updates, and support. No upfront cost on any plan." },
    { qEs: "¿Por qué cobran en dólares?", qEn: "Why do you charge in USD?", aEs: "Porque así tu costo es predecible. Pagás lo mismo todos los meses, sin importar lo que pase con la inflación o el tipo de cambio.", aEn: "Because your cost stays predictable. You pay the same every month regardless of inflation or exchange rates." },
    { qEs: "¿Qué pasa si no me gusta el diseño?", qEn: "What if I don't like the design?", aEs: "Te lo quedás gratis. No te cobramos nada. Podés usarlo, modificarlo, o guardarlo.", aEn: "You keep it free. We charge nothing. You can use it, modify it, or save it." },
    { qEs: "¿Puedo cancelar cuando quiera?", qEn: "Can I cancel anytime?", aEs: "Sí. Pedimos 90 días de aviso para cancelar. Durante esos 90 días seguís teniendo tu sitio web activo.", aEn: "Yes. We ask for 90 days notice. During those 90 days your site stays active." },
    { qEs: "¿Quién es el dueño del sitio web?", qEn: "Who owns the website?", aEs: "Vos. El diseño es tuyo. Si en algún momento decidís irte, te entregamos todos los archivos.", aEn: "You. The design is yours. If you decide to leave, we hand over all files." },
    { qEs: "¿Qué incluye el mantenimiento mensual?", qEn: "What does monthly maintenance include?", aEs: "Hosting, dominio propio, respaldos diarios, actualizaciones ilimitadas, soporte técnico, y recuperación de emergencia. En el plan Visibilidad también incluye SEO mensual, Google Mi Negocio, e integraciones automáticas.", aEn: "Hosting, custom domain, daily backups, unlimited updates, tech support, and emergency recovery. The Visibility plan also includes monthly SEO, Google My Business, and automatic integrations." },
    { qEs: "¿Qué es el feed de Instagram y el feed de reseñas?", qEn: "What's the Instagram and reviews feed?", aEs: "En el plan Visibilidad, tu sitio se conecta con tu Instagram y Google. Las fotos y reseñas aparecen automáticamente en tu sitio.", aEn: "In the Visibility plan, your site connects to your Instagram and Google. Photos and reviews appear automatically on your site." },
    { qEs: "¿Por qué una empresa sueca ofrece esto en Argentina?", qEn: "Why does a Swedish company offer this in Argentina?", aEs: "Porque el modelo funciona. Tenemos más de 10 años de experiencia en Estocolmo y encontramos la manera de entregar la misma calidad a un costo accesible.", aEn: "Because the model works. We have 10+ years of experience in Stockholm and found a way to deliver the same quality at an accessible cost." },
    { qEs: "¿Cómo sé que no van a desaparecer?", qEn: "How do I know you won't disappear?", aEs: "Somos una empresa registrada en Suecia con más de una década de trayectoria. Nuestro modelo depende de que te quedés — eso nos incentiva a dar buen servicio.", aEn: "We're a registered Swedish company with over a decade of track record. Our model depends on you staying — that incentivizes us to provide good service." },
    { qEs: "¿Puedo hablar con alguien antes de empezar?", qEn: "Can I talk to someone before starting?", aEs: "Sí. Escribinos por WhatsApp y te respondemos en el día. Sin presión, sin compromiso.", aEn: "Yes. Message us on WhatsApp and we'll respond same day. No pressure, no commitment." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="pt-24">
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-section-h2 text-4xl md:text-5xl text-center mb-4">
            {t("Preguntas frecuentes", "Frequently Asked Questions")}
          </h1>
          <p className="text-section-body text-center mb-16">
            {t(
              "Todo lo que necesitás saber antes de empezar. Si no encontrás tu pregunta, escribinos por WhatsApp.",
              "Everything you need to know before starting. If you can't find your question, message us on WhatsApp."
            )}
          </p>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-outfit font-bold text-foreground pr-4">{t(faq.qEs, faq.qEn)}</span>
                  <span className="text-muted-foreground text-xl flex-shrink-0">{openIndex === i ? "−" : "+"}</span>
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5">
                    <p className="text-box-body leading-relaxed">{t(faq.aEs, faq.aEn)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://wa.me/5491154963756" target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              {t("Escribinos por WhatsApp", "Message us on WhatsApp")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;
