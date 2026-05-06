import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import topRatedWhiteIcon from "@/assets/top-rated-white.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services", hasDropdown: true },
    { path: "/gallery", label: "Gallery" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-tertiary py-2 text-tertiary-foreground">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm gap-2">
          {/* Left - Credentials */}
          <div className="flex items-center gap-2">
            <img src={topRatedWhiteIcon} alt="Top Rated" className="h-5 w-5" />
            <span>Top 7% of CA Contractors • CA License #982353 • Since 2003</span>
          </div>

          {/* Right - Phone */}
          <a href="tel:3236055582" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            <span className="font-bold">(323) 605-5582</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-background transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="font-heading text-2xl font-bold">
                <span className="text-secondary">Inter-Urban</span>{" "}
                <span className="text-primary">Flooring</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-1 font-heading font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-black hover:text-primary"
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </Link>
              ))}
              <Link to="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-5 font-heading font-bold">
                  Free Estimate
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-heading font-medium py-2 ${
                    isActive(link.path) ? "text-primary" : "text-black"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-bold">
                  Free Estimate
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
