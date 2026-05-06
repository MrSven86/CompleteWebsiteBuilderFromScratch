import { useState } from "react";

const navItems = [
  "Home",
  "About Us",
  "Painting Services",
  "Gallery",
  "Blog",
  "Client Testimonials",
  "References",
  "Contact",
];

const NavBar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="w-full bg-primary">
      <div className="max-w-[1170px] mx-auto flex items-center justify-center h-14">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`h-full px-4 font-opensans text-sm font-semibold uppercase tracking-wide transition-colors
              ${
                active === item
                  ? "text-primary-foreground"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }
            `}
            style={{
              textShadow: "0px 1px 0px rgba(255, 255, 255, 0.25)",
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
