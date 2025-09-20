import Logo from "@/assets/Logo/asja-logo.png";
import { useAuth } from "./hooks/useAuth";

export const LogInSection = () => {
  const { logIn, setMatricule, setPassword } = useAuth();
  return (
    <div className="flex justify-center items-center w-full h-screen bg-white">
      <a onClick={() => (window.location.href = "/")}>
        <div className="flex m-2 rounded-full top-3 left-10 fixed">
          <img src={Logo} className="w-13 h-13" />
          <h1 className="text-gray-900 font-bold ml-4 py-3 pr-4">
            ASJA University
          </h1>
        </div>
      </a>
      <div className="flex w-1/2 h-screen flex-col justify-center items-center">
        <div className="p-10 bg-white">
          <h1 className="text-4xl p-5 font-bold text-gray-800">
            Espace etudiant
          </h1>
          <p className="pl-5 pb-5 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="flex w-1/2 h-screen justify-center items-center">
        <div className="flex-col w-100 justify-center items-center p-10">
          <h1 className="flex justify-center mb-5 text-2xl font-bold text-gray-800">
            Connexion
          </h1>
          <label>Matricule</label>
          <input
            className="flex w-full mb-5 border-gray-300 border-2 focus:ring-0 focus:outline-none rounded-md p-2.5"
            type="number"
            onChange={(e) => setMatricule(e.target.value)}
          />
          <label>Mot de passe</label>
          <input
            className="flex w-full mb-5 border-gray-300 border-2 focus:ring-0 focus:outline-none rounded-md p-2.5"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="flex w-full justify-center focus:bg-gray-600 hover:bg-gray-600 shadow-lg shadow-gray-400 hover:scale-101 duration-300 rounded-full cursor-pointer bg-gray-900 text-yellow-500 p-3.5"
            onClick={logIn}
          >
            se connecter
          </button>
          <div className="flex justify-center">
            <hr className="flex  w-1/2 border-yellow-800 m-5" />
          </div>
          <div className="flex justify-center text-sm">
            <span className="">Pas encore Etudiant ?</span>
          </div>
          <a className="flex justify-center cursor-pointer mt-2  text-yellow-800 hover:underline text-md ">
            S'inscrire
          </a>
        </div>
      </div>
    </div>
  );
};
