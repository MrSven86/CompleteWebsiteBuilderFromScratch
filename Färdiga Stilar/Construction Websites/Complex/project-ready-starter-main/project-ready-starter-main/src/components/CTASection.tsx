import { useState } from "react";
import ctaBg from "@/assets/cta-bg.png";
import flagAr from "@/assets/flag-ar.png";
import ctaSince1996 from "@/assets/cta-since1996.svg";
import ctaLicense from "@/assets/cta-license.svg";
import cta5Stars from "@/assets/cta-5stars.svg";
import ctaBaseIn from "@/assets/cta-basein.svg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal({ threshold: 0.1 });
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("CTA form submitted:", { fullName, email, phone, service, city, message });
  };

  const badges = [
    { icon: ctaSince1996, line1: "Empresa", line2: "Constituida", line3: "1996" },
    { icon: ctaLicense, line1: "CUIT Activo", line2: "30-68652669-7", line3: "" },
    { icon: cta5Stars, line1: "5.0 Estrellas", line2: "Near Place", line3: "" },
    { icon: ctaBaseIn, line1: "Base en", line2: "CABA Centro", line3: "" },
  ];

  return (
    <section
      className="relative w-full min-h-[600px] lg:min-h-[700px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
        {/* Left content */}
        <div
          ref={leftRef}
          className={`flex-1 pt-4 lg:pt-8 transition-all duration-700 ease-out ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Casi 30 Años de Experiencia
          </h2>
          <p className="mt-4 lg:mt-6 text-white/80 text-base lg:text-lg leading-relaxed max-w-[560px]">
            Desde 1996, el equipo de Disant SRL Constructora ha brindado servicios
            profesionales de construcción y remodelación residencial en Buenos Aires.
            Como empresa legalmente constituida, mantenemos los más altos estándares
            de calidad y profesionalismo.
          </p>

          {/* Badges */}
          <div className="flex items-center gap-4 lg:gap-6 mt-10 lg:mt-16 flex-wrap">
            {badges.map((b, i) => (
              <div key={i} className="flex flex-col items-center text-center w-[70px] lg:w-[90px]">
                <img src={b.icon} alt={b.line1} className="w-8 h-8 lg:w-10 lg:h-10 mb-2" />
                <span className="text-white text-[10px] lg:text-xs font-bold leading-tight">{b.line1}</span>
                <span className="text-white/70 text-[10px] lg:text-xs leading-tight">{b.line2}</span>
                {b.line3 && <span className="text-white/70 text-[10px] lg:text-xs leading-tight">{b.line3}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div
          ref={formRef}
          className={`w-full max-w-full lg:max-w-[620px] bg-white rounded-none p-6 md:p-8 lg:p-9 shadow-2xl transition-all duration-700 ease-out delay-200 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-foreground text-[15px] font-bold">
            ¿Interesado en trabajar con nosotros?
          </p>
          <h3 className="text-foreground text-xl md:text-[28px] font-bold mt-1 mb-4 md:mb-6 leading-tight">
            Complete este formulario para conectarnos.
          </h3>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Nombre Completo"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border-[2.5px] border-[hsl(222,35%,30%)] rounded-lg px-4 md:px-5 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Dirección de Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-[2.5px] border-[hsl(222,35%,30%)] rounded-lg px-4 md:px-5 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <div className="flex-1 flex items-center border-[2.5px] border-[hsl(222,35%,30%)] rounded-lg overflow-hidden">
                <div className="flex items-center gap-1 px-3 py-3 border-r-[2.5px] border-[hsl(222,35%,30%)] bg-muted/20">
                  <img src={flagAr} alt="AR" className="w-8 h-5 object-contain" />
                  <span className="text-[10px] text-muted-foreground">▼</span>
                </div>
                <input
                  type="tel"
                  placeholder="Número de Teléfono"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 px-3 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none bg-transparent"
                />
              </div>
            </div>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full border-[2.5px] border-[hsl(222,35%,30%)] rounded-lg px-4 md:px-5 py-3 text-base text-foreground focus:outline-none focus:border-primary bg-white"
            >
              <option value="">-- Seleccione un Servicio --</option>
              <option value="construccion">Construcción Nueva</option>
              <option value="remodelacion">Remodelación Integral</option>
              <option value="ampliacion">Ampliación</option>
              <option value="reforma">Reforma/Refacción</option>
              <option value="mantenimiento">Mantenimiento</option>
              <option value="otro">Otro</option>
            </select>
            <input
              type="text"
              placeholder="Su Ciudad (opcional)"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border-[2.5px] border-[hsl(222,35%,30%)] rounded-lg px-4 md:px-5 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
            <textarea
              placeholder="Cuéntenos más sobre su proyecto aquí"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="w-full border-[2.5px] border-[hsl(222,35%,30%)] rounded-lg px-4 md:px-5 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
            />
            <button
              type="submit"
              className="w-full text-white font-bold py-4 rounded-none text-lg tracking-wider transition-all hover:brightness-110 mt-1"
              style={{
                background: 'linear-gradient(90deg, hsl(190, 80%, 50%) 0%, hsl(250, 60%, 45%) 100%)',
              }}
            >
              OBTENER PRESUPUESTO GRATUITO
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
