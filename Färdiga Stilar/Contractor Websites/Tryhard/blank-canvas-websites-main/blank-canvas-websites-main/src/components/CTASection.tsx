import ctaBg from "@/assets/cta-background.png";
import heroPerson from "@/assets/hero-person.png";
import fullyInsuredBadge from "@/assets/fully-insured-badge.png";
import thumbsUpForm from "@/assets/thumbs-up-form.svg";
import iconQuality from "@/assets/icon-quality.svg";
import iconPrices from "@/assets/icon-prices.svg";
import iconService from "@/assets/icon-service.svg";
import squareBrush from "@/assets/square-brush.svg";
import googleIcon from "@/assets/google-icon.svg";
import facebookIcon from "@/assets/facebook-icon.svg";
import accreditedIcon from "@/assets/accredited-icon.svg";
import usFlag from "@/assets/us-flag.png";
import { Check } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)" }}>
      {/* Background texture */}
      <img
        src={ctaBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
      />

      {/* Decorative gradient orbs */}
      <div className="w-96 h-96 absolute left-[371px] top-[-207px] opacity-20 mix-blend-lighten bg-[radial-gradient(ellipse_168.42%_168.42%_at_50.00%_50.00%,_#ED8B30_50%,_#FFFBD3_100%)] rounded-full blur-xl" />
      <div className="w-96 h-96 absolute right-0 top-[-3px] opacity-20 mix-blend-lighten bg-[radial-gradient(ellipse_168.42%_168.42%_at_50.00%_50.00%,_#44E3D9_50%,_rgba(175,82,249,0)_100%)] rounded-full blur-xl" />
      <div className="w-96 h-96 absolute left-0 bottom-0 opacity-20 mix-blend-lighten bg-[radial-gradient(ellipse_168.42%_168.42%_at_50.00%_50.00%,_#AF52F9_50%,_rgba(175,82,249,0)_100%)] rounded-full blur-xl" />

      <div className="relative w-[1440px] mx-auto h-[974px]">
        {/* Left side - Text content */}
        <div className="absolute left-[160px] top-[130px] w-[570px]">
          {/* Tag line */}
          <div className="flex items-center gap-3 mb-[20px]">
            <img src={squareBrush} alt="" className="w-[28px] h-[28px]" />
            <span className="text-primary text-2xl font-bold uppercase leading-6" style={{ fontFamily: "'Franklin Gothic Book', sans-serif" }}>
              Interested in working with us?
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-foreground text-[48px] leading-[50px] text-center max-w-[570px]"
            style={{ fontFamily: "'Franklin Gothic Heavy', sans-serif" }}
          >
            Get a free quote in 24 hours by filling out our form
          </h2>

          {/* Description */}
          <p className="mt-[40px] text-center text-gray-600 text-lg leading-7" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Building client trust through consistently exceptional service and a
            proven track record of plumbing challenges with expertise.
          </p>

          {/* Features row */}
          <div className="flex items-start gap-[40px] mt-[40px] justify-center">
            <div className="flex items-center gap-2">
              <img src={iconQuality} alt="" className="w-[42px] h-[42px]" />
              <span className="text-xl font-medium leading-5 text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                Unmatched<br />Quality.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={iconPrices} alt="" className="w-[43px] h-[43px]" />
              <span className="text-xl font-medium leading-5 text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                Unbeatable<br />Prices.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={iconService} alt="" className="w-[40px] h-[40px]" />
              <span className="text-xl font-medium leading-5 text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
                Exceptional<br />Service.
              </span>
            </div>
          </div>
        </div>

        {/* Fully insured badge */}
        <img
          src={fullyInsuredBadge}
          alt="Fully Insured"
          className="absolute left-[300px] top-[600px] w-[310px] h-[256px] -rotate-[18.33deg] origin-top-left"
        />

        {/* Center - Hero person */}
        <img
          src={heroPerson}
          alt="Professional contractor"
          className="absolute left-[480px] bottom-0 h-[637px] w-auto object-contain object-bottom"
        />

        {/* Right side - Form */}
        <div className="absolute right-[80px] top-[64px] w-[500px] bg-white border border-black">
          {/* Form header */}
          <div className="flex items-start gap-3 px-[30px] pt-[24px]">
            <img src={thumbsUpForm} alt="" className="w-[80px] h-[80px]" />
            <div className="pt-[10px]">
              <div className="text-foreground text-2xl leading-7" style={{ fontFamily: "'Franklin Gothic Heavy', sans-serif" }}>
                Get a free quote in 24 hours
              </div>
              <div className="flex items-center gap-3 mt-[6px]">
                <div className="flex items-center gap-1">
                  <Check className="w-5 h-3.5 text-muted-foreground" />
                  <span className="text-base leading-7 text-zinc-700" style={{ fontFamily: "'Franklin Gothic Book', sans-serif" }}>Benefit 1</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-5 h-3.5 text-muted-foreground" />
                  <span className="text-base leading-7 text-zinc-700" style={{ fontFamily: "'Franklin Gothic Book', sans-serif" }}>Benefit 2</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-5 h-3.5 text-muted-foreground" />
                  <span className="text-base leading-7 text-zinc-700" style={{ fontFamily: "'Franklin Gothic Book', sans-serif" }}>Benefit 3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form fields */}
          <div className="px-[24px] pt-[24px] pb-[24px]">
            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full h-12 bg-white rounded-[10px] border border-black px-[15px] text-lg text-neutral-400 mb-[16px]"
              style={{ fontFamily: "'Segoe UI', sans-serif" }}
            />

            {/* Email + Phone row */}
            <div className="flex gap-[16px] mb-[16px]">
              <input
                type="email"
                placeholder="Email Address"
                className="w-[calc(50%-8px)] h-12 bg-white rounded-[10px] border border-black px-[15px] text-lg text-neutral-400"
                style={{ fontFamily: "'Segoe UI', sans-serif" }}
              />
              <div className="w-[calc(50%-8px)] h-12 bg-white rounded-[10px] border border-black flex items-center overflow-hidden">
                <div className="w-[44px] h-12 bg-black/10 rounded-tl-[10px] rounded-bl-[10px] flex items-center justify-center gap-1 flex-shrink-0">
                  <img src={usFlag} alt="US" className="w-5 h-[11px]" style={{ boxShadow: "0px 0px 1px 0px rgba(136,136,136,1)" }} />
                  <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-neutral-600" />
                </div>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="flex-1 h-full px-[12px] text-lg text-neutral-400 border-none outline-none"
                  style={{ fontFamily: "'Segoe UI', sans-serif" }}
                />
              </div>
            </div>

            {/* Select Service */}
            <select
              className="w-full h-12 rounded-[10px] border border-black px-[16px] text-lg text-zinc-600 mb-[16px] bg-white appearance-none"
              style={{ fontFamily: "'Segoe UI', sans-serif" }}
            >
              <option>-- Select A Service --</option>
            </select>

            {/* City */}
            <input
              type="text"
              placeholder="Your City (optional)"
              className="w-full h-12 bg-white rounded-[10px] border border-black px-[15px] text-lg text-neutral-400 mb-[16px]"
              style={{ fontFamily: "'Segoe UI', sans-serif" }}
            />

            {/* Textarea */}
            <textarea
              placeholder="Tell us more about your project idea here"
              className="w-full h-28 bg-white rounded-[10px] border border-black px-[15px] py-[12px] text-lg text-neutral-400 mb-[16px] resize-none"
              style={{ fontFamily: "'Segoe UI', sans-serif" }}
            />

            {/* Submit button */}
            <button
              className="w-full h-14 text-lg font-bold text-neutral-50 uppercase tracking-wide"
              style={{ background: "var(--gradient-cta)", fontFamily: "'Inter', sans-serif" }}
            >
              GET FREE QUOTE
            </button>
          </div>

          {/* Review badges */}
          <div className="flex items-center gap-[10px] px-[24px] pb-[20px]">
            {/* Google */}
            <div className="flex items-center gap-[5px]">
              <img src={googleIcon} alt="Google" className="w-[40px] h-[40px] rounded-full" />
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-foreground" style={{ fontFamily: "'Liberation Sans', sans-serif" }}>5.0 </span>
                  <span className="text-sm font-bold text-yellow-400 tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>★★★★★</span>
                </div>
                <div className="text-[10px] text-foreground" style={{ fontFamily: "'Liberation Sans', sans-serif" }}>Based on 185 Reviews</div>
              </div>
            </div>

            {/* Facebook */}
            <div className="flex items-center gap-[5px]">
              <img src={facebookIcon} alt="Facebook" className="w-8 h-8 rounded-full" />
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-foreground" style={{ fontFamily: "'Liberation Sans', sans-serif" }}>5.0 </span>
                  <span className="text-sm font-bold text-yellow-400 tracking-widest" style={{ fontFamily: "'Inter', sans-serif" }}>★★★★★</span>
                </div>
                <div className="text-[10px] text-foreground" style={{ fontFamily: "'Liberation Sans', sans-serif" }}>Based on 24 Reviews</div>
              </div>
            </div>

            {/* BBB */}
            <div className="flex items-center gap-[5px]">
              <img src={accreditedIcon} alt="BBB" className="w-8 h-8 rounded-full" />
              <div>
                <div className="text-sm font-bold text-foreground" style={{ fontFamily: "'Liberation Sans', sans-serif" }}>Accredited</div>
                <div className="text-[10px] text-foreground" style={{ fontFamily: "'Liberation Sans', sans-serif" }}>A+ Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
