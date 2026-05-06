import aboutPic from "@/assets/about-pic.png";
import iconLicensed from "@/assets/icon-licensed.svg";
import iconQuality from "@/assets/icon-quality.svg";
import iconHonest from "@/assets/icon-honest.svg";
import iconLocal from "@/assets/icon-local.svg";
import iconPhoneWhite from "@/assets/icon-phone-white.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: iconLicensed,
    title: "Licensed & Experienced",
    description:
      "Backed by California License #692000, we bring 30 years of proven expertise to every job. With 92 permitted projects and full bonding and insurance, every installation is documented and code-compliant.",
  },
  {
    icon: iconQuality,
    title: "Spanish Tile Specialists",
    description:
      "We specialize in Spanish tile roofing—the traditional choice for South Bay homes. From Mission 2-piece to S-tiles, we've completed hundreds of tile installations throughout Palos Verdes Estates and surrounding areas.",
  },
  {
    icon: iconHonest,
    title: "Top-Rated by BuildZoom",
    description:
      "Our BuildZoom score of 105 ranks us in the top 8% of all 336,931 California contractors. This independent rating is based on verified licensing, insurance, and project history—not just reviews.",
  },
  {
    icon: iconLocal,
    title: "Local & Trusted",
    description:
      "As a Hermosa Beach-based company, we're proud to serve our community with accountability you can verify. Visit our YouTube channel with 140+ videos of actual roofing work in Palos Verdes homes.",
  },
];

const WhyChooseUsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 lg:px-12 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <p
              className="uppercase tracking-wider text-primary mb-2"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "13.9px" }}
            >
              Why Choose Us
            </p>
            <h2
              className="text-3xl md:text-4xl font-normal text-secondary mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              True American Roofing: Trusted Experts Since 1995
            </h2>
            <p
              className="text-muted-foreground leading-relaxed mb-10"
              style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "15px" }}
            >
              True American Roofing has been protecting South Bay homes for over 30 years. We're a family-owned business based right here in Hermosa Beach—not storm chasers from out of state. When you call us, you're talking to Robert, who's been installing Spanish tile roofs in Palos Verdes, Rolling Hills, and Rancho Palos Verdes since 1995.
            </p>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mb-10">
              {features.map((feature) => (
                <div key={feature.title}>
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-12 h-12 mb-3"
                  />
                  <h3
                    className="text-secondary font-medium text-base mb-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-muted-foreground text-sm leading-relaxed"
                    style={{ fontFamily: "'Libre Baskerville', serif" }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Closing text */}
            <p
              className="text-muted-foreground leading-relaxed mb-8"
              style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "15px" }}
            >
              Every project is permitted, every installation is documented, and we'll be here long after your roof is complete.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="#estimate"
                className="inline-flex items-center justify-center bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Get a FREE Estimate
              </a>
              <a
                href="tel:3107107663"
                className="inline-flex items-center justify-center gap-2 bg-secondary px-8 py-3 text-sm font-semibold text-secondary-foreground hover:opacity-90 transition-opacity"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <img src={iconPhoneWhite} alt="" className="w-4 h-4" />
                Call (310) 710-7663
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={aboutPic}
              alt="Roofing work by American Painters"
              className="w-full max-w-lg object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
