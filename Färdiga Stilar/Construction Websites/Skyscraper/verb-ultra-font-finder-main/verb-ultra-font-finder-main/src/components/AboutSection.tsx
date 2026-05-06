import aboutImg from "@/assets/about-team.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container">
        <p className="label-uppercase text-primary mb-4">About</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-section text-3xl md:text-5xl text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are a professionally managed walls and ceilings contractor with operations spanning the West Coast. As a full-service contractor, we specialize in metal framing, drywall, finishing, insulation, acoustical ceilings, and various specialties.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We pride ourselves on providing excellent workmanship and service with competitive pricing. Our reputation for working closely with owners and other contractors is well recognized throughout the industry.
            </p>
            <a
              href="#"
              className="label-uppercase text-primary hover:text-foreground transition-colors"
            >
              Learn More →
            </a>
          </div>

          <div className="relative overflow-hidden rounded-sm">
            <img
              src={aboutImg}
              alt="Construction team on site"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
