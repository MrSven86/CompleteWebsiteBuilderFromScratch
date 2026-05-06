import houseSvg from "@/assets/house.svg";
import coreValuesSvg from "@/assets/core_values.svg";
import house2Svg from "@/assets/house2.svg";

const cards = [
  {
    icon: houseSvg,
    title: "Sustainability",
    desc: "Our comprehensive approach to sustainability relies on our people's innovation, creativity, and resourcefulness.",
    highlight: false,
  },
  {
    icon: coreValuesSvg,
    title: "Our Core Values",
    desc: "As a self-performing contractor, our trades are in-house, so we offer competitive rates, greater control, and an uncompromising commitment to safety, quality, and service.",
    highlight: true,
  },
  {
    icon: house2Svg,
    title: "Remodeling Experts",
    desc: "Including demolition, excavation, cast-in-place concrete, structural steel fabrication and erection, tenant improvement, and renewable resources.",
    highlight: false,
  },
];

const ValuesCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 shadow-2xl shadow-background/50">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`p-8 md:p-10 ${
            card.highlight
              ? "bg-primary text-primary-foreground"
              : "bg-card text-card-foreground"
          }`}
        >
          <img src={card.icon} alt={card.title} className="w-14 h-14 mb-6" />
          <h3 className="font-bold text-lg uppercase tracking-wide mb-3">{card.title}</h3>
          <p className={`text-sm leading-relaxed ${card.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ValuesCards;
