import kitchenImg from "@/assets/gallery-kitchen.png";
import bedroomImg from "@/assets/gallery-bedroom.png";
import bathroomImg from "@/assets/gallery-bathroom.png";
import livingroomImg from "@/assets/gallery-livingroom.png";
import exteriorImg from "@/assets/gallery-exterior.png";
import shelvesImg from "@/assets/gallery-shelves.png";

const galleryItems = [
  { src: kitchenImg, label: "Cocina\nModerna" },
  { src: bedroomImg, label: "Dormitorio\nPrincipal" },
  { src: bathroomImg, label: "Baño" },
  { src: livingroomImg, label: "" },
  { src: exteriorImg, label: "" },
  { src: shelvesImg, label: "" },
];

const ProjectGallery = () => (
  <section className="bg-background py-20 px-8 md:px-16 lg:px-[258px]">
    <div className="max-w-[1404px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-4">
          <h2 className="text-foreground text-2xl font-gibson font-black uppercase tracking-wider">
            Galería de Proyectos
          </h2>
          <div className="hidden md:block flex-1 h-px bg-border w-32" />
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block h-px bg-border w-32" />
          <a href="#" className="text-destructive font-gibson font-medium text-sm hover:underline whitespace-nowrap">
            Ver nuestro Portafolio
          </a>
          <div className="hidden md:block h-px bg-border w-32" />
        </div>
      </div>

      {/* Vertical line */}
      <div className="w-px h-8 bg-foreground mx-auto mb-6 hidden md:block" />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        {galleryItems.map((item, i) => (
          <div key={i} className="relative rounded-lg overflow-hidden aspect-[4/3] group">
            <img
              src={item.src}
              alt={item.label || `Proyecto ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            {item.label && (
              <span className="absolute bottom-4 right-6 text-primary-foreground font-gibson font-bold text-lg text-right whitespace-pre-line leading-tight">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="hidden md:block h-px bg-border w-24" />
        <p className="text-foreground font-gibson font-bold text-base leading-relaxed max-w-lg">
          ¡Descubre el poder transformador de un trabajo profesional en los impresionantes
          resultados de antes y después de cada proyecto!
        </p>
        <a
          href="#gallery"
          className="bg-destructive text-primary-foreground font-gibson font-bold text-sm uppercase tracking-wider px-8 py-3 rounded hover:bg-destructive/90 transition-colors"
        >
          Ver Galería de Proyectos
        </a>
        <div className="hidden md:block h-px bg-border w-24" />
      </div>
    </div>
  </section>
);

export default ProjectGallery;
