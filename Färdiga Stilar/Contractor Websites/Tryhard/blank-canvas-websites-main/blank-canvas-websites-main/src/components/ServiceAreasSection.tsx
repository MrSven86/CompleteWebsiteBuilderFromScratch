import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import squareBrush from "@/assets/square-brush.svg";

const cities = [
  "Little Egg Harbor",
  "Tuckerton",
  "Barnegat",
  "Manahawkin",
  "Long Beach Island",
  "Stafford Township",
  "Toms River",
  "Lacey Township",
  "Forked River",
  "Waretown",
];

const ServiceAreasSection = () => {
  const midpoint = Math.ceil(cities.length / 2);
  const leftColumn = cities.slice(0, midpoint);
  const rightColumn = cities.slice(midpoint);

  return (
    <section className="w-full bg-background">
      <div className="max-w-[1440px] mx-auto" style={{ padding: '100px 80px 120px 80px' }}>
        <div className="flex justify-between items-start gap-[60px]">
          {/* Left Content */}
          <div className="w-[48%] pt-[10px]">
            {/* Tag */}
            <div className="flex items-center gap-2 mb-[10px]">
              <img src={squareBrush} alt="" className="w-[28px] h-[28px]" />
              <span
                className="font-bold text-[20px] uppercase tracking-wide"
                style={{ fontFamily: "'Franklin Gothic Book', 'Calibri', sans-serif", color: 'hsl(195, 100%, 47%)' }}
              >
                SERVICE AREAS
              </span>
            </div>

            {/* Headline */}
            <h2
              className="leading-[1.1] mb-[40px]"
              style={{
                fontFamily: "'Franklin Gothic Heavy', 'Arial Black', sans-serif",
                fontSize: '50px',
                color: '#1a1a1a',
              }}
            >
              PROUDLY SERVING THE<br />FOLLOWING COMMUNITIES
            </h2>

            {/* City List - Two Columns with bordered pills */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-10">
              {[...leftColumn, ...rightColumn].map((city, i) => (
                <a
                  key={city}
                  href="#"
                  className="flex items-center gap-3 px-5 py-3 border border-primary/40 rounded-full text-foreground hover:border-primary hover:bg-primary/5 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 500 }}
                >
                  {city}
                </a>
              ))}
            </div>
          </div>

          {/* Right Map */}
          <div className="w-[48%] rounded-lg overflow-hidden" style={{ minHeight: '500px' }}>
            <ServiceAreaMap cities={cities} className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
