import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

type Pedag = {
  pourcentage: number;
  title: string;
  description: string;
};

export const SystemePedagogiqueSection = () => {
  const [percentages, setPercentages] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const animationRef = useRef<boolean>(false);

  const pedag: Pedag[] = [
    {
      pourcentage: 40,
      title: "Cours théoriques",
      description:
        "Acquisition des bases scientifiques et conceptuelles solide de chaque filière.",
    },
    {
      pourcentage: 25,
      title: "Travaux pratiques et laboratoires",
      description: "Mise en application concrète des notions vues en cours.",
    },
    {
      pourcentage: 15,
      title: "Stages et projets professionnels",
      description:
        "Immersion dans le monde du travail, projets de terrain et étude de cas réels.",
    },
    {
      pourcentage: 10,
      title: "Evaluation continue",
      description:
        "Devoirs, présentations, mini-projets et contrôles réguliers.",
    },
    {
      pourcentage: 5,
      title: "Ouverture et recherche",
      description:
        "Activités de recherche, innovations, conférences, et collaborations externes.",
    },
    {
      pourcentage: 5,
      title: "Développement personnel & valeurs",
      description:
        "Formation humaine, éthique et sociale selon les valeurs Déhoniennes.",
    },
  ];

  const startCounterAnimation = () => {
    if (animationRef.current) return;
    animationRef.current = true;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timers: number[] = [];

    pedag.forEach((item, index) => {
      let currentStep = 0;
      const targetValue = item.pourcentage;
      const stepSize = targetValue / steps;

      const timer = window.setInterval(() => {
        currentStep++;
        const newValue = Math.min(
          Math.round(stepSize * currentStep),
          targetValue
        );

        setPercentages((prev) => {
          const newPercentages = [...prev];
          newPercentages[index] = newValue;
          return newPercentages;
        });

        if (currentStep >= steps) {
          window.clearInterval(timer);
          if (index === pedag.length - 1) {
            setHasAnimated(true);
          }
        }
      }, interval);

      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => window.clearInterval(timer));
    };
  };

  const observerRef = useIntersectionObserver(
    () => {
      if (!hasAnimated && !animationRef.current) {
        startCounterAnimation();
      }
    },
    {
      threshold: 0.2,
      rootMargin: "50px",
    }
  );

  return (
    <div
      ref={observerRef}
      id="systeme"
      className="bg-gradient-to-br w-full pb-15 from-white lg:from-gray-300/50 from-50% to-33% to-white dark:from-zinc-800 dark:lg:from-zinc-900 dark:to-zinc-800 dark:text-white transition-all duration-500"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2, once: true }}
        className="w-full"
      >
        <h1 className="flex justify-center items-center pt-15 pb-5 text-3xl font-bold text-green-700 dark:text-white lg:text-5xl">
          SYSTEME PEDAGOGIQUE
        </h1>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ amount: 0.1, once: true }}
        className="flex lg:flex-row flex-col gap-20 items-center justify-center flex-wrap md:p-5 lg:gap-20 text-center"
      >
        {pedag.map((item, index) => (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center w-full px-5 lg:w-1/3"
            key={index}
          >
            <h3 className="text-5xl font-bold text-green-700 pb-5">
              {percentages[index]}%
            </h3>
            <h3 className="text-3xl font-bold text-gray-700 dark:text-white pb-2">
              {item.title}
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
