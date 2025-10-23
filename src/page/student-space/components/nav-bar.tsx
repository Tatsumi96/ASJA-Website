import Logo from '@/assets/Logo/asja-logo.png';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/page/theme/useTheme';
import { MdExitToApp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useStudentPortalContext } from '../bloc/useStudentSpaceContext';

export const NavBar = () => {
  const { toggleTheme, isDark } = useTheme();
  const { logOut } = useStudentPortalContext();

  const navigate = useNavigate();
  const handleLogout = () => {
    logOut(navigate);
  };
  return (
    <div className="flex justify-between top-0 py-3 px-4 fixed w-full text-gray-800 z-50">
      <a
        className=" cursor-pointer"
        onClick={() => (window.location.href = '/')}
      >
        <div className="flex m-1 rounded-full ">
          <img src={Logo} className="md:size-13 size-10 " />
          <h1 className="text-gray-800 font-bold  md:flex ml-4 py-3 pr-4 transition-all duration-500 dark:text-white">
            Universté ASJA
          </h1>
        </div>
      </a>
      <div className="flex justify-center items-center">
        <button
          className="px-5 text-green-700 cursor-pointer"
          onClick={toggleTheme}
        >
          {isDark ? <Sun /> : <Moon />}
        </button>
        <button
          className="px-5 text-green-700 cursor-pointer"
          onClick={handleLogout}
        >
          <MdExitToApp className="text-2xl text-red-600" />
        </button>
      </div>
    </div>
  );
};
