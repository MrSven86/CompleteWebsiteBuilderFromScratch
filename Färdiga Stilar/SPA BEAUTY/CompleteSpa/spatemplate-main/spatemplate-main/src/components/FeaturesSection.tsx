import iconFaceMask from "@/assets/icon-face-mask.png";
import iconPinett from "@/assets/icon-pinett.png";
import iconSkraddarsydde from "@/assets/icon-skraddarsydde.png";
import iconHogsta from "@/assets/icon-hogsta.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: iconFaceMask, title: "De mest erfarne\nbehandlere", description: "Dedikerede skønhedseksperter med op til 15 års erfaring." },
  { icon: iconPinett, title: "Avanceret teknologi", description: "Vi anvender det nyeste udstyr for at sikre optimale og naturlige resultater." },
  { icon: iconSkraddarsydde, title: "Skræddersyede\nbehandlinger", description: "Personlige behandlinger tilpasset dine unikke behov med mange års erfaring." },
  { icon: iconHogsta, title: "Højeste kvalitet og\nsikkerhed", description: "Dokumenterede resultater til dig, der vil have det bedste." },
];

const FeaturesSection = () => {
  return (
    <section className="w-full bg-background px-4 sm:px-6" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
      <div className="mx-auto grid max-w-[1340px] gap-x-10 gap-y-14 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => {
          const ref = useScrollAnimation<HTMLDivElement>();
          return (
            <div
              key={index}
              ref={ref}
              className="scroll-fade-in mx-auto flex w-full max-w-[280px] flex-col items-center text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={feature.icon}
                alt=""
                style={{ width: '80px', height: '80px', objectFit: 'contain', marginBottom: '24px' }}
              />
              <h3
                className="text-foreground"
                style={{
                  fontFamily: "'Futura PT Web', sans-serif",
                  fontWeight: 500,
                  fontSize: '22px',
                  lineHeight: '34px',
                  letterSpacing: '0%',
                  margin: '0 0 16px 0',
                  whiteSpace: 'pre-line',
                }}
              >
                {feature.title}
              </h3>
              <p
                className="text-foreground"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: '16px',
                  lineHeight: '26px',
                  margin: 0,
                  opacity: 0.9,
                }}
              >
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;
