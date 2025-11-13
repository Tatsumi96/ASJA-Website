import backgroundImage from '@/assets/Lieu_espace/Asja-devant-quality-2.jpg';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Description = () => {
  const scrollToFiliere = () => {
    const filiereSection = document.getElementById('filiere');
    if (filiereSection) {
      filiereSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="description"
      className="relative h-screen w-full flex items-center justify-center text-white"
    >
      <div className="absolute inset-0 w-full h-full -z-20">
        <img
          src={backgroundImage}
          alt="Façade de l'entrée principale de l'université ASJA"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 -z-10"></div>

      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg"
        >
          Athénée Saint Joseph Antsirabe
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-md"
        >
          Une université catholique ouverte à tous, offrant une formation
          d'excellence pour un avenir brillant.
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-10"
        >
          <Button
            onClick={scrollToFiliere}
            size="lg"
            className="bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Découvrir nos formations
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
