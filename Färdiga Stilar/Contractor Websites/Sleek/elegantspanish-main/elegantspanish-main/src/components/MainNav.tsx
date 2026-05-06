import { Button } from "@/components/ui/button";
import acmeLogo from "@/assets/empresa-acme-logo.png";

const navItems = [
  { label: "Inicio" },
  { label: "Servicios" },
  { label: "Galería" },
  { label: "Contacto" },
];

const MainNav = () => {
  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center shrink-0">
          <img src={acmeLogo} alt="Empresa Acme" className="h-16 md:h-20" />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center gap-1 px-3 py-2 text-foreground hover:text-accent transition-colors"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '13.6px', lineHeight: '24px', letterSpacing: '-0.16px' }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button variant="cta" size="lg" className="hidden sm:inline-flex">
          Solicitar Presupuesto
        </Button>

        <a href="tel:5551234567" className="sm:hidden text-hero-cta font-semibold text-sm">
          Llamar Ahora
        </a>
      </div>
    </nav>
  );
};

export default MainNav;