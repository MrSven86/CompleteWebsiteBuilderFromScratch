import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: '1',
    title: "Book en konsultation\ni dag",
    description: "Vores kosmetiske specialister er klar til at rådgive dig, så du får den behandling, der matcher dine ønsker og behov. Book på linket nedenfor og kom igang i morgen.",
  },
  {
    number: '2',
    title: "Få en personlig\nbehandlingsplan",
    description: "Ved konsultationen laver vi en grundig og individuel vurdering af dine drømme og ønsker. Her kan vi finde den bedste løsning til dine behov og sammen lave en plan til dig.",
  },
  {
    number: '3',
    title: "Professionel og sikker\nbehandling",
    description: "I CeriX gennemgår alle behandlere omfattende faglige efteruddannelser. Derfor får du en behandling med flotte resultater, høj faglighed og en sikker tilgang til dit ønskede resultat.",
  },
];

const GetStartedSection = () => {
  const headingRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="w-full bg-secondary px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-[1340px]">
        <div ref={headingRef} className="scroll-fade-in">
          <h2
            className="m-0 text-center text-foreground"
            style={{
              fontFamily: "'Futura PT Web', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(24px, 3.5vw, 32px)',
              lineHeight: '1.3',
              letterSpacing: '3.2px',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Sådan kommer du igang med din behandling
          </h2>
          <p
            className="m-0 text-center text-foreground"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: '26px',
              opacity: 0.75,
              marginBottom: '50px',
            }}
          >
            Dine resultater og tryghed i fokus
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {steps.map((step, i) => {
            const cardRef = useScrollAnimation<HTMLDivElement>();
            return (
              <div
                key={step.number}
                ref={cardRef}
                className="scroll-fade-in relative overflow-hidden rounded-[16px] bg-background p-8"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span
                  className="pointer-events-none absolute right-6 top-6"
                  style={{
                    fontFamily: "'Futura PT Web', sans-serif",
                    fontWeight: 500,
                    fontSize: '120px',
                    lineHeight: '1',
                    color: 'hsl(30 11% 93%)',
                  }}
                >
                  {step.number}
                </span>
                <div className="relative z-10">
                  <h3
                    className="m-0 whitespace-pre-line text-foreground"
                    style={{
                      fontFamily: "'Futura PT Web', sans-serif",
                      fontWeight: 500,
                      fontSize: '22px',
                      lineHeight: '34px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-6 text-foreground"
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 300,
                      fontSize: '15px',
                      lineHeight: '24px',
                      opacity: 0.75,
                      marginBottom: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#book"
            className="inline-flex h-[52px] w-[200px] items-center justify-center rounded-md no-underline transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'hsl(240 6% 6%)',
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              color: 'hsl(0 0% 100%)',
            }}
          >
            Book tid
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
