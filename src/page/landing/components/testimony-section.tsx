import Image from "@/assets/Logo/asja-logo.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useState } from "react";

import ainaImage from "@/assets/Aina-Arthur-quality.jpg";
import genciaImage from "@/assets/RANDRIAMANAPAKA-Manantena-Jencia.jpg";
import safidyImage from "@/assets/Safidy-pic.jpg";

type Temoin = {
  name: string;
  status?: string;
  description: string;
  image?: string;
};

export const TestimonySection = () => {
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const temoin: Temoin[] = [
    {
      name: "RAHARIJESY Safidy",
      status: "UI/UX Designer",
      description:
        "Mon parcours, de la formation en informatique à la spécialisation en UI/UX Design, m'a doté de l'expertise technique et de la vision créative nécessaires pour aujourd'hui, en tant qu'entrepreneur, aider les marques à s'exprimer pleinement.",
      image: safidyImage,
    },
    {
      name: "RANDRIAMANAPAKA Manantena Toditsara Jencia",
      status: "Etudiante en Droit",
      description:
        "Stages aux Ministères (Affaires Étrangères, Fonction Publique): l'ASJA a nourri mon expertise publique et mon leadership.",
      image: genciaImage,
    },
    {
      name: "Aina Arthur",
      status: "Sortant en droit",
      description:
        "L' ASJA m'a aidé à trouver mon parcours professionnel. Les cours de l'ASJA ont permis de me perfectionner et de me faire confiance.",
      image: ainaImage,
    },
    {
      name: "Paul Rakotondrabe",
      description:
        "Formation excellente qui m’a permis de lancer ma propre startup tech. Les compétences acquises à ASJA sont directement applicables dans le monde professionnel.",
    },
    {
      name: "Sarah Randrianarisoa",
      description:
        "La formation à ASJA m’a permis de découvrir ma passion pour la cybersécurité. Aujourd’hui, je travaille comme analyste sécurité dans une entreprise locale. Les cours pratiques m’ont énormément aidée à progresser rapidement.",
    },
  ];
  return (
    <section
      id="temoignages"
      className="bg-zinc-100 dark:bg-zinc-900 h-full transition-all duration-500 py-5 "
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
        className="flex flex-col items-center justify-center"
      >
        <h1 className="md:text-5xl text-4xl font-bold text-green-700 md:py-10 py-6">
          Témoignage
        </h1>
        <Carousel
          opts={{
            align: "start",
          }}
          setApi={(api) => {
            if (!api) return;
            setCount(api.scrollSnapList().length);
            setCurrent(api.selectedScrollSnap());
            api.on("select", () => setCurrent(api.selectedScrollSnap()));
          }}
          className="w-full px-2 md:px-0 lg:max-w-2/3 md:max-w-2/3 "
        >
          <CarouselContent>
            {temoin.map((temoin, key) => (
              <CarouselItem key={key} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="dark:bg-zinc-800 transition-all m-10duration-500 h-120">
                    <CardContent className="flex h-full flex-col aspect-square items-center justify-center ">
                      <div className="flex h-40 w-40 justify-center items-center overflow-hidden">
                        <img
                          className="rounded-[50%] w-full h-full border-2 object-cover"
                          src={temoin.image ? temoin.image : Image}
                          alt={temoin.name}
                        />
                      </div>
                      <div className="text-center mt-2">
                        <h3 className="text-lg font-semibold pb-2">
                          {temoin.name}
                        </h3>
                        <p className="text-sm text-gray-500 pb-2">
                          {temoin.status}
                        </p>
                        <p className="px-2 lg:text-sm/relaxed pt-1/2">{temoin.description}</p>
                      </div>
                    </CardContent>
                  </Card>
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
              onClick={() => setCurrent(index)}
              className={`size-3 rounded-full transition-colors ${index === current ? "bg-green-700 dark:bg-white" : "bg-zinc-400"}`}
            ></button>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
