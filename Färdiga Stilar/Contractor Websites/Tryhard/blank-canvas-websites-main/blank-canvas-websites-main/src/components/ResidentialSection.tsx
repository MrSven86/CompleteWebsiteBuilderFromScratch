import rectangleDust from "@/assets/rectangle-dust.png";
import containerBedroom from "@/assets/container-bedroom.png";
import squareBrush from "@/assets/square-brush.svg";
import iconUnmatched from "@/assets/icon-unmatched.svg";
import iconUnbeatable from "@/assets/icon-unbeatable.svg";
import iconExceptional from "@/assets/icon-exceptional.svg";
import vectorIcon from "@/assets/vector-icon.svg";

const ResidentialSection = () => {
  return (
    <>
      {/* Main Content Section */}
      <div className="relative w-full" style={{ backgroundImage: `url(${rectangleDust})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-[1440px] mx-auto py-[60px] px-[80px]">
          <div className="flex items-start gap-[60px]">
            {/* Left Text Block - roughly 45% */}
            <div className="w-[45%] pt-[10px]">
              {/* Tag */}
              <div className="flex items-center gap-3 mb-2">
                <img src={squareBrush} alt="" className="w-[48px] h-auto" />
                <span className="text-primary text-xl font-semibold">The Residential Painting Experts</span>
              </div>

              {/* Heading - 2 rows */}
              <h2 className="text-[48px] font-bold uppercase leading-[50px] text-foreground mb-8" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0%' }}>
                RESIDENTIAL PAINTING<br />
                <span className="underline decoration-primary decoration-[3px] underline-offset-[6px]">IN</span> OCEAN COUNTY, NJ
              </h2>

              {/* Description */}
              <p className="text-[17px] leading-[28px] text-foreground mb-10">
                If you need help with interior painting, turn to T. Whitaker
                Painting. As one of the leading painting contractors in Little
                Egg Harbor NJ, we provide quality you can count on. Our
                residential painting experts provide stellar results quickly and
                affordably.
              </p>

              {/* Features */}
              <div className="flex gap-10">
                <div className="flex items-center gap-2">
                  <img src={iconUnmatched} alt="" className="w-8 h-8" />
                  <span className="text-sm font-bold text-foreground leading-tight">Unmatched<br />Quality.</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={iconUnbeatable} alt="" className="w-8 h-8" />
                  <span className="text-sm font-bold text-foreground leading-tight">Unbeatable<br />Prices.</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={iconExceptional} alt="" className="w-8 h-8" />
                  <span className="text-sm font-bold text-foreground leading-tight">Exceptional<br />Service.</span>
                </div>
              </div>
            </div>

            {/* Right Image - roughly 55% */}
            <div className="w-[55%] flex items-start">
              <img
                src={containerBedroom}
                alt="Beautifully painted bedroom"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Blue Band */}
      <div className="w-full h-[70px] bg-primary overflow-hidden flex items-center">
        <div className="animate-marquee flex items-center whitespace-nowrap gap-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 mx-8">
              <img src={vectorIcon} alt="" className="w-[30px] h-[16px]" />
              <span className="text-primary-foreground text-sm font-bold uppercase tracking-wider">
                RESTORING THE PAST. CONSTRUCTING THE FUTURE.
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResidentialSection;
