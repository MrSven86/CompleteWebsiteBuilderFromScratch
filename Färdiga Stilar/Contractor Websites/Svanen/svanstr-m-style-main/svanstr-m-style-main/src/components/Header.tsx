import { Phone, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Pintura Interior", hasDropdown: true },
  { label: "Pintura Exterior", hasDropdown: true },
  { label: "Impermeabilización", hasDropdown: true },
  { label: "Nuestros Servicios", hasDropdown: true },
  { label: "Sobre Nosotros", hasDropdown: false },
  { label: "Blog", hasDropdown: false },
  { label: "Contacto", hasDropdown: false },
];

const Header = () => {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="svan-bg-blue svan-text-white">
        <div className="svan-container flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Acme Painting Company"
              className="h-12 w-auto"
            />
          </div>
          <a href="tel:+5491112345678" className="svan-btn-yellow text-sm">
            <Phone className="w-4 h-4" />
            Llamar (011) 1234-5678
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="svan-bg-blue border-t border-white/10">
        <div className="svan-container">
          <ul className="flex items-center gap-1 overflow-x-auto">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  className="svan-text-white flex items-center gap-1 px-4 py-3 text-sm font-medium hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
