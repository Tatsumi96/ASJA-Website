import { BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Footer } from './footer';
import { MentionDiapo, type MentionDiapoProps } from './mention-image-diapo';
import { Navbar } from './nav-bar-filiere';

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
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-900">
      <Navbar />

      <main className="flex-grow">
        {descriptionParcours && (
          <section className="py-12 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl dark:text-white">
                  Explorez Nos Programmes
                </h2>
                <p className="mt-4 text-base leading-7 text-gray-600 sm:text-xl dark:text-gray-300">
                  Choisissez une spécialisation pour découvrir les détails du
                  programme et les opportunités de carrière.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-10">
                {descriptionParcours.map((parcours) => (
                  <button
                    key={parcours.categorieParcours}
                    onClick={() => setSelectedParcours(parcours)}
                    className={`
                      px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 ease-in-out
                      flex items-center gap-2 transform hover:-translate-y-1
                      ${
                        selectedParcours?.categorieParcours ===
                        parcours.categorieParcours
                          ? 'bg-green-700 shadow-lg'
                          : 'bg-green-600 hover:bg-green-700 shadow-md'
                      }
                    `}
                  >
                    <GraduationCap size={20} />
                    <span className="truncate">
                      {parcours.categorieParcours}
                    </span>
                  </button>
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
            <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16">
              <div className="text-left">
                <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl dark:text-white flex items-center gap-3">
                  <BookOpen size={30} /> {displayedTitle}
                </h2>
                <p className="mt-6 text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                  {displayedDescription}
                </p>
                {displayedDebouche && (
                  <div className="mt-10">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                      <Briefcase size={24} /> Débouchés Professionnels
                    </h3>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                      {displayedDebouche}
                    </p>
                  </div>
                )}
              </div>

              <div className="relative group">
                <div className="overflow-hidden rounded-lg">
                  <img
                    key={currentEvent.RandomImage}
                    src={currentEvent.RandomImage}
                    alt={currentEvent.titleEvent}
                    className="object-cover w-full h-full transition-all duration-700 ease-in-out transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white">
                    {currentEvent.titleEvent}
                  </h3>
                  <p className="mt-2 text-lg text-gray-200">
                    {currentEvent.descriptionEvent}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {mentionDiapoProps && (
          <section className="py-12 sm:py-16 lg:py-20">
            <MentionDiapo props={mentionDiapoProps} />
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};
