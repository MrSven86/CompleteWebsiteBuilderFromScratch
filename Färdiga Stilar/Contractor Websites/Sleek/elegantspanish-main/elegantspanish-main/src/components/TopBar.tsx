import { Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-topbar text-topbar-foreground border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-2 px-4 text-xs sm:text-sm">
        <div className="flex items-center gap-2 truncate">
          <span className="truncate">Contratista con licencia profesional</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:5551234567" className="flex items-center gap-1.5 font-semibold text-foreground">
            <Phone className="h-3.5 w-3.5" />
            (555) 123-4567
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;