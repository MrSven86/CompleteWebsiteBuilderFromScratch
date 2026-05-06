import lise from "@/assets/staff-lise.png";
import sofie from "@/assets/staff-sofie.png";
import julie from "@/assets/staff-julie.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const staff = [
  { image: lise, name: "Lise Baastrup", role: "Skuespiller og sanger" },
  { image: sofie, name: "Sofie Stougaard", role: "Skuespiller" },
  { image: julie, name: "Julie Zangenberg", role: "Skuespiller og Creative Director, Cozy by JZ" },
];

const StaffSection = () => {
  const headingRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      className="w-full px-4 py-16 sm:px-6 lg:py-24"
      style={{ backgroundColor: 'hsl(30 5% 52%)' }}
    >
      <div className="mx-auto max-w-[1340px]">
        <div ref={headingRef} className="scroll-fade-in">
          <h2
            className="m-0 text-center"
            style={{
              fontFamily: "'Futura PT Web', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(24px, 3.5vw, 32px)',
              lineHeight: '1.3',
              color: 'hsl(0 0% 100%)',
              letterSpacing: '3.2px',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Valgt af dem, der kræver det bedste
          </h2>
          <p
            className="m-0 text-center"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: '26px',
              color: 'hsl(0 0% 90%)',
              marginBottom: '50px',
            }}
          >
            Kendte profiler har valgt Cerix til at stå bag deres resultater.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {staff.map((person, i) => {
            const cardRef = useScrollAnimation<HTMLDivElement>();
            return (
              <div
                key={person.name}
                ref={cardRef}
                className="scroll-fade-in relative overflow-hidden rounded-[16px]"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="block w-full object-cover object-top"
                  style={{ aspectRatio: '420 / 390' }}
                />
                <div
                  className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                    height: '50%',
                  }}
                >
                  <h3
                    className="m-0"
                    style={{
                      fontFamily: "'Futura PT Web', sans-serif",
                      fontWeight: 500,
                      fontSize: 'clamp(20px, 2.5vw, 26px)',
                      lineHeight: '1.2',
                      color: 'hsl(0 0% 100%)',
                    }}
                  >
                    {person.name}
                  </h3>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 300,
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: 'hsl(0 0% 85%)',
                      margin: '4px 0 0 0',
                    }}
                  >
                    {person.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
