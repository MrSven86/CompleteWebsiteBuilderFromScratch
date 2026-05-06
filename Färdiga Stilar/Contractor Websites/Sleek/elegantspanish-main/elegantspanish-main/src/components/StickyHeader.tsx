import { useState, useEffect } from "react";
import TopBar from "./TopBar";
import MainNav from "./MainNav";

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className="transition-all duration-300 overflow-hidden"
        style={{ maxHeight: scrolled ? 0 : 100 }}
      >
        <TopBar />
      </div>
      <MainNav />
    </header>
  );
};

export default StickyHeader;
