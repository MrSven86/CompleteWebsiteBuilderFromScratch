import { Link } from "react-router-dom";
import { ChevronRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import commercialHero from "@/assets/commercial-hero.jpg";
import commercialInterior from "@/assets/commercial-interior.jpg";
import santaMonicaAerial from "@/assets/santa-monica-aerial.jpg";
import bbbBadge from "@/assets/bbb-badge.png";
import googleRating from "@/assets/google-rating.png";
import angiRating from "@/assets/angi-rating.png";

const trustBadges = [
  { src: bbbBadge, alt: "BBB Accredited Business" },
  { src: googleRating, alt: "Google 4.7 Rating" },
  { src: angiRating, alt: "Angi 4.9 Rating" },
];

const commercialServices = [
  "Office buildings and corporate spaces",
  "Retail stores and shopping centers",
  "Apartment complexes and HOAs",
  "Parking structures and garages",
];

const commercialServicesRight = [
  "Warehouses and industrial facilities",
  "Hotels and hospitality venues",
  "Medical and dental offices",
  "Restaurants and food service",
];

const projectTypesLeft = [
  "High-Rise Buildings",
  "Apartment Buildings",
  "Office Complexes",
  "Retail Centers",
  "Historical Restorations",
];

const projectTypesRight = [
  "Parking Structures",
  "Industrial Facilities",
  "Healthcare Facilities",
  "Educational Buildings",
  "Government Buildings",
];

const reviews = [
  {
    name: "Property Management Inc.",
    rating: 5,
    text: "Parrot Painting has been our go-to contractor for over 10 years. Their work on our apartment complexes is always exceptional.",
  },
  {
    name: "Santa Monica Office Park",
    rating: 5,
    text: "Professional, efficient, and minimal disruption to our tenants. The results speak for themselves. Highly recommended!",
  },
  {
    name: "Westside Retail Group",
    rating: 5,
    text: "They completed our retail renovation ahead of schedule and under budget. Outstanding communication throughout the project.",
  },
];

const CommercialPainting = () => {
  const { isScrolled } = useScrollPosition();
  const commercialAnimation = useScrollAnimation({ threshold: 0.1 });
  const localCompanyAnimation = useScrollAnimation({ threshold: 0.1 });
  const reviewsAnimation = useScrollAnimation({ threshold: 0.1 });
  const contactAnimation = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      <TopBar hidden={isScrolled} />
      <Navbar isScrolled={isScrolled} />
      {isScrolled && <div className="h-24" />}

      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[480px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${commercialHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">Commercial Painting</span>
          </nav>

          <div className="max-w-2xl">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Commercial Painting Services
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-xl">
              Professional commercial painting for businesses in Santa Monica and Los Angeles. 
              Offices, retail, industrial. Licensed, bonded, and insured.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full uppercase font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => document.getElementById('commercial-contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get a Free Estimate
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-foreground px-8 py-6 rounded-full uppercase font-semibold tracking-wide transition-all duration-300"
                asChild
              >
                <a href="tel:3103977294">Call (310) 397-7294</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-muted py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {trustBadges.map((badge, index) => (
              <img
                key={index}
                src={badge.src}
                alt={badge.alt}
                className="h-12 md:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Painting Section - Image Left, Content Right */}
      <section
        ref={commercialAnimation.ref}
        className={`py-16 md:py-24 transition-all duration-700 ${
          commercialAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <div className="relative">
              <img
                src={commercialInterior}
                alt="Commercial painting in progress"
                className="w-full rounded-lg shadow-xl"
              />
            </div>

            {/* Content */}
            <div className="lg:pt-4">
              <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3 block">
                Transform Your Commercial Space
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Commercial Painting
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Enhance your business image with professional commercial painting from Santa Monica's 
                most trusted contractor. At Parrot Painting, we understand that your commercial space 
                reflects your brand. Our experienced crews deliver exceptional results with minimal 
                disruption to your operations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With over 50 years of experience, Parrot Painting has completed projects for businesses 
                of all sizes throughout Los Angeles County. Our commercial painting teams are equipped 
                to handle projects from small office refreshes to large-scale industrial facilities.
              </p>

              <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
                Industries We Serve
              </span>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                <ul className="space-y-2">
                  {commercialServices.map((service, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {commercialServicesRight.map((service, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Commercial Experts Section - Content Left, Image Right */}
      <section
        ref={localCompanyAnimation.ref}
        className={`py-16 md:py-24 bg-muted transition-all duration-700 ${
          localCompanyAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Content */}
            <div className="lg:pt-4 order-2 lg:order-1">
              <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3 block">
                Santa Monica's Commercial Painting Experts
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Trusted Since<br />1973
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                For over five decades, Parrot Painting has been the commercial painting contractor 
                that property managers, building owners, and businesses trust. We're licensed, bonded, 
                and insured with active CA licenses. Our reputation for quality work, fair pricing, 
                and exceptional service has made us the go-to choice for commercial projects.
              </p>

              <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
                Types of Projects We Handle
              </span>

              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <ul className="space-y-2">
                  {projectTypesLeft.map((project, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{project}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {projectTypesRight.map((project, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2">
              <img
                src={santaMonicaAerial}
                alt="Santa Monica and Los Angeles area"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section
        ref={reviewsAnimation.ref}
        className={`py-16 md:py-24 transition-all duration-700 ${
          reviewsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Trusted by Businesses
          </h2>
          <p className="text-muted-foreground text-center mb-12">What Our Commercial Clients Say</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-muted p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-foreground">{review.name}</span>
                  <Check className="w-4 h-4 text-blue-500" />
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
            >
              Read More
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="commercial-contact"
        ref={contactAnimation.ref}
        className={`py-16 md:py-24 bg-muted scroll-mt-20 transition-all duration-700 ${
          contactAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Get A Free Commercial Quote
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Ready to transform your commercial space? Contact us for a free, no-obligation estimate. 
            We'll assess your project, discuss your timeline, and provide competitive pricing that 
            fits your budget.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Image with experience badge */}
            <div className="relative">
              <img
                src={commercialHero}
                alt="Commercial painters at work"
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute bottom-6 left-6 bg-primary text-primary-foreground px-6 py-4 rounded-lg">
                <span className="text-3xl font-bold">50+</span>
                <span className="block text-sm">years of Experience!</span>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4 bg-background p-8 rounded-lg shadow-lg">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Company Name</label>
                <Input placeholder="Company Name" className="bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Contact Name</label>
                <Input placeholder="Your Name" className="bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                <Input type="email" placeholder="Email" className="bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                <Input type="tel" placeholder="Phone" className="bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Project Details</label>
                <Textarea placeholder="Tell us about your commercial painting project..." className="bg-background min-h-[100px]" />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 uppercase font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Request Commercial Quote
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommercialPainting;
