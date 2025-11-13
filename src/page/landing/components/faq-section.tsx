import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => (
  <div className="border-b border-gray-200 dark:border-gray-700 py-4">
    <button
      className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800 dark:text-gray-100"
      onClick={onClick}
    >
      <span>{question}</span>
      <ChevronDown
        size={24}
        className={`transform transition-transform duration-300 ${
          isOpen ? 'rotate-180 text-green-600' : 'text-gray-500'
        }`}
      />
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="overflow-hidden"
    >
      <p className="pt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
        {answer}
      </p>
    </motion.div>
  </div>
);

interface FaqData {
  question: string;
  answer: string;
  category: string;
}

const frequentlyAskedQuestions: FaqData[] = [
  {
    question: 'Où se trouve l’ASJA ?',
    answer: 'Il existe des universités ASJA à Antsirabe et Antsohihy.',
    category: 'Générale',
  },
  {
    question: 'Combien coûtent les frais de scolarité à l’ASJA ?',
    answer: 'Les coûts varient selon le niveau d’études (L1, L2, L3, M1, M2).',
    category: 'Générale',
  },
  {
    question: 'Les diplômes de l’ASJA sont-ils reconnus ?',
    answer:
      'Oui, les diplômes délivrés par l’ASJA sont reconnus par le MESupReS de Madagascar.',
    category: 'Générale',
  },
  {
    question: 'Quels sont les horaires d’ouverture du service des Étudiants ?',
    answer:
      'Le service des Étudiants est ouvert de 8h à 12h et de 13:30h à 15h.',
    category: 'Générale',
  },
  {
    question: "C'est quoi systeme LMD ?",
    answer:
      'Licence-Master-Doctorat est un modèle universitaire international fondé sur 3 niveaux de formation : Licence (3 ans), Master (2 ans), Doctorat (3 ans). Chaque année d’étude correspond à 60 crédits ECTS, permettant une validation progressive des acquis.',
    category: 'Enseignement',
  },
  {
    question: 'Pourquoi l’ASJA suit ce système ?',
    answer:
      'Ce système rend les diplômes reconnus à l’international et favorise la mobilité des étudiants.',
    category: 'Enseignement',
  },
  {
    question: 'Comment s’inscrire à l’ASJA?',
    answer:
      'Vous pouvez vous inscrire en allant au bureau du service de scolarité à l’ASJA.',
    category: 'Inscription',
  },
  {
    question: 'Quels sont les documents à fournir pour l’inscription ?',
    answer:
      '1 photocopie légalisée du bulletin de notes Terminale, 1 photocopie légalisée du bulletin de notes du BACC, 1 bulletin de naissance, 2 photos d’identité + 1 numérique, 1 photo buste, 1 enveloppe timbrée avec adresse exacte des parents, 1 lettre de motivation, 1 enveloppe A4, 1 photocopie CIN.',
    category: 'Inscription',
  },
  {
    question: 'Il y a t il une cantine ?',
    answer:
      'Oui, l’ASJA dispose de 2 cafétérias ouvertes du Lundi au Samedi pour les besoins alimentaires des étudiants.',
    category: 'Autres',
  },
  {
    question: 'Y a-t-il des activités sportives ?',
    answer:
      'Oui, l’ASJA comprend divers clubs de sport (volleyball, football et basketball), organise chaque année un tournoi inter-filières et participe également aux tournois interuniversitaires.',
    category: 'Autres',
  },
  {
    question: 'Il y a t il une logement ?',
    answer:
      'Oui, l’ASJA dispose de logements pour les étudiants, offrant un cadre de vie propice à l"étude et à l"épanouissement personnel.',
    category: 'Autres',
  },
];

const categories = ['Générale', 'Enseignement', 'Inscription', 'Autres'];

export const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState('Générale');
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    frequentlyAskedQuestions.find((faq) => faq.category === 'Générale')
      ?.question || null
  );

  const filteredFaqs = frequentlyAskedQuestions.filter(
    (faq) => faq.category === activeCategory
  );

  return (
    <section id="FAQ" className="bg-white dark:bg-zinc-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-500">
            Foire Aux Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Trouvez les réponses aux questions les plus fréquemment posées.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          <div className="md:w-1/3 lg:w-1/4">
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Catégories
              </h3>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      const firstQuestion = frequentlyAskedQuestions.find(
                        (faq) => faq.category === cat
                      );
                      setOpenQuestion(firstQuestion?.question || null);
                    }}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-300
                      ${
                        activeCategory === cat
                          ? 'bg-green-600 text-white shadow-md'
                          : 'bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700'
                      }
                    `}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-2/3 lg:w-3/4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openQuestion === faq.question}
                  onClick={() =>
                    setOpenQuestion(
                      openQuestion === faq.question ? null : faq.question
                    )
                  }
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-gray-400">
                <HelpCircle size={48} className="mb-4" />
                <p className="text-xl">
                  Aucune question disponible pour cette catégorie.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
