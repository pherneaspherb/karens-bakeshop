"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, TileLayer } from "react-leaflet";

const position: [number, number] = [10.7603, 122.5071];

export default function LeafletMap() {
  const [icon, setIcon] = useState<any>(null);

  useEffect(() => {
    import("leaflet").then((L) => {
      delete (L.default.Icon.Default.prototype as any)._getIconUrl;

      L.default.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      setIcon(new L.default.Icon.Default());
    });
  }, []);

  if (!icon) return null;

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position} icon={icon} />
    </MapContainer>
  );
}