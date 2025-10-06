import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  categoriesQuestion: string;
}

const frequentlyAskedQuestions: FaqItem[] = [
  
  { question: "En cas de perte de Bordereau, que dois-je faire ?", answer: "Veuillez signaler au service des Etudiants.", categoriesQuestion: "Générale" },
  { question: "Il y a-t-il une politique de remboursement ?", answer: "oui", categoriesQuestion: "Générale" },  
  { question: "Ou est situé le service des Etudiants ?", answer: "Le service des Etudiants se trouve au 1er Etage.", categoriesQuestion: "Générale" },

 
  { question: "A quel heure commence le cours ?", answer: "Le cours commence à 8h.", categoriesQuestion: "Enseignement" },
  { question: "Ces quoi systeme LMD ?", answer: "le systeme LMD est un systeme d enseignement.", categoriesQuestion: "Enseignement" },
  

 
  { question: "Comment s’inscrire ?", answer: "Allez sur la page d’inscription et remplissez le formulaire.", categoriesQuestion: "Inscription" },
  { question: "Quels documents sont nécessaires ?", answer: "Une pièce d’identité et une photo d’identité récente.", categoriesQuestion: "Inscription" },

 
  { question: "Il y a t il une cantine ?", answer: "Oui, les cantines sont ouvertes tous les jours.", categoriesQuestion: "Autres" },
  { question: "Il y a t il un liue ou habite si on vien de l’exterieur ?", answer: "Oui, il existe plusieur cite universitaire au alentours.", categoriesQuestion: "Autres" },
];

const categoriesQuestion = ["Générale", "Enseignement", "Inscription", "Autres"];

export const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState("Générale");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const filteredFaqs = frequentlyAskedQuestions.filter((faq) => faq.categoriesQuestion === activeCategory);

  return (
    <div className="flex flex-col w-full px-10 md:px-20 py-20 bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200">
    
      <h1 className="text-5xl font-extrabold text-center mb-16">
        Foire Aux Questions
      </h1>

      <div className="flex flex-col md:flex-row items-start justify-center gap-16 max-w-6xl mx-auto">
        
       
        <div className="flex flex-col gap-5 w-full md:w-[250px] flex-shrink-0">
          <h2 className="text-2xl font-bold mb-2">Catégories</h2>
          {categoriesQuestion.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenQuestion(null);
              }}
              className={`text-left font-semibold text-lg px-5 py-3 rounded-lg transition-all duration-200 
                ${
                  activeCategory === cat
                    ? "text-blue-600 bg-blue-100 dark:bg-blue-950 shadow-md"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-zinc-800"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

      
        <div className="flex flex-col flex-1 gap-6 min-h-[300px]">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <div
                key={faq.question}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <button
                  className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800 dark:text-gray-100"
                  onClick={() =>
                    setOpenQuestion(openQuestion === faq.question ? null : faq.question)
                  }
                >
                  {faq.question}
                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      openQuestion === faq.question ? "rotate-180 text-blue-600" : "text-gray-500"
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openQuestion === faq.question ? "max-h-40 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center italic">
              Aucune question disponible pour cette catégorie.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
