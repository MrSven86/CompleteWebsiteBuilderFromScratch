import { CheckCircle } from "lucide-react";
import whyHireImg from "@/assets/why-hire.jpg";

const reasons = [
  {
    title: "Licensed means verified expertise and legal compliance.",
    desc: "Our painting contractor license (#1002116) affirms our ability to perform painting and coating tasks that meet or exceed all state standards.",
  },
  {
    title: "Bonded means financial protection if something goes wrong.",
    desc: "If an issue occurs during a project, our bond ensures compensation, adding an extra layer of protection for your investment.",
  },
  {
    title: "Insured means you're not liable for accidents.",
    desc: "Our comprehensive insurance protects your property, covers worker injuries, and shields you from liability.",
  },
];

const WhyHireSection = () => {
  return (
    <section className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl mb-8 text-foreground">
            Why Hire a Licensed, Bonded, and Insured Painting Contractor?
          </h2>
          <div className="space-y-6">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">{r.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-block mt-8 bg-primary text-primary-foreground font-heading font-bold px-6 py-3 rounded hover:opacity-90 transition-opacity text-sm uppercase"
          >
            Request an Estimate
          </a>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src={whyHireImg} alt="Professional contractors at work" className="w-full h-80 object-cover" />
        </div>
      </div>
    </section>
  );
};

export default WhyHireSection;
