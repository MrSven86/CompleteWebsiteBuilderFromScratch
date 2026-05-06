import longBeachImage from "@/assets/long-beach.jpg";

const ServiceIntroSection = () => {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-2xl aspect-[4/3] overflow-hidden">
              <img src={longBeachImage} alt="Long Beach aerial view" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-xl -z-10 hidden lg:block" />
          </div>

          {/* Right - Content */}
          <div>
            <span className="font-general-sans font-medium text-sm lg:text-base text-gray-600 mb-3 lg:mb-4 block">
              Quality Painting Work
            </span>
            <h2 className="font-satoshi font-bold text-[28px] sm:text-[36px] lg:text-[48px] text-foreground leading-tight mb-4 lg:mb-6">
              Licensed Painting Contractor Serving Long Beach Since 2007
            </h2>
            <p className="font-inter text-sm lg:text-base text-muted-foreground leading-relaxed mb-6 lg:mb-8">
              Chameleon Painting and Decorating is a fully licensed California painting contractor based in Long Beach. We hold an active C-33 Painting and Decorating license and have served the local community since 2007. Our work meets California's strict contractor licensing requirements, including required bonding, insurance, and professional standards.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-6 lg:px-8 py-3 lg:py-4 font-satoshi font-bold text-sm rounded transition-colors">
              GET FREE ESTIMATE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntroSection;
