import aboutImg from "@/assets/about-img.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="section-heading mb-6">About Us</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We are a family owned and run business since 1991. We have been providing quality coating, painting, lining and sandblasting. Our clientele is mostly through referrals, and we are now extending our services to build our business.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We work out of Bakersfield, California and travel all throughout the state. Safety is our number one priority, and we specialize in speed and process. The Protek Coating experience is far superior to our competition. Give us a call today, let's talk about your next project.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src={aboutImg} alt="Industrial coating work" className="w-full h-80 object-cover" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
