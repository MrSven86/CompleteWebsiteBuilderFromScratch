import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Skyline Tower",
    desc: "A striking residential tower redefining the city skyline with modern luxury living.",
    image: project1,
  },
  {
    title: "Cultural Arts Centre",
    desc: "An architectural masterpiece showcasing contemporary art and cultural exhibitions.",
    image: project2,
  },
  {
    title: "Harbour District",
    desc: "A mixed-use urban development blending retail, dining, and residential spaces.",
    image: project3,
  },
];

const ProjectsGrid = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container">
        <p className="label-uppercase text-primary mb-4">Portfolio</p>
        <h2 className="heading-section text-3xl md:text-5xl text-foreground mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href="#"
              className="group relative overflow-hidden rounded-sm"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="heading-section text-xl text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
