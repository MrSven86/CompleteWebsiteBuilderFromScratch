import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-kanit text-2xl font-semibold tracking-tight">
              Acme Servicios Pro
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Profesionales de confianza en el Área de la Bahía. Más de 40 años de experiencia
              ofreciendo resultados excepcionales para hogares y negocios.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-kanit text-lg font-medium text-primary">Servicios</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {["Trabajos de Interior", "Trabajos de Exterior", "Remodelaciones", "Servicios Comerciales", "Consultoría de Diseño", "Mantenimiento General"].map((s) => (
                <li key={s} className="hover:text-primary transition-colors cursor-pointer">{s}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-kanit text-lg font-medium text-primary">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {["Sobre Nosotros", "Galería de Proyectos", "Reseñas", "Áreas de Servicio", "Solicitar Presupuesto"].map((l) => (
                <li key={l} className="hover:text-primary transition-colors cursor-pointer">{l}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-kanit text-lg font-medium text-primary">Contáctanos</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>(925) 555-0123</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@acmeservicios.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Sirviendo toda el Área de la Bahía, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <span>© {currentYear} Acme Servicios Pro. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <span className="hover:text-primary-foreground/60 cursor-pointer">Política de Privacidad</span>
            <span className="hover:text-primary-foreground/60 cursor-pointer">Términos de Servicio</span>
            <span className="hover:text-primary-foreground/60 cursor-pointer">Mapa del Sitio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
