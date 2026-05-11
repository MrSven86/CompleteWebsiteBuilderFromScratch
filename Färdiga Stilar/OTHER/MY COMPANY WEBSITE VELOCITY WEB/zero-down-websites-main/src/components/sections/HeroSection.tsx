import { useLanguage } from "@/context/LanguageContext";
import { Globe, MapPin, Eye, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import salyRocket from "@/assets/saly-rocket.png";
import textureOverlay from "@/assets/texture-overlay.png";

const HeroSection = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const salyX = scrollY * 0.3;
  const salyYOffset = scrollY * -0.15;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://mrsven.com/Videos/VelocityWebTestvideo.mp4" type="video/mp4" />
      </video>

      {/* Dark blue overlay */}
      <div className="absolute inset-0 z-[1] hero-gradient" style={{ opacity: 0.91 }} />

      {/* Texture overlay at 26% opacity */}
      <div
        className="absolute inset-0 z-[50] pointer-events-none"
        style={{
          backgroundImage: `url(${textureOverlay})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.26,
        }}
      />

      {/* Saly illustration - scroll-animated, flies right & up on scroll */}
      <img
        src={salyRocket}
        alt=""
        className="absolute z-[45] w-[22rem] hidden lg:block opacity-90 pointer-events-none"
        style={{
          right: '13%',
          top: '31%',
          transform: `translate(${salyX}px, ${salyYOffset}px)`,
          transition: 'transform 0.1s linear',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center py-10">
        {/* Pre-headline pill */}
        <div className="inline-block mb-4 sm:mb-8 px-4 sm:px-6 py-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm">
          <span className="text-hero-selling">
            {t("Agencia de diseño web en Buenos Aires", "Web design agency in Buenos Aires")}
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-hero-h1 max-w-4xl mx-auto mb-4 sm:mb-6 px-2">
          {t(
            "Conseguí un sitio web profesional — ",
            "Get a professional website — "
          )}
          <span className="bg-gradient-to-r from-[#FFCC33] to-[#FFDF80] bg-clip-text text-transparent">
            {t("listo en 72 horas", "ready in 72 hours")}
          </span>
        </h1>

        {/* H2 */}
        <p className="text-hero-h2 max-w-3xl mx-auto mb-8 sm:mb-12 px-2 text-base sm:text-lg md:text-xl">
          {t(
            "Nuestro equipo investiga tu negocio, tu competencia y tus clientes, y diseña un sitio completo pensado para atraer clientes. No usamos plantillas. Cada sitio es único.",
            "Our team researches your business, your competition, and your customers, and designs a complete website built to attract clients. We don't use templates. Every site is unique."
          )}
        </p>

        {/* Evidential boxes */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2">
          <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-primary-foreground/10 backdrop-blur-sm">
            <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center">
              <Globe className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-hero-selling text-left">
              {t("Basado en tu mercado\ny competencia real", "Based on your market\nand real competition")}
            </span>
          </div>


          <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-primary-foreground/10 backdrop-blur-sm">
            <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center">
              <Eye className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-hero-selling text-left">
              {t("Lo revisás antes de\ncomprometerte a nada", "You review it before\ncommitting to anything")}
            </span>
          </div>
        </div>

        {/* CTAs - above texture layer */}
        <div className="relative z-[60] flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 px-2">
          <a href="#contacto" className="btn-primary text-base sm:text-lg !px-5 sm:!px-8 !py-3 sm:!py-4">
            {t("Quiero ver cómo sería mi sitio web", "I want to see what my website would look like")}
          </a>
          <a href="https://wa.me/5491154963756" target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex items-center justify-center gap-2 text-base sm:text-lg !px-5 sm:!px-8 !py-3 sm:!py-4">
            <MessageCircle className="w-5 h-5" />
            {t("Escribinos por WhatsApp", "Message us on WhatsApp")}
          </a>
        </div>
        <p className="relative z-[60] text-primary-foreground/50 font-dm-sans text-sm">
          {t("Te mostramos un diseño terminado sin costo y sin compromiso.", "We show you a finished design at no cost and no commitment.")}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;