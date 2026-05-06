import logo from "@/assets/logo.png";
import iconPhone from "@/assets/icon-phone.svg";
import iconEmail from "@/assets/icon-email.svg";
import iconLocation from "@/assets/icon-location.svg";
import { Button } from "@/components/ui/button";

const HeaderBar = () => {
  return (
    <div className="w-full bg-muted">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <img src={logo} alt="Disant Constructora" className="h-10 md:h-[52px]" />

        {/* Contact Info & CTA */}
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Phone */}
          <div className="hidden md:flex items-center gap-2">
            <img src={iconPhone} alt="" className="w-5 h-5" />
            <div>
              <div className="text-xs text-muted-foreground">Llámenos:</div>
              <div className="text-sm font-bold text-foreground">+549 11 3182-5507</div>
            </div>
          </div>

          {/* Email */}
          <div className="hidden lg:flex items-center gap-2">
            <img src={iconEmail} alt="" className="w-5 h-5" />
            <div>
              <div className="text-xs text-muted-foreground">Escríbanos:</div>
              <div className="text-sm font-bold text-foreground">empresadisantsrl@gmail.com</div>
            </div>
          </div>

          {/* Location */}
          <div className="hidden lg:flex items-center gap-2">
            <img src={iconLocation} alt="" className="w-5 h-5" />
            <div>
              <div className="text-xs text-muted-foreground">Ubicación:</div>
              <div className="text-sm font-bold text-foreground">San Guillermo, Martín Coronado</div>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs md:text-sm px-4 md:px-6 py-2.5 rounded-md">
            PRESUPUESTO GRATIS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
