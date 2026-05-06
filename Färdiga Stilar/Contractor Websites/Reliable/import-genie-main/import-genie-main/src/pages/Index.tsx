import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import AutoScrollGallery from "@/components/AutoScrollGallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone } from "lucide-react";
import heroImage from "@/assets/hero-flooring.jpg";
import staircaseImage from "@/assets/staircase.jpg";
import topRatedWhiteIcon from "@/assets/top-rated-white.svg";
import licensedIcon from "@/assets/licensed.svg";
import starsGroup from "@/assets/stars-group.svg";
import yelpIcon from "@/assets/yelp-icon.svg";

// Service images
import hardwoodInstallationImg from "@/assets/hardwood-installation.jpg";
import floorRefinishingImg from "@/assets/floor-refinishing.webp";
import laminateVinylImg from "@/assets/laminate-vinyl.jpg";
import paintingServicesImg from "@/assets/painting-services.jpg";

// Gallery images for carousel
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.webp";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";

const YELP_URL = "https://www.yelp.com/biz/inter-urban-flooring-lancaster-2";

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7];
const allGalleryImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7,
  gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16
];

const Index = () => {
  const services = [
    {
      title: "Hardwood Installation",
      description: "Solid and engineered hardwood installed with precision and care by master craftsmen.",
      image: hardwoodInstallationImg,
    },
    {
      title: "Floor Refinishing",
      description: "Bring back the beauty of your existing floors. We've restored floors as old as 1953.",
      image: floorRefinishingImg,
    },
    {
      title: "Laminate & Vinyl",
      description: "Affordable, durable, and beautiful options for any room in your home.",
      image: laminateVinylImg,
    },
    {
      title: "Painting Services",
      description: "Interior and exterior painting alongside your flooring project for convenience.",
      image: paintingServicesImg,
    },
  ];

  const testimonials = [
    {
      text: "Carlos and all of the guys at Inter-Urban Flooring are phenomenal! They go above and beyond, are extremely professional, thorough and kind.",
    },
    {
      text: "After a rough experience with a big-name contractor, working with Carlos was a breath of fresh air. He was honest, communicative, and his work was excellent.",
    },
    {
      text: "We first hired Carlos in 2014 to replace our carpets with new flooring, and his work held up beautifully. A decade later, we reached out again.",
    },
  ];

  const YellowStars = () => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-[#F9AE0E] text-[#F9AE0E]" viewBox="0 0 24 24">
          <path d="M12 2L14.9 8.6L22 9.5L17 14.3L18.2 21.4L12 18L5.8 21.4L7 14.3L2 9.5L9.1 8.6L12 2Z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative min-h-[85vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/[0.42]" />

          <div className="container mx-auto px-4 relative z-10 h-full flex flex-col items-center justify-center text-center py-20">
            <p className="text-white font-heading font-bold text-lg md:text-xl mb-4">
              Serving Lancaster & the Antelope Valley Since 2003
            </p>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white leading-tight max-w-5xl">
              Lancaster's Top-Rated<br />
              <span className="text-white">Hardwood Flooring Experts</span>
            </h1>

            <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-6">
              Professional floor installation and refinishing with over 22 years of experience and a perfect 5-star reputation.
            </p>

            {/* Stars Rating */}
            <div className="flex flex-col items-center gap-2 mb-6">
              <img src={starsGroup} alt="5 stars" className="h-6" />
              <p className="text-white italic font-body text-sm">5.0 Stars (45 Reviews)</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-bold px-8 py-6 text-lg">
                  Get Your Free Estimate
                </Button>
              </Link>
              <a href="tel:3236055582">
                <Button size="lg" variant="outline" className="border-white bg-white text-foreground hover:bg-white/90 font-heading font-bold px-8 py-6 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  (323) 605-5582
                </Button>
              </a>
            </div>

            {/* Trust Badges Below Buttons */}
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <img src={topRatedWhiteIcon} alt="Top Rated" className="h-8 w-8" />
                <span className="text-white font-heading text-sm">Top 7% of CA Contractors</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={licensedIcon} alt="Licensed" className="h-8 w-8" />
                <span className="text-white italic font-body text-sm">Licensed & Bonded</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-heading font-semibold uppercase tracking-wider text-sm mb-2">
                  Flooring Done Right
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  By People Who Care
                </h2>
                <p className="text-text-medium mb-6 leading-relaxed">
                  We're Carlos and the team at Inter-Urban Flooring. Since 2003, we've helped homeowners across Lancaster, Palmdale, and the Antelope Valley transform their homes with beautiful hardwood, laminate, carpet, and vinyl flooring.
                </p>
                <p className="text-text-medium mb-6 leading-relaxed">
                  We're a small, owner-operated business. That means when you call, you talk to Carlos. When work begins, Carlos is there. And when the job is done, we make sure you're completely satisfied.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {["22+ Years Experience", "Owner on Every Job", "Top 7% in California", "Perfect 5-Star Rating"].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-secondary" />
                      <span className="text-text-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/about">
                  <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
              <div>
                <ImageCarousel
                  images={galleryImages}
                  interval={4000}
                  alt="Flooring project"
                  className="rounded-lg shadow-xl w-full aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background-alt">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-heading font-semibold uppercase tracking-wider text-sm mb-2">
                OUR SERVICES
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Professional Flooring Solutions
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col">
                  {/* Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {/* Card Content */}
                  <div className="bg-card shadow-md flex-1 p-6">
                    <h3 className="font-heading text-xl font-bold mb-3 text-card-foreground uppercase">
                      {service.title}
                    </h3>
                    <p className="text-text-medium text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/services">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-bold px-10 py-6 text-base uppercase tracking-wide">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Yelp Style */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-heading font-semibold uppercase tracking-wider text-sm mb-2">
                CUSTOMER REVIEWS
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                What Our Clients Say
              </h2>
              {/* Yelp Badge */}
              <div className="flex items-center justify-center gap-3">
                <img src={yelpIcon} alt="Yelp" className="h-10 w-10" />
                <span className="text-text-medium">
                  45+ <a href={YELP_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Verified Yelp reviews</a>
                </span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border shadow-md hover:shadow-lg transition-shadow bg-card">
                  <CardContent className="p-6">
                    <YellowStars />
                    <p className="text-text-medium my-4 italic">"{testimonial.text}"</p>
                    <p className="text-sm text-text-lighter font-body">
                      — <a href={YELP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Verified Yelp Review</a>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <a href={YELP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading">
                  Read All Reviews
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Auto-Scroll Gallery */}
        <AutoScrollGallery images={allGalleryImages} autoScrollInterval={3000} />

        {/* Why Choose Us */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={staircaseImage}
                  alt="Beautiful staircase with hardwood flooring"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              <div>
                <p className="text-primary font-heading font-semibold uppercase tracking-wider text-sm mb-2">
                  WHY CHOOSE US
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Why Homeowners Trust Inter-Urban Flooring
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold mb-1">Over 22 Years of Experience</h4>
                      <p className="text-secondary-foreground/80">Serving the Antelope Valley since 2003, building a reputation one satisfied customer at a time.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold mb-1">Top 7% of California Contractors</h4>
                      <p className="text-secondary-foreground/80">BuildZoom score of 106 places us among the highest-rated of 336,931 licensed contractors.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold mb-1">Owner on Every Job</h4>
                      <p className="text-secondary-foreground/80">Carlos Tejax personally oversees every project, ensuring quality and accountability.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold mb-1">Licensed, Bonded & Insured</h4>
                      <p className="text-secondary-foreground/80">CA License #982353 with a $15,000 contractor's bond for your protection.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background-alt">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-text-medium text-lg mb-8 max-w-2xl mx-auto">
              Request your free estimate today. We'll get back to you within minutes. No obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-bold px-8 py-6">
                  Get Your Free Estimate
                </Button>
              </Link>
              <a href="tel:3236055582">
                <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background font-heading font-bold px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (323) 605-5582
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

export default Index;
