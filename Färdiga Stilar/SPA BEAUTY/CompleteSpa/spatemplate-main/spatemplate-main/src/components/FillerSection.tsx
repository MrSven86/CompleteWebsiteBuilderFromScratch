import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  { title: "Skaber volumen", description: "Du mister ikke din mimik eller ser kunstig ud" },
  { title: "Udføres af erfarne behandlere", description: "Individuelt tilpasset resultat" },
  { title: "Naturligt udseende", description: "Du mister ikke din mimik eller ser kunstig ud" },
  { title: "Ingen nedetid", description: "Du kan gå direkte på arbejde" },
  { title: "Hurtigt resultat", description: "Resultatet ses straks efter behandlingen" },
  { title: "Gratis kontrol", description: "Opfølgning inkluderet" },
];

const FillerSection = () => {
  const ref = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="w-full" style={{ backgroundColor: 'hsl(20 6% 35%)' }}>
      <div ref={ref} className="scroll-fade-in mx-auto w-full max-w-[1920px] px-4 py-16 sm:px-6 lg:px-[290px] lg:py-20">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <h2
            className="m-0"
            style={{
              fontFamily: "'Futura PT Web', sans-serif",
              fontWeight: 500,
              fontStyle: 'italic',
              fontSize: 'clamp(24px, 3vw, 30px)',
              lineHeight: '1.4',
              color: 'hsl(0 0% 100%)',
            }}
          >
            Hvad kan filler gøre for dig?
          </h2>
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 rounded-md border no-underline transition-opacity hover:opacity-80"
            style={{
              borderColor: 'hsl(0 0% 100% / 0.5)',
              height: '48px',
              padding: '0 28px',
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              color: 'hsl(0 0% 100%)',
              backgroundColor: 'transparent',
              minWidth: '140px',
            }}
          >
            Book tid
          </a>
        </div>

        <div className="mb-10" style={{ borderTop: '1px solid hsl(0 0% 100% / 0.2)' }} />

        <div className="grid grid-cols-1 gap-x-24 gap-y-0 md:grid-cols-2">
          {benefits.map((item, i) => (
            <div key={i} className="py-6" style={{ borderBottom: '1px solid hsl(0 0% 100% / 0.15)' }}>
              <h3
                className="m-0 mb-2"
                style={{
                  fontFamily: "'Futura PT Web', sans-serif",
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '1.4',
                  color: 'hsl(0 0% 100%)',
                }}
              >
                {item.title}
              </h3>
              <p
                className="m-0"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: '15px',
                  lineHeight: '1.5',
                  color: 'hsl(0 0% 100% / 0.6)',
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FillerSection;
