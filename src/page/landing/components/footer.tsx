import Logo from "@/assets/Logo/asja-logo.png";
import type { ReactNode } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

type Contact = {
  name: string;
  link?: string;
};
type SiteMap = {
  name: string;
  link: string;
};
type SocialMedia = {
  name: string;
  link: string;
  icon: ReactNode;
};
export const Footer = () => {
  const contact: Contact[] = [
    { name: "tel", link: "034 12 345 67" },
    { name: "email", link: "example@gmail.com" },
    { name: "address" },
  ];

  const siteMap: SiteMap[] = [
    { name: "Accueil", link: "/" },
    { name: "A propos", link: "/about" },
    { name: "Evennement", link: "/events" },
    { name: "Login", link: "/login" },
  ];
  const socialMedia: SocialMedia[] = [
    { name: "Facebook", link: "", icon: <FacebookIcon /> },
    { name: "Instagram", link: "", icon: <InstagramIcon /> },
  ];
  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row justify-center h-max gap-50 items-center w-full text-gray-800 p-10 shadow-2xl transition-all duration-500 bg-white dark:bg-zinc-900 dark:text-white "
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
        <div></div>
        <div>
          <ul className="flex flex-col gap-5">
            <h1 className="text-2xl font-bold">Map</h1>
            {siteMap.map((siteMap, key) => (
              <a key={key} href={siteMap.link}>
                {siteMap.name}
              </a>
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
      </div>
    </div>
  );
};
