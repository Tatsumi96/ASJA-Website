import { motion } from 'framer-motion';

import Image from '@/assets/Image-evenement/event-diplome_master.jpg';
import Image2 from '@/assets/Lieu_espace/Bibliotheque.jpg';
import { useLangue } from '@/page/lang/useLang';

export const MissionSection = () => {
  const { translate } = useLangue();

  return (
    <div
      id="mission"
      className="min-h-screen lg:flex lg:flex-row  flex flex-col mt-100 lg:py-20 lg:gap-40 lg:mt-0 md:pt-0 justify-center items-center w-full transition-all duration-500  bg-white dark:bg-zinc-900 text-gray-800 "
    >
      <div className=" lg:hidden flex-col justify-center py-10 px-5 lg:w-1/2 transition-all duration-500 bg-white dark:bg-zinc-900 ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.2, once: true }}
          className="w-screen px-5 bg-white dark:bg-zinc-900"
        >
          <h1 className="text-4xl lg:text-6xl text-green-700 mb-10 font-semibold">
            Athénée Saint Joseph Antsirabe
          </h1>
          <p className="lg:text-2xl transition-all duration-500 dark:text-white text-xl">
            {translate('descriptionSection.description')}
          </p>
          <div className="flex lg:justify-start justify-center items-center pt-10">
            <button className="bg-green-800 hover:bg-green-900 cursor-pointer hover:scale-105 duration-300 rounded-full">
              <a
                href="/about"
                className="text-white font-bold lg:text-lg text-sm flex gap-3 justify-center items-center md:px-6 md:py-3 py-2 px-4"
              >
                {translate('descriptionSection.ensavoirplus')}
              </a>
            </button>
          </div>
        </motion.div>
      </div>
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
              {translate('missionSection.missiontitle')}
            </h1>
            <p className="text-lg max-w-150 transition-all duration-500 dark:text-white">
              {translate('missionSection.mission')}
            </p>
          </div>
          <img src={Image} className="rounded-lg lg:w-150 lg:h-100" />
          <div className=" hidden lg:flex lg:flex-col">
            <h1 className="flex text-4xl font-bold text-green-700 dark:text-amber-100 py-5">
              {translate('missionSection.missiontitle')}
            </h1>
            <p className="text-lg max-w-150 transition-all duration-500 dark:text-white">
              {translate('missionSection.mission')}
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
            {translate('missionSection.objectifTitle')}
          </h1>
          <p className="text-lg max-w-150 transition-all duration-500 dark:text-white text-wrap">
            {translate('missionSection.objectif')}
          </p>
        </div>

        <img src={Image2} alt="" className="rounded-lg lg:w-150 lg:h-100" />
      </motion.div>
    </div>
  );
};
