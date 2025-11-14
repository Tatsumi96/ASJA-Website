import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useLangue } from '@/page/lang/useLang';
import { easeInOut, motion } from 'framer-motion';
import { ArrowRight, LoaderCircle, Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: easeInOut,
    },
  }),
};

export const LoginForm = () => {
  const {
    logIn,
    setMatricule,
    setPassword,
    isAdmin,
    toggleIsAdmin,
    isLoading,
  } = useAuth();
  const { translate } = useLangue();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!isLoading) {
      logIn(navigate);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <motion.h2
        custom={0}
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="text-3xl font-bold text-center text-white drop-shadow-lg"
      >
        {translate('loginPage.seConnecter')}
      </motion.h2>
      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="relative"
      >
        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
        <input
          className="w-full pl-12 pr-4 py-3 bg-white/20 dark:bg-black/20 text-white placeholder-gray-300 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          type="number"
          placeholder={translate('loginPage.matricule')}
          onChange={(e) => setMatricule(parseInt(e.target.value))}
        />
      </motion.div>
      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="relative"
      >
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
        <input
          className="w-full pl-12 pr-4 py-3 bg-white/20 dark:bg-black/20 text-white placeholder-gray-300 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          type="password"
          placeholder={translate('loginPage.mdp')}
          onChange={(e) => setPassword(e.target.value)}
        />
      </motion.div>
      <motion.div
        custom={3}
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="flex items-center gap-3"
      >
        <Checkbox
          id="isAdmin"
          className="cursor-pointer border-gray-300"
          checked={isAdmin}
          onCheckedChange={toggleIsAdmin}
        />
        <label
          htmlFor="isAdmin"
          className="cursor-pointer text-gray-200 select-none"
        >
          Administrateur
        </label>
      </motion.div>

      <motion.div
        custom={4}
        initial="hidden"
        animate="visible"
        variants={formVariants}
      >
        <Button
          onClick={handleLogin}
          size="lg"
          disabled={isLoading}
          className="bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full flex items-center justify-center"
        >
          {isLoading ? (
            <LoaderCircle className="animate-spin h-5 w-5" />
          ) : (
            <>
              {translate('loginPage.seConnecter')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </motion.div>

      <motion.div
        custom={5}
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="text-center text-sm text-gray-300"
      >
        {translate('loginPage.question')}{' '}
        <a href="#" className="font-bold text-green-400 hover:underline">
          {translate('loginPage.inscription')}
        </a>
      </motion.div>
    </div>
  );
};
