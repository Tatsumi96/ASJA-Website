import { useState, useEffect } from "react";
import { Navbar } from "./nav-bar";
import { Footer } from "./footer";
const TIME = 5000;
interface DescriptionParcours {
  title: string;
  description: string;
  categorieParcours: string;
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
  descriptionParcours: DescriptionParcours[];
  shortDescriptionList: ShortDescription[];
}

export const DispositionAboutFiliere = ({
  mention,
  descriptionMention,
  descriptionParcours,
  shortDescriptionList,
}: DispositionAboutFiliereProps) => {
  const [selectedParcours, setSelectedParcours] = useState<DescriptionParcours | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shortDescriptionList.length);
    }, TIME);
    return () => clearInterval(interval);
  }, [shortDescriptionList.length]);

  const currentEvent = shortDescriptionList[currentIndex];

  const displayedTitle = selectedParcours ? selectedParcours.title : descriptionMention.title;
  const displayedDescription = selectedParcours
    ? selectedParcours.description
    : descriptionMention.description;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

    
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        <img
          src={mention.ImageMention}
          alt={mention.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            {mention.name}
          </h1>
        </div>
      </div>

     
      <div className="flex justify-center sm:flex-col md:flex-row mt-10 px-6">
        <div className="flex flex-col justify-center items-center w-full max-w-4xl bg-white rounded-2xl py-6 px-4 shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Parcours</h2>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {descriptionParcours.map((parcours) => (
              <button
                key={parcours.categorieParcours}
                onClick={() => setSelectedParcours(parcours)}
                className={`px-6 py-3 rounded-full text-white font-semibold transition-transform duration-200 hover:scale-105 ${
                  selectedParcours?.categorieParcours === parcours.categorieParcours
                    ? "bg-green-800"
                    : "bg-green-700 hover:bg-green-800"
                }`}
              >
                {parcours.categorieParcours}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10 mt-12 px-6">
      
        <div className="flex-1 max-w-2xl bg-white rounded-2xl shadow-lg p-8 text-left transition-all duration-500">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {displayedTitle}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {displayedDescription}
          </p>
        </div>

      
        <div className="flex-1 max-w-md bg-white rounded-2xl shadow-lg p-6 text-left relative overflow-hidden transition-all duration-700 mb-10">
          <img
            key={currentEvent.RandomImage}
            src={currentEvent.RandomImage}
            alt={currentEvent.titleEvent}
            className="w-full h-64 object-cover rounded-lg mb-4 transition-opacity duration-700"
          />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {currentEvent.titleEvent}
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            {currentEvent.descriptionEvent}
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 font-semibold text-lg hover:text-green-700 transition-transform duration-300 hover:scale-105"
          >
            Inscription →
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};
