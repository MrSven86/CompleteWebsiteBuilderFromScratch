import heroPerson from "@/assets/hero-person.png";
import heroBg from "@/assets/hero-background.png";
import fullyInsuredBadge from "@/assets/fully-insured-badge.svg";
import iconQuality from "@/assets/icon-quality.svg";
import iconPrices from "@/assets/icon-prices.svg";
import iconService from "@/assets/icon-service.svg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[675px] overflow-hidden">
      {/* Background */}
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />

      {/* Content */}
      <div className="relative max-w-[1670px] mx-auto h-full px-6">
        {/* Text Block */}
        <div className="absolute top-[104px] left-[125px]">
          {/* Main Heading */}
          <h1 className="text-[50px] font-extrabold uppercase leading-[50px] text-foreground max-w-[967px]">
            FAST & EFFICIENT STORM<br />
            DAMAGE ROOFING<br />
            SERVICES IN MARYLAND
          </h1>

          {/* Subheading */}
          <p className="mt-[27px] text-xl font-bold uppercase leading-[22px] text-foreground">
            We Get It Right the First Time, Every Time, Saving You Time and Money
          </p>

          {/* Features */}
          <div className="flex gap-10 mt-[25px]">
            <div className="flex items-center gap-2">
              <img src={iconQuality} alt="" className="w-7 h-7" />
              <span className="text-xl font-medium leading-[22px] text-foreground">Unmatched Quality.</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={iconPrices} alt="" className="w-7 h-7" />
              <span className="text-xl font-medium leading-[22px] text-foreground">Unbeatable Prices.</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={iconService} alt="" className="w-7 h-7" />
              <span className="text-xl font-medium leading-[22px] text-foreground">Exceptional Service.</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="absolute top-[439px] left-[132px] flex gap-[30px]">
          <button
            className="w-[270px] h-[62px] text-xl font-bold text-primary-foreground uppercase flex items-center justify-center"
            style={{ background: "var(--gradient-cta)" }}
          >
            CALL US
          </button>
          <button
            className="w-[270px] h-[62px] text-xl font-bold uppercase flex items-center justify-center border border-foreground"
            style={{ background: "var(--gradient-cta-ghost)" }}
          >
            GET A FREE QUOTE
          </button>
        </div>

        {/* Fully Insured Badge */}
        <img
          src={fullyInsuredBadge}
          alt="Fully Insured"
          className="absolute top-[111px] left-[835px] w-[266px] h-auto -rotate-[14deg] origin-top-left"
        />

        {/* Hero Person */}
        <img
          src={heroPerson}
          alt="Professional contractor"
          className="absolute right-0 bottom-0 h-[675px] w-auto object-contain object-bottom"
        />
      </div>
    </div>
  );
};

export default HeroSection;
