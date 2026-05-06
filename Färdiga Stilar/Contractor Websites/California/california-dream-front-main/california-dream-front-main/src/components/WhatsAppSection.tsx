import bigHeart from "@/assets/big-heart.svg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const WhatsAppSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-primary py-16 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 border-[3px] border-primary-foreground rounded-3xl m-8 pointer-events-none" />
      <div className={`max-w-4xl mx-auto px-6 text-center relative z-10 reveal-scale ${isVisible ? 'visible' : ''}`}>
        <h2 className="text-primary-foreground text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-8 leading-tight">
          Follow Us On Whatsapp Social Media Banner Label Design Free Vector
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="bg-primary-foreground rounded-full px-6 py-2 flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <span className="text-foreground font-semibold font-poppins">Available on</span>
          </div>
          <img src={bigHeart} alt="" className="w-12 h-12 opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
