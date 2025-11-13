import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

export interface MentionDiapoProps {
  altText: string;
  image: string;
}

export const MentionDiapo = ({ props }: { props: MentionDiapoProps[] }) => {
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
    <div className="w-full py-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
        className="w-full max-w-4xl mx-auto px-4"
      >
        <CarouselContent>
          {props.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
              <div className="p-1">
                <div className="relative aspect-video md:aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={item.image}
                    alt={item.altText}
                    className="w-full h-full object-cover select-none"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
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
    </div>
  );
};
