import { Star } from "lucide-react";
import iconSquare from "@/assets/icon-square.svg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reviews = [
  {
    name: "kangthe",
    time: "4 months ago",
    text: "10/24/2025 - another successful project done by Bear Valley painting on our exterior house painting. Excellent results, great…",
  },
  {
    name: "Teri Weitkum",
    time: "4 months ago",
    text: "The Bear Valley brothers showed up when they said they would. They provided a quote quickly. Chloe in the office was super helpful And stayed in…",
  },
  {
    name: "Janice Rimmer",
    time: "4 months ago",
    text: 'We couldn\'t be happier with Bear Valley Painting. Our "Green Team" was wonderful. On time, explained daily what their next step was, cleaned…',
  },
  {
    name: "Douglas Greiner",
    time: "5 months ago",
    text: "Quality of work was perfect and completed in a timely manner. The crew, Leif, Calvin and Eric, were helpful, professional and…",
  },
];

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6 reveal ${isVisible ? 'visible' : ''}`}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={iconSquare} alt="" className="h-10" />
            </div>
            <h2 className="text-brand-green-dark text-4xl md:text-5xl font-bold leading-tight">
              Quality Painting Company in
              <br />
              The Central Coast
            </h2>
          </div>
          <button className="bg-secondary text-accent-foreground px-6 py-3 font-black uppercase text-sm tracking-wide flex items-center gap-2 hover:opacity-90 hover:scale-105 transition-all duration-300 whitespace-nowrap">
            Read More 5 Star Reviews
            <svg className="w-4 h-3" fill="currentColor" viewBox="0 0 16 12">
              <path d="M1 6h14M10 1l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </button>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 -mx-2 px-2">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className={`min-w-[300px] max-w-[300px] bg-card rounded-xl shadow-md p-5 flex-shrink-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${200 + idx * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold font-poppins text-foreground text-sm">{review.name}</p>
                    <p className="text-muted-foreground text-xs font-poppins">{review.time}</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground text-sm font-poppins leading-5 mb-2">{review.text}</p>
              <span className="text-foreground/50 text-sm font-poppins">Read more</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
