import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="svan-bg-blue svan-text-white">
      <div className="svan-container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <img
              src="/images/logo.png"
              alt="Acme Painting Company"
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm opacity-70 leading-relaxed">
              Pintores profesionales certificados en Buenos Aires.
              Servicio de calidad garantizada, todo el año.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider">Servicios</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Pintura Interior</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Pintura Exterior</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Impermeabilización</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Mantenimiento</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Restauración</a></li>
            </ul>
          </div>

          {/* Zonas */}
          <div>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider">Zonas de cobertura</h3>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Capital Federal</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Zona Norte</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Zona Sur</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Zona Oeste</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">La Plata</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-sm mb-4 uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-70">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+5491112345678" className="hover:opacity-100 transition-opacity">(011) 1234-5678</a>
              </li>
              <li className="flex items-center gap-2 opacity-70">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@acmepainting.com.ar" className="hover:opacity-100 transition-opacity">info@acmepainting.com.ar</a>
              </li>
              <li className="flex items-start gap-2 opacity-70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Acme Painting Company. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs opacity-50">
            <a href="#" className="hover:opacity-100 transition-opacity">Política de privacidad</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Términos y condiciones</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Certificaciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
