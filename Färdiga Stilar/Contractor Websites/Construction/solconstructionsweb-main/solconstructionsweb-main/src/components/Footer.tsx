import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold tracking-tight">
              S.O.L. CONSTRUCCIONES
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Especialistas en montaje industrial y construcción comercial, ofreciendo instalaciones técnicas profesionales para proyectos en Buenos Aires.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>
                  Crisólogo Larralde 5456
                  <br />
                  C1431APP CABA
                  <br />
                  Buenos Aires, Argentina
                </span>
              </div>
              <a
                href="tel:+541145443760"
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                54 11 4544-3760
              </a>
              <a
                href="mailto:info@sol-construcciones.com.ar"
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
                info@sol-construcciones.com.ar
              </a>
            </div>
          </div>

          {/* Hours & Services */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold text-white uppercase tracking-wide">
              Horario de Atención
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <div>
                  <p>Lunes a Viernes: 8:00 - 18:00</p>
                  <p>Sábados: 8:00 - 13:00</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="font-display text-lg font-bold text-white uppercase tracking-wide mb-3">
                Servicios
              </h4>
              <ul className="space-y-1 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✦</span>
                  Montaje Industrial
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✦</span>
                  Sistemas de Ventilación
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✦</span>
                  Construcción Comercial
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✦</span>
                  Construcción Prefabricada
                </li>
              </ul>
            </div>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold text-white uppercase tracking-wide">
              Zonas de Servicio
            </h4>
            <ul className="space-y-1 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span className="text-primary">✦</span>
                Capital Federal
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✦</span>
                Gran Buenos Aires
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✦</span>
                Zonas Circundantes
              </li>
            </ul>
            <div className="pt-2">
              <span 
                className="inline-flex items-center gap-2 text-primary text-sm font-medium"
              >
                Solicitar Evaluación Gratuita →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} <span className="text-primary">S.O.L. Construcciones S.R.L.</span> Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary rounded flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Facebook className="h-4 w-4 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
