import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import whyChooseMain from "@/assets/why-choose-main.jpg";
import whyChooseSecondary from "@/assets/why-choose-secondary.jpg";

const features = [
  {
    title: "Local Santa Monica Expertise",
    description:
      "Operating from our Santa Monica Airport location since 1976, we have deep knowledge of local building types and understand the unique challenges of Santa Monica's coastal climate including salt air corrosion and moisture protection.",
  },
  {
    title: "Verified Excellence",
    description:
      "BuildZoom score of 95 ranks us in the top 22% of 336,931 California licensed contractors. Our A+ BBB rating spanning 26+ years reflects consistent quality work that keeps clients returning.",
  },
  {
    title: "Comprehensive Commercial Services",
    description:
      "From high-rise buildings to parking structures, apartment complexes to historical restorations— we handle all commercial painting projects plus specialized services like concrete repair and elastomeric coatings.",
  },
];

const WhyChooseSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="text-primary font-semibold tracking-widest text-sm uppercase">
              WHY CHOOSE US
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mt-4 mb-8">
              Why Commercial Property Managers Choose Parrot Painting
            </h2>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex gap-4 transition-all duration-500`}
                  style={{
                    transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full uppercase font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Free Estimate
            </Button>
          </div>

          {/* Right Images */}
          <div
            className={`relative h-[500px] lg:h-[600px] transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Main larger image */}
            <div className="absolute top-0 right-0 w-[75%] h-[70%] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={whyChooseMain}
                alt="Commercial building exterior"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Secondary smaller image */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[45%] rounded-3xl overflow-hidden border-8 border-background shadow-2xl">
              <img
                src={whyChooseSecondary}
                alt="Parking structure detail"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
