import iconSquare from "@/assets/icon-square.svg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const projects = [project1, project2, project3, project4, project5, project6];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-center gap-3 mb-4 reveal ${isVisible ? 'visible' : ''}`}>
          <img src={iconSquare} alt="" className="h-10" />
        </div>
        <h2 className={`text-center text-brand-green-dark text-4xl md:text-5xl font-bold capitalize mb-12 reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
          Our Past Painting Projects in Atascadero,
          <br />
          CA
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((img, idx) => (
            <div 
              key={idx} 
              className={`aspect-square overflow-hidden rounded-sm group cursor-pointer reveal-scale ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${200 + idx * 100}ms` }}
            >
              <img
                src={img}
                alt={`Project ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className={`flex justify-center mt-10 reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '800ms' }}>
          <button className="bg-secondary text-accent-foreground px-8 py-3 font-black uppercase text-sm tracking-wide flex items-center gap-2 hover:opacity-90 hover:scale-105 transition-all duration-300">
            Explore Gallery
            <svg className="w-4 h-3" fill="currentColor" viewBox="0 0 16 12">
              <path d="M1 6h14M10 1l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
