import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Are you experienced?", a: "Yes, we have over 30 years of experience in the coating and painting industry, serving clients throughout California." },
  { q: "Do you have a valid license?", a: "Yes, we hold California painting contractor license #1002116, ensuring all our work meets or exceeds state standards." },
  { q: "Do you do estimates?", a: "Yes, we provide free estimates. Contact us today and we will get back to you within 24 hours." },
  { q: "Are you experienced in any type of coating?", a: "Yes, we have 30 years of experience in all types of coatings including industrial, commercial, and residential applications." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-primary section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground uppercase tracking-tight text-center mb-2">
          FAQ
        </h2>
        <p className="text-primary-foreground/80 text-center mb-10">Frequently Asked Questions</p>
        <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-primary-foreground/10 border-primary-foreground/20 rounded-lg px-4">
              <AccordionTrigger className="text-primary-foreground text-sm font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-primary-foreground/80 text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
