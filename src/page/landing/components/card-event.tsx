import type { EventDto } from '@/features/strapi/event.dto';
import { motion } from 'framer-motion';
import { useLandingContext } from '../bloc/useLandingContext';

import annivImage from '@/assets/Image-evenement/Dehons_day/event-dehons_day .jpg';
import dehonsImage from '@/assets/Image-evenement/Dehons_day/event-dehons_day2.jpg';
import gennrosso from '@/assets/Image-evenement/event-genrosso.jpg';

export const CardEventSection = () => {
  const { event } = useLandingContext();

  const eventDefault: EventDto[] = [
    {
      title: "Dehon's Day",
      description: 'ajsdnaksjdnajksndjaksndkasndjakdsnask',
      imageUrl: dehonsImage,
      altText: " Dehons'S Day",
    },
    {
      title: '25ème anniversaire',
      description: '',
      imageUrl: annivImage,
      altText: '25ème anniversaire',
    },

    {
      title: 'Gennrosso',
      description: '',
      imageUrl: gennrosso,
      altText: 'Gennrosso',
    },
  ];

  const eventList = event.length == 0 ? eventDefault : event;

  return (
    <div className="flex flex-col z-20 site-container w-full space-y-20 text-gray-800 transition-all duration-500 dark:text-gray-300 md:space-y-24 lg:space-y-32 ">
      {eventList.map((item, index) => (
        <motion.div
          initial={{ x: (-1) ** index * 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.2, once: true }}
          className=" flex flex-col-reverse md:flex-row md:items-center px-4 w-full"
        >
          <div className="md:w-1/2 md:pr-12 hidden md:flex flex-col">
            <h3 className="lg:text-5xl md:text-4xl text-3xl mb-4 text-green-700 transition-all duration-500 dark:text-amber-100">
              {item.title}
            </h3>
            <p className="text-lg">{item.description}</p>
          </div>
          <div className="md:w-1/2">
            <div className="md:w-1/2 md:pr-12 pb-5 md:hidden">
              <h3 className="lg:text-5xl md:text-4xl text-3xl mb-4 text-green-700 transition-all duration-500 dark:text-amber-100">
                {item.title}
              </h3>
              <p className="text-lg">{item.description}</p>
              <p className="mt-4 text-lg ">{item.description}</p>
            </div>
            <img
              className="rounded-lg w-full h-64 md:h-80 lg:h-96 object-cover"
              src={item.imageUrl}
              alt={item.altText}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
