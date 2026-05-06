import testimonialImg from "@/assets/testimonial-woman.png";
import bookArrow from "@/assets/book-arrow.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialSection = () => {
  const imgRef = useScrollAnimation<HTMLDivElement>();
  const textRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="w-full overflow-hidden bg-secondary">
      <div className="mx-auto grid max-w-[1920px] items-center lg:grid-cols-[minmax(320px,760px)_1fr]">
        <div ref={imgRef} className="scroll-fade-in lg:max-w-[760px]">
          <img
            src={testimonialImg}
            alt="Client testimonial"
            className="block w-full object-cover lg:rounded-r-[30px]"
            style={{ aspectRatio: '760 / 570' }}
          />
        </div>

        <div ref={textRef} className="scroll-fade-in flex flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-[100px]">
          <span
            className="text-foreground"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 500,
              fontSize: '14px',
              letterSpacing: '2.3px',
              textTransform: 'uppercase',
              marginBottom: '32px',
            }}
          >
            Intervjuer & Client Stories
          </span>

          <h2
            className="m-0 max-w-[520px] text-foreground"
            style={{
              fontFamily: "'Futura PT Web', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(22px, 3vw, 28px)',
              lineHeight: '1.46',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            "Att känna att jag ser ut som jag känner mig på insidan, det är en härlig känsla."
          </h2>

          <button
            className="mt-10 inline-flex items-center gap-3 rounded-md border border-foreground bg-transparent px-6 py-3 text-foreground"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
            }}
          >
            Läs vad våra patienter säger
            <img src={bookArrow} alt="" style={{ width: '14px', height: '14px' }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
