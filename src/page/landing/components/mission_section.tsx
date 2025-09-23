import { motion } from "framer-motion";

import Image from "@/assets/Image-evenement/event-diplome_master.jpg";
import Image2 from "@/assets/Lieu_espace/Bibliotheque.jpg";

export const MissionSection = () => {
  return (
    <div className=" lg:flex lg:flex-row  flex flex-col mt-100 lg:mt-0 md:pt-0 justify-center items-center w-full dark:bg-gray-950 bg-gray-50 text-gray-800 ">
      <div className="  lg:hidden flex-col justify-center py-10 px-5 lg:w-1/2 bg-white dark:bg-gray-900 ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl lg:text-6xl text-green-700 mb-10 font-semibold">
            Athénée Saint Joseph Antsirabe
          </h1>
          <p className="lg:text-2xl dark:text-white text-xl">
            Qui propose une formation d'excellence aux étudiants désireux de
            devenir les managers et décideurs de demain.
          </p>
          <div className="flex lg:justify-start justify-center items-center pt-10">
            <button className="bg-green-800 hover:bg-green-900 cursor-pointer hover:scale-105 duration-300 rounded-full">
              <a
                href="/about"
                className="text-white font-bold lg:text-lg text-sm flex gap-3 justify-center items-center md:px-6 md:py-3 py-2 px-4"
              >
                En savoir plus{" "}
              </a>
            </button>
          </div>
        </motion.div>
      </div>
      <div className="flex-col lg:w-1/2 lg:p-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="md:hidden px-5 py-10 flex flex-col gap-5">
            <h1 className="flex text-4xl font-bold text-green-700 ">
              Notre Mission
            </h1>
            <p className="text-lg dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <img src={Image} className="" />
          <div className=" hidden lg:flex lg:flex-col">
            <h1 className="flex text-4xl font-bold text-green-700 px-10 py-5">
              Notre Mission
            </h1>
            <p className="text-lg dark:text-white px-10 pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex-col lg:w-1/2"
      >
        <div className=" px-5 py-10 flex flex-col gap-5">
          <h1 className="text-4xl font-bold text-green-700 ">Notre Objectif</h1>
          <p className="text-lg dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <img src={Image2} alt="" className="lg:p-5" />
      </motion.div>
    </div>
  );
};
