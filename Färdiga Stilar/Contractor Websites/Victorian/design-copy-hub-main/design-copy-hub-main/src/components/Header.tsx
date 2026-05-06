import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background py-4 md:py-5">
      <div className="container grid grid-cols-3 items-center">
        {/* Phone Section - Left */}
        <a href="tel:2035652316" className="group flex items-center gap-2 opacity-0 animate-fade-in-left transition-colors">
          <Phone className="w-6 h-6 text-foreground animate-[phone-pulse_5s_ease-in-out_infinite]" />
          <div>
            <span className="text-2xl font-extrabold font-poppins text-foreground group-hover:text-destructive transition-colors">
              (203) 565-2316
            </span>
            <p className="text-base font-semibold font-poppins text-foreground group-hover:text-destructive transition-colors">
              Call to Book Your Free Estimate
            </p>
          </div>
        </a>

        {/* Logo - Center */}
        <div className="flex items-center justify-center opacity-0 animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full border-4 border-destructive flex items-center justify-center bg-background">
              <span className="text-secondary font-bold text-lg">WP</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-secondary tracking-wide font-roboto">
                WESTFHAL
              </span>
              <span className="text-sm font-medium text-destructive tracking-widest font-roboto">
                HOUSE PAINTERS
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button - Right */}
        <div className="flex justify-end opacity-0 animate-fade-in-right" style={{ animationDelay: "0.1s" }}>
          <Button variant="cta" size="lg">
            GET FREE ESTIMATE
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
