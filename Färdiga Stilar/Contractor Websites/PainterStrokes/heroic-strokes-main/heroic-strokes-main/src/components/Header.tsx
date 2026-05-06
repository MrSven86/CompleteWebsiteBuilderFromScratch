import { useState } from "react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <img src={logo} alt="Stephen James Painting" className="w-24 h-24 object-contain" />
        
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-body text-sm font-bold uppercase tracking-wide text-primary-foreground hover:text-accent transition-colors ${
                link.active ? "border-b-2 border-accent" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex btn-brand">
          GET FREE QUOTE
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-sm px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 font-body text-sm font-bold uppercase tracking-wide text-primary-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-brand mt-4 w-full text-center">
            GET FREE QUOTE
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
