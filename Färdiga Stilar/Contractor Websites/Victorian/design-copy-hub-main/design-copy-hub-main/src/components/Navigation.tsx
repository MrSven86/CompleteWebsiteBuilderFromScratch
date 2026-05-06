import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Residential Painting", href: "/residential-painting" },
  { label: "Commercial Painting", href: "#" },
  { label: "Contact Us", href: "#" },
];

const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the header height to know when to make nav sticky
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      setIsSticky(window.scrollY > headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`bg-secondary h-[55px] flex items-center opacity-0 animate-fade-in transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : ''
      }`} 
      style={{ animationDelay: "0.3s" }}
    >
      <div className="container flex justify-center items-center">
        <NavigationMenu className="max-w-none">
          <NavigationMenuList className="gap-0">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink asChild>
                  <a
                    href={item.href}
                    className="flex items-center px-4 py-4 text-base font-medium text-secondary-foreground hover:text-gold-light transition-colors font-roboto"
                  >
                    {item.label}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Free Estimate Button - only shows when sticky */}
        <div className={`ml-4 flex items-center gap-4 transition-all duration-300 ${isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <a href="tel:2035652316" className="group flex items-center gap-2 text-secondary-foreground hover:text-gold-light transition-colors">
            <Phone className="w-4 h-4 group-hover:animate-[phone-ring_0.6s_ease-in-out]" />
            <span className="font-poppins font-semibold text-sm">(203) 565-2316</span>
          </a>
          <Button variant="cta" size="default">
            GET FREE ESTIMATE
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
