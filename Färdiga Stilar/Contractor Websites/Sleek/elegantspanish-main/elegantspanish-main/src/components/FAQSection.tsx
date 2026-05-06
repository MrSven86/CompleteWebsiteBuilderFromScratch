import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import faqPoster from "@/assets/faq-poster.webp";
import faqDots from "@/assets/faq-dots.svg";

const faqs = [
  {
    question: "¿Tienen licencia y seguro?",
    answer:
      "Sí, contamos con licencia profesional activa y en buen estado. Operamos con fianza de contratista y como una corporación debidamente estructurada. Nuestra calificación independiente nos ubica en el nivel superior de contratistas con licencia.",
  },
  {
    question: "¿Qué áreas atienden?",
    answer:
      "Estamos ubicados en la zona local y servimos a toda la región circundante, incluyendo las comunidades vecinas y áreas metropolitanas cercanas.",
  },
  {
    question: "¿Qué tipos de servicios ofrecen?",
    answer:
      "Manejamos proyectos residenciales y comerciales, incluyendo servicios interiores, exteriores, renovación de acabados y toda la preparación y reparación necesaria de superficies.",
  },
  {
    question: "¿Cuánto tiempo toma un proyecto típico?",
    answer:
      "El tiempo depende del tamaño y alcance del proyecto. Los proyectos pequeños generalmente toman 1-2 días, mientras que los proyectos más grandes pueden tomar de 3 a 7 días según las condiciones. Le proporcionaremos un cronograma específico con su presupuesto.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="flex-1 max-w-[680px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-foreground" />
              <span className="text-foreground text-[13px] font-semibold tracking-[0.15em] uppercase">
                Preguntas Comunes
              </span>
            </div>

            <h2 className="font-serif text-[48px] leading-[56px] text-foreground mb-4">
              Preguntas<br />Frecuentes
            </h2>

            <p className="text-muted-foreground text-[15px] leading-[24px] mb-10 max-w-[580px]">
              Aquí encontrará respuestas a las preguntas más comunes sobre nuestros servicios y lo que puede esperar.
            </p>

            <div className="flex flex-col">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border-b border-border/40 py-6">
                    <button
                      className="flex items-start justify-between w-full text-left gap-4"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-hero-cta font-semibold text-[16px] leading-[26px] shrink-0">P.</span>
                        <span className="font-semibold text-foreground text-[16px] leading-[26px]">
                          {faq.question}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#4a6741] flex items-center justify-center shrink-0">
                        {isOpen ? <Minus className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5 text-white" />}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="mt-4 ml-8">
                        <p className="text-muted-foreground text-[14px] leading-[24px]">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-center relative">
            <div className="absolute top-12 right-4 w-[420px] h-[540px] bg-hero-cta rounded-2xl" />
            <img src={faqDots} alt="" className="absolute bottom-16 left-8 w-[140px] h-[140px] opacity-30" />
            <div className="relative z-10 w-[400px] h-[470px] rounded-2xl shadow-lg translate-x-2 -translate-y-4 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={faqPoster}
                className="w-full h-full object-cover"
              >
                <source src="https://mrsven.com/Videos/Anchor%20Painting.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;