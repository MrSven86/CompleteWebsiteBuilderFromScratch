import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      <div className="relative">
        <img
          src="/images/hero.jpg"
          alt="Acme Painting Company - Buenos Aires"
          className="w-full h-auto min-h-[500px] object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="svan-container">
            <div className="max-w-2xl svan-text-white">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                Pintores Profesionales Certificados en Buenos Aires
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Acme Painting Company ofrece servicios profesionales de pintura
                residencial y comercial en toda la zona de Buenos Aires. Calidad
                garantizada, todo el año.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <a href="tel:+5491112345678" className="svan-btn-yellow">
                  <Phone className="w-4 h-4" />
                  Llamar (011) 1234-5678
                </a>
                <a href="#form" className="svan-btn-outline-white">
                  Solicitar Presupuesto
                </a>
              </div>
              <p className="text-sm opacity-80">
                También puede contactarnos por e-mail:{" "}
                <a href="mailto:info@acmepainting.com.ar" className="underline">
                  info@acmepainting.com.ar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
