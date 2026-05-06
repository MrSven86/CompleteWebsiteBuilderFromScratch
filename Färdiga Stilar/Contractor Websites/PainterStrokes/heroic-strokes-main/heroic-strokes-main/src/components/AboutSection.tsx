import aboutTeam from "@/assets/about-team.webp";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <h2 className="section-heading text-foreground">
              About Stephen James Painting
            </h2>
            <div className="mt-8 space-y-4 font-body text-base text-brand-neutral leading-8">
              <p>
                At Stephen James Painting, we specialize in transforming homes and businesses
                with professional interior and exterior painting services. Since 2006, we've built a
                reputation for delivering exceptional craftsmanship, attention to detail, and
                outstanding customer service. Whether it's a fresh coat to brighten up your living
                room or a full exterior repaint, we bring color, quality, and care to every project.
              </p>
              <p>
                Our team is dedicated to providing stress-free experiences with timely completion
                and guaranteed satisfaction. We believe in building lasting relationships with our
                clients by exceeding expectations and turning houses into homes and businesses
                into standout properties.
              </p>
            </div>
            <a href="#contact" className="btn-brand mt-8 inline-flex">LEARN MORE</a>
          </div>
          <div className="flex-shrink-0 w-full lg:w-[500px]">
            <img
              src={aboutTeam}
              alt="Our team of professional painters"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
