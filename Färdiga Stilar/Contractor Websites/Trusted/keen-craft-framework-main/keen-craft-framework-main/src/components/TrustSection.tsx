import carImg from "@/assets/car.png";
import brandLogos from "@/assets/brand-logos.png";

const TrustSection = () => {
  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-[1170px] mx-auto px-4">
        {/* Brand logos bar */}
        <p className="font-rubik text-sm text-muted-foreground mb-4">
          Proud to work with leading market brands:
        </p>
        <div className="mb-12">
          <img
            src={brandLogos}
            alt="Trusted partner logos"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Van + Text */}
        <div className="flex items-center gap-12">
          {/* Van image */}
          <div className="flex-shrink-0 w-[45%]">
            <img
              src={carImg}
              alt="Acme Painting service van"
              className="w-full h-auto"
            />
          </div>

          {/* Text content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold font-rubik text-foreground leading-tight mb-4">
              Bay Area's Trusted Painting Company
              <br />
              with 15+ Years Experience
            </h2>
            <p className="font-rubik text-base text-muted-foreground leading-7 mb-6">
              Painting problems can't wait—and we get that. At Acme Painting
              Corp, we take every project seriously, whether it's interior
              touch-ups, full exterior repaints, or commercial renovations. With
              over 15 years of experience, our licensed and certified team
              knows how to deliver flawless results quickly, safely, and correctly.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-5 h-5 rounded-full bg-brand-red flex items-center justify-center text-primary-foreground text-xs">✓</span>
              <span className="font-rubik font-bold text-foreground text-sm">
                Full Exterior Repaints
              </span>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-opensans font-semibold uppercase text-sm tracking-wide rounded hover:opacity-90 transition-opacity"
            >
              Talk To The Local Paint Experts Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
