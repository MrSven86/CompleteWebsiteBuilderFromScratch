import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const faqItems = [
  {
    question: "What is the cost of using Bear Valley Pro Painting services?",
    answer: "The cost depends on a variety of different factors that will be covered and analyzed in depth during the first steps of working with us! Average project costs can go from $5,000 to $50,000+. Bear Valley prides itself on taking on all projects regardless of the previous challenges.",
  },
  {
    question: "How does Bear Valley Pro Painting stand out from other contractors?",
    answer: "We combine decades of experience with premium materials and a dedicated team to deliver exceptional results every time.",
  },
  {
    question: "What types of projects are ideal for Bear Valley Pro Painting?",
    answer: "We handle residential, commercial, interior, exterior, cabinet painting, drywall repair, and fence painting throughout the Central Coast.",
  },
  {
    question: "Which regions are covered by Bear Valley Pro Painting?",
    answer: "We cover 50 miles around Pasadena, CA, including the entire Central Coast region.",
  },
  {
    question: "How can Bear Valley Pro Painting assist with my property upgrade?",
    answer: "Our team provides free estimates, expert consultations, and tailored solutions for your specific painting needs.",
  },
  {
    question: "Is a full exterior repaint worth it?",
    answer: "Absolutely! A quality exterior paint job not only beautifies your home but also protects it from weather and increases property value.",
  },
  {
    question: "How much is a full exterior repaint in 2026?",
    answer: "Prices vary based on home size, condition, and paint quality. Contact us for a free personalized estimate.",
  },
  {
    question: "What is the cheapest way to refresh your home's exterior?",
    answer: "A targeted touch-up can be cost-effective, but a full repaint offers the best long-term value and protection.",
  },
  {
    question: "How much should a painting project cost?",
    answer: "Costs depend on square footage, surface condition, and chosen materials. We provide transparent pricing with no hidden fees.",
  },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-3">
          {faqItems.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-lg overflow-hidden transition-colors duration-300 reveal ${isVisible ? 'visible' : ''} ${idx === openIdx ? "bg-primary" : "bg-muted"}`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              >
                <span
                  className={`text-xl md:text-2xl font-bold font-outfit transition-colors duration-300 ${
                    idx === openIdx ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 flex-shrink-0 transition-all duration-300 ${
                    idx === openIdx ? "text-primary-foreground rotate-180" : "text-foreground"
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-out ${
                  idx === openIdx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5">
                  <p className="text-primary-foreground/90 text-lg font-outfit leading-7 pl-10">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
