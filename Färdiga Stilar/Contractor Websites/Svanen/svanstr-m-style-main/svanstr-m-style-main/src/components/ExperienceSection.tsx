import { Star, StarHalf } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="svan-section py-16">
      <div className="svan-container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold svan-text-body mb-4">
            Más de 20 años de experiencia en pintura
          </h2>
          <p className="text-lg svan-text-body opacity-80 mb-6">
            Acme Painting Company cuenta con más de 20 años de experiencia y
            realiza más de 3.000 proyectos de pintura por año. Ningún trabajo es
            demasiado pequeño o demasiado grande. Sin importar cuándo necesite
            ayuda, estamos aquí para usted.
          </p>
          <a href="#" className="svan-btn-outline">
            Contáctenos
          </a>
        </div>
        <div className="flex justify-center">
          <div className="border rounded-lg p-6 text-center max-w-xs">
            <p className="font-bold text-sm mb-2 svan-text-body">EXCELENTE</p>
            <div className="flex justify-center gap-0.5 text-yellow-500 mb-2">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <StarHalf className="w-5 h-5 fill-current" />
            </div>
            <p className="text-sm svan-text-body opacity-70 mb-3">
              Basado en <span className="underline">449 reseñas</span>
            </p>
            <p className="text-sm font-semibold svan-text-body">Google</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
