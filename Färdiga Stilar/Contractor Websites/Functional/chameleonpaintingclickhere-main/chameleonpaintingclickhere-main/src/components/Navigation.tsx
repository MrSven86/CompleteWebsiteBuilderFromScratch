import { useState } from "react";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "SERVICES", hasDropdown: true, href: "#", disabled: true },
    { label: "RESIDENTIAL PAINTING", hasDropdown: false, href: "#", disabled: true },
    { label: "ABOUT", hasDropdown: true, href: "#", disabled: true },
    { label: "GALLERY", hasDropdown: true, href: "#", disabled: true },
    { label: "CONTACT", hasDropdown: false, href: "/contact", disabled: false },
  ];

  const renderNavItem = (item: typeof navItems[0], mobile = false) => {
    const baseClass = mobile
      ? "block py-3 px-4 font-inter font-semibold text-[15px] transition-colors border-b border-border/50 last:border-0"
      : "flex items-center gap-1 font-inter font-semibold text-[15px] transition-colors";

    if (item.disabled) {
      return (
        <span
          key={item.label}
          className={`${baseClass} text-muted-foreground cursor-default`}
        >
          {item.label}
          {item.hasDropdown && !mobile && <ChevronDown size={14} className="text-muted-foreground" />}
        </span>
      );
    }

    if (item.href.startsWith("/")) {
      return (
        <Link
          key={item.label}
          to={item.href}
          className={`${baseClass} text-foreground hover:text-primary`}
          onClick={() => setMobileOpen(false)}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <a
        key={item.label}
        href={item.href}
        className={`${baseClass} text-foreground hover:text-primary`}
        onClick={() => setMobileOpen(false)}
      >
        {item.label}
        {item.hasDropdown && !mobile && <ChevronDown size={14} className="text-secondary" />}
      </a>
    );
  };

  return (
    <nav className="bg-background py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-xl font-bold">
            <span className="font-satoshi font-bold text-foreground">
              <span className="text-primary">C</span>hameleon
            </span>
            <div className="text-xs text-primary font-satoshi font-bold -mt-1">Painting</div>
            <div className="text-[10px] text-muted-foreground font-inter">Est. 2007</div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => renderNavItem(item))}
        </div>

        {/* Desktop Phone CTA */}
        <a href="tel:5622125468" className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 lg:px-6 py-3 font-satoshi font-bold text-sm lg:text-base leading-normal tracking-normal transition-colors">
          <Phone size={18} />
          (562) 212-5468
        </a>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border mt-2 pb-4">
          {navItems.map((item) => renderNavItem(item, true))}
          <a
            href="tel:5622125468"
            className="flex items-center justify-center gap-2 bg-primary text-white mx-4 mt-4 py-3 font-satoshi font-bold text-base transition-colors"
          >
            <Phone size={18} />
            (562) 212-5468
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
