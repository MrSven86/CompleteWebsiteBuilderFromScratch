import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="heading-display text-2xl md:text-3xl text-primary tracking-tight">
          NOVA
          <span className="block text-[0.5rem] tracking-[0.3em] text-muted-foreground font-medium uppercase">
            Group of Companies
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          <a href="#about" className="label-uppercase text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#projects" className="label-uppercase text-muted-foreground hover:text-foreground transition-colors">Projects</a>
          <a href="#services" className="label-uppercase text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#contact" className="label-uppercase text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a href="tel:7789416394" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            778-941-6394
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-foreground"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container py-6 flex flex-col gap-4">
            <a href="#about" onClick={() => setMenuOpen(false)} className="label-uppercase text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="label-uppercase text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="label-uppercase text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="label-uppercase text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            <a href="tel:7789416394" className="flex items-center gap-2 text-sm text-primary">
              <Phone className="w-4 h-4" />
              778-941-6394
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
