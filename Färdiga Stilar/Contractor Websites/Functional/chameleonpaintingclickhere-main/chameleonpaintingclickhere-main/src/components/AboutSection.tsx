import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-van.png";

const AboutSection = () => {
  return (
    <section className="py-12 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img 
              src={aboutImage} 
              alt="Company van" 
              className="w-full max-w-[400px] lg:max-w-[500px] h-auto object-contain"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-secondary"></div>
              <span className="font-satoshi font-bold text-secondary text-base lg:text-lg">About Chameleon Painting</span>
              <span className="text-2xl">🖌️</span>
            </div>

            <h2 className="font-satoshi font-bold text-[28px] sm:text-[36px] lg:text-[48px] text-secondary leading-tight mb-4 lg:mb-6">
              Established Long Beach Painting Contractor
            </h2>

            <p className="font-satoshi text-sm lg:text-base text-gray-700 leading-relaxed mb-6 lg:mb-8">
              Chameleon Painting and Decorating has maintained an active California contractor's license since 2007, serving residential and commercial clients throughout Long Beach and surrounding areas. As a locally based painting contractor, we meet California's licensing requirements including demonstrated experience, professional examination, required bonding and insurance, and CSLB oversight. Our C-33 Painting and Decorating license allows us to provide professional painting and surface preparation services for your property.
            </p>

            <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 lg:px-8 py-3 lg:py-4 font-satoshi font-bold text-sm lg:text-base rounded transition-colors">
              <ArrowRight size={18} />
              CONTACT US TODAY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
