import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeader } from "@/components/Section";
import { ServiceCard } from "@/components/Cards";
import { EstimateSection } from "@/components/EstimateSection";
import { ProjectSlideshow } from "@/components/ProjectSlideshow";

import bannerServices from "@/assets/banner-services.webp";
import commercialExterior from "@/assets/commercial-exterior.jpg";
import residentialExterior from "@/assets/residential-exterior.webp";
import paintingExterior from "@/assets/painting-exterior.jpg";
import drywallInterior from "@/assets/drywall-interior.jpg";
import electricalWork from "@/assets/electrical-work.jpg";
import flooringInterior from "@/assets/flooring-interior.webp";

const services = [
  {
    image: commercialExterior,
    title: "Commercial Construction",
    description: "Tenant improvements, office renovations, retail build-outs, and commercial property updates. We work around your business operations to minimize disruption.",
    href: "/commercial",
  },
  {
    image: residentialExterior,
    title: "Residential Construction",
    description: "Kitchen and bathroom remodels, room additions, whole-home renovations, and structural repairs with attention to detail and respect for your living space.",
    href: "/residential",
  },
  {
    image: drywallInterior,
    title: "Fire & Water Restoration",
    description: "Same-day emergency response for fire, water, and storm damage. Complete restoration from stabilization through final reconstruction.",
    href: "/restoration",
  },
  {
    image: electricalWork,
    title: "Electrical Services",
    description: "Licensed C-10 electrical work including panel upgrades, rewiring, lighting installation, and code compliance for residential and commercial properties.",
    href: "/contact",
  },
  {
    image: paintingExterior,
    title: "Painting & Decorating",
    description: "Interior and exterior painting for residential and commercial properties. Professional surface preparation and quality finishes that last.",
    href: "/contact",
  },
  {
    image: flooringInterior,
    title: "Plumbing Services",
    description: "Licensed C-36 plumbing including repairs, installations, water heater replacement, and complete bathroom/kitchen plumbing for new construction.",
    href: "/contact",
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHero
        preHeadline="Our Services"
        headline="Full-Service Construction & Restoration in Southern California"
        subHeadline="With licenses in General Building, Electrical, Plumbing, Landscaping, and Painting, we handle complete projects from assessment through completion."
        backgroundImage={bannerServices}
      />

      <Section>
        <SectionHeader
          title="Complete Building Solutions"
          subtitle="All American Building Services offers a full range of construction and restoration services for residential and commercial properties throughout Southern California."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <SectionHeader
          title="Our Recent Projects"
          subtitle="See examples of our quality workmanship across construction and restoration projects."
        />
        <ProjectSlideshow />
      </Section>

      <EstimateSection />
    </Layout>
  );
};

export default Services;
