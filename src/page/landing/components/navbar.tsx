import { NavLink } from 'react-router-dom'
import Logo from "@/assets/Logo/asja-logo.png";


export const Navbar = () => {
  return (
    <div className="flex top-0 fixed w-full shadow-md bg-white text-gray-800 z-50">
      <a
        className="flex ml-10 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <img className="m-2 w-14 h-14" src={Logo} />
        <h1 className="py-5 mt-1 text-gray-900 font-bold">ASJA University</h1>
      </a>
      <div className="flex fixed justify-center items-center right-10 ">
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


            <a onClick={() => window.location.href = '/Login'}>
              <div 
                className='px-6 py-4 my-1 ml-3 text-white font-bold bg-green-700
                           rounded-full cursor-pointer hover:bg-green-800 
                           hover:scale-105 duration-300'
                >
                Postuler
            </div></a>
        <a onClick={() => (window.location.href = "/Login")}>
        </a>
      </div>
    </div>
  );
};
