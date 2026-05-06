import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, TreeDeciduous, Hammer, Layers, Home, Grid3X3, Paintbrush } from "lucide-react";
import modernKitchen from "@/assets/modern-kitchen.jpg";
import serviceHardwood from "@/assets/service-hardwood.jpg";
import serviceRefinishing from "@/assets/service-refinishing.webp";
import serviceLaminate from "@/assets/service-laminate.jpg";
import serviceCarpet from "@/assets/service-carpet.jpg";
import serviceVinyl from "@/assets/service-vinyl.jpg";
import servicePainting from "@/assets/service-painting.jpg";

const Services = () => {
  const services = [
    {
      id: "hardwood",
      title: "Hardwood Floor Installation",
      description: "There's nothing quite like the warmth, elegance, and lasting value of real hardwood floors. We've been installing hardwood floors throughout the Antelope Valley since 2003.",
      details: [
        "Solid and engineered hardwood options",
        "Expert subfloor preparation",
        "Proper wood acclimation",
        "Precision installation with proper expansion gaps",
        "Professional transitions and trim work",
      ],
      icon: TreeDeciduous,
      image: serviceHardwood,
    },
    {
      id: "refinishing",
      title: "Floor Refinishing & Restoration",
      description: "If your hardwood floors have lost their luster, show scratches and wear, or just don't look as beautiful as they once did, refinishing can bring them back to life.",
      details: [
        "Multi-pass sanding with dust control",
        "Custom stain colors available",
        "Durable polyurethane finishes",
        "Historic floor restoration (we've restored 1950s floors)",
        "Water damage repair",
      ],
      icon: Hammer,
      image: serviceRefinishing,
    },
    {
      id: "laminate",
      title: "Laminate Flooring",
      description: "Laminate flooring offers an attractive, durable, and budget-friendly alternative to hardwood with high-definition imaging that replicates natural wood, stone, or tile.",
      details: [
        "Scratch and dent resistant",
        "Easy maintenance",
        "Proper underlayment installation",
        "Floating floor method",
        "We install customer-provided materials",
      ],
      icon: Layers,
      image: serviceLaminate,
    },
    {
      id: "carpet",
      title: "Carpet Installation",
      description: "Carpet remains one of the most popular flooring choices for bedrooms, family rooms, and any space where you want softness and warmth underfoot.",
      details: [
        "Old carpet removal and disposal",
        "Quality padding installation",
        "Proper stretching and seaming",
        "Professional finish throughout",
        "Work with any carpet retailer",
      ],
      icon: Home,
      image: serviceCarpet,
    },
    {
      id: "vinyl",
      title: "Vinyl Plank Flooring",
      description: "Luxury vinyl plank is waterproof, durable, comfortable underfoot, and available in styles that closely mimic natural hardwood. Ideal for kitchens, bathrooms, and rental properties.",
      details: [
        "100% waterproof",
        "Click-lock, glue-down, or loose-lay installation",
        "Proper subfloor preparation",
        "Ideal for high-moisture areas",
        "Great for rental properties",
      ],
      icon: Grid3X3,
      image: serviceVinyl,
    },
    {
      id: "painting",
      title: "Painting Services",
      description: "We hold a California C-33 Painting and Decorating license, allowing us to handle your painting needs alongside your flooring project for ultimate convenience.",
      details: [
        "Interior walls, ceilings, and trim",
        "Exterior siding, trim, and doors",
        "Proper surface preparation",
        "Quality paints for Antelope Valley conditions",
        "Combined flooring + painting packages",
      ],
      icon: Paintbrush,
      image: servicePainting,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${modernKitchen})` }}
        >
          <div className="absolute inset-0 bg-tertiary/70" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-background">
              Our Flooring & Painting Services
            </h1>
            <p className="text-background/90 text-lg max-w-3xl mx-auto">
              At Inter-Urban Flooring, we specialize in making your floors look beautiful and last for decades. From new installations to restoring the character of your existing hardwood, we bring craftsmanship and care to every project.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="bg-primary w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-text-medium mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-text-medium">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading">
                        Get Free Estimate
                      </Button>
                    </Link>
                  </div>
                  <Card className={`border-0 shadow-xl overflow-hidden ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <CardContent className="p-0">
                      {service.image ? (
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full aspect-video object-cover"
                        />
                      ) : (
                        <div className="aspect-video bg-muted flex items-center justify-center">
                          <service.icon className="h-24 w-24 text-primary/30" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us for a free, no-obligation estimate. We'll visit your home, discuss your options, and provide a detailed written quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-heading font-bold px-8 py-6">
                  Get Your Free Estimate
                </Button>
              </Link>
              <a href="tel:3236055582">
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-heading font-bold px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  (323) 605-5582
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
