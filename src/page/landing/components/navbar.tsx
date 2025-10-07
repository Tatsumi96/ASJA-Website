import { Link } from "react-scroll";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuIcon, Moon, Sun, X } from "lucide-react";
import Logo from "@/assets/Logo/asja-logo.png";
import { useEffect, useState } from "react";
import { useTheme } from "@/page/theme/useTheme";
import { useLangue } from "@/page/lang/useLang";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { toggleTheme, isDark } = useTheme();
  const { translate, toggleLang, isEn } = useLangue();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 500) setOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="md:flex md:flex-row flex flex-col transition-all duration-500  md:px-5 px-2 py-4 md:py-0 justify-between top-0 fixed w-full shadow-sm bg-white dark:bg-zinc-800 text-black border-b-gray-300 z-50">
      <div className="flex w-full md:w-auto justify-between items-center">
        <a
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <img className=" w-10 h-10" src={Logo} />
          <h1 className=" flex items-center justify-center transition-all duration-500 text-md text-gray-900 dark:text-white font-bold">
            {translate("universite")}
          </h1>
        </a>
        <button
          onClick={() => setOpen((value) => !value)}
          className=" flex md:hidden justify-center items-center text-green-700  dark:text-white pr-5 cursor-pointer hover:scale-110 hover:text-green-700/50 transition-all duration-500"
        >
          {open ? <X /> : <MenuIcon />}
        </button>
      </div>
      <div className="md:flex  justify-center items-center hidden ">
        <button
          className="px-5 text-green-700 cursor-pointer"
          onClick={toggleLang}
        >
          {isEn ? "FR" : "EN"}
        </button>
        <button
          className="px-5 text-green-700 cursor-pointer"
          onClick={toggleTheme}
        >
          {isDark ? <Sun /> : <Moon />}
        </button>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
            <NavigationMenuTrigger>{translate("navBar.accueil")}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
              <Link
                to="description"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                activeClass="text-green-700 bg-green-50 dark:bg-green-950 font-medium px-4 py-2 rounded"
                className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
              >
                  {translate("sectionAccueilNavbar.description")}
                </Link>
                <Link 
                  to="mission"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  activeClass="text-green-700 m-1 bg-green-50 dark:bg-green-950 font-medium px-4 py-2 rounded"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500">
                  {translate("sectionAccueilNavbar.mission")}
                </Link>
                <Link 
                  to="filiere"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  activeClass="text-green-700 m-1 bg-green-50 dark:bg-green-950 font-medium px-4 py-2 rounded"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500">
                  {translate("sectionAccueilNavbar.filieres")}
                </Link>
                <Link 
                  to="events"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  activeClass="text-green-700 m-1 bg-green-50 dark:bg-green-950 font-medium px-4 py-2 rounded"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500">
                  {translate("sectionAccueilNavbar.events")}
                </Link>
                <Link 
                  to="systeme"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  activeClass="text-green-700 m-1 bg-green-50 dark:bg-green-950 font-medium px-4 py-2 rounded"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500">
                  {translate("sectionAccueilNavbar.systeme")}
                </Link>
                <Link 
                  to="temoignages"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  activeClass="text-green-700 m-1 bg-green-50 dark:bg-green-950 font-medium px-4 py-2 rounded"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500">
                  {translate("sectionAccueilNavbar.temoignages")}
                </Link>
                <Link 
                  to="FAQ"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  activeClass="text-green-700 m-1 bg-green-50 dark:bg-green-950 font-medium px-4 py-2 rounded"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500">
                  {translate("sectionAccueilNavbar.FAQ")}
                </Link>
                <Link 
                  to="map"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  activeClass="text-green-700 m-1 bg-green-50 dark:bg-green-950 font-medium px-4 py-2 rounded"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500">
                  {translate("sectionAccueilNavbar.map")}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
            <NavigationMenuTrigger>{translate("navBar.filieres")}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <Link
                  to="AGRO"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                >
                    {translate("filiereSection.AGRO.name")}
                </Link>
                <Link
                  to="INFO"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                >
                    {translate("filiereSection.INFO.name")}
                </Link>
                <Link
                  to="DROIT"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                >
                    {translate("filiereSection.DROIT.name")}
                </Link>
                <Link
                  to="ECO"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                >
                    {translate("filiereSection.ECO.name")}
                </Link>
                <Link
                  to="LEA"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                >
                    {translate("filiereSection.LEA.name")}
                </Link>
                <Link
                  to="ST"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                >
                    {translate("filiereSection.ST.name")}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{translate("navBar.contact")}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="flex flex-col">
                <p className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500">034 12 345 67</p>
                <a className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500" href=""> example@gmail.com </a>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
        <a className="py-2" onClick={() => (window.location.href = "/Login")}>
          <div
            className="px-4 py-2 my-1 ml-3 text-white font-bold bg-green-700
                           rounded-full cursor-pointer hover:bg-green-800 
                           hover:scale-105 duration-300"
          >
            {translate("navBar.postuler")}
          </div>
        </a>
      </div>

      {open ? (
        <div className="md:hidden flex flex-col transition-all duration-500  justify-center items-center ">
          <button
            className="px-5 text-green-700 cursor-pointer"
            onClick={toggleLang}
          >
            {isEn ? "FR" : "EN"}
          </button>
          <button
            className="py-5 text-green-700 cursor-pointer"
            onClick={toggleTheme}
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
          <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
            <NavigationMenuTrigger>{translate("navBar.accueil")}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
              <Link
                to="description"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                activeClass="text-green-700 bg-green-50 dark:bg-green-950 font-medium px-4 py-2 rounded"
                className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
              >
                  {translate("sectionAccueilNavbar.description")}
                </Link>
                <Link 
                  to="mission"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  activeClass="text-green-700 m-1 bg-green-50 dark:bg-green-950 font-medium px-4 py-2 rounded"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500">
                  {translate("sectionAccueilNavbar.mission")}
                </Link>
                <Link 
                  to="filiere"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  activeClass="text-green-700 m-1 bg-green-50 dark:bg-green-950 font-medium px-4 py-2 rounded"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500">
                  {translate("sectionAccueilNavbar.filieres")}
                </Link>
                <Link 
                  to="events"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  activeClass="text-green-700 m-1 bg-green-50 dark:bg-green-950 font-medium px-4 py-2 rounded"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500">
                  {translate("sectionAccueilNavbar.events")}
                </Link>
                <Link 
                  to="systeme"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  activeClass="text-green-700 m-1 bg-green-50 dark:bg-green-950 font-medium px-4 py-2 rounded"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500">
                  {translate("sectionAccueilNavbar.systeme")}
                </Link>
                <Link 
                  to="temoignages"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  activeClass="text-green-700 m-1 bg-green-50 dark:bg-green-950 font-medium px-4 py-2 rounded"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500">
                  {translate("sectionAccueilNavbar.temoignages")}
                </Link>
                <Link 
                  to="FAQ"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  activeClass="text-green-700 m-1 bg-green-50 dark:bg-green-950 font-medium px-4 py-2 rounded"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500">
                  {translate("sectionAccueilNavbar.FAQ")}
                </Link>
                <Link 
                  to="map"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  activeClass="text-green-700 m-1 bg-green-50 dark:bg-green-950 font-medium px-4 py-2 rounded"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500">
                  {translate("sectionAccueilNavbar.map")}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
            <NavigationMenuTrigger>{translate("navBar.filieres")}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <Link
                  to="AGRO"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                >
                    {translate("filiereSection.AGRO.name")}
                </Link>
                <Link
                  to="INFO"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                >
                    {translate("filiereSection.INFO.name")}
                </Link>
                <Link
                  to="DROIT"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                >
                    {translate("filiereSection.DROIT.name")}
                </Link>
                <Link
                  to="ECO"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                >
                    {translate("filiereSection.ECO.name")}
                </Link>
                <Link
                  to="LEA"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                >
                    {translate("filiereSection.LEA.name")}
                </Link>
                <Link
                  to="ST"
                  className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                >
                    {translate("filiereSection.ST.name")}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{translate("navBar.contact")}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className="flex flex-col">
                <p className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500">034 12 345 67</p>
                <a className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500" href=""> example@gmail.com </a>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
          <a onClick={() => (window.location.href = "/Login")}>
            <div
              className="px-4 py-2 my-1 ml-3 text-white font-bold bg-green-700
                           rounded-full cursor-pointer hover:bg-green-800 
                           hover:scale-105 duration-300"
            >
              {translate("navBar.postuler")}
            </div>
          </a>
          <a onClick={() => (window.location.href = "/Login")}></a>
        </div>
      ) : null}
    </div>
  );
};
