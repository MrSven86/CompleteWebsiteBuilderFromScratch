import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-207px)] min-h-[600px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 animate-fade-in"
        style={{ backgroundImage: `url(${heroImage})`, animationDelay: "0.3s" }}
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-end justify-center pb-10">
        <div className="flex flex-col items-center">
          {/* White Card */}
          <div 
            className="bg-background/95 px-12 py-6 text-center max-w-4xl mx-4 opacity-0 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-destructive font-bold text-lg tracking-[2px] font-poppins mb-2">
              CELEBRATING 50 YEARS OF REPUTATION & EXCELLENCE
            </p>
            <h1 className="text-foreground text-5xl font-playfair mb-4">
              Custom Building and Remodeling
            </h1>
            <p className="text-foreground/80 text-lg font-light font-poppins leading-relaxed max-w-3xl mx-auto">
              Kavin Construction is proudly celebrating over 45 years in business. We are one of Los Angeles'
              premier residential contractors, offering exceptional craftsmanship, cost transparency and customer satisfaction.
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex gap-4 mt-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.9s" }}
          >
            <Button variant="primary" size="xl">
              LEARN ABOUT OUR SERVICES
            </Button>
            <Button variant="gold" size="xl">
              CONTACT US TODAY
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
