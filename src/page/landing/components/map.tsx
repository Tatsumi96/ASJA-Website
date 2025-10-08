import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapPin } from "lucide-react";
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";

export const Map = () => {
  const asjaPosition: [number, number] = [-19.814068, 47.070135];

  return (
    <div
      id="map"
      className=" flex h-scren justify-center py-10 bg-gray-50 dark:bg-zinc-800 transition-all duration-500"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="flex h-[500px] bg-white dark:bg-zinc-900 justify-center w-100 lg:w-auto flex-col border p-10 wrap-break-word m-5 rounded-2xl">
            <h1 className=" text-3xl font-extrabold text-green-700 mb-5">
              Localisation de l'Athénée Saint Joseph Antsirabe (ASJA)
            </h1>
            <p>
              Voici la localisation de l'Athénée Saint Joseph Antsirabe (ASJA).
            </p>
            <p className="flex my-5">
              Antsaha, Antsirabe, Madagascar
              <MapPin color="#17961c" />
            </p>
          </div>
          <MapContainer
            className="rounded-3xl z-1"
            center={asjaPosition}
            zoom={15}
            style={{ height: "500px", width: "600px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={asjaPosition}>
              <Popup>Athene Saint Joseph Antsirabe</Popup>
            </Marker>
          </MapContainer>
        </div>
      </motion.div>
    </div>
  );
};
