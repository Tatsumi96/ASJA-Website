import { motion } from "framer-motion";
import backgroundImage from "@/assets/Lieu_espace/asja_couloir.jpg";
import { useLangue } from "@/page/lang/useLang";

export const Description = () => {
  const { translate } = useLangue();

  return (
    <section
      id="description"
      className="flex flex-col lg:flex-row bg-white dark:bg-zinc-900 transition-all duration-500 lg:h-screen w-full"
    >
      <div className=" md:flex-col lg:hidden md:pt-0 pt-18 fixed -z-10">
        <img
          className="h-100 md:h-full w-max object-cover "
          src={backgroundImage}
          alt=""
        />
      </div>
      <div className=" hidden lg:flex flex-col justify-center py-10 px-5 lg:w-1/2   relative top-80 lg:top-0">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.2, once: true }}
        >
          <h1 className="text-4xl dark:text-amber-100 lg:text-6xl transition-all duration-500 text-green-700 mb-10 font-semibold">
            Athénée Saint Joseph Antsirabe
          </h1>
          <p className="lg:text-2xl transition-all duration-500 text-xl">
           L’Athénée Saint Joseph Antsirabe est une université Catholique ouverte à tous les étudiants du pays entier et même les étrangers qui souhaitent bénéficier d’une formation d’excellence pour leurs études supérieures.
          </p>
          <div className="flex lg:justify-start justify-center items-center pt-10">
            <button className="bg-green-800 hover:bg-green-900 cursor-pointer hover:scale-105 duration-300 rounded-full">
              <a
                href="/about"
                className="text-white font-bold lg:text-lg text-sm flex gap-3 justify-center items-center md:px-6 md:py-3 py-2 px-4"
              >
                {translate("descriptionSection.ensavoirplus")} ➞{" "}
              </a>
            </button>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
        className="flex w-1/2 justify-end"
      >
        <div className="lg:flex md:flex-col justify-center hidden items-center pl-10 w-full bg-gray-200 transition-all duration-500 dark:bg-zinc-800 rounded-l-full">
          <img
            className="h-full w-max rounded-l-full object-cover "
            src={backgroundImage}
            alt=""
          />
        </div>
      </motion.div>
    </section>
  );
};
