import facialesImg from "@/assets/tratamiento-faciales.png";
import corporalesImg from "@/assets/tratamiento-corporales.png";
import capilaresImg from "@/assets/tratamiento-capilares.png";
import esteticaImg from "@/assets/tratamiento-estetica.png";
import legsImg from "@/assets/tratamiento-legs.png";

const treatments = [
  { image: facialesImg, label: 'Faciales' },
  { image: corporalesImg, label: 'Corporales' },
  { image: capilaresImg, label: 'Capilares' },
  { image: esteticaImg, label: 'Estética Íntima' },
  { image: legsImg, label: 'Flebología Láser' },
];

const TratamientosSection = () => {
  return (
    <section className="w-full bg-background px-4 sm:px-6" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
      <h2
        className="text-foreground"
        style={{
          fontFamily: "'Futura PT Web', sans-serif",
          fontWeight: 500,
          fontSize: '32px',
          lineHeight: '51.2px',
          letterSpacing: '3.20px',
          textTransform: 'uppercase',
          textAlign: 'center',
          margin: '0 0 50px 0',
        }}
      >
        Tratamientos
      </h2>

      <div className="mx-auto flex max-w-[1340px] flex-wrap justify-center gap-[30px]">
        {treatments.map((treatment) => (
          <div key={treatment.label} className="w-full sm:w-[calc(50%-15px)] xl:w-[calc((100%-60px)/3)]">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src={treatment.image}
                alt={treatment.label}
                className="w-full object-cover"
                style={{ aspectRatio: '420 / 320' }}
              />
            </div>
            <p
              className="mt-5 text-center text-foreground"
              style={{
                fontFamily: "'Futura PT Web', sans-serif",
                fontWeight: 500,
                fontSize: '20px',
                letterSpacing: '2.3px',
                textTransform: 'uppercase',
                lineHeight: '24px',
              }}
            >
              {treatment.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TratamientosSection;
