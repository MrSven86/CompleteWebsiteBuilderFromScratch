import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const services = [
    "Commercial Painting",
    "Apartment Buildings",
    "Parking Structures",
    "High-Rise Buildings",
    "Historical Restoration",
    "Concrete & Masonry Repair",
  ];

  const company = [
    "About Us",
    "Our Story",
    "Gallery",
    "Service Areas",
    "Contact",
    "Free Estimate",
  ];

  const serviceAreas = [
    "Santa Monica",
    "West Los Angeles",
    "Los Angeles",
    "Culver City",
    "Beverly Hills",
    "Marina del Rey",
    "Venice",
    "Pacific Palisades",
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              {/* Logo placeholder */}
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary text-2xl font-bold">P</span>
              </div>
              <h3 className="font-playfair text-xl font-bold text-white">
                PARROT PAINTING, INC.
              </h3>
            </div>

            <div className="space-y-3 text-secondary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <p>
                  3021 Airport Ave, Suite 101G
                  <br />
                  Santa Monica, CA 90405
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                <a
                  href="tel:3103977294"
                  className="hover:text-primary transition-colors"
                >
                  (310) 397-7294
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                <a
                  href="mailto:DaveParrotPainting@Gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  DaveParrotPainting@Gmail.com
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-secondary-foreground/20">
              <p className="text-sm text-secondary-foreground/70 font-medium">
                Licensed, Bonded & Insured
              </p>
              <p className="text-sm text-secondary-foreground/60 mt-1">
                CA Licenses: 766016, 619523, 315799
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            © 2025 MR Sven. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-secondary-foreground/60 hover:text-primary text-sm transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
