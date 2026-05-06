import { Zap, Users, Award } from "lucide-react";
import ownerPhoto from "@/assets/owner-photo.jpg";
import iconSquare from "@/assets/icon-square.svg";
import topRatedYelp from "@/assets/top-rated-yelp.svg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: Zap,
    title: "Fast Quotes",
    desc: "Receive a confirmed quote within 48 business hours to keep your project moving quickly.",
  },
  {
    icon: Users,
    title: "Professional Team",
    desc: "Every painter is trained, punctual, and dedicated to precision on every surface.",
  },
  {
    icon: Award,
    title: "Top Quality Materials",
    desc: "We use premium paints for durable, vibrant finishes that stand up to time and weather.",
  },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 bg-muted" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        {/* Left - Owner photos */}
        <div className={`relative reveal-left ${isVisible ? 'visible' : ''}`}>
          <div className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <img src={ownerPhoto} alt="Owner" className="w-full h-[500px] object-cover" />
          </div>
          <div className="absolute bottom-8 left-8 bg-background/70 backdrop-blur-md rounded-full py-3 px-6 shadow-lg flex items-center gap-3">
            <span className="text-foreground text-xl font-medium">GUSTAVO ALVARADO</span>
            <span className="text-foreground text-base">- Owner of Bear Valley Pro Painting</span>
          </div>
          <div className="absolute bottom-[-20px] left-[-10px] bg-primary rounded-xl p-3 flex items-center gap-3 shadow-lg">
            <img src={topRatedYelp} alt="Top Rated Yelp" className="h-14" />
          </div>
        </div>

        {/* Right - Text content */}
        <div className={`reveal-right ${isVisible ? 'visible' : ''}`}>
          <div className="mb-4">
            <img src={iconSquare} alt="" className="h-10 mb-4" />
          </div>
          <h2 className="text-foreground text-5xl md:text-6xl font-outfit leading-tight mb-6">
            Built on Integrity.
            <br />
            Powered by People.
          </h2>
          <p className="text-muted-foreground text-xl font-kanit leading-9 mb-10">
            Determined to change that, Gustavo launched Bear Valley Pro Painting with a clear goal to 
            deliver top-tier painting solutions grounded in honesty, reliability, and customer care. 
            Today, he leads a dedicated team that takes pride in every project, big or small.
          </p>

          <div className="space-y-6 mb-10">
            {features.map((f, idx) => (
              <div 
                key={idx} 
                className={`flex items-start gap-4 reveal ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${400 + idx * 150}ms` }}
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-brand-green-dark font-bold text-lg">{f.title}</h4>
                  <p className="text-muted-foreground text-base">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="border-b border-border pb-6 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-primary font-bold text-xl uppercase">Our Vision</span>
            </div>
            <p className="text-foreground text-xl font-bold">
              Restoring the past by constructing the future.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-primary font-bold text-xl uppercase">Our Mission</span>
            </div>
            <p className="text-foreground text-xl font-bold leading-9">
              Driven by relentless innovation, Bear Valley Pro Painting provides exceptional 
              painting services for residential and commercial properties. We prioritize customer 
              satisfaction and foster a culture of growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
