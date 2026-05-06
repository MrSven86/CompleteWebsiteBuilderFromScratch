import { ChevronDown } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { label: "HOME", href: "#", active: true },
    { label: "ABOUT US", href: "#", hasDropdown: true },
    { label: "PAINTING SERVICES", href: "#", hasDropdown: true },
    { label: "GALLERY", href: "#", hasDropdown: true },
    { label: "BLOG", href: "#" },
    { label: "CLIENT TESTIMONIALS", href: "#" },
    { label: "REFERENCES", href: "#" },
    { label: "CONTACT", href: "#" },
  ];

  return (
    <nav className="nav-red border-t border-white/10">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-start gap-1 py-4 overflow-x-auto">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`nav-link flex items-center gap-1 px-4 py-2 whitespace-nowrap ${
                  item.active ? "text-white" : ""
                }`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
