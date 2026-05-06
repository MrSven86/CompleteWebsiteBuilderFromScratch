import heroImage from "@/assets/hero-contractor.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex items-center px-4">
        <div className="max-w-xl">
          <h1 className="font-satoshi font-bold text-[60px] text-white mb-6 leading-tight">
            Painting Built to Last
          </h1>
          <p className="font-inter font-normal text-lg text-white/90 mb-8 leading-relaxed">
            From colors, repairs, and finishes and restorations, we bring the
            experience to make your home as beautiful as you intended with a
            lasting finish you'll love for years.
          </p>
          <button className="btn-secondary px-8 py-4 font-satoshi font-bold text-base rounded">
            Request Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
