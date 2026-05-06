import { Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CTABanner = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-primary py-16" ref={ref}>
      <div className={`max-w-7xl mx-auto px-6 text-center reveal-scale ${isVisible ? 'visible' : ''}`}>
        <h2 className="text-primary-foreground text-3xl md:text-4xl font-extrabold mb-4">
          Ready to schedule your free estimate?
        </h2>
        <p className="text-primary-foreground text-xl md:text-2xl capitalize">
          Contact us{" "}
          <a href="#contact" className="underline bg-primary-light px-1 hover:bg-primary-dark transition-colors duration-300">here</a>
          {" "}or reach us at{" "}
          <a href="tel:8005253241" className="bg-primary-light px-1 font-semibold hover:bg-primary-dark transition-colors duration-300">(800) 525-3241</a>
          <Phone className="w-4 h-4 inline ml-1" />
        </p>
      </div>
    </section>
  );
};

export default CTABanner;
