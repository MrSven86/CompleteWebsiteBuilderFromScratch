import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import arrowSvg from "@/assets/arrow-hand-drawn.svg";
import exAfra from "@/assets/example-afra.png";
import exConstructora from "@/assets/example-constructora.png";
import exDraNorma from "@/assets/example-dra-norma.png";
import exScala from "@/assets/example-scala.png";
import exAvant from "@/assets/example-avant.png";

const laptopSites = [
  { src: exAfra, nameEs: "Afra Peluquería", nameEn: "Afra Hair Salon", catEs: "Peluquerías y salones", catEn: "Hair salons", link: "https://afra-peluquer-a.vercel.app/?_vercel_share=TcQHnUm1f0gr37pk6hV7Qt7zAXyZHF0O" },
  { src: exConstructora, nameEs: "Grupo Árbol Construcciones", nameEn: "Grupo Árbol Construcciones", catEs: "Construcción", catEn: "Construction", link: "https://endless-canvas-play.lovable.app/" },
  { src: exDraNorma, nameEs: "Dra. Norma", nameEn: "Dra. Norma", catEs: "Consultorios odontológicos", catEn: "Dental clinics", link: "https://consultorioodontolgicoenbelgrano.lovable.app/" },
  { src: exScala, nameEs: "Grupo Scala", nameEn: "Grupo Scala", catEs: "Desarrollos inmobiliarios", catEn: "Real estate", link: "https://scalanuevositioclicaqui.lovable.app/" },
  { src: exAvant, nameEs: "Disant SRL", nameEn: "Disant SRL", catEs: "Construcción", catEn: "Construction", link: "https://project-ready-starter.lovable.app/" },
];

const AboutSection = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % laptopSites.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentSite = laptopSites[current];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-section-h2 mb-6">
              {t(
                "Sitios web diseñados a medida para tu negocio",
                "Custom-designed websites for your business"
              )}
            </h2>
            <p className="text-section-body mb-4">
              {t(
                "Cada sitio web que construimos empieza con un análisis de tu negocio, tus competidores y tus clientes. A partir de eso diseñamos la estructura, los textos y los llamados a la acción — las partes que hacen que un visitante se convierta en cliente.",
                "Every website we build starts with an analysis of your business, competitors, and clients. From that, we design the structure, copy, and calls to action — the parts that turn visitors into customers."
              )}
            </p>
            <p className="text-section-body">
              {t(
                "No usamos plantillas. Tu sitio es único.",
                "We don't use templates. Your site is unique."
              )}
            </p>
          </div>
          <div className="relative flex justify-end items-center">
            {/* Hand-drawn arrow */}
            <img
              src={arrowSvg}
              alt=""
              className="absolute top-12 -left-10 w-28 lg:w-32 hidden lg:block"
            />
            {/* Rotating laptop mockups with hover overlay */}
            <div
              className="relative w-full max-w-md lg:max-w-lg aspect-[4/3]"
            >
              {laptopSites.map((site, i) => (
                <img
                  key={i}
                  src={site.src}
                  alt={t("Ejemplo de sitio web diseñado a medida", "Example of a custom-designed website")}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
