const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] bg-brand-dark overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative z-10 max-w-[1170px] mx-auto h-full flex flex-col justify-center px-4">
        <h1 className="text-5xl font-bold font-rubik text-primary-foreground leading-tight mb-4">
          Professional Painting
          <br />
          Services You Can Trust
        </h1>
        <p className="text-lg font-rubik text-primary-foreground/80 max-w-xl mb-8">
          Residential & Commercial painting in the Bay Area. Quality
          craftsmanship with over 15 years of experience.
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-opensans font-semibold uppercase text-sm tracking-wide rounded hover:opacity-90 transition-opacity"
          >
            Get a Free Quote
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-opensans font-semibold uppercase text-sm tracking-wide rounded hover:bg-primary-foreground/10 transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
