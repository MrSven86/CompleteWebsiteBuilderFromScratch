import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  "Inicio",
  "Nosotros",
  "Servicios",
  "Galería",
  "Contacto",
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-nav">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between md:justify-center px-4">
        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-nav-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="px-4 py-4 text-sm font-semibold font-nav uppercase tracking-wide text-nav-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Spacer for mobile centering */}
        <span className="md:hidden w-6" />
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden flex flex-col items-center bg-nav border-t border-border pb-2">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setOpen(false)}
              className="w-full text-center px-4 py-3 text-sm font-semibold font-nav uppercase tracking-wide text-nav-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
