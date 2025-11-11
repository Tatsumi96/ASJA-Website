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
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  // Défilement automatique avec inversion de direction
  useEffect(() => {
    if (!api || props.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      const currentIndex = api.selectedScrollSnap();

      if (direction === 'forward') {
        if (currentIndex === props.length - 1) {
          // Arrivé à la fin, on inverse la direction
          setDirection('backward');
          api.scrollTo(props.length - 2);
        } else {
          api.scrollNext();
        }
      } else {
        if (currentIndex === 0) {
          // Arrivé au début, on inverse la direction
          setDirection('forward');
          api.scrollTo(1);
        } else {
          api.scrollPrev();
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [api, props.length, isPaused, direction]);

  const handleInteractionStart = () => {
    setIsPaused(true);
  };

  const handleInteractionEnd = () => {
    // On remet en marche après un délai
    setTimeout(() => {
      setIsPaused(false);
    }, 3000); // 3 secondes après la fin de l'interaction
  };

  return (
    <div
      className="flex flex-col justify-center items-center text-gray-800 transition-all duration-500 w-full bg-white dark:bg-zinc-900 pb-6 z-10"
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
    >
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
            <CarouselItem
              key={index}
              className="md:px-10"
              onMouseDown={handleInteractionStart}
              onMouseUp={handleInteractionEnd}
              onTouchStart={handleInteractionStart}
              onTouchEnd={handleInteractionEnd}
            >
              <div
                className="aspect-video md:aspect-[16/9] flex items-center justify-center"
                onMouseDown={handleInteractionStart}
                onMouseUp={handleInteractionEnd}
              >
                <img
                  className="w-full h-full object-cover rounded-2xl select-none"
                  src={item.image}
                  alt={item.altText}
                  draggable="false"
                  onMouseDown={handleInteractionStart}
                  onMouseUp={handleInteractionEnd}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          onClick={handleInteractionStart}
          onMouseUp={handleInteractionEnd}
        />
        <CarouselNext
          onClick={handleInteractionStart}
          onMouseUp={handleInteractionEnd}
        />
      </Carousel>
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              api?.scrollTo(index);
              handleInteractionStart();
              handleInteractionEnd();
            }}
            onMouseDown={handleInteractionStart}
            onMouseUp={handleInteractionEnd}
            className={`size-3 rounded-full transition-colors ${
              index === current ? 'bg-green-700 dark:bg-white' : 'bg-zinc-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
