import photoBack from "@/assets/photo-back.png";
import photoFace from "@/assets/photo-face.png";
import squiggle from "@/assets/squiggle-underline.svg";
import bookArrow from "@/assets/book-arrow.svg";

const AboutSection = () => {
  return (
    <section className="w-full overflow-hidden bg-background">
      <div className="mx-auto max-w-[1920px] px-4 py-12 sm:px-6 lg:px-[290px] lg:py-[45px]">
        <div className="flex max-w-[760px] flex-wrap items-center text-foreground">
          <span className="relative">
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: '14px',
                letterSpacing: '2.8px',
                lineHeight: '24px',
                textTransform: 'uppercase',
              }}
            >
              Skønhed
            </span>
            <img src={squiggle} alt="" className="absolute" style={{ left: '-2px', bottom: '-4px', width: '86px', height: '5px' }} />
          </span>
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 500,
              fontSize: '14px',
              letterSpacing: '2.8px',
              lineHeight: '24px',
              textTransform: 'uppercase',
            }}
          >
            &nbsp;uden kompromis&nbsp;&nbsp;·&nbsp;&nbsp;ekspertise i fokus&nbsp;&nbsp;·&nbsp;&nbsp;
          </span>
          <span className="relative">
            <span
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: '14px',
                letterSpacing: '2.8px',
                lineHeight: '24px',
                textTransform: 'uppercase',
              }}
            >
              Resultater
            </span>
            <img src={squiggle} alt="" className="absolute" style={{ left: '-2px', bottom: '-4px', width: '86px', height: '5px' }} />
          </span>
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 500,
              fontSize: '14px',
              letterSpacing: '2.8px',
              lineHeight: '24px',
              textTransform: 'uppercase',
            }}
          >
            &nbsp;du kan stole på
          </span>
        </div>

        <div className="mt-10 grid max-w-[640px] gap-10 sm:grid-cols-2">
          {[
            {
              value: '97%',
              copy: 'bedømmer CeriX positivt.',
            },
            {
              value: '150K+',
              copy: 'behandlinger udført af dygtige\nkosmetiske sygeplejersker.',
            },
          ].map((stat) => (
            <div key={stat.value}>
              <p
                className="m-0 text-foreground"
                style={{
                  fontFamily: "'Futura PT Web', sans-serif",
                  fontWeight: 500,
                  fontSize: '66px',
                  lineHeight: '51.2px',
                  letterSpacing: '3.2px',
                }}
              >
                {stat.value}
              </p>
              <div className="mt-4 h-[1.5px] w-[195px] bg-foreground" />
              <p
                className="mt-[14px] whitespace-pre-line text-foreground"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                }}
              >
                {stat.copy}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-start gap-12 xl:mt-[105px] xl:grid-cols-[500px_minmax(0,711px)] xl:gap-[153px]">
          <div className="max-w-[500px]">
            <p
              className="m-0 text-foreground"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: '14px',
                letterSpacing: '2.8px',
                lineHeight: '24px',
                textTransform: 'uppercase',
              }}
            >
              Vad vi gör
            </p>

            <h2
              className="mt-[18px] text-foreground"
              style={{
                fontFamily: "'Futura PT Web', sans-serif",
                fontWeight: 500,
                fontSize: '30px',
                lineHeight: '51.2px',
                letterSpacing: '3.2px',
                textTransform: 'uppercase',
                marginBottom: 0,
              }}
            >
              We are experts at beauty treatments
            </h2>

            <div className="mt-8">
              <p
                className="m-0 text-foreground"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '26px',
                  opacity: 0.82,
                }}
              >
                Klinik Estetik står för medicinsk expertis och har ett helhjärtat engagemang i varje kund. För oss är det viktigaste — bortsett från att du blir helt nöjd — att du känner dig trygg, från första konsultation till återbesök.
              </p>
              <p
                className="mt-5 text-foreground"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '26px',
                  opacity: 0.82,
                }}
              >
                Vi är specialiserade inom plastikkirurgi, laser och medicinsk hudvård och erbjuder ett brett utbud av estetiska behandlingar för hud, kropp och ansikte.
              </p>
            </div>

            <a
              href="#book"
              className="mt-11 inline-flex h-[44px] w-[96px] items-center gap-[10px] rounded-md no-underline transition-opacity hover:opacity-90"
              style={{
                backgroundColor: 'hsl(210 30% 5%)',
                padding: '0 16px',
              }}
            >
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                  fontSize: '16px',
                  color: 'hsl(0 0% 100%)',
                }}
              >
                Book
              </span>
              <img src={bookArrow} alt="" style={{ width: '20px', height: '12px' }} />
            </a>
          </div>

          <div className="relative min-h-[420px] sm:min-h-[620px] xl:min-h-[845px]">
            <img
              src={photoBack}
              alt="Beauty treatment"
              className="absolute right-0 top-0 w-[78%] max-w-[520px] rounded-[30px] object-cover"
              style={{ aspectRatio: '520 / 650' }}
            />
            <img
              src={photoFace}
              alt="Close-up beauty"
              className="absolute bottom-0 left-0 z-10 w-[58%] max-w-[384px] rounded-[30px] object-cover"
              style={{ aspectRatio: '384 / 540' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
