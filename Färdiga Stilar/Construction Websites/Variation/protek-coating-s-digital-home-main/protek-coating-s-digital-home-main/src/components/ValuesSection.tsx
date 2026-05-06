import { Leaf, Heart, HardHat } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "As a company, we are with the environment when using our products, we use only green products.",
  },
  {
    icon: Heart,
    title: "Our Core Values",
    description: "As a leading company in our industry, we strive for excellence, competitiveness, people-first culture, and respect.",
  },
  {
    icon: HardHat,
    title: "Sandblasting Experts",
    description: "Safety is #1 priority. Trusted by some of the nation's leading general builders, we always deliver exceptional work.",
  },
];

const ValuesSection = () => {
  return (
    <section className="bg-primary py-12">
      <div className="max-w-5xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((v) => (
          <div key={v.title} className="flex flex-col items-center text-center text-primary-foreground">
            <div className="bg-background/20 rounded-full p-4 mb-4">
              <v.icon className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{v.title}</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">{v.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
