import workersImg from "@/assets/workers.png";
import bbbBadge from "@/assets/bbb-badge.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={cn(
              "max-w-2xl transition-all duration-700 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] text-nav leading-tight mb-8">
              Nearly Half a Century of Commercial Painting Excellence in Santa Monica
            </h2>

            <div className="space-y-6 text-foreground/90 text-base md:text-lg leading-relaxed">
              <p>
                <span className="font-bold">Since 1973, Parrot Painting </span>
                has been the trusted choice for commercial property owners and managers throughout Santa Monica and greater Los Angeles. From apartment complexes and parking structures to high-rise buildings and historical restorations, we bring nearly 50 years of proven expertise to every project.
              </p>

              <p>
                Our comprehensive services go beyond painting—we provide hydro blasting, concrete and masonry repair, elastomeric coating systems, and waterproofing. This means you work with one reliable contractor instead of coordinating multiple vendors for your building's exterior maintenance.
              </p>
            </div>

            {/* CTA and Badge */}
            <div className="flex flex-wrap items-center gap-6 mt-10">
              <a
                href="#contact"
                className="btn-cta-primary hover:scale-105 hover:shadow-xl transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Your Free Estimate
              </a>
              <img
                src={bbbBadge}
                alt="BBB A+ Accredited Business"
                className="h-14 md:h-16 object-contain hover:scale-105 transition-transform duration-200"
              />
            </div>
          </div>

          {/* Right Image */}
          <div
            className={cn(
              "relative transition-all duration-700 ease-out delay-200 pt-5 pr-5 md:pt-6 md:pr-6",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            {/* Orange rectangular frame - positioned top-right, behind image */}
            <div className="absolute top-0 right-0 w-[90%] h-[90%] border-[10px] md:border-[12px] border-primary rounded-xl z-0" />
            
            {/* Image container - overlaps frame from bottom-left */}
            <div className="relative overflow-hidden rounded-xl group z-10">
              <img
                src={workersImg}
                alt="Professional painters at work"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
