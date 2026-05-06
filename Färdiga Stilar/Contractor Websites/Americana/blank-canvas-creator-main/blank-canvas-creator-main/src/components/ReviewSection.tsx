import buildzoomLogo from "@/assets/buildzoom-logo.svg";
import iconStarGold from "@/assets/icon-star-gold.svg";
import iconTick from "@/assets/icon-tick.svg";

const ReviewSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h2
          className="text-center text-3xl md:text-4xl font-bold text-foreground mb-10"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Built on Trust & Reliability
        </h2>

        {/* Review card */}
        <div className="max-w-2xl mx-auto bg-muted/50 rounded-lg px-8 py-8 mb-10">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={iconStarGold} alt="" className="h-5 w-5" />
            ))}
          </div>

          {/* Quote */}
          <p
            className="text-center italic text-primary mb-3"
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: "15px",
              lineHeight: "24px",
            }}
          >
            This buisness was fantastic! I loved doing roofs and would give this job a 10/10 experience!
          </p>

          {/* Author */}
          <p
            className="text-center text-foreground font-medium mb-4"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "15px" }}
          >
            Chase Quaves
          </p>

          {/* Buildzoom badge */}
          <div className="flex items-center justify-center gap-2">
            <img src={buildzoomLogo} alt="Buildzoom" className="h-5" />
            <span
              className="text-sm text-muted-foreground"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Verified Review
            </span>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-foreground" style={{ fontFamily: "Inter, sans-serif" }}>
          <div className="flex items-center gap-2">
            <img src={iconTick} alt="" className="h-5 w-5" />
            <span>A+ BBB Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={iconTick} alt="" className="h-5 w-5" />
            <span>Licensed, Bonded & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={iconTick} alt="" className="h-5 w-5" />
            <span>Active CA Licenses</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
