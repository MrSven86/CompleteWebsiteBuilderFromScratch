import { Phone } from "lucide-react";
import { useState } from "react";

const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="form" className="svan-section svan-bg-light py-16">
      <div className="svan-container grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold svan-text-body mb-4">
            Solicite un presupuesto gratuito
          </h2>
          <p className="svan-text-body opacity-80 mb-6">
            Complete el formulario para contactar a nuestros pintores
            profesionales. ¿Prefiere llamarnos? Comuníquese con nuestra
            central telefónica.
          </p>
          <a href="tel:+5491112345678" className="svan-btn-yellow">
            <Phone className="w-4 h-4" />
            Llamar (011) 1234-5678
          </a>
        </div>
        <div className="md:col-span-3">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <p className="text-lg font-semibold svan-text-body">
                ¡Recibido! Nos pondremos en contacto dentro de las 24 horas.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium svan-text-body mb-1">
                  Servicio requerido
                </label>
                <select className="w-full border rounded-md px-3 py-2 text-sm bg-background">
                  <option value="">– Seleccione una opción –</option>
                  <option>Pintura Interior</option>
                  <option>Pintura Exterior</option>
                  <option>Impermeabilización</option>
                  <option>Mantenimiento de Edificios</option>
                  <option>Restauración</option>
                </select>
              </div>
              {[
                { label: "Nombre y apellido", type: "text" },
                { label: "Empresa (opcional)", type: "text" },
                { label: "Teléfono", type: "tel" },
                { label: "Correo electrónico", type: "email" },
                { label: "Dirección completa", type: "text" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium svan-text-body mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    className="w-full border rounded-md px-3 py-2 text-sm bg-background"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium svan-text-body mb-1">
                  Descripción del trabajo
                </label>
                <textarea
                  rows={4}
                  className="w-full border rounded-md px-3 py-2 text-sm bg-background"
                />
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm svan-text-body opacity-80">
                  Acepto el tratamiento de mis datos personales.
                </label>
              </div>
              <p className="text-xs svan-text-body opacity-60">
                Al completar y enviar este formulario, usted acepta que Acme
                Painting Company almacene sus datos personales según nuestra
                política de privacidad.
              </p>
              <button type="submit" className="svan-btn-yellow">
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
