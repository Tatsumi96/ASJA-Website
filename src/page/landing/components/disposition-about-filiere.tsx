import { BookOpen, Briefcase, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";
import { Footer } from "./footer";
import { Navbar } from "./nav-bar-filiere";
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
}

export const DispositionAboutFiliere = ({
  mention,
  descriptionMention,
  descriptionParcours,
  shortDescriptionList,
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
    <div className="flex flex-col overflow-x-hidden dark:bg-zinc-900 bg-gray-50">
      <Navbar />

      {descriptionParcours && (
        <div className="flex mt-30 justify-center sm:flex-col md:flex-row px-6">
          <div className="flex flex-col justify-center items-center w-full max-w-4xl rounded-2xl py-6 px-4">
            <div className="flex flex-wrap justify-center gap-4 w-full ">
              {descriptionParcours?.map((parcours) => (
                <button
                  key={parcours.categorieParcours}
                  onClick={() => setSelectedParcours(parcours)}
                  className={`px-6 py-3 rounded-full text-white cursor-pointer font-semibold transition-transform duration-200 hover:scale-105 flex items-center gap-2 ${
                    selectedParcours?.categorieParcours ===
                    parcours.categorieParcours
                      ? "bg-green-800"
                      : "bg-green-700 hover:bg-green-800"
                  }`}
                >
                  <GraduationCap size={20} />
                  {parcours.categorieParcours}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div
        className={`${mention.name === "LANGUES ÉTRANGÈRES APPLIQUÉES" ? "md:mt-50 mt-25" : "mt-10"} flex flex-col md:flex-row justify-center items-start gap-10 mt-12 px-6`}
      >
        <div className="flex-1  mb-10 max-w-2xl bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 text-left transition-all duration-500">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-200 mb-4 flex items-center gap-3">
            <BookOpen size={30} /> {displayedTitle}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xl">
            {displayedDescription}
          </p>
          {displayedDebouche && (
            <>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-200 mt-5 flex items-center gap-3">
                <Briefcase size={30} /> Debouche professionel
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xl">
                {displayedDebouche}
              </p>
            </>
          )}
        </div>

        <div className="flex-1 max-w-md dark:bg-zinc-800 p-6 text-left relative overflow-hidden transition-all duration-700 mb-10">
          <img
            key={currentEvent.RandomImage}
            src={currentEvent.RandomImage}
            alt={currentEvent.titleEvent}
            className="object-cover rounded-lg mb-4 transition-opacity duration-700"
          />

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-300 mb-3">
            {currentEvent.titleEvent}
          </h2>
          <p className="text-gray-700 dark:text-white text-lg mb-4">
            {currentEvent.descriptionEvent}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};
