import featuredImg from "@/assets/featured-project.jpg";

const FeaturedProject = () => {
  return (
    <section className="section-dark pt-32 md:pt-44 pb-20 md:pb-32">
      <div className="container">
        <p className="label-uppercase text-primary mb-4">Highlighted Project — The Grand Pinnacle</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-section text-3xl md:text-5xl text-foreground mb-6">
              Featuring world-class retail, dining, entertainment & 4,000+ new homes
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The Grand Pinnacle is transforming into an urban gathering place that's redefining how people experience modern city living. A landmark development capturing the pulse of contemporary urban culture.
            </p>

            <div className="flex gap-12 mb-8">
              <div>
                <span className="heading-display text-4xl md:text-5xl text-primary">3+</span>
                <p className="text-sm text-muted-foreground mt-1">Towers</p>
              </div>
              <div>
                <span className="heading-display text-4xl md:text-5xl text-primary">22+</span>
                <p className="text-sm text-muted-foreground mt-1">Acre Site</p>
              </div>
            </div>

            <a
              href="#"
              className="label-uppercase text-primary hover:text-foreground transition-colors inline-flex items-center gap-2"
            >
              Learn More →
            </a>
          </div>

          <div className="relative overflow-hidden rounded-sm">
            <img
              src={featuredImg}
              alt="Grand Pinnacle luxury lobby interior"
              className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
