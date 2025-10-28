import Logo from "@/assets/Logo/asja-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useLangue } from "@/page/lang/useLang";
import { useTheme } from "@/page/theme/useTheme";
import { MenuIcon, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { toggleTheme, isDark } = useTheme();
  const { translate } = useLangue();

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
        <NavigationMenu className="my-4">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                {translate("navBar.filieres")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <Link
                    to="AGRO"
                    onClick={() => (window.location.href = "/agroPage")}
                    className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                  >
                    {translate("filiereSection.AGRO.name")}
                  </Link>
                  <Link
                    to="INFO"
                    className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                    onClick={() => (window.location.href = "/infoPage")}
                  >
                    {translate("filiereSection.INFO.name")}
                  </Link>
                  <Link
                    to="DROIT"
                    onClick={() => (window.location.href = "/droitPage")}
                    className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                  >
                    {translate("filiereSection.DROIT.name")}
                  </Link>
                  <Link
                    to="ECO"
                    onClick={() => (window.location.href = "/ecoPage")}
                    className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                  >
                    {translate("filiereSection.ECO.name")}
                  </Link>
                  <Link
                    to="LEA"
                    onClick={() => (window.location.href = "/leaPage")}
                    className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                  >
                    {translate("filiereSection.LEA.name")}
                  </Link>
                  <Link
                    to="ST"
                    onClick={() => (window.location.href = "/stPage")}
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
            <NavigationMenuItem className="text-white">
              <Link
                to="contact"
                className="text-gray-800 cursor-pointer dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
              >
                {translate("navBar.contact")}
              </Link>
              <NavigationMenuContent></NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <button
          className="px-5 text-green-700 cursor-pointer"
          onClick={toggleTheme}
        >
          {isDark ? <Sun /> : <Moon />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden flex flex-col transition-all duration-500  justify-center items-center ">
          <button
            className="py-5 text-green-700 cursor-pointer"
            onClick={toggleTheme}
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {translate("navBar.filieres")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>
                    <Link
                      to="AGRO"
                      onClick={() => (window.location.href = "/agroPage")}
                      className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                    >
                      {translate("filiereSection.AGRO.name")}
                    </Link>
                    <Link
                      to="INFO"
                      className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                      onClick={() => (window.location.href = "/infoPage")}
                    >
                      {translate("filiereSection.INFO.name")}
                    </Link>
                    <Link
                      to="DROIT"
                      onClick={() => (window.location.href = "/droitPage")}
                      className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                    >
                      {translate("filiereSection.DROIT.name")}
                    </Link>
                    <Link
                      to="ECO"
                      onClick={() => (window.location.href = "/ecoPage")}
                      className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                    >
                      {translate("filiereSection.ECO.name")}
                    </Link>
                    <Link
                      to="LEA"
                      onClick={() => (window.location.href = "/leaPage")}
                      className="text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                    >
                      {translate("filiereSection.LEA.name")}
                    </Link>
                    <Link
                      to="ST"
                      onClick={() => (window.location.href = "/stPage")}
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
              <NavigationMenuItem className="text-white">
                <Link
                  to="contact"
                  className="text-gray-800 cursor-pointer dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                >
                  {translate("navBar.contact")}
                </Link>
                <NavigationMenuContent></NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      ) : null}
    </div>
  );
};
