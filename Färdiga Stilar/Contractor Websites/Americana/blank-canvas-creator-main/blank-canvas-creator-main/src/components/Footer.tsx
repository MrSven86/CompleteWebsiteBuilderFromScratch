import footerLogo from "@/assets/footer-logo.svg";
import { Phone, Mail, Shield, MapPin } from "lucide-react";
import youtubeIcon from "@/assets/youtube-icon.svg";

const quickLinks = ["Home", "About", "FAQ", "Gallery", "Contact"];

const services = [
  "Spanish Tile Roofing",
  "Composition Shingle Roofing",
  "Roof Repairs",
  "Roof Inspections",
  "Skylight Installation",
  "Roof Maintenance",
  "Real Estate Inspections",
  "Insurance Claims",
];

const Footer = () => {
  return (
    <footer className="-mt-2 md:-mt-1">
      <div className="bg-sky-900 pt-12 pb-10 px-6 lg:px-0">
        <div className="max-w-[1220px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Column 1: Logo + description */}
            <div className="lg:col-span-3">
              <img src={footerLogo} alt="True American Roofing" className="h-[67px] mb-8" />
              <h3
                className="text-white text-lg font-normal leading-5 mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Spanish Tile Roofing Specialists
              </h3>
              <p
                className="text-zinc-100 text-sm font-normal leading-6 mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Trusted roofing contractor serving Palos Verdes, Hermosa Beach, Redondo Beach, Manhattan Beach and surrounding South Bay areas since 1995.
              </p>
              <a
                href="https://www.youtube.com/@trueamericanroofing7317"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-100 text-sm hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <img src={youtubeIcon} alt="" className="w-5 h-5" />
                Watch us on YouTube
              </a>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2">
              <h3
                className="text-white text-xl font-normal leading-5 mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-zinc-100 text-sm font-normal leading-6 hover:text-white transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="lg:col-span-3">
              <h3
                className="text-white text-xl font-normal leading-5 mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s}>
                    <a
                      href="#"
                      className="text-zinc-100 text-sm font-normal leading-6 hover:text-white transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Get in Touch */}
            <div className="lg:col-span-4">
              <h3
                className="text-white text-xl font-normal leading-5 mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Get in Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <a
                    href="tel:3107107663"
                    className="text-zinc-100 text-sm leading-6 hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    (310) 710-7663
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-zinc-100 flex-shrink-0" />
                  <a
                    href="mailto:Trueamericanroofing@yahoo.com"
                    className="text-zinc-100 text-sm leading-6 hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Trueamericanroofing@yahoo.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-zinc-100 flex-shrink-0" />
                  <span
                    className="text-zinc-100 text-sm leading-6"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    CSLB License No. 692000
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-zinc-100 flex-shrink-0" />
                  <span
                    className="text-zinc-100 text-sm leading-6"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    709 1st Place, Hermosa Beach, CA 90254
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-sky-900 border-t border-sky-800">
        <div className="max-w-[1220px] mx-auto py-5 text-center">
          <p
            className="text-zinc-300 text-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © 2026 True American Roofing Co Inc. All rights reserved. | Website by Velocity Web
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
