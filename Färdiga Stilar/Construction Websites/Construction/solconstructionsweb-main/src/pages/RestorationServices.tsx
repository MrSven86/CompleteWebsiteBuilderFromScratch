import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { EstimateSection } from "@/components/EstimateSection";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";
import { Flame, Droplets, CloudRain, Phone, CheckCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

import bannerRestoration from "@/assets/banner-restoration.jpg";
import drywallInterior from "@/assets/drywall-interior.jpg";
import internachiCertified from "@/assets/internachi-certified.png";

const restorationTypes = [
  {
    icon: Flame,
    title: "Fire Damage Restoration",
    description: "Fire damage goes beyond what's visible. Smoke penetrates into walls, ceilings, and HVAC systems. Water from fire suppression efforts creates secondary damage.",
    services: [
      "Emergency board-up and property stabilization",
      "Smoke and soot removal from surfaces and air systems",
      "Water extraction from fire suppression",
      "Structural assessment and repairs",
      "Complete reconstruction",
      "Insurance documentation and coordination",
    ],
  },
  {
    icon: Droplets,
    title: "Water Damage Restoration",
    description: "Water damage is time-critical. Within hours, water seeps into materials that weren't directly affected. Within days, mold growth can begin in hidden areas.",
    services: [
      "Emergency water extraction",
      "Structural drying with professional-grade equipment",
      "Moisture detection to identify hidden water",
      "Mold prevention and remediation",
      "Repair and reconstruction of damaged materials",
      "Insurance claim support",
    ],
  },
  {
    icon: CloudRain,
    title: "Storm Damage Restoration",
    description: "Storm damage can affect roofing, siding, windows, and structural elements. We respond quickly to prevent secondary damage from exposure.",
    services: [
      "Emergency tarping and board-up",
      "Roof and siding repairs",
      "Window and door replacement",
      "Structural damage assessment",
      "Water intrusion remediation",
      "Complete reconstruction services",
    ],
  },
];

const emergencyFeatures = [
  "Same-day response for all emergencies",
  "Available 24 hours a day, 7 days a week",
  "Immediate property stabilization",
  "Direct insurance company coordination",
  "Complete restoration from start to finish",
  "Single-point accountability throughout",
];

const RestorationServices = () => {
  return (
    <Layout>
      <PageHero
        preHeadline="Emergency Restoration Services"
        headline="24/7 Fire, Water & Storm Damage Restoration"
        subHeadline="Same-day emergency response. Complete restoration from stabilization through final reconstruction. One team, one call."
        backgroundImage={bannerRestoration}
        primaryCta={{ text: "Call (323) 422-6013", href: "tel:323-422-6013" }}
        secondaryCta={{ text: "Request Assessment", href: "/contact" }}
      />

      {/* Emergency CTA */}
      <section className="bg-destructive/10 border-y border-destructive/20 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-destructive/20 flex items-center justify-center">
                <Phone className="w-7 h-7 text-destructive" />
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">Property Emergency?</p>
                <p className="text-muted-foreground">Don't wait - every hour matters with water and fire damage.</p>
              </div>
            </div>
            <a 
              href="tel:323-422-6013" 
              className="inline-flex items-center gap-2 bg-destructive text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-destructive/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (323) 422-6013 Now
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={drywallInterior} 
              alt="Restoration work in progress" 
              className="rounded-xl shadow-card w-full aspect-[4/3] object-cover"
            />
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Complete Restoration Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Property damage from fire, water, or storms requires immediate action. The longer you wait, the worse the damage becomes - water spreads into walls and subfloors, mold begins growing within 24-48 hours, and fire damage continues to corrode materials even after flames are out.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              All American Building Services provides same-day emergency response and handles the complete restoration process from initial damage assessment through final reconstruction. Many restoration companies will clean up damage and then hand you off to a general contractor for repairs. We handle both phases, providing continuity and accountability from the moment you call until your property is returned to pre-loss condition - or better.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <img 
                src={internachiCertified} 
                alt="InterNACHI Certified" 
                className="h-16 w-auto"
              />
              <p className="text-sm text-muted-foreground">
                Certified Home Inspector for comprehensive damage assessment
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Restoration Types */}
      <Section variant="alt">
        <SectionHeader 
          title="Restoration Services We Provide" 
          subtitle="From emergency stabilization through complete reconstruction"
        />
        <div className="space-y-12">
          {restorationTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <motion.div 
                key={index}
                className="grid lg:grid-cols-2 gap-8 items-start bg-card rounded-xl p-8 shadow-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {type.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </div>
                <ul className="space-y-3">
                  {type.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Emergency Response */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            Available 24/7
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Emergency Response When You Need It Most
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We understand that property emergencies don't wait for business hours. That's why our team is available 24 hours a day, 7 days a week for fire, water, and storm damage emergencies. We offer same-day response times because we know that in restoration, every hour matters.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {emergencyFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 text-left bg-muted/50 rounded-lg px-4 py-3"
              >
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Recent Work Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="text-center mb-12 container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Restoration Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See examples of our restoration and reconstruction work.
          </p>
        </div>
        <div className="px-4">
          <ProjectSlideshow />
        </div>
      </section>

      <EstimateSection title="Need Emergency Restoration?" />
    </Layout>
  );
};

export default RestorationServices;
