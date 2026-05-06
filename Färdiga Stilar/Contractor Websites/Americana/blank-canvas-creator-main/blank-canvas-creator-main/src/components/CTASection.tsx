import { useState } from "react";
import ctaBg from "@/assets/cta-bg.png";
import verifiedBadge from "@/assets/verified-buildzoom-badge.svg";
import verifiedCustomer from "@/assets/verified-customer.svg";
import starGold from "@/assets/star-gold.svg";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative w-full min-h-[700px] md:min-h-[920px] overflow-hidden -mb-px">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={ctaBg}
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="https://mrsven.com/Videos/HEROVIDEOTRUEAMERICANmini.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-sky-900/80" />

      <div className="relative z-10 flex flex-col items-center justify-start pt-16 md:pt-[100px] px-4 sm:px-6 pb-16">
        <p
          className="text-primary text-center uppercase tracking-wider mb-[5px]"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "13.9px" }}
        >
          Get a FREE Estimate
        </p>
        <h2
          className="text-white text-2xl sm:text-3xl md:text-4xl font-normal leading-tight text-center mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ready for Expert Roofing? Contact True American Roofing Today
        </h2>
        <p
          className="text-zinc-100 text-sm sm:text-base font-normal leading-6 text-center max-w-[706px] mb-10 md:mb-[45px]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          When you choose True American Roofing, you're choosing verified quality and local accountability. You're choosing a top-rated contractor (BuildZoom score 105) who specializes in Spanish tile roofing. You're choosing 30 years of experience with 92 permitted projects. Contact us now for expert roofing that protects your home for decades.
        </p>

        {/* Form + Review layout */}
        <div className="relative w-full max-w-[1920px] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-0">
          {/* Form Card */}
          <div
            className="bg-white w-full max-w-[576px]"
            style={{
              padding: "clamp(24px, 5vw, 54px)",
              borderRadius: "20px",
              border: "4px solid hsl(var(--primary))",
            }}
          >
            {/* Step indicator */}
            <div className="flex items-center justify-center mb-10 md:mb-[60px]">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-primary text-base font-normal"
                style={{ border: "1px solid hsl(var(--primary))", fontFamily: "var(--font-heading)" }}
              >
                1
              </div>
              <div className="w-20 sm:w-44 h-px bg-stone-300" />
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-700 text-base font-normal"
                style={{ border: "1px solid hsl(215 14% 46%)", fontFamily: "var(--font-heading)" }}
              >
                2
              </div>
              <div className="w-20 sm:w-44 h-px bg-stone-300" />
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-700 text-base font-normal"
                style={{ border: "1px solid hsl(215 14% 46%)", fontFamily: "var(--font-heading)" }}
              >
                3
              </div>
            </div>

            <form onSubmit={handleNext}>
              <div className="mb-6">
                <label className="block text-neutral-500 text-xs font-normal mb-1" style={{ fontFamily: "var(--font-body)" }}>
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  required
                  className="w-full px-1 py-3 border-b border-stone-300 focus:outline-none focus:border-primary text-base"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>

              <div className="mb-6">
                <label className="block text-neutral-500 text-xs font-normal mb-1" style={{ fontFamily: "var(--font-body)" }}>
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full px-1 py-3 border-b border-stone-300 focus:outline-none focus:border-primary text-base"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>

              <div className="mb-8">
                <label className="block text-neutral-500 text-xs font-normal mb-1" style={{ fontFamily: "var(--font-body)" }}>
                  Phone Number <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-1 py-3 border-b border-stone-300 focus:outline-none focus:border-primary text-base"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 font-semibold hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Next
              </button>
            </form>
          </div>

          {/* Review Card - beside form on desktop, below on mobile */}
          <div className="lg:absolute lg:right-[100px] lg:top-0 w-full max-w-[340px]">
            <div className="flex items-start gap-3 mb-1">
              <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                A
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-white font-semibold text-base" style={{ fontFamily: "var(--font-heading)" }}>
                    Chase Q.
                  </span>
                  <img src={verifiedCustomer} alt="" className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-base" style={{ fontFamily: "var(--font-heading)" }}>
                    5.0
                  </span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={starGold} alt="" className="w-[18px] h-[18px]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-white text-sm font-normal leading-relaxed mt-3 mb-4" style={{ fontFamily: "var(--font-body)" }}>
              This buisness was fantastic! I loved doing roofs and
              would give this job a 10/10 experience! Chase Quaves
            </p>

            <img src={verifiedBadge} alt="Verified Buildzoom review" className="h-[26px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
