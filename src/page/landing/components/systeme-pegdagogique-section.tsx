import { motion } from "framer-motion";
import { Apple } from "lucide-react";

type Pedag = {
  title: string;
  description: string;
};
export const SystemePedagogiqueSection = () => {
  const pedag: Pedag[] = [
    {
      title: "License 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "License 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Master 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Master 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div
      id="systeme"
      className="bg-white dark:bg-zinc-800  dark:text-white transition-all duration-500"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
        className="w-full  py-16 px-10"
      >
        <h1 className="text-5xl font-bold text-green-700 transition-all duration-500 dark:text-green-700 text-center mb-20">
          SYSTEME PEDAGOGIQUE
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
        className="flex lg:flex-row flex-col items-center justify-center flex-wrap p-5 gap-5 lg:gap-20 py-10 text-center"
      >
        {pedag.map((pedag, key) => (
          <div
            className="flex flex-col justify-center items-center w-100 lg:w-150"
            key={key}
          >
            <Apple />
            <h3 className="text-3xl font-bold text-gray-700 dark:text-white p-10">
              {pedag.title}
            </h3>
            <p className="text-start my-2">{pedag.description}</p>
            <p className="text-start my-2">{pedag.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
