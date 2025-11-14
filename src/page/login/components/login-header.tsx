import Logo from '@/assets/Logo/asja-logo.png';
import { useLangue } from '@/page/lang/useLang';
import { useTheme } from '@/page/theme/useTheme';
import { Moon, Sun } from 'lucide-react';

export const LoginHeader = () => {
  const { toggleTheme, isDark } = useTheme();
  const { translate, toggleLang, isEn } = useLangue();
  return (
    <div className="flex justify-between w-full top-3 fixed md:px-5 px-2 z-20">
      <a
        className=" cursor-pointer"
        onClick={() => (window.location.href = '/')}
      >
        <div className="flex items-center m-2 rounded-full ">
          <img src={Logo} className="w-12 h-12" />
          <h1 className="text-white font-bold ml-4 text-lg drop-shadow-md">
            {translate('universite')}
          </h1>
        </div>
      </a>
      <div className="flex items-center">
        <button
          className="md:px-5 text-white font-semibold cursor-pointer drop-shadow-md"
          onClick={toggleLang}
        >
          {isEn ? 'FR' : 'EN'}
        </button>
        <button
          className="px-5 text-white cursor-pointer drop-shadow-md"
          onClick={toggleTheme}
        >
          {isDark ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
};
