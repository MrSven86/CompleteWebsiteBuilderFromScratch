const Footer = () => {
  return (
    <footer className="section-darker border-t border-border py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="heading-display text-3xl text-primary block mb-2">NOVA</span>
            <span className="label-uppercase text-muted-foreground text-[0.6rem] tracking-[0.3em]">
              Group of Companies
            </span>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="label-uppercase text-foreground mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-uppercase text-foreground mb-4">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">1680 MacDonald Avenue</p>
                <p className="text-sm text-muted-foreground">Burnaby, BC V5C 4P2</p>
                <a href="tel:7789416394" className="text-sm text-primary hover:text-foreground transition-colors">(778) 941-6394</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">© 2026 Nova Drywall Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
