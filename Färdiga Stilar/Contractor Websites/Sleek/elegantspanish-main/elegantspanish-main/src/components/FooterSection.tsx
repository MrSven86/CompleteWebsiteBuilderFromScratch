import footerBg from "@/assets/footer-bg.png";
import footerOverlay from "@/assets/footer-overlay.png";
import phoneIcon from "@/assets/phone-icon.svg";
import mailIcon from "@/assets/mail-icon.svg";
import locationIcon from "@/assets/location-icon.svg";

const serviceLinks = [
  "Servicio Interior",
  "Servicio Exterior",
  "Renovación de Acabados",
  "Preparación y Reparación",
];

const serviceAreas = [
  "Centro", "Norte", "Sur", "Este",
  "Oeste", "Zona Industrial", "Zona Residencial",
];

const FooterSection = () => {
  return (
    <footer>
      <div className="relative bg-primary overflow-hidden">
        <img src={footerBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
        <img src={footerOverlay} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <div>
              <h3 className="text-primary-foreground font-bold text-xl mb-2">Empresa Acme</h3>
              <div className="w-10 h-[2px] bg-hero-cta mb-6" />
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <img src={locationIcon} alt="" className="w-10 h-10 shrink-0" />
                  <div>
                    <p className="text-primary-foreground font-bold text-base">
                      Calle Principal #123<br />Ciudad, CP 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <img src={phoneIcon} alt="" className="w-10 h-10 shrink-0" />
                  <div>
                    <p className="text-primary-foreground font-bold text-base">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <img src={mailIcon} alt="" className="w-10 h-10 shrink-0" />
                  <div>
                    <p className="text-primary-foreground font-bold text-base">Contacto para presupuesto</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-primary-foreground font-bold text-xl mb-2">Licencia</h3>
              <div className="w-10 h-[2px] bg-hero-cta mb-6" />
              <p className="text-stone-400 text-base leading-8">
                Licencia Profesional #0000000
              </p>
            </div>

            <div>
              <h3 className="text-primary-foreground font-bold text-xl mb-2">Nuestros Servicios</h3>
              <div className="w-10 h-[2px] bg-hero-cta mb-6" />
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link} className="flex items-center gap-2">
                    <span className="text-stone-400 text-xs">›</span>
                    <a href="#" className="text-stone-400 text-base leading-8 hover:text-primary-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-primary-foreground font-bold text-xl mb-2">Horarios</h3>
              <div className="w-10 h-[2px] bg-hero-cta mb-6" />
              <p className="text-stone-400 text-base leading-8 mb-1">Lunes–Viernes: 8:00 AM – 5:00 PM</p>
              <p className="text-stone-400 text-base leading-8 mb-6">Sábado: Con Cita Previa</p>

              <h4 className="text-primary-foreground font-bold text-base mb-2">Área de Servicio</h4>
              <p className="text-stone-400 text-base leading-8">
                {serviceAreas.join(", ")} y comunidades circundantes
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary py-4">
        <p className="text-center text-stone-400 text-sm">
          © Copyright 2026 Empresa Acme. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;