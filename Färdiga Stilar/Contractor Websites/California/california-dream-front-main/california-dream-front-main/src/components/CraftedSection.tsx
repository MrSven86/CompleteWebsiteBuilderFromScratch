import iconSquare from "@/assets/icon-square.svg";
import carImg from "@/assets/car.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CraftedSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Image area with van */}
        <div className={`relative reveal-left ${isVisible ? 'visible' : ''}`}>
          <img src={carImg} alt="Bear Valley Pro Painting" className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-500" />
          <img src={iconSquare} alt="" className="absolute bottom-4 left-4 h-10" />
        </div>

        {/* Right - Text content */}
        <div className={`reveal-right ${isVisible ? 'visible' : ''}`}>
          <div className="mb-4">
            <img src={iconSquare} alt="" className="h-10 mb-4" />
          </div>
          <div className="border-l-4 border-secondary pl-4 mb-6">
            <h2 className="text-primary text-4xl md:text-5xl font-black capitalize leading-tight">
              Crafted with Care, Built on Trust
            </h2>
          </div>
          <p className="text-muted-foreground text-base leading-7 font-kanit mb-8">
            Our commitment to excellence and customer satisfaction drives every aspect of our work. 
            At Bear Valley Pro Painting Inc., we take the time to understand your preferences, style, 
            and functional needs, providing tailored solutions that align with your goals.
          </p>
          <a
            href="tel:6265362746"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-semibold hover:bg-primary-light hover:scale-105 transition-all duration-300"
          >
            Call us today
          </a>
        </div>
      </div>
    </section>
  );
};

export default CraftedSection;
