import { useState, useEffect } from "react";
import TopBar from "./TopBar";
import Navigation from "./Navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* TopBar - hidden on mobile and when scrolled */}
      <div
        className={`hidden lg:block transition-all duration-300 overflow-hidden ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
        }`}
      >
        <TopBar />
      </div>
      
      {/* Navigation - always visible */}
      <div className={`transition-shadow duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
