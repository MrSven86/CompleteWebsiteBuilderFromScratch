import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.png";
import iconFamilyOwned from "@/assets/icon-family-owned.svg";
import iconBonded from "@/assets/icon-bonded.svg";
import { Phone } from "lucide-react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[720px] overflow-hidden">
      <img
        src={heroBg}
        alt="Beautiful residential home at sunset"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-foreground/20" />

      <div
        className={`relative z-10 container mx-auto px-6 lg:px-12 h-full flex flex-col justify-center transition-all duration-1000 ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="max-w-2xl">
          <p
            className="text-primary mb-4 text-lg sm:text-xl md:text-[27.9px]"
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontStyle: "italic",
              lineHeight: "1.1",
            }}
          >
            Spanish Tile Roofing Specialists
          </p>

          <h1
            className="mb-6 text-3xl sm:text-4xl md:text-[52.5px] md:leading-[59.4px] font-extrabold text-white"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Expert Spanish Tile
            <br className="hidden sm:block" />
            {" "}Roofing for Palos Verdes
            <br className="hidden sm:block" />
            {" "}& South Bay Homes
          </h1>

          <p
            className="mb-8 max-w-xl text-sm sm:text-base"
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontWeight: 400,
              lineHeight: "1.6",
              color: "#F2F2F2",
            }}
          >
            Get lasting protection from a top-rated local contractor with 30 years of experience, 92 permitted projects, and a BuildZoom score ranking in the top 8% of all California contractors.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href="#estimate"
              className="inline-flex items-center justify-center bg-primary px-8 py-3.5 text-primary-foreground hover:opacity-90 transition-opacity text-sm sm:text-[15px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Get a FREE Estimate
            </a>
            <a
              href="tel:3107107663"
              className="inline-flex items-center justify-center gap-2 bg-secondary px-8 py-3.5 text-secondary-foreground hover:opacity-90 transition-opacity text-sm sm:text-[15px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <Phone className="h-4 w-4" />
              Call (310) 710-7663
            </a>
          </div>

          <div className="flex flex-wrap gap-8 mt-6">
            <div className="flex items-center gap-2">
              <img src={iconFamilyOwned} alt="" className="w-9 h-9" />
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontStyle: 'italic', fontSize: '16px', color: '#FFFFFF' }}>
                Family-Owned Since<br />2005
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={iconBonded} alt="" className="w-9 h-9" />
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontStyle: 'italic', fontSize: '16px', color: '#FFFFFF' }}>
                Bonded & Insured
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
