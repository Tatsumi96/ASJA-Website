import Image from '@/assets/Image-evenement/event-diplome_master-quality.jpg';
import Image2 from '@/assets/Lieu_espace/Bibliotheque-quality.jpg';
import { motion } from 'framer-motion';

interface MissionCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  delay: number;
}

const MissionCard = ({
  title,
  description,
  image,
  alt,
  delay,
}: MissionCardProps) => {
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, delay, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
    >
      <div className="relative h-64 w-full">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-500">
          {title}
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export const MissionSection = () => {
  const missions = [
    {
      title: 'Notre Mission',
      description:
        "L'Athénée Saint Joseph Antsirabe (ASJA) fonde son projet éducatif sur l'excellence académique, la discipline, la foi et l'engagement social. Sa mission est d'offrir une formation complète (savoir, savoir-faire, savoir-être) en alliant rigueur, solidarité et créativité.",
      image: Image,
      alt: "Étudiants diplômés de master de l'ASJA en toge",
    },
    {
      title: 'Notre Objectif',
      description:
        'Notre vision pour une université moderne et ancrée nationalement repose sur six piliers : assurer une formation de haut niveau adaptée au marché du travail et à la mondialisation ; encourager la recherche scientifique et l\'innovation au service du développement ; développer les compétences des étudiants via des stages et des projets concrets.',
      image: Image2,
      alt: "Bibliothèque de l'université ASJA avec des étudiants",
    },
  ];

  return (
    <div
      id="mission"
      className="py-16 md:py-24 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ amount: 0.2, once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-green-700 dark:text-green-500 font-bold text-4xl md:text-5xl">
            Notre Engagement Éducatif
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            Former des esprits brillants et des citoyens responsables, prêts à
            relever les défis de demain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {missions.map((mission, index) => (
            <MissionCard key={index} {...mission} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </div>
  );
};
