import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import bigAssetTop from "@/assets/big-asset-top.svg";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Desktop: SVG background nav */}
      <div className="hidden lg:flex justify-center pt-2 animate-fade-in">
        <div className="relative w-full max-w-4xl">
          <img src={bigAssetTop} alt="" className="w-full h-auto" />
          <nav className="absolute inset-0 flex items-center justify-center gap-8 px-20">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-primary-foreground font-semibold text-lg hover:opacity-80 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary-light text-primary-foreground px-5 py-2 font-semibold text-lg hover:opacity-90 hover:scale-105 transition-all duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile: Clean top bar */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-primary/95 backdrop-blur-sm">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <button
          className="text-primary-foreground p-2 rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden bg-primary/95 backdrop-blur-sm overflow-hidden transition-all duration-400 ease-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 space-y-1">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-primary-foreground font-semibold text-lg py-2 border-b border-primary-foreground/10 hover:translate-x-2 transition-transform duration-300"
              style={{ transitionDelay: mobileOpen ? `${idx * 50}ms` : '0ms' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block text-primary-foreground font-semibold text-lg py-2 hover:translate-x-2 transition-transform duration-300"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
