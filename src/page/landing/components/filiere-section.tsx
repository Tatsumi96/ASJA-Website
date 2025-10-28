import Image2 from "@/assets/Agro.jpg";
import Image3 from "@/assets/Droit.jpeg";
import Image6 from "@/assets/Eco.jpg";
import Image from "@/assets/GL.jpeg";
import Image5 from "@/assets/LC.webp";
import Image4 from "@/assets/St.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLangue } from "@/page/lang/useLang";
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
      className="flex-1/2 md:hover:scale-105 md:w-full rounded-2xl overflow-hidden duration-500 bg-white dark:bg-zinc-800 cursor-pointer border z-20"
    >
      <img className="w-full p-4 rounded-3xl" src={image} alt={mention} />
      <h2 className="px-5 py-5 text-2xl font-bold text-stone-500 dark:text-stone-200">
        {mention}
      </h2>
    </div>
  );
};

export const FiliereSection = () => {
  const { translate } = useLangue();

  return (
    <>
      <div
        id="filiere"
        className="hidden md:flex flex-col justify-center text-gray-800 items-center transition-all duration-500 w-full h-max dark:bg-zinc-900 bg-gray-100 pb-10 z-10"
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
            image={Image2}
            onClick={() => (window.location.href = "/agroPage")}
          />
          <Item
            mention="INFORMATIQUE"
            image={Image}
            onClick={() => (window.location.href = "/infoPage")}
          />
          <Item
            mention="DROIT"
            image={Image3}
            onClick={() => (window.location.href = "/droitPage")}
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
            image={Image4}
            onClick={() => (window.location.href = "/stPage")}
          />
          <Item
            mention="LANGUES ETRANGERES APPLIQUEES"
            image={Image5}
            onClick={() => (window.location.href = "/leaPage")}
          />
          <Item
            mention="ECONOMIE ET COMMERCE"
            image={Image6}
            onClick={() => (window.location.href = "/ecoPage")}
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
              mention={translate("filiereSection.AGRO.name")}
              image={Image2}
              onClick={() => (window.location.href = "/agroPage")}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Item
              mention={translate("filiereSection.INFO.name")}
              image={Image}
              onClick={() => (window.location.href = "/infoPage")}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Item
              mention={translate("filiereSection.DROIT.name")}
              image={Image3}
              onClick={() => (window.location.href = "/droitPage")}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Item
              mention={translate("filiereSection.ST.name")}
              image={Image4}
              onClick={() => (window.location.href = "/stPage")}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Item
              mention={translate("filiereSection.LEA.name")}
              image={Image5}
              onClick={() => (window.location.href = "/leaPage")}
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Item
              mention={translate("filiereSection.ECO.name")}
              image={Image6}
              onClick={() => (window.location.href = "/ecoPage")}
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
