import { Phone, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const navigationLinks = [
    { label: "SERVICES", href: "#" },
    { label: "PORTFOLIO", href: "#" },
    { label: "TESTIMONIALS", href: "#" },
    { label: "ABOUT US", href: "#" },
    { label: "CONTACT", href: "#" },
  ];

  const areasServed = [
    ["Los Angeles, CA", "Brentwood, CA", "Glendale, CA", "Holmby Hills, CA", "Malibu, CA", "Pacific Palisades, CA", "Playa Del Rey", "Sherman Oaks, CA"],
    ["Beverly Hills, CA", "Culver City", "Hidden Hills, CA", "Los Feliz, CA", "Marina del Ray, CA", "Pasadena, CA", "Santa Monica, CA", "And More..."],
  ];

  const bottomLinks = [
    { label: "Sitemap", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Accessibility", href: "#" },
    { label: "Disclaimer", href: "#" },
  ];

  return (
    <footer className="bg-[#0a1628] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Company Info Column */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#0a1628]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-heading text-2xl font-bold text-white tracking-wide">KAVIN</span>
                <span className="text-white/80 text-sm">CONSTRUCTI</span>
              </div>
              
              <div className="space-y-1 text-white/90 text-sm">
                <p className="font-semibold">Kavin Construction, Inc.</p>
                <p>3814 Willat Avenue</p>
                <p>Los Angeles, CA 90232</p>
              </div>
              
              <div className="mt-4 space-y-1 text-white/90 text-sm">
                <p className="flex items-center gap-2">
                  <span>Phone:</span>
                  <Phone className="w-4 h-4" />
                  <a href="tel:+13108377035" className="hover:text-white transition-colors">(310) 837-7035</a>
                </p>
                <p>State License #356032</p>
              </div>
            </div>

            {/* Site Navigation Column */}
            <div>
              <h4 className="font-heading text-xl text-white mb-6 italic">Site Navigation</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {navigationLinks.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.href} 
                    className="text-white/90 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              
              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-8">
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  <Facebook className="w-6 h-6" fill="currentColor" />
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  <Twitter className="w-6 h-6" fill="currentColor" />
                </a>
              </div>
            </div>

            {/* Areas We Serve Column */}
            <div>
              <h4 className="font-heading text-xl text-white mb-6 italic">Areas We Serve</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {areasServed[0].map((area, index) => (
                  <a 
                    key={area} 
                    href="#" 
                    className="text-white/90 hover:text-white transition-colors text-sm underline"
                  >
                    {area}
                  </a>
                ))}
                {areasServed[1].map((area) => (
                  <a 
                    key={area} 
                    href="#" 
                    className="text-white/90 hover:text-white transition-colors text-sm underline"
                  >
                    {area}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 pt-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-center">
              <p className="text-white/70 text-sm">
                © Copyright 2025 Kavin Construction, Inc. | All Rights Reserved |
              </p>
              <div className="flex items-center gap-1">
                {bottomLinks.map((link, index) => (
                  <span key={link.label} className="flex items-center">
                    <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm underline">
                      {link.label}
                    </a>
                    {index < bottomLinks.length - 1 && (
                      <span className="text-white/70 mx-1">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
