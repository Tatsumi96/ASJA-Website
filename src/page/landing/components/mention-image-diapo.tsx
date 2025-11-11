import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

export interface MentionDiapoProps {
  altText: string;
  image: string;
}

export const MentionDiapo = ({ props }: { props: MentionDiapoProps[] }) => {
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [api, setApi] = useState<any>(null);

  // Défilement automatique toutes les 2 secondes
  useEffect(() => {
    if (!api || props.length <= 1) return;

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() === props.length - 1) {
        api.scrollTo(0); // Retour au début
      } else {
        api.scrollNext(); // Slide suivant
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [api, props.length]);

  return (
    <div className="flex flex-col justify-center items-center text-gray-800 transition-all duration-500 w-full bg-white dark:bg-zinc-900 pb-6 z-10">
      <Carousel
        opts={{
          align: 'start',
        }}
        setApi={(api) => {
          if (!api) return;
          setApi(api);
          setCount(api.scrollSnapList().length);
          setCurrent(api.selectedScrollSnap());
          api.on('select', () => setCurrent(api.selectedScrollSnap()));
        }}
        className="w-full px-5 md:px-0 lg:max-w-2/3 md:max-w-2/3"
      >
        <CarouselContent>
          {props.map((item, index) => (
            <CarouselItem key={index} className="md:px-10">
              <div className="aspect-video md:aspect-[16/9] flex items-center justify-center">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={item.image}
                  alt={item.altText}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              api?.scrollTo(index);
            }}
            className={`size-3 rounded-full transition-colors ${
              index === current ? 'bg-green-700 dark:bg-white' : 'bg-zinc-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
