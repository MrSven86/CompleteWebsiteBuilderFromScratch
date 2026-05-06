import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-brand-dark">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & License */}
          <div>
            <img src={logo} alt="SJP Logo" className="w-64 h-64 object-contain brightness-0 invert" />
            <p className="font-body text-base text-primary-foreground leading-8">
              CA Contractors License #887009
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-3xl text-primary-foreground leading-8 mb-6">Our Services</h4>
            <nav className="space-y-3">
              {["Home", "About", "Services", "Gallery", "Contact"].map((item, i) => (
                <a
                  key={item}
                  href={i === 0 ? "#" : `#${item.toLowerCase()}`}
                  className={`block font-body text-base uppercase tracking-wide transition-colors ${
                    i === 0 ? "text-accent" : "text-primary-foreground hover:text-accent"
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-3xl text-primary-foreground mb-6">Contact Us</h4>
            <p className="font-body text-base text-primary-foreground uppercase">
              StephenJamesPaint@yahoo.com
            </p>
            <p className="font-body text-base text-primary-foreground mt-4">805-423-7553</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-primary-foreground/70">
            © 2026 All Rights Reserved | Stephen James Painting | Created by ZING.work
          </p>
          <p className="font-body text-sm font-bold text-primary-foreground">
            Data Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
