import logoPlaceholder from "@/assets/logo-placeholder.svg";
import phoneIcon from "@/assets/phone-icon.svg";
import emailIcon from "@/assets/email-icon.svg";
import googleIcon from "@/assets/google-icon.svg";
import facebookIcon from "@/assets/facebook-icon.svg";
import bbbIconRound from "@/assets/bbb-icon-round.svg";
import socialIcons from "@/assets/social-icons.svg";

const navLinks = ["Home", "Services", "Service Area", "Roofs We Serve", "Past Work", "About", "Contact"];

const Footer = () => {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      {/* Main footer */}
      <div className="max-w-[1440px] mx-auto px-[80px] py-[60px]">
        <div className="flex gap-[60px]">
          {/* Column 1: Logo & About */}
          <div className="w-[320px] flex-shrink-0">
            <img src={logoPlaceholder} alt="Company Logo" className="w-[220px] h-auto mb-5" />
            <p className="text-[14px] leading-[22px] text-secondary-foreground/70 font-['Inter']">
              Professional painting and general contracting services in Maryland. Quality craftsmanship, competitive prices, and exceptional customer service.
            </p>
            <div className="mt-5">
              <img src={socialIcons} alt="Social Media" className="h-7 opacity-90" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex-1">
            <h4 className="font-['Franklin_Gothic_Heavy'] text-[18px] uppercase tracking-wide text-primary mb-5">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[14px] text-secondary-foreground/70 hover:text-primary transition-colors font-['Inter']"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Services */}
          <div className="flex-1">
            <h4 className="font-['Franklin_Gothic_Heavy'] text-[18px] uppercase tracking-wide text-primary mb-5">
              Our Services
            </h4>
            <nav className="flex flex-col gap-3">
              {["Interior Painting", "Exterior Painting", "Cabinet Painting", "Commercial Painting", "Concrete Coating", "Power Washing"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[14px] text-secondary-foreground/70 hover:text-primary transition-colors font-['Inter']"
                >
                  {s}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact */}
          <div className="w-[300px] flex-shrink-0">
            <h4 className="font-['Franklin_Gothic_Heavy'] text-[18px] uppercase tracking-wide text-primary mb-5">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img src={phoneIcon} alt="Phone" className="w-5 h-5 brightness-0 invert opacity-80" />
                <span className="text-[14px] text-secondary-foreground/70 font-['Inter']">+1 (410) 271-2980</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={emailIcon} alt="Email" className="w-5 h-5 brightness-0 invert opacity-80" />
                <span className="text-[14px] text-secondary-foreground/70 font-['Inter']">sam@vanguardgc.com</span>
              </div>

              {/* Reviews badges */}
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <img src={googleIcon} alt="Google" className="w-7 h-7 rounded-full" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-[12px] font-bold text-secondary-foreground">5.0</span>
                      <span className="text-star text-[11px] font-bold">★★★★★</span>
                    </div>
                    <span className="text-[10px] text-secondary-foreground/50 italic">185 Reviews</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img src={facebookIcon} alt="Facebook" className="w-7 h-7 rounded-full" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-[12px] font-bold text-secondary-foreground">5.0</span>
                      <span className="text-star text-[11px] font-bold">★★★★★</span>
                    </div>
                    <span className="text-[10px] text-secondary-foreground/50 italic">24 Reviews</span>
                  </div>
                </div>
                <img src={bbbIconRound} alt="BBB" className="w-7 h-7 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="max-w-[1440px] mx-auto px-[80px] py-4 flex items-center justify-between">
          <span className="text-[13px] text-secondary-foreground/50 font-['Inter']">
            © 2026 Vanguard General Contracting. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[13px] text-secondary-foreground/50 hover:text-primary transition-colors font-['Inter']">Privacy Policy</a>
            <a href="#" className="text-[13px] text-secondary-foreground/50 hover:text-primary transition-colors font-['Inter']">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
