import { Star } from "lucide-react";
import mapquestLogo from "@/assets/mapquest-logo.png";
import googleReviewsBadge from "@/assets/google-reviews-badge.svg";
import satisfactionBadge from "@/assets/satisfaction-badge.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const trustBadges = [
  { src: googleReviewsBadge, alt: "Google Reviews" },
  { src: satisfactionBadge, alt: "100% Satisfaction Guarantee" },
];

const ReviewsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-20 lg:py-24 bg-background overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2
            className={cn(
              "font-display text-3xl md:text-4xl text-nav mb-10 transition-all duration-600 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            )}
          >
            Built on Trust & Reliability
          </h2>

          {/* Review Card */}
          <div
            className={cn(
              "bg-muted rounded-lg shadow-lg p-8 md:p-10 mb-8 transition-all duration-700 ease-out delay-150 hover:shadow-xl",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-6 h-6 fill-primary text-primary transition-all duration-300",
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  )}
                  style={{ transitionDelay: isVisible ? `${300 + i * 75}ms` : "0ms" }}
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-nav italic text-lg md:text-xl mb-6">
              "Best paint job! Chuck and his crew are professional and we love how our home turned out."
            </blockquote>

            {/* MapQuest Badge */}
            <div className="flex items-center justify-center gap-3">
              <img
                src={mapquestLogo}
                alt="MapQuest"
                className="h-6 object-contain"
              />
              <span className="text-primary font-medium text-sm">
                Verified Review
              </span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {trustBadges.map((badge, index) => (
              <img
                key={index}
                src={badge.src}
                alt={badge.alt}
                className={cn(
                  "h-12 md:h-16 object-contain transition-all duration-500 ease-out hover:scale-105",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: isVisible ? `${500 + index * 100}ms` : "0ms" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
