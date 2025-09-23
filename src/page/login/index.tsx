import Logo from "@/assets/Logo/asja-logo.png";

import { useAuth } from "./hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../theme/useTheme";
import { Moon, Sun } from "lucide-react";

export const LogInSection = () => {
  const { logIn, setMatricule, setPassword } = useAuth();
  const { toggleTheme, isDark } = useTheme();
  const navigate = useNavigate();
  const handleLogin = () => {
    logIn(navigate);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full text-gray-800  bg-white dark:bg-zinc-900">
      <div className="w-full flex justify-between px-2 md:px-5">
        <a onClick={() => (window.location.href = "/")}>
          <div className="flex m-2 rounded-full ">
            <img src={Logo} className="w-13 h-13" />
            <h1 className="text-gray-800 font-bold ml-4 py-3 pr-4 dark:text-white">
              ASJA University
            </h1>
          </div>
        </a>
        <button
          className="px-5 text-green-700 cursor-pointer"
          onClick={toggleTheme}
        >
          {isDark ? <Sun /> : <Moon />}
        </button>
      </div>
      <div className=" flex">
        <div className="lg:flex w-1/2 h-screen hidden flex-col justify-center items-center">
          <div className="pb-20 px-5">
            <h1 className="text-4xl p-5 font-bold text-green-700">
              Espace etudiant
            </h1>
            <p className="pl-5 pb-5 text-lg dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex lg:w-1/2 w-full h-screen justify-center items-center">
          <div className="flex-col  justify-center items-center p-10">
            <h1 className="flex justify-center text-center items-center mb-5 pr-4 text-4xl font-bold text-green-700">
              Connexion
            </h1>
            <label className="dark:text-white">Matricule</label>
            <input
              className="flex w-full mb-5 dark:text-white border-gray-300 border-2 focus:ring-0 focus:outline-none rounded-md p-2.5"
              type="number"
              onChange={(e) => setMatricule(parseInt(e.target.value))}
            />
            <label className="dark:text-white">Mot de passe</label>
            <input
              className="flex w-full mb-5 dark:text-white border-gray-300 border-2 focus:ring-0 focus:outline-none rounded-md p-2.5"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="flex w-full justify-center focus:bg-green-800 hover:bg-green-800 shadow-lg hover:scale-101 duration-300 rounded-full cursor-pointer bg-green-700 text-white p-3.5"
              onClick={handleLogin}
            >
              se connecter
            </button>
            <div className="flex justify-center">
              <hr className="flex  w-1/2 border-green-700 m-5" />
            </div>
            <div className="flex justify-center text-sm">
              <span className="dark:text-white">Pas encore Etudiant ?</span>
            </div>
            <a className="flex justify-center cursor-pointer mt-2  text-green-700 hover:underline text-md ">
              S'inscrire
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
