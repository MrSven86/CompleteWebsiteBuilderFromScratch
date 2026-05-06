import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import smallAsset from "@/assets/small-asset-headline.svg";
import heart1 from "@/assets/heart1.svg";
import heart2 from "@/assets/heart2.svg";
import qualityFinish from "@/assets/quality-finish.svg";
import trustedPros from "@/assets/trusted-pros.svg";
import watchIcon from "@/assets/watch.svg";
import trustindex from "@/assets/trustindex.svg";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[700px] flex flex-col items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-green-dark/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center px-6 pt-40 pb-28">
        {/* Hearts + Small asset banner */}
        <div className={`flex items-center gap-4 mb-4 transition-all duration-700 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
          <img src={heart1} alt="" className="w-14 h-12 opacity-80" />
          <img src={heart2} alt="" className="w-6 h-5 opacity-80" />
          <img src={smallAsset} alt="Everyone loves a great experience" className="h-16 md:h-20" />
        </div>

        {/* Heading */}
        <h1 className={`text-center max-w-4xl mx-auto mb-4 transition-all duration-700 delay-200 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary-foreground text-5xl md:text-7xl font-bold font-josefin uppercase leading-tight">
            Trusted{" "}
          </span>
          <span className="text-secondary text-5xl md:text-7xl font-bold font-josefin uppercase leading-tight underline decoration-2 underline-offset-4">
            Exterior House Painters
          </span>
          <br />
          <span className="text-primary-foreground text-5xl md:text-7xl font-bold font-josefin uppercase leading-tight">
            Central Coast
          </span>
        </h1>

        <p className={`text-primary-foreground text-center text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90 italic transition-all duration-700 delay-400 ease-out ${loaded ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Expert roofing solutions backed by nearly 50 years of experience
        </p>

        {/* Trust badges */}
        <div className={`flex items-center justify-center gap-6 mb-6 flex-wrap transition-all duration-700 delay-500 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-2 text-primary-foreground">
            <img src={watchIcon} alt="" className="w-5 h-5" />
            <span className="font-bold uppercase text-sm tracking-wider">Quick Quotes</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground">
            <img src={qualityFinish} alt="" className="w-5 h-5" />
            <span className="font-bold uppercase text-sm tracking-wider">Quality Finish</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground">
            <img src={trustedPros} alt="" className="w-6 h-6" />
            <span className="font-bold uppercase text-sm tracking-wider">Trusted Pros</span>
          </div>
        </div>
      </div>

      {/* Bottom Trustindex badge */}
      <div className={`relative z-10 w-full pb-8 transition-all duration-700 delay-700 ease-out ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <div className="flex items-center justify-center">
          <img src={trustindex} alt="Top Rated Service 2025 - 4.9 verified by Trustindex" className="h-16 md:h-20" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
