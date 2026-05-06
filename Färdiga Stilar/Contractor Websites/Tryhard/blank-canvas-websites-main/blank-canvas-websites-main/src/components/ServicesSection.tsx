import squareBrush from "@/assets/square-brush.svg";
import serviceExterior from "@/assets/service-exterior.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceConcrete from "@/assets/service-concrete.jpg";
import serviceCabinet from "@/assets/service-cabinet.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import servicePowerwash from "@/assets/service-powerwash.jpg";

const services = [
  {
    image: serviceExterior,
    title: "Exterior Painting",
    description: "We believe that the smallest details matter, and we'll never rush through your exterior paint job. We paint siding, stucco, and other exterior cladding using the highest-quality products in the industry.",
  },
  {
    image: serviceInterior,
    title: "Interior Painting",
    description: "Breathe new life into your rooms with the help of our home painters! We can patch and repair drywall, apply a fresh coat of paint, or even install baseboard, trim, or crown molding. We offer expert color consultations to help you choose the perfect shade.",
  },
  {
    image: serviceConcrete,
    title: "Concrete Floor Coatings",
    description: "Looking for a flooring solution that's as durable and tough as it is beautiful? As the only Penntek-certified concrete coating company in the Central Valley, we can install a uniquely heavy-duty flooring system in as little as a day.",
  },
  {
    image: serviceCabinet,
    title: "Cabinet Painting",
    description: "From dismantling the cabinets and protecting hardware to painting every piece, back and front, with several coats to get a perfectly smooth finish, it's a popular service for Lancaster's professional painters. Our cabinet experts will deliver the results you deserve for your investment.",
  },
  {
    image: serviceCommercial,
    title: "Commercial Painting",
    description: "Not just house painters, we're also experienced commercial painters with the equipment and resources necessary to meet your business needs of any scope. We serve HOAs, restaurants, healthcare facilities, churches and more!",
  },
  {
    image: servicePowerwash,
    title: "Power Washing",
    description: "Pressure washing may seem like a DIY job, but if you aren't experienced with the equipment, it's surprisingly easy to damage your home's exterior surfaces. Leave the job to our in-house crew and rest easy knowing that your property will be sparkling clean and free from damage!",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-background py-[45px]">
      <div className="max-w-[1410px] mx-auto">
        {/* Header */}
        <div className="text-center mb-[8px]">
          <div className="flex items-center justify-center gap-2 mb-1">
            <img src={squareBrush} alt="" className="w-[32px] h-[36px]" />
            <span className="text-primary text-2xl font-bold uppercase leading-6">Our services</span>
          </div>
          <h2 className="text-[50px] font-normal text-foreground/80 leading-[56px]" style={{ fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif", letterSpacing: '0.5px' }}>
            Ready for great results?
          </h2>
          <p className="text-foreground text-lg leading-7 mt-1" style={{ fontFamily: "'Franklin Gothic Book', 'Calibri', sans-serif" }}>Here are our most popular services</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-3 gap-[10px]">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="pt-[15px] px-[13px] pb-[10px] text-center">
                <h3 className="text-2xl font-normal text-foreground mb-1" style={{ fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif" }}>
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-7" style={{ fontFamily: "'Franklin Gothic Book', 'Calibri', sans-serif" }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
