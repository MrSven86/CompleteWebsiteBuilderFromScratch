import { useState } from "react";
import { ChevronRight, Check, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-contractor-2.jpg";
import iconGoogle from "@/assets/icons/icon-google-hd.svg";
import iconBBB from "@/assets/icons/icon-bbb-hd.svg";
import iconFacebook from "@/assets/icons/icon-facebook-hd.svg";
import iconStars from "@/assets/icons/icon-stars.png";
import googleIcon from "@/assets/icons/icon-google-review.png";
import starsIcon from "@/assets/icons/icon-5-stars.png";
import interiorPainting from "@/assets/services/cabinet-painting.jpg";
import exteriorPainting from "@/assets/services/commercial-painting.jpg";
import cabinetPainting from "@/assets/services/cabinet-painting.jpg";
import drywallService from "@/assets/services/drywall-installation.jpg";
import aboutPainter from "@/assets/about-painter.jpg";

const benefits = [
  {
    title: "Security & protection:",
    description: "Strong, fitted doors provide peace of mind against burglars and severe weather."
  },
  {
    title: "Energy efficiency:",
    description: "Modern entry doors and patio doors are built to reduce drafts and lower energy bills."
  },
  {
    title: "Curb appeal:",
    description: "From sleek modern designs to timeless classics, the right door makes your home stand out."
  },
  {
    title: "Resale value:",
    description: "Exterior door replacement consistently ranks among the top-performing projects for return on investment."
  }
];

const whyChooseUs = [
  "We only use the highest-quality products, including premium paint.",
  "Our team works quickly and efficiently to get the job done.",
  "Our low odor, quick-dry paints minimize your office's downtime.",
  "Our experienced painters are screened, trained, and insured.",
  "We are able to work around desirable office items and valuables.",
  "We keep our workspaces clean, utilizing drop cloths and sheeting.",
  "We offer two everyday rates and free firm quotes before we begin."
];

const reviews = [
  {
    name: "Diana Kane",
    initial: "D",
    rating: 5,
    text: "Jimmy and his team did an exemplary job on painting our home with professional care and attention. Top tier...",
    bgColor: "bg-orange-500"
  },
  {
    name: "Blanca Benavides",
    initial: "B",
    rating: 5,
    text: "If you are looking for a local, reasonable, and professional company, look no further. Jimmy's Custom Painting...",
    bgColor: "bg-purple-600"
  },
  {
    name: "Dan Nolen",
    initial: "D",
    rating: 5,
    text: "I recently hired Jimmy's Custom Painting company to paint the exterior of my house and I couldn't be more...",
    bgColor: "bg-green-600"
  }
];

const ResidentialPainting = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Sticky Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[500px] pt-[56px] lg:pt-[88px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/80 text-sm font-inter mb-6 animate-fade-in">
            <a href="/" className="hover:text-white transition-colors duration-300">Home</a>
            <ChevronRight size={14} />
            <a href="#" className="hover:text-white transition-colors duration-300">Services</a>
            <ChevronRight size={14} />
            <span className="text-white font-semibold">Residential Painting</span>
          </nav>

          <h1 className="font-satoshi font-bold text-[40px] lg:text-[56px] text-white leading-tight mb-6 max-w-2xl animate-fade-in" style={{ animationDelay: "100ms" }}>
            Residential Painting & Interior Services
          </h1>
          <p className="font-general-sans font-medium text-base text-white/80 mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "200ms" }}>
            Enjoy a more functional and beautiful home with our painting services for every style and need. We can help you maintain your home's interior and exterior with expert care.
          </p>
          <button className="bg-secondary hover:bg-secondary/90 hover:scale-105 text-white px-8 py-4 font-satoshi font-bold text-sm flex items-center gap-2 rounded transition-all duration-300 animate-fade-in" style={{ animationDelay: "300ms" }}>
            SERVICE DETAILS
          </button>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 lg:gap-16 flex-wrap">
            <AnimatedSection delay={0} className="flex flex-col items-center gap-1 hover:scale-110 transition-transform duration-300">
              <img src={iconBBB} alt="BBB" className="h-12 object-contain" />
              <img src={iconStars} alt="5 stars" className="h-4" />
            </AnimatedSection>
            <AnimatedSection delay={100} className="flex flex-col items-center gap-1 hover:scale-110 transition-transform duration-300">
              <img src={iconGoogle} alt="Google" className="h-12 object-contain" />
              <img src={iconStars} alt="5 stars" className="h-4" />
            </AnimatedSection>
            <AnimatedSection delay={200} className="flex flex-col items-center gap-1 hover:scale-110 transition-transform duration-300">
              <img src={iconFacebook} alt="Facebook" className="h-12 object-contain" />
              <img src={iconStars} alt="5 stars" className="h-4" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <AnimatedSection direction="left">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={aboutPainter} 
                  alt="Professional painter at work" 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="right" delay={200}>
              <p className="font-inter text-sm text-muted-foreground tracking-widest uppercase mb-3">
                — WHY CHOOSE PROFESSIONAL PAINTING?
              </p>
              <h2 className="font-satoshi font-bold text-[32px] lg:text-[40px] text-foreground mb-6">
                Curb Appeal & High Return on Investment
              </h2>
              <p className="font-general-sans text-muted-foreground mb-8">
                A new paint job is a smart investment in your home for a number of reasons.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${400 + index * 100}ms`, animationFillMode: "forwards" }}
                  >
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0 transition-transform duration-300 hover:scale-125" />
                    <div>
                      <span className="font-satoshi font-bold text-foreground">{benefit.title}</span>{" "}
                      <span className="font-general-sans text-muted-foreground">{benefit.description}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="font-general-sans text-muted-foreground mt-8">
                Whether you're dealing with a dingy entrance, faded siding, or simply want a fresh look, upgrading your home delivers immediate comfort and long-term value.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-satoshi font-bold text-[32px] lg:text-[40px] text-foreground text-center mb-12">
              OUR SERVICES
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Interior Painting */}
            <AnimatedSection delay={100} direction="left">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 shadow-lg">
                  <img 
                    src={interiorPainting} 
                    alt="Interior Painting" 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="font-satoshi font-bold text-xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">INTERIOR PAINTING</h3>
                <p className="font-general-sans text-muted-foreground text-sm mb-4">
                  Make your home your own! Interior painting adds value, beauty, and personality—it's a great way to create the ambiance you want inside your home. Our highly trained and experienced interior painting crews combine expertise-driven craftsmanship with a superior customer service.
                </p>
                <ul className="space-y-2 mt-4">
                  {["Wall & ceiling painting", "Trim, baseboard & crown molding", "Accent walls & color consulting", "Drywall repair & surface prep"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="font-general-sans text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Exterior Painting */}
            <AnimatedSection delay={200} direction="right">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 shadow-lg">
                  <img 
                    src={exteriorPainting} 
                    alt="Exterior Painting" 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="font-satoshi font-bold text-xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">EXTERIOR PAINTING</h3>
                <p className="font-general-sans text-muted-foreground text-sm mb-4">
                  Make your home your own! Exterior painting adds value, beauty, and personality—it's a great way to create the ambiance you want outside your home. Our highly trained and experienced exterior painting crews combine expertise-driven craftsmanship with a superior customer service.
                </p>
                <ul className="space-y-2 mt-4">
                  {["Full exterior house painting", "Deck, fence & patio staining", "Siding, shutters & door painting", "Power washing & surface preparation"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="font-general-sans text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* More Services - Hidden by default */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto overflow-hidden transition-all duration-700 ease-in-out ${
              showMore ? "max-h-[1200px] opacity-100 mt-8" : "max-h-0 opacity-0 mt-0"
            }`}
          >
            {/* Cabinet Painting */}
            <AnimatedSection delay={100} direction="left">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 shadow-lg">
                  <img
                    src={cabinetPainting}
                    alt="Cabinet Painting"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="font-satoshi font-bold text-xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">CABINET PAINTING</h3>
                <p className="font-general-sans text-muted-foreground text-sm mb-4">
                  Transform your kitchen without a full remodel! Cabinet painting is a cost-effective way to modernize your space and dramatically change the look and feel of your home.
                </p>
                <ul className="space-y-2 mt-4">
                  {["Kitchen & bathroom cabinets", "Custom color matching & finishes", "Sanding, priming & multi-coat application", "Hardware removal & reinstallation"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="font-general-sans text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Drywall Repair */}
            <AnimatedSection delay={200} direction="right">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 shadow-lg">
                  <img
                    src={drywallService}
                    alt="Drywall Repair & Installation"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="font-satoshi font-bold text-xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">DRYWALL REPAIR & INSTALLATION</h3>
                <p className="font-general-sans text-muted-foreground text-sm mb-4">
                  From small patches to full installations, our drywall experts ensure smooth, flawless walls ready for a perfect paint finish every time.
                </p>
                <ul className="space-y-2 mt-4">
                  {["Hole & crack patching", "Water damage repair", "Texture matching & skim coating", "New drywall installation"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="font-general-sans text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* More Services Button */}
          <AnimatedSection delay={300}>
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowMore(!showMore)}
                className="bg-primary hover:bg-primary/90 hover:scale-105 text-white px-8 py-3 rounded font-satoshi font-bold text-sm flex items-center gap-2 transition-all duration-300"
              >
                {showMore ? "SHOW LESS" : "MORE SERVICES"}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showMore ? "rotate-180" : ""}`} />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Satisfied Customers Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-satoshi font-bold text-[32px] lg:text-[40px] text-foreground text-center mb-2">
              Satisfied Customers
            </h2>
            <p className="font-general-sans text-muted-foreground text-center mb-8">
              What Our Customers Say
            </p>
          </AnimatedSection>

          {/* Google Rating Badge */}
          <AnimatedSection delay={100}>
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
                <img src={iconGoogle} alt="Google" className="h-8" />
                <div>
                  <p className="font-satoshi font-bold text-sm text-foreground">Excellent on Google</p>
                  <div className="flex items-center gap-2">
                    <span className="font-satoshi font-bold text-sm text-foreground">4.8</span>
                    <img src={starsIcon} alt="5 stars" className="h-4" />
                  </div>
                </div>
                <button className="bg-primary hover:bg-primary/90 hover:scale-105 text-white px-4 py-2 rounded text-sm font-satoshi font-bold transition-all duration-300">
                  Review on Google
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {reviews.map((review, index) => (
              <AnimatedSection key={index} delay={200 + index * 100}>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${review.bgColor} flex items-center justify-center text-white font-bold text-sm transition-transform duration-300 hover:scale-110`}>
                        {review.initial}
                      </div>
                      <div>
                        <h4 className="font-satoshi font-bold text-sm text-foreground flex items-center gap-1">
                          {review.name}
                          <span className="text-primary">✓</span>
                        </h4>
                        <img src={starsIcon} alt="5 stars" className="h-3" />
                      </div>
                    </div>
                    <img src={googleIcon} alt="Google" className="w-5 h-5" />
                  </div>
                  <p className="font-general-sans text-sm text-muted-foreground leading-relaxed mb-2">
                    {review.text}
                  </p>
                  <button className="font-satoshi text-sm text-primary hover:text-primary/80 transition-colors duration-300 hover:underline">
                    Read more
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Load More Button */}
          <AnimatedSection delay={500}>
            <div className="flex justify-center">
              <button className="bg-primary hover:bg-primary/90 hover:scale-105 text-white px-8 py-3 rounded font-satoshi font-bold text-sm transition-all duration-300">
                LOAD MORE
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-satoshi font-bold text-[32px] lg:text-[40px] text-foreground text-center mb-12">
              Why choose us
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Image */}
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={heroImage} 
                  alt="Professional painting team" 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="right" delay={200} className="order-1 lg:order-2">
              <p className="font-general-sans text-muted-foreground mb-6">
                Whether you're interested in revitalizing an outdated medical facility or you'd like to completely transform your dental office, you can rely on the experienced team at Fresh Coat Painters. We've developed techniques and practices that allow us to quickly and effectively paint your commercial spaces in as little time as possible.
              </p>

              <ul className="space-y-3">
                {whyChooseUs.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 group/item"
                  >
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-125" />
                    <span className="font-general-sans text-muted-foreground text-sm transition-colors duration-300 group-hover/item:text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Get A Free Quote Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="font-satoshi font-bold text-[32px] lg:text-[40px] text-foreground text-center mb-4">
              GET A FREE QUOTE
            </h2>
            <p className="font-general-sans text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Have questions, ideas, or just want to say hello? We'd love to hear from you! 
              Reach out via our contact form, email, or social media, and we'll get back to 
              you as soon as possible. Let's connect—we're here to help!
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Left Side - Image with Experience Badge */}
            <AnimatedSection direction="left" delay={100}>
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src={aboutPainter} 
                  alt="Professional painter" 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 bg-primary text-white px-6 py-4 rounded transform transition-transform duration-500 group-hover:scale-110">
                  <span className="font-satoshi font-bold text-3xl block">08</span>
                  <span className="font-general-sans text-sm">years of Experience!</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Side - Form */}
            <AnimatedSection direction="right" delay={200}>
              <form className="space-y-4">
                <div className="group">
                  <label className="font-satoshi font-bold text-sm text-foreground mb-2 block transition-colors duration-300 group-focus-within:text-primary">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-muted border border-border rounded px-4 py-3 text-sm font-inter placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="group">
                  <label className="font-satoshi font-bold text-sm text-foreground mb-2 block transition-colors duration-300 group-focus-within:text-primary">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-muted border border-border rounded px-4 py-3 text-sm font-inter placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="group">
                  <label className="font-satoshi font-bold text-sm text-foreground mb-2 block transition-colors duration-300 group-focus-within:text-primary">Phone</label>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-muted border border-border rounded px-4 py-3 text-sm font-inter placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="group">
                  <label className="font-satoshi font-bold text-sm text-foreground mb-2 block transition-colors duration-300 group-focus-within:text-primary">Address</label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full bg-muted border border-border rounded px-4 py-3 text-sm font-inter placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="group">
                  <label className="font-satoshi font-bold text-sm text-foreground mb-2 block transition-colors duration-300 group-focus-within:text-primary">Message</label>
                  <textarea
                    placeholder="Leave us a message"
                    rows={4}
                    className="w-full bg-muted border border-border rounded px-4 py-3 text-sm font-inter placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-secondary hover:bg-secondary/90 hover:scale-105 text-white font-satoshi font-bold px-8 py-4 rounded flex items-center gap-2 transition-all duration-300 group/btn"
                >
                  GET YOUR FREE QUOTE
                  <ChevronRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ResidentialPainting;
