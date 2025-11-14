import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import ainaImage from '@/assets/Aina-Arthur-quality.jpg';
import Michou from '@/assets/Bouchet_Michou_Diana.jpeg';
import Raoul from '@/assets/DADARE-Raoul.jpg';
import Falihery from '@/assets/Falihery.jpg';
import Miarotiana from '@/assets/Mandimbiharison_Miarotiana.jpeg';
import RAJEMISON from '@/assets/RAJEMISON-Steffy-Jachia.jpg';
import steffy from '@/assets/Rajemson-suziah-jaida.jpg';
import genciaImage from '@/assets/RANDRIAMANAPAKA-Manantena-Jencia.jpg';
import safidyImage from '@/assets/Safidy-pic.jpg';
import Sitraka from '@/assets/Sitraka.jpg';

type Temoin = {
  name: string;
  status?: string;
  description: string;
  image?: string;
};

const temoignages: Temoin[] = [
  {
    name: 'Raharijesy Safidy',
    status: 'UI/UX Designer',
    description:
      "Mon parcours, de la formation en informatique à la spécialisation en UI/UX Design, m'a doté de l'expertise technique et de la vision créative nécessaires pour aujourd'hui, en tant qu'entrepreneur, aider les marques à s'exprimer pleinement.",
    image: safidyImage,
  },
  {
    name: 'Randiambolasoa Andriatsilavo Falihery',
    status: 'Génie Industriel',
    description:
      'La formation à ASJA m’a permis de découvrir ma passion pour la cybersécurité. Aujourd’hui, je travaille comme analyste sécurité dans une entreprise locale. Les cours pratiques m’ont énormément aidée à progresser rapidement.',
    image: Falihery,
  },
  {
    name: 'Randriamanapaka Manantena Toditsara Jencia',
    status: 'Étudiante en Droit',
    description:
      "Stages aux Ministères (Affaires Étrangères, Fonction Publique): l'ASJA a nourri mon expertise publique et mon leadership.",
    image: genciaImage,
  },
  {
    name: 'Bouchet Michou Diana',
    status: 'Étudiante en Science de la Terre',
    description:
      "Mes études à l'ASJA m'ont permis d'explorer ma passion pour les sciences de la terre. Les cours pratiques et les sorties sur le terrain ont enrichi ma compréhension des enjeux environnementaux et géologiques.",
    image: Michou,
  },
  {
    name: 'Dadare Raoul',
    status: 'Étudiant en Langue Étrangère Appliquée',
    description:
      "Ma formation en Langue Étrangère Appliquée à l'ASJA m'a ouvert les portes du monde professionnel international. J'ai développé des compétences linguistiques et interculturelles essentielles pour ma carrière.",
    image: Raoul,
  },
  {
    name: 'Razanato Nambinintsoa Sitraka',
    status: 'Ingénieure Agronome',
    description:
      "Mes études à l'ASJA ont confirmé que l'Agronomie ne se limite pas juste à cultiver, mais englobe aussi le commerce, la gestion, le marketing, la qualité et l'environnement.",
    image: Sitraka,
  },
  {
    name: 'Aina Arthur',
    status: 'Sortant en Droit Processuel',
    description:
      "L'ASJA m'a aidé à trouver mon parcours professionnel. Les cours de droit des affaires ont été particulièrement pertinents et m'ont permis de me perfectionner et de prendre confiance en mes capacités.",
    image: ainaImage,
  },
  {
    name: 'Mandimbiharison Miarotiana',
    status: 'Étudiant en Langue Étrangère Appliquée',
    description:
      "Grâce à ma formation en Langue Étrangère Appliquée à l'ASJA, j'ai pu développer une expertise linguistique et une ouverture culturelle qui sont des atouts majeurs dans le monde globalisé d'aujourd'hui.",
    image: Miarotiana,
  },
  {
    name: 'RAJEMISON Steffy Jachia',
    status: 'Étudiante en Économie',
    description:
      "Mon parcours en économie à l'ASJA m'a fourni une base solide pour comprendre les marchés financiers et les stratégies économiques. Je suis prête à relever les défis du monde des affaires.",
    image: steffy,
  },
  {
    name: 'RAJEMISON Suziah Jaida',
    status: 'Étudiante en Économie',
    description:
      "Mes études en économie à l'ASJA m'ont permis d'acquérir une compréhension approfondie des principes économiques et des marchés, me préparant ainsi à une carrière réussie dans la finance ou la gestion.",
    image: RAJEMISON,
  },
];

export const TestimonySection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', handleSelect);

    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  return (
    <section
      id="temoignages"
      className="bg-gray-50 dark:bg-zinc-900 py-20 sm:py-28"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-500">
            Témoignages
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez les parcours inspirants et les réussites de nos diplômés.
          </p>
        </motion.div>

        <Carousel
          setApi={setApi}
          opts={{ align: 'start', loop: true }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {temoignages.map((temoin, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full p-1">
                  <Card className="flex flex-col h-full bg-white dark:bg-zinc-800 shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <CardContent className="p-8 flex flex-col items-center text-center flex-grow">
                      <img
                        className="rounded-full w-32 h-32 object-cover border-4 border-white dark:border-zinc-700 shadow-md mb-5"
                        src={temoin.image}
                        alt={`Photo de ${temoin.name}`}
                        width={128}
                        height={128}
                      />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {temoin.name}
                      </h3>
                      <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-4">
                        {temoin.status}
                      </p>
                      <blockquote className="text-gray-600 dark:text-gray-300 text-base leading-relaxed flex-grow italic">
                        <span className="text-4xl text-gray-300 dark:text-gray-600 leading-none mr-1">
                          “
                        </span>
                        {temoin.description}
                        <span className="text-4xl text-gray-300 dark:text-gray-600 leading-none ml-1">
                          ”
                        </span>
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? 'w-6 bg-green-600'
                  : 'w-2 bg-gray-300 dark:bg-zinc-600'
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
