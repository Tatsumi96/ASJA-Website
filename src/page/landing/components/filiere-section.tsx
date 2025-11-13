import Image2 from '@/assets/AGROLOGO-quality.png';
import Dark from '@/assets/AGROLOGODARK-quality.png';
import Image3 from '@/assets/DROITLOGO-quality.png';
import Dark3 from '@/assets/DROITLOGODARK.png';
import Image6 from '@/assets/ECOLOGO-quality.png';
import Dark6 from '@/assets/ECOLOGODARK-quality.png';
import Image from '@/assets/INFOLOGO-quality.png';
import Dark2 from '@/assets/INFOLOGODARK.png';
import Dark5 from '@/assets/LCLOGODARK-quality.png';
import Image5 from '@/assets/LEALOGO.png';
import Image4 from '@/assets/STLOGO-quality.png';
import Dark4 from '@/assets/STLOGODARK-quality.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useThemeContext } from '@/page/theme/useThemeContext';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';

interface ItemProps {
  mention: string;
  image: string;
  darkImage: string;
  link: string;
}

const filieres: ItemProps[] = [
  {
    mention: 'SCIENCES AGRONOMIQUES',
    image: Image2,
    darkImage: Dark,
    link: '/mention/agronomie',
  },
  {
    mention: 'INFORMATIQUE',
    image: Image,
    darkImage: Dark2,
    link: '/mention/informatique',
  },
  { mention: 'DROIT', image: Image3, darkImage: Dark3, link: '/mention/droit' },
  {
    mention: 'SCIENCES DE LA TERRE',
    image: Image4,
    darkImage: Dark4,
    link: '/mention/science-de-la-terre',
  },
  {
    mention: 'LANGUES ETRANGERES APPLIQUEES',
    image: Image5,
    darkImage: Dark5,
    link: '/mention/langue-etrangere-applique',
  },
  {
    mention: 'ECONOMIE ET COMMERCE',
    image: Image6,
    darkImage: Dark6,
    link: '/mention/economie',
  },
];

const ItemCard: React.FC<Omit<ItemProps, 'link'> & { isDark: boolean }> = ({
  mention,
  image,
  darkImage,
  isDark,
}) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
      <img
        className=" object-cover"
        src={isDark ? darkImage : image}
        alt={mention}
      />
    </div>
  );
};

export const FiliereSection = () => {
  const { isDark } = useThemeContext();

  return (
    <div
      id="filiere"
      className="py-16 bg-gray-100 dark:bg-zinc-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ amount: 0.2, once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-green-700 dark:text-green-500 font-bold text-4xl md:text-5xl">
            NOS MENTIONS
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            L'ASJA propose 6 domaines de formations pour préparer les leaders de
            demain.
          </p>
        </motion.div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filieres.map((filiere, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              viewport={{ amount: 0.2, once: true }}
              onClick={() => (window.location.href = filiere.link)}
              className="cursor-pointer"
            >
              <ItemCard {...filiere} isDark={isDark} />
            </motion.div>
          ))}
        </div>

        <div className="md:hidden">
          <FiliereSectionCarousel isDark={isDark} />
        </div>
      </div>
    </div>
  );
};

const FiliereSectionCarousel = ({ isDark }: { isDark: boolean }) => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const updateCarouselState = useCallback(() => {
    if (api) {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    }
  }, [api]);

  useEffect(() => {
    if (!api) return;

    updateCarouselState();
    api.on('select', updateCarouselState);
    api.on('reInit', updateCarouselState);

    return () => {
      api.off('select', updateCarouselState);
    };
  }, [api, updateCarouselState]);

  return (
    <>
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
        opts={{
          loop: true,
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {filieres.map((filiere, index) => (
            <CarouselItem
              key={index}
              onClick={() => (window.location.href = filiere.link)}
            >
              <div className="p-1">
                <ItemCard {...filiere} isDark={isDark} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center items-center mt-6 space-x-3">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? 'w-6 bg-green-600 dark:bg-green-500'
                : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};
