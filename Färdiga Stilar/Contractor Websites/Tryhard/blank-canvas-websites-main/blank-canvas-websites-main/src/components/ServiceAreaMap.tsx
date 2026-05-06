import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  "Little Egg Harbor": { lat: 39.6412, lng: -74.3365 },
  "Tuckerton": { lat: 39.6034, lng: -74.3404 },
  "Barnegat": { lat: 39.7532, lng: -74.2229 },
  "Manahawkin": { lat: 39.6951, lng: -74.2588 },
  "Long Beach Island": { lat: 39.6307, lng: -74.1910 },
  "Stafford Township": { lat: 39.7004, lng: -74.2649 },
  "Toms River": { lat: 39.9537, lng: -74.1979 },
  "Lacey Township": { lat: 39.8587, lng: -74.2193 },
  "Forked River": { lat: 39.8387, lng: -74.1882 },
  "Waretown": { lat: 39.7879, lng: -74.1968 },
};

interface ServiceAreaMapProps {
  cities: string[];
  className?: string;
}

export const ServiceAreaMap = ({ cities, className = "" }: ServiceAreaMapProps) => {
  const validCities = cities
    .map((name) => {
      const coords = cityCoordinates[name];
      return coords ? { name, ...coords } : null;
    })
    .filter((city): city is { name: string; lat: number; lng: number } => city !== null);

  const mapCenter: [number, number] = validCities.length > 0
    ? [
        validCities.reduce((sum, c) => sum + c.lat, 0) / validCities.length,
        validCities.reduce((sum, c) => sum + c.lng, 0) / validCities.length,
      ]
    : [39.75, -74.25];

  return (
    <div className={`relative w-full h-full ${className}`}>
      <MapContainer
        center={mapCenter}
        zoom={10}
        scrollWheelZoom={true}
        className="w-full h-full"
        style={{ minHeight: "400px" }}
        zoomControl={true}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {validCities.map((city) => (
          <Marker key={city.name} position={[city.lat, city.lng]} icon={customIcon}>
            <Popup>
              <div className="text-center">
                <strong className="text-primary">{city.name}</strong>
                <p className="text-sm text-muted-foreground">Service Area</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <style>{`
        .leaflet-control-zoom { border: none !important; box-shadow: 0 2px 6px rgba(0,0,0,0.15) !important; }
        .leaflet-control-zoom a { background: white !important; color: #333 !important; border: none !important; width: 36px !important; height: 36px !important; line-height: 36px !important; font-size: 18px !important; }
        .leaflet-control-zoom a:hover { background: #f5f5f5 !important; }
        .leaflet-control-zoom-in { border-radius: 4px 4px 0 0 !important; }
        .leaflet-control-zoom-out { border-radius: 0 0 4px 4px !important; }
        .leaflet-popup-content-wrapper { border-radius: 8px; box-shadow: 0 3px 14px rgba(0,0,0,0.15); }
      `}</style>
    </div>
  );
};

export default ServiceAreaMap;
