import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { EstimateSection } from "@/components/EstimateSection";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";
import { Building2, Home, Factory } from "lucide-react";
import { motion } from "framer-motion";

import bannerCommercial from "@/assets/banner-commercial.jpg";
import commercialExterior from "@/assets/commercial-exterior.jpg";

const commercialServices = {
  tenantImprovements: [
    "Office build-outs",
    "Retail space construction",
    "Medical facility modifications",
    "Restaurant renovations",
    "Professional office updates",
    "Space reconfiguration",
  ],
  commercial: [
    "Office renovations",
    "Retail store build-outs",
    "Hospitality property updates",
    "Healthcare facility work",
    "Educational facilities",
    "Municipal buildings",
  ],
  industrial: [
    "Warehouse modifications",
    "Distribution center work",
    "Manufacturing facilities",
    "Storage facilities",
    "Industrial office spaces",
    "Loading dock construction",
  ],
};

const trustFeatures = [
  {
    title: "17 Years in Business",
    description: "Serving Santa Clarita Valley and Southern California since 2008 with proven commercial experience.",
  },
  {
    title: "5 License Classifications",
    description: "General Building, Electrical, Plumbing, Landscaping, Painting - complete projects under one contractor.",
  },
  {
    title: "Public Sector Experience",
    description: "Trusted by school districts and municipal agencies for commercial and institutional projects.",
  },
];

const serviceCards = [
  {
    icon: Building2,
    title: "Tenant Improvements",
    items: commercialServices.tenantImprovements,
  },
  {
    icon: Home,
    title: "Commercial Construction",
    items: commercialServices.commercial,
  },
  {
    icon: Factory,
    title: "Light Industrial",
    items: commercialServices.industrial,
  },
];

const CommercialPainting = () => {
  return (
    <Layout>
      <PageHero
        preHeadline="Commercial Construction Services"
        headline="Professional Commercial Construction in Southern California"
        subHeadline="From tenant improvements to complete building renovations, we deliver quality results that enhance property value with minimal disruption to your operations."
        backgroundImage={bannerCommercial}
        primaryCta={{ text: "Request Commercial Quote", href: "/contact" }}
      />

      {/* Intro Section */}
      <Section>
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="order-2 lg:order-1"
            variants={{
              hidden: { opacity: 0, x: -60, scale: 0.95 },
              visible: { 
                opacity: 1, 
                x: 0, 
                scale: 1,
                transition: { duration: 0.7, ease: "easeOut" as const }
              },
            }}
          >
            <img 
              src={commercialExterior} 
              alt="Commercial construction project" 
              className="rounded-xl shadow-card w-full aspect-[4/3] object-cover"
            />
          </motion.div>
          <motion.div 
            className="order-1 lg:order-2 space-y-6"
            variants={{
              hidden: { opacity: 0, x: 60, scale: 0.95 },
              visible: { 
                opacity: 1, 
                x: 0, 
                scale: 1,
                transition: { duration: 0.7, ease: "easeOut" as const, delay: 0.1 }
              },
            }}
          >
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Commercial Construction Services
            </h1>
            <p className="text-lg font-medium text-secondary">
              Professional Building Services for Property Managers, Business Owners & General Contractors
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're building out a new retail space, renovating an office, or updating a hospitality property, we bring the same level of professionalism to commercial projects that has earned us contracts with school districts and municipal agencies. We understand that commercial projects often need to work around business operations, and we plan our work to minimize disruption to your daily activities.
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* Why Choose Us */}
      <section className="relative z-20 pb-16">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
            Reliable Commercial Construction in Southern California
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {trustFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/[0.97] rounded-xl p-8 shadow-lg text-center"
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <Section>
        <SectionHeader title="Commercial Construction Expertise" />
        <div className="grid md:grid-cols-3 gap-8">
          {serviceCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">{card.title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {card.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Tenant Improvements Detail */}
      <Section variant="alt">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="Tenant Improvements & Build-Outs" 
            subtitle="Transform a generic space into one that fits your specific operational needs"
          />
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p>
              If you're a property owner or business leasing a commercial space, tenant improvements can transform a generic space into one that fits your specific operational needs. We've completed tenant improvement projects across multiple property types, from medical offices to retail stores.
            </p>
            <p>
              Our approach to tenant improvements starts with understanding how you'll use the space, then designing and building solutions that support your business operations. We handle all aspects including electrical, plumbing, and finishing work under one contract.
            </p>
          </div>
        </div>
      </Section>

      {/* Recent Work Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="text-center mb-12 container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Commercial Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See examples of our quality workmanship across commercial and industrial properties.
          </p>
        </div>
        <div className="px-4">
          <ProjectSlideshow />
        </div>
      </section>

      <EstimateSection title="Get a Quote for Your Commercial Property" />
    </Layout>
  );
};

export default CommercialPainting;
