import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const categoriesQuestion = ["Générale", "Enseignement", "Inscription", "Autres"];

export const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState("Générale");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [faqs, setFaqs] = useState<FaqItem[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/faqs")
      .then((res) => {
        setFaqs(res.data.data.map((item: any) => ({
          id: item.id,
          question: item.attributes.question,
          answer: item.attributes.answer,
          category: item.attributes.category
        })));
      })
      .catch((err) => console.error("Erreur de récupération:", err));
  }, []);

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section id="FAQ" className="bg-white dark:bg-zinc-900 transition-all duration-500">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
        className="flex flex-col w-screen px-10 md:px-20 py-20 text-gray-800 dark:text-gray-200"
      >
        <h1 className="text-5xl text-green-700 font-extrabold text-center mb-16">
          Foire Aux Questions
        </h1>

        <div className="flex flex-col md:flex-row items-start justify-center gap-16 max-w-6xl mx-auto">
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
                    ? "text-green-600 bg-green-100 dark:bg-green-950 shadow-md"
                    : "text-gray-500 hover:text-zinc-900 hover:bg-gray-100 dark:hover:text-zinc-400 dark:hover:bg-zinc-950"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex border flex-col flex-1 p-10 bg-gray-100 dark:bg-zinc-900 rounded-xl gap-6 min-h-[300px] overflow-y-scroll">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => (
                <div key={faq.id} className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-500">
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
                        openQuestion === faq.question
                          ? "rotate-180 text-green-600"
                          : "text-zinc-500"
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
      </motion.div>
    </section>
  );
};
