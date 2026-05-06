import beforeImg from "@/assets/project-before.jpg";
import afterImg from "@/assets/project-after.jpg";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-center mb-2">Projects</h2>
        <p className="text-muted-foreground text-center mb-10">
          We pride ourselves in completing a task on time, safely and under budget.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <img src={beforeImg} alt="Before coating" className="w-full h-72 object-cover" />
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground font-heading font-bold text-lg px-4 py-1 rounded">
              ANTES
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <img src={afterImg} alt="After coating" className="w-full h-72 object-cover" />
            <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground font-heading font-bold text-lg px-4 py-1 rounded">
              DESPUÉS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
