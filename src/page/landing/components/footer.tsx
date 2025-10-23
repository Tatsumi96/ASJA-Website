import Logo from "@/assets/Logo/asja-logo.png";
import type { ReactNode } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Contact = {
  name: string;
  link?: string;
};
type SocialMedia = {
  name: string;
  link: string;
  icon: ReactNode;
};
export const Footer = () => {
  const asjaPosition: [number, number] = [-19.814068, 47.070135];
  const contact: Contact[] = [
    { name: "tel", link: "034 12 345 67" },
    { name: "email", link: "example@gmail.com" },
    { name: "address" },
  ];
  const socialMedia: SocialMedia[] = [
    { name: "Facebook", link: "", icon: <FacebookIcon /> },
    { name: "Instagram", link: "", icon: <InstagramIcon /> },
  ];
  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row justify-center h-max gap-30 items-center w-full text-gray-800 p-10 shadow-2xl transition-all duration-500 bg-white dark:bg-zinc-900 dark:text-white "
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <img className="h-30 w-30" src={Logo} />
        <h1 className=" flex text-center items-center justify-center text-xl text-gray-900 transition-all duration-500 dark:text-white font-bold">
          Université ASJA
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        <div>
          <ul className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Contact</h1>
            {contact.map((contact, key) => (
              <li key={key}>
                {contact.name}:{" "}
                {contact.link ? contact.link : "Antsaha, Antsirabe, Madagascar"}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold gap-5">Reseaux Sociaux</h1>
            {socialMedia.map((socialMedia, key) => (
              <a className="flex cursor-pointer" key={key}>
                {" "}
                {socialMedia.icon}
                {socialMedia.name}
              </a>
            ))}
          </ul>
        </div>
        <MapContainer
          className="rounded-3xl z-1"
          center={asjaPosition}
          zoom={15}
          style={{ height: "400px", width: "400px" }}
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
