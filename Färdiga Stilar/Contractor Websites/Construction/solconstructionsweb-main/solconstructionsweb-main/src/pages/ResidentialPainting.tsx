import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { EstimateSection } from "@/components/EstimateSection";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";
import { MapPin, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

import bannerResidential from "@/assets/banner-residential.jpg";
import residentialExterior from "@/assets/residential-exterior.webp";
import interiorDesign from "@/assets/interior-design.jpg";
import internachiCertified from "@/assets/internachi-certified.png";

const residentialServices = [
  "Kitchen and bathroom remodeling",
  "Room additions",
  "Whole-home renovations",
  "Structural repairs",
  "Finish carpentry and detail work",
  "Custom cabinetry and built-ins",
  "Flooring installation",
  "Interior and exterior painting",
];

const renovationFeatures = [
  "Complete project management from design to completion",
  "Single-point accountability for all trades",
  "Detailed scope of work and transparent pricing",
  "Regular progress updates and communication",
  "Quality materials and skilled craftsmanship",
  "Clean work sites and respect for your living space",
  "Final walkthrough and satisfaction guarantee",
  "Warranty on all completed work",
];

const trustFeatures = [
  {
    title: "17 Years Experience",
    description: "Serving Santa Clarita Valley and Southern California since 2008 with proven track record of quality residential work.",
  },
  {
    title: "5 License Classifications",
    description: "General Building, Electrical, Plumbing, Landscaping, and Painting - one contractor for your entire project.",
  },
  {
    title: "Certified Home Inspector",
    description: "Additional expertise in identifying potential issues during property assessments for comprehensive project planning.",
  },
];

const ResidentialPainting = () => {
  return (
    <Layout>
      <PageHero
        preHeadline="Residential Construction Services"
        headline="Complete Home Construction & Renovation in Southern California"
        subHeadline="From kitchen remodels to whole-home renovations, we handle every aspect of residential construction with attention to detail and respect for your living space."
        backgroundImage={bannerResidential}
      />

      {/* Intro Section */}
      <Section className="overflow-visible">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1 relative pt-3 pl-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Decorative background shape */}
            <div className="absolute top-0 left-0 w-[92%] h-[92%] bg-secondary rounded-2xl" />
            <div className="overflow-hidden rounded-xl relative z-10">
              <motion.img
                src={residentialExterior} 
                alt="Residential construction project" 
                className="shadow-card w-full aspect-[4/3] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </motion.div>
          <motion.div 
            className="order-1 lg:order-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Residential Construction & Renovation
            </h1>
            <p className="text-lg font-medium text-secondary">
              Professional Home Building Services Across Southern California
            </p>
            <p className="text-muted-foreground leading-relaxed">
              All American Building Services provides complete residential construction services throughout Santa Clarita Valley, Los Angeles County, and the Inland Empire. We handle everything from single-room updates to whole-house renovations, always with proper planning, quality materials, and attention to detail. We work with homeowners to understand their vision and budget, then execute the project with clear communication throughout.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <section className="relative z-20 pb-16">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
            Why Homeowners Trust All American Building Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {trustFeatures.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-white/[0.97] rounded-xl p-8 shadow-lg text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <Section variant="alt">
        <SectionHeader title="Complete Residential Services" />
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="overflow-hidden rounded-xl">
              <motion.img 
                src={interiorDesign} 
                alt="Interior renovation" 
                className="shadow-card w-full aspect-video object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
            <h3 className="font-display text-2xl font-semibold">What We Build & Renovate</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {residentialServices.map((service, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            <h3 className="font-display text-2xl font-semibold">Our Renovation Process</h3>
            <ul className="space-y-3">
              {renovationFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 pt-4">
              <img 
                src={internachiCertified} 
                alt="InterNACHI Certified" 
                className="h-16 w-auto"
              />
              <p className="text-sm text-muted-foreground">
                Certified Home Inspector for comprehensive property assessments
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Service Area */}
      <Section>
        <motion.div 
          className="max-w-3xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <MapPin className="w-12 h-12 text-secondary mx-auto" />
          <h2 className="font-display text-3xl md:text-4xl font-bold">Serving Homeowners Throughout Southern California</h2>
          <p className="text-lg text-muted-foreground">
            All American Building Services serves residential properties across Santa Clarita Valley, Los Angeles County, and the Inland Empire including Temecula and surrounding communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
            <span className="px-4 py-2 bg-background-alt rounded-lg">Santa Clarita Valley</span>
            <span className="px-4 py-2 bg-background-alt rounded-lg">Los Angeles County</span>
            <span className="px-4 py-2 bg-background-alt rounded-lg">Temecula & Inland Empire</span>
            <span className="px-4 py-2 bg-background-alt rounded-lg">Surrounding Communities</span>
          </div>
        </motion.div>
      </Section>

      {/* Recent Work Gallery */}
      <section className="py-20">
        <div className="text-center mb-12 container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Residential Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See examples of our quality workmanship across residential properties.
          </p>
        </div>
        <div className="px-4">
          <ProjectSlideshow />
        </div>
      </section>

      <EstimateSection title="Ready to Start Your Home Project?" />
    </Layout>
  );
};

export default ResidentialPainting;
