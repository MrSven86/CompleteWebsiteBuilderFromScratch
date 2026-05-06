import { useState } from "react";
import "@fontsource/lora/400.css";
import buildzoomLogo from "@/assets/buildzoom-logo.svg";
import iconStar from "@/assets/icon-star.svg";
import iconLicense from "@/assets/icon-license.svg";
import iconEmail from "@/assets/icon-email.svg";
import iconPhone from "@/assets/icon-phone.svg";
import logo from "@/assets/logo.png";
import dropdownArrow from "@/assets/dropdown-arrow.svg";
import { X, Menu } from "lucide-react";

const TopBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-background">
      {/* Top info bar */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-2">
          <div className="flex-shrink-0">
            <a href="/">
              <img src={logo} alt="True American Roofing" className="h-12 sm:h-16 w-auto" />
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {/* Buildzoom rating */}
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <img src={buildzoomLogo} alt="Buildzoom" className="h-3 mb-1" />
                <div className="flex items-center gap-1">
                  <span className="font-normal" style={{ fontFamily: 'Lora, serif', fontSize: '14px', lineHeight: '22.4px', color: '#464646' }}>5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={iconStar} alt="" className="h-4 w-4" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img src={iconLicense} alt="" className="h-10 w-10" />
              <div>
                <p className="font-normal" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.9px', color: '#013375' }}>License No.</p>
                <p className="font-normal" style={{ fontFamily: 'Lora, serif', fontSize: '14px', lineHeight: '22.4px', color: '#464646' }}>CSLB No. 692000</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img src={iconEmail} alt="" className="h-10 w-10" />
              <div>
                <p className="font-normal" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.9px', color: '#013375' }}>Email Us</p>
                <a href="mailto:Trueamericanroofing@yahoo.com" className="font-normal hover:text-primary transition-colors" style={{ fontFamily: 'Lora, serif', fontSize: '14px', lineHeight: '22.4px', color: '#464646' }}>
                  Trueamericanroofing@yahoo.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img src={iconPhone} alt="" className="h-10 w-10" />
              <div>
                <p className="font-normal" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.9px', color: '#013375' }}>Call Now</p>
                <a href="tel:3107107663" className="font-normal hover:text-primary transition-colors" style={{ fontFamily: 'Lora, serif', fontSize: '14px', lineHeight: '22.4px', color: '#464646' }}>
                  (310) 710-7663
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="border-t border-transparent">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-end py-3 gap-8">
            <nav className="hidden lg:flex items-center gap-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-normal">Home</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-normal">About</a>
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-normal">
                Roofing Services <img src={dropdownArrow} alt="" className="ml-1" style={{ width: '9.29px', height: '5.27px' }} />
              </button>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-normal">Spanish Tile Roofing</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-normal">Gallery</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-normal">Contact</a>
            </nav>

            <a
              href="#estimate"
              className="hidden lg:inline-flex items-center justify-center bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get a FREE Estimate
            </a>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-muted bg-background animate-fade-in">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col gap-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px' }}>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-1" onClick={() => setMobileOpen(false)}>Home</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-1" onClick={() => setMobileOpen(false)}>About</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-1" onClick={() => setMobileOpen(false)}>Roofing Services</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-1" onClick={() => setMobileOpen(false)}>Spanish Tile Roofing</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-1" onClick={() => setMobileOpen(false)}>Gallery</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-1" onClick={() => setMobileOpen(false)}>Contact</a>
              <a
                href="#estimate"
                className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Get a FREE Estimate
              </a>
              <a href="tel:3107107663" className="text-primary font-semibold text-center py-2">
                📞 (310) 710-7663
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default TopBar;
