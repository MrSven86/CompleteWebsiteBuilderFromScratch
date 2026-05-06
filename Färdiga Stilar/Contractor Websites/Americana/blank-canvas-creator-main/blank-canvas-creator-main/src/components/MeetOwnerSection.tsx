import rickPhoto from "@/assets/rick.png";
import youtubeIcon from "@/assets/youtube-icon.svg";

const MeetOwnerSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-start">
          {/* Left column - text */}
          <div>
            <p className="uppercase tracking-wider text-primary mb-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "13.9px" }}>
              About Us
            </p>
            <h2
              className="text-3xl md:text-4xl font-normal text-foreground mb-10"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              Family-Owned & Locally Trusted
            </h2>

            <div className="mb-8">
              <h3 className="text-base font-bold uppercase text-foreground mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                BUILT TO LAST 50-100 YEARS
              </h3>
              <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}>
                Spanish tile roofs are the traditional choice for South Bay and Palos Verdes homes—and for good reason. These roofs last 50-100 years, resist California wildfires (Class A fire rating), and provide natural cooling that reduces energy bills. The curved tiles allow air circulation beneath the roof, keeping your home cooler in summer.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-base font-bold uppercase text-foreground mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                ESSENTIAL FOR PALOS VERDES HOMES
              </h3>
              <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}>
                In areas like Palos Verdes, Rolling Hills, and Rancho Palos Verdes, Spanish tile roofing is not just aesthetic—it's essential. The coastal climate, fire risk, and architectural heritage all make tile roofing the smart choice for lasting protection and home value.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-base font-bold uppercase text-foreground mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                EXPERT INSTALLATION & CODE COMPLIANCE
              </h3>
              <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}>
                True American Roofing specializes in Spanish tile installations and has completed numerous projects throughout Palos Verdes Estates and surrounding areas. We understand the specific requirements for tile roofing in these neighborhoods and ensure every installation meets California building codes and cool-roof compliance.
              </p>
            </div>

            <a
              href="#estimate"
              className="inline-flex items-center justify-center bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Get a FREE Estimate
            </a>
          </div>

          {/* Right column - photo with YouTube overlay */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={rickPhoto}
                alt="Meet the owner"
                className="w-full max-w-sm object-cover"
              />
              {/* YouTube icon overlapping middle-right of image */}
              <a
                href="#"
                className="absolute top-1/3 -right-8 lg:-right-16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtubeIcon} alt="YouTube" className="w-28 h-28 md:w-36 md:h-36" />
              </a>
              {/* "Check out our YouTube Channel" text */}
              <div
                className="absolute top-1/3 -right-8 lg:-right-16 text-right"
                style={{ width: "160px", marginTop: "140px" }}
              >
                <p className="text-primary font-bold text-lg leading-tight" style={{ fontFamily: "Inter, sans-serif" }}>
                  Check out our YouTube Channel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOwnerSection;
