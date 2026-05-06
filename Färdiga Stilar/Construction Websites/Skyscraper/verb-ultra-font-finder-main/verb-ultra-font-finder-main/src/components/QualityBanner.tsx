const QualityBanner = () => {
  return (
    <section className="section-darker py-20 md:py-28">
      <div className="container">
        <h2 className="heading-display text-3xl md:text-5xl lg:text-6xl text-foreground text-center max-w-4xl mx-auto">
          A quality team, delivering quality projects.
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
          <a
            href="#projects"
            className="group text-center md:text-left highlight-left pl-6"
          >
            <h4 className="label-uppercase text-foreground mb-2">Portfolio</h4>
            <p className="text-sm text-muted-foreground">Browse our award-winning projects with renowned developers.</p>
            <span className="label-uppercase text-primary mt-3 inline-block group-hover:text-foreground transition-colors">View All Projects →</span>
          </a>
          <a
            href="#services"
            className="group text-center md:text-left highlight-left pl-6"
          >
            <h4 className="label-uppercase text-foreground mb-2">Services</h4>
            <p className="text-sm text-muted-foreground">Full service wall and ceiling for commercial and residential.</p>
            <span className="label-uppercase text-primary mt-3 inline-block group-hover:text-foreground transition-colors">View All Services →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default QualityBanner;
