import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        <a href="#home">
          <img src={logo} alt="Grupo Árbol Construcciones" className="h-14 md:h-16" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 font-heading font-semibold text-sm uppercase tracking-wide">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors hover:text-primary ${
                  i === navLinks.length - 1 ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          <ul className="flex flex-col gap-4 font-heading font-semibold text-sm uppercase tracking-wide pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="text-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
