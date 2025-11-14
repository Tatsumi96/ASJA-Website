import annivImage from '@/assets/Image-evenement/25ans.jpg';
import dehonsImage from '@/assets/Image-evenement/Dehons_day/event-dehons_day.jpg';
import type { EventDto } from '@/features/strapi/event.dto';
import { easeOut, motion } from 'framer-motion';
import { useLandingContext } from '../bloc/useLandingContext';

const EventCard = ({
  item,
  isReversed,
}: {
  item: EventDto;
  isReversed: boolean;
}) => {
  const cardVariants = {
    hidden: { x: isReversed ? 100 : -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: easeOut },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={`flex flex-col md:flex-row items-center gap-8 lg:gap-12 ${
        isReversed ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="md:w-1/2 w-full">
        <div className="relative rounded-xl overflow-hidden shadow-2xl group transform hover:scale-105 transition-transform duration-500">
          <img
            src={item.imageUrl}
            alt={item.altText}
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      </div>

      <div className="md:w-1/2 w-full">
        <div className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-700">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-green-700 dark:text-green-500">
            {item.title}
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const CardEventSection = () => {
  const { event } = useLandingContext();

  const eventDefault: EventDto[] = [
    {
      title: "Dehon's Day",
      description:
        "Le Dehon's Day est l'un des événements phares de l'ASJA. C'est un moment fort de recueillement et de prière, mais aussi une occasion unique pour nos étudiants de démontrer la richesse de leurs talents à travers une grande diversité d'animations et de prestations.",
      imageUrl: dehonsImage,
      altText: "Dehons'S Day",
    },
    {
      title: '25ème anniversaire',
      description:
        "L'ASJA célèbre fièrement ses 25 ans ! Née en 2000, notre institution est restée un pilier de l'enseignement supérieur, évoluant sans cesse pour intégrer de nouvelles innovations. Cette longévité est le gage de notre fiabilité et la raison pour laquelle les étudiants continuent de nous accorder leur confiance.",
      imageUrl: annivImage,
      altText: '25ème anniversaire',
    },
  ];

  const eventList = event.length === 0 ? eventDefault : event;

  return (
    <div className="container mx-auto px-4 space-y-20 md:space-y-24 lg:space-y-32">
      {eventList.map((item, index) => (
        <EventCard key={index} item={item} isReversed={index % 2 !== 0} />
      ))}
    </div>
  );
};
