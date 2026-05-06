import quoteIcon from "@/assets/quote.png";

const testimonials = [
  {
    text: "If you want a perfect job this is your painter. Steven bid quickly, set timing and kept his promise. I used two colors and of course you're always concerned about lines separating colors. I'm telling you perfect not one crooked line. Amazing. Thank you to Steven and his crew.",
    name: "Deborah B.",
  },
  {
    text: "Wow! I cannot recommend this company enough! Not only were they super respectful and professional but they did a phenomenal job on both the interior and exterior of our home. I am very picky and they exceeded all my expectations! If you are starting a new home project, trust me these are the guys you want to make your home look beautiful!",
    name: "Emily B.",
  },
  {
    text: "We just had our house painted inside. It looks so good it's like walking into a new home. Stephen James Painting did an amazing job. I would recommend them to anyone. Great customer service and excellent work. I couldn't be happier.",
    name: "Debbie G.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="section-heading text-foreground text-center mb-16">
          WHAT OUR CUSTOMERS SAY
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center">
              <img src={quoteIcon} alt="Quote" className="w-6 h-auto mx-auto mb-6" />
              <p className="font-body text-base text-foreground/80 leading-6">{t.text}</p>
              <p className="font-body text-base font-semibold text-foreground mt-6">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
