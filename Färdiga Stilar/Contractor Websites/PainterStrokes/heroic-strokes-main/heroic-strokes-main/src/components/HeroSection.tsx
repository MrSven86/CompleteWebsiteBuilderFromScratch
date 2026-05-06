import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[950px]">
      <img
        src={heroBg}
        alt="Professional painters at work"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-dark/70" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pb-32">
        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl leading-[1] text-primary-foreground [text-shadow:_0px_0px_15px_rgb(0_0_0_/_0.40)] max-w-5xl">
          Elevating Spaces with<br />Premium Painting Solutions
        </h1>
        <p className="mt-6 font-body text-lg md:text-xl lg:text-2xl text-primary-foreground uppercase leading-8 [text-shadow:_0px_0px_15px_rgb(0_0_0_/_0.40)] max-w-4xl">
          Delivering exceptional craftsmanship, personalized service, and stunning
          results to homes and businesses across the Central Coast since 2006
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="btn-brand">GET FREE QUOTE</a>
          <a href="#services" className="btn-brand-outline">VIEW SERVICES</a>
        </div>
      </div>
      {/* Brush stroke overlapping bottom of hero */}
      <div className="absolute bottom-0 left-0 w-full z-20 translate-y-[30%]">
        <img
          src="/images/brush-stroke.svg"
          alt=""
          className="w-full h-auto"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
