import Image2 from "@/assets/AGROLOGO.png";
import Dark from "@/assets/AGROLOGODARK.png";
import Image3 from "@/assets/DROITLOGO.png";
import Dark3 from "@/assets/DROITLOGODARK.png";
import Image6 from "@/assets/ECOLOGO.png";
import Dark6 from "@/assets/ECOLOGODARK.png";
import Image from "@/assets/INFOLOGO.png";
import Dark2 from "@/assets/INFOLOGODARK.png";
import Dark5 from "@/assets/LCLOGODARK.png";
import Image5 from "@/assets/LEALOGO.png";
import Image4 from "@/assets/STLOGO.png";
import Dark4 from "@/assets/STLOGODARK.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLangue } from "@/page/lang/useLang";
import { useThemeContext } from "@/page/theme/useThemeContext";
import { motion } from "framer-motion";
import { useState } from "react";

interface ItemProps {
  mention: string;
  image: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Item: React.FC<ItemProps> = ({ mention, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="md:hover:scale-105 m-10 lg:m-0 md:m-0 rounded-2xl overflow-hidden duration-500 cursor-pointer z-20"
    >
      <img
        className="w-full lg:size-100  rounded-2xl"
        src={image}
        alt={mention}
      />
    </div>
  );
};

export const FiliereSection = () => {
  const { translate } = useLangue();
  const { isDark } = useThemeContext();

  return (
    <>
      <div
        id="filiere"
        className="hidden md:flex flex-col justify-center text-gray-800 items-center transition-all duration-500 w-full h-max dark:bg-zinc-800 bg-gray-200/75 pb-10 z-10"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.2, once: true }}
          className="flex items-center justify-center pt-10 flex-col"
        >
          <h1 className="flex text-center lg:text-start text-green-700 font-bold text-4xl">
            NOS MENTIONS
          </h1>
          <p className="flex lg:text-start text-lg transition-all duration-500 dark:text-white pt-5 ">
            L'ASJA propose 6 domaines de formations:
          </p>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.2, once: true }}
          className="flex justify-center items-center w-9/10 md:p-3 md:gap-20 gap-5 my-10 flex-col lg:flex-row md:flex-col "
        >
          <Item
            mention="SCIENCES AGRONOMIQUES"
            image={isDark ? Dark : Image2}
            onClick={() => (window.location.href = "/mention/agronomie")}
          />
          <Item
            mention="INFORMATIQUE"
            image={isDark ? Dark2 : Image}
            onClick={() => (window.location.href = "/mention/informatique")}
          />
          <Item
            mention="DROIT"
            image={isDark ? Dark3 : Image3}
            onClick={() => (window.location.href = "/mention/droit")}
          />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.2, once: true }}
          className="flex justify-center items-center w-9/10 md:p-3 md:gap-20 gap-5 flex-col lg:flex-row md:flex-col "
        >
          <Item
            mention={translate("filiereSection.ST.name")}
            image={isDark ? Dark4 : Image4}
            onClick={() =>
              (window.location.href = "/mention/science-de-la-terre")
            }
          />
          <Item
            mention="LANGUES ETRANGERES APPLIQUEES"
            image={isDark ? Dark5 : Image5}
            onClick={() =>
              (window.location.href = "/mention/langue-etrangere-applique")
            }
          />
          <Item
            mention="ECONOMIE ET COMMERCE"
            image={isDark ? Dark6 : Image6}
            onClick={() => (window.location.href = "/mention/economie")}
          />
        </motion.div>
      </div>
      <FiliereSectionCarousel />
    </>
  );
};

const FiliereSectionCarousel = () => {
  const { translate } = useLangue();
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const { isDark } = useThemeContext();

  return (
    <div className="flex flex-col md:hidden justify-center text-gray-800 items-center transition-all duration-500 w-full h-max dark:bg-zinc-900 bg-gray-100 pb-10 z-10">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
        className="flex items-center justify-center py-5 flex-col"
      >
        <h1 className="flex text-center lg:text-start text-green-700 font-bold text-4xl">
          NOS MENTIONS
        </h1>
        <p className="flex text-center lg:text-start text-lg transition-all duration-500 dark:text-white ">
          L'ASJA propose 6 domaines de formations
        </p>
      </motion.div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={(api) => {
          if (!api) return;
          setCount(api.scrollSnapList().length);
          setCurrent(api.selectedScrollSnap());
          api.on("select", () => setCurrent(api.selectedScrollSnap()));
        }}
        className="w-full px-2 md:px-0 lg:max-w-2/3 md:max-w-2/3 flex md:hidden "
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Item
              mention="SCIENCES AGRONOMIQUES"
              image={isDark ? Dark : Image2}
              onClick={() => (window.location.href = "/mention/agronomie")}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Item
              mention="INFORMATIQUE"
              image={isDark ? Dark2 : Image}
              onClick={() => (window.location.href = "/mention/informatique")}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Item
              mention="DROIT"
              image={isDark ? Dark3 : Image3}
              onClick={() => (window.location.href = "/mention/droit")}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Item
              mention={translate("filiereSection.ST.name")}
              image={isDark ? Dark4 : Image4}
              onClick={() =>
                (window.location.href = "/mention/science-de-la-terre")
              }
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Item
              mention="LANGUES ETRANGERES APPLIQUEES"
              image={isDark ? Dark5 : Image5}
              onClick={() =>
                (window.location.href = "/mention/langue-etrangere-applique")
              }
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Item
              mention="ECONOMIE ET COMMERCE"
              image={isDark ? Dark6 : Image6}
              onClick={() => (window.location.href = "/mention/economie")}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`size-3 rounded-full transition-colors ${index === current ? "bg-green-700 dark:bg-white" : "bg-zinc-400"}`}
          ></button>
        ))}
      </div>
    </div>
  );
};
