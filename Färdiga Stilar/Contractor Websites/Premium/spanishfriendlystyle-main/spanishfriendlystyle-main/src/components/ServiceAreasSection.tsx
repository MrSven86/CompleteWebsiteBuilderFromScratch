import { Check } from "lucide-react";
import mapImg from "@/assets/service-map.png";

const cities = [
  { name: "Alameda", bold: false },
  { name: "Emeryville", bold: false },
  { name: "Novato", bold: false },
  { name: "San Leandro", bold: false },
  { name: "Belmont", bold: false },
  { name: "Foster City", bold: false },
  { name: "Oakland", bold: false },
  { name: "San Mateo", bold: true },
  { name: "Benicia", bold: false },
  { name: "Fremont", bold: false },
  { name: "Palo Alto", bold: true },
  { name: "San Pablo", bold: false },
  { name: "Berkeley", bold: false },
  { name: "Hayward", bold: false },
  { name: "Pinole", bold: false },
  { name: "San Rafael", bold: false },
  { name: "Burlingame", bold: true },
  { name: "Hercules", bold: false },
  { name: "Redwood City", bold: false },
  { name: "Sausalito", bold: false },
  { name: "Castro Valley", bold: false },
  { name: "Menlo Park", bold: true },
  { name: "Richmond", bold: false },
  { name: "Santa Clara", bold: false },
  { name: "Cupertino", bold: false },
  { name: "Millbrae", bold: true },
  { name: "San Bruno", bold: true },
  { name: "South SF", bold: false },
  { name: "Daly City", bold: false },
  { name: "Milpitas", bold: false },
  { name: "San Carlos", bold: true },
  { name: "Sunnyvale", bold: false },
  { name: "East Palo Alto", bold: false },
  { name: "Mountain View", bold: false },
  { name: "San Francisco", bold: true },
  { name: "Tiburon", bold: true },
  { name: "El Cerrito", bold: false },
  { name: "Newark", bold: false },
  { name: "San Jose", bold: false },
  { name: "Vallejo", bold: false },
];

const ServiceAreasSection = () => (
  <section className="bg-background py-20 px-8 md:px-16 lg:px-[258px]">
    <div className="max-w-[1404px] mx-auto">
      {/* Top: Text + Cities */}
      <div className="flex flex-col lg:flex-row gap-12 mb-12">
        {/* Left text */}
        <div className="lg:max-w-[500px]">
          <p className="text-foreground font-gibson text-lg mb-2">
            Sirviendo al Área de la Bahía y Alrededores
          </p>
          <h2 className="text-foreground font-gibson text-4xl md:text-5xl font-medium leading-tight mb-1">
            Servicio Local, Personalizado
          </h2>
          <h2 className="text-foreground font-gibson text-4xl md:text-5xl font-semibold leading-tight mb-8">
            y de Confianza
          </h2>
          <p className="text-muted-foreground font-gibson text-base leading-7 mb-6">
            Servimos con orgullo a clientes en toda el Área de la Bahía.
            Desde Alameda hasta Vallejo, nuestro equipo profesional está dedicado a ofrecer
            servicios de alta calidad adaptados a tus necesidades.
          </p>
          <p className="text-muted-foreground font-gibson text-base leading-7">
            Como negocio local, entendemos el carácter único de cada
            comunidad a la que servimos. Nuestro compromiso con la excelencia, atención al detalle y
            enfoque amigable aseguran que cada proyecto refleje el espíritu vibrante de nuestros
            vecindarios. Ya sea una renovación residencial o una transformación comercial,
            estamos aquí para hacer tu visión realidad.
          </p>
        </div>

        {/* Right cities grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-3 content-start">
          {cities.map((city) => (
            <div key={city.name} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-foreground flex-shrink-0" strokeWidth={3} />
              <span
                className={`font-gibson text-sm ${
                  city.bold ? "font-bold text-foreground" : "font-light text-muted-foreground"
                }`}
              >
                {city.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="rounded-xl overflow-hidden">
        <img
          src={mapImg}
          alt="Mapa de áreas de servicio en el Área de la Bahía de San Francisco"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </section>
);

export default ServiceAreasSection;
