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

import residentialHero from "@/assets/residential-hero.jpg";
import residentialContent from "@/assets/residential-content.jpg";
import santaMonicaAerial from "@/assets/santa-monica-aerial.jpg";

const interiorServices = [
  "Walls and ceilings (any height)",
  "Doors and windows",
  "Mantels and bookshelves",
  "Baseboards and crown molding",
];

const interiorServicesRight = [
  "Chair rail molding",
  "Cabinets and wood shelves",
  "Custom color consultations",
];

const communitiesLeft = [
  "Santa Monica",
  "Pacific Palisades",
  "Brentwood",
  "Mar Vista",
  "Culver City",
];

const communitiesRight = [
  "Venice",
  "Playa del Rey",
  "Westchester",
  "Marina del Rey",
  "West Los Angeles",
];

const reviews = [
  {
    name: "Diana Katz",
    rating: 5,
    text: "Jimmy at Morales did an incredible painting. Very professional service with professional results and a low price. Thank you!",
  },
  {
    name: "Marco Benavides",
    rating: 5,
    text: "If you are looking for a local, trustworthy, and professional company look no further. Jimmy's Custom Painting.",
  },
  {
    name: "Dan Keller",
    rating: 5,
    text: "I recently hired Jimmy's Custom Painting company to paint the exterior of my house and couldn't be more thrilled.",
  },
];

const ResidentialPainting = () => {
  const { isScrolled } = useScrollPosition();
  const interiorAnimation = useScrollAnimation({ threshold: 0.1 });
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
          style={{ backgroundImage: `url(${residentialHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-semibold">Residential Painting</span>
          </nav>

          <div className="max-w-2xl">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Residential Painting Services
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-xl">
              Professional house painting for homeowners in Santa Monica and surrounding areas. 
              Interior and exterior. Licensed, insured, and done right.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full uppercase font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => document.getElementById('residential-contact')?.scrollIntoView({ behavior: 'smooth' })}
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


      {/* Interior Painting Section - Image Left, Content Right */}
      <section
        ref={interiorAnimation.ref}
        className={`py-16 md:py-24 transition-all duration-700 ${
          interiorAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <div className="relative">
              <img
                src={residentialContent}
                alt="Interior painting in progress"
                className="w-full rounded-lg shadow-xl"
              />
            </div>

            {/* Content */}
            <div className="lg:pt-4">
              <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3 block">
                Beautify The Interior Of Your Home
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Interior Painting
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Beautify the interior of your home with help from Santa Monica's best painting contractor. 
                At Parrot Painting, our experienced painters love to create a warm, welcoming space for 
                families to live and relax. We believe that choosing the right paint color combinations 
                and delivering a neat and clean paint job can turn any drab room into an indoor oasis.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                At Parrot Painting, we provide a full suite of painting services to customers in 
                Los Angeles County and surrounding areas. Our highly trained painters pride themselves 
                on their punctuality, work ethic, and cleanliness when completing a project.
              </p>

              <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
                Services We Offer
              </span>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                <ul className="space-y-2">
                  {interiorServices.map((service, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {interiorServicesRight.map((service, index) => (
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

      {/* Local Painting Company Section - Content Left, Image Right */}
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
                Your Trusted Neighborhood Painters
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Local Painting<br />Company
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Hire a local painting company that you can trust: Parrot Painting! Since 1973, our 
                boutique painting business has served the local community by delivering high-quality, 
                long-lasting interior and exterior paint jobs for residential properties.
              </p>

              <span className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
                Completed Projects For Following Communities
              </span>

              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <ul className="space-y-2">
                  {communitiesLeft.map((community, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{community}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {communitiesRight.map((community, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{community}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2">
              <img
                src={santaMonicaAerial}
                alt="Santa Monica aerial view"
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
            Satisfied Customers
          </h2>
          <p className="text-muted-foreground text-center mb-12">What Our Customers Say</p>

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
        id="residential-contact"
        ref={contactAnimation.ref}
        className={`py-16 md:py-24 bg-muted scroll-mt-20 transition-all duration-700 ${
          contactAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Get A Free Quote
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Have questions, ideas, or just want to say hello? We'd love to hear from you! 
            Reach out via our contact form, email, or social media, and we'll get back to 
            you as soon as possible. Let's connect – we're here to help!
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Image with experience badge */}
            <div className="relative">
              <img
                src={residentialHero}
                alt="Professional painters at work"
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
                <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                <Input placeholder="Name" className="bg-background" />
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
                <label className="block text-sm font-medium text-foreground mb-1">Address</label>
                <Input placeholder="Address" className="bg-background" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                <Textarea placeholder="How can we help you?" className="bg-background min-h-[100px]" />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 uppercase font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Get Your Free Quote
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResidentialPainting;
