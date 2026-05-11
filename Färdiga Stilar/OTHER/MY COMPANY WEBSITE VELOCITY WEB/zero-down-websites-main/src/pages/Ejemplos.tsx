import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, MessageCircle } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import draNormaImg from "@/assets/ejemplo-dra-norma.png";
import drCifuentesImg from "@/assets/ejemplo-dr-cifuentes.png";
import talcahuanoImg from "@/assets/ejemplo-odontologia-talcahuano.png";
import afraImg from "@/assets/ejemplo-afra.png";
import laPeluImg from "@/assets/ejemplo-la-pelu.png";
import arbolImg from "@/assets/ejemplo-arbol.png";
import disantImg from "@/assets/ejemplo-disant.png";
import scalaImg from "@/assets/ejemplo-scala.png";

const categories = [
  {
    catEs: "Construcción y remodelación", catEn: "Construction & remodeling",
    items: [
      { name: "Grupo Árbol Construcciones", descEs: "Construcción y remodelación llave en mano", descEn: "Turnkey construction & remodeling", link: "https://endless-canvas-play.lovable.app/", img: arbolImg },
      { name: "Disant SRL Constructora", descEs: "Construcción y remodelación en CABA", descEn: "Construction & remodeling in CABA", link: "https://project-ready-starter.lovable.app/", img: disantImg },
    ],
  },
  {
    catEs: "Clínicas y consultorios", catEn: "Clinics & offices",
    items: [
      { name: "Dra. Norma", descEs: "Odontóloga en Belgrano — Sitio profesional con información de tratamientos", descEn: "Dentist in Belgrano — Professional site with treatment info", link: "https://consultorioodontolgicoenbelgrano.lovable.app/", img: draNormaImg },
      { name: "Dr. Cifuentes", descEs: "Odontólogo — Perfil profesional con servicios detallados", descEn: "Dentist — Professional profile with detailed services", link: "https://drcifuentes.lovable.app/", img: drCifuentesImg },
      { name: "Odontología Talcahuano", descEs: "Clínica dental con presentación de equipo y especialidades", descEn: "Dental clinic with team presentation and specialties", link: "https://odontologiatalcahuano.lovable.app/", img: talcahuanoImg },
    ],
  },
  {
    catEs: "Desarrollos inmobiliarios", catEn: "Real estate",
    items: [
      { name: "Grupo Scala Construcciones", descEs: "Departamentos en Caballito con garantía de entrega", descEn: "Apartments in Caballito with delivery guarantee", link: "https://scalanuevositioclicaqui.lovable.app/", img: scalaImg },
    ],
  },
  {
    catEs: "Peluquerías y salones", catEn: "Hair salons",
    items: [
      { name: "La Pelu", descEs: "Peluquería con galería de trabajos y contacto por WhatsApp", descEn: "Hair salon with gallery and WhatsApp contact", link: "https://lapelu.lovable.app/", img: laPeluImg },
      { name: "Afra Peluquería", descEs: "Salón con reserva de turnos y galería visual", descEn: "Salon with booking and visual gallery", link: "https://afra-peluquer-a.vercel.app/?_vercel_share=TcQHnUm1f0gr37pk6hV7Qt7zAXyZHF0O", img: afraImg },
    ],
  },
];

const Ejemplos = () => {
  const { t } = useLanguage();
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);
  useSEO({
    title: "Ejemplos de Diseño Web | Sitios para Negocios en Buenos Aires — Velocity Web",
    description: "Mirá ejemplos de sitios web que diseñamos para consultorios, peluquerías, constructoras y negocios de servicios en Buenos Aires.",
  });

  return (
    <main className="pt-24">
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-section-h2 text-4xl md:text-5xl text-center mb-4">
            {t("Sitios web que construimos para negocios en Buenos Aires", "Websites we built for businesses in Buenos Aires")}
          </h1>
          <p className="text-section-body text-center mb-16">
            {t("Cada uno fue diseñado a medida. No son plantillas. Hacé click para verlo en vivo.", "Each one was custom designed. Not templates. Click to see them live.")}
          </p>

          {categories.map((cat, ci) => (
            <div key={ci} className="mb-12">
              <h2 className="font-outfit font-bold text-2xl text-foreground mb-6">{t(cat.catEs, cat.catEn)}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item, ii) => (
                  <div key={ii} className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden">
                      {item.img ? (
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover object-top" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                          <span className="font-space-grotesk font-bold text-xl text-foreground/30">{item.name}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-outfit font-bold text-lg text-foreground">{item.name}</h3>
                      <p className="text-box-body mt-1 mb-3">{t(item.descEs, item.descEn)}</p>
                      {item.link ? (
                        <button
                          onClick={() => setIframeUrl(item.link)}
                          className="inline-flex items-center gap-1 font-dm-sans font-semibold text-sm text-primary hover:underline"
                        >
                          {t("Ver sitio en vivo", "View live site")} <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <span className="inline-flex items-center gap-1 font-dm-sans font-semibold text-sm text-muted-foreground/50">
                          {t("Próximamente", "Coming soon")}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-12">
            <p className="text-section-body mb-6">
              {t(
                "Todos estos sitios fueron construidos en 72 horas o menos, sin costo inicial para el cliente.",
                "All these sites were built in 72 hours or less, with no upfront cost for the client."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contacto" className="btn-primary">{t("Quiero ver un diseño para mi negocio", "I want a design for my business")}</a>
              <a href="https://wa.me/5491154963756" target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                {t("Escribinos por WhatsApp", "Message us on WhatsApp")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Iframe modal */}
      {iframeUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setIframeUrl(null)}
        >
          <div
            className="relative w-[90vw] h-[90vh] bg-card rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIframeUrl(null)}
              className="absolute top-3 right-3 z-10 bg-foreground/80 hover:bg-foreground text-background rounded-full p-2 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={iframeUrl}
              className="w-full h-full border-0"
              title="Demo site preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Ejemplos;
