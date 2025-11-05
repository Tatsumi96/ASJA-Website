import { motion } from "framer-motion";

import Image from "@/assets/Image-evenement/event-diplome_master.jpg";
import Image2 from "@/assets/Lieu_espace/Bibliotheque.jpg";

export const MissionSection = () => {
  return (
    <div
      id="mission"
      className="min-h-screen lg:flex lg:flex-row  flex flex-col mt-100 lg:py-20 lg:gap-40 lg:mt-0 md:pt-0 justify-center items-center w-full transition-all duration-500  bg-white dark:bg-zinc-900 text-gray-800 "
    >
      <div className="flex-col  bg-white dark:bg-zinc-900">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.2, once: true }}
          className="md:border h-max md:rounded-xl px-5 py-7"
        >
          <div className="md:hidden py-10 flex flex-col gap-5">
            <h1 className="flex text-4xl font-bold text-green-700 transition-all duration-500 dark:text-amber-100">
              Notre Mission
            </h1>
            <p className="text-lg max-w-150 transition-all duration-500 dark:text-white">
              L'Athénée Saint Joseph Antsirabe (ASJA) fonde son projet éducatif
              sur l'excellence académique, la discipline, la foi et l'engagement
              social. Sa mission est d'offrir une formation complète (savoir,
              savoir-faire, savoir-être) en alliant rigueur, solidarité et
              créativité.
            </p>
          </div>
          <img src={Image} className="rounded-lg lg:w-150 lg:h-100" />
          <div className=" hidden lg:flex lg:flex-col">
            <h1 className="flex text-4xl font-bold text-green-700 dark:text-amber-100 py-5">
              Notre Mission
            </h1>
            <p className="text-lg max-w-150 transition-all duration-500 dark:text-white">
              L'Athénée Saint Joseph Antsirabe (ASJA) fonde son projet éducatif
              sur l'excellence académique, la discipline, la foi et l'engagement
              social. Sa mission est d'offrir une formation complète (savoir,
              savoir-faire, savoir-être) en alliant rigueur, solidarité et
              créativité.
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
        className="md:border h-max md:rounded-xl px-5 py-7"
      >
        <div className="flex pb-5 flex-col gap-5">
          <h1 className="flex text-4xl font-bold text-green-700 transition-all duration-500 dark:text-amber-100">
            Notre Objectif
          </h1>
          <p className="text-lg max-w-150 transition-all duration-500 dark:text-white text-wrap">
            Notre vision pour une université moderne et ancrée nationalement
            repose sur six piliers : assurer une formation de haut niveau
            adaptée au marché du travail et à la mondialisation ; encourager la
            recherche scientifique et l'innovation au service du développement ;
            développer les compétences des étudiants via des stages et des
            projets concrets .
          </p>
        </div>

        <img src={Image2} alt="" className="rounded-lg lg:w-150 lg:h-100" />
      </motion.div>
    </div>
  );
};
