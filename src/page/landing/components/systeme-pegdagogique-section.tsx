import { motion } from "framer-motion";

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
      className="bg-gradient-to-br w-full pb-20 from-white lg:from-gray-300/50 from-50% to-33% to-white dark:from-zinc-800 dark:to-zinc-800  dark:text-white transition-all duration-500"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
        className="w-full"
      >
        <h1 className="md:text-5xl text-4xl font-bold text-green-700 transition-all duration-500 dark:text-green-700 text-center pb-30">
          SYSTEME PEDAGOGIQUE
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
        className="flex lg:flex-row flex-col items-center justify-center flex-wrap md:p-5 lg:gap-20 py-10 text-center"
      >
        {pedag.map((pedag, key) => (
          <div
            className="flex flex-col justify-center items-center w-full px-5 lg:w-1/3"
            key={key}
          >
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
