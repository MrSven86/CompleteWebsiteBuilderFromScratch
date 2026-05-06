import cabinetPainting from "@/assets/cabinet-painting.png";
import cabinetPainting1 from "@/assets/cabinet-painting-1.png";
import project1 from "@/assets/project-1.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    image: cabinetPainting1,
    title: "Drywall Services",
    description: "Welcome to G&J QUALITY PAINTING INC, where we bring a splash of color and quality to every space we touch. With six years of dedicated service in Pasadena,",
  },
  {
    image: cabinetPainting,
    title: "Cabinet Painting",
    description: "Welcome to G&J QUALITY PAINTING INC, where we bring a splash of color and quality to every space we touch. With six years of dedicated service in Pasadena,",
  },
  {
    image: project1,
    title: "Cabinet Painting",
    description: "Welcome to G&J QUALITY PAINTING INC, where we bring a splash of color and quality to every space we touch. With six years of dedicated service in Pasadena,",
  },
];

const NeedHelpSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-primary relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-1/3 h-px bg-primary-foreground/30" />
      
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-primary-foreground text-4xl md:text-5xl font-extrabold text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          Need help with a project?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center text-center reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${200 + idx * 150}ms` }}
            >
              <div className="w-64 h-64 rounded-full border-4 border-brand-blue-dark overflow-hidden mb-6 hover:scale-105 transition-transform duration-500">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="bg-secondary text-accent-foreground px-6 py-2 font-bold text-xl font-kanit capitalize mb-4 -mt-10 relative z-10">
                {service.title}
              </div>
              <p className="text-primary-foreground text-base font-outfit leading-7 max-w-sm">
                {service.description}
              </p>
              <a href="#contact" className="mt-4 text-primary-foreground font-semibold uppercase text-sm flex items-center gap-2 hover:opacity-80 hover:translate-x-1 transition-all duration-300">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeedHelpSection;
