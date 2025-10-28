import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
  categoriesQuestion: string;
}

const frequentlyAskedQuestions: FaqItem[] = [
  {
    question: "En cas de perte de Bordereau, que dois-je faire ?",
    answer: "Veuillez signaler au service des Etudiants.",
    categoriesQuestion: "Générale",
  },
  {
    question: "Il y a-t-il une politique de remboursement ?",
    answer: "oui",
    categoriesQuestion: "Générale",
  },
  {
    question: "Ou est situé le service des Etudiants ?",
    answer: "Le service des Etudiants se trouve au rez-de-chaussee.",
    categoriesQuestion: "Générale",
  },
  {
    question: "Quels sont les horaires d’ouverture du service des Étudiants ?",
    answer:
      "Le service des Étudiants est ouvert de 8h à 12h et de 13:30h à 15h.",
    categoriesQuestion: "Générale",
  },

  {
    question: "A quel heure commence le cours ?",
    answer: "Le cours commence à 8h.",
    categoriesQuestion: "Enseignement",
  },
  {
    question: "Ces quoi systeme LMD ?",
    answer: "le systeme LMD est un systeme d enseignement.",
    categoriesQuestion: "Enseignement",
  },

  {
    question: "Comment s’inscrire ?",
    answer: "Allez sur la page d’inscription et remplissez le formulaire.",
    categoriesQuestion: "Inscription",
  },
  {
    question: "Quels documents sont nécessaires ?",
    answer: "Une pièce d’identité et une photo d’identité récente.",
    categoriesQuestion: "Inscription",
  },

  {
    question: "Il y a t il une cantine ?",
    answer: "Oui, les cantines sont ouvertes tous les jours.",
    categoriesQuestion: "Autres",
  },
  {
    question: "Il y a t il un liue ou habite si on vien de l’exterieur ?",
    answer: "Oui, il existe plusieur cite universitaire au alentours.",
    categoriesQuestion: "Autres",
  },
];

const categoriesQuestion = [
  "Générale",
  "Enseignement",
  "Inscription",
  "Autres",
];

export const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState("Générale");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const filteredFaqs = frequentlyAskedQuestions.filter(
    (faq) => faq.categoriesQuestion === activeCategory
  );

  return (
    <section
      id="FAQ"
      className=" bg-white dark:bg-zinc-900 transition-all duration-500"
    >
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
        className="flex flex-col w-screen px-5 md:px-20 py-20 text-gray-800 dark:text-gray-200"
      >
        <h1 className="md:text-5xl text-4xl text-green-700 font-extrabold text-center mb-16">
          Foire Aux Questions
        </h1>
        <div className="flex flex-col md:flex-row items-start justify-center md:gap-16 gap-5 lg:gap-30 max-w-6xl mx-auto">
          <div className="flex flex-col gap-5 w-full md:w-[250px] border-2 p-10 rounded-xl flex-shrink-0">
            <h2 className="text-2xl text-center font-bold mb-2">Catégories</h2>
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
                    ? "text-green-600 bg-green-100 transition-all duration-500 dark:bg-green-950 shadow-md"
                    : "text-gray-500 hover:text-zinc-900 hover:bg-gray-100 transition-all duration-500 dark:hover:text-zinc-400 dark:hover:bg-zinc-950"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex border flex-col flex-1 p-10 h-104 lg:w-180 transition-all duration-500 bg-gray-100 dark:bg-zinc-900 rounded-xl gap-6 min-h-[300px] overflow-y-scroll">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className=" bg-white dark:bg-zinc-800  dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-500"
                >
                  <button
                    className="flex justify-between items-center w-full text-left transition-all duration-500 font-semibold text-lg text-gray-800 dark:text-gray-100"
                    onClick={() =>
                      setOpenQuestion(
                        openQuestion === faq.question ? null : faq.question
                      )
                    }
                  >
                    {faq.question}
                    <ChevronDown
                      size={22}
                      className={`transition-transform cursor-pointer duration-300 ${
                        openQuestion === faq.question
                          ? "rotate-180 text-green-600"
                          : "text-zinc-500"
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openQuestion === faq.question
                        ? "max-h-40 mt-4"
                        : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600 transition-all duration-500 dark:text-gray-300 leading-relaxed">
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
      </motion.div>
    </section>
  );
};
