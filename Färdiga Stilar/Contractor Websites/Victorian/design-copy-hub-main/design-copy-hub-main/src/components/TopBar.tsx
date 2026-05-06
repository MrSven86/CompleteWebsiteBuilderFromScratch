import { Instagram } from "lucide-react";
import emailIcon from "@/assets/icons/email.png";
import facebookIcon from "@/assets/icons/facebook.png";
import yelpIcon from "@/assets/icons/yelp.png";
import googleIcon from "@/assets/icons/google.png";
import youtubeIcon from "@/assets/icons/youtube.png";

const socialLinks = [
  { icon: emailIcon, href: "mailto:contact@westfhal.com", label: "Email" },
  { icon: facebookIcon, href: "https://www.facebook.com/westfhal/", label: "Facebook" },
  { icon: yelpIcon, href: "https://www.yelp.com/", label: "Yelp" },
  { icon: googleIcon, href: "https://g.co/kgs/8N8sNaN", label: "Google" },
  { icon: youtubeIcon, href: "https://www.youtube.com/@westfhalpainting", label: "YouTube" },
  { icon: null, href: "https://www.instagram.com/westfhalpainting/", label: "Instagram", isLucide: true },
];

const TopBar = () => {
  return (
    <div className="bg-primary h-[34px] flex items-center">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-gold-light transition-colors duration-200"
              aria-label={link.label}
            >
              {link.isLucide ? (
                <Instagram className="w-4 h-4" />
              ) : (
                <img 
                  src={link.icon || ""} 
                  alt={link.label} 
                  className="w-4 h-4 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
                />
              )}
            </a>
          ))}
        </div>
        <div className="text-gold-light text-sm font-poppins opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          California License nr: 2324242
        </div>
      </div>
    </div>
  );
};

export default TopBar;
