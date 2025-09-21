import { NavLink } from "react-router-dom";
import { MenuIcon } from "lucide-react";

import Logo from "@/assets/Logo/asja-logo.png";
export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 500) setOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex lg:px-5 px-2 py-4 lg:py-0 justify-between top-0 fixed w-full shadow-sm bg-white text-black border-b-gray-300 z-50">
      <a
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <img className=" w-10 h-10" src={Logo} />
        <h1 className=" flex items-center justify-center text-md text-gray-900 font-bold">
          Université ASJA
        </h1>
      </a>
      <button className=" flex md:hidden justify-center items-center text-green-700 pr-5 cursor-pointer hover:scale-110 hover:text-green-700/50 transition-all duration-500">
        <MenuIcon />
      </button>
      <div className="md:flex  justify-center items-center hidden ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-green-700 bg-green-50 px-4 py-6 rounded font-medium"
              : "text-gray-800 hover:text-stone-500 px-4 py-6"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-green-700 bg-green-50 px-4 py-2 rounded font-medium"
              : "text-gray-800 hover:text-stone-500 px-4 py-2 rounded"
          }
        >
          A propos
        </NavLink>
        <NavLink
          to="/programmes"
          className={({ isActive }) =>
            isActive
              ? "text-green-700 bg-green-50 px-4 py-2 rounded font-medium"
              : "text-gray-800 hover:text-stone-500 px-4 py-2 rounded"
          }
        >
          Programmes
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-green-700 bg-green-50 px-4 py-2 rounded font-medium"
              : "text-gray-800 hover:text-stone-500 px-4 py-2 rounded"
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
    </div>
  );
};
