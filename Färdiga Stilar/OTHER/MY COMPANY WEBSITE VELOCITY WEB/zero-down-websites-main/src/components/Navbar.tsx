import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const links = [
    { to: "/como-funciona", label: t("Cómo funciona", "How it works") },
    { to: "/ejemplos", label: t("Ejemplos", "Examples") },
    { to: "/precios", label: t("Precios", "Pricing") },
    { to: "/contacto", label: t("Contacto", "Contact") },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div
        className="w-full py-1.5 text-center text-xs font-dm-sans text-white tracking-wide"
        style={{
          background: 'linear-gradient(90deg, #10244C 0%, #243C6B 50%, #36597D 100%)',
        }}
      >
        {t("Más de 10 años de experiencia en diseño web profesional", "Over 10 years of experience in professional web design")}
      </div>
      {/* Main navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Velocity Web" className="h-8" />
            <span className="text-muted-foreground font-dm-sans text-xs ml-3 hidden xl:inline">
              {t("Sitios web profesionales para tu negocio", "Professional websites for your business")}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-dm-sans transition-colors ${
                  location.pathname === l.to
                    ? "text-accent font-medium"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5491154963756"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn-whatsapp !py-2 !px-5 !text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              {t("Hablemos", "Let's talk")}
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-white/95 border-t border-border/40 px-4 pb-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block py-3 text-foreground/70 font-dm-sans text-sm border-b border-border/20"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5491154963756"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-whatsapp !py-2 !px-5 !text-sm mt-3"
            >
              <MessageCircle className="w-4 h-4" />
              {t("Hablemos", "Let's talk")}
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
