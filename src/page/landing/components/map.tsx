import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";

export const Map = () => {
  const asjaPosition: [number, number] = [-19.814068, 47.070135];

  return (
    <div className=" flex justify-center py-10 bg-white dark:bg-zinc-800 transition-all duration-500">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
      >
        <MapContainer
          className="rounded-3xl z-1"
          center={asjaPosition}
          zoom={15}
          style={{ height: "600px", width: "800px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={asjaPosition}>
            <Popup>Athene Saint Joseph Antsirabe</Popup>
          </Marker>
        </MapContainer>
      </motion.div>
    </div>
  );
};
