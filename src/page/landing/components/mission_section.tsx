import { motion } from "framer-motion";

import Image from "@/assets/Image-evenement/event-diplome_master.jpg";
import Image2 from "@/assets/Lieu_espace/Bibliotheque.jpg";

export const MissionSection = () => {
  return (

    <>
      <div className="flex flex-wrap justify-center items-center w-full h-screen bg-gray-50 text-gray-800 z-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-col w-1/2 p-20"
        >
          <img src={Image} className="flex-1/2 px-10" />
          <h1 className="flex text-4xl font-bold text-green-700 px-10 py-5">
            Notre Mission
          </h1>
          <p className="text-lg px-10 pb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-col w-1/2"
        >
          <h1 className="text-4xl font-bold text-green-700 px-10 py-5">
            Notre Objectif
          </h1>
          <p className="text-lg px-10 pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img src={Image2} alt="" className="flex-1/2 px-10" />
        </motion.div>
      </div>
    </>
  );
};
