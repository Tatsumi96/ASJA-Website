import { BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Footer } from './footer';
import { MentionDiapo, type MentionDiapoProps } from './mention-image-diapo';
import { Navbar } from './nav-bar-filiere';
import { motion, AnimatePresence } from 'framer-motion';

const TIME = 5000;

interface DescriptionParcours {
  title: string;
  description: string;
  categorieParcours: string;
  debouche: string;
}

interface Mention {
  name: string;
  ImageMention: string;
}

interface ShortDescription {
  titleEvent: string;
  descriptionEvent: string;
  RandomImage: string;
}

interface DescriptionMention {
  title: string;
  description: string;
}

interface DispositionAboutFiliereProps {
  mention: Mention;
  descriptionMention: DescriptionMention;
  descriptionParcours?: DescriptionParcours[];
  shortDescriptionList: ShortDescription[];
  mentionDiapoProps?: MentionDiapoProps[];
}

export const DispositionAboutFiliere = ({
  mention,
  descriptionMention,
  descriptionParcours,
  shortDescriptionList,
  mentionDiapoProps,
}: DispositionAboutFiliereProps) => {
  const [selectedParcours, setSelectedParcours] =
    useState<DescriptionParcours | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (shortDescriptionList.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shortDescriptionList.length);
    }, TIME);
    return () => clearInterval(interval);
  }, [shortDescriptionList.length]);

  const currentEvent = shortDescriptionList[currentIndex];

  const displayedTitle = selectedParcours
    ? selectedParcours.title
    : descriptionMention.title;
  const displayedDescription = selectedParcours
    ? selectedParcours.description
    : descriptionMention.description;
  const displayedDebouche = selectedParcours ? selectedParcours.debouche : null;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-zinc-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        {descriptionParcours && (
          <section className="py-16 sm:py-20 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-center"
              >
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl dark:text-white">
                  Explorez Nos Programmes
                </h2>
                <p className="mt-5 text-lg leading-7 text-gray-600 sm:text-xl dark:text-gray-300">
                  Choisissez une spécialisation pour découvrir les détails du
                  programme et les opportunités de carrière.
                </p>
              </motion.div>

              <div className="flex flex-wrap justify-center gap-4 mt-12">
                {descriptionParcours.map((parcours, index) => (
                  <motion.div
                    key={parcours.categorieParcours}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <button
                      onClick={() => setSelectedParcours(parcours)}
                      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out flex items-center gap-2 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-opacity-75 ${
                        selectedParcours?.categorieParcours ===
                        parcours.categorieParcours
                          ? 'bg-green-600 text-white shadow-lg scale-105 ring-green-500'
                          : 'bg-white text-gray-800 hover:bg-gray-100 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 shadow-md ring-transparent'
                      }`}
                    >
                      <GraduationCap size={20} />
                      <span className="truncate">
                        {parcours.categorieParcours}
                      </span>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section
          className={`py-12 sm:py-16 lg:py-20 ${
            mention.name === 'LANGUES ÉTRANGÈRES APPLIQUÉES'
              ? 'md:mt-20'
              : 'mt-10'
          }`}
        >
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-left"
              >
                <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl xl:text-6xl dark:text-white flex items-center gap-4">
                  <BookOpen size={40} className="text-green-500" />{' '}
                  {displayedTitle}
                </h2>
                <p className="mt-8 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                  {displayedDescription}
                </p>
                {displayedDebouche && (
                  <div className="mt-12 p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                      <Briefcase size={24} className="text-green-500" />{' '}
                      Débouchés Professionnels
                    </h3>
                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                      {displayedDebouche}
                    </p>
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative h-[500px] rounded-2xl shadow-2xl overflow-hidden"
              >
                <AnimatePresence initial={false}>
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <img
                      src={currentEvent?.RandomImage}
                      alt={currentEvent?.titleEvent}
                      className="object-cover object-center w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end bg-black/20">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-3xl font-bold text-white"
                      >
                        {currentEvent?.titleEvent}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-3 text-lg text-gray-200"
                      >
                        {currentEvent?.descriptionEvent}
                      </motion.p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {mentionDiapoProps && (
          <section className="py-12 sm:py-16 lg:py-20 bg-gray-100 dark:bg-zinc-800">
            <MentionDiapo props={mentionDiapoProps} />
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};
