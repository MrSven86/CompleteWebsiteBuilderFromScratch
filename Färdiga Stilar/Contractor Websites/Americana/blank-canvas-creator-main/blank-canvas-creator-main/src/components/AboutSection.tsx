import paintingWork from "@/assets/painting-work.png";
import { Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 lg:px-12 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={paintingWork}
              alt="Professional painting work in progress"
              className="w-full max-w-lg mx-auto lg:mx-0 rounded-sm"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="uppercase tracking-wider text-primary" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '13.9px' }}>
              About True American Roofing
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] leading-tight font-bold text-foreground">
              Trusted Spanish Tile Roofing Specialist Serving South Bay & Palos Verdes
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                True American Roofing has been protecting South Bay homes for over 30 years. We're a family-owned business based right here in Hermosa Beach—not storm chasers from out of state. When you call us, you're talking to Robert, who's been installing Spanish tile roofs in Palos Verdes, Rolling Hills, and Rancho Palos Verdes since 1995.
              </p>
              <p>
                Every project is permitted, every installation is documented, and we'll be here long after your roof is complete. From design to execution, we handle every aspect of roofing to ensure your home is protected with lasting quality.
              </p>
              <p>
                For expert Spanish tile roofing and all roofing services at competitive rates, get in touch with us now at (310) 710-7663.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
              <a
                href="#estimate"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
              >
                Get a FREE Estimate
              </a>
              <a
                href="tel:3107107663"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-8 py-3 text-sm font-semibold text-secondary-foreground shadow-sm hover:opacity-90 transition-opacity"
              >
                <Phone className="h-4 w-4" />
                Call (310) 710-7663
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
