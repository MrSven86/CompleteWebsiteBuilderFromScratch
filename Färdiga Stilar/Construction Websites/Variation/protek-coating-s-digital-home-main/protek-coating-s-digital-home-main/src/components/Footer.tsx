import logo from "@/assets/logo.png";

const navLinks = ["Home", "About", "Services", "Projects", "FAQ", "Contact"];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center gap-6">
        <img src={logo} alt="Grupo Árbol Construcciones" className="h-16 brightness-200" />
        <nav className="flex flex-wrap justify-center gap-6 font-heading text-sm uppercase tracking-wide">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors">
              {link}
            </a>
          ))}
        </nav>
        <p className="text-xs text-background/50">© 2024 Grupo Árbol Construcciones. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
