import interiorImg from "@/assets/interior-painting.webp";
import exteriorImg from "@/assets/exterior-painting.webp";
import commercialImg from "@/assets/commercial-painting.webp";
import cabinetImg from "@/assets/cabinet-refinishing.webp";
import deckImg from "@/assets/deck-resurfacing.webp";
import fauxImg from "@/assets/faux-finishes.webp";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  imageLeft?: boolean;
  darkBg?: boolean;
}

const ServiceCard = ({ image, title, description, imageLeft = true, darkBg = false }: ServiceCardProps) => {
  const textColor = darkBg ? "text-primary-foreground" : "text-foreground";
  const descColor = darkBg ? "text-primary-foreground/90" : "text-brand-neutral";

  const imageBlock = (
    <div className="w-full lg:w-[467px] flex-shrink-0">
      <img src={image} alt={title} className="w-full h-[400px] object-cover rounded-md" />
    </div>
  );

  const textBlock = (
    <div className="flex-1 flex flex-col justify-center">
      <span className="service-badge w-fit">OUR SERVICES</span>
      <h3 className={`section-heading ${textColor} mt-4`}>{title}</h3>
      <p className={`font-body text-base leading-8 ${descColor} mt-6`}>{description}</p>
      <a href="#contact" className="btn-brand mt-8 w-fit">LEARN MORE</a>
    </div>
  );

  return (
    <div className={`flex flex-col ${imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center py-12`}>
      {imageBlock}
      {textBlock}
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services">
      {/* Dark services */}
      <div className="bg-brand-dark py-16">
        <div className="max-w-[1120px] mx-auto px-6 space-y-8">
          <ServiceCard
            image={interiorImg}
            title="Interior House Painting"
            description="Refresh your home's interior with our expert painting services. We offer color consultations, premium paint options, and flawless application to ensure every room looks stunning. Whether you want bold, modern tones or classic neutrals, we'll help create spaces you'll love."
            imageLeft={true}
            darkBg={true}
          />
          <ServiceCard
            image={exteriorImg}
            title="Exterior House Painting"
            description="Protect and beautify your home's exterior with our weather-resistant painting solutions. Our team takes care of every detail, from preparation to final touches, ensuring a durable and beautiful finish that stands up to the elements."
            imageLeft={false}
            darkBg={true}
          />
          <ServiceCard
            image={commercialImg}
            title="Commercial Painting"
            description="Elevate your business space with our professional commercial painting services. From offices to retail locations, we create welcoming environments that leave a lasting impression on your customers and clients."
            imageLeft={true}
            darkBg={true}
          />
        </div>
      </div>

      {/* Light services */}
      <div className="bg-background py-16">
        <div className="max-w-[1200px] mx-auto px-6 space-y-8">
          <ServiceCard
            image={cabinetImg}
            title="Cabinet Refinishing & Staining"
            description="Transform your kitchen or bathroom with our cabinet refinishing and staining services. We offer a variety of finishes to suit your style, giving your space a fresh, modern look without the need for a costly renovation."
            imageLeft={false}
            darkBg={false}
          />
          <ServiceCard
            image={deckImg}
            title="Deck Resurfacing & Waterproofing"
            description="Keep your deck looking great and protected from the elements with our expert resurfacing and waterproofing solutions. We restore and safeguard your outdoor spaces so you can enjoy them for years to come."
            imageLeft={true}
            darkBg={false}
          />
          <ServiceCard
            image={fauxImg}
            title="High-End Faux Finishes"
            description="Add elegance and sophistication to your home with our custom faux finishes. From Venetian plaster to textured walls, we create unique, high-end designs that reflect your personal style."
            imageLeft={false}
            darkBg={false}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
