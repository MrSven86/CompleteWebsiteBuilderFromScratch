import { useState, useEffect, useCallback } from "react";
import steveImg from "@/assets/steve-seabolt.png";
import leslieImg from "@/assets/leslie-banks.png";
import bhargaviImg from "@/assets/bhargavi-rajesh.png";
import googleIcon from "@/assets/google-icon.svg";
import starIcon from "@/assets/star-icon.svg";
import acmeLogo from "@/assets/acmelogo.png";

const reviews = [
  {
    name: "Steve Seabolt",
    image: steveImg,
    initial: "",
    color: "",
    time: "6 months ago",
    text: "The quality of their work is excellent. The pricing is fair. They show up on time, communicate thoroughly and leave the site in great condition. I use them for all my painting needs.",
  },
  {
    name: "Leslie Banks",
    image: leslieImg,
    initial: "",
    color: "",
    time: "6 months ago",
    text: 'Acme Painting came highly recommended. The work that he and his crew did on my home is "fabulous." They were both professional and courteous throughout the entire process.',
  },
  {
    name: "Bhargavi Rajesh",
    image: bhargaviImg,
    initial: "",
    color: "",
    time: "6 months ago",
    text: "Acme Painting and his team did an excellent job for our 3-floor townhome twice. They are extremely professional and go the extra mile to take care of every detail.",
  },
  {
    name: "Pedro S",
    image: "",
    initial: "P",
    color: "bg-purple-500",
    time: "6 months ago",
    text: "Great customer service. Very attentive when it comes to the details. Will provide everything so the process will be fast and clean with great results.",
  },
  {
    name: "William Stamm",
    image: "",
    initial: "W",
    color: "bg-yellow-500",
    time: "6 months ago",
    text: "Acme's paint & Restoration is top notch service. Prompt and professional work. I needed some repairs on my house and he assessed the situation quickly.",
  },
];

const VISIBLE = 5;

const TestimonialsSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const next = useCallback(() =>
    setStartIndex((i) => (i + 1) % reviews.length), []);
  const prev = () =>
    setStartIndex((i) => (i - 1 + reviews.length) % reviews.length);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [next]);

  const visibleReviews = Array.from({ length: VISIBLE }, (_, i) => {
    const idx = (startIndex + i) % reviews.length;
    return reviews[idx];
  });

  return (
    <section className="w-full bg-background py-20">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-10 bg-border" />
          <p className="font-rubik text-sm text-muted-foreground tracking-wide">
            Testimonials
          </p>
          <div className="h-px w-10 bg-border" />
        </div>
        <h2 className="font-rubik font-bold text-4xl md:text-[42px] text-foreground text-center leading-tight mb-14">
          What Our Clients Say
          <br />
          About Acme Painting
        </h2>

        {/* Content row */}
        <div className="relative flex items-start gap-6">
          {/* Left panel – company info */}
          <div className="hidden lg:flex flex-col items-start gap-3 min-w-[180px] pt-2">
            <img src={acmeLogo} alt="Acme Painting" className="w-12 h-12 rounded object-contain" />
            <p className="font-rubik font-semibold text-sm text-foreground leading-tight">
              Acme Painting
            </p>
            <div className="flex items-center gap-1">
              <span className="font-rubik font-bold text-sm text-primary">5.0</span>
              <img src={starIcon} alt="" className="w-4 h-4" />
            </div>
            <p className="font-rubik text-xs text-muted-foreground">
              Based on 10 reviews
            </p>
            <p className="font-rubik text-xs text-muted-foreground">
              powered by <span className="font-semibold text-foreground">Google</span>
            </p>
            <a
              href="#"
              className="mt-1 inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-rubik text-xs font-medium px-3 py-1.5 rounded-full hover:opacity-90 transition-opacity"
            >
              review us on
              <img src={googleIcon} alt="" className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute left-[170px] lg:left-[190px] top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground shadow-sm transition-colors text-lg"
          >
            ‹
          </button>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 flex-1 ml-4">
            {visibleReviews.map((review, i) => (
              <div
                key={`${review.name}-${i}`}
                className="bg-card rounded-xl border border-border p-5 flex flex-col gap-3"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    {review.image ? (
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-primary-foreground font-rubik font-bold text-sm`}
                      >
                        {review.initial}
                      </div>
                    )}
                    <div>
                      <p className="font-rubik font-semibold text-sm text-foreground leading-tight">
                        {review.name}
                      </p>
                      <p className="font-rubik text-[11px] text-muted-foreground">
                        {review.time}
                      </p>
                    </div>
                  </div>
                  <img src={googleIcon} alt="Google" className="w-4 h-4 mt-0.5" />
                </div>

                {/* Star */}
                <img src={starIcon} alt="5 stars" className="w-4 h-4" />

                {/* Text */}
                <p className="font-rubik text-[13px] text-muted-foreground leading-relaxed line-clamp-6">
                  {review.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground shadow-sm transition-colors text-lg"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === startIndex ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
