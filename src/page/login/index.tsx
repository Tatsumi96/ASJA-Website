import asjaDark from '@/assets/Asja-dark-quality.jpg';
import backgroundImage from '@/assets/Lieu_espace/Asja-devant-quality-2.jpg';
import { motion } from 'framer-motion';
import { useLangue } from '../lang/useLang';
import { useThemeContext } from '../theme/useThemeContext';
import { ThemeProvider } from '../theme/useThemeProvider';
import { LoginForm } from './components/login-form';
import { LoginHeader } from './components/login-header';

const LoginContent = () => {
  const { translate } = useLangue();
  const { isDark } = useThemeContext();

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white">
      <div className="absolute inset-0 w-full h-full -z-20">
        <img
          src={isDark ? asjaDark : backgroundImage}
          alt="Façade de l'entrée principale de l'université ASJA"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 -z-10"></div>
      <LoginHeader />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg"
          >
            {translate('loginPage.espaceTitle')}
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-4 max-w-lg mx-auto lg:mx-0 text-lg text-gray-200 drop-shadow-md"
          >
            {translate('loginPage.description')}
          </motion.p>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full max-w-md mx-auto"
        >
          <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
            <LoginForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const LogInSection = () => {
  return (
    <ThemeProvider>
      <LoginContent />
    </ThemeProvider>
  );
};
