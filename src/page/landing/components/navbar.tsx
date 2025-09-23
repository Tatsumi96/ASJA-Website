import { NavLink } from "react-router-dom";
import { MenuIcon, Moon, Sun, X } from "lucide-react";
import Logo from "@/assets/Logo/asja-logo.png";
import { useEffect, useState } from "react";
import { useTheme } from "@/page/theme/useTheme";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 500) setOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { toggleTheme, isDark } = useTheme();

  return (
    <div className="md:flex md:flex-row flex flex-col  lg:px-5 px-2 py-4 lg:py-0 justify-between top-0 fixed w-full shadow-sm bg-white dark:bg-zinc-800 text-black border-b-gray-300 z-50">
      <div className="flex w-full md:w-auto justify-between items-center">
        <a
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <img className=" w-10 h-10" src={Logo} />
          <h1 className=" flex items-center justify-center text-md text-gray-900 dark:text-white font-bold">
            Université ASJA
          </h1>
        </a>
        <button
          onClick={() => setOpen((value) => !value)}
          className=" flex md:hidden justify-center items-center text-green-700 dark:text-white pr-5 cursor-pointer hover:scale-110 hover:text-green-700/50 transition-all duration-500"
        >
          {open ? <X /> : <MenuIcon />}
        </button>
      </div>
      <div className="md:flex  justify-center items-center hidden ">
        <button
          className="px-5 text-green-700 cursor-pointer"
          onClick={toggleTheme}
        >
          {isDark ? <Sun /> : <Moon />}
        </button>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-green-700 dark:bg-zinc-700 bg-green-50  px-4 py-6 font-medium"
              : "text-gray-800 dark:text-white hover:text-stone-500 px-4 py-6"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-green-700 dark:bg-zinc-700 bg-green-50 px-4 py-2 font-medium"
              : "text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded"
          }
        >
          A propos
        </NavLink>
        <NavLink
          to="/programmes"
          className={({ isActive }) =>
            isActive
              ? "text-green-700 dark:bg-zinc-700 bg-green-50 px-4 py-2 font-medium"
              : "text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded"
          }
        >
          Programmes
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-green-700 dark:bg-zinc-700 bg-green-50 px-4 py-2 font-medium"
              : "text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded"
          }
        >
          Contact
        </NavLink>

        <a onClick={() => (window.location.href = "/Login")}>
          <div
            className="px-6 py-3 my-1 ml-3 text-white font-bold bg-green-700
                           rounded-full cursor-pointer hover:bg-green-800 
                           hover:scale-105 duration-300"
          >
            Postuler
          </div>
        </a>
        <a onClick={() => (window.location.href = "/Login")}></a>
      </div>

      {open ? (
        <div className="md:hidden flex flex-col  justify-center items-center ">
          <button
            className="py-5 text-green-700 cursor-pointer"
            onClick={toggleTheme}
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-700 dark:bg-zinc-700 bg-green-50 px-4 py-6 font-medium"
                : "text-gray-800 dark:text-white hover:text-stone-500 px-4 py-6"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-green-700 dark:bg-zinc-700 bg-green-50 px-4 py-2 font-medium"
                : "text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded"
            }
          >
            A propos
          </NavLink>

          <NavLink
            to="/programmes"
            className={({ isActive }) =>
              isActive
                ? "text-green-700 dark:bg-zinc-700 bg-green-50 px-4 py-2 font-medium"
                : "text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded"
            }
          >
            Programmes
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-green-700 dark:bg-zinc-700 bg-green-50 px-4 py-2 font-medium"
                : "text-gray-800 dark:text-white hover:text-stone-500 px-4 py-2 rounded"
            }
          >
            Contact
          </NavLink>

          <a onClick={() => (window.location.href = "/Login")}>
            <div
              className="px-6 py-3 my-1 ml-3 text-white font-bold bg-green-700
                           rounded-full cursor-pointer hover:bg-green-800 
                           hover:scale-105 duration-300"
            >
              Postuler
            </div>
          </a>
          <a onClick={() => (window.location.href = "/Login")}></a>
        </div>
      ) : null}
    </div>
  );
};
