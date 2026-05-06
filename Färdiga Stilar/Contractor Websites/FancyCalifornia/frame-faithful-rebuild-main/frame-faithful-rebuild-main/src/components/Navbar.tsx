import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Phone } from "lucide-react";

const navigationLinks = [
  { label: "ABOUT", href: "/about", hasDropdown: false, isRoute: true },
  { label: "RESIDENTIAL PAINTING", href: "/residential-painting", hasDropdown: false, isRoute: true },
  { label: "COMMERCIAL PAINTING", href: "/commercial-painting", hasDropdown: false, isRoute: true },
  { label: "CONTACT", href: "/contact", hasDropdown: false, isRoute: true },
];

interface NavbarProps {
  isScrolled?: boolean;
}

const Navbar = ({ isScrolled = false }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phoneNumber = "(310) 397-7294";

  return (
    <nav
      className={`nav-bar transition-all duration-300 ease-in-out ${
        isScrolled
          ? "fixed top-0 left-0 right-0 z-50 shadow-lg animate-slide-down"
          : "relative"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo placeholder area */}
          <Link to="/" className="font-display text-2xl md:text-3xl font-bold text-white hover:text-white/90 transition-colors">
            Painter Co
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                {link.isRoute ? (
                  <Link
                    to={link.href}
                    className="nav-link flex items-center gap-1.5"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="nav-link flex items-center gap-1.5"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href={`tel:${phoneNumber.replace(/\D/g, "")}`}
            className="hidden lg:inline-flex btn-cta-primary text-sm px-5 py-2 group transition-all duration-300 hover:px-6 hover:scale-105"
          >
            <Phone className="w-0 h-4 mr-0 transition-all duration-300 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 group-hover:animate-phone-ring" />
            <span>{phoneNumber}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6">
            <ul className="flex flex-col gap-4">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="nav-link flex items-center gap-1.5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                      {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="nav-link flex items-center gap-1.5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                      {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </a>
                  )}
                </li>
              ))}
              <li className="pt-4">
                <a
                  href={`tel:${phoneNumber.replace(/\D/g, "")}`}
                  className="btn-cta-primary text-sm w-full justify-center"
                >
                  Call: {phoneNumber}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
