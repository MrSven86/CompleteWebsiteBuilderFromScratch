import service1 from "@/assets/service-interior.jpg";
import service2 from "@/assets/service-exterior.jpg";
import service3 from "@/assets/service-commercial.jpg";

const services = [
  {
    title: "Interior Painting",
    description: "Transform your living spaces with precision and care, delivering flawless finishes.",
    image: service1,
  },
  {
    title: "Exterior Painting",
    description: "Protect and beautify your home's exterior with durable, weather-resistant coatings.",
    image: service2,
  },
  {
    title: "Commercial Painting",
    description: "Professional painting solutions for businesses, completed on time and on budget.",
    image: service3,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 text-center leading-tight mb-12">
            Where We Provide Our
            <br />
            Painting Services
          </h2>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative h-[400px] rounded-2xl overflow-hidden group"
              >
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
