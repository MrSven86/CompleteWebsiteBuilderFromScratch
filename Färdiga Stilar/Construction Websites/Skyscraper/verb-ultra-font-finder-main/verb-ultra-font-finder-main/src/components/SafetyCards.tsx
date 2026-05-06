import { Shield, Globe } from "lucide-react";

const SafetyCards = () => {
  return (
    <section className="section-darker py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-8 md:p-12 rounded-sm border border-border hover:border-primary/30 transition-colors">
            <Shield className="w-10 h-10 text-primary mb-6" />
            <h3 className="heading-section text-xl text-foreground mb-3">Safety & Core Values</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Safety is our number one priority. Our commitment to safe work practices protects our team and delivers peace of mind to our partners.
            </p>
            <a href="#" className="label-uppercase text-primary hover:text-foreground transition-colors">
              Learn More →
            </a>
          </div>
          <div className="bg-card p-8 md:p-12 rounded-sm border border-border hover:border-primary/30 transition-colors">
            <Globe className="w-10 h-10 text-primary mb-6" />
            <h3 className="heading-section text-xl text-foreground mb-3">US Operations</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Expanded operations into the United States, providing industry-leading wall and ceiling solutions across the Southern California region.
            </p>
            <a href="#" className="label-uppercase text-primary hover:text-foreground transition-colors">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyCards;
