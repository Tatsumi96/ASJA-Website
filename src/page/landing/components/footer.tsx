import Logo from "@/assets/Logo/asja-logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
export const Footer = () => {
  const asjaPosition: [number, number] = [-19.814068, 47.070135];
  return (
    <div
      id="contact"
      className="flex lg:h-130 flex-col lg:flex-row justify-center md:gap-30 items-center w-full text-gray-800 gap-10 shadow-2xl transition-all duration-500 bg-white dark:bg-zinc-900 dark:text-white py-10 border-t-2 "
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <img className="h-30 w-30 mx-50" src={Logo} />
        <h1 className=" flex text-center items-center justify-center text-xl text-gray-900 transition-all duration-500 dark:text-white font-bold">
          Université ASJA
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-10 lg:gap-50 ">
        <div className="flex h-full md:justify-center md:items-center">
          <ul className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Contact</h1>
            <li>tel: 034 49 483 19</li>
            <li>email: example@gmail.com</li>
            <li>address: Antsaha, Antsirabe, Madagascar</li>
            <li>
              {" "}
              <FacebookIcon /> Facebook
            </li>
          </ul>
        </div>
        <MapContainer
          className="rounded-2xl z-1 md:size-[400px] size-[330px]"
          center={asjaPosition}
          zoom={15}
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
    </div>
  );
};
