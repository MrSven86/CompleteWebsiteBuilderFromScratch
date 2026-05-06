import { useState } from "react";
import { Check } from "lucide-react";
import kitchenImg from "@/assets/gallery-kitchen.png";
import bathroomImg from "@/assets/gallery-bathroom.png";

const services = [
  "Trabajos de Interior",
  "Trabajos de Exterior",
  "Remodelaciones",
  "Servicios Comerciales",
  "Consultoría de Diseño",
  "Otro",
];

const trustBadges = [
  { label: "Servicio sin complicaciones" },
  { label: "Consulta personalizada" },
  { label: "Comunicación rápida\ny transparente" },
  { label: "Totalmente licenciado\ny certificado" },
];

const CTASection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    city: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative bg-foreground/90 py-20 px-8 md:px-16 lg:px-[258px]">
      <div className="max-w-[1404px] mx-auto">
        {/* Header */}
        <p className="text-muted/60 font-gibson text-sm tracking-wide mb-4">
          Acme Servicios Pro - Tu Socio de Confianza en Servicios Profesionales
        </p>
        <h2 className="text-primary-foreground font-gibson text-4xl md:text-5xl font-medium leading-tight tracking-wide max-w-[670px] mb-6">
          Creemos que cada espacio tiene el potencial de ser extraordinario
        </h2>
        <p className="text-primary-foreground font-gibson text-base font-light leading-7 max-w-[720px] mb-16">
          Desde 2010, bajo el liderazgo de nuestro fundador, hemos estado transformando hogares y
          negocios en lugares mágicos y vibrantes que reflejan la personalidad única
          de nuestros clientes.
        </p>

        {/* Content: Form + Images */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-primary-foreground rounded-xl p-8 w-full lg:max-w-[640px] space-y-4"
          >
            <p className="text-foreground font-outfit text-lg font-bold">
              ¿Interesado en trabajar con nosotros?
            </p>
            <h3 className="text-foreground font-outfit text-2xl font-bold mb-4">
              Completa este formulario para conectarte.
            </h3>

            <input
              name="fullName"
              type="text"
              placeholder="Nombre Completo"
              value={formData.fullName}
              onChange={handleChange}
              maxLength={100}
              className="w-full h-12 px-4 rounded-lg border border-foreground text-foreground font-outfit placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                name="email"
                type="email"
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleChange}
                maxLength={255}
                className="flex-1 h-12 px-4 rounded-lg border border-foreground text-foreground font-outfit placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Número de Teléfono"
                value={formData.phone}
                onChange={handleChange}
                maxLength={20}
                className="flex-1 h-12 px-4 rounded-lg border border-foreground text-foreground font-outfit placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg border border-foreground text-foreground font-outfit focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-primary-foreground"
            >
              <option value="" disabled>
                -- Selecciona un Servicio --
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <input
              name="city"
              type="text"
              placeholder="Tu Ciudad (opcional)"
              value={formData.city}
              onChange={handleChange}
              maxLength={100}
              className="w-full h-12 px-4 rounded-lg border border-foreground text-foreground font-outfit placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <textarea
              name="message"
              placeholder="Cuéntanos más sobre tu proyecto aquí"
              value={formData.message}
              onChange={handleChange}
              maxLength={1000}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-foreground text-foreground font-outfit placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />

            <button
              type="submit"
              className="w-full h-14 bg-foreground text-primary-foreground font-outfit font-medium text-lg rounded-lg hover:bg-foreground/90 transition-colors"
            >
              Enviar
            </button>
          </form>

          {/* Right side: images + trust */}
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <img
                src={kitchenImg}
                alt="Proyecto de remodelación de cocina"
                className="w-full h-56 object-cover rounded-xl"
              />
              <img
                src={bathroomImg}
                alt="Proyecto de remodelación de baño"
                className="w-full h-56 object-cover rounded-xl"
              />
            </div>

            <p className="text-primary-foreground font-outfit text-sm leading-6">
              Acme Servicios Pro es una empresa especializada en servicios profesionales
              para el hogar y negocios. Sirviendo al Área de la Bahía de San Francisco
              y comunidades cercanas.
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {trustBadges.map((badge, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-primary-foreground font-outfit text-sm whitespace-pre-line">
                      {badge.label}
                    </span>
                  </div>
                  <div className="h-px bg-primary-foreground/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
