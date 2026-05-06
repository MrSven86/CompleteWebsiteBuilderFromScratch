import { Mail, MapPin, Phone as PhoneIcon, Clock } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const galleryImages = [project1, project2, project3, project4, project5, project6, project1, project2];

const services = [
  "Residential Painting",
  "Commercial Painting",
  "Exterior Painting",
  "Interior Painting",
  "Fence Painting",
  "Cabinet Refinishing & Painting",
  "Drywall Repair Services",
  "Wallpaper Removal",
];

const Footer = () => {
  return (
    <footer className="bg-muted">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Services */}
          <div>
            <h3 className="text-brand-green-dark text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-brand-cyan-dark rounded-sm" />
                  <span className="text-foreground text-base">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Info */}
          <div>
            <h3 className="text-brand-green-dark text-xl font-bold mb-6">Official Info:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-brand-cyan-dark rounded-md flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-card" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Email</p>
                  <p className="text-foreground">alvaradogustavo2412@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-brand-cyan-dark rounded-md flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-card" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Email</p>
                  <p className="text-foreground">gjqpainting@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-brand-cyan-dark rounded-md flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-card" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Location</p>
                  <p className="text-foreground">Pasadena, CA</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-brand-cyan-dark rounded-md flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-4 h-4 text-card" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Phone</p>
                  <p className="text-foreground">626-536-2746</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-brand-cyan-dark rounded-md flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-card" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Monday - Friday</p>
                  <p className="text-foreground">8:00 AM - 4:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-brand-green-dark text-xl font-bold mb-6">Gallery</h3>
            <div className="grid grid-cols-4 gap-2">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="aspect-square rounded-md overflow-hidden">
                  <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-brand-green-dark py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground text-sm font-bold">
            © 2026 All rights reserved by G&J QUALITY PAINTING INC
          </p>
          <nav className="flex items-center gap-4">
            {["Home", "Services", "Portfolio", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-primary-foreground text-sm font-bold border-l-2 border-primary-foreground pl-3 hover:opacity-80">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
