import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// react-leaflet v4 compatible

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
  "Palos Verdes Estates": { lat: 33.7866, lng: -118.3914 },
  "Rancho Palos Verdes": { lat: 33.7444, lng: -118.3870 },
  "Rolling Hills": { lat: 33.7580, lng: -118.3579 },
  "Rolling Hills Estates": { lat: 33.7678, lng: -118.3484 },
  "Hermosa Beach": { lat: 33.8622, lng: -118.3995 },
  "Redondo Beach": { lat: 33.8492, lng: -118.3884 },
  "Manhattan Beach": { lat: 33.8847, lng: -118.4109 },
  "Torrance": { lat: 33.8358, lng: -118.3406 },
  "Pacific Palisades": { lat: 34.0283, lng: -118.5267 },
  "Malibu": { lat: 34.0259, lng: -118.7798 },
};

interface ServiceAreaMapProps {
  cities: string[];
  className?: string;
}

export const ServiceAreaMap = ({ cities, className = "" }: ServiceAreaMapProps) => {
  const markers = cities
    .filter((city) => cityCoordinates[city])
    .map((city) => ({
      name: city,
      ...cityCoordinates[city],
    }));

  const center = { lat: 33.83, lng: -118.45 }; // South Bay area

  return (
    <div className={`w-full h-full min-h-[400px] ${className}`}>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={9}
        scrollWheelZoom={false}
        attributionControl={false}
        style={{ height: "100%", width: "100%", borderRadius: "0.5rem" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker) => (
          <Marker
            key={marker.name}
            position={[marker.lat, marker.lng]}
            icon={customIcon}
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
