import { ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", active: true },
  { label: "Services", active: false, hasDropdown: true },
  { label: "Service Area", active: false },
  { label: "Roofs We Serve", active: false },
  { label: "Past Work", active: false },
  { label: "About", active: false },
  { label: "Contact", active: false },
];

const NavBar = () => {
  return (
    <div className="w-full bg-background h-[88px] relative z-10">
      <div className="max-w-[1670px] mx-auto h-full flex items-center px-6">
        {/* Nav Links - positioned after logo space */}
        <nav className="flex items-center gap-6 ml-[304px]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`text-lg font-bold uppercase leading-[19.8px] font-['Poppins'] ${
                link.active ? "text-primary" : "text-foreground"
              } hover:text-primary transition-colors`}
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="inline ml-1" size={18} strokeWidth={3} />}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="ml-auto">
          <button
            className="w-[270px] h-[62px] text-xl font-bold text-primary-foreground uppercase"
            style={{ background: "var(--gradient-cta)" }}
          >
            GET A FREE QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
