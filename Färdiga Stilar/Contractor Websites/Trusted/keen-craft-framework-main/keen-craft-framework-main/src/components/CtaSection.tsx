import { useState } from "react";
import kitchenBg from "@/assets/kitchen-bg.jpg";
import chatIcon from "@/assets/chat-icon.svg";
import planIcon from "@/assets/plan-icon.svg";
import projectIcon from "@/assets/project-icon.svg";

const services = [
  "Interior Painting",
  "Exterior Painting",
  "Commercial Painting",
  "Cabinet Painting",
  "Deck & Fence Staining",
  "Pressure Washing",
];

const steps = [
  {
    icon: chatIcon,
    title: "Free Consultations",
    text: "Begin your journey to a transformed space with a no-cost consultation. Our experts will listen to your needs, evaluate your space, and discuss your vision to ensure we capture every detail of your project.",
  },
  {
    icon: planIcon,
    title: "Get Estimate Budget",
    text: "Receive a detailed and transparent estimate, so you know what to expect financially. We'll provide a comprehensive breakdown of costs, helping you make informed decisions without any surprises.",
  },
  {
    icon: projectIcon,
    title: "Project Production",
    text: "Watch as your vision comes to life through our meticulous project management. From initial planning to final touches, our team ensures a smooth and timely execution, keeping you informed every step of the way.",
  },
];

const CtaSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    service: "",
    city: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative w-full">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src={kitchenBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/60" />
      </div>

      <div className="relative max-w-[1300px] mx-auto px-4 py-16 lg:py-20 flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
        {/* Left – How it works */}
        <div className="flex-1 max-w-[550px]">
          <h2 className="font-rubik font-extrabold text-3xl md:text-4xl text-primary-foreground leading-tight mb-10">
            How it works
          </h2>

          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div key={step.title} className="flex items-start gap-5">
                <img
                  src={step.icon}
                  alt=""
                  className="w-12 h-12 flex-shrink-0"
                />
                <div>
                  <h3 className="font-rubik text-xl md:text-2xl text-primary-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="font-opensans text-sm text-primary-foreground/70 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – Form */}
        <div className="w-full lg:w-[580px] bg-card rounded-lg p-8 lg:p-10 flex-shrink-0">
          <p className="font-opensans text-base font-bold text-foreground leading-7 mb-6">
            Get a free, detailed estimate from Santa Monica's longest-serving
            commercial painting contractor. Licensed, bonded, and insured for
            your complete peace of mind.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full h-12 rounded-lg border border-foreground/20 bg-card px-4 font-opensans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />

            <div className="flex gap-3">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="flex-1 h-12 rounded-lg border border-foreground/20 bg-card px-4 font-opensans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <div className="flex-1 relative">
                <div className="absolute left-0 top-0 h-12 w-12 flex items-center justify-center bg-muted rounded-l-lg border border-foreground/20 border-r-0">
                  <span className="text-xs">🇺🇸</span>
                </div>
                <input
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="w-full h-12 rounded-lg border border-foreground/20 bg-card pl-14 pr-4 font-opensans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
            </div>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full h-12 rounded-lg border border-foreground/20 bg-card px-4 font-opensans text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring appearance-none"
            >
              <option value="">-- Select A Service --</option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Your City (optional)"
              className="w-full h-12 rounded-lg border border-foreground/20 bg-card px-4 font-opensans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your project idea here"
              rows={4}
              className="w-full rounded-lg border border-foreground/20 bg-card px-4 py-3 font-opensans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
            />

            <button
              type="submit"
              className="w-full h-14 rounded-lg bg-brand-orange font-opensans text-base font-bold text-primary-foreground uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              GET MY FREE ESTIMATE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
