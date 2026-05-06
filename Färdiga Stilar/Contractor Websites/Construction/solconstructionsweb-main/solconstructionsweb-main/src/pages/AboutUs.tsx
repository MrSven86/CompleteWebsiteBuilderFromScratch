import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { EstimateSection } from "@/components/EstimateSection";
import { Shield, Users, Award, MapPin, CheckCircle, FileCheck, Clock } from "lucide-react";

import bannerAbout from "@/assets/banner-about.png";
import commercialExterior from "@/assets/commercial-exterior.jpg";

const differentiators = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "17 Years in Business",
    description: "Serving Santa Clarita Valley and Southern California since 2008 with proven reliability.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "5 License Classifications",
    description: "General Building (B), Electrical (C-10), Plumbing (C-36), Landscaping (C-27), and Painting (C-33).",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "24/7 Emergency Response",
    description: "Same-day response for fire, water, and storm damage emergencies. Available around the clock.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Public Sector Experience",
    description: "Trusted by school districts and municipal agencies for commercial projects.",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Complete Project Management",
    description: "From assessment through completion - one team, one point of contact, one contractor.",
  },
];

const serviceAreas = [
  "Santa Clarita Valley (Valencia, Newhall, Saugus, Canyon Country)",
  "Los Angeles County",
  "Inland Empire / Temecula region",
  "Surrounding Southern California communities",
];

const AboutUs = () => {
  return (
    <Layout>
      <PageHero
        preHeadline=""
        headline="Full-Service Construction & Restoration Since 2008"
        subHeadline="All American Building Services is a licensed California general contractor with multi-trade capability to handle complete projects from assessment through completion."
        backgroundImage={bannerAbout}
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Our Approach</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We built this company on a straightforward premise: property owners shouldn't have to manage a different contractor for every trade involved in their project. That's why we pursued licenses in General Building (B), Electrical (C-10), Plumbing (C-36), Landscaping (C-27), and Painting (C-33).
              </p>
              <p>
                This multi-license capability means we can legally and professionally handle work across multiple trades under one management structure. For restoration work, we combine emergency response capability with full reconstruction services.
              </p>
              <p>
                Many restoration companies will clean up damage and then hand you off to a general contractor for repairs. We handle both phases, providing continuity and accountability from the moment you call until your property is returned to pre-loss condition - or better.
              </p>
            </div>
          </div>
          <div>
            <img
              src={commercialExterior}
              alt="All American Building Services work"
              className="rounded-xl shadow-elevated"
            />
          </div>
        </div>
      </Section>

      <Section variant="alt">
        <SectionHeader title="Our Team" />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            All American Building Services is led by Anthony Innabi, who serves as CEO and RMO (Responsible Managing Officer). Our team includes multiple project managers and an operations manager, giving us the depth to handle projects across Santa Clarita Valley, Los Angeles County, and the Inland Empire simultaneously. We're not a one-person operation where your project waits if the owner gets busy.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader title="What Sets Us Apart" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="alt">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <MapPin className="w-12 h-12 text-secondary mx-auto" />
          <h2 className="font-display text-3xl md:text-4xl font-bold">Serving Southern California</h2>
          <p className="text-lg text-muted-foreground">
            Based in Santa Clarita, we serve residential and commercial properties throughout Southern California. Our main office is in Santa Clarita with a second location in Temecula to serve the Inland Empire.
          </p>
          <div className="pt-4">
            <h3 className="font-display text-xl font-semibold mb-4">Primary Service Areas:</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <li key={index} className="flex items-center justify-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <EstimateSection title="Ready to Work with Us?" />
    </Layout>
  );
};

export default AboutUs;
