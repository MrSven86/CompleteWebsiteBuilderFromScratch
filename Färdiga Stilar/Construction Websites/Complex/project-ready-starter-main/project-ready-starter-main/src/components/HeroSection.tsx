import { useState } from "react";
import heroBg from "@/assets/hero-bg-real.png";
import iconHandsOn from "@/assets/icon-hands-on.svg";
import iconBestPrice from "@/assets/icon-best-price.svg";
import vectorUnderline from "@/assets/vector-underline.svg";
import guaranteeBadge from "@/assets/guarantee-badge-2.png";
import ctaUnderline from "@/assets/cta-underline.svg";
import ratingGoogle5 from "@/assets/rating-google-5star.svg";
import ratingBBB from "@/assets/rating-bbb.svg";
import ratingFacebook5 from "@/assets/rating-facebook-5star.svg";

const HeroSection = () => {
  const [address, setAddress] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { address, fullName, phone });
  };

  return (
    <section
      className="relative w-full min-h-[500px] lg:h-[646px] overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroBg}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://mrsven.com/Videos/thatvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 to-gray-800/60" />

      <div className="relative max-w-[1400px] mx-auto h-full px-4 md:px-8 py-10 lg:py-0 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
        {/* Left content */}
        <div className="flex-1 lg:pt-20">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold font-sans leading-tight lg:leading-[60px]">
            Construcción y<br />
            Remodelación<br />
            en CABA
          </h1>
          <img src={vectorUnderline} alt="" className="mt-1 w-[140px] lg:w-[199px] h-auto" />
          <p className="mt-4 text-white/90 text-base lg:text-xl font-normal font-sans leading-7 max-w-[652px]">
            Transformamos su visión en realidad desde el diseño hasta la entrega
            final. Empresa establecida con casi 30 años de experiencia.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-12 mt-8 lg:mt-16">
            <div className="flex items-center gap-4">
              <img src={iconHandsOn} alt="Presupuesto sin cargo" className="w-10 h-10 lg:w-14 lg:h-14" />
              <span className="text-white text-base lg:text-xl font-normal leading-7">Presupuesto sin cargo</span>
            </div>
            <div className="flex items-center gap-4">
              <img src={iconBestPrice} alt="Empresa constituida desde 1996" className="w-10 h-10 lg:w-14 lg:h-14" />
              <span className="text-white text-base lg:text-xl font-normal leading-7">Empresa constituida desde 1996</span>
            </div>
          </div>
        </div>

        {/* Right CTA form */}
        <div className="relative w-full max-w-[440px] shrink-0 mt-6 lg:mt-8">
          <img
            src={guaranteeBadge}
            alt="100% GRATIS"
            className="absolute -top-2 -right-2 w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] z-20"
          />

          <div
            className="relative rounded-[20px] overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, hsl(230, 40%, 52%) 0%, hsl(220, 35%, 48%) 100%)',
            }}
          >
            <div className="text-center pt-6 lg:pt-8 pb-3 lg:pb-4 px-6 lg:px-8">
              <p className="text-white text-base lg:text-lg font-bold italic font-sans">
                Solicite Su
              </p>
              <p className="text-white text-2xl lg:text-[32px] font-bold italic font-sans leading-tight">
                Presupuesto Hoy!
              </p>
              <img src={ctaUnderline} alt="" className="mx-auto mt-1 w-[180px] lg:w-[220px]" />
            </div>

            <form onSubmit={handleSubmit} className="px-6 lg:px-8 pb-4 space-y-3">
              <input
                type="text"
                placeholder="Dirección de la Propiedad*"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-white border border-white/40 rounded-lg px-4 py-3 lg:py-3.5 text-sm text-primary placeholder-primary focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="text"
                placeholder="Nombre Completo"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-white border border-white/40 rounded-lg px-4 py-3 lg:py-3.5 text-sm text-primary placeholder-primary focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="tel"
                placeholder="+54"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white border border-white/40 rounded-lg px-4 py-3 lg:py-3.5 text-sm text-primary placeholder-primary focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="w-full text-white font-bold py-3 lg:py-4 rounded-lg text-base lg:text-lg transition-all hover:brightness-110"
                style={{
                  background: 'linear-gradient(180deg, hsl(270, 70%, 55%) 0%, hsl(270, 60%, 40%) 100%)',
                }}
              >
                Obtener Presupuesto GRATIS
              </button>
            </form>

            <p className="text-white/60 text-[11px] text-center leading-snug px-6 lg:px-10 pb-4 lg:pb-5">
              Al presionar "Obtener Presupuesto GRATIS" acepta explícitamente nuestros
              términos y política de privacidad, y consiente recibir mensajes de texto.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
