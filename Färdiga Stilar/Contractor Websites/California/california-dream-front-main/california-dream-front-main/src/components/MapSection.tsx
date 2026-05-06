import sunsetBanner from "@/assets/sunset-banner.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const MapSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative" ref={ref}>
      {/* Green banner */}
      <div className={`bg-primary py-4 text-center rounded-t-full max-w-5xl mx-auto reveal-scale ${isVisible ? 'visible' : ''}`}>
        <h2 className="text-primary-foreground text-2xl md:text-3xl font-bold">
          We Cover 50 Miles Around Pasadena, CA
        </h2>
      </div>

      {/* Map */}
      <div className="bg-muted h-96 relative overflow-hidden">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211265.4522367795!2d-118.33261!3d34.14778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c2b2bde25735%3A0x5e99a0d4b62e5d32!2sPasadena%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* Sunset banner */}
      <div className="relative h-32 overflow-hidden">
        <img src={sunsetBanner} alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default MapSection;
