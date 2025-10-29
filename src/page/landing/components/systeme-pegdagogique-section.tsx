import { motion } from "framer-motion";

type Pedag = {
  pourcentage?: string;
  title: string;
  description: string;
};
export const SystemePedagogiqueSection = () => {
  const pedag: Pedag[] = [
    {
      pourcentage: "40%",
      title: "Cours théoriques",
      description:
        "Acquisition des bases scientifiques et conceptuelles solide de chaque filière.",
    },
    {
      pourcentage: "25%",
      title: "Travaux pratiques et laboratoires",
      description: "Mise en application concrète des notions vues en cours.",
    },
    {
      pourcentage: "15%",
      title: "Stages et projets professionnels",
      description:
        "Immersion dans le monde du travail, projets de terrain et étude de cas réels.",
    },
    {
      pourcentage: "10%",
      title: "Evaluation continue",
      description:
        "Devoirs, présentations, mini-projets et contrôles réguliers.",
    },
    {
      pourcentage: "5%",
      title: "Ouverture et recherche",
      description:
        "Activités de recherche, innovations, conférences, et collaborations externes.",
    },
    {
      pourcentage: "5%",
      title: "Développement personnel & valeurs",
      description:
        "Formation humaine, éthique et sociale selon les valeurs Déhoniennes.",
    },
  ];
  return (
    <div
      id="systeme"
      className="bg-gradient-to-br w-full pb-20 from-white lg:from-gray-300/50 from-50% to-33% to-white dark:from-zinc-800 dark:lg:from-zinc-900 dark:to-zinc-800  dark:text-white transition-all duration-500"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
        className="w-full"
      >
        <h1 className="flex items-center justify-center md:text-5xl text-4xl font-bold text-green-700 transition-all duration-500 dark:text-green-700 text-center">
          SYSTEME PEDAGOGIQUE
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
        className="flex lg:flex-row flex-col gap-20 items-center justify-center flex-wrap mt-40 md:p-5 lg:gap-20 py-10 text-center"
      >
        {pedag.map((pedag, key) => (
          <div
            className="flex flex-col justify-center items-center w-full px-5 lg:w-1/3"
            key={key}
          >
            <h3 className="text-5xl font-bold text-green-700 dark:text-white pb-5">
              {pedag.pourcentage}
            </h3>
            <h3 className="text-3xl font-bold text-gray-700 dark:text-white pb-2">
              {pedag.title}
            </h3>
            <p className="text-center">{pedag.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
