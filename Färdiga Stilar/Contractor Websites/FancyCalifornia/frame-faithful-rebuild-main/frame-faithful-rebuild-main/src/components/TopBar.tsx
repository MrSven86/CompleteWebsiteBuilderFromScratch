import { Phone, Mail } from "lucide-react";

interface TopBarProps {
  hidden?: boolean;
}

const TopBar = ({ hidden = false }: TopBarProps) => {
  const phoneNumber = "(310) 397-7294";

  return (
    <div
      className={`top-bar transition-all duration-300 ease-in-out ${
        hidden ? "h-0 opacity-0 overflow-hidden" : "h-8 opacity-100"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-8 text-sm">
          {/* Left - Serving info */}
          <span className="hidden md:block font-normal">
            Serving Santa Monica Since 1973
          </span>

          {/* Center - Credentials */}
          <span className="hidden lg:block font-semibold text-white/90">
            Licensed, bonded & insured • A+ BBB rated • Free estimates
          </span>

          {/* Right - Contact */}
          <div className="flex items-center gap-4 ml-auto md:ml-0">
            <a
              href={`tel:${phoneNumber.replace(/\D/g, "")}`}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">{phoneNumber}</span>
            </a>
            <span className="text-white/50 hidden sm:block">|</span>
            <a
              href="mailto:info@parrotpainting.com"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
