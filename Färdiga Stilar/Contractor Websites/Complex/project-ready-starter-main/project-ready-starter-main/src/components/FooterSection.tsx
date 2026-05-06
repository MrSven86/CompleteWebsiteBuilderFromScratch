import { Phone, MapPin, Clock, MessageSquare } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="w-full" style={{ background: 'hsl(222, 35%, 45%)' }}>
      <div className="max-w-[1400px] mx-auto px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo & Description */}
          <div>
            <div className="mb-6">
              <span className="text-white text-2xl font-bold tracking-wider block leading-tight">DISANT</span>
              <span className="text-white/80 text-sm font-semibold tracking-widest uppercase">CONSTRUCTORA</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Disant SRL Constructora es un pilar de la comunidad local, brindando
              una amplia gama de servicios de construcción y remodelación adaptados
              para mejorar su propiedad. Con casi 30 años de experiencia, nuestra
              empresa familiar combina principios probados con métodos profesionales
              para garantizar resultados excepcionales.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-white font-bold text-sm">Llámenos Ahora</h4>
                <p className="text-white/70 text-sm">(11) 2794-9481</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-white font-bold text-sm">Nuestra Ubicación</h4>
                <p className="text-white/70 text-sm">Viamonte 1481 4B</p>
                <p className="text-white/70 text-sm">CABA Centro</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-white font-bold text-sm">Horario de Atención</h4>
                <p className="text-white/70 text-sm">LUN-VIE: 8:30am-5:00pm</p>
                <p className="text-white/70 text-sm">SÁB-DOM: CERRADO</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-white font-bold text-sm">Solicitar Presupuesto</h4>
                <p className="text-white/70 text-sm">Pedir un Presupuesto</p>
              </div>
            </div>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Servicios Residenciales</h4>
            <ul className="text-white/70 text-sm space-y-1.5">
              <li>Construcción Nueva</li>
              <li>Remodelaciones Integrales</li>
              <li>Ampliaciones</li>
              <li>Reformas y Refacciones</li>
              <li>Mantenimiento</li>
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Áreas de Servicio</h4>
            <ul className="text-white/70 text-sm space-y-1.5">
              <li>CABA Centro</li>
              <li>Palermo</li>
              <li>Recoleta</li>
              <li>Belgrano</li>
              <li>San Telmo</li>
              <li>Puerto Madero</li>
              <li>Villa Crespo</li>
              <li>Caballito</li>
              <li>Martín Coronado</li>
              <li>Gran Buenos Aires</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-center gap-6 mt-10 pt-8 border-t border-white/20">
          <span className="text-white/50 text-sm">© 2025 Disant SRL Constructora. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
