import Logo from "@/assets/Logo/asja-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useLangue } from "@/page/lang/useLang";
import { MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useScrollLock } from "../hooks/useScrollLock";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { translate } = useLangue();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 500) setOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleFiliereClick = (href: string) => {
    window.location.href = href;
    handleLinkClick();
  };

  useScrollLock(open);

  return (
    <nav className="flex flex-col fixed z-200 w-screen">
      <div className="md:flex md:flex-row flex flex-col transition-all duration-500 md:px-5 px-2 py-1 md:py-0 justify-between top-0 w-full shadow-sm bg-white dark:bg-zinc-800 text-black border-b-gray-300 z-50">
        <div className="flex w-full md:w-auto justify-between items-center m-3">
          <button
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <img className="w-10 h-10" src={Logo} alt="Logo" />
            <h1 className="flex items-center justify-center transition-all duration-500 text-md text-gray-900 dark:text-white font-bold">
              {translate("universite")}
            </h1>
          </button>
          <button
            onClick={() => setOpen((value) => !value)}
            className="flex md:hidden justify-center items-center text-green-700 dark:text-white pr-5 cursor-pointer hover:scale-110 hover:text-green-700/50 transition-all duration-500"
          >
            {!open ? <MenuIcon /> : null}
          </button>
        </div>

        <div className="md:flex justify-center items-center hidden">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {translate("navBar.filieres")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-64">
                    <button
                      onClick={() => handleFiliereClick("/mention/agronomie")}
                      className="block cursor-pointer w-full text-left text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500 hover:bg-gray-100 dark:hover:bg-zinc-700"
                    >
                      {translate("filiereSection.AGRO.name")}
                    </button>
                    <button
                      onClick={() =>
                        handleFiliereClick("/mention/informatique")
                      }
                      className="block cursor-pointer w-full text-left text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500 hover:bg-gray-100 dark:hover:bg-zinc-700"
                    >
                      {translate("filiereSection.INFO.name")}
                    </button>
                    <button
                      onClick={() => handleFiliereClick("/mention/droit")}
                      className="block cursor-pointer w-full text-left text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500 hover:bg-gray-100 dark:hover:bg-zinc-700"
                    >
                      {translate("filiereSection.DROIT.name")}
                    </button>
                    <button
                      onClick={() => handleFiliereClick("/mention/economie")}
                      className="block cursor-pointer w-full text-left text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500 hover:bg-gray-100 dark:hover:bg-zinc-700"
                    >
                      {translate("filiereSection.ECO.name")}
                    </button>
                    <button
                      onClick={() =>
                        handleFiliereClick("/mention/langue-etrangere-applique")
                      }
                      className="block cursor-pointer w-full text-left text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500 hover:bg-gray-100 dark:hover:bg-zinc-700"
                    >
                      {translate("filiereSection.LEA.name")}
                    </button>
                    <button
                      onClick={() =>
                        handleFiliereClick("/mention/science-de-la-terre")
                      }
                      className="block cursor-pointer w-full text-left text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500 hover:bg-gray-100 dark:hover:bg-zinc-700"
                    >
                      {translate("filiereSection.ST.name")}
                    </button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="text-gray-800 cursor-pointer dark:text-white hover:text-stone-500 px-4 py-2 rounded transition-all duration-500"
                >
                  {translate("navBar.contact")}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 md:hidden ${open ? "block" : "hidden"}`}
      >
        <div
          className={`fixed inset-0 bg-black transition-all duration-500 ${
            open ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <div
          className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-zinc-800 shadow-xl transition-all duration-500 ease-out ${
            open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <button
              className="flex items-center gap-3"
              onClick={() => {
                window.location.href = "/";
                handleLinkClick();
              }}
            >
              <img className="w-10 h-10" src={Logo} alt="Logo" />
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                {translate("universite")}
              </h1>
            </button>
            <button
              onClick={() => setOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-700"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-4 space-y-6 overflow-y-auto h-full pb-20">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white px-2">
                  {translate("navBar.filieres")}
                </h3>
                <div className="space-y-1">
                  {[
                    {
                      href: "/mention/agronomie",
                      key: "filiereSection.AGRO.name",
                    },
                    {
                      href: "/mention/informatique",
                      key: "filiereSection.INFO.name",
                    },
                    {
                      href: "/mention/droit",
                      key: "filiereSection.DROIT.name",
                    },
                    {
                      href: "/mention/economie",
                      key: "filiereSection.ECO.name",
                    },
                    {
                      href: "/mention/langue-etrangere-applique",
                      key: "filiereSection.LEA.name",
                    },
                    {
                      href: "/mention/science-de-la-terre",
                      key: "filiereSection.ST.name",
                    },
                  ].map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleFiliereClick(item.href)}
                      className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-all duration-200"
                    >
                      {translate(item.key)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={handleLinkClick}
                  activeClass="text-green-700 bg-green-50 dark:bg-green-950 font-medium"
                  className="block px-4 py-3 font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-all duration-200"
                >
                  {translate("navBar.contact")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
