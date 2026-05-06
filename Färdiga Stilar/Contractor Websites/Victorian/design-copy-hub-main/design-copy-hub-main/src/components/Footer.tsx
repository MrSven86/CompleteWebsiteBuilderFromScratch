import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import facebookIcon from '@/assets/icons/facebook.png';
import youtubeIcon from '@/assets/icons/youtube.png';
import yelpIcon from '@/assets/icons/yelp.png';

const Footer = () => {
  const services = [
    'Interior Painting',
    'Exterior Painting',
    'Commercial Painting',
    'Cabinets Painting',
    'Free Consultation',
  ];

  const locations = [
    'Los Angeles',
    'San Diego',
    'Orange County',
    'Inland Empire',
  ];

  const resources = [
    'Painting Your Commercial Building: An Easy Guide',
    '5 Tips When Painting A Wall',
    'Painting Tips For Ceilings',
    'Is House Painting A Capital Improvement?',
    'Top Tips For Painting A House To Sell',
    'Different Types Of House Paint',
    'Guide To Pick Paint Colors',
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-end gap-1 mb-2">
                <div className="w-2 h-8 bg-white rounded-sm"></div>
                <div className="w-2 h-12 bg-white rounded-sm"></div>
                <div className="w-2 h-6 bg-white rounded-sm"></div>
              </div>
              <h3 className="font-playfair text-xl font-bold tracking-wide">
                WIN CUSTOM PAINTING
              </h3>
            </div>

            {/* Description */}
            <p className="font-poppins text-white/80 text-sm leading-relaxed mb-6">
              Get in touch today and get a FREE quote on your paint job. No commitments, no 
              obligations; request your free quote below.
            </p>

            {/* CTA Button */}
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary rounded-none mb-8 font-poppins"
            >
              Get A FREE Quote
            </Button>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="tel:8889909194" className="flex items-center gap-3 text-gold hover:text-gold/80 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-poppins text-sm">(888) 990 9194</span>
              </a>
              <a href="mailto:info@wincustompainting.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span className="font-poppins text-sm">info@wincustompainting.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="font-poppins text-sm">
                  7940 Silverton Ave Unit 104, San Diego, CA 92126, United States
                </span>
              </div>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="font-poppins text-sm">
                  105 S Doheny Dr, Beverly Hills, Los Angeles, CA 90211 United States
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-8">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={facebookIcon} alt="Facebook" className="w-5 h-5 brightness-0 invert" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={youtubeIcon} alt="YouTube" className="w-5 h-5 brightness-0 invert" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={yelpIcon} alt="Yelp" className="w-5 h-5 brightness-0 invert" />
              </a>
            </div>

            {/* Operating Hours */}
            <div>
              <h4 className="font-poppins font-semibold text-white mb-2">Operating Hours</h4>
              <p className="font-poppins text-white/80 text-sm">Monday to Sunday</p>
              <p className="font-poppins text-white/80 text-sm">7:00 AM - 8:00 PM</p>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-poppins font-semibold text-white text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="font-poppins text-white/70 text-sm hover:text-gold transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h4 className="font-poppins font-semibold text-white text-lg mb-6">Locations</h4>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location}>
                  <a 
                    href="#" 
                    className="font-poppins text-white/70 text-sm hover:text-gold transition-colors"
                  >
                    {location}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-poppins font-semibold text-white text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource}>
                  <a 
                    href="#" 
                    className="font-poppins text-white/70 text-sm hover:text-gold transition-colors leading-relaxed block"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-2 font-poppins text-white/60">
              <span>Copyright © 2025 Win Custom Painting</span>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
            <a href="#" className="font-poppins text-white/60 hover:text-white transition-colors">
              Terms and Conditions
            </a>
            <span className="font-poppins text-white/60">
              Powered by <span className="text-primary">Blue Boost</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
