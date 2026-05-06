import { Phone, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  "Destapaciones",
  "Plomero Gasista",
  "Urgencias 24hs",
  "Pérdida de agua",
];

const info = ["Sobre nosotros", "Precios", "Contacto"];

function LinkItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <a
        href="#"
        className="font-outfit text-[18px] font-normal leading-[30px] text-[#CCCCCC] transition-colors hover:text-white"
      >
        <span className="mr-1 text-[#CCCCCC]">›</span>
        {children}
      </a>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-[#131313] text-[#CCCCCC]">
      <div className="mx-auto w-full max-w-[1320px] px-6 pb-10 pt-16 lg:px-12 lg:pt-[75px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand + CTA */}
          <div>
            <img src={logo} alt="MyPlumber" className="h-[38px] w-auto" />
            <p
              className="mt-6 text-[18px] font-light leading-[28px] text-white"
              style={{ fontFamily: '"Shantell Sans", cursive' }}
            >
              Plomero matriculado
              <br />
              en Palermo
            </p>
            <a
              href="#"
              className="mt-8 inline-flex h-[50px] items-center justify-center rounded-[6px] bg-[#009118] px-6 font-outfit text-[16px] font-medium text-white transition-colors hover:bg-[#007d15]"
            >
              Pedir presupuesto
            </a>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-outfit text-[20px] font-medium leading-[30px] text-[#00AFEF]">
              Servicios
            </h3>
            <ul className="mt-6 space-y-2">
              {services.map((l) => (
                <LinkItem key={l}>{l}</LinkItem>
              ))}
            </ul>
          </div>

          {/* Información */}
          <div>
            <h3 className="font-outfit text-[20px] font-medium leading-[30px] text-[#00AFEF]">
              Información
            </h3>
            <ul className="mt-6 space-y-2">
              {info.map((l) => (
                <LinkItem key={l}>{l}</LinkItem>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-outfit text-[20px] font-medium leading-[30px] text-[#00AFEF]">
              Contacto
            </h3>
            <div className="mt-6 space-y-3">
              <a
                href="tel:11XXXXXXXX"
                className="flex items-center gap-2 font-outfit text-[18px] text-[#CCCCCC] hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0" />
                11-XXXX-XXXX
              </a>
              <a
                href="#"
                className="flex items-center gap-2 font-outfit text-[18px] text-[#CCCCCC] hover:text-white"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                WhatsApp
              </a>
              <a
                href="mailto:info@empresa.com.ar"
                className="flex items-center gap-2 font-outfit text-[18px] text-[#CCCCCC] hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0" />
                info@[empresa].com.ar
              </a>
            </div>

            <div className="mt-8 space-y-1 font-outfit text-[16px] leading-[24px] text-[#CCCCCC]">
              <p className="font-medium text-white">Zona de servicio:</p>
              <p>Palermo y alrededores</p>
              <p>Buenos Aires, Argentina</p>
            </div>

            <p className="mt-6 font-outfit text-[16px] leading-[24px] text-[#CCCCCC]">
              Matrícula N° [XXXX]
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2a2a2a]">
        <p className="mx-auto max-w-[1320px] px-6 py-6 text-center font-outfit text-[14px] text-[#CCCCCC] lg:px-12">
          © 2026 [Nombre Empresa] — Plomero matriculado en Palermo ·{" "}
          <a href="#" className="hover:text-white">
            Política de privacidad
          </a>
        </p>
      </div>
    </footer>
  );
}
