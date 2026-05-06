import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tertiary text-tertiary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">
              <span className="text-primary">Inter-Urban</span> Flooring
            </h3>
            <p className="text-tertiary-foreground/80 mb-4">
              Professional flooring installation, refinishing, and restoration serving Lancaster, Palmdale, and the Antelope Valley since 2003.
            </p>
            <div className="flex flex-col gap-2 text-sm text-tertiary-foreground/70">
              <div>CA License #982353</div>
              <div>BuildZoom Score: 106 (Top 7%)</div>
              <div>5.0 ★ on Yelp (44 Reviews)</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-tertiary-foreground/80 hover:text-primary transition-colors">
                  Hardwood Installation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-tertiary-foreground/80 hover:text-primary transition-colors">
                  Floor Refinishing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-tertiary-foreground/80 hover:text-primary transition-colors">
                  Laminate Flooring
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-tertiary-foreground/80 hover:text-primary transition-colors">
                  Carpet Installation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-tertiary-foreground/80 hover:text-primary transition-colors">
                  Vinyl Plank
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-tertiary-foreground/80 hover:text-primary transition-colors">
                  Painting Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-tertiary-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-tertiary-foreground/80 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-tertiary-foreground/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-tertiary-foreground/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:3236055582" className="text-tertiary-foreground/80 hover:text-primary transition-colors">
                  (323) 605-5582
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@inter-urbanflooring.net" className="text-tertiary-foreground/80 hover:text-primary transition-colors">
                  info@inter-urbanflooring.net
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-tertiary-foreground/80">
                  43885 44th St W<br />
                  Lancaster, CA 93536
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-tertiary-foreground/80">
                  Mon-Fri: 8AM - 6PM<br />
                  Sat: 8AM - 5PM
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-tertiary-foreground/20 pt-8 text-center text-sm text-tertiary-foreground/70">
          <p>&copy; {currentYear} Inter-Urban Flooring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
