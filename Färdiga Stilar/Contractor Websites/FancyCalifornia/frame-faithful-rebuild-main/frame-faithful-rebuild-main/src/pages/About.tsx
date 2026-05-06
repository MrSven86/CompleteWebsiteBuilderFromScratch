import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle, Shield, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import workersImg from "@/assets/workers.png";
import heroBg from "@/assets/hero-bg.png";

const stats = [
  { value: "50+", label: "Years in Business" },
  { value: "1000+", label: "Projects Completed" },
  { value: "4.9", label: "Star Rating" },
  { value: "200+", label: "Reviews" },
];

const differentiators = [
  {
    icon: Shield,
    title: "Owner On Every Estimate",
    description:
      "Chuck personally meets with you to discuss your project. You're not handed off to a salesperson—you talk directly to the person responsible for the work.",
  },
  {
    icon: Users,
    title: "Same Crew, Start to Finish",
    description:
      "The crew that starts your job finishes it. We don't shuffle workers around. You'll know who's in your home, and they'll know your project.",
  },
  {
    icon: Award,
    title: "We Stand Behind Our Work",
    description:
      "If something's not right, we fix it. Period. We're not happy until you're happy with the finished result.",
  },
];

const credentials = [
  { label: "CA License #123456" },
  { label: "Fully Insured" },
  { label: "Workers' Comp" },
  { label: "Local to Santa Monica" },
];

const serviceAreas = [
  "Santa Monica",
  "Pacific Palisades",
  "Brentwood",
  "Venice",
  "Mar Vista",
  "Culver City",
];

const About = () => {
  const { isScrolled } = useScrollPosition();
  const heroAnimation = useScrollAnimation({ threshold: 0.1 });
  const ownerAnimation = useScrollAnimation({ threshold: 0.1 });
  const differentiatorAnimation = useScrollAnimation({ threshold: 0.1 });
  const credentialsAnimation = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      <TopBar hidden={isScrolled} />
      <Navbar isScrolled={isScrolled} />
      {isScrolled && <div className="h-24" />}

      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[480px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
        </div>

        <div className="relative container mx-auto px-4 py-20 md:py-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-8">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">About Us</span>
          </nav>

          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
              About Parrot Painting
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">
              Since 1973, Parrot Painting has been the trusted choice for property owners throughout Santa Monica and greater Los Angeles. We're a local, family-run business that treats every project like it's our own.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full uppercase font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get a Free Estimate
              </Button>
              <a
                href="tel:3103977294"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-white text-white font-semibold uppercase tracking-wide hover:bg-white hover:text-secondary transition-all duration-300"
              >
                Call (310) 397-7294
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        ref={heroAnimation.ref}
        className="bg-secondary py-8"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  heroAnimation.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="font-display text-3xl md:text-4xl text-white font-bold">
                  {stat.value}
                </p>
                <p className="text-white/80 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Owner Section */}
      <section
        ref={ownerAnimation.ref}
        className="py-20 lg:py-28 bg-background overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div
              className={`relative transition-all duration-700 ease-out pt-5 pr-5 md:pt-6 md:pr-6 ${
                ownerAnimation.isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="absolute top-0 right-0 w-[90%] h-[90%] border-[10px] md:border-[12px] border-primary rounded-xl z-0" />
              <div className="relative overflow-hidden rounded-xl group z-10">
                <img
                  src={workersImg}
                  alt="Chuck and the Parrot Painting team"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div
              className={`transition-all duration-700 ease-out delay-200 ${
                ownerAnimation.isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <span className="text-primary font-semibold tracking-widest text-sm uppercase">
                Meet the Owner
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] text-nav leading-tight mt-4 mb-2">
                Chuck Bergson
              </h2>
              <p className="text-muted-foreground font-medium mb-6">
                Founder & Lead Estimator
              </p>

              <div className="space-y-6 text-foreground/90 text-base md:text-lg leading-relaxed">
                <p>
                  Chuck started Parrot Painting in 1973 after years working for other painting contractors. He saw firsthand what frustrated property owners—crews that showed up late, sloppy work, poor communication—and decided to build a company that did things right.
                </p>
                <p>
                  Today, Chuck personally meets with every customer to discuss their project. He believes the best way to earn your trust is to show up, listen to what you need, and give you an honest assessment—not a sales pitch.
                </p>
              </div>

              <blockquote className="mt-8 pl-6 border-l-4 border-primary italic text-muted-foreground">
                "I tell people the same thing I'd tell my own family—what the job actually needs, what it will cost, and how long it will take. No surprises."
              </blockquote>

              <p className="mt-6 text-foreground/80">
                Chuck lives in Santa Monica with his family. When he's not painting, you'll find him coaching little league, fishing, or enjoying the local beaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section
        ref={differentiatorAnimation.ref}
        className="py-20 lg:py-24 bg-muted"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-widest text-sm uppercase">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-nav mt-4">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 ${
                  differentiatorAnimation.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-nav text-lg mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section - Reused from front page */}
      <ReviewsSection />

      {/* Licensed & Local Section */}
      <section
        ref={credentialsAnimation.ref}
        className="py-16 lg:py-20 bg-secondary"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">
            Licensed, Insured & Local
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            We're a fully licensed California painting contractor with liability insurance and workers' compensation coverage. When you hire us, you're protected.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            {credentials.map((cred, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 transition-all duration-500 ${
                  credentialsAnimation.isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-white font-medium">{cred.label}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/20 pt-8">
            <h3 className="text-white/80 text-sm uppercase tracking-widest mb-4">
              Proudly Serving
            </h3>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {serviceAreas.map((area, index) => (
                <span key={index} className="text-white">
                  • {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Reused from front page */}
      <ContactSection />

      <Footer />
    </div>
  );
};

export default About;
