import Logo from '@/assets/Logo/asja-logo.png';
import { useTheme } from '@/page/theme/useTheme';
import { LogOut, Moon, Sun } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudentPortalContext } from '../bloc/useStudentSpaceContext';
import { BottomBar } from './bottom-bar';
import { motion } from 'framer-motion';

export const NavBar = ({
  callBack,
  index,
}: {
  callBack: Dispatch<SetStateAction<number>>;
  index: number;
}) => {
  const { toggleTheme, isDark } = useTheme();
  const { logOut } = useStudentPortalContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut(navigate);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
      >
        <div className="flex justify-between items-center w-full h-16 px-4 bg-white dark:bg-zinc-800 rounded-full shadow-md">
          <a href="/" className="flex items-center gap-3">
            <img src={Logo} className="h-10 w-10" alt="ASJA Logo" />
            <h1 className="hidden md:block text-gray-800 dark:text-white font-bold text-lg">
              Université ASJA
            </h1>
          </a>
          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="p-2 rounded-full text-red-500 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
              onClick={handleLogout}
              aria-label="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Bottom Navigation Bar for Mobile */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 z-50">
        <BottomBar callBack={callBack} index={index} />
      </div>
    </>
  );
};
