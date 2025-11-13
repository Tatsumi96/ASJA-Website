import { motion } from 'framer-motion';
import { CardEventSection } from './card-event';

export const EvenementSection = () => {
  return (
    <div
      id="events"
      className="w-full bg-gray-50 dark:bg-zinc-900 transition-all duration-500 z-20 border-b-2 border-gray-200 dark:border-zinc-800"
    >
      <section className="py-16 md:py-24 w-full">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ amount: 0.2, once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-green-700 dark:text-green-500 font-bold text-4xl md:text-5xl">
            NOS ÉVÉNEMENTS
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Découvrez les moments forts qui animent la vie de notre campus.
          </p>
        </motion.div>
        <CardEventSection />
      </section>
    </div>
  );
};
