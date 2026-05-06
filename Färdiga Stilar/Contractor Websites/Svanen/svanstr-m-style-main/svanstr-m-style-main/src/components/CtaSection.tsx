import { Phone, Check } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="svan-section svan-bg-light py-16">
      <div className="svan-container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold svan-text-body mb-4">
            Solicite ayuda ahora
          </h2>
          <p className="svan-text-body opacity-80 mb-2">
            Contáctese con nuestros pintores profesionales para agendar una
            visita o solicitar un presupuesto sin compromiso.
          </p>
          <p className="svan-text-body font-semibold mb-6">
            ¡Respuesta en menos de 24 horas!
          </p>
          <a href="tel:+5491112345678" className="svan-btn-yellow">
            <Phone className="w-4 h-4" />
            Llamar (011) 1234-5678
          </a>
        </div>
        <div>
          <ul className="space-y-3">
            {[
              "Más de 20 años de experiencia",
              "3.000 proyectos completados por año",
              "Pintores certificados y asegurados",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 svan-text-body text-lg"
              >
                <Check className="w-5 h-5 flex-shrink-0" style={{ color: "hsl(240 100% 20%)" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
