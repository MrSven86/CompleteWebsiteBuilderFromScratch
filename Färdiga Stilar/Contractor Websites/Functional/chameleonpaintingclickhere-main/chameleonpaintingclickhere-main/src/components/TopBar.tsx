import { Facebook, Twitter, Instagram, MapPin, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="topbar py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Twitter size={16} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Instagram size={16} />
            </a>
          </div>
          <div className="h-4 w-px bg-white/30 mx-2" />
           <div className="flex items-center gap-2 text-sm font-inter font-medium">
            <MapPin size={14} className="text-secondary" />
            <span>Licensed Painting Contractor CA #892664 | Serving Long Beach Since 2007</span>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm font-inter font-medium">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-secondary" />
            <span>Long Beach, California</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;