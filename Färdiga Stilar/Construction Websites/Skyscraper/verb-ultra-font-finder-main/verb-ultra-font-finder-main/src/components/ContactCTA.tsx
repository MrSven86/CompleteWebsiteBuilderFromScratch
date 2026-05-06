const ContactCTA = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container text-center">
        <h2 className="heading-display text-3xl md:text-5xl lg:text-6xl text-foreground mb-8 max-w-3xl mx-auto">
          Great relationships start with the right questions
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-sm label-uppercase hover:bg-primary/90 transition-colors text-base"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;
