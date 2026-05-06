import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone, MapPin, Shield, Award, Star } from "lucide-react";
import hallwayStairs from "@/assets/hallway-stairs.jpg";

const About = () => {
  const serviceAreas = [
    "Lancaster",
    "Palmdale",
    "Quartz Hill",
    "Rosamond",
    "Littlerock",
    "Lake Los Angeles",
    "Acton",
    "Mojave",
    "California City",
    "Edwards AFB Area",
  ];

  const faqs = [
    {
      question: "How long have you been in business?",
      answer: "Inter-Urban Flooring has served the Lancaster and Antelope Valley area since 2003, over 22 years.",
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes. We hold California contractor license #982353 for both flooring (C-15) and painting (C-33). We carry a $15,000 surety bond and maintain required insurance.",
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes. Contact us to schedule a time for Carlos to visit your home and provide a detailed, written estimate at no cost or obligation.",
    },
    {
      question: "Can I provide my own flooring materials?",
      answer: "Absolutely. Many customers purchase their flooring from Costco, Home Depot, or other retailers and hire us for installation. We also work with suppliers if you'd like us to source materials.",
    },
    {
      question: "How long does a typical flooring project take?",
      answer: "It depends on the size and scope. A single room might take 1-2 days. A whole house could take a week or more. Carlos will provide a timeline estimate before work begins.",
    },
    {
      question: "Do you do repairs and refinishing, or only new installations?",
      answer: "We do both. Floor refinishing and repair is one of our specialties. We've restored hardwood floors dating back to the 1950s.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Visa, MasterCard, Zelle, and Venmo.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-tertiary text-tertiary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              About Inter-Urban Flooring
            </h1>
            <p className="text-tertiary-foreground/80 text-lg max-w-2xl mx-auto">
              A Family Business Serving Lancaster Since 2003
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-heading font-semibold uppercase tracking-wider text-sm mb-2">
                  OUR STORY
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Quality Flooring, Personal Service
                </h2>
                <p className="text-text-medium mb-4 leading-relaxed">
                  Inter-Urban Flooring was founded in 2003 by Carlos Tejax with a simple goal: provide quality flooring services at fair prices with honest, personal service. Over two decades later, that commitment hasn't changed.
                </p>
                <p className="text-text-medium mb-6 leading-relaxed">
                  We're still a small, owner-operated business where Carlos personally oversees every project. When you hire Inter-Urban Flooring, you're not passed off to a subcontractor or a revolving crew. You work directly with Carlos and his experienced team.
                </p>
                
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Why We Do What We Do</h3>
                <p className="text-text-medium mb-6 leading-relaxed">
                  We believe your home deserves beautiful floors installed by people who take pride in their craft. We've seen too many homeowners disappointed by contractors who cut corners, don't communicate, or disappear when problems arise. That's not us. We show up when we say we will. We communicate throughout the project. We clean up at the end of each day. And we stand behind our work.
                </p>
              </div>
              <div>
                <img
                  src={hallwayStairs}
                  alt="Beautiful hardwood flooring installation"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-16 bg-background-alt">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-heading font-semibold uppercase tracking-wider text-sm mb-2">
                OUR CREDENTIALS
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Licensed, Bonded & Trusted
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-lg mb-2">CA License #982353</h3>
                  <p className="text-text-medium text-sm">C-15 Flooring and Floor Covering<br />C-33 Painting and Decorating</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-lg mb-2">BuildZoom Score: 106</h3>
                  <p className="text-text-medium text-sm">Top 7% of 336,931 California Licensed Contractors</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-lg mb-2">5.0 Stars on Yelp</h3>
                  <p className="text-text-medium text-sm">44 Reviews<br />Best of HomeAdvisor 2015, 2016, 2017</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-heading font-semibold uppercase tracking-wider text-sm mb-2">
                  SERVICE AREAS
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Areas We Serve
                </h2>
                <p className="text-text-medium mb-6 leading-relaxed">
                  Inter-Urban Flooring proudly serves homeowners and businesses throughout the Antelope Valley and surrounding communities.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-text-medium">{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-text-lighter text-sm mt-6">
                  Not sure if we serve your area? Give us a call at (323) 605-5582.
                </p>
              </div>
              <Card className="bg-secondary text-secondary-foreground">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-bold mb-4">Contact Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <a href="tel:3236055582" className="hover:text-primary transition-colors">(323) 605-5582</a>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        43885 44th St W<br />
                        Lancaster, CA 93536
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-background-alt">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-heading font-semibold uppercase tracking-wider text-sm mb-2">
                FAQ
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{faq.question}</h3>
                    <p className="text-text-medium">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
              Contact us for a free estimate. We'll visit your home, discuss your options, and provide a detailed written quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-heading font-bold px-8 py-6">
                  Get Your Free Estimate
                </Button>
              </Link>
              <a href="tel:3236055582">
                <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary font-heading font-bold px-8 py-6">
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

export default About;
