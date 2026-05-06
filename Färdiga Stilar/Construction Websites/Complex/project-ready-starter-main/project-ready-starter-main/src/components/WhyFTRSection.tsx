import kitchenImg from "@/assets/why-ftr-kitchen.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhyFTRSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div
        ref={ref}
        className={`max-w-[1400px] mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Left content */}
        <div className="flex-1 max-w-full lg:max-w-[540px]">
          <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: '#2AB585' }}>
            POR QUÉ DISANT
          </p>
          <h2 className="text-3xl lg:text-[42px] font-black leading-[1.1] text-gray-900 mb-3">
            Mejor que el resto.
          </h2>
          <div className="flex items-center gap-1 mb-5">
            <div className="w-6 h-[3px] bg-gray-900 rounded-full" />
            <div className="w-10 h-[3px] rounded-full" style={{ backgroundColor: '#2AB585' }} />
          </div>

          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Más que una constructora, Disant transforma espacios y maximiza el potencial de su propiedad.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8 shadow-sm">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">Casi 30 Años de Experiencia.</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tres décadas de experiencia nos respaldan. Nuestra trayectoria abarca proyectos completados en construcción residencial, remodelaciones y ampliaciones en CABA y Gran Buenos Aires.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">Base Sólida y Profesional.</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              La satisfacción del cliente es nuestra prioridad. Nuestro proceso basado en confianza y comunicación constante asegura que los proyectos lleguen a su finalización sin compromisos en la calidad.
            </p>
          </div>

          <div>
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">Confiabilidad en la Que Puede Contar.</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Nuestro equipo experimentado está comprometido con la confiabilidad. Operamos como empresa legalmente constituida y asegurada, brindándole tranquilidad en cada etapa del proyecto.
            </p>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={kitchenImg}
            className="w-full max-w-[560px] rounded-xl object-cover shadow-lg"
          >
            <source src="https://mrsven.com/Videos/ig%20video%2022.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default WhyFTRSection;
